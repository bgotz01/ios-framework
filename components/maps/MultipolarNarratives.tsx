'use client'

import { useState } from 'react'
import { PressureStabilityBar } from './PressureStabilityBar'

const layers = [
    {
        name: 'System Layer',
        tag: 'Economic / Structural',
        narratives: [
            { title: 'Debt Reliance', desc: 'System sustained by credit, not organic growth' },
            { title: 'Asset Inflation vs Real Economy', desc: 'Wealth grows in assets, not wages/productivity' },
            { title: 'Fiscal Dominance', desc: 'Governments must spend; central banks accommodate' },
        ],
    },
    {
        name: 'Technology Layer',
        tag: 'Tech / Digital',
        narratives: [
            { title: 'AI Emergence', desc: 'Productivity + control + strategic advantage' },
            { title: 'Digital Control Systems', desc: 'Data, surveillance, algorithmic governance' },
            { title: 'Cyber / Information Warfare', desc: 'Conflict shifts from physical → digital' },
        ],
    },
    {
        name: 'Geopolitical Layer',
        tag: 'Global Power',
        narratives: [
            { title: 'Energy Chokepoints', desc: 'e.g., Strait of Hormuz (oil leverage)' },
            { title: 'Multipolar Competition', desc: 'U.S. vs China vs regional powers' },
            { title: 'Decline of Global Cohesion', desc: 'NATO strain, tariffs, fragmented alliances' },
            { title: 'De-dollarization Pressure', desc: 'Challenges to dollar dominance' },
        ],
    },
    {
        name: 'Military Layer',
        tag: 'Force / Conflict',
        narratives: [
            { title: 'Asymmetric Warfare', desc: 'Drones, proxies, cyber vs traditional military' },
            { title: 'Decline of Conventional Dominance', desc: 'Expensive, less decisive large-scale war' },
        ],
    },
    {
        name: 'Internal Layer',
        tag: 'Domestic',
        narratives: [
            { title: 'Political Polarization', desc: 'Left vs Right — internal division dominates governance' },
            { title: 'Wealth Inequality', desc: 'Capital vs Labor — rich vs poor tension increases' },
            { title: 'Institutional Distrust', desc: 'Declining trust in government, media, experts' },
        ],
    },
    {
        name: 'Cultural / Identity Layer',
        tag: 'Narrative / Meaning',
        narratives: [
            { title: 'Loss of Religious Cohesion', desc: 'Secularization, no shared moral framework' },
            { title: 'Fragmented Identity', desc: 'Nation → subgroups (ideological, cultural, digital tribes)' },
            { title: 'Narrative Breakdown', desc: 'No shared story of "what the system is"' },
        ],
    },
    {
        name: 'Meta Layer',
        tag: 'Very Important',
        narratives: [
            { title: 'Legitimacy Crisis', desc: 'Who has authority to decide?' },
            { title: 'Coordination Failure', desc: 'System cannot act decisively' },
        ],
    },
]

export function MultipolarNarratives() {
    const [open, setOpen] = useState<Record<string, boolean>>({})

    function toggle(name: string) {
        setOpen((prev) => ({ ...prev, [name]: !prev[name] }))
    }

    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    2020+ Cycle
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    Multipolar Transition — Core Narratives
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    The active narrative threads driving the current cycle, organized by structural layer.
                </p>
            </div>

            {/* Pressure / Stability bar */}
            <PressureStabilityBar />

            <div className="space-y-3">
                {layers.map((layer, i) => {
                    const isOpen = !!open[layer.name]
                    return (
                        <div key={layer.name} className="rounded-2xl border border-border bg-card overflow-hidden">
                            <button
                                onClick={() => toggle(layer.name)}
                                className="w-full flex items-center gap-3 px-5 py-3.5 text-left cursor-pointer transition-colors hover:bg-muted/30"
                            >
                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 flex-shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {layer.name}
                                        </h3>
                                        <span className="text-[10px] text-muted-foreground/50">
                                            {layer.tag}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {layer.narratives.length} narrative{layer.narratives.length !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`flex-shrink-0 text-muted-foreground/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-4 pt-1 pl-14 space-y-2">
                                    {layer.narratives.map((n) => (
                                        <div key={n.title} className="flex items-baseline gap-2">
                                            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40 relative top-[-1px]" />
                                            <div>
                                                <span className="text-sm font-medium text-foreground">
                                                    {n.title}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {' — '}{n.desc}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
