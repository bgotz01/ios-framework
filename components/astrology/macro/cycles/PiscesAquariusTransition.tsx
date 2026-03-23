'use client';

import { Card } from '@/components/ui/card';

export function PiscesAquariusTransition() {
    return (
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <header className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl" aria-hidden="true">
                        ♓
                    </span>
                    <span className="text-3xl text-muted-foreground" aria-hidden="true">
                        →
                    </span>
                    <span className="text-4xl" aria-hidden="true">
                        ♒
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">The Pisces–Aquarius Transition</h2>
                        <p className="text-sm text-muted-foreground">
                            We are living through a 400-year paradigm shift
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <p className="text-sm text-purple-900 dark:text-purple-100">
                        Astrological ages don't flip like a switch. The transition between ages is a gradual,
                        multi-century process where the old paradigm dissolves while the new one emerges.
                        We are currently in the overlap zone where Piscean structures (faith-based institutions)
                        are breaking down and Aquarian patterns (network-based systems) are forming.
                    </p>
                </div>
            </header>

            {/* Timeline Visualization */}
            <div className="space-y-6">
                <h3 className="text-lg font-semibold">Transition Timeline</h3>

                <div className="relative py-12 px-8">
                    {/* Timeline Bar with Gradient */}
                    <div className="relative h-3 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-l-full">
                        <div className="absolute left-0 top-0 h-full w-[42.8%] bg-cyan-500 rounded-l-full" />
                        <div className="absolute left-[42.8%] top-0 h-full w-[9.5%] bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500" />
                        <div className="absolute left-[52.3%] top-0 h-full w-[47.7%] bg-blue-500 rounded-r-full" />
                    </div>

                    {/* Timeline Markers */}
                    <div className="relative mt-8">
                        {/* AD 1 - Start of Pisces */}
                        <div className="absolute left-0 -translate-x-1/2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full border-2 border-background" />
                                <div className="text-center whitespace-nowrap">
                                    <div className="text-xs font-semibold text-cyan-400">AD 1</div>
                                    <div className="text-[10px] text-muted-foreground">Pisces begins</div>
                                </div>
                            </div>
                        </div>

                        {/* 2025 - NOW */}
                        <div className="absolute left-[48.2%] -translate-x-1/2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-5 h-5 bg-amber-500 rounded-full border-4 border-background shadow-lg animate-pulse" />
                                <div className="text-center whitespace-nowrap">
                                    <div className="text-sm font-bold text-amber-400">NOW</div>
                                </div>
                            </div>
                        </div>

                        {/* 4000 - End of Aquarius */}
                        <div className="absolute right-0 translate-x-1/2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-background" />
                                <div className="text-center whitespace-nowrap">
                                    <div className="text-xs font-semibold text-blue-400">4000</div>
                                    <div className="text-[10px] text-muted-foreground">Age ends</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase Labels */}
                    <div className="relative mt-24 grid grid-cols-3 gap-6">
                        {/* Pisces Dominant */}
                        <div className="text-center px-2">
                            <div className="text-sm font-semibold text-cyan-400 mb-1">AD 1 – 1800</div>
                            <div className="text-xs text-muted-foreground">Age of Pisces</div>
                            <div className="text-xs font-bold text-cyan-400 mt-1">DOMINANT</div>
                            <div className="text-xs text-muted-foreground mt-1">(1,800 years)</div>
                        </div>

                        {/* Transition Period */}
                        <div className="text-center px-2">
                            <div className="text-sm font-semibold text-purple-400 mb-1">1800 – 2200</div>
                            <div className="text-xs text-muted-foreground">Pisces → Aquarius</div>
                            <div className="text-xs font-bold text-purple-400 mt-1">TRANSITION</div>
                            <div className="text-xs text-muted-foreground mt-1">(400 years)</div>
                        </div>

                        {/* Aquarius Dominant */}
                        <div className="text-center px-2">
                            <div className="text-sm font-semibold text-blue-400 mb-1">2200 – 4000</div>
                            <div className="text-xs text-muted-foreground">Age of Aquarius</div>
                            <div className="text-xs font-bold text-blue-400 mt-1">DOMINANT</div>
                            <div className="text-xs text-muted-foreground mt-1">(1,800 years)</div>
                        </div>
                    </div>
                </div>

                {/* Two Column Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {/* Pisces Dissolving */}
                    <Card className="p-6 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">♓</span>
                                <div>
                                    <h3 className="text-xl font-bold">Pisces Dissolving</h3>
                                    <p className="text-xs text-muted-foreground">What is breaking down</p>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-cyan-400 mb-2">Institutional Structures</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Religious institutions losing authority and membership</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Traditional media gatekeepers fragmenting</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Faith-based consensus mechanisms eroding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Hierarchical organizational models under stress</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-cyan-400 mb-2">Cultural Patterns</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Decline of shared narratives and universal truths</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Martyrdom and sacrifice narratives losing power</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Spiritual authority questioned by empirical evidence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Compassion fatigue and empathy exhaustion</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-cyan-400 mb-2">Economic Models</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Centralized banking monopolies challenged</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Fiat currency trust declining</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400">•</span>
                                        <span>Top-down economic planning failing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    {/* Aquarius Forming */}
                    <Card className="p-6 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">♒</span>
                                <div>
                                    <h3 className="text-xl font-bold">Aquarius Forming</h3>
                                    <p className="text-xs text-muted-foreground">What is emerging</p>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-blue-400 mb-2">Network Structures</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Decentralized coordination mechanisms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Platform-mediated collective intelligence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Algorithmic verification replacing trust</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Horizontal organizational models scaling</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-blue-400 mb-2">Cultural Patterns</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Knowledge and data as primary values</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Collective problem-solving over individual heroism</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Transparency and verification culture</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Global coordination without central authority</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-blue-400 mb-2">Economic Models</div>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Cryptocurrency and digital asset systems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Network effects as primary value driver</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span>Algorithmic markets and automated coordination</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Key Insight */}
                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 mt-6">
                    <div className="text-sm font-semibold text-amber-400 mb-2">
                        💡 Key Insight
                    </div>
                    <p className="text-sm text-muted-foreground">
                        The chaos and instability of our current era (2025) is not random — it's the predictable
                        turbulence of a civilizational paradigm shift. We are approximately 56% through the
                        transition period (1800–2200), where both paradigms coexist and compete. The old structures
                        are too weak to maintain order, but the new structures are not yet strong enough to replace them.
                    </p>
                </div>
            </div>
        </section>
    );
}
