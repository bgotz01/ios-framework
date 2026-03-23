'use client';

import { Card } from '@/components/ui/card';

export function CycleHierarchy() {
    const cycles = [
        {
            name: 'Civilization Cycle',
            duration: '~2000 yrs',
            mechanism: 'Astrological Age',
            color: 'purple',
        },
        {
            name: 'Deep Ideology Cycle',
            duration: '~492 yrs',
            mechanism: 'Neptune–Pluto',
            color: 'indigo',
        },
        {
            name: 'Power Cycle',
            duration: '~248 yrs',
            mechanism: 'Pluto',
            color: 'rose',
        },
        {
            name: 'Revolution Cycle',
            duration: '~127 yrs',
            mechanism: 'Uranus–Pluto',
            color: 'red',
        },
        {
            name: 'Technology Cycle',
            duration: '~84 yrs',
            mechanism: 'Uranus',
            color: 'orange',
        },
        {
            name: 'Institutional Cycle',
            duration: '~20 yrs',
            mechanism: 'Jupiter–Saturn',
            color: 'amber',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { border: string; bg: string; text: string }> = {
            purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400' },
            indigo: { border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text: 'text-indigo-400' },
            rose: { border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400' },
            red: { border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-400' },
            orange: { border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-400' },
            amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400' },
        };
        return colors[color];
    };

    return (
        <Card className="p-6">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Cycle Hierarchy</h3>
                <p className="text-sm text-muted-foreground">
                    From civilizational to institutional timescales
                </p>
            </div>

            <div className="space-y-3">
                {cycles.map((cycle, index) => {
                    const colors = getColorClasses(cycle.color);
                    return (
                        <div key={index} className="relative">
                            <div
                                className={`p-4 rounded-lg border-2 ${colors.border} ${colors.bg} transition-all hover:scale-[1.02]`}
                                style={{ marginLeft: `${index * 12}px` }}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="font-bold text-base">{cycle.name}</div>
                                        <div className={`text-xs ${colors.text} font-semibold mt-0.5`}>
                                            {cycle.duration}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-muted-foreground mb-0.5">→</div>
                                        <div className={`text-sm font-semibold ${colors.text}`}>
                                            {cycle.mechanism}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 text-center text-xs text-muted-foreground">
                <p>Each layer nests within the one above it</p>
            </div>
        </Card>
    );
}
