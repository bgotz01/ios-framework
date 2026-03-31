// components/maps/CycleOverview.tsx
'use client'

import { us80yrCycles } from '@/data/us-80yr-cycles'

const resetTypeColors: Record<string, string> = {
    foundational: '#6b9bd2',
    internal: '#d4807a',
    global: '#6bb88f',
    stacked: '#c9a95a',
}

const resetTypeLabels: Record<string, string> = {
    foundational: 'Foundational Reset',
    internal: 'Internal Reset',
    global: 'Global Reset',
    stacked: 'Stacked Reset',
}

const empireStart = 1776
const empireDuration = 250
const empireEnd = empireStart + empireDuration

const empirePhases = [
    {
        name: 'Foundational Build',
        startYear: 1776,
        endYear: 1861,
        color: '#3b82f6',
    },
    {
        name: 'Internal Reordering',
        startYear: 1861,
        endYear: 1941,
        color: '#ef4444',
    },
    {
        name: 'Global Expansion',
        startYear: 1941,
        endYear: 2020,
        color: '#22c55e',
    },
    {
        name: 'Stacked Reset / Late Empire',
        startYear: 2020,
        endYear: empireEnd,
        color: '#f59e0b',
    },
]

export function CycleOverview() {
    const totalSpan = empireEnd - empireStart

    return (
        <section className="space-y-5">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Macro View
                </div>

                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    U.S. Cycles Inside the ~250-Year Empire Arc
                </h2>

                <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
                    The United States can be read as three completed ~80-year reset cycles
                    inside a larger ~250-year imperial arc. Each major reset changes the
                    system in a different way: foundational, internal, global, and now
                    stacked.
                </p>
            </div>

            <div className="space-y-5 rounded-2xl border border-border bg-card p-5">
                {/* 250-year arc */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/60">
                            ~250-Year Empire Arc
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">
                            {empireStart} – {empireEnd}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex h-5 overflow-hidden rounded-full">
                            {empirePhases.map((phase) => {
                                const width = ((phase.endYear - phase.startYear) / totalSpan) * 100
                                return (
                                    <div
                                        key={phase.name}
                                        style={{ width: `${width}%`, backgroundColor: phase.color }}
                                        title={`${phase.name} (${phase.startYear}–${phase.endYear})`}
                                    />
                                )
                            })}
                        </div>

                        <div className="flex">
                            {empirePhases.map((phase) => {
                                const width = ((phase.endYear - phase.startYear) / totalSpan) * 100
                                return (
                                    <div
                                        key={phase.name}
                                        className="overflow-hidden text-center"
                                        style={{ width: `${width}%` }}
                                    >
                                        <span className="block text-[9px] leading-none text-muted-foreground/70">
                                            {phase.name}
                                        </span>
                                        <span className="block font-mono text-[9px] leading-none text-muted-foreground/40">
                                            {phase.startYear}–{phase.endYear}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* nested reset cycle anchors */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/60">
                            ~80-Year Reset Anchors
                        </div>
                        <div className="text-[10px] text-muted-foreground/50">
                            1776 → 1861 → 1941 → 2020
                        </div>
                    </div>

                    <div className="relative h-10">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-border" />

                        {us80yrCycles.map((cycle) => {
                            const left = ((cycle.startYear - empireStart) / totalSpan) * 100
                            const color = resetTypeColors[cycle.resetType] ?? '#888'

                            return (
                                <div
                                    key={cycle.startYear}
                                    className="absolute flex -translate-x-1/2 flex-col items-center"
                                    style={{ left: `${Math.min(left, 98)}%` }}
                                >
                                    <div
                                        className="h-5 w-0.5 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                    <span
                                        className="mt-0.5 font-mono text-[10px] font-bold"
                                        style={{ color }}
                                    >
                                        {cycle.startYear}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="grid gap-3 md:grid-cols-4">
                        {us80yrCycles.map((cycle) => {
                            const color = resetTypeColors[cycle.resetType] ?? '#888'
                            return (
                                <div
                                    key={cycle.startYear}
                                    className="rounded-xl border border-border bg-background/40 p-3"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <div className="text-lg font-bold text-foreground">
                                                {cycle.startYear}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {cycle.title}
                                            </div>
                                        </div>

                                        <span
                                            className="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium"
                                            style={{
                                                backgroundColor: `${color}18`,
                                                color,
                                            }}
                                        >
                                            {resetTypeLabels[cycle.resetType] ?? cycle.resetType}
                                        </span>
                                    </div>

                                    {cycle.resetLabel ? (
                                        <div className="mt-3 space-y-1">
                                            <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/40">
                                                Anchor Event
                                            </div>
                                            <div className="text-sm text-foreground">{cycle.resetLabel}</div>
                                        </div>
                                    ) : null}

                                    {cycle.resetNote ? (
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {cycle.resetNote}
                                        </p>
                                    ) : null}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}