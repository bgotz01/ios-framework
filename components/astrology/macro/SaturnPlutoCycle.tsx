//components/astrology/macro/SaturnPlutoCycle
'use client';

import { Card } from '@/components/ui/card';
import { SATURN_PLUTO_CONJUNCTIONS, CYCLE_PHASES, CURRENT_CYCLE, getSaturnPlutoYearsIntoCycle, getSaturnPlutoCyclePhase } from '@/lib/astrology/saturn-pluto-cycles-data';

export function SaturnPlutoCycle({ userId }: { userId?: string }) {
    const currentConjunction = SATURN_PLUTO_CONJUNCTIONS.find(c => c.year === CURRENT_CYCLE.conjunction);
    const previousConjunction = SATURN_PLUTO_CONJUNCTIONS.find(c => c.year === 1982);
    const yearsIn = getSaturnPlutoYearsIntoCycle();
    const phase = getSaturnPlutoCyclePhase();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Saturn–Pluto Cycle</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The 33-year structural crisis cycle. Where order meets transformation.
                </p>
            </div>

            {/* Main Cycle Card */}
            <Card className="p-6 border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent">
                <div className="space-y-6">
                    {/* Header Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">♄</span>
                            <span className="text-2xl text-muted-foreground">×</span>
                            <span className="text-3xl">♇</span>
                            <h3 className="text-2xl font-bold ml-2">33-Year Structural Crisis Cycle</h3>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                            Saturn (structure) conjuncts Pluto (power) every ~33 years, marking periods of extreme structural pressure
                        </p>
                    </div>

                    {/* Current Cycle Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-1">Last Conjunction</div>
                            <div className="text-lg font-bold">{CURRENT_CYCLE.conjunction}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-1">Sign</div>
                            <div className="text-lg font-bold">{currentConjunction?.symbol} {currentConjunction?.sign}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-1">Current Phase</div>
                            <div className="text-lg font-bold">{phase}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-1">Progress</div>
                            <div className="text-lg font-bold">{yearsIn}/{CURRENT_CYCLE.totalCycleLength} years</div>
                        </div>
                    </div>

                    {/* Core Symbolism */}
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-sm font-semibold text-purple-400 mb-2">Core Symbolism</div>
                        <p className="text-base font-bold">Structural breakdown → reconstruction of power</p>
                    </div>

                    {/* Themes & Historical Events - Two Columns */}
                    {currentConjunction && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Core Archetype */}
                            <div>
                                <div className="text-sm font-semibold text-purple-400 mb-2">Core Archetype</div>
                                <ul className="space-y-2">
                                    {currentConjunction.coreArchetype.slice(0, 3).map((theme, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <span className="text-purple-400 mt-1">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Crisis Character */}
                            <div>
                                <div className="text-sm font-semibold text-purple-400 mb-2">Crisis Character</div>
                                <ul className="space-y-2">
                                    {currentConjunction.crisisCharacter.slice(0, 3).map((event, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <span className="text-purple-400">▪</span>
                                            <span>{event}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Saturn & Pluto Roles - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Saturn */}
                        <div>
                            <div className="text-sm font-semibold text-purple-400 mb-2">
                                ♄ Saturn's Role
                            </div>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Structure and institutions</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Order and boundaries</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Legitimacy and authority</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pluto */}
                        <div>
                            <div className="text-sm font-semibold text-purple-400 mb-2">
                                ♇ Pluto's Role
                            </div>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Power and transformation</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Destruction and rebirth</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-purple-400/60">→</span>
                                    <span className="text-muted-foreground">Hidden forces surfacing</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Coincides With & Interpretation - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Coincides With */}
                        <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                            <div className="text-sm font-semibold text-red-400 mb-2">⚠ Often Coincides With</div>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-red-400">!</span>
                                    <span className="text-muted-foreground">Wars</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-red-400">!</span>
                                    <span className="text-muted-foreground">Financial crises</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-red-400">!</span>
                                    <span className="text-muted-foreground">Institutional collapse</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <span className="text-red-400">!</span>
                                    <span className="text-muted-foreground">Major regime changes</span>
                                </li>
                            </ul>
                        </div>

                        {/* Interpretation Note */}
                        <div className="p-4 bg-muted/30 rounded-lg border border-muted">
                            <div className="text-sm font-semibold mb-2">Interpretation</div>
                            <p className="text-sm text-muted-foreground">
                                Not because astrology "causes" them — but because the symbolism aligns with periods of extreme structural pressure.
                                These conjunctions mark generational turning points in how power and institutions are organized.
                            </p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>
                    Saturn–Pluto conjunctions have marked major structural crises throughout history.
                    Each cycle brings a fundamental reset in how power and institutions are organized.
                </p>
            </div>
        </div>
    );
}
