'use client';

import { Card } from '@/components/ui/card';
import { Zap, Rocket, Network } from 'lucide-react';

export function UranusGeminiPhases() {
    const phases = [
        {
            icon: Zap,
            years: '2026–2028',
            title: 'Shock to the Information Layer',
            phaseLabel: 'Phase 1 — Disruption',
            phaseType: 'Destabilization',
            tone: 'Chaotic, fragmenting, overwhelming',
            isCurrent: false,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Sudden destabilization of communication norms',
                        'AI-generated content overwhelms legacy systems',
                        'Truth fragmentation accelerates',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'Volatility in tech & media sectors',
                        'Rapid repricing of AI-exposed industries',
                        'Trade disruptions tied to digital infrastructure',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'Mass deployment of AI agents',
                        'Deepfake crisis moments',
                        'Breakthroughs in autonomous communication tools',
                    ],
                },
            ],
            insight: 'The information layer fractures. Nothing is certain.',
        },
        {
            icon: Rocket,
            years: '2028–2031',
            title: 'Acceleration & Arms Race',
            phaseLabel: 'Phase 2 — Escalation',
            phaseType: 'Intensification',
            tone: 'Competitive, rapid, militarized',
            isCurrent: false,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Information warfare becomes normalized',
                        'Competing digital ecosystems solidify',
                        'Speed becomes power',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'AI productivity shock visible in GDP',
                        'Cybersecurity spending surges',
                        'New data-driven asset classes emerge',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'Autonomous AI networks coordinating with minimal human input',
                        'Secure communication arms race',
                        'Early quantum communication applications',
                    ],
                },
            ],
            insight: 'Speed is survival. The race has no finish line.',
        },
        {
            icon: Network,
            years: '2031–2033',
            title: 'System Rewiring',
            phaseLabel: 'Phase 3 — Adaptation',
            phaseType: 'Integration',
            tone: 'Stabilizing, structural, transformative',
            isCurrent: false,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Society adapts to new cognitive baseline',
                        'Education & institutions restructure',
                        'Digital-native governance models tested',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'Market structure shifts (shorter cycles, faster reactions)',
                        'Consolidation among dominant AI platforms',
                        'Permanent shift in labor market skill demand',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'Human–AI hybrid workflows normalized',
                        'Infrastructure-level AI integration',
                        'New communication protocols replace legacy systems',
                    ],
                },
            ],
            insight: 'The new normal emerges. We are rewired.',
        },
    ];

    return (
        <Card className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">⚡ Three Phases of Uranus in Gemini</h2>
                <p className="text-muted-foreground">
                    The revolution of information unfolds in three waves
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {phases.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                        <Card
                            key={index}
                            className={`p-6 flex flex-col ${phase.isCurrent ? 'border-purple-500 bg-purple-500/5' : ''
                                }`}
                        >
                            {/* Header - Fixed height */}
                            <div className="mb-4 h-[140px] text-center">
                                <div className="flex items-center justify-between mb-3">
                                    <Icon className="w-7 h-7 text-purple-400" />
                                    {phase.isCurrent && (
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-purple-500 text-white">
                                            NOW
                                        </span>
                                    )}
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{phase.years}</div>
                                <h3 className="text-lg font-bold mb-2 leading-tight">{phase.title}</h3>
                                <div className="text-xs text-purple-400/70 mb-3">{phase.phaseLabel}</div>
                            </div>

                            {/* Phase Type - Styled prominently - Fixed height */}
                            <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-l-4 border-purple-500 rounded h-[72px] flex flex-col justify-center">
                                <div className="text-xs font-semibold text-purple-400 mb-1">Phase</div>
                                <div className="text-sm font-bold text-foreground">{phase.phaseType}</div>
                            </div>

                            {/* Metadata - Fixed height */}
                            <div className="mb-4 space-y-2 text-sm h-[56px]">
                                <div className="flex gap-2">
                                    <span className="text-muted-foreground min-w-[80px]">Tone:</span>
                                    <span className="text-foreground">{phase.tone}</span>
                                </div>
                            </div>

                            {/* Domains */}
                            <div className="flex-1 mb-4 space-y-4">
                                {phase.domains.map((domain, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-semibold text-purple-400 mb-2">
                                            {domain.title}
                                        </div>
                                        <ul className="text-sm space-y-1.5 text-muted-foreground">
                                            {domain.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2">
                                                    <span className="text-purple-400">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Insight - Always at bottom */}
                            <div className="mt-auto pt-4 border-t border-border">
                                <div className="text-sm italic text-muted-foreground">{phase.insight}</div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Card>
    );
}
