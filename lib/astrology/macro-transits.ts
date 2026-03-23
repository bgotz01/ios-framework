// lib/astrology/macro-transits.ts
import swisseph from 'swisseph-v2';
import { DateTime } from 'luxon';
import { Planet, AspectType, ZodiacSign } from '@/types/astrology';
import { SWISSEPH_PLANETS, ASPECT_DEFINITIONS } from './constants';
import { longitudeToSign, angularDistance } from './utils';

export interface CurrentPlanetPosition {
    planet: Planet;
    longitude: number;
    sign: ZodiacSign;
    degree: number;
    minute: number;
    speed: number; // degrees per day
    isRetrograde: boolean;
    signEntry?: Date; // When planet entered current sign
    signExit?: Date; // When planet will leave current sign
}

export interface MacroAspect {
    planet1: Planet;
    planet2: Planet;
    aspectType: AspectType;
    orb: number;
    isApplying: boolean;
}

/**
 * Calculate current positions of all major planets
 */
export async function getCurrentPlanetaryPositions(date: Date = new Date()): Promise<CurrentPlanetPosition[]> {
    const positions: CurrentPlanetPosition[] = [];

    const utc = DateTime.fromJSDate(date).toUTC();
    const julianDay = swisseph.swe_julday(
        utc.year,
        utc.month,
        utc.day,
        utc.hour + utc.minute / 60.0 + utc.second / 3600.0,
        swisseph.SE_GREG_CAL
    );

    const planets = [
        Planet.Sun,
        Planet.Moon,
        Planet.Mercury,
        Planet.Venus,
        Planet.Mars,
        Planet.Jupiter,
        Planet.Saturn,
        Planet.Uranus,
        Planet.Neptune,
        Planet.Pluto,
        Planet.NorthNode
    ];

    for (const planet of planets) {
        try {
            const planetId = SWISSEPH_PLANETS[planet as keyof typeof SWISSEPH_PLANETS];
            if (planetId === undefined) continue;

            const result = swisseph.swe_calc_ut(julianDay, planetId, swisseph.SEFLG_SPEED);

            if ('error' in result && result.error) {
                console.warn(`Failed to calculate ${planet}:`, result.error);
                continue;
            }

            if ('longitude' in result && 'longitudeSpeed' in result) {
                const signInfo = longitudeToSign(result.longitude);

                const position: CurrentPlanetPosition = {
                    planet,
                    longitude: result.longitude,
                    sign: signInfo.sign,
                    degree: signInfo.degree,
                    minute: signInfo.minute,
                    speed: result.longitudeSpeed,
                    isRetrograde: result.longitudeSpeed < 0
                };

                // Calculate sign entry/exit dates for outer planets
                const outerPlanets = [Planet.Pluto, Planet.Neptune, Planet.Uranus, Planet.Saturn, Planet.Jupiter];
                if (outerPlanets.includes(planet)) {
                    const transitDates = await calculateSignTransitDates(planet, result.longitude, date);
                    position.signEntry = transitDates.entry;
                    position.signExit = transitDates.exit;
                }

                positions.push(position);
            }
        } catch (error) {
            console.warn(`Error calculating ${planet}:`, error);
        }
    }

    return positions;
}

/**
 * Calculate current aspects between planets
 */
export function calculateMacroAspects(positions: CurrentPlanetPosition[]): MacroAspect[] {
    const aspects: MacroAspect[] = [];

    const majorAspects = [
        AspectType.Conjunction,
        AspectType.Sextile,
        AspectType.Square,
        AspectType.Trine,
        AspectType.Opposition
    ];

    for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
            const pos1 = positions[i];
            const pos2 = positions[j];

            for (const aspectType of majorAspects) {
                const aspectAngle = ASPECT_DEFINITIONS[aspectType]?.angle;
                if (aspectAngle === undefined) continue;

                const angle = angularDistance(pos1.longitude, pos2.longitude);
                const orb = Math.abs(angle - aspectAngle);

                // Use standard orbs
                const maxOrb = getAspectOrb(aspectType);

                if (orb <= maxOrb) {
                    // Determine if applying or separating
                    const isApplying = isAspectApplying(pos1, pos2, aspectAngle);

                    aspects.push({
                        planet1: pos1.planet,
                        planet2: pos2.planet,
                        aspectType,
                        orb,
                        isApplying
                    });
                }
            }
        }
    }

    return aspects;
}

function getAspectOrb(aspectType: AspectType): number {
    const orbs: Record<AspectType, number> = {
        [AspectType.Conjunction]: 8,
        [AspectType.Opposition]: 8,
        [AspectType.Square]: 7,
        [AspectType.Trine]: 7,
        [AspectType.Sextile]: 6,
        [AspectType.Quincunx]: 3,
        [AspectType.Semisextile]: 2,
        [AspectType.Semisquare]: 2,
        [AspectType.Sesquisquare]: 2
    };
    return orbs[aspectType] || 3;
}

function isAspectApplying(pos1: CurrentPlanetPosition, pos2: CurrentPlanetPosition, targetAngle: number): boolean {
    // If both planets are moving in the same direction (both direct or both retrograde)
    // the faster one is applying to the slower one
    const relativeSpeed = pos1.speed - pos2.speed;
    const currentAngle = angularDistance(pos1.longitude, pos2.longitude);

    // If the angle is getting smaller, it's applying
    return (relativeSpeed > 0 && currentAngle < targetAngle) ||
        (relativeSpeed < 0 && currentAngle > targetAngle);
}

