'use client'

import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import clsx from 'clsx'

interface Tactic {
    title: string
    description: string
    examples?: string[]
    structure?: string
    note?: string
}

interface Pillar {
    id: number
    academicTerm: string
    commonTerm: string
    tagline: string
    tactics?: Tactic[]
    content: {
        intro?: string
        includes?: string[]
        examples?: { label?: string; items: string[] }
        rule?: string
        techniques?: string[]
        examplePatterns?: string[]
        message?: string
        note?: string
    }
}

const pillars: Pillar[] = [
    {
        id: 1,
        academicTerm: 'Framing',
        commonTerm: 'Spin',
        tagline: 'Control the meaning.',
        tactics: [
            {
                title: 'Labeling',
                description: 'Attach a powerful label to a person or idea.',
                examples: ['extremist', 'conspiracy theorist', 'terrorist', 'misinformation'],
                note: 'Once the label sticks, people stop evaluating the argument.'
            },
            {
                title: 'Euphemisms',
                description: 'Use softer language to hide reality.',
                examples: [
                    'civilian deaths → collateral damage',
                    'censorship → content moderation',
                    'war → peacekeeping mission'
                ]
            },
            {
                title: 'Moral Framing',
                description: 'Turn an issue into a moral battle.',
                examples: ['good vs evil', 'democracy vs tyranny', 'science vs denial'],
                note: 'This discourages nuance.'
            },
            {
                title: 'Narrative Simplification',
                description: 'Reduce complex issues into a simple story.',
                structure: 'villain → victim → hero',
                note: 'Once a narrative forms, facts get forced into it.'
            }
        ],
        content: {
            intro: 'It includes:',
            includes: ['naming', 'terminology shifts', 'framing events', 'narrative labels'],
            examples: {
                label: 'Examples',
                items: [
                    '"peacekeeping mission" vs "invasion"',
                    '"content moderation" vs "censorship"',
                    '"economic stimulus" vs "money printing"'
                ]
            },
            rule: 'Whoever defines the language defines the meaning.',
            note: 'Includes frame control, language engineering, and narrative structure.'
        }
    },
    {
        id: 2,
        academicTerm: 'Selection',
        commonTerm: 'Filter',
        tagline: 'Control the evidence.',
        tactics: [
            {
                title: 'Omission',
                description: 'Important information is simply not shown.',
                note: 'This is one of the most common propaganda methods.'
            },
            {
                title: 'Cherry Picking',
                description: 'Show only examples that support the narrative.',
                examples: ['highlight a few extreme cases', 'present them as typical']
            },
            {
                title: 'Amplification',
                description: 'Repeat certain events endlessly.',
                note: 'A rare event can appear common if it is constantly shown.'
            },
            {
                title: 'Context Removal',
                description: 'Facts are presented without context.',
                examples: ['quoting someone out of context', 'showing partial statistics']
            }
        ],
        content: {
            intro: 'Techniques:',
            techniques: [
                'agenda setting',
                'selective evidence',
                'suppression of inconvenient information'
            ],
            examples: {
                label: 'Example',
                items: [
                    'If news shows 10 cases of violence repeatedly, people can start to believe violence is widespread — even if statistically rare.'
                ]
            },
            rule: 'What is omitted often matters more than what is shown.'
        }
    },
    {
        id: 3,
        academicTerm: 'Emotion',
        commonTerm: 'Trigger',
        tagline: 'Control the reaction.',
        tactics: [
            {
                title: 'Fear Appeals',
                description: 'Emphasize threats and danger.',
                examples: ['security threats', 'existential crises', 'looming disasters'],
                note: 'Fear reduces analytical thinking.'
            },
            {
                title: 'Outrage Stories',
                description: 'Highlight events designed to provoke anger.',
                note: 'These often spread rapidly on social media.'
            },
            {
                title: 'Victim Narratives',
                description: 'Portray one group as oppressed or attacked.',
                note: 'This creates strong emotional identification.'
            },
            {
                title: 'Shock Images',
                description: 'Use disturbing visuals to bypass reasoning.',
                note: 'Graphic imagery is extremely powerful psychologically.'
            }
        ],
        content: {
            intro: 'Common triggers:',
            techniques: ['fear', 'anger', 'humiliation', 'moral outrage', 'hope'],
            examplePatterns: [
                '"Your safety is under threat"',
                '"Your group is being disrespected"',
                '"The enemy is evil"'
            ],
            rule: 'Emotion makes people accept simple narratives.'
        }
    },
    {
        id: 4,
        academicTerm: 'Social Reinforcement',
        commonTerm: 'Pressure',
        tagline: 'Control what people are allowed to believe.',
        tactics: [
            {
                title: 'Expert Consensus',
                description: 'Use authority figures to declare the "correct" view.',
                examples: ['panels of experts', 'institutional statements', 'fact-check organizations']
            },
            {
                title: 'Social Shaming',
                description: 'Critics are attacked or ridiculed.',
                examples: ['public humiliation', 'reputational attacks', 'online harassment']
            },
            {
                title: 'Censorship',
                description: 'Certain viewpoints are restricted.',
                examples: ['platform bans', 'content removal', 'search suppression']
            },
            {
                title: 'Institutional Consequences',
                description: 'People risk real penalties for dissent.',
                examples: ['job loss', 'professional sanctions', 'legal risk'],
                note: 'This creates self-censorship.'
            }
        ],
        content: {
            intro: 'Pressure mechanisms:',
            techniques: [
                'expert consensus',
                'celebrity endorsement',
                'polls',
                'social amplification',
                'fact-check authorities'
            ],
            message: '"Everyone reasonable already believes this."',
            rule: 'Humans fear exclusion, so they conform.'
        }
    }
]

