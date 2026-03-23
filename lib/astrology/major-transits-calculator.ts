//lib/astrology/major-transits-calculator.ts
import swisseph from 'swisseph-v2';
import { DateTime } from 'luxon';
import { Planet, AspectType, ZodiacSign, BirthChart } from '@/types/astrology';
import { SWISSEPH_PLANETS, ASPECT_DEFINITIONS } from './constants';
import { longitudeToSign, angularDistance } from './utils';

// Transit target can be a planet or an angle
export type TransitTarget = Planet | 'ASC' | 'MC' | 'IC' | 'DSC';

// Internal type for natal target points (normalized shape for both planets and angles)
type NatalTargetPoint = {
    planet: TransitTarget;
    longitude: number;
    sign: ZodiacSign;
    degree: number;
    minute: number;
};

// Helper to check if a target is an angle
function isAngle(target: TransitTarget): target is 'ASC' | 'MC' | 'IC' | 'DSC' {
    return target === 'ASC' || target === 'MC' || target === 'IC' || target === 'DSC';
}

/**
 * Get which houses a planet rules based on sign rulerships
 */
/**
 * Get which houses a planet rules based on sign rulerships
 */
function getPlanetRulerships(planet: TransitTarget, houses: { cusps: number[] }): number[] {
    // Skip if it's an angle, not a planet
    if (isAngle(planet)) {
        return [];
    }

    // Use Planet enum values as keys to avoid numeric enum issues
    const signRulerships: Partial<Record<Planet, string[]>> = {
        [Planet.Sun]: ['Leo'],
        [Planet.Moon]: ['Cancer'],
        [Planet.Mercury]: ['Gemini', 'Virgo'],
        [Planet.Venus]: ['Taurus', 'Libra'],
        [Planet.Mars]: ['Aries', 'Scorpio'],
        [Planet.Jupiter]: ['Sagittarius', 'Pisces'],
        [Planet.Saturn]: ['Capricorn', 'Aquarius'],
        [Planet.Uranus]: ['Aquarius'],
        [Planet.Neptune]: ['Pisces'],
        [Planet.Pluto]: ['Scorpio']
    };

    const ruledSigns = signRulerships[planet as Planet] ?? [];
    const ruledHouses: number[] = [];

    if (!houses?.cusps) return ruledHouses;

    const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
        'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

    houses.cusps.forEach((cusp, index) => {
        const signIndex = Math.floor(cusp / 30);
        const sign = signNames[signIndex];
        if (ruledSigns.includes(sign)) {
            ruledHouses.push(index + 1);
        }
    });

    return ruledHouses;
}

/**
 * Get which house a longitude falls in
 */
function getHouseForLongitude(longitude: number, houses: { cusps: number[] }): number {
    if (!houses?.cusps) return 1;

    for (let i = 0; i < 12; i++) {
        const currentCusp = houses.cusps[i];
        const nextCusp = houses.cusps[(i + 1) % 12];

        // Handle wrap-around at 360°
        if (nextCusp < currentCusp) {
            if (longitude >= currentCusp || longitude < nextCusp) {
                return i + 1;
            }
        } else {
            if (longitude >= currentCusp && longitude < nextCusp) {
                return i + 1;
            }
        }
    }

    return 1; // Default to 1st house
}

export interface MajorTransit {
    id: string;
    transitingPlanet: Planet;
    natalTarget: TransitTarget;  // Can be a planet or angle
    aspectType: AspectType;

    // Timing - the full transit period
    startDate: Date;        // When transit enters orb (MVP: estimated)
    exactDates: Date[];     // All exact hits (MVP: best sample only)
    endDate: Date;          // When transit leaves orb (MVP: estimated)

    // Geometry
    orb: number;            // Current orb (or orb at best sample if not active)
    orbMinutes: number;     // Orb in arc-minutes for precise sorting
    isApplying: boolean;    // MVP: always true; upgrade: calculate from orb direction

