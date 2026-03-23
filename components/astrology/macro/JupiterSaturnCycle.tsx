'use client';

import { Card } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import {
    getCurrentJupiterSaturnCycle,
    getJupiterSaturnNextConjunctionYear,
    getJupiterSaturnYearsIntoCycle,
    getJupiterSaturnCyclePhase,
    JUPITER_SATURN_CYCLES
} from '@/lib/astrology/jupiter-saturn-cycles-data';

export function JupiterSaturnCycle() {
    const params = useParams();
    const userId = params.id as string;
    const currentCycle = getCurrentJupiterSaturnCycle();
    const nextConjunction = getJupiterSaturnNextConjunctionYear();
    const yearsIntoCycle = getJupiterSaturnYearsIntoCycle();
    const phase = getJupiterSaturnCyclePhase();

    if (!currentCycle) return null;

    const previousCycle = JUPITER_SATURN_CYCLES.find(c => c.year === currentCycle.year - 20);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Jupiter–Saturn Cycle</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The 20-year economic heartbeat. Where expansion meets structure.
                </p>
            </div>

            {/* Main Cycle Card */}
            <Card className="p-6 border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
                <div className="space-y-6">
                    {/* Header Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">♃</span>
                            <span className="text-2xl text-muted-foreground">×</span>
                            <span className="text-3xl">♄</span>
                            <h3 className="text-2xl font-bold ml-2">20-Year Economic Cycle</h3>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                            Jupiter (growth) conjuncts Saturn (structure) every ~20 years, resetting economic paradigms
                        </p>
                    </div>

                    {/* Current Cycle Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="text-xs font-semibold text-amber-400 mb-1">Last Conjunction</div>
                            <div className="text-lg font-bold">{currentCycle.year}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-amber-400 mb-1">Sign</div>
                            <div className="text-lg font-bold">{currentCycle.symbol} {currentCycle.sign}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-amber-400 mb-1">Element</div>
                            <div className="text-lg font-bold">{currentCycle.element}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-amber-400 mb-1">Phase</div>
                            <div className="text-lg font-bold">{phase} ({yearsIntoCycle}/20 years)</div>
                        </div>
                    </div>

                    {/* Economic Theme */}
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <div className="text-sm font-semibold text-amber-400 mb-2">Economic Theme</div>
                        <p className="text-base font-bold">{currentCycle.economicTheme}</p>
                    </div>

                    {/* Core Archetype & Market Character - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Core Archetype */}
                        <div>
                            <div className="text-sm font-semibold text-amber-400 mb-2">Core Archetype</div>
                            <ul className="space-y-2">
                                {currentCycle.coreArchetype.map((theme, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-amber-400 mt-1">•</span>
                                        <span>{theme}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Market Character */}
                        <div>
                            <div className="text-sm font-semibold text-amber-400 mb-2">Market Character</div>
                            <ul className="space-y-2">
                                {currentCycle.marketCharacter.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-amber-400">▪</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Expansion Focus & Structural Shift - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Expansion Focus */}
                        <div>
                            <div className="text-sm font-semibold text-amber-400 mb-2">
                                ♃ Expansion Focus
                            </div>
                            <ul className="space-y-1.5">
                                {currentCycle.expansionFocus.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-amber-400/60">→</span>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Structural Shift */}
                        <div>
                            <div className="text-sm font-semibold text-amber-400 mb-2">
                                ♄ Structural Shift
                            </div>
                            <ul className="space-y-1.5">
                                {currentCycle.structuralShift.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-amber-400/60">→</span>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Distortion Risk & Historical Context - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Distortion Risk */}
                        <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                            <div className="text-sm font-semibold text-red-400 mb-2">⚠ Distortion Risk</div>
                            <ul className="space-y-1.5">
                                {currentCycle.distortionRisk.map((risk, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-red-400">!</span>
                                        <span className="text-muted-foreground">{risk}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Historical Context */}
                        <div className="p-4 bg-muted/30 rounded-lg border border-muted">
                            <div className="text-sm font-semibold mb-2">Historical Context</div>
                            <ul className="space-y-1.5">
                                {currentCycle.historicalContext.map((context, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span>•</span>
                                        <span>{context}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Element Shift Note */}
            {currentCycle.element === 'Air' && (
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-2">
                        🌬️ Major Element Shift
                    </div>
                    <p className="text-sm text-muted-foreground">
                        The {currentCycle.year} conjunction marked the beginning of a 200-year Air element cycle,
                        shifting economic value from material/tangible assets (Earth) to intellectual/network assets (Air).
                        This is a generational paradigm change, not just a 20-year cycle.
                    </p>
                </div>
            )}

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>
                    Jupiter–Saturn conjunctions have marked major economic turning points for centuries.
                    The element shift (Earth → Air in 2020) happens only every ~200 years.
                </p>
            </div>
        </div>
    );
}