const pillarStyles: Record<number, { ring: string; tint: string; chip: string }> = {
    1: {
        ring: 'border-l-blue-500',
        tint: 'from-blue-500/10 to-transparent',
        chip: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
    },
    2: {
        ring: 'border-l-emerald-500',
        tint: 'from-emerald-500/10 to-transparent',
        chip: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
    },
    3: {
        ring: 'border-l-amber-500',
        tint: 'from-amber-500/10 to-transparent',
        chip: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
    },
    4: {
        ring: 'border-l-rose-500',
        tint: 'from-rose-500/10 to-transparent',
        chip: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20'
    }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            {children}
        </div>
    )
}

export function ControlPillars() {
    const [expandedPillars, setExpandedPillars] = useState<Set<number>>(new Set([1]))

    const togglePillar = (id: number) => {
        setExpandedPillars(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <section className="space-y-5">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    The Control Levers
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    Each lever has a different job: shape meaning, shape evidence,
                    shape reaction, or shape conformity.
                </p>
            </div>

            <div className="space-y-4">
                {pillars.map((pillar) => {
                    const isExpanded = expandedPillars.has(pillar.id)
                    const style = pillarStyles[pillar.id]

                    return (
                        <article
                            key={pillar.id}
                            className={clsx(
                                'overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300',
                                'hover:border-foreground/15 hover:shadow-sm'
                            )}
                        >
                            <button
                                onClick={() => togglePillar(pillar.id)}
                                className={clsx(
                                    'relative w-full text-left',
                                    'border-l-4 px-5 py-5 md:px-7 md:py-6',
                                    style.ring
                                )}
                            >
                                <div
                                    className={clsx(
                                        'absolute inset-0 bg-gradient-to-r opacity-100',
                                        style.tint
                                    )}
                                />
                                <div className="relative flex items-start justify-between gap-6">
                                    <div className="flex min-w-0 gap-4 md:gap-6">
                                        <div className="pt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                            {String(pillar.id).padStart(2, '0')}
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                                                <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                                    {pillar.commonTerm}
                                                </h3>
                                                <span className="text-sm text-muted-foreground">
                                                    {pillar.academicTerm}
                                                </span>
                                            </div>

                                            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                                                {pillar.tagline}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-1">
                                                <span
                                                    className={clsx(
                                                        'rounded-full border px-2.5 py-1 text-xs font-medium',
                                                        style.chip
                                                    )}
                                                >
                                                    {pillar.tactics?.length ?? 0} tactics
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background/80">
                                        {isExpanded ? (
                                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-muted-foreground" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="border-t border-border px-5 py-6 md:px-7 md:py-7">
                                    <div className="space-y-8">
                                        {/* Tactics */}
                                        {pillar.tactics && pillar.tactics.length > 0 && (
                                            <div className="space-y-4">
                                                <SectionLabel>Tactics</SectionLabel>

                                                <div className="grid gap-4 md:grid-cols-2">
                                                    {pillar.tactics.map((tactic, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="rounded-2xl border border-border bg-background p-4 md:p-5"
                                                        >
                                                            <div className="space-y-3">
                                                                <div>
                                                                    <div className="text-base font-semibold text-foreground">
                                                                        {tactic.title}
                                                                    </div>
                                                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                                                        {tactic.description}
                                                                    </p>
                                                                </div>

                                                                {tactic.structure && (
                                                                    <div className="rounded-xl bg-muted/50 px-3 py-2 text-sm text-foreground">
                                                                        {tactic.structure}
                                                                    </div>
                                                                )}

                                                                {tactic.examples && tactic.examples.length > 0 && (
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {tactic.examples.map((example, i) => (
                                                                            <span
                                                                                key={i}
                                                                                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                                                                            >
                                                                                {example}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {tactic.note && (
                                                                    <p className="text-xs leading-5 text-muted-foreground italic">
                                                                        {tactic.note}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Rule */}
                                        {pillar.content.rule && (
                                            <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-6">
                                                <SectionLabel>Core rule</SectionLabel>
                                                <p className="mt-3 text-xl font-medium tracking-tight text-foreground">
                                                    {pillar.content.rule}
                                                </p>
                                            </div>
                                        )}

                                        {/* Supporting material */}
                                        <div className="grid gap-4 lg:grid-cols-2">
                                            {(pillar.content.includes || pillar.content.techniques) && (
                                                <div className="rounded-2xl border border-border bg-background p-5">
                                                    <SectionLabel>
                                                        {pillar.content.intro || 'Details'}
                                                    </SectionLabel>

                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {(pillar.content.includes || pillar.content.techniques || []).map(
                                                            (item, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground"
                                                                >
                                                                    {item}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {(pillar.content.examples ||
                                                pillar.content.examplePatterns ||
                                                pillar.content.message) && (
                                                    <div className="rounded-2xl border border-border bg-background p-5">
                                                        <SectionLabel>Examples</SectionLabel>

                                                        <div className="mt-4 space-y-3">
                                                            {pillar.content.examples?.items.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="rounded-xl bg-muted/40 px-4 py-3 text-sm italic text-muted-foreground"
                                                                >
                                                                    {item}
                                                                </div>
                                                            ))}

                                                            {pillar.content.examplePatterns?.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="rounded-xl bg-muted/40 px-4 py-3 text-sm italic text-muted-foreground"
                                                                >
                                                                    {item}
                                                                </div>
                                                            ))}

                                                            {pillar.content.message && (
                                                                <div className="rounded-xl border border-border px-4 py-3 text-sm text-foreground">
                                                                    {pillar.content.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                        </div>

                                        {pillar.content.note && (
                                            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                                                {pillar.content.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
