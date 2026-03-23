'use client';

import * as React from 'react';
import { JUPITER_SATURN_CYCLES, JupiterSaturnCycleData } from '@/lib/astrology/jupiter-saturn-cycles-data';

type CycleComparisonProps = {
    cycles?: JupiterSaturnCycleData[];
};

export function JupiterSaturnHistoricalTable({ cycles = JUPITER_SATURN_CYCLES }: CycleComparisonProps) {
    // Build column headers
    const columns = cycles.map((cycle) => ({
        key: `${cycle.year}-${cycle.sign.toLowerCase()}`,
        header: (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg">
                        {cycle.year} {cycle.symbol} {cycle.sign}
                    </span>
                    {cycle.isCurrent && (
                        <span className="text-xs px-2 py-1 bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded-full font-semibold">
                            CURRENT
                        </span>
                    )}
                </div>
                <span className="text-sm font-normal text-muted-foreground">
                    {cycle.element} Element
                </span>
            </div>
        ),
        className: cycle.isCurrent ? 'bg-amber-50 dark:bg-amber-950/30' : '',
        data: cycle,
    }));

    // Build rows
    const rows = [
        {
            id: 'theme',
            label: 'Economic Theme',
            tone: 'default' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-800">
                    <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{cycle.economicTheme}</p>
                </div>
            ),
        },
        {
            id: 'archetype',
            label: 'Core Archetype',
            tone: 'alt' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.coreArchetype.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'expansion',
            label: '♃ Expansion Focus',
            tone: 'default' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.expansionFocus.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'structural',
            label: '♄ Structural Shift',
            tone: 'alt' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.structuralShift.map((shift, i) => (
                        <li key={i}>• {shift}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'market',
            label: 'Market Character',
            tone: 'default' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.marketCharacter.map((character, i) => (
                        <li key={i}>• {character}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'risk',
            label: 'Distortion Risk',
            tone: 'alt' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.distortionRisk.map((risk, i) => (
                        <li key={i}>• {risk}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'historical',
            label: 'Historical Context',
            tone: 'default' as const,
            renderCell: (cycle: JupiterSaturnCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.historicalContext.map((context, i) => (
                        <li key={i}>• {context}</li>
                    ))}
                </ul>
            ),
        },
    ];

    function rowToneClass(tone: 'default' | 'alt') {
        if (tone === 'alt') return 'bg-slate-50/50 dark:bg-slate-900/20';
        return '';
    }

    return (
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <header className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl" aria-hidden="true">
                        ♃
                    </span>
                    <span className="text-3xl text-muted-foreground" aria-hidden="true">
                        ×
                    </span>
                    <span className="text-4xl" aria-hidden="true">
                        ♄
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Jupiter–Saturn Conjunctions</h2>
                        <p className="text-sm text-muted-foreground">
                            20-year economic cycles that reset paradigms
                        </p>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                        Every ~20 years, Jupiter (expansion, optimism, growth) conjuncts Saturn (structure, limits, authority),
                        marking major economic and institutional turning points. These conjunctions have historically coincided
                        with recessions, policy shifts, and paradigm changes in how wealth is created and distributed.
                    </p>
                    <p className="text-sm text-amber-900 dark:text-amber-100 font-semibold">
                        The 2020 conjunction in Aquarius marked the beginning of a 200-year Air element cycle, shifting
                        economic value from material/tangible assets (Earth) to intellectual/network assets (Air).
                    </p>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <caption className="sr-only">
                        Jupiter-Saturn conjunction cycles showing economic themes, core archetypes, expansion focus,
                        structural shifts, market character, and historical context.
                    </caption>

                    <thead>
                        <tr className="border-b-2 border-border">
                            <th
                                scope="col"
                                className="text-left py-4 px-4 font-semibold text-muted-foreground w-44 sticky left-0 bg-card z-10"
                            >
                                Section
                            </th>

                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    scope="col"
                                    className={[
                                        'text-left py-4 px-4 font-bold text-foreground border-l border-border min-w-[320px]',
                                        col.className ?? '',
                                    ].join(' ')}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} className={['border-b border-border', rowToneClass(row.tone)].join(' ')}>
                                <th scope="row" className="py-4 px-4 align-top sticky left-0 bg-card z-10">
                                    <span className="font-semibold text-foreground text-sm">{row.label}</span>
                                </th>

                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={[
                                            'py-4 px-4 align-top border-l border-border min-w-[320px]',
                                            col.data.isCurrent ? 'bg-amber-50/50 dark:bg-amber-950/10' : '',
                                        ].join(' ')}
                                    >
                                        {row.renderCell(col.data)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Element Cycle Note */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Understanding Element Cycles
                </h3>
                <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                    Jupiter-Saturn conjunctions occur in the same element (Fire, Earth, Air, Water) for approximately
                    200 years before shifting to the next element. This creates multi-generational paradigm shifts:
                </p>
                <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-1">
                    <li>• <strong>Earth (1802-2020):</strong> Material wealth, tangible assets, industrial production</li>
                    <li>• <strong>Air (2020-2219):</strong> Intellectual capital, networks, digital/information assets</li>
                    <li>• The 1980 Libra conjunction was a brief preview of the Air era within the Earth cycle</li>
                </ul>
            </div>
        </section>
    );
}