/**
 * Calculate when a planet entered its current sign (approximate)
 * Uses binary search to find the date
 */
function findSignEntry(planet: Planet, currentLongitude: number, currentDate: Date): Date | undefined {
    const currentSign = longitudeToSign(currentLongitude).sign;

    // Estimate how far back to search based on planet speed
    const searchDaysBack = getSearchDaysBack(planet);

    let startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - searchDaysBack);

    let endDate = new Date(currentDate);

    // Binary search for sign entry
    let iterations = 0;
    const maxIterations = 50;

    while (iterations < maxIterations) {
        const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

        const utc = DateTime.fromJSDate(midDate).toUTC();
        const julianDay = swisseph.swe_julday(
            utc.year,
            utc.month,
            utc.day,
            utc.hour + utc.minute / 60.0 + utc.second / 3600.0,
            swisseph.SE_GREG_CAL
        );

        const planetId = SWISSEPH_PLANETS[planet as keyof typeof SWISSEPH_PLANETS];
        if (planetId === undefined) return undefined;

        const result = swisseph.swe_calc_ut(julianDay, planetId, swisseph.SEFLG_SPEED);

        if ('error' in result || !('longitude' in result)) {
            return undefined;
        }

        const midSign = longitudeToSign(result.longitude).sign;

        if (midSign === currentSign) {
            endDate = midDate;
        } else {
            startDate = midDate;
        }

        // If we're within a day, we're close enough
        if (endDate.getTime() - startDate.getTime() < 86400000) {
            return endDate;
        }

        iterations++;
    }

    return endDate;
}

/**
 * Calculate when a planet will exit its current sign (approximate)
 * Uses binary search to find the date
 */
function findSignExit(planet: Planet, currentLongitude: number, currentDate: Date): Date | undefined {
    const currentSign = longitudeToSign(currentLongitude).sign;

    // Estimate how far forward to search based on planet speed
    const searchDaysForward = getSearchDaysForward(planet);

    let startDate = new Date(currentDate);
    let endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + searchDaysForward);

    // Binary search for sign exit
    let iterations = 0;
    const maxIterations = 50;

    while (iterations < maxIterations) {
        const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

        const utc = DateTime.fromJSDate(midDate).toUTC();
        const julianDay = swisseph.swe_julday(
            utc.year,
            utc.month,
            utc.day,
            utc.hour + utc.minute / 60.0 + utc.second / 3600.0,
            swisseph.SE_GREG_CAL
        );

        const planetId = SWISSEPH_PLANETS[planet as keyof typeof SWISSEPH_PLANETS];
        if (planetId === undefined) return undefined;

        const result = swisseph.swe_calc_ut(julianDay, planetId, swisseph.SEFLG_SPEED);

        if ('error' in result || !('longitude' in result)) {
            return undefined;
        }

        const midSign = longitudeToSign(result.longitude).sign;

        if (midSign === currentSign) {
            startDate = midDate;
        } else {
            endDate = midDate;
        }

        // If we're within a day, we're close enough
        if (endDate.getTime() - startDate.getTime() < 86400000) {
            return startDate;
        }

        iterations++;
    }

    return startDate;
}

/**
 * Get search range in days for finding sign entry
 */
function getSearchDaysBack(planet: Planet): number {
    const ranges: Record<string, number> = {
        [Planet.Pluto]: 365 * 25, // ~25 years
        [Planet.Neptune]: 365 * 15, // ~15 years
        [Planet.Uranus]: 365 * 8, // ~8 years
        [Planet.Saturn]: 365 * 3, // ~3 years
        [Planet.Jupiter]: 365 * 1.5, // ~1.5 years
    };
    return ranges[planet] || 365;
}

/**
 * Get search range in days for finding sign exit
 */
function getSearchDaysForward(planet: Planet): number {
    const ranges: Record<string, number> = {
        [Planet.Pluto]: 365 * 25, // ~25 years
        [Planet.Neptune]: 365 * 15, // ~15 years
        [Planet.Uranus]: 365 * 8, // ~8 years
        [Planet.Saturn]: 365 * 3, // ~3 years
        [Planet.Jupiter]: 365 * 1.5, // ~1.5 years
    };
    return ranges[planet] || 365;
}

/**
 * Calculate sign entry and exit dates for outer planets
 */
export async function calculateSignTransitDates(
    planet: Planet,
    currentLongitude: number,
    currentDate: Date
): Promise<{ entry?: Date; exit?: Date }> {
    // Only calculate for outer planets (they move slowly enough for this to be meaningful)
    const outerPlanets = [Planet.Pluto, Planet.Neptune, Planet.Uranus, Planet.Saturn, Planet.Jupiter];

    if (!outerPlanets.includes(planet)) {
        return {};
    }

    try {
        const entry = findSignEntry(planet, currentLongitude, currentDate);
        const exit = findSignExit(planet, currentLongitude, currentDate);

        return { entry, exit };
    } catch (error) {
        console.warn(`Error calculating transit dates for ${planet}:`, error);
        return {};
    }
}
