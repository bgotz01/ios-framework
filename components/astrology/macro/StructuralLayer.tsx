'use client';

import { Card } from '@/components/ui/card';
import { PLUTO_CYCLES } from '@/lib/astrology/pluto-cycles-data';
import { NEPTUNE_CYCLES } from '@/lib/astrology/neptune-cycles-data';
import { URANUS_CYCLES } from '@/lib/astrology/uranus-cycles-data';
import Link from 'next/link';

export function StructuralLayer({ userId }: { userId?: string }) {
    const base = userId ? `/arc/personal/${userId}/astro/macro` : `/macro`;
    const currentPluto = PLUTO_CYCLES.find(c => c.isCurrent);
    const currentNeptune = NEPTUNE_CYCLES.find(c => c.isCurrent);
    const currentUranus = URANUS_CYCLES.find(c => c.isCurrent);

    // Helper to calculate cycle duration from timeframe
    const getCycleDuration = (timeframe: string): string => {
        const parts = timeframe.split('–');
        if (parts.length !== 2) return 'Unknown';

        const startMatch = parts[0].trim().match(/\d{4}/);
        const endMatch = parts[1].trim().match(/\d{4}/);

        if (!startMatch || !endMatch) return 'Unknown';

        const startYear = parseInt(startMatch[0]);
        const endYear = parseInt(endMatch[0]);
        const duration = endYear - startYear;

        return `${duration} years`;
    };

    // Calculate phase for Pluto (simple approximation)
    const getPlutoPhase = () => {
        if (!currentPluto) return 'Unknown';
        const start = new Date('2024-11-19');
        const end = new Date('2044-01-19');
        const now = new Date();
        const total = end.getTime() - start.getTime();
        const elapsed = now.getTime() - start.getTime();
        const progress = elapsed / total;

        if (progress < 0.33) return 'Early';
        if (progress < 0.67) return 'Mid';
        return 'Late';
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">The Structural Layer</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The three slowest planets define the foundation of our era.
                    Everything else is secondary.
                </p>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pluto - Regime Architecture */}
                <Card className="p-5 border-2 border-rose-500/30 bg-gradient-to-br from-rose-500/5 to-transparent flex flex-col">
                    <div className="mb-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">♇</span>
                            <h3 className="text-xl font-bold">Pluto</h3>
                        </div>
                        <p className="text-xs font-semibold text-rose-400 mb-1">Regime Architecture</p>
                        <p className="text-xs text-muted-foreground italic">Where power lives</p>
                    </div>

                    {currentPluto && (
                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="space-y-2 text-center">
                                <div>
                                    <div className="text-xs font-semibold text-rose-400 mb-1">Current Sign</div>
                                    <div className="text-base font-bold">{currentPluto.symbol} {currentPluto.sign}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-rose-400 mb-1">Years Active</div>
                                    <div className="text-sm">{currentPluto.timeframe}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-rose-400 mb-1">Cycle Duration</div>
                                    <div className="text-sm">{getCycleDuration(currentPluto.timeframe)}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-rose-400 mb-1">Phase</div>
                                    <div className="text-sm font-bold">{getPlutoPhase()}</div>
                                </div>
                            </div>

                            <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20 text-center">
                                <div className="text-xs font-semibold text-rose-400 mb-1">Synthesis</div>
                                <p className="text-sm">{currentPluto.coreArchetype[0]}</p>
                            </div>

                            <div className="flex-1">
                                <div className="text-xs font-semibold text-rose-400 mb-2 text-center">Key Themes</div>
                                <ul className="space-y-1.5 text-left inline-block">
                                    {currentPluto.coreArchetype.slice(1, 4).map((theme, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-rose-400">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`${base}/pluto`}
                                className="mt-auto px-3 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors text-xs font-medium text-center"
                            >
                                Deep Dive →
                            </Link>
                        </div>
                    )}
                </Card>

                {/* Neptune - Narrative Layer */}
                <Card className="p-5 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent flex flex-col">
                    <div className="mb-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">♆</span>
                            <h3 className="text-xl font-bold">Neptune</h3>
                        </div>
                        <p className="text-xs font-semibold text-cyan-400 mb-1">Narrative / Myth Layer</p>
                        <p className="text-xs text-muted-foreground italic">What the collective believes is real</p>
                    </div>

                    {currentNeptune && (
                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="space-y-2 text-center">
                                <div>
                                    <div className="text-xs font-semibold text-cyan-400 mb-1">Current Sign</div>
                                    <div className="text-base font-bold">{currentNeptune.symbol} {currentNeptune.sign}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-cyan-400 mb-1">Years Active</div>
                                    <div className="text-sm">{currentNeptune.timeframe}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-cyan-400 mb-1">Cycle Duration</div>
                                    <div className="text-sm">{getCycleDuration(currentNeptune.timeframe)}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-cyan-400 mb-1">Phase</div>
                                    <div className="text-sm font-bold">Early</div>
                                </div>
                            </div>

                            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-center">
                                <div className="text-xs font-semibold text-cyan-400 mb-1">Synthesis</div>
                                <p className="text-sm">{currentNeptune.archetypalPattern[0]}</p>
                            </div>

                            <div className="flex-1">
                                <div className="text-xs font-semibold text-cyan-400 mb-2 text-center">Key Themes</div>
                                <ul className="space-y-1.5 text-left inline-block">
                                    {currentNeptune.dominantMyth.slice(0, 3).map((myth, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-cyan-400">•</span>
                                            <span>{myth}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`${base}/neptune`}
                                className="mt-auto px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-xs font-medium text-center"
                            >
                                Deep Dive →
                            </Link>
                        </div>
                    )}
                </Card>

                {/* Uranus - Disruption Layer */}
                <Card className="p-5 border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent flex flex-col">
                    <div className="mb-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">♅</span>
                            <h3 className="text-xl font-bold">Uranus</h3>
                        </div>
                        <p className="text-xs font-semibold text-orange-400 mb-1">Disruption Layer</p>
                        <p className="text-xs text-muted-foreground italic">Where volatility enters</p>
                    </div>

                    {currentUranus && (
                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="space-y-2 text-center">
                                <div>
                                    <div className="text-xs font-semibold text-orange-400 mb-1">Current Sign</div>
                                    <div className="text-base font-bold">{currentUranus.symbol} {currentUranus.sign}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-orange-400 mb-1">Years Active</div>
                                    <div className="text-sm">{currentUranus.timeframe}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-orange-400 mb-1">Cycle Duration</div>
                                    <div className="text-sm">{getCycleDuration(currentUranus.timeframe)}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-orange-400 mb-1">Phase</div>
                                    <div className="text-sm font-bold">Early</div>
                                </div>
                            </div>

                            <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 text-center">
                                <div className="text-xs font-semibold text-orange-400 mb-1">Synthesis</div>
                                <p className="text-sm">{currentUranus.coreArchetype[0]}</p>
                            </div>

                            <div className="flex-1">
                                <div className="text-xs font-semibold text-orange-400 mb-2 text-center">Key Themes</div>
                                <ul className="space-y-1.5 text-left inline-block">
                                    {currentUranus.coreArchetype.slice(1, 4).map((theme, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-orange-400">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`${base}/uranus`}
                                className="mt-auto px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-xs font-medium text-center"
                            >
                                Deep Dive →
                            </Link>
                        </div>
                    )}
                </Card>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>These three planets are mandatory. Everything else is secondary.</p>
            </div>
        </div>
    );
}