    // Context
    transitHouse?: number;      // Which house the transiting planet is in
    natalHouse?: number;        // Which house the natal target is in
    natalRulesHouses?: number[]; // Which houses the natal planet rules (empty for angles)

    // Classification
    status: 'completed' | 'active' | 'upcoming';
    touchesAngle?: 'ASC' | 'MC' | 'IC' | 'DSC';  // Set when natal target IS an angle (not when transit is in angular house)
    strengthScore: number;      // 0-100
    hitCount: number;           // Number of exact passes (MVP: always 1)

    // Display
    theme: string;
    significance: 'High' | 'Very High';
    duration: string;

    // Positions
    transitPosition: {
        longitude: number;
        sign: ZodiacSign;
        degree: number;
        minute: number;
    };
    natalPosition: {
        longitude: number;
        sign: ZodiacSign;
        degree: number;
        minute: number;
    };
}

export interface MajorTransitPeriods {
    completed: MajorTransit[];
    active: MajorTransit[];
    upcoming: MajorTransit[];
}

export interface MajorTransitOptions {
    natalChart: BirthChart;
    lookbackMonths?: number; // How far back to look for completed transits (default: 12)
    lookaheadMonths?: number; // How far ahead to look for upcoming transits (default: 24)
    includeJupiter?: boolean; // Whether to include Jupiter (default: false)
    includeNodes?: boolean; // Whether to include Lunar Nodes (default: false)
    includeSupportiveAspects?: boolean; // Whether to include trines (default: false)
}

/**
 * Calculate major life transits focusing on slow-moving planets and significant themes
 * 
 * CURRENT IMPLEMENTATION (MVP):
 * - Samples every 3 days and keeps the best orb hit per transit
 * - Estimates start/end dates based on fixed durations
 * - Single exact date per transit (doesn't track retrograde multi-pass)
 * - isApplying is always true (not calculated)
 * 
 * KNOWN LIMITATIONS:
 * - De-duplication throws away multiple occurrences of same transit
 * - Doesn't track actual enter/exact/leave orb events
 * - Misses retrograde triple-pass scenarios
 * - Start/end dates are estimates, not actual orb crossings
 * 
 * RECOMMENDED UPGRADES:
 * 1. Track periods properly: detect enter orb → exact(s) → leave orb
 * 2. Use adaptive sampling (coarse normally, fine when in orb)
 * 3. Interpolate exact dates between samples for precision
 * 4. Support multiple periods per transit key (for retrogrades)
 * 5. Calculate real isApplying based on orb shrinking/growing
 */
