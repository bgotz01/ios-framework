'use client'

import { useState } from 'react'

const phases = [
    {
        number: '01',
        title: 'Formation',
        subtitle: 'Chaos → Order',
        age: 'The Age of Pioneers',
        ageTag: 'Outburst',
        coreTrait: 'Energy',
        risk: 'Chaos (but it\'s productive chaos)',
        description: 'Emerges from instability. A group unifies under strong leadership or a compelling idea.',
        bullets: [
            'Survival pressure forces discipline and cooperation',
            'Institutions are simple but effective',
            'Values are clear and widely shared',
        ],
        characteristics: [
            'High trust internally',
            'Strong identity ("us vs them")',
            'Leadership based on competence or force',
        ],
        ageBullets: [
            'Harsh conditions → strong, disciplined people',
            'Leadership emerges through necessity',
            'Identity is forged through struggle',
        ],
    },
    {
        number: '02',
        title: 'Expansion',
        subtitle: 'Order → Power',
        age: 'The Age of Conquests',
        ageTag: 'Dominance',
        coreTrait: 'Power',
        risk: 'Overexpansion begins here',
        description: 'The system begins to scale outward. Strength turns outward.',
        bullets: [
            'Military success or economic dominance expands territory',
            'Resources flow into the core',
            'Institutions grow stronger and more organized',
            'Confidence rises rapidly',
        ],
        characteristics: [
            'Meritocracy (relatively speaking)',
            'High mobility and opportunity',
            'Strong incentives for achievement',
        ],
        ageBullets: [
            'Military or strategic dominance expands territory',
            'Success reinforces confidence and unity',
            'Rewards go to courage and capability',
        ],
    },
    {
        number: '03',
        title: 'Consolidation',
        subtitle: 'Power → Stability',
        age: 'The Age of Commerce',
        ageTag: 'Monetization',
        coreTrait: 'Wealth generation',
        risk: 'Incentives shift from production → profit optimization',
        description: 'Expansion slows; the focus shifts inward. The empire learns to monetize stability.',
        bullets: [
            'Infrastructure, law, and administration mature',
            'Trade networks deepen',
            'Culture standardizes across regions',
            'Wealth accumulates',
        ],
        characteristics: [
            'Predictability and order',
            'Strong institutions',
            'Broad prosperity (relative to earlier stages)',
        ],
        ageBullets: [
            'Trade networks flourish',
            'Cities grow',
            'Wealth creation shifts from war → exchange',
        ],
    },
    {
        number: '04',
        title: 'Peak',
        subtitle: 'Stability → Excess',
        age: 'The Age of Affluence',
        ageTag: 'Abundance',
        coreTrait: 'Abundance',
        risk: 'Softening of discipline',
        description: 'Success compounds — and begins to distort behavior.',
        bullets: [
            'Wealth becomes concentrated',
            'Elites gain power independent of contribution',
            'Expansion slows or stops',
            'The system becomes comfortable',
        ],
        characteristics: [
            'Rising inequality',
            'Status competition replaces survival competition',
            'Increasing reliance on systems, not individuals',
        ],
        ageBullets: [
            'Living standards rise significantly',
            'Comfort replaces necessity',
            'Social hierarchies solidify',
        ],
    },
    {
        number: '05',
        title: 'Strain',
        subtitle: 'Excess → Fragility',
        age: 'The Age of Intellect',
        ageTag: 'Refinement',
        coreTrait: 'Refinement',
        risk: 'Detachment from reality',
        description: 'Cracks begin to show. The empire turns inward — toward ideas.',
        bullets: [
            'Costs (military, bureaucracy) rise faster than benefits',
            'Economic distortions appear (inflation, debt)',
            'Political divisions intensify',
            'External threats become harder to manage',
        ],
        characteristics: [
            'Declining efficiency',
            'Growing distrust in institutions',
            'Reactive rather than strategic governance',
        ],
        ageBullets: [
            'Philosophy, science, and culture flourish',
            'Systems become more abstract and complex',
            'Debate replaces action as the dominant mode',
        ],
    },
    {
        number: '06',
        title: 'Decline',
        subtitle: 'Fragility → Breakdown',
        age: 'The Age of Decadence',
        ageTag: 'Indulgence',
        coreTrait: 'Indulgence',
        risk: 'Loss of cohesion and meaning',
        description: 'The system can no longer sustain itself. Excess becomes the norm.',
        bullets: [
            'Internal conflict often outweighs external threats',
            'Economic contraction accelerates',
            'Institutions lose legitimacy',
            'Control over territory weakens',
        ],
        characteristics: [
            'Fragmentation',
            'Loss of shared identity',
            'Increasing instability',
        ],
        ageBullets: [
            'Pleasure > purpose',
            'Elites become self-serving',
            'Institutions exist but are hollowed out',
        ],
    },
    {
        number: '07',
        title: 'Transformation',
        subtitle: 'Collapse → Rebirth',
        age: 'The Age of Decline & Collapse',
        ageTag: 'Disintegration',
        coreTrait: 'Disintegration',
        risk: 'Collapse or transformation',
        description: 'What follows collapse isn\'t always pure destruction. The system breaks — or transforms.',
        bullets: [
            'New powers emerge (internal or external)',
            'Old structures are repurposed or abandoned',
            'Cultural remnants persist',
        ],
        characteristics: [
            'Western Roman Empire → medieval Europe',
            'Ottoman Empire → modern nation-states',
        ],
        ageBullets: [
            'Internal conflict accelerates',
            'Economic and political systems fail',
            'External forces often deliver the final blow',
        ],
    },
]

