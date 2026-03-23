import { DateTime } from 'luxon';
import {
    BirthData,
    BirthChart,
    PlanetPosition,
    Angles,
    Houses,
    Aspect,
    Planet,
    HouseSystem,
    AspectType,
} from '@/types/astrology';
import {
    SWISSEPH_PLANETS,
    ASPECT_DEFINITIONS,
    PLANET_ORB_MODIFIERS,
} from './constants';
import {
    longitudeToSign,
    angularDistance,
    getHouseForLongitude,
    validateBirthData,
} from './utils';

/**
 * Main birth chart calculator class
 */
export class BirthChartCalculator {
    private julianDay: number = 0;
    private latitude: number = 0;
    private longitude: number = 0;

    /**
     * Calculate complete birth chart
     */
    async calculateChart(birthData: BirthData): Promise<BirthChart> {
        // Dynamic import of Swiss Ephemeris to avoid module loading issues
        const swisseph = await import('swisseph-v2');

        // Validate input data
        const validation = validateBirthData(birthData);
        if (!validation.isValid) {
            throw new Error(`Invalid birth data: ${validation.errors.join(', ')}`);
        }

        // Convert to Julian Day using the correct API
        const dateTime = DateTime.fromISO(`${birthData.date}T${birthData.time}`, { zone: birthData.timezone });
        if (!dateTime.isValid) {
            throw new Error(`Invalid date/time: ${dateTime.invalidReason}`);
        }

        const utc = dateTime.toUTC();

        // Use the correct swe_julday function
        this.julianDay = swisseph.swe_julday(
            utc.year,
            utc.month,
            utc.day,
            utc.hour + utc.minute / 60.0 + utc.second / 3600.0,
            swisseph.SE_GREG_CAL
        );

        this.latitude = birthData.latitude;
        this.longitude = birthData.longitude;

        // Calculate all components
        const planets = await this.calculatePlanets(swisseph);
        const angles = await this.calculateAngles(swisseph);
        const houses = await this.calculateHouses(HouseSystem.Placidus, swisseph);

        // Add house positions to planets
        const planetsWithHouses = this.addHousesToPlanets(planets, houses.cusps);

        // Calculate aspects
        const aspects = this.calculateAspects(planetsWithHouses, angles);

        return {
            birthData,
            planets: planetsWithHouses,
            angles,
            houses,
            aspects,
            julianDay: this.julianDay,
        };
    }

    /**
     * Calculate planet positions
     */
    private async calculatePlanets(swisseph: any): Promise<PlanetPosition[]> {
        const planets: PlanetPosition[] = [];
        const flag = swisseph.SEFLG_SPEED;

        for (const [planetName, planetId] of Object.entries(SWISSEPH_PLANETS)) {
            try {
                const result = swisseph.swe_calc_ut(this.julianDay, planetId, flag);

                // Check if result has error property (indicates failure)
                if (result.error) {
                    console.warn(`Failed to calculate ${planetName}:`, result.error);
                    continue;
                }

                // Swiss Ephemeris returns longitude, latitude, distance, etc.
                const longitude = result.longitude;
                const latitude = result.latitude || 0;
                const speed = result.longitudeSpeed || 0;

                if (longitude === undefined) {
                    console.warn(`No longitude data for ${planetName}`);
                    continue;
                }

                const signInfo = longitudeToSign(longitude);

                planets.push({
                    planet: planetName as Planet,
                    longitude,
                    latitude,
                    speed,
                    sign: signInfo.sign,
                    degree: signInfo.degree,
                    minute: signInfo.minute,
                });
            } catch (error) {
                console.warn(`Error calculating ${planetName}:`, error);
            }
        }

        // Calculate South Node (opposite of North Node)
        const northNode = planets.find(p => p.planet === Planet.NorthNode);
        if (northNode) {
            const southNodeLon = (northNode.longitude + 180) % 360;
            const signInfo = longitudeToSign(southNodeLon);

            planets.push({
                planet: Planet.SouthNode,
                longitude: southNodeLon,
                latitude: -northNode.latitude,
                speed: -northNode.speed,
                sign: signInfo.sign,
                degree: signInfo.degree,
                minute: signInfo.minute,
            });
        }

        return planets;
    }

