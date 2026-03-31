'use client'

import { useRef } from 'react'
import { CycleOverview } from '@/components/maps/USEmpireCycle'
import { MultipolarNarratives } from '@/components/maps/MultipolarNarratives'
import { US80yrTimeline } from '@/components/maps/US80yrTimeline'

const sections = [
    { id: 'macro', label: 'Macro View' },
    { id: 'history', label: 'U.S. History' },
    { id: 'current', label: '2020+ Cycle' },
]

export default function EmpireUSPage() {
    const macroRef = useRef<HTMLDivElement>(null)
    const historyRef = useRef<HTMLDivElement>(null)
    const currentRef = useRef<HTMLDivElement>(null)

    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        macro: macroRef,
        history: historyRef,
        current: currentRef,
    }

    function scrollTo(id: string) {
        refs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Sticky nav */}
            <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="flex gap-1 py-2">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollTo(s.id)}
                                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
                <div className="space-y-14">
                    {/* Header */}
                    <section className="space-y-4">
                        <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            U.S. Empire
                        </div>
                        <h1 className="page-title mb-2">U.S. Empire Cycle</h1>
                        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                            The American empire mapped through its ~250-year arc, ~80-year reset cycles, and the active narratives of the current transition.
                        </p>
                    </section>

                    {/* Macro View */}
                    <div ref={macroRef} className="scroll-mt-14">
                        <CycleOverview />
                    </div>

                    {/* U.S. History */}
                    <div ref={historyRef} className="scroll-mt-14">
                        <US80yrTimeline />
                    </div>

                    {/* 2020+ Cycle */}
                    <div ref={currentRef} className="scroll-mt-14">
                        <MultipolarNarratives />
                    </div>
                </div>
            </div>
        </div>
    )
}
