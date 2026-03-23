'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AGE_CYCLES, getYearsIntoCurrentAge, getYearsUntilNextAge } from '@/lib/astrology/age-cycles-data';
import { ArrowRight } from 'lucide-react';

export function AgeCycle() {
    const pathname = usePathname();
    const isMacroRoute = pathname.startsWith('/macro');
    const base = isMacroRoute ? '/macro' : pathname.replace(/\/astro\/macro.*/, '/astro/macro');
    const yearsIntoAge = getYearsIntoCurrentAge();
    const yearsUntilNext = getYearsUntilNextAge();

    const piscesAge = AGE_CYCLES.find(age => age.age === 'Pisces');
    const aquariusAge = AGE_CYCLES.find(age => age.age === 'Aquarius');

    if (!piscesAge || !aquariusAge) return null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">The Age Transition: Pisces → Aquarius</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We are living through a ~2,150-year civilizational paradigm shift
                </p>
                <div className="mt-4">
                    <Link
                        href={`${base}/age-cycle`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
                    >
                        Deep Dive →
                    </Link>
                </div>
            </div>

            {/* Explainer Card */}
            <Card className="p-6 bg-purple-500/5 border-purple-500/20">
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-purple-400">What Are Astrological Ages?</h3>
                    <p className="text-sm text-muted-foreground">
                        Due to Earth's axial precession, the position of the Sun at the spring equinox slowly shifts
                        backward through the zodiac, spending approximately 2,150 years in each sign. This creates
                        multi-millennial "ages" that correlate with fundamental shifts in human civilization,
                        religion, and social organization.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        We are currently in the late stages of the Age of Pisces (~1 AD – ~2100 AD) and transitioning
                        into the Age of Aquarius. This transition period is characterized by the breakdown of Piscean
                        structures (faith-based institutions) and the emergence of Aquarian patterns (network-based systems).
                    </p>
                </div>
            </Card>

            {/* Timeline Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-cyan-500/5 border-cyan-500/20">
                    <div className="text-xs font-semibold text-cyan-400 mb-1">Years in Pisces Age</div>
                    <div className="text-2xl font-bold">~{yearsIntoAge} years</div>
                    <div className="text-xs text-muted-foreground mt-1">Since ~1 AD</div>
                </Card>
                <Card className="p-4 bg-blue-500/5 border-blue-500/20">
                    <div className="text-xs font-semibold text-blue-400 mb-1">Years Until Aquarius Dominance</div>
                    <div className="text-2xl font-bold">~{yearsUntilNext} years</div>
                    <div className="text-xs text-muted-foreground mt-1">Approximate transition to ~2100 AD</div>
                </Card>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pisces - Declining */}
                <Card className="p-6 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{piscesAge.symbol}</span>
                                <div>
                                    <h3 className="text-xl font-bold">Age of Pisces</h3>
                                    <p className="text-xs text-muted-foreground">{piscesAge.period}</p>
                                </div>
                            </div>
                            <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-semibold">
                                DECLINING
                            </span>
                        </div>

                        <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                            <div className="text-xs font-semibold text-cyan-400 mb-1">Civilization Basis</div>
                            <p className="text-sm">{piscesAge.civilizationBasis[0]}</p>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-cyan-400 mb-2">Key Characteristics</div>
                            <ul className="space-y-1.5">
                                {piscesAge.keyThemes.map((theme, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-cyan-400">•</span>
                                        <span>{theme}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-cyan-400 mb-2">Historical Examples</div>
                            <ul className="space-y-1.5">
                                {piscesAge.examples.map((example, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="text-cyan-400 opacity-60">→</span>
                                        <span>{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Aquarius - Emerging */}
                <Card className="p-6 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{aquariusAge.symbol}</span>
                                <div>
                                    <h3 className="text-xl font-bold">Age of Aquarius</h3>
                                    <p className="text-xs text-muted-foreground">{aquariusAge.period}</p>
                                </div>
                            </div>
                            <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full font-semibold">
                                EMERGING
                            </span>
                        </div>

                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <div className="text-xs font-semibold text-blue-400 mb-1">Civilization Basis</div>
                            <p className="text-sm">{aquariusAge.civilizationBasis[0]}</p>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-blue-400 mb-2">Key Characteristics</div>
                            <ul className="space-y-1.5">
                                {aquariusAge.keyThemes.map((theme, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-blue-400">•</span>
                                        <span>{theme}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-blue-400 mb-2">Emerging Examples</div>
                            <ul className="space-y-1.5">
                                {aquariusAge.examples.map((example, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="text-blue-400 opacity-60">→</span>
                                        <span>{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Transition Dynamics */}
            <Card className="p-6 bg-purple-500/5 border-purple-500/20">
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-2xl">🌊</span>
                        <h3 className="text-lg font-semibold text-purple-400">The Transition Period</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <div className="text-sm font-semibold text-purple-400 mb-2">What's Breaking Down</div>
                            <ul className="space-y-1.5 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Faith-based institutional authority</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Centralized religious power</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Belief without verification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Hierarchical control structures</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-purple-400 mb-2">What's Emerging</div>
                            <ul className="space-y-1.5 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Network-based coordination</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Decentralized power distribution</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Knowledge and data-driven systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Technology-mediated collective intelligence</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-purple-400 mb-2">Current Tensions</div>
                            <ul className="space-y-1.5 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Old institutions vs new platforms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Faith vs empirical verification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Centralized vs distributed power</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Traditional authority vs network consensus</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <p className="text-sm text-muted-foreground">
                            Age transitions are not sharp boundaries but gradual shifts spanning decades or centuries.
                            The overlap period creates simultaneous breakdown and emergence—explaining why we see both
                            the collapse of traditional religious/institutional authority and the rapid rise of
                            decentralized, technology-mediated coordination systems.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>
                    Astrological ages are the longest macro cycle, operating at civilizational timescales.
                    They provide context for understanding multi-generational paradigm shifts.
                </p>
            </div>
        </div>
    );
}
