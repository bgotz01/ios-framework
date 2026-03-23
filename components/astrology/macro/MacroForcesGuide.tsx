// components/astrology/macro/MacroForcesGuide.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function MacroForcesGuide() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="space-y-4">
                {/* Structural Titans */}
                <Section
                    title="1. The Structural Titans (Civilizational Scale)"
                    subtitle="These shape eras, not just years"
                    isExpanded={expandedSection === 'titans'}
                    onToggle={() => toggleSection('titans')}
                >
                    <div className="space-y-6">
                        {/* Pluto */}
                        <PlanetCard
                            symbol="♇"
                            name="Pluto Transits"
                            color="text-violet-600 dark:text-violet-400"
                            cycle="~248 years"
                            signDuration="12–30 years"
                            represents={[
                                'Power',
                                'Control structures',
                                'Collapse and regeneration',
                                'Hidden forces',
                                'Debt, leverage, shadow material'
                            ]}
                        >
                            <div className="mt-3 space-y-2">
                                <p className="text-sm text-foreground">
                                    When Pluto changes signs → institutional transformation.
                                </p>
                                <div className="bg-violet-50 dark:bg-violet-950/30 p-3 rounded-lg border border-violet-200 dark:border-violet-800">
                                    <p className="text-sm font-semibold text-violet-900 dark:text-violet-100 mb-1">
                                        Examples:
                                    </p>
                                    <ul className="text-sm text-violet-800 dark:text-violet-200 space-y-1">
                                        <li>• Pluto in Capricorn (2008–2024) → financial crisis, institutional decay</li>
                                        <li>• Pluto entering Aquarius → decentralization themes, networks, AI, power diffusion</li>
                                        <li>• Pluto transits to natal Sun/Moon/ASC = life-defining restructures</li>
                                    </ul>
                                </div>
                                <p className="text-sm font-semibold text-foreground italic">
                                    This is the ultimate "regime reset" planet.
                                </p>
                            </div>
                        </PlanetCard>

                        {/* Neptune */}
                        <PlanetCard
                            symbol="♆"
                            name="Neptune Transits"
                            color="text-blue-600 dark:text-blue-400"
                            cycle="165 years"
                            signDuration="~14 years"
                            represents={[
                                'Ideology',
                                'Collective dreams',
                                'Illusion vs truth',
                                'Spiritual waves',
                                'Bubbles (financial or cultural)'
                            ]}
                        >
                            <div className="mt-3 space-y-2">
                                <p className="text-sm font-semibold text-foreground mb-1">
                                    When Neptune shifts signs:
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                    <li>• Narratives change</li>
                                    <li>• Collective beliefs dissolve</li>
                                    <li>• Bubbles inflate or pop</li>
                                </ul>
                                <p className="text-sm text-foreground">
                                    Neptune hard aspects = confusion periods, dissolving identity structures.
                                </p>
                                <p className="text-sm font-semibold text-foreground italic">
                                    Think of Neptune as the story-layer of macro reality.
                                </p>
                            </div>
                        </PlanetCard>

                        {/* Uranus */}
                        <PlanetCard
                            symbol="♅"
                            name="Uranus Transits"
                            color="text-teal-600 dark:text-teal-400"
                            cycle="84 years"
                            signDuration="~7 years"
                            represents={[
                                'Technological shocks',
                                'Revolution',
                                'Disruption',
                                'Innovation',
                                'Breakthrough or breakdown'
                            ]}
                        >
                            <div className="mt-3 space-y-2">
                                <p className="text-sm text-foreground">
                                    When Uranus changes signs → innovation shifts sectors.
                                </p>
                                <p className="text-sm font-semibold text-foreground mb-1">
                                    Uranus hard aspects often correspond with:
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                    <li>• Market volatility</li>
                                    <li>• Sudden political changes</li>
                                    <li>• Technology revolutions</li>
                                </ul>
                                <p className="text-sm font-semibold text-foreground italic">
                                    This is the shock transmitter of astrology.
                                </p>
                            </div>
                        </PlanetCard>
                    </div>
                </Section>

                {/* System Regulators */}
                <Section
                    title="2. The System Regulators (Economic / Institutional Scale)"
                    isExpanded={expandedSection === 'regulators'}
                    onToggle={() => toggleSection('regulators')}
                >
                    <div className="space-y-6">
                        {/* Saturn */}
                        <PlanetCard
                            symbol="♄"
                            name="Saturn Transits"
                            color="text-indigo-700 dark:text-indigo-400"
                            cycle="29.5 years"
                            signDuration="~2.5 years"
                            represents={['Structure', 'Regulation', 'Limits', 'Discipline']}
                        >
                            <div className="mt-3 space-y-2">
                                <p className="text-sm font-semibold text-foreground mb-1">
                                    Important macro markers:
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                    <li>• Saturn return (~29 years)</li>
                                    <li>• Saturn-Pluto conjunctions (major resets)</li>
                                    <li>• Saturn-Jupiter cycles (economic cycles)</li>
                                </ul>
                                <p className="text-sm text-foreground">
                                    Saturn = contraction and institutional accountability.
                                </p>
                                <p className="text-sm font-semibold text-foreground italic">
                                    If Pluto is regime reset, Saturn is regime enforcement.
                                </p>
                            </div>
                        </PlanetCard>

                        {/* Jupiter */}
                        <PlanetCard
                            symbol="♃"
                            name="Jupiter Transits"
                            color="text-purple-600 dark:text-purple-400"
                            cycle="12 years"
                            signDuration="~1 year"
                            represents={[
                                'Expansion',
                                'Liquidity',
                                'Growth',
                                'Optimism',
                                'Credit expansion'
                            ]}
                        >
                            <div className="mt-3 space-y-2">
                                <p className="text-sm font-semibold text-foreground mb-1">
                                    Jupiter cycles often correlate with:
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                    <li>• Growth phases</li>
                                    <li>• Risk-on sentiment</li>
                                    <li>• Capital expansion waves</li>
                                </ul>
                                <p className="text-sm text-foreground">
                                    Jupiter + Saturn conjunction (every ~20 years) = major economic pivot.
                                </p>
                            </div>
                        </PlanetCard>
                    </div>
                </Section>

                {/* Important Configurations */}
                <Section
                    title="3. The Most Important Macro Configurations"
                    subtitle="These matter more than single-planet moves"
                    isExpanded={expandedSection === 'configurations'}
                    onToggle={() => toggleSection('configurations')}
                >
                    <div className="space-y-4">
                        <ConfigurationCard
                            emoji="🔥"
                            title="Saturn–Pluto Conjunction"
                            description="Structural collapse & rebuild"
                            example="Last one: 2020"
                            color="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
                        />

                        <ConfigurationCard
                            emoji="⚡"
                            title="Uranus–Pluto Hard Aspects"
                            description="Revolutionary transformation"
                            example="1960s example"
                            color="bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800"
                        />

                        <ConfigurationCard
                            emoji="🌊"
                            title="Neptune–Pluto"
                            description="Generational spiritual waves"
                            example="Very rare"
                            color="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
                        />

                        <ConfigurationCard
                            emoji="💰"
                            title="Jupiter–Saturn Conjunction"
                            description="20-year economic era shifts"
                            example="2020 = shift to Air cycle"
                            color="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
                        />
                    </div>
                </Section>
            </div>
        </div>
    );
}

