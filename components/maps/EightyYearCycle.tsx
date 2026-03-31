'use client'

import { useState } from 'react'

const phases = [
    {
        number: '01',
        title: 'Crisis',
        subtitle: 'Reset',
        duration: '~20 years',
        feel: 'Urgent, decisive, unified',
        output: 'New order is forged',
        bullets: [
            'System instability peaks',
            'War, depression, or internal conflict',
            'Institutions are rebuilt under pressure',
            'Collective survival > individual preference',
        ],
    },
    {
        number: '02',
        title: 'High',
        subtitle: 'Order & Expansion',
        duration: '~20–25 years',
        feel: 'Stable, confident, cohesive',
        output: 'System scales successfully',
        bullets: [
            'Strong institutions, high trust',
            'Economic expansion, infrastructure building',
            'Clear national identity and direction',
        ],
    },
    {
        number: '03',
        title: 'Awakening',
        subtitle: 'Cultural Shift',
        duration: '~20 years',
        feel: 'Restless, idealistic',
        output: 'Values begin to shift',
        bullets: [
            'Society questions the established order',
            'Rise of individualism, rights movements',
            'Cultural and spiritual reorientation',
        ],
    },
    {
        number: '04',
        title: 'Unraveling',
        subtitle: 'Fragmentation',
        duration: '~20–25 years',
        feel: 'Divided, uncertain, reactive',
        output: 'System becomes fragile',
        bullets: [
            'Institutions weaken, trust declines',
            'Polarization increases',
            'Economy becomes more financialized/speculative',
            'Long-term planning breaks down',
        ],
    },
]

export function EightyYearCycle() {
    const [open, setOpen] = useState<Record<string, boolean>>({})

    function toggle(num: string) {
        setOpen((prev) => ({ ...prev, [num]: !prev[num] }))
    }

    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Generational Cycle
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    The 4 Phases of the 80-Year Cycle
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Roughly every 80 years, societies complete a full rotation — from crisis to order to questioning to fragmentation, and back again.
                </p>
            </div>

            {/* Cycle visual */}
            <div className="grid grid-cols-4 gap-1 px-2">
                {phases.map((p) => (
                    <button
                        key={p.number}
                        onClick={() => toggle(p.number)}
                        className="group cursor-pointer text-center space-y-1.5"
                    >
                        <div className="h-2 w-full rounded-full bg-muted-foreground/10 group-hover:bg-muted-foreground/20 transition-colors" />
                        <span className="text-[10px] font-semibold text-muted-foreground/50 block">
                            {p.duration}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors block">
                            {p.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Expandable phases */}
            <div className="grid gap-4 md:grid-cols-2">
                {phases.map((p) => {
                    const isOpen = !!open[p.number]
                    return (
                        <div key={p.number} className="rounded-2xl border border-border bg-card overflow-hidden">
                            <button
                                onClick={() => toggle(p.number)}
                                className="w-full flex items-center gap-3 px-5 py-3.5 text-left cursor-pointer transition-colors hover:bg-muted/30"
                            >
                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 flex-shrink-0">
                                    {p.number}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {p.title}
                                        </h3>
                                        <span className="text-xs text-muted-foreground/60">
                                            {p.subtitle}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {p.duration}
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
                                <div className="px-5 pb-4 pt-1 pl-14 space-y-3">
                                    <ul className="space-y-1.5">
                                        {p.bullets.map((b) => (
                                            <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-3 flex-wrap">
                                        <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground">
                                            Feel: {p.feel}
                                        </div>
                                        <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground">
                                            Output: {p.output}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
