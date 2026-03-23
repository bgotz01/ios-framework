'use client';

import { Card } from '@/components/ui/card';
import { Flame, Swords, Scale } from 'lucide-react';

export function NeptuneAriesPhases() {
    const phases = [
        {
            icon: Flame,
            years: '2025–2029',
            title: 'Identity Ignites',
            phaseLabel: 'Phase 1 — Ignition',
            phaseType: 'Awakening',
            tone: 'Polarizing, urgent, mobilizing',
            isCurrent: true,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Identity becomes central',
                        'Belief hardens into alignment',
                        '"Choose a side" rhetoric rises',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'Capital rotates toward strategic sectors',
                        'Industrial policy accelerates',
                        'Early geopolitical capital fragmentation',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'AI + defense integration',
                        'Sovereign tech stack development',
                        'Energy security innovation',
                    ],
                },
            ],
            insight: 'The myth of sacred identity takes hold.',
        },
        {
            icon: Swords,
            years: '2029–2034',
            title: 'Belief Mobilizes',
            phaseLabel: 'Phase 2 — Mobilization',
            phaseType: 'Intensification',
            tone: 'Militant, structural, defining',
            isCurrent: false,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Ideology becomes mission',
                        'Moral framing of economic policy',
                        'Conflict rhetoric normalizes',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'Strategic overinvestment risk',
                        'Capital blocs form (East/West or similar divides)',
                        'State-directed spending expands',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'Defense-tech scaling',
                        'Cyber & information warfare systems',
                        'Autonomous systems maturity',
                    ],
                },
            ],
            insight: 'Action validates truth. The illusion peaks.',
        },
        {
            icon: Scale,
            years: '2034–2039',
            title: 'Reality Tests the Myth',
            phaseLabel: 'Phase 3 — Reckoning or Consolidation',
            phaseType: 'Dissolution',
            tone: 'Sobering, corrective, recalibrating',
            isCurrent: false,
            domains: [
                {
                    title: 'Narrative',
                    items: [
                        'Myth tested by consequences',
                        'Fatigue from polarization',
                        'Identity recalibration',
                    ],
                },
                {
                    title: 'Economic',
                    items: [
                        'Overcapacity in strategic sectors',
                        'Debt stress from mobilization spend',
                        'Market correction in ideological assets',
                    ],
                },
                {
                    title: 'Tech',
                    items: [
                        'Consolidation of dominant platforms',
                        'Regulation of powerful AI systems',
                        'Civilian spillover from defense innovation',
                    ],
                },
            ],
            insight: 'The fog clears. What remains is real.',
        },
    ];

    return (
        <Card className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">🌊 Three Phases of Neptune in Aries</h2>
                <p className="text-muted-foreground">
                    The illusion of sacred identity unfolds in three waves
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {phases.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                        <Card
                            key={index}
                            className={`p-6 flex flex-col ${phase.isCurrent ? 'border-cyan-500 bg-cyan-500/5' : ''
                                }`}
                        >
                            {/* Header - Fixed height */}
                            <div className="mb-4 h-[140px] text-center">
                                <div className="flex items-center justify-between mb-3">
                                    <Icon className="w-7 h-7 text-cyan-400" />
                                    {phase.isCurrent && (
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-cyan-500 text-white">
                                            NOW
                                        </span>
                                    )}
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{phase.years}</div>
                                <h3 className="text-lg font-bold mb-2 leading-tight">{phase.title}</h3>
                                <div className="text-xs text-cyan-400/70 mb-3">{phase.phaseLabel}</div>
                            </div>

                            {/* Phase Type - Styled prominently - Fixed height */}
                            <div className="mb-4 p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-500 rounded h-[72px] flex flex-col justify-center">
                                <div className="text-xs font-semibold text-cyan-400 mb-1">Phase</div>
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
                                        <div className="text-xs font-semibold text-cyan-400 mb-2">
                                            {domain.title}
                                        </div>
                                        <ul className="text-sm space-y-1.5 text-muted-foreground">
                                            {domain.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2">
                                                    <span className="text-cyan-400">•</span>
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
