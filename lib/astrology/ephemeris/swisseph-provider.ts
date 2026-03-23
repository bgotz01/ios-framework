// lib/astrology/ephemeris/swisseph-provider.ts

import swisseph from 'swisseph-v2';
import type { EphemerisProvider, Planet, PlanetPos, FinalIngress } from './types';

const PLANET_MAP: Record<Planet, number> = {
    jupiter: swisseph.SE_JUPITER,
    saturn: swisseph.SE_SATURN,
    uranus: swisseph.SE_URANUS,
    neptune: swisseph.SE_NEPTUNE,
    pluto: swisseph.SE_PLUTO,
};

const SIGN_NAMES = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

function dateToJulianDay(date: Date): number {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;

    return swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);
}

function julianDayToDate(jd: number): Date {
    const result = swisseph.swe_revjul(jd, swisseph.SE_GREG_CAL);
    return new Date(Date.UTC(
        result.year,
        result.month - 1,
        result.day,
        Math.floor(result.hour),
        Math.floor((result.hour % 1) * 60),
        Math.floor(((result.hour % 1) * 60 % 1) * 60)
    ));
}

function getSignFromLongitude(lon: number): string {
    const signIndex = Math.floor(lon / 30);
    return SIGN_NAMES[signIndex];
}

export class SwissEphemerisProvider implements EphemerisProvider {
    async getPlanetPositionsUTC(date: Date, planets: Planet[]): Promise<PlanetPos[]> {
        const jd = dateToJulianDay(date);
        const positions: PlanetPos[] = [];

        for (const planet of planets) {
            const planetNum = PLANET_MAP[planet];
            const result = swisseph.swe_calc_ut(jd, planetNum, swisseph.SEFLG_SWIEPH);

            // Check if result has error (rflag < 0)
            if ('rflag' in result && result.rflag < 0) {
                throw new Error(`Swiss Ephemeris error for ${planet}`);
            }

            // Extract longitude - result should have longitude property
            const longitude = 'longitude' in result ? result.longitude : 0;
            const longitudeSpeed = 'longitudeSpeed' in result ? result.longitudeSpeed : 0;

            positions.push({
                planet,
                lonDeg: longitude,
                retrograde: longitudeSpeed < 0,
            });
        }

        return positions;
    }

    async getFinalIngressesUTC(
        rangeStart: Date,
        rangeEnd: Date,
        planets: Planet[]
    ): Promise<FinalIngress[]> {
        const ingresses: FinalIngress[] = [];
        const jdStart = dateToJulianDay(rangeStart);
        const jdEnd = dateToJulianDay(rangeEnd);

        for (const planet of planets) {
            const planetNum = PLANET_MAP[planet];
            let currentJd = jdStart;

            // Get initial position
            let prevResult = swisseph.swe_calc_ut(currentJd, planetNum, swisseph.SEFLG_SWIEPH);
            if (!('longitude' in prevResult)) continue;

            let prevSign = Math.floor(prevResult.longitude / 30);
            let prevRetrograde = 'longitudeSpeed' in prevResult ? prevResult.longitudeSpeed < 0 : false;

            // Step through time looking for sign changes
            // Use adaptive step size based on planet speed
            const stepDays = planet === 'jupiter' ? 30 : planet === 'saturn' ? 60 : 180;

            while (currentJd < jdEnd) {
                currentJd += stepDays;
                if (currentJd > jdEnd) currentJd = jdEnd;

                const result = swisseph.swe_calc_ut(currentJd, planetNum, swisseph.SEFLG_SWIEPH);
                if (!('longitude' in result)) continue;

                const currentSign = Math.floor(result.longitude / 30);
                const currentRetrograde = 'longitudeSpeed' in result ? result.longitudeSpeed < 0 : false;

                // Sign change detected
                if (currentSign !== prevSign) {
                    // Refine to find exact crossing
                    const exactJd = this.findSignCrossing(
                        planetNum,
                        currentJd - stepDays,
                        currentJd,
                        prevSign,
                        currentSign
                    );

                    const exactDate = julianDayToDate(exactJd);
                    const exactResult = swisseph.swe_calc_ut(exactJd, planetNum, swisseph.SEFLG_SWIEPH);
                    if (!('longitudeSpeed' in exactResult)) continue;

                    const isRetrograde = exactResult.longitudeSpeed < 0;

                    // Only record if it's a "final" ingress (not retrograde back)
                    // For simplicity, we'll record all and let the caller filter
                    ingresses.push({
                        planet,
                        ingressDate: exactDate.toISOString(),
                        sign: SIGN_NAMES[currentSign],
                    });
                }

                prevSign = currentSign;
                prevRetrograde = currentRetrograde;
            }
        }

        return ingresses;
    }

    private findSignCrossing(
        planetNum: number,
        jdStart: number,
        jdEnd: number,
        startSign: number,
        endSign: number
    ): number {
        // Binary search for exact sign crossing
        let left = jdStart;
        let right = jdEnd;
        const targetBoundary = endSign * 30;

        while (right - left > 0.0001) { // ~8 seconds precision
            const mid = (left + right) / 2;
            const result = swisseph.swe_calc_ut(mid, planetNum, swisseph.SEFLG_SWIEPH);
            if (!('longitude' in result)) break;

            const midSign = Math.floor(result.longitude / 30);

            if (midSign === startSign) {
                left = mid;
            } else {
                right = mid;
            }
        }

        return (left + right) / 2;
    }
}

// Singleton instance
export const swissEphemeris = new SwissEphemerisProvider();