export async function calculateMajorTransits(options: MajorTransitOptions): Promise<MajorTransitPeriods> {
    const {
        natalChart,
        lookbackMonths = 12,
        lookaheadMonths = 24,
        includeJupiter = false,
        includeNodes = false,
        includeSupportiveAspects = false
    } = options;

    // Define major transiting planets (slow-moving, theme-creating)
    const majorPlanets: Planet[] = [
        Planet.Saturn,
        Planet.Uranus,
        Planet.Neptune,
        Planet.Pluto
    ];

    if (includeJupiter) {
        majorPlanets.push(Planet.Jupiter);
    }

    if (includeNodes) {
        majorPlanets.push(Planet.NorthNode);
    }

    // Define high-signal natal targets - normalize to consistent shape
    const majorNatalTargets: NatalTargetPoint[] = natalChart.planets
        .filter(p => [Planet.Sun, Planet.Moon].includes(p.planet as Planet))
        .map(p => {
            const signInfo = longitudeToSign(p.longitude);
            return {
                planet: p.planet as TransitTarget,
                longitude: p.longitude,
                sign: signInfo.sign,
                degree: signInfo.degree,
                minute: signInfo.minute
            };
        });

    // Add other meaningful natal planets
    const otherNatalTargets: NatalTargetPoint[] = natalChart.planets
        .filter(p => [Planet.Mercury, Planet.Venus, Planet.Mars].includes(p.planet as Planet))
        .map(p => {
            const signInfo = longitudeToSign(p.longitude);
            return {
                planet: p.planet as TransitTarget,
                longitude: p.longitude,
                sign: signInfo.sign,
                degree: signInfo.degree,
                minute: signInfo.minute
            };
        });

    // Add angles (Ascendant, Midheaven, IC, Descendant) as targets for transit calculations
    // Use standardized short names: ASC, MC, IC, DSC
    const angleTargets: NatalTargetPoint[] = [];

    if (natalChart.angles?.ascendant !== undefined) {
        const signInfo = longitudeToSign(natalChart.angles.ascendant);
        angleTargets.push({
            planet: 'ASC',
            longitude: natalChart.angles.ascendant,
            sign: signInfo.sign,
            degree: signInfo.degree,
            minute: signInfo.minute
        });
    }
    if (natalChart.angles?.midheaven !== undefined) {
        const signInfo = longitudeToSign(natalChart.angles.midheaven);
        angleTargets.push({
            planet: 'MC',
            longitude: natalChart.angles.midheaven,
            sign: signInfo.sign,
            degree: signInfo.degree,
            minute: signInfo.minute
        });
    }
    if (natalChart.angles?.imumCoeli !== undefined) {
        const signInfo = longitudeToSign(natalChart.angles.imumCoeli);
        angleTargets.push({
            planet: 'IC',
            longitude: natalChart.angles.imumCoeli,
            sign: signInfo.sign,
            degree: signInfo.degree,
            minute: signInfo.minute
        });
    }
    if (natalChart.angles?.descendant !== undefined) {
        const signInfo = longitudeToSign(natalChart.angles.descendant);
        angleTargets.push({
            planet: 'DSC',
            longitude: natalChart.angles.descendant,
            sign: signInfo.sign,
            degree: signInfo.degree,
            minute: signInfo.minute
        });
    }

    const allNatalTargets: NatalTargetPoint[] = [...majorNatalTargets, ...otherNatalTargets, ...angleTargets];

    // Define major aspects - include sextile by default
    const majorAspects: AspectType[] = [
        AspectType.Conjunction,
        AspectType.Square,
        AspectType.Opposition,
        AspectType.Sextile // Include sextile by default
    ];

    if (includeSupportiveAspects) {
        majorAspects.push(AspectType.Trine);
    }

    const now = new Date();
    const lookbackDate = DateTime.fromJSDate(now).minus({ months: lookbackMonths }).toJSDate();
    const lookaheadDate = DateTime.fromJSDate(now).plus({ months: lookaheadMonths }).toJSDate();

    const allTransits: MajorTransit[] = [];

    // Calculate transits for the entire period (lookback + current + lookahead)
    const startDate = lookbackDate;
    const endDate = lookaheadDate;

    // Sample every 3 days for better precision
    const sampleInterval = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

    for (let currentTime = startDate.getTime(); currentTime <= endDate.getTime(); currentTime += sampleInterval) {
        const sampleDate = new Date(currentTime);

        try {
            // Calculate positions for all major planets on this date
            const planetPositions = await calculatePlanetaryPositions(sampleDate, majorPlanets);

            // Check each transiting planet against each natal target
            for (const transitingPlanet of majorPlanets) {
                const transitPosition = planetPositions.find(p => p.planet === transitingPlanet);
                if (!transitPosition) continue;

                for (const natalTarget of allNatalTargets) {
                    // Skip if transiting planet is same as natal planet (but allow transits to angles)
                    if (!isAngle(natalTarget.planet) && transitingPlanet === natalTarget.planet) {
                        continue;
                    }

                    // Check for major aspects
                    for (const aspectType of majorAspects) {
                        const aspectAngle = ASPECT_DEFINITIONS[aspectType]?.angle;
                        if (aspectAngle === undefined) continue;

                        const angle = angularDistance(transitPosition.longitude, natalTarget.longitude);
                        const orb = Math.abs(angle - aspectAngle);

                        // Use tight orbs for major transits
                        const maxOrb = getMajorTransitOrb(transitingPlanet, aspectType);

                        if (orb <= maxOrb) {
                            // Check if we already have this transit (avoid duplicates)
                            // NOTE: This simple de-duplication keeps only the best orb hit across the entire window.
                            // For production, this should track multiple periods (enter/exact/leave orb) and handle
                            // retrograde multi-pass transits properly. See upgrade notes in function header.
                            const transitId = `${transitingPlanet}-${natalTarget.planet}-${aspectType}`;
                            const existingTransit = allTransits.find(t => t.id === transitId);

                            if (!existingTransit || orb < existingTransit.orb) {
                                const transitSignInfo = longitudeToSign(transitPosition.longitude);

                                // Determine if this touches an angle (using standardized names)
                                let touchesAngle: 'ASC' | 'MC' | 'IC' | 'DSC' | undefined;
                                if (isAngle(natalTarget.planet)) {
                                    touchesAngle = natalTarget.planet;
                                }

                                // Calculate house context
                                const natalHouse = getHouseForLongitude(natalTarget.longitude, natalChart.houses);
                                const transitHouse = getHouseForLongitude(transitPosition.longitude, natalChart.houses);

                                // Only calculate rulerships for actual planets, not angles
                                const natalRulesHouses = getPlanetRulerships(natalTarget.planet, natalChart.houses);

                                // Calculate strength score (0-100)
                                const strengthScore = calculateStrengthScore(
                                    transitingPlanet,
                                    natalTarget.planet,
                                    aspectType,
                                    orb,
                                    touchesAngle
                                );

                                // For now, use sample date as exact date
                                // In a more sophisticated version, we'd track multiple exact dates for retrogrades
                                const exactDates = [sampleDate];

                                // Estimate start/end dates based on orb and planet speed
                                const durationDays = getMajorTransitDurationDays(transitingPlanet);
                                const startDate = new Date(sampleDate.getTime() - (durationDays / 2) * 24 * 60 * 60 * 1000);
                                const endDate = new Date(sampleDate.getTime() + (durationDays / 2) * 24 * 60 * 60 * 1000);

                                const majorTransit: MajorTransit = {
                                    id: transitId,
                                    transitingPlanet,
                                    natalTarget: natalTarget.planet,
                                    aspectType,
                                    startDate,
                                    exactDates,
                                    endDate,
                                    orb,
                                    orbMinutes: Math.round(orb * 60),
                                    isApplying: true, // Simplified for now
                                    transitHouse,
                                    natalHouse,
                                    natalRulesHouses,
                                    status: getTransitStatus(sampleDate, now, transitingPlanet),
                                    touchesAngle,
                                    strengthScore,
                                    hitCount: 1, // Will be updated if we detect retrogrades
                                    theme: getMajorTransitTheme(transitingPlanet, natalTarget.planet, aspectType),
                                    significance: getMajorTransitSignificance(transitingPlanet, aspectType),
                                    duration: getMajorTransitDuration(transitingPlanet),
                                    transitPosition: {
                                        longitude: transitPosition.longitude,
                                        sign: transitSignInfo.sign,
                                        degree: transitSignInfo.degree,
                                        minute: transitSignInfo.minute
                                    },
                                    natalPosition: {
                                        longitude: natalTarget.longitude,
                                        sign: natalTarget.sign,
                                        degree: natalTarget.degree,
                                        minute: natalTarget.minute
                                    }
                                };

                                // Replace existing transit if this one is more exact
                                if (existingTransit) {
                                    const index = allTransits.indexOf(existingTransit);
                                    allTransits[index] = majorTransit;
                                } else {
                                    allTransits.push(majorTransit);
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.warn(`Error calculating major transits for ${sampleDate}:`, error);
        }
    }

    // Sort transits by exact date (use first exact date from array)
    allTransits.sort((a, b) => {
        const dateA = a.exactDates[0];
        const dateB = b.exactDates[0];
        return dateA.getTime() - dateB.getTime();
    });

    // Categorize transits by status
    const completed = allTransits.filter(t => t.status === 'completed');
    const active = allTransits.filter(t => t.status === 'active');
    const upcoming = allTransits.filter(t => t.status === 'upcoming');

    // Debug logging
    console.log('Transit calculation summary:', {
        total: allTransits.length,
        completed: completed.length,
        active: active.length,
        upcoming: upcoming.length,
        samplePeriod: `${lookbackMonths} months back, ${lookaheadMonths} months ahead`,
        natalTargets: allNatalTargets.map(t => t.planet),
        transitingPlanets: majorPlanets
    });

    // Show the closest transits to "active" status
    const sortedByProximity = allTransits
        .map(t => ({
            transit: `${t.transitingPlanet} ${t.aspectType} ${t.natalTarget}`,
            exactDate: t.exactDates[0].toISOString().split('T')[0],
            daysFromNow: Math.round((t.exactDates[0].getTime() - now.getTime()) / (24 * 60 * 60 * 1000)),
            status: t.status,
            duration: getMajorTransitDurationDays(t.transitingPlanet),
            activeWindow: `${Math.round(getMajorTransitDurationDays(t.transitingPlanet) / 2)} days before/after`
        }))
        .sort((a, b) => Math.abs(a.daysFromNow) - Math.abs(b.daysFromNow))
        .slice(0, 5);

    console.log('5 closest transits to today:', sortedByProximity);

    if (active.length > 0) {
        console.log('Active transits:', active.map(t => ({
            transit: `${t.transitingPlanet} ${t.aspectType} ${t.natalTarget}`,
            exactDate: t.exactDates[0],
            daysFromNow: Math.round((t.exactDates[0].getTime() - now.getTime()) / (24 * 60 * 60 * 1000)),
            orb: t.orb.toFixed(2)
        })));
    }

    return {
        completed: completed.slice(-15), // Last 15 completed transits
        active: active.slice(0, 20), // Up to 20 active transits
        upcoming: upcoming.slice(0, 25) // Next 25 upcoming transits
    };
}

/**
 * Calculate planetary positions for major planets
 */
async function calculatePlanetaryPositions(date: Date, planets: Planet[]): Promise<Array<{ planet: Planet, longitude: number }>> {
    const positions: Array<{ planet: Planet, longitude: number }> = [];

    const utc = DateTime.fromJSDate(date).toUTC();
    const julianDay = swisseph.swe_julday(
        utc.year,
        utc.month,
        utc.day,
        utc.hour + utc.minute / 60.0 + utc.second / 3600.0,
        swisseph.SE_GREG_CAL
    );

    for (const planet of planets) {
        try {
            const planetId = SWISSEPH_PLANETS[planet as keyof typeof SWISSEPH_PLANETS];
            if (planetId === undefined) continue;

            const result = swisseph.swe_calc_ut(julianDay, planetId, swisseph.SEFLG_SPEED);

            if ('error' in result && result.error) {
                console.warn(`Failed to calculate ${planet}:`, result.error);
                continue;
            }

            if ('longitude' in result) {
                positions.push({
                    planet,
                    longitude: result.longitude
                });
            }
        } catch (error) {
            console.warn(`Error calculating ${planet}:`, error);
        }
    }

    return positions;
}

/**
 * Get tight orbs for major transits
 */
function getMajorTransitOrb(planet: Planet, aspectType: AspectType): number {
    const baseOrbs: Record<AspectType, number> = {
        [AspectType.Conjunction]: 5.0, // Wider for better coverage
        [AspectType.Square]: 5.0,
        [AspectType.Opposition]: 5.0,
        [AspectType.Trine]: 4.0,
        [AspectType.Sextile]: 3.0,
        [AspectType.Quincunx]: 2.0,
        [AspectType.Semisextile]: 1.5,
        [AspectType.Semisquare]: 1.5,
        [AspectType.Sesquisquare]: 1.5
    };

    const planetModifiers: Record<Planet, number> = {
        [Planet.Saturn]: 1.0,
        [Planet.Uranus]: 1.0,
        [Planet.Neptune]: 1.0,
        [Planet.Pluto]: 1.0,
        [Planet.Jupiter]: 1.2, // Slightly wider orb for Jupiter
        [Planet.NorthNode]: 1.0,
        [Planet.SouthNode]: 1.0,
        // Other planets
        [Planet.Sun]: 1.0,
        [Planet.Moon]: 1.0,
        [Planet.Mercury]: 1.0,
        [Planet.Venus]: 1.0,
        [Planet.Mars]: 1.0,
        [Planet.Chiron]: 1.0
    };

    const baseOrb = baseOrbs[aspectType] || 5.0;
    const modifier = planetModifiers[planet] || 1.0;

    return baseOrb * modifier;
}

/**
 * Calculate strength score (0-100) for a transit
 */
/**
 * Calculate strength score (0-100) for a transit
 */
function calculateStrengthScore(
    transitingPlanet: Planet,
    natalTarget: TransitTarget,
    aspectType: AspectType,
    orb: number,
    touchesAngle?: 'ASC' | 'MC' | 'IC' | 'DSC'
): number {
    let score = 0;

    // Base score by transiting planet (outer planets = stronger)
    const planetScores: Record<Planet, number> = {
        [Planet.Pluto]: 40,
        [Planet.Neptune]: 35,
        [Planet.Uranus]: 35,
        [Planet.Saturn]: 30,
        [Planet.Jupiter]: 20,
        [Planet.NorthNode]: 15,
        [Planet.SouthNode]: 15,
        [Planet.Mars]: 10,
        [Planet.Venus]: 8,
        [Planet.Mercury]: 8,
        [Planet.Moon]: 10,
        [Planet.Sun]: 10,
        [Planet.Chiron]: 12
    };
    score += planetScores[transitingPlanet] || 10;

    // Natal target importance
    if (natalTarget === Planet.Sun || natalTarget === Planet.Moon) score += 25;
    else if (isAngle(natalTarget)) score += 30;
    else if (natalTarget === Planet.Mercury || natalTarget === Planet.Venus || natalTarget === Planet.Mars) score += 15;
    else score += 10;

    // Aspect type
    if (aspectType === AspectType.Conjunction) score += 20;
    else if (aspectType === AspectType.Opposition || aspectType === AspectType.Square) score += 15;
    else if (aspectType === AspectType.Trine) score += 10;
    else if (aspectType === AspectType.Sextile) score += 8;

    // Orb tightness (tighter = stronger)
    if (orb < 0.5) score += 15; // Exact
    else if (orb < 1) score += 10; // Tight
    else if (orb < 2) score += 5; // Moderate
    // Loose orbs get no bonus

    // Angle bonus
    if (touchesAngle) score += 10;

    return Math.min(100, score);
}

/**
 * Determine transit status based on timing and duration
 */
function getTransitStatus(transitDate: Date, currentDate: Date, transitingPlanet: Planet): 'completed' | 'active' | 'upcoming' {
    const diffDays = (transitDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000);
    const durationDays = getMajorTransitDurationDays(transitingPlanet);

    // Transit is active from (exact - duration/2) to (exact + duration/2)
    // This accounts for the applying and separating phases
    const halfDuration = durationDays / 2;

    // If we're past the end of the transit window
    if (diffDays < -halfDuration) return 'completed';

    // If we haven't entered the transit window yet
    if (diffDays > halfDuration) return 'upcoming';

    // We're within the transit window
    return 'active';
}

/**
 * Get major transit theme
 */
/**
 * Get major transit theme
 */
/**
 * Get major transit theme
 */
function getMajorTransitTheme(transitingPlanet: Planet, natalTarget: TransitTarget, aspectType: AspectType): string {
    // Convert angle to display name for themes
    let targetName: string;
    if (natalTarget === 'ASC') targetName = 'Ascendant';
    else if (natalTarget === 'MC') targetName = 'Midheaven';
    else if (natalTarget === 'IC') targetName = 'IC';
    else if (natalTarget === 'DSC') targetName = 'Descendant';
    else targetName = natalTarget;

    const themes: Record<string, string> = {
        // Saturn themes (structure, responsibility, maturity)
        [`${Planet.Saturn}-${Planet.Sun}-${AspectType.Conjunction}`]: 'Life Restructuring & Maturity',
        [`${Planet.Saturn}-${Planet.Sun}-${AspectType.Square}`]: 'Authority Challenges & Growth',
        [`${Planet.Saturn}-${Planet.Sun}-${AspectType.Opposition}`]: 'Responsibility vs. Freedom',
        [`${Planet.Saturn}-${Planet.Moon}-${AspectType.Conjunction}`]: 'Emotional Security Building',
        [`${Planet.Saturn}-${Planet.Moon}-${AspectType.Square}`]: 'Family Responsibility Challenges',
        [`${Planet.Saturn}-ASC-${AspectType.Conjunction}`]: 'Identity Consolidation & Maturity',
        [`${Planet.Saturn}-MC-${AspectType.Conjunction}`]: 'Career Crystallization & Authority',
        [`${Planet.Saturn}-MC-${AspectType.Square}`]: 'Professional Pressure & Restructuring',

        // Uranus themes (revolution, freedom, innovation)
        [`${Planet.Uranus}-${Planet.Sun}-${AspectType.Conjunction}`]: 'Personal Revolution & Awakening',
        [`${Planet.Uranus}-${Planet.Sun}-${AspectType.Square}`]: 'Independence vs. Stability',
        [`${Planet.Uranus}-${Planet.Sun}-${AspectType.Opposition}`]: 'Freedom & Authenticity Crisis',
        [`${Planet.Uranus}-${Planet.Moon}-${AspectType.Conjunction}`]: 'Emotional Liberation',
        [`${Planet.Uranus}-${Planet.Moon}-${AspectType.Square}`]: 'Domestic Upheaval & Change',
        [`${Planet.Uranus}-ASC-${AspectType.Conjunction}`]: 'Radical Identity Shift',
        [`${Planet.Uranus}-MC-${AspectType.Conjunction}`]: 'Career Revolution & Breakthrough',
        [`${Planet.Uranus}-MC-${AspectType.Square}`]: 'Professional Disruption & Innovation',

        // Neptune themes (spirituality, dissolution, dreams)
        [`${Planet.Neptune}-${Planet.Sun}-${AspectType.Conjunction}`]: 'Spiritual Awakening & Compassion',
        [`${Planet.Neptune}-${Planet.Sun}-${AspectType.Square}`]: 'Illusion vs. Reality',
        [`${Planet.Neptune}-${Planet.Sun}-${AspectType.Opposition}`]: 'Idealism & Disillusionment',
        [`${Planet.Neptune}-${Planet.Moon}-${AspectType.Conjunction}`]: 'Psychic Sensitivity & Intuition',
        [`${Planet.Neptune}-ASC-${AspectType.Conjunction}`]: 'Identity Dissolution & Spiritualization',
        [`${Planet.Neptune}-MC-${AspectType.Conjunction}`]: 'Vocational Idealism & Confusion',

        // Pluto themes (transformation, power, rebirth)
        [`${Planet.Pluto}-${Planet.Sun}-${AspectType.Conjunction}`]: 'Complete Life Transformation',
        [`${Planet.Pluto}-${Planet.Sun}-${AspectType.Square}`]: 'Power Struggles & Regeneration',
        [`${Planet.Pluto}-${Planet.Sun}-${AspectType.Opposition}`]: 'Shadow Work & Rebirth',
        [`${Planet.Pluto}-${Planet.Moon}-${AspectType.Conjunction}`]: 'Emotional Metamorphosis',
        [`${Planet.Pluto}-ASC-${AspectType.Conjunction}`]: 'Identity Death & Rebirth',
        [`${Planet.Pluto}-MC-${AspectType.Conjunction}`]: 'Career Transformation & Power',
        [`${Planet.Pluto}-MC-${AspectType.Square}`]: 'Professional Power Dynamics',

        // Jupiter themes (expansion, growth, opportunity)
        [`${Planet.Jupiter}-${Planet.Sun}-${AspectType.Conjunction}`]: 'Major Growth & Expansion',
        [`${Planet.Jupiter}-${Planet.Sun}-${AspectType.Square}`]: 'Overconfidence & Learning',
        [`${Planet.Jupiter}-${Planet.Moon}-${AspectType.Conjunction}`]: 'Emotional & Family Growth',
        [`${Planet.Jupiter}-ASC-${AspectType.Conjunction}`]: 'Personal Expansion & Confidence',
        [`${Planet.Jupiter}-MC-${AspectType.Conjunction}`]: 'Career Opportunity & Success'
    };

    const key = `${transitingPlanet}-${natalTarget}-${aspectType}`;
    return themes[key] || `${transitingPlanet} ${aspectType} ${targetName}`;
}

/**
 * Get major transit significance
 */
function getMajorTransitSignificance(planet: Planet, aspectType: AspectType): 'High' | 'Very High' {
    const outerPlanets = [Planet.Uranus, Planet.Neptune, Planet.Pluto];
    const majorAspects = [AspectType.Conjunction, AspectType.Square, AspectType.Opposition];

    if (outerPlanets.includes(planet) && majorAspects.includes(aspectType)) {
        return 'Very High';
    }

    return 'High';
}

/**
 * Get major transit duration in days (conservative estimate for active window)
 */
function getMajorTransitDurationDays(planet: Planet): number {
    // These represent the typical time a planet stays within orb (5°)
    // accounting for direct motion. Retrograde periods extend this significantly.
    const durations: Record<Planet, number> = {
        [Planet.Pluto]: 365, // ~1 year (can be 2-3 years with retrogrades)
        [Planet.Neptune]: 274, // ~9 months (can be 1-2 years with retrogrades)
        [Planet.Uranus]: 182, // ~6 months (can be 6-12 months with retrogrades)
        [Planet.Saturn]: 120, // ~4 months (can be 3-9 months with retrogrades)
        [Planet.Jupiter]: 60, // ~2 months (can be 2-4 months with retrogrades)
        [Planet.NorthNode]: 182, // ~6 months
        [Planet.SouthNode]: 182, // ~6 months
        // Other planets
        [Planet.Sun]: 10,
        [Planet.Moon]: 2,
        [Planet.Mercury]: 10,
        [Planet.Venus]: 17,
        [Planet.Mars]: 45,
        [Planet.Chiron]: 182
    };

    return durations[planet] || 90;
}

/**
 * Get major transit duration (display string)
 */
function getMajorTransitDuration(planet: Planet): string {
    const durations: Record<Planet, string> = {
        [Planet.Pluto]: '1-3 years',
        [Planet.Neptune]: '9 months-2 years',
        [Planet.Uranus]: '6-12 months',
        [Planet.Saturn]: '4-9 months',
        [Planet.Jupiter]: '2-4 months',
        [Planet.NorthNode]: '6-12 months',
        [Planet.SouthNode]: '6-12 months',
        // Other planets
        [Planet.Sun]: '1-2 weeks',
        [Planet.Moon]: '2-3 days',
        [Planet.Mercury]: '1-2 weeks',
        [Planet.Venus]: '2-3 weeks',
        [Planet.Mars]: '1-2 months',
        [Planet.Chiron]: '4-8 months'
    };

    return durations[planet] || '1-3 months';
}