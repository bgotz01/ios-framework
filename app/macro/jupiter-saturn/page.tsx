'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { JupiterSaturnCycle } from '@/components/astrology/macro/JupiterSaturnCycle';
import { JupiterSaturnHistoricalTable } from '@/components/astrology/macro/cycles/JupiterSaturnHistoricalTable';

export default function JupiterSaturnMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-8">
                    <MacroNavigation />
                </div>
                <hr className="border-border/50 mb-8" />
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">♃ × ♄ Jupiter–Saturn Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        The 20-year economic heartbeat that resets paradigms
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Jupiter-Saturn Cycle Component */}
                    <JupiterSaturnCycle />

                    <JupiterSaturnHistoricalTable />

                    {/* 200-Year Element Era Section */}
                    <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">The 200-Year Element Era</h2>
                                <p className="text-muted-foreground">
                                    The "Great Mutation" — how economic paradigms shift across centuries
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm">
                                    Because the conjunction shifts approximately 8 zodiac signs every ~200 years,
                                    the cycle gradually migrates to a new element. This creates multi-generational
                                    paradigm shifts in how wealth is created, stored, and distributed.
                                </p>

                                {/* Element Timeline */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                                        <div className="text-xs font-semibold text-red-400 mb-1">~1600–1800</div>
                                        <div className="text-lg font-bold text-red-400 mb-2">Fire Element</div>
                                        <p className="text-xs text-muted-foreground">
                                            Conquest, exploration, colonial expansion
                                        </p>
                                    </div>

                                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                                        <div className="text-xs font-semibold text-green-400 mb-1">~1800–2000</div>
                                        <div className="text-lg font-bold text-green-400 mb-2">Earth Element</div>
                                        <p className="text-xs text-muted-foreground">
                                            Industrial capitalism, material assets, tangible wealth
                                        </p>
                                    </div>

                                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                        <div className="text-xs font-semibold text-blue-400 mb-1">~2000–2200</div>
                                        <div className="text-lg font-bold text-blue-400 mb-2">Air Element</div>
                                        <p className="text-xs text-muted-foreground">
                                            Information economy, networks, digital assets
                                        </p>
                                    </div>
                                </div>

                                {/* Why This Matters */}
                                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                    <h3 className="text-sm font-semibold text-amber-400 mb-3">
                                        Why This Cycle Matters
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <p>
                                            The Jupiter–Saturn cycle is sometimes called the <strong>"Great Mutation"</strong> because
                                            it historically coincides with large economic paradigm shifts:
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-400">•</span>
                                                <span><strong>1800s →</strong> Industrial capitalism (Earth era begins)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-400">•</span>
                                                <span><strong>2000s →</strong> Information economy (Air era begins)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* The Sweet Spot */}
                                <div className="p-4 bg-muted/30 rounded-lg border border-muted">
                                    <h3 className="text-sm font-semibold mb-3">The Sweet Spot</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        This cycle works well in macro frameworks because it sits between:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="flex items-center gap-3 p-3 bg-background rounded border border-border">
                                            <span className="text-2xl">♃</span>
                                            <div>
                                                <div className="text-sm font-semibold">Jupiter = Expansion</div>
                                                <div className="text-xs text-muted-foreground">12-year cycle</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-background rounded border border-border">
                                            <span className="text-2xl">♄</span>
                                            <div>
                                                <div className="text-sm font-semibold">Saturn = Structure</div>
                                                <div className="text-xs text-muted-foreground">29-year cycle</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        At ~20 years, it captures the rhythm of generational economic shifts —
                                        long enough to be structural, short enough to be actionable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
