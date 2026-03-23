'use client'

import { AwakeningSequence } from "@/components/propaganda/AwakeningSequence"
import { ControlPillars } from "@/components/propaganda/ControlPillars"
import { CounterControl } from "@/components/propaganda/CounterControl"


function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
            {children}
        </div>
    )
}

export default function PropagandaPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
                <div className="space-y-14">
                    {/* Header */}
                    <section className="space-y-6">
                        <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Narrative Analysis
                        </div>

                        <div className="space-y-4">
                            <h1 className="page-title mb-2">
                                Control Levers
                            </h1>
                            <div className="max-w-2xl space-y-2 text-base text-muted-foreground md:text-lg">
                                <p>Propaganda is not primarily about lying.</p>
                                <p>
                                    It is about controlling perception, attention, interpretation, and ultimately what people feel permitted to say.
                                </p>
                            </div>
                        </div>

                        {/* The Four Levers */}
                        <div className="rounded-3xl border border-border bg-card p-5 md:p-6">
                            <SectionLabel>The four levers</SectionLabel>
                            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                                <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3 space-y-2">
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                        01
                                    </div>
                                    <div className="text-lg font-semibold text-foreground">
                                        Spin
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Control the meaning.
                                    </div>
                                    <div className="pt-2 border-t border-border text-xs text-muted-foreground italic">
                                        What language is being used to shape meaning?
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3 space-y-2">
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                        02
                                    </div>
                                    <div className="text-lg font-semibold text-foreground">
                                        Filter
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Control the evidence.
                                    </div>
                                    <div className="pt-2 border-t border-border text-xs text-muted-foreground italic">
                                        What information is missing?
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3 space-y-2">
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                        03
                                    </div>
                                    <div className="text-lg font-semibold text-foreground">
                                        Trigger
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Control the reaction.
                                    </div>
                                    <div className="pt-2 border-t border-border text-xs text-muted-foreground italic">
                                        What emotion is being activated?
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3 space-y-2">
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                        04
                                    </div>
                                    <div className="text-lg font-semibold text-foreground">
                                        Pressure
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Control what people are allowed to believe.
                                    </div>
                                    <div className="pt-2 border-t border-border text-xs text-muted-foreground italic">
                                        What happens if someone disagrees?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pillars */}
                    <ControlPillars />

                    {/* Counter Control */}
                    <CounterControl />

                    {/* Awakening Sequence */}
                    <AwakeningSequence />
                </div>
            </div>
        </div>
    )
}
