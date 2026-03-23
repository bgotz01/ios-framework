'use client';

import * as React from 'react';
import { AGE_CYCLES, type AgeCycleData } from '@/lib/astrology/age-cycles-data';

export function AgeCycleHistorical() {
    // Reverse the order so Aquarius comes first
    const columns = [...AGE_CYCLES].reverse().map((age) => ({
        key: age.age.toLowerCase(),
        header: (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg">
                        {age.symbol} Age of {age.age}
                    </span>
                    {age.isCurrent && (
                        <span className="text-xs px-2 py-1 bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100 rounded-full font-semibold">
                            CURRENT
                        </span>
                    )}
                    {age.isEmerging && (
                        <span className="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full font-semibold">
                            EMERGING
                        </span>
                    )}
                </div>
                <span className="text-sm font-normal text-muted-foreground">{age.period}</span>
            </div>
        ),
        className: age.isCurrent ? 'bg-cyan-50 dark:bg-cyan-950/30' : age.isEmerging ? 'bg-blue-50 dark:bg-blue-950/30' : '',
        data: age,
    }));

    const rows = [
        {
            id: 'basis',
            label: 'Civilization Basis',
            tone: 'default' as const,
            renderCell: (age: AgeCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {age.civilizationBasis.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'themes',
            label: 'Key Themes',
            tone: 'alt' as const,
            renderCell: (age: AgeCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {age.keyThemes.map((theme, i) => (
                        <li key={i}>• {theme}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'examples',
            label: 'Historical Examples',
            tone: 'default' as const,
            renderCell: (age: AgeCycleData) => (
                <ul className="text-sm text-muted-foreground space-y-1">
                    {age.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                    ))}
                </ul>
            ),
        },
        {
            id: 'symbolism',
            label: 'Symbolism',
            tone: 'alt' as const,
            renderCell: (age: AgeCycleData) => (
                <p className="text-sm text-muted-foreground">
                    {age.symbolism || 'N/A'}
                </p>
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
                        🌍
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Historical Age Cycles</h2>
                        <p className="text-sm text-muted-foreground">
                            Civilizational paradigms across millennia
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <p className="text-sm text-purple-900 dark:text-purple-100">
                        Each astrological age lasts approximately 2,150 years and represents a fundamental shift
                        in how human civilization organizes itself. These ages are driven by the precession of
                        the equinoxes — the slow backward movement of the spring equinox through the zodiac.
                    </p>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <caption className="sr-only">
                        Historical age cycles showing civilization basis, key themes, examples, and symbolism.
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
                                            col.data.isEmerging ? 'bg-blue-50/50 dark:bg-blue-950/10' : '',
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
