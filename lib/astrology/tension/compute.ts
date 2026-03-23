// lib/astrology/tension/compute.ts

import type { PlanetPos } from '../ephemeris/types';

export type TensionLevel = 'Low' | 'Moderate' | 'High' | 'Extreme';

interface TensionInputs {
    positions: PlanetPos[];
    hardAspectsCount: number;
    signChangesWithin2Years: number;
    saturnAspectingOuterPlanets: boolean;
    details: string[];
}

interface TensionResult {
    score: number;       // 0..100
    level: TensionLevel;
}

export function computeTensionIndexFromInputs(inputs: TensionInputs): TensionResult {
    const { hardAspectsCount, signChangesWithin2Years, saturnAspectingOuterPlanets } = inputs;

    // Base score from hard aspects (each worth ~15 points, max 45)
    let score = Math.min(hardAspectsCount * 15, 45);

    // Sign changes add instability (each worth ~8 points, max 32)
    score += Math.min(signChangesWithin2Years * 8, 32);

    // Saturn aspecting outer planets adds structural pressure
    if (saturnAspectingOuterPlanets) score += 20;

    score = Math.min(Math.round(score), 100);

    const level: TensionLevel =
        score >= 75 ? 'Extreme' :
            score >= 50 ? 'High' :
                score >= 25 ? 'Moderate' :
                    'Low';

    return { score, level };
}