    /**
     * Calculate angles (ASC, MC, DESC, IC)
     */
    private async calculateAngles(swisseph: any): Promise<Angles> {
        try {
            const result = swisseph.swe_houses(
                this.julianDay,
                this.latitude,
                this.longitude,
                'P' // Placidus system
            );

            if (result.error) {
                throw new Error(`Failed to calculate houses: ${result.error}`);
            }

            return {
                ascendant: result.ascendant,
                midheaven: result.mc,
                descendant: (result.ascendant + 180) % 360,
                imumCoeli: (result.mc + 180) % 360,
            };
        } catch (error) {
            throw new Error(`Error calculating angles: ${error}`);
        }
    }

    /**
     * Calculate house cusps
     */
    private async calculateHouses(system: HouseSystem, swisseph: any): Promise<Houses> {
        try {
            const result = swisseph.swe_houses(
                this.julianDay,
                this.latitude,
                this.longitude,
                'P' // Placidus system
            );

            if (result.error) {
                throw new Error(`Failed to calculate houses: ${result.error}`);
            }

            return {
                system,
                cusps: result.house || [],
            };
        } catch (error) {
            throw new Error(`Error calculating houses: ${error}`);
        }
    }

    /**
     * Add house positions to planets
     */
    private addHousesToPlanets(
        planets: PlanetPosition[],
        houseCusps: number[]
    ): PlanetPosition[] {
        return planets.map(planet => ({
            ...planet,
            house: getHouseForLongitude(planet.longitude, houseCusps),
        }));
    }

    /**
     * Calculate aspects between planets and angles
     */
    private calculateAspects(
        planets: PlanetPosition[],
        angles: Angles
    ): Aspect[] {
        const aspects: Aspect[] = [];
        const allPoints = [
            ...planets,
            // Add angles as pseudo-planets for aspect calculation
            {
                planet: 'Ascendant' as Planet,
                longitude: angles.ascendant,
            },
            {
                planet: 'Midheaven' as Planet,
                longitude: angles.midheaven,
            },
        ];

        // Calculate aspects between all combinations
        for (let i = 0; i < allPoints.length; i++) {
            for (let j = i + 1; j < allPoints.length; j++) {
                const point1 = allPoints[i];
                const point2 = allPoints[j];

                const aspect = this.findAspect(point1, point2);
                if (aspect) {
                    aspects.push(aspect);
                }
            }
        }

        return aspects.sort((a, b) => a.orb - b.orb);
    }

    /**
     * Find aspect between two points
     */
    private findAspect(
        point1: { planet: Planet; longitude: number },
        point2: { planet: Planet; longitude: number }
    ): Aspect | null {
        const distance = angularDistance(point1.longitude, point2.longitude);

        for (const [aspectType, definition] of Object.entries(ASPECT_DEFINITIONS)) {
            const targetAngle = definition.angle;
            const baseOrb = definition.orb;

            // Apply planet-specific orb modifiers
            const modifier1 = PLANET_ORB_MODIFIERS[point1.planet] || 1;
            const modifier2 = PLANET_ORB_MODIFIERS[point2.planet] || 1;
            const avgModifier = (modifier1 + modifier2) / 2;
            const adjustedOrb = baseOrb * avgModifier;

            const orbDifference = Math.abs(distance - targetAngle);

            if (orbDifference <= adjustedOrb) {
                const exactness = Math.max(0, 100 - (orbDifference / adjustedOrb) * 100);

                return {
                    planet1: point1.planet,
                    planet2: point2.planet,
                    type: aspectType as AspectType,
                    angle: distance,
                    orb: orbDifference,
                    exactness: Math.round(exactness),
                };
            }
        }

        return null;
    }
}

/**
 * Convenience function to calculate a birth chart
 */
export async function calculateBirthChart(birthData: BirthData): Promise<BirthChart> {
    const calculator = new BirthChartCalculator();
    return calculator.calculateChart(birthData);
}