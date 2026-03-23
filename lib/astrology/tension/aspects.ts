// lib/astrology/tension/aspects.ts

import type { PlanetPos } from '../ephemeris/types';

export type HardAspect = {
    a: string;
    b: string;
    aspect: 'conj' | 'square' | 'opp';
    orb: number;       // degrees from exact
    exactness: number; // 0..1, 1 = exact
};

const HARD_ANGLES = [
    { aspect: 'conj' as const, angle: 0 },
    { aspect: 'square' as const, angle: 90 },
    { aspect: 'opp' as const, angle: 180 },
];

function angularDiff(a: number, b: number): number {
    const diff = Math.abs(a - b) % 360;
    return diff > 180 ? 360 - diff : diff;
}

/**
 * Find all hard aspects (conjunction, square, opposition) between outer planets
 * within the given orb (degrees).
 */
export function computeOuterHardAspects(
    positions: PlanetPos[],
    orbDeg: number
): HardAspect[] {
    const aspects: HardAspect[] = [];

    for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
            const diff = angularDiff(positions[i].lonDeg, positions[j].lonDeg);

            for (const { aspect, angle } of HARD_ANGLES) {
                const orb = Math.abs(diff - angle);
                if (orb <= orbDeg) {
                    aspects.push({
                        a: positions[i].planet,
                        b: positions[j].planet,
                        aspect,
                        orb,
                        exactness: 1 - orb / orbDeg,
                    });
                }
            }
        }
    }

    return aspects.sort((a, b) => b.exactness - a.exactness);
}

/**
 * Returns true if Saturn is in a hard aspect with any of Uranus, Neptune, or Pluto.
 */
export function isSaturnHardAspectingOuter(aspects: HardAspect[]): boolean {
    const outerPlanets = new Set(['uranus', 'neptune', 'pluto']);
    return aspects.some(
        (a) =>
            (a.a === 'saturn' && outerPlanets.has(a.b)) ||
            (a.b === 'saturn' && outerPlanets.has(a.a))
    );
}