export function EmpireArc() {
    const [open, setOpen] = useState<Record<string, boolean>>({})

    function toggle(num: string) {
        setOpen((prev) => ({ ...prev, [num]: !prev[num] }))
    }

    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Empire Lifecycle
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    The 7 Phases of the Empire Arc
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Every empire follows a recognizable arc — from raw energy to overextension to collapse. Two lenses on the same pattern.
                </p>
            </div>

            {/* Phase arc visual */}
            <div className="flex items-end justify-between gap-1 px-2">
                {phases.map((p, i) => {
                    const heights = [40, 60, 80, 100, 80, 50, 30]
                    return (
                        <button
                            key={p.number}
                            onClick={() => toggle(p.number)}
                            className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer"
                        >
                            <span className="text-[10px] text-muted-foreground/60 group-hover:text-foreground transition-colors hidden md:block">
                                {p.title}
                            </span>
                            <div
                                className="w-full rounded-t-md bg-muted-foreground/10 group-hover:bg-muted-foreground/20 transition-colors"
                                style={{ height: `${heights[i]}px` }}
                            />
                            <span className="text-[10px] font-semibold text-muted-foreground/40">
                                {p.number}
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Expandable phases */}
            <div className="space-y-3">
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
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {p.title}
                                        </h3>
                                        <span className="text-xs text-muted-foreground/60">
                                            {p.subtitle}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                                        {p.description}
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
                                <div className="px-5 pb-5 pt-1 pl-14">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {/* Structural view */}
                                        <div className="space-y-3">
                                            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60 font-medium">
                                                Structural View
                                            </div>
                                            <ul className="space-y-1.5">
                                                {p.bullets.map((b) => (
                                                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                                                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="space-y-1 pt-1">
                                                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/40">
                                                    Characteristics
                                                </div>
                                                {p.characteristics.map((c) => (
                                                    <p key={c} className="text-xs text-muted-foreground/70">{c}</p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Evolutionary view */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60 font-medium">
                                                    {p.age}
                                                </div>
                                            </div>
                                            <ul className="space-y-1.5">
                                                {p.ageBullets.map((b) => (
                                                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                                                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex gap-3 pt-1">
                                                <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground">
                                                    Core: {p.coreTrait}
                                                </div>
                                                <div className="rounded-lg bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground">
                                                    Risk: {p.risk}
                                                </div>
                                            </div>
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
