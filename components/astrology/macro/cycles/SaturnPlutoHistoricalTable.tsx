'use client';

import * as React from 'react';
import { SATURN_PLUTO_CONJUNCTIONS, SaturnPlutoCycle } from '@/lib/astrology/saturn-pluto-cycles-data';

type CycleComparisonProps = {
    cycles?: SaturnPlutoCycle[];
};

export function SaturnPlutoHistoricalTable({ cycles = SATURN_PLUTO_CONJUNCTIONS }: CycleComparisonProps) {
    // Build column headers
    const columns = cycles.map((cycle) => ({
        key: `${cycle.year}-${cycle.sign.toLowerCase()}`,
        header: (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg">
                        {cycle.year} {cycle.symbol} {cycle.sign}
                    </span>
                    {cycle.year === 2020 && (
                        <span className="text-xs px-2 py-1 bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-full font-semibold">
                            CURRENT
                        </span>
                    )}
                </div>
                <span className="text-sm font-normal text-muted-foreground">
                    {cycle.phase}
                </span>
            </div>
        ),
        className: cycle.year === 2020 ? 'bg-purple-50 dark:bg-purple-950/30' : '',
        data: cycle,
    }));

    // Build rows
    const rows = [
        {
            id: 'theme',
            label: 'Structural Theme',
            tone: 'default' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-800">
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">{cycle.structuralTheme}</p>
                </div>
            ),
        },
        {
            id: 'archetype',
            label: 'Core Archetype',
            tone: 'alt' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.coreArchetype.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'power',
            label: 'Power Dynamics',
            tone: 'default' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.powerDynamics.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'institutional',
            label: 'Institutional Pressure',
            tone: 'alt' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.institutionalPressure.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'crisis',
            label: 'Crisis Character',
            tone: 'default' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.crisisCharacter.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'reconstruction',
            label: 'Reconstruction Focus',
            tone: 'alt' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.reconstructionFocus.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'events',
            label: 'Historical Events',
            tone: 'default' as const,
            renderCell: (cycle: SaturnPlutoCycle) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {cycle.historicalEvents.map((item, i) => (
                        <li key={i}>• {item}</li>
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
                        ♄
                    </span>
                    <span className="text-3xl text-muted-foreground" aria-hidden="true">
                        ×
                    </span>
                    <span className="text-4xl" aria-hidden="true">
                        ♇
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Saturn–Pluto Conjunctions</h2>
                        <p className="text-sm text-muted-foreground">
                            33-year structural crisis cycles
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-purple-900 dark:text-purple-100">
                        Every ~33 years, Saturn (structure, institutions, order) conjuncts Pluto (power, destruction, transformation),
                        marking periods of extreme structural pressure. These conjunctions have historically coincided with wars,
                        financial crises, institutional collapse, and major regime changes.
                    </p>
                    <p className="text-sm text-purple-900 dark:text-purple-100 font-semibold">
                        Not because astrology "causes" them — but because the symbolism aligns with periods when existing
                        power structures break down and are forcibly reconstructed.
                    </p>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <caption className="sr-only">
                        Saturn-Pluto conjunction cycles showing structural themes, core archetypes, power dynamics,
                        institutional pressure, crisis character, reconstruction focus, and historical events.
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
                                            col.data.year === 2020 ? 'bg-purple-50/50 dark:bg-purple-950/10' : '',
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

            {/* Cycle Phases Note */}
            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Understanding the Cycle Phases
                </h3>
                <p className="text-sm text-purple-900 dark:text-purple-100 mb-2">
                    Each Saturn-Pluto cycle lasts approximately 33-38 years and can be divided into distinct phases:
                </p>
                <ul className="text-sm text-purple-900 dark:text-purple-100 space-y-1">
                    <li>• <strong>Conjunction:</strong> Systemic crisis, collapse of old systems, power consolidation</li>
                    <li>• <strong>Early Cycle:</strong> Reconstruction, new institutions forming, power structures stabilizing</li>
                    <li>• <strong>Mid Cycle:</strong> System consolidation, economic expansion, confidence in institutions</li>
                    <li>• <strong>Late Cycle:</strong> Structural pressure builds, debt/power imbalances accumulate, institutions lose legitimacy</li>
                </ul>
            </div>
        </section>
    );
}
