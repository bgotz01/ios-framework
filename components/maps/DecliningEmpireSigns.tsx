'use client'

import { useState } from 'react'

const signs = [
    {
        number: '01',
        title: 'Financialization Over Production',
        signal: 'Wealth shifts from creating things → extracting value',
        bullets: [
            'Economy dominated by speculation (assets > real output)',
            'Rising debt dependence to sustain growth',
            'Asset prices detach from underlying productivity',
        ],
        echo: 'Late Roman Empire, late British Empire, pre-2008 U.S.',
    },
    {
        number: '02',
        title: 'Currency Debasement / Monetary Distortion',
        signal: 'The system starts cheating its own unit of account',
        bullets: [
            'Money supply expands faster than real output',
            'Inflation (or asset inflation) becomes structural',
            'Loss of trust in currency (slow at first, then sudden)',
        ],
        echo: 'Roman coin clipping, post-gold standard era after Bretton Woods collapse',
    },
    {
        number: '03',
        title: 'Elite Detachment & Inequality',
        signal: 'The ruling class stops sharing the same reality',
        bullets: [
            'Wealth concentration accelerates',
            'Elites insulated from consequences of policy',
            'Declining social mobility',
        ],
        echo: null,
    },
    {
        number: '04',
        title: 'Institutional Decay',
        signal: 'Institutions lose legitimacy but keep power',
        bullets: [
            'Laws selectively enforced',
            'Bureaucracy expands but becomes ineffective',
            'Corruption becomes normalized (not shocking anymore)',
        ],
        echo: null,
    },
    {
        number: '05',
        title: 'Military Overstretch',
        signal: 'Empire spends more maintaining control than gaining from it',
        bullets: [
            'Endless foreign engagements',
            'Rising cost of defense vs economic benefit',
            'Difficulty winning decisive victories',
        ],
        echo: 'Late Rome, late-stage U.S. interventions',
    },
    {
        number: '06',
        title: 'Cultural Exhaustion',
        signal: 'Society loses belief in its own story',
        bullets: [
            'Rise of cynicism, irony, nihilism',
            'Art becomes self-referential or fragmented',
            'Decline of shared values or mission',
        ],
        echo: null,
    },
    {
        number: '07',
        title: 'Political Fragmentation',
        signal: 'Internal conflict > external threats',
        bullets: [
            'Increasing polarization',
            'Inability to pass long-term policy',
            'Governance becomes reactive, not strategic',
        ],
        echo: null,
    },
    {
        number: '08',
        title: 'Dependence on Complexity',
        signal: 'System becomes too complex to manage',
        bullets: [
            'Overlapping systems, regulations, financial structures',
            'Fragility increases (small shocks → big consequences)',
            'Experts disagree on how the system even works',
        ],
        echo: null,
    },
    {
        number: '09',
        title: 'Declining Marginal Returns',
        signal: 'More input → less output',
        bullets: [
            'Infrastructure investment yields less growth',
            'Education, policy, stimulus all less effective',
            'Innovation slows or becomes incremental',
        ],
        echo: null,
    },
    {
        number: '10',
        title: 'Rise of "Parasitic" Outliers',
        signal: 'Outliers stop building, start extracting',
        bullets: [
            'Rent-seeking dominates (legal, financial, political)',
            'Influence > competence',
            '"Winning" comes from positioning, not production',
        ],
        echo: null,
    },
]

export function DecliningEmpireSigns() {
    const [open, setOpen] = useState<Record<string, boolean>>({})

    function toggle(num: string) {
        setOpen((prev) => ({ ...prev, [num]: !prev[num] }))
    }

    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Structural Decay
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    10 Signs of a Declining Empire
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Empires don&apos;t collapse from a single blow. They erode through compounding structural failures — each one reinforcing the next.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {signs.map((s) => {
                    const isOpen = !!open[s.number]
                    return (
                        <div key={s.number} className="rounded-2xl border border-border bg-card overflow-hidden">
                            <button
                                onClick={() => toggle(s.number)}
                                className="w-full flex items-center gap-3 px-5 py-3.5 text-left cursor-pointer transition-colors hover:bg-muted/30"
                            >
                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 flex-shrink-0">
                                    {s.number}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                                        {s.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                                        {s.signal}
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
                                    <ul className="space-y-1.5">
                                        {s.bullets.map((b) => (
                                            <li
                                                key={b}
                                                className="flex gap-2 text-sm text-muted-foreground"
                                            >
                                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {s.echo && (
                                        <p className="text-xs text-muted-foreground/60">
                                            Historical echoes: {s.echo}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
