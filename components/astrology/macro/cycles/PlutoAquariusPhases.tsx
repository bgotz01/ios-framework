'use client';

import { Card } from '@/components/ui/card';
import { Zap, Network, Lock } from 'lucide-react';

export function PlutoAquariusPhases() {
    const phases = [
        {
            icon: Zap,
            years: '2024–~2029',
            title: 'Disruption of the Old Network',
            phaseLabel: 'Phase 1 — Early Aquarius',
            phaseType: 'Destabilization',
            archetype: 'Shock + exposure',
            tone: 'Volatile, experimental, polarized',
            isCurrent: true,
            themes: [
                'Expose fragility in network structures',
                'Trigger ideological clashes',
                'Reveal power embedded in platforms',
                'Accelerate technological adoption',
                'Battles over digital identity',
                'Decentralization vs platform capture',
                'Governance debates around AI',
                'Collapse of legacy coordination models',
                'Emergence of new collective movements',
            ],
            question: 'What is broken in our systems?',
            insight: 'Rewiring begins with short circuits.',
        },
        {
            icon: Network,
            years: '~2029–~2036',
            title: 'Power Consolidates in the Network Layer',
            phaseLabel: 'Phase 2 — Middle Aquarius',
            phaseType: 'Intensification',
            archetype: 'Deepest Pluto expression',
            tone: 'Structural, systemic, defining',
            isCurrent: false,
            themes: [
                'Formalization of new digital governance models',
                'Platform dominance or breakups',
                'AI integration into social infrastructure',
                'Codification of identity systems',
                'New definitions of citizenship / belonging',
            ],
            tension: 'Liberation through networks vs Control through networks',
            question: 'Who ultimately governs the architecture?',
            insight: 'The regime-defining period.',
        },
        {
            icon: Lock,
            years: '~2036–2043/44',
            title: 'Normalization of the New Order',
            phaseLabel: 'Phase 3 — Late Aquarius',
            phaseType: 'Consolidation',
            archetype: 'Mutation + stabilization',
            tone: 'Stabilizing, less chaotic, more entrenched',
            isCurrent: false,
            themes: [
                'Institutionalization of what began as rebellion',
                'Former disruptors becoming establishment',
                'Network power normalized',
                'Ideological extremes cooling into structure',
            ],
            note: 'The revolution becomes policy.',
            question: 'What version of the network survived?',
            insight: 'The collective has adapted.',
        },
    ];

    return (
        <Card className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">🌑 Three Phases of Pluto in Aquarius</h2>
                <p className="text-muted-foreground">
                    The transformation unfolds in three distinct waves
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {phases.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                        <Card
                            key={index}
                            className={`p-6 flex flex-col ${phase.isCurrent ? 'border-rose-500 bg-rose-500/5' : ''
                                }`}
                        >
                            {/* Header - Fixed height */}
                            <div className="mb-4 h-[140px] text-center">
                                <div className="flex items-center justify-between mb-3">
                                    <Icon className="w-7 h-7 text-rose-400" />
                                    {phase.isCurrent && (
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-rose-500 text-white">
                                            NOW
                                        </span>
                                    )}
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{phase.years}</div>
                                <h3 className="text-lg font-bold mb-2 leading-tight">{phase.title}</h3>
                                <div className="text-xs text-rose-400/70 mb-3">{phase.phaseLabel}</div>
                            </div>

                            {/* Phase Type - Styled prominently - Fixed height */}
                            <div className="mb-4 p-3 bg-gradient-to-r from-rose-500/10 to-red-500/10 border-l-4 border-rose-500 rounded h-[72px] flex flex-col justify-center">
                                <div className="text-xs font-semibold text-rose-400 mb-1">Phase</div>
                                <div className="text-sm font-bold text-foreground">{phase.phaseType}</div>
                            </div>

                            {/* Metadata - Fixed height */}
                            <div className="mb-4 space-y-2 text-sm h-[56px]">
                                <div className="flex gap-2">
                                    <span className="text-muted-foreground min-w-[80px]">Archetype:</span>
                                    <span className="text-foreground">{phase.archetype}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-muted-foreground min-w-[80px]">Tone:</span>
                                    <span className="text-foreground">{phase.tone}</span>
                                </div>
                            </div>

                            {/* Themes */}
                            <div className="flex-1 mb-4">
                                <div className="text-xs font-semibold text-muted-foreground mb-2">Key Themes</div>
                                <ul className="text-sm space-y-1.5 text-muted-foreground">
                                    {phase.themes.map((theme, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-rose-400">•</span>
                                            <span>{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tension or Note (if exists) - Fixed height */}
                            <div className="mb-4 h-[88px]">
                                {'tension' in phase && phase.tension && (
                                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg h-full flex flex-col justify-center">
                                        <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
                                            Core Tension
                                        </div>
                                        <div className="text-sm italic text-foreground">{phase.tension}</div>
                                    </div>
                                )}
                                {'note' in phase && phase.note && (
                                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg h-full flex flex-col justify-center">
                                        <div className="text-sm italic text-foreground">{phase.note}</div>
                                    </div>
                                )}
                            </div>

                            {/* Question - Fixed height */}
                            <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border h-[88px] flex flex-col justify-center">
                                <div className="text-xs font-semibold text-rose-400 mb-1">This phase asks:</div>
                                <div className="text-sm italic text-foreground">{phase.question}</div>
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
