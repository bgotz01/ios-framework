//astro/macro/saturn-pluto
'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { SaturnPlutoCycle } from '@/components/astrology/macro/SaturnPlutoCycle';
import { SaturnPlutoHistoricalTable } from '@/components/astrology/macro/cycles/SaturnPlutoHistoricalTable';

export default function SaturnPlutoMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-8">
                    <MacroNavigation />
                </div>
                <hr className="border-border/50 mb-8" />
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">♄ × ♇ Saturn–Pluto Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        The 33-year structural crisis cycle that resets power
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Saturn-Pluto Cycle Component */}
                    <SaturnPlutoCycle />

                    {/* Core Symbolism Section */}
                    <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">Core Symbolism</h2>
                                <p className="text-muted-foreground">
                                    Where structure meets transformation — the cycle of breakdown and reconstruction
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm">
                                    Saturn–Pluto conjunctions occur approximately every 33-38 years, marking periods when
                                    existing power structures face extreme pressure. These are not gentle transitions —
                                    they are periods of crisis, collapse, and forced reconstruction.
                                </p>

                                {/* Planet Roles */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-500/10 rounded-lg border border-slate-500/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">♄</span>
                                            <div className="text-lg font-bold">Saturn</div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Structure, institutions, order
                                        </p>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                            <li>• Boundaries and limits</li>
                                            <li>• Authority and legitimacy</li>
                                            <li>• Established systems</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">♇</span>
                                            <div className="text-lg font-bold">Pluto</div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Power, destruction, transformation
                                        </p>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                            <li>• Hidden forces surfacing</li>
                                            <li>• Breakdown and rebirth</li>
                                            <li>• Fundamental power shifts</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Together */}
                                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                    <h3 className="text-sm font-semibold text-purple-400 mb-3">
                                        Together: Structural Breakdown → Reconstruction of Power
                                    </h3>
                                    <p className="text-sm">
                                        When Saturn (structure) meets Pluto (transformation), existing institutions and power
                                        arrangements face existential pressure. What cannot adapt is destroyed. What survives
                                        is fundamentally transformed.
                                    </p>
                                </div>

                                {/* What These Periods Coincide With */}
                                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                                    <h3 className="text-sm font-semibold text-red-400 mb-3">
                                        These periods often coincide with:
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <div className="p-3 bg-red-500/5 rounded border border-red-500/20 text-center">
                                            <div className="text-sm font-semibold">Wars</div>
                                        </div>
                                        <div className="p-3 bg-red-500/5 rounded border border-red-500/20 text-center">
                                            <div className="text-sm font-semibold">Financial crises</div>
                                        </div>
                                        <div className="p-3 bg-red-500/5 rounded border border-red-500/20 text-center">
                                            <div className="text-sm font-semibold">Institutional collapse</div>
                                        </div>
                                        <div className="p-3 bg-red-500/5 rounded border border-red-500/20 text-center">
                                            <div className="text-sm font-semibold">Regime changes</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-3 italic">
                                        Not because astrology "causes" them — but because the symbolism aligns with periods
                                        of extreme structural pressure.
                                    </p>
                                </div>

                                {/* The Sweet Spot */}
                                <div className="p-4 bg-muted/30 rounded-lg border border-muted">
                                    <h3 className="text-sm font-semibold mb-3">Why This Cycle Matters</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        At ~33 years, this cycle captures generational turning points in how power and
                                        institutions are organized:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="flex items-center gap-3 p-3 bg-background rounded border border-border">
                                            <span className="text-2xl">♄</span>
                                            <div>
                                                <div className="text-sm font-semibold">Saturn = Structure</div>
                                                <div className="text-xs text-muted-foreground">29-year cycle</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-background rounded border border-border">
                                            <span className="text-2xl">♇</span>
                                            <div>
                                                <div className="text-sm font-semibold">Pluto = Power</div>
                                                <div className="text-xs text-muted-foreground">248-year cycle</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        Their conjunction marks the moment when structural limits (Saturn) collide with
                                        transformative forces (Pluto) — creating the conditions for systemic reset.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <SaturnPlutoHistoricalTable />
                </div>
            </div>
        </div>
    );
}
