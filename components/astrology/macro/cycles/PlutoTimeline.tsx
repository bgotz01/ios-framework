// components/astrology/macro/cycles/PlutoTimeline.tsx
'use client';

import { Card } from '@/components/ui/card';

type CycleData = {
    sign: string;
    symbol: string;
    years: string;
    isCurrent?: boolean;
};

type CycleKey = 'aquarius' | 'capricorn' | 'sagittarius' | 'scorpio' | 'libra';

type DomainData = {
    title: string;
    icon: string;
    cycles: Record<CycleKey, string[]>;
};

export function PlutoTimeline() {
    const cycleHeaders: CycleData[] = [
        { sign: 'Aquarius', symbol: '♒', years: '2024–2044', isCurrent: true },
        { sign: 'Capricorn', symbol: '♑', years: '2008–2024' },
        { sign: 'Sagittarius', symbol: '♐', years: '1995–2008' },
        { sign: 'Scorpio', symbol: '♏', years: '1983–1995' },
        { sign: 'Libra', symbol: '♎', years: '1971–1983' },
    ];

    const domains: DomainData[] = [
        {
            title: 'Main Event',
            icon: '',
            cycles: {
                aquarius: ['AI'],
                capricorn: ['Financial Crisis & QE'],
                sagittarius: ['The Internet & Real Estate'],
                scorpio: ['Wall Street Financialization'],
                libra: ['Gold Depeg & Fiat'],
            },
        },
        {
            title: 'Narrative',
            icon: '',
            cycles: {
                aquarius: ['Networks + systems + code'],
                capricorn: ['Institutions + central authorities'],
                sagittarius: ['Narrative + ideology + global expansion'],
                scorpio: ['Hidden power + psychological intensity'],
                libra: ['Social contract + balance renegotiation'],
            },
        },
        {
            title: 'Economic',
            icon: '',
            cycles: {
                aquarius: ['Digital assets', 'Network-based economies', 'Platform capture vs decentralization'],
                capricorn: ['Deleveraging', 'Bailouts', 'State intervention', 'Institutional consolidation'],
                sagittarius: ['Speculative expansion', 'Asset bubbles fueled by belief', 'Borderless capital optimism'],
                scorpio: ['Financial engineering', 'Leveraged buyouts', 'Derivatives expansion', 'Wall Street dominance'],
                libra: ['Monetary reset', 'Contract-driven globalization', 'Balance-of-power economics'],
            },
        },
        {
            title: 'Tech',
            icon: '',
            cycles: {
                aquarius: ['AI-curated systems', 'Identity layers', 'Network verification', 'System-governed discourse'],
                capricorn: ['Platform centralization', 'Algorithmic feeds', 'Institutional narrative dominance'],
                sagittarius: ['Information explosion', 'Democratized publishing', 'Early web expansion'],
                scorpio: ['Financial systems digitization', 'Database power', 'Early networked finance'],
                libra: ['Mass media negotiation', 'Brand/image power', 'Early computing enters institutions'],
            },
        },
    ];

    return (
        <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">♇ Pluto Timeline</h2>
                <p className="text-muted-foreground">Pluto cycles of transformation across key domains</p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
                <div className="space-y-4 min-w-[1280px]">
                    {/* Column Headers */}
                    <div className="grid grid-cols-[140px_1fr] gap-4">
                        <div className="text-sm font-semibold text-muted-foreground">Domain</div>
                        <div className="grid grid-cols-5 gap-4">
                            {cycleHeaders.map((cycle) => (
                                <div
                                    key={cycle.sign}
                                    className={`text-center p-3 rounded-lg ${cycle.isCurrent
                                        ? 'bg-rose-500/10 border border-rose-500/30'
                                        : 'bg-muted/50 border border-border'
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-xl" aria-hidden="true">
                                            {cycle.symbol}
                                        </span>
                                        <span className="font-bold text-foreground">{cycle.sign}</span>
                                        {cycle.isCurrent && (
                                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500 text-white">
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
                                <div className="grid grid-cols-5 gap-4">
                                    {cycleHeaders.map((cycle) => {
                                        const cycleKey = cycle.sign.toLowerCase() as CycleKey;
                                        const items = domain.cycles[cycleKey] ?? [];

                                        return (
                                            <Card
                                                key={cycle.sign}
                                                className={`p-4 transition-all hover:shadow-md ${cycle.isCurrent
                                                    ? 'border-rose-500 bg-rose-500/5'
                                                    : 'border-border bg-card hover:border-rose-300'
                                                    }`}
                                            >
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {items.map((item) => (
                                                        <li key={item} className="flex items-center gap-2">
                                                            <span className="text-rose-400 text-base flex-shrink-0">
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