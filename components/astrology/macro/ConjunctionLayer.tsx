//components/astrology/macro/ConjunctionLayer
'use client';

import { Card } from '@/components/ui/card';
import { getCurrentJupiterSaturnCycle, getJupiterSaturnYearsIntoCycle, getJupiterSaturnCyclePhase } from '@/lib/astrology/jupiter-saturn-cycles-data';
import { getCurrentSaturnPlutoCycle, getSaturnPlutoYearsIntoCycle, getSaturnPlutoCyclePhase } from '@/lib/astrology/saturn-pluto-cycles-data';
import Link from 'next/link';

export function ConjunctionLayer({ userId }: { userId?: string }) {
    const base = userId ? `/arc/personal/${userId}/astro/macro` : `/macro`;
    const jupiterSaturnCycle = getCurrentJupiterSaturnCycle();
    const saturnPlutoCycle = getCurrentSaturnPlutoCycle();
    const jsYearsIn = getJupiterSaturnYearsIntoCycle();
    const spYearsIn = getSaturnPlutoYearsIntoCycle();
    const jsPhase = getJupiterSaturnCyclePhase();
    const spPhase = getSaturnPlutoCyclePhase();

    // Round for display to avoid hydration mismatches
    const jsYearsInDisplay = Math.round(jsYearsIn * 100) / 100;
    const spYearsInDisplay = Math.round(spYearsIn * 100) / 100;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">The Conjunction Layer</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                    Major planetary cycles that reset economic and power structures.
                </p>
                <div className="max-w-2xl mx-auto p-4 bg-muted/30 rounded-lg border border-muted">
                    <p className="text-sm font-semibold mb-2">The Macro Pattern:</p>
                    <p className="text-sm text-muted-foreground">
                        <span className="text-purple-400 font-semibold">Saturn–Pluto</span> breaks the system → <span className="text-amber-400 font-semibold">Jupiter–Saturn</span> builds the next one
                    </p>
                </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Saturn-Pluto Cycle - LEFT (comes first in the pattern) */}
                {saturnPlutoCycle && (
                    <Card className="p-5 border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent flex flex-col">
                        <div className="mb-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-2xl">♄</span>
                                <span className="text-xl text-muted-foreground">×</span>
                                <span className="text-2xl">♇</span>
                            </div>
                            <h3 className="text-xl font-bold">Saturn–Pluto</h3>
                            <p className="text-xs font-semibold text-purple-400 mb-1">The Institutional Stress Cycle</p>
                            <p className="text-xs text-muted-foreground italic">How power systems break and rebuild</p>
                        </div>

                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="space-y-2 text-center">
                                <div>
                                    <div className="text-xs font-semibold text-purple-400 mb-1">Last Conjunction</div>
                                    <div className="text-base font-bold">{saturnPlutoCycle.year} {saturnPlutoCycle.symbol} {saturnPlutoCycle.sign}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-purple-400 mb-1">Element</div>
                                    <div className="text-sm">{saturnPlutoCycle.element}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-purple-400 mb-1">Progress</div>
                                    <div className="text-sm font-bold">{spPhase} ({spYearsInDisplay}/33 years)</div>
                                </div>
                            </div>

                            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
                                <div className="text-xs font-semibold text-purple-400 mb-1">Structural Theme</div>
                                <p className="text-sm">{saturnPlutoCycle.structuralTheme}</p>
                            </div>

                            <div className="flex-1 text-center">
                                <div className="text-xs font-semibold text-purple-400 mb-2">Key Themes</div>
                                <ul className="space-y-1.5 text-left inline-block">
                                    {saturnPlutoCycle.coreArchetype.slice(0, 3).map((theme, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-purple-400">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`${base}/saturn-pluto`}
                                className="mt-auto px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-xs font-medium text-center"
                            >
                                Deep Dive →
                            </Link>
                        </div>
                    </Card>
                )}

                {/* Jupiter-Saturn Cycle - RIGHT (comes second in the pattern) */}
                {jupiterSaturnCycle && (
                    <Card className="p-5 border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent flex flex-col">
                        <div className="mb-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-2xl">♃</span>
                                <span className="text-xl text-muted-foreground">×</span>
                                <span className="text-2xl">♄</span>
                            </div>
                            <h3 className="text-xl font-bold">Jupiter–Saturn</h3>
                            <p className="text-xs font-semibold text-amber-400 mb-1">The Economic Coordination Cycle</p>
                            <p className="text-xs text-muted-foreground italic">How growth systems expand</p>
                        </div>

                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="space-y-2 text-center">
                                <div>
                                    <div className="text-xs font-semibold text-amber-400 mb-1">Last Conjunction</div>
                                    <div className="text-base font-bold">{jupiterSaturnCycle.year} {jupiterSaturnCycle.symbol} {jupiterSaturnCycle.sign}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-amber-400 mb-1">Element</div>
                                    <div className="text-sm">{jupiterSaturnCycle.element}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-amber-400 mb-1">Phase</div>
                                    <div className="text-sm font-bold">{jsPhase} ({jsYearsInDisplay}/20 years)</div>
                                </div>
                            </div>

                            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
                                <div className="text-xs font-semibold text-amber-400 mb-1">Economic Theme</div>
                                <p className="text-sm">{jupiterSaturnCycle.economicTheme}</p>
                            </div>

                            <div className="flex-1 text-center">
                                <div className="text-xs font-semibold text-amber-400 mb-2">Key Themes</div>
                                <ul className="space-y-1.5 text-left inline-block">
                                    {jupiterSaturnCycle.coreArchetype.slice(0, 3).map((theme, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-amber-400">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`${base}/jupiter-saturn`}
                                className="mt-auto px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-xs font-medium text-center"
                            >
                                Deep Dive →
                            </Link>
                        </div>
                    </Card>
                )}
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>Saturn–Pluto creates the crisis. Jupiter–Saturn builds the solution.</p>
            </div>
        </div>
    );
}
