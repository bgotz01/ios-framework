'use client'

import { useState } from 'react'
import { us80yrCycles } from '@/data/us-80yr-cycles'

const phaseColors: Record<string, string> = {
    'Reset / Crisis': '#d4807a',
    Order: '#6bb88f',
    Awakening: '#c9a95a',
    Unraveling: '#9b8ec4',
}

const phaseDescriptions: Record<string, string[]> = {
    'Reset / Crisis': [
        'System rupture becomes unavoidable',
        'War or national mobilization restructures the country',
        'Institutions are rebuilt under pressure',
        'A new civic order is forged',
    ],
    Order: [
        'Strong institutions and higher trust',
        'Expansion, confidence, and physical buildout',
        'The new order scales successfully',
    ],
    Awakening: [
        'The system is questioned from within',
        'Culture shifts toward individualism and reform',
        'Values begin to diverge from institutions',
    ],
    Unraveling: [
        'Fragmentation and declining trust',
        'Financialization and institutional weakening',
        'Coordination breaks down ahead of the next reset',
    ],
}

const resetTypeColors: Record<string, string> = {
    foundational: '#6b9bd2',
    internal: '#d4807a',
    global: '#6bb88f',
    stacked: '#c9a95a',
}

export function US80yrTimeline() {
    const [activeIndex, setActiveIndex] = useState(0)
    const cycle = us80yrCycles[activeIndex]
    const resetColor = resetTypeColors[cycle.resetType] ?? '#888'

    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    U.S. History
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    U.S. 80-Year Cycles
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Each cycle begins with a Reset / Crisis year — 1776, 1861, 1941, and
                    potentially 2020 — then moves through order, awakening, and unraveling.
                </p>
            </div>

            {/* Horizontal cycle tabs */}
            <div className="flex items-end justify-center">
                {us80yrCycles.map((c, i) => {
                    const isActive = i === activeIndex
                    const color = resetTypeColors[c.resetType] ?? '#888'
                    return (
                        <div key={c.startYear} className="flex items-end">
                            <button
                                onClick={() => setActiveIndex(i)}
                                className={`relative px-6 py-4 text-center cursor-pointer transition-all rounded-xl ${isActive
                                    ? 'bg-card border-2 shadow-md scale-105'
                                    : 'hover:bg-muted/40'
                                    }`}
                                style={isActive ? { borderColor: color } : undefined}
                            >
                                <div className={`text-2xl font-bold ${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`}>
                                    {c.startYear}
                                </div>
                                <div className={`text-xs font-medium leading-tight mt-1 ${isActive ? 'text-foreground/80' : 'text-muted-foreground/50'}`}>
                                    {c.title}
                                </div>
                                <span
                                    className="inline-block mt-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                                    style={{
                                        backgroundColor: `${color}${isActive ? '25' : '12'}`,
                                        color: isActive ? color : `${color}90`,
                                    }}
                                >
                                    {c.resetType}
                                </span>
                            </button>
                            {i < us80yrCycles.length - 1 && (
                                <div className="flex flex-col items-center px-2 pb-6">
                                    <div className="h-px w-10 bg-border" />
                                    <span className="text-[10px] font-mono text-muted-foreground/50 mt-0.5">
                                        {us80yrCycles[i + 1].startYear - c.startYear}yr
                                    </span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Active cycle detail */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Cycle header */}
                <div className="px-5 py-4 border-b border-border">
                    <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-foreground">{cycle.title}</h3>
                        <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{
                                backgroundColor: `${resetColor}20`,
                                color: resetColor,
                            }}
                        >
                            {cycle.resetLabel}
                        </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {cycle.startYear} – {cycle.endYear}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground/80 italic">
                        {cycle.resetNote}
                    </p>
                </div>

                {/* Phase headers + descriptions row */}
                <div className="grid grid-cols-4 divide-x divide-border">
                    {cycle.phases.map((phase) => {
                        const color = phaseColors[phase.name] ?? '#888'
                        return (
                            <div key={phase.name} className="p-4 space-y-3">
                                <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: color }} />
                                <div>
                                    <div className="text-sm font-semibold text-foreground">{phase.name}</div>
                                    <div className="text-[10px] font-mono text-muted-foreground mt-0.5">
                                        {phase.startYear}–{phase.endYear}
                                    </div>
                                </div>
                                <ul className="space-y-1">
                                    {(phaseDescriptions[phase.name] ?? []).map((d) => (
                                        <li key={d} className="flex items-baseline gap-1.5 text-[11px] text-muted-foreground">
                                            <span className="h-0.5 w-0.5 flex-shrink-0 rounded-full bg-muted-foreground/50 relative top-[-1px]" />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Events row — aligned across all 4 columns */}
                <div className="grid grid-cols-4 divide-x divide-border border-t border-border">
                    {cycle.phases.map((phase) => {
                        const color = phaseColors[phase.name] ?? '#888'
                        return (
                            <div key={phase.name} className="p-4 space-y-1.5">
                                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/60">
                                    Events
                                </div>
                                {phase.events.length > 0 ? (
                                    <div className="space-y-1.5">
                                        {phase.events.map((e) => (
                                            <div key={`${e.year}-${e.label}`} className="flex gap-1.5 text-xs">
                                                <span className="font-mono font-semibold flex-shrink-0" style={{ color }}>
                                                    {e.year}
                                                </span>
                                                <span className="text-muted-foreground">{e.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-[11px] italic text-muted-foreground/50">
                                        No events yet
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
