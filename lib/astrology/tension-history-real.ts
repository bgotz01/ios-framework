// lib/astrology/tension-history-real.ts

import type { EphemerisProvider, Planet } from './ephemeris/types';
import { countIngressesWithin } from './tension/ingresses';
import { computeOuterHardAspects, isSaturnHardAspectingOuter } from './tension/aspects';
import { computeTensionIndexFromInputs, type TensionLevel } from './tension/compute';

export type TensionDataPoint = {
    date: string; // YYYY-MM-01
    score: number;
    level: TensionLevel;
    month: string;
    year: number;

    // Debug/hover fields
    hardAspectsCount: number;
    signChangesWithin2Years: number;
    saturnAspectingOuterPlanets: boolean;
    topEvents?: string[]; // for annotations
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const OUTER_PLANETS: Planet[] = ['jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

function monthStartUTC(year: number, month1to12: number) {
    return new Date(Date.UTC(year, month1to12 - 1, 1, 0, 0, 0));
}

// Mid-month reduces "edge cases" near exact aspect or sign boundary.
function monthMidUTC(year: number, month1to12: number) {
    return new Date(Date.UTC(year, month1to12 - 1, 15, 12, 0, 0));
}

export async function generateTensionHistoryReal(
    ephem: EphemerisProvider,
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number
): Promise<TensionDataPoint[]> {
    const data: TensionDataPoint[] = [];

    // Precompute ingresses for the full interval plus 2 years forward.
    const rangeStart = monthStartUTC(startYear, startMonth);
    const rangeEnd = monthStartUTC(endYear, endMonth);
    const rangeEndPlus2Y = new Date(rangeEnd);
    rangeEndPlus2Y.setUTCFullYear(rangeEndPlus2Y.getUTCFullYear() + 2);

    console.log('Computing ingresses from', rangeStart.toISOString(), 'to', rangeEndPlus2Y.toISOString());
    const ingresses = await ephem.getFinalIngressesUTC(rangeStart, rangeEndPlus2Y, OUTER_PLANETS);
    console.log(`Found ${ingresses.length} ingresses`);

    let y = startYear;
    let m = startMonth;
    let count = 0;

    while (y < endYear || (y === endYear && m <= endMonth)) {
        const dateMid = monthMidUTC(y, m);

        const positions = await ephem.getPlanetPositionsUTC(dateMid, OUTER_PLANETS);

        const aspects = computeOuterHardAspects(positions, 3);
        const hardAspectsCount = aspects.length;
        const saturnAspectingOuter = isSaturnHardAspectingOuter(aspects);

        const ingressCount2Y = countIngressesWithin(ingresses, dateMid, 24);

        // Create a readable events list for tooltips/annotations
        const topAspectEvents = aspects.slice(0, 3).map((a) => {
            const aspLabel = a.aspect === 'conj' ? 'Conjunction' : a.aspect === 'square' ? 'Square' : 'Opposition';
            return `${a.a.charAt(0).toUpperCase() + a.a.slice(1)} ${aspLabel} ${a.b.charAt(0).toUpperCase() + a.b.slice(1)} (${(a.exactness * 100).toFixed(0)}% exact)`;
        });

        const topIngressEvents = ingresses
            .filter((x) => {
                const t = Date.parse(x.ingressDate);
                const from = dateMid.getTime();
                const to = new Date(dateMid);
                to.setUTCMonth(to.getUTCMonth() + 24);
                return t >= from && t <= to.getTime();
            })
            .slice(0, 3)
            .map((x) => {
                const date = new Date(x.ingressDate);
                const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                return `${x.planet.charAt(0).toUpperCase() + x.planet.slice(1)} → ${x.sign} (${monthYear})`;
            });

        const details: string[] = [
            `Outer hard aspects: ${hardAspectsCount}`,
            `Outer sign changes (next 24 mo): ${ingressCount2Y}`,
            `Saturn hard-aspecting Pluto/Neptune/Uranus: ${saturnAspectingOuter ? 'YES' : 'NO'}`,
        ];

        const result = computeTensionIndexFromInputs({
            positions,
            hardAspectsCount,
            signChangesWithin2Years: ingressCount2Y,
            saturnAspectingOuterPlanets: saturnAspectingOuter,
            details,
        });

        data.push({
            date: `${y}-${String(m).padStart(2, '0')}-01`,
            score: result.score,
            level: result.level,
            month: MONTH_NAMES[m - 1],
            year: y,

            hardAspectsCount,
            signChangesWithin2Years: ingressCount2Y,
            saturnAspectingOuterPlanets: saturnAspectingOuter,
            topEvents: [...topAspectEvents, ...topIngressEvents],
        });

        count++;
        if (count % 120 === 0) {
            console.log(`Processed ${count} months (${y}-${String(m).padStart(2, '0')})`);
        }

        m++;
        if (m > 12) {
            m = 1;
            y++;
        }
    }

    console.log(`Generated ${data.length} tension data points`);
    return data;
}
