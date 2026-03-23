//components/astrology/macro/cycles/PlutoMacroTransits
'use client';

import * as React from 'react';
import { PLUTO_CYCLES, PlutoCycleData } from '@/lib/astrology/pluto-cycles-data';

type CycleComparisonProps = {
    cycles?: PlutoCycleData[];
};

export function PlutoMacroTransits({ cycles = PLUTO_CYCLES }: CycleComparisonProps) {
    // Build column headers
    const columns = cycles.map((cycle) => ({
        key: cycle.sign.toLowerCase(),
        header: (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg">
                        ♇ Pluto in {cycle.sign} {cycle.symbol}
                    </span>
                    {cycle.isCurrent && (
                        <span className="text-xs px-2 py-1 bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 rounded-full font-semibold">
                            CURRENT
                        </span>
                    )}
                </div>
                <span className="text-sm font-normal text-muted-foreground">{cycle.timeframe}</span>
            </div>
        ),
        className: cycle.isCurrent ? 'bg-rose-50 dark:bg-rose-950/30' : '',
        data: cycle,
    }));

    // Build rows
    const rows = [
        {
            id: 'domain',
            label: 'Domain / Layer',
            tone: 'default' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded border border-rose-200 dark:border-rose-800">
                    <p className="text-sm font-semibold text-rose-900 dark:text-rose-100">{cycle.domain}</p>
                </div>
            ),
        },
        {
            id: 'catalyst',
            label: 'Catalyst',
            tone: 'alt' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-800">
                    <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{cycle.catalyst}</p>
                </div>
            ),
        },
        {
            id: 'archetype',
            label: 'Core Archetype',
            tone: 'default' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.coreArchetype.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'narrative',
            label: 'Narrative Theme',
            tone: 'alt' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.narrativeTheme.map((theme, i) => (
                        <li key={i}>• {theme}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'economic',
            label: 'Economic Expression',
            tone: 'default' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.economicExpression.map((expression, i) => (
                        <li key={i}>• {expression}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'technology',
            label: 'Technology Expression',
            tone: 'alt' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.technologyExpression.map((tech, i) => (
                        <li key={i}>• {tech}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'political',
            label: 'Political / Institutional Impact',
            tone: 'default' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.politicalImpact.map((impact, i) => (
                        <li key={i}>• {impact}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'risk',
            label: 'Distortion Risk',
            tone: 'alt' as const,
            renderCell: (cycle: PlutoCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.distortionRisk.map((risk, i) => (
                        <li key={i}>• {risk}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'historical',
            label: 'Historical Parallel',
            tone: 'default' as const,
            renderCell: (cycle: PlutoCycleData) => (
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
                        ♇
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Pluto Macro Transits</h2>
                        <p className="text-sm text-muted-foreground">Civilizational power cycles spanning decades</p>
                    </div>
                </div>

                <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
                    <p className="text-sm text-rose-900 dark:text-rose-100">
                        Pluto&apos;s 248-year orbit creates generational transformation cycles. Each sign transit (12–30
                        years) reshapes power structures, institutions, and collective consciousness. These are
                        regime-level changes that define entire eras.
                    </p>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <caption className="sr-only">
                        Pluto macro transit cycles showing core archetypes, narrative themes, economic and technology
                        expressions, and historical parallels.
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
                                            col.data.isCurrent ? 'bg-rose-50/50 dark:bg-rose-950/10' : '',
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
