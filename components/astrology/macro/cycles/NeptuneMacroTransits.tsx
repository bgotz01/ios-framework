//components/astrology/macro/cycles/NeptuneMacroTransits
'use client';

import * as React from 'react';
import { NEPTUNE_CYCLES, NeptuneCycleData } from '@/lib/astrology/neptune-cycles-data';

type CycleComparisonProps = {
    cycles?: NeptuneCycleData[];
};

export function NeptuneMacroTransits({ cycles = NEPTUNE_CYCLES }: CycleComparisonProps) {
    // Build column headers
    const columns = cycles.map((cycle) => ({
        key: cycle.sign.toLowerCase(),
        header: (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg">
                        ♆ Neptune in {cycle.sign} {cycle.symbol}
                    </span>
                    {cycle.isCurrent && (
                        <span className="text-xs px-2 py-1 bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100 rounded-full font-semibold">
                            CURRENT
                        </span>
                    )}
                </div>
                <span className="text-sm font-normal text-muted-foreground">{cycle.timeframe}</span>
            </div>
        ),
        className: cycle.isCurrent ? 'bg-cyan-50 dark:bg-cyan-950/30' : '',
        data: cycle,
    }));

    // Build rows
    const rows = [
        {
            id: 'domain',
            label: 'Domain / Layer',
            tone: 'default' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded border border-cyan-200 dark:border-cyan-800">
                    <p className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">{cycle.domain}</p>
                </div>
            ),
        },
        {
            id: 'myth',
            label: 'Dominant Myth',
            tone: 'alt' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.dominantMyth.map((myth, i) => (
                        <li key={i}>• {myth}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'boundary',
            label: 'Boundary Being Dissolved',
            tone: 'default' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.boundaryBeingDissolved.map((boundary, i) => (
                        <li key={i}>• {boundary}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'capital',
            label: 'Capital & Liquidity Pattern',
            tone: 'alt' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.capitalPattern.map((pattern, i) => (
                        <li key={i}>• {pattern}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'political',
            label: 'Political / Institutional Expression',
            tone: 'default' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.politicalExpression.map((expression, i) => (
                        <li key={i}>• {expression}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'cultural',
            label: 'Cultural Tone',
            tone: 'alt' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.culturalTone.map((tone, i) => (
                        <li key={i}>• {tone}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'risk',
            label: 'Distortion Risk',
            tone: 'default' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.distortionRisk.map((risk, i) => (
                        <li key={i}>• {risk}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'archetypal',
            label: 'Archetypal Pattern',
            tone: 'alt' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.archetypalPattern.map((pattern, i) => (
                        <li key={i}>• {pattern}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'historical',
            label: 'Historical Parallel',
            tone: 'default' as const,
            renderCell: (cycle: NeptuneCycleData) => (
                <div className="space-y-2">
                    <p className="text-sm text-foreground font-medium">
                        Previous occurrence: {cycle.historicalParallel.previousOccurrence}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        {cycle.historicalParallel.historicalThemes.map((theme, i) => (
                            <li key={i}>• {theme}</li>
                        ))}
                    </ul>
                </div>
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
                        ♆
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Neptune Macro Transits</h2>
                        <p className="text-sm text-muted-foreground">
                            Collective illusions and boundary dissolution cycles
                        </p>
                    </div>
                </div>

                <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                    <p className="text-sm text-cyan-900 dark:text-cyan-100">
                        Neptune&apos;s 165-year orbit creates cycles of collective enchantment and disillusionment. Each
                        sign transit (~14 years) dissolves specific boundaries, creating zones of illusion where
                        narrative overtakes reality. These periods reshape what societies believe is possible—and what
                        they mistake for real.
                    </p>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <caption className="sr-only">
                        Neptune macro transit cycles showing dominant myths, dissolved boundaries, capital illusion
                        zones, and cultural patterns.
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
                                            col.data.isCurrent ? 'bg-cyan-50/50 dark:bg-cyan-950/10' : '',
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
        </section>
    );
}
