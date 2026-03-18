// components/propaganda/CounterControl.tsx
'use client'

import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import clsx from 'clsx'

interface CounterStrategy {
    id: number
    lever: string
    subtitle: string
    description: string
    primaryQuestion: string
    questions: string[]
    example?: {
        scenario: string
        question: string
    }
    goal: string
}

const counterStrategies: CounterStrategy[] = [
    {
        id: 1,
        lever: 'Spin',
        subtitle: 'Clarify the language',
        description: 'Propaganda manipulates meaning through labels and framing.',
        primaryQuestion: 'What do these words actually mean?',
        questions: [
            'Could the same event be described differently?',
            'Is this a neutral description or a moral label?'
        ],
        example: {
            scenario: '"Peacekeeping operation"',
            question: 'Is this actually a military invasion?'
        },
        goal: 'Replace framing with precise description.'
    },
    {
        id: 2,
        lever: 'Filter',
        subtitle: 'Clarify the evidence',
        description: 'Propaganda controls information by showing only selected facts.',
        primaryQuestion: 'What information might be missing?',
        questions: [
            'Is this a typical case or an extreme example?',
            'What does the full data look like?'
        ],
        example: {
            scenario: 'One shocking incident',
            question: 'How common is this actually?'
        },
        goal: 'Expand the information field.'
    },
    {
        id: 3,
        lever: 'Trigger',
        subtitle: 'Clarify the reaction',
        description: 'Propaganda uses emotion to bypass analysis.',
        primaryQuestion: 'Why does this provoke such a strong reaction?',
        questions: [
            'Is this story designed to provoke outrage or fear?',
            'Would I react the same way if the roles were reversed?'
        ],
        example: {
            scenario: 'A highly emotional headline',
            question: 'What facts do I know beyond the reaction it creates?'
        },
        goal: 'Separate emotion from evaluation.'
    },
    {
        id: 4,
        lever: 'Pressure',
        subtitle: 'Clarify the pressure',
        description: 'Propaganda enforces conformity through social or institutional pressure.',
        primaryQuestion: 'Are people actually allowed to question this?',
        questions: [
            'What happens if someone disagrees?',
            'Is criticism being answered or punished?'
        ],
        example: {
            scenario: 'A public consensus campaign',
            question: 'Is this agreement freely formed, or socially enforced?'
        },
        goal: 'Restore open discussion.'
    }
]

const counterStyles: Record<number, { ring: string; tint: string; chip: string }> = {
    1: {
        ring: 'border-l-blue-500',
        tint: 'from-blue-500/10 to-transparent',
        chip: 'text-blue-700 dark:text-blue-300 bg-blue-500/10 border-blue-500/20'
    },
    2: {
        ring: 'border-l-emerald-500',
        tint: 'from-emerald-500/10 to-transparent',
        chip: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
    },
    3: {
        ring: 'border-l-amber-500',
        tint: 'from-amber-500/10 to-transparent',
        chip: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20'
    },
    4: {
        ring: 'border-l-rose-500',
        tint: 'from-rose-500/10 to-transparent',
        chip: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/20'
    }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            {children}
        </div>
    )
}

export function CounterControl() {
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

    const toggleCard = (id: number) => {
        setExpandedCards(prev => {
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
                    The Anti-Propaganda Tool
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    If propaganda works by pulling control levers, the counter is asking
                    clarifying questions that release them.
                </p>
            </div>

            <div className="space-y-4">
                {counterStrategies.map((strategy) => {
                    const style = counterStyles[strategy.id]
                    const isExpanded = expandedCards.has(strategy.id)

                    return (
                        <article
                            key={strategy.id}
                            className={clsx(
                                'overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300',
                                'hover:border-foreground/15 hover:shadow-sm'
                            )}
                        >
                            {/* Header - Clickable */}
                            <button
                                onClick={() => toggleCard(strategy.id)}
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
                                                    style.chip
                                                )}
                                            >
                                                {strategy.lever}
                                            </span>
                                            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                                Clarifying move
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                                {strategy.subtitle}
                                            </h3>
                                            <p className="text-sm leading-6 text-muted-foreground">
                                                {strategy.description}
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
                                    {/* Primary Question */}
                                    <div className="rounded-2xl border border-border bg-background/80 p-4 md:p-5">
                                        <SectionLabel>Ask first</SectionLabel>
                                        <p className="mt-3 text-lg font-medium leading-7 text-foreground">
                                            {strategy.primaryQuestion}
                                        </p>
                                    </div>

                                    {/* Supporting Questions */}
                                    <div className="space-y-2">
                                        <SectionLabel>Then ask</SectionLabel>
                                        <div className="space-y-2">
                                            {strategy.questions.map((question, idx) => (
                                                <div
                                                    key={idx}
                                                    className="rounded-xl bg-muted/40 px-4 py-3 text-sm text-foreground"
                                                >
                                                    {question}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Example */}
                                    {strategy.example && (
                                        <div className="rounded-2xl border border-border bg-background/60 p-4">
                                            <SectionLabel>Example</SectionLabel>
                                            <div className="mt-3 space-y-2">
                                                <p className="text-sm text-muted-foreground">
                                                    {strategy.example.scenario}
                                                </p>
                                                <p className="text-sm font-medium text-foreground">
                                                    → {strategy.example.question}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Goal */}
                                    <div className="border-t border-border pt-4">
                                        <SectionLabel>Goal</SectionLabel>
                                        <p className="mt-2 text-sm font-medium text-foreground">
                                            {strategy.goal}
                                        </p>
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