'use client';

import { Card } from '@/components/ui/card';
import { getCurrentJupiterSaturnCycle, getJupiterSaturnYearsIntoCycle } from '@/lib/astrology/jupiter-saturn-cycles-data';
import { getCurrentSaturnPlutoCycle, getSaturnPlutoYearsIntoCycle } from '@/lib/astrology/saturn-pluto-cycles-data';

interface PlanetPosition {
    planet: string;
    sign: string;
    degree: number;
    phase: 'Early' | 'Mid' | 'Late';
    element?: string;
}

interface MacroSnapshotProps {
    positions: PlanetPosition[];
}

export function MacroSnapshot({ positions }: MacroSnapshotProps) {
    const jupiterSaturnCycle = getCurrentJupiterSaturnCycle();
    const saturnPlutoCycle = getCurrentSaturnPlutoCycle();
    const jsYearsIn = Math.round(getJupiterSaturnYearsIntoCycle() * 10) / 10;
    const spYearsIn = Math.round(getSaturnPlutoYearsIntoCycle() * 10) / 10;

    // Helper function to get element from zodiac sign
    const getElementFromSign = (sign: string): string => {
        const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
        const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
        const airSigns = ['Gemini', 'Libra', 'Aquarius'];
        const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];

        if (fireSigns.includes(sign)) return 'Fire';
        if (earthSigns.includes(sign)) return 'Earth';
        if (airSigns.includes(sign)) return 'Air';
        if (waterSigns.includes(sign)) return 'Water';
        return '';
    };

    // Calculate phase for conjunction cycles
    const getConjunctionPhase = (yearsIn: number, totalYears: number): 'Early' | 'Mid' | 'Late' => {
        const progress = yearsIn / totalYears;
        if (progress < 0.33) return 'Early';
        if (progress < 0.67) return 'Mid';
        return 'Late';
    };

    const jsPhase = getConjunctionPhase(jsYearsIn, 20);
    const spPhase = getConjunctionPhase(spYearsIn, 33);

    const getPhaseColor = (phase: string) => {
        switch (phase) {
            case 'Early': return 'text-green-400';
            case 'Mid': return 'text-yellow-400';
            case 'Late': return 'text-orange-400';
            default: return 'text-muted-foreground';
        }
    };

    const getElementColor = (element?: string) => {
        switch (element) {
            case 'Fire':
                return 'text-red-500 dark:text-red-400';
            case 'Earth':
                return 'text-green-600 dark:text-green-400';
            case 'Air':
                return 'text-blue-500 dark:text-blue-400';
            case 'Water':
                return 'text-cyan-500 dark:text-cyan-400';
            default:
                return 'text-muted-foreground';
        }
    };

    // Add elements to positions
    const positionsWithElements = positions.map(pos => ({
        ...pos,
        element: pos.element || getElementFromSign(pos.sign)
    }));

    // Combine all positions including conjunction cycles
    const allPositions = [
        ...positionsWithElements,
        ...(jupiterSaturnCycle ? [{
            planet: '♃-♄ Jupiter-Saturn',
            sign: jupiterSaturnCycle.sign,
            degree: jsYearsIn,
            phase: jsPhase,
            element: jupiterSaturnCycle.element
        }] : []),
        ...(saturnPlutoCycle ? [{
            planet: '♄-♇ Saturn-Pluto',
            sign: saturnPlutoCycle.sign,
            degree: spYearsIn,
            phase: spPhase,
            element: saturnPlutoCycle.element
        }] : [])
    ];

    return (
        <Card className="p-6 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-orange-500/10 border-2">
            <div className="text-center mb-4">
                <h2 className="text-xl font-bold mb-1">Current Macro Sky</h2>
                <p className="text-sm text-muted-foreground">Instant situational awareness</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {allPositions.map((pos, i) => (
                    <div key={i} className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">{pos.planet}</div>
                        <div className="font-bold text-lg">{pos.sign}</div>
                        {pos.element && (
                            <div className={`text-xs font-medium ${getElementColor(pos.element)}`}>
                                {pos.element}
                            </div>
                        )}
                        <div className={`text-xs font-semibold ${getPhaseColor(pos.phase)}`}>
                            {pos.phase} Phase
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            {pos.planet.includes('♃-♄') || pos.planet.includes('♄-♇')
                                ? `${pos.degree.toFixed(1)}y`
                                : `${pos.degree.toFixed(1)}°`
                            }
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