interface SectionProps {
    title: string;
    subtitle?: string;
    isExpanded: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

function Section({ title, subtitle, isExpanded, onToggle, children }: SectionProps) {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full p-4 bg-accent/30 hover:bg-accent/50 transition-colors flex items-center justify-between"
            >
                <div className="text-left">
                    <h3 className="font-semibold text-foreground">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
            </button>
            {isExpanded && (
                <div className="p-4 bg-card">
                    {children}
                </div>
            )}
        </div>
    );
}

interface PlanetCardProps {
    symbol: string;
    name: string;
    color: string;
    cycle: string;
    signDuration: string;
    represents: string[];
    children?: React.ReactNode;
}

function PlanetCard({ symbol, name, color, cycle, signDuration, represents, children }: PlanetCardProps) {
    return (
        <div className="p-4 rounded-lg bg-accent/50 border border-border">
            <div className="flex items-start gap-3 mb-3">
                <span className={`text-3xl ${color}`}>{symbol}</span>
                <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                        {name}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                            <span className="text-muted-foreground">Cycle: </span>
                            <span className="font-mono text-foreground">{cycle}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground">Sign duration: </span>
                            <span className="font-mono text-foreground">{signDuration}</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                            Represents:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            {represents.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

interface ConfigurationCardProps {
    emoji: string;
    title: string;
    description: string;
    example: string;
    color: string;
}

function ConfigurationCard({ emoji, title, description, example, color }: ConfigurationCardProps) {
    return (
        <div className={`p-4 rounded-lg border ${color}`}>
            <div className="flex items-start gap-3">
                <span className="text-2xl">{emoji}</span>
                <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                        {title}
                    </h4>
                    <p className="text-sm text-foreground/80 mb-1">
                        {description}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                        {example}
                    </p>
                </div>
            </div>
        </div>
    );
}
