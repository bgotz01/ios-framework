// components/astrology/macro/cycles/NeptuneTimeline.tsx
'use client';

import { Card } from '@/components/ui/card';

type CycleData = {
    sign: string;
    symbol: string;
    years: string;
    isCurrent?: boolean;
};

type CycleKey = 'aries' | 'pisces' | 'aquarius';

type DomainData = {
    title: string;
    cycles: Record<CycleKey, string[]>;
};

export function NeptuneTimeline() {
    const cycleHeaders: CycleData[] = [
        { sign: 'Aries', symbol: '♈', years: '2025–2039', isCurrent: true },
        { sign: 'Pisces', symbol: '♓', years: '2011–2025' },
        { sign: 'Aquarius', symbol: '♒', years: '1998–2011' },
    ];

    const domains: DomainData[] = [
        {
            title: 'Narrative',
            cycles: {
                aries: ['Identity must be defended', 'Belief justifies action', 'Conflict clarifies alignment'],
                pisces: ['Liquidity has no limit', 'Digital identity replaces physical identity', 'Story creates value'],
                aquarius: ['Networks will decentralize power', 'Information wants to be free', 'Technology unites humanity'],
            },
        },
        {
            title: 'Economic',
            cycles: {
                aries: [
                    'Industrial policy expansion',
                    'Strategic sector prioritization (defense, energy, AI)',
                    'Capital aligns along geopolitical blocs',
                ],
                pisces: [
                    'QE & zero-rate normalization',
                    'Crypto & speculative asset boom',
                    'Growth stocks decouple from earnings',
                ],
                aquarius: [
                    'Dot-com boom → crash → rebuild',
                    'Capital floods telecom & early internet',
                    'Financial globalization accelerates',
                ],
            },
        },
        {
            title: 'Tech',
            cycles: {
                aries: [
                    'Defense & dual-use technologies',
                    'AI applied to sovereignty & security',
                    'Space & frontier systems acceleration',
                ],
                pisces: ['Social media dominance', 'Streaming & creator economy', 'Blockchain & tokenization'],
                aquarius: ['Internet mainstream adoption', 'Broadband expansion', 'Early social media platforms'],
            },
        },
    ];

    return (
        <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">♆ Neptune Timeline</h2>
                <p className="text-muted-foreground">Neptune cycles of illusion and dissolution across key domains</p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
                <div className="space-y-4 min-w-[960px]">
                    {/* Column Headers */}
                    <div className="grid grid-cols-[140px_1fr] gap-4">
                        <div className="text-sm font-semibold text-muted-foreground">Domain</div>
                        <div className="grid grid-cols-3 gap-4">
                            {cycleHeaders.map((cycle) => (
                                <div
                                    key={cycle.sign}
                                    className={`text-center p-3 rounded-lg ${cycle.isCurrent
                                            ? 'bg-cyan-500/10 border border-cyan-500/30'
                                            : 'bg-muted/50 border border-border'
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-xl" aria-hidden="true">
                                            {cycle.symbol}
                                        </span>
                                        <span className="font-bold text-foreground">{cycle.sign}</span>
                                        {cycle.isCurrent && (
                                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500 text-white">
                                                NOW
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{cycle.years}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Domain Rows */}
                    <div className="space-y-3">
                        {domains.map((domain) => (
                            <div key={domain.title} className="grid grid-cols-[140px_1fr] gap-4">
                                {/* Domain Label */}
                                <div className="flex items-center gap-2 py-4">
                                    <span className="font-bold text-foreground">{domain.title}</span>
                                </div>

                                {/* Cycle Cards */}
                                <div className="grid grid-cols-3 gap-4">
                                    {cycleHeaders.map((cycle) => {
                                        const cycleKey = cycle.sign.toLowerCase() as CycleKey;
                                        const items = domain.cycles[cycleKey] ?? [];

                                        return (
                                            <Card
                                                key={cycle.sign}
                                                className={`p-4 transition-all hover:shadow-md ${cycle.isCurrent
                                                        ? 'border-cyan-500 bg-cyan-500/5'
                                                        : 'border-border bg-card hover:border-cyan-300'
                                                    }`}
                                            >
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {items.map((item) => (
                                                        <li key={item} className="flex items-center gap-2">
                                                            <span className="text-cyan-400 text-base flex-shrink-0">
                                                                •
                                                            </span>
                                                            <span className="leading-snug">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
