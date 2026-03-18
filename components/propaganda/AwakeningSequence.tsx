'use client'

import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import clsx from 'clsx'

interface Stage {
    id: number
    title: string
    subtitle: string
    description: string
    examples: string[]
    purposes: string[]
    note?: string
}

const stages: Stage[] = [
    {
        id: 1,
        title: 'Curiosity',
        subtitle: 'Lower Defensiveness',
        description: 'Start with genuine curiosity, not challenge.',
        examples: [
            'That\'s interesting — how did you come to that conclusion?',
            'Where did you first hear that?',
            'What convinced you the most?'
        ],
        purposes: [
            'encourages reflection',
            'reveals their information sources',
            'avoids triggering defensive reactions'
        ],
        note: 'Most people haven\'t actually examined their beliefs. Simply asking how they formed them often starts the process.'
    },
    {
        id: 2,
        title: 'Clarification',
        subtitle: 'Define the Terms',
        description: 'Once they explain their view, move to precision questions.',
        examples: [
            'What exactly do you mean by that term?',
            'How would you define that idea?',
            'What would be a clear example of it?'
        ],
        purposes: [
            'exposes vague language',
            'weakens framing effects',
            'encourages analytical thinking'
        ],
        note: 'Propaganda often depends on imprecise or emotionally loaded terms.'
    },
    {
        id: 3,
        title: 'Comparison',
        subtitle: 'Introduce Alternatives',
        description: 'Now introduce another perspective without attacking theirs.',
        examples: [
            'How would someone on the other side describe this?',
            'Do you think the same rule would apply if the roles were reversed?',
            'Are there cases where the opposite might also be true?'
        ],
        purposes: [
            'activates symmetry thinking',
            'introduces the Law of Opposites',
            'reduces narrative certainty'
        ],
        note: 'At this stage you\'re encouraging them to mentally simulate other viewpoints.'
    },
    {
        id: 4,
        title: 'Consistency',
        subtitle: 'Reveal Contradictions',
        description: 'Finally, gently test whether their reasoning is consistent.',
        examples: [
            'Would that logic apply in this other situation too?',
            'How do we reconcile this example with what we said earlier?',
            'What would change your mind about this?'
        ],
        purposes: [
            'reveal contradictions naturally',
            'encourage intellectual humility',
            'move the discussion toward evidence'
        ],
        note: 'This is where many propaganda narratives begin to break down internally.'
    }
]

const stageStyles: Record<number, { ring: string; tint: string; accent: string }> = {
    1: {
        ring: 'border-l-violet-500',
        tint: 'from-violet-500/10 to-transparent',
        accent: 'text-violet-700 dark:text-violet-300 bg-violet-500/10 border-violet-500/20'
    },
    2: {
        ring: 'border-l-cyan-500',
        tint: 'from-cyan-500/10 to-transparent',
        accent: 'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/20'
    },
    3: {
        ring: 'border-l-fuchsia-500',
        tint: 'from-fuchsia-500/10 to-transparent',
        accent: 'text-fuchsia-700 dark:text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20'
    },
    4: {
        ring: 'border-l-indigo-500',
        tint: 'from-indigo-500/10 to-transparent',
        accent: 'text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 border-indigo-500/20'
    }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            {children}
        </div>
    )
}

export function AwakeningSequence() {
    const [expandedStages, setExpandedStages] = useState<Set<number>>(new Set())

    const toggleStage = (id: number) => {
        setExpandedStages(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <section className="space-y-6">
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    The Awakening Sequence
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    A conversational method to help others recognize propaganda without triggering defensiveness.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">Curiosity</span>
                    <span>→</span>
                    <span className="font-medium">Clarification</span>
                    <span>→</span>
                    <span className="font-medium">Comparison</span>
                    <span>→</span>
                    <span className="font-medium">Consistency</span>
                </div>
            </div>

            <div className="space-y-4">
                {stages.map((stage) => {
                    const style = stageStyles[stage.id]
                    const isExpanded = expandedStages.has(stage.id)

                    return (
                        <article
                            key={stage.id}
                            className={clsx(
                                'overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300',
                                'hover:border-foreground/15 hover:shadow-sm'
                            )}
                        >
                            {/* Header - Clickable */}
                            <button
                                onClick={() => toggleStage(stage.id)}
                                className={clsx(
                                    'relative w-full text-left',
                                    'border-l-4 px-5 py-5 md:px-6 md:py-6',
                                    style.ring
                                )}
                            >
                                <div className={clsx('absolute inset-0 bg-gradient-to-r opacity-100', style.tint)} />
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-3 flex-1">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={clsx(
                                                    'rounded-full border px-2.5 py-1 text-xs font-medium',
                                                    style.accent
                                                )}
                                            >
                                                Stage {stage.id}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                                {stage.title}
                                            </h3>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                {stage.subtitle}
                                            </p>
                                            <p className="text-sm leading-6 text-muted-foreground pt-1">
                                                {stage.description}
                                            </p>
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

                            {/* Expandable Content */}
                            {isExpanded && (
                                <div className="border-t border-border px-5 py-6 md:px-6 md:py-7 space-y-5">
                                    {/* Examples */}
                                    <div className="space-y-3">
                                        <SectionLabel>Examples:</SectionLabel>
                                        <div className="space-y-2">
                                            {stage.examples.map((example, idx) => (
                                                <div
                                                    key={idx}
                                                    className="rounded-xl bg-background/80 border border-border px-4 py-3 text-sm text-foreground italic"
                                                >
                                                    "{example}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Purpose */}
                                    <div className="rounded-2xl border border-border bg-muted/40 p-4 md:p-5">
                                        <SectionLabel>Purpose:</SectionLabel>
                                        <ul className="mt-3 space-y-2">
                                            {stage.purposes.map((purpose, idx) => (
                                                <li key={idx} className="text-sm text-foreground flex gap-2">
                                                    <span className="text-muted-foreground">•</span>
                                                    <span>{purpose}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Note */}
                                    {stage.note && (
                                        <div className="border-t border-border pt-4">
                                            <p className="text-sm leading-6 text-muted-foreground italic">
                                                {stage.note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
