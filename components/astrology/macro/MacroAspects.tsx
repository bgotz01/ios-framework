// components/astrology/macro/MacroAspects.tsx
'use client';

import { MacroAspect } from '@/lib/astrology/macro-transits';
import { Planet, AspectType } from '@/types/astrology';

interface MacroAspectsProps {
    aspects: MacroAspect[];
}

const PLANET_SYMBOLS: Record<Planet, string> = {
    [Planet.Sun]: '☉',
    [Planet.Moon]: '☽',
    [Planet.Mercury]: '☿',
    [Planet.Venus]: '♀',
    [Planet.Mars]: '♂',
    [Planet.Jupiter]: '♃',
    [Planet.Saturn]: '♄',
    [Planet.Uranus]: '♅',
    [Planet.Neptune]: '♆',
    [Planet.Pluto]: '♇',
    [Planet.NorthNode]: '☊',
    [Planet.SouthNode]: '☋',
    [Planet.Chiron]: '⚷'
};

const ASPECT_SYMBOLS: Record<AspectType, string> = {
    [AspectType.Conjunction]: '☌',
    [AspectType.Opposition]: '☍',
    [AspectType.Square]: '□',
    [AspectType.Trine]: '△',
    [AspectType.Sextile]: '⚹',
    [AspectType.Quincunx]: '⚻',
    [AspectType.Semisextile]: '⚺',
    [AspectType.Semisquare]: '∠',
    [AspectType.Sesquisquare]: '⚼'
};

const ASPECT_COLORS: Record<AspectType, string> = {
    [AspectType.Conjunction]: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    [AspectType.Opposition]: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
    [AspectType.Square]: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800',
    [AspectType.Trine]: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
    [AspectType.Sextile]: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    [AspectType.Quincunx]: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    [AspectType.Semisextile]: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800',
    [AspectType.Semisquare]: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    [AspectType.Sesquisquare]: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800'
};

export function MacroAspects({ aspects }: MacroAspectsProps) {
    // Group aspects by type
    const groupedAspects = aspects.reduce((acc, aspect) => {
        if (!acc[aspect.aspectType]) {
            acc[aspect.aspectType] = [];
        }
        acc[aspect.aspectType].push(aspect);
        return acc;
    }, {} as Record<AspectType, MacroAspect[]>);

    // Sort aspect types by importance
    const aspectOrder = [
        AspectType.Conjunction,
        AspectType.Opposition,
        AspectType.Square,
        AspectType.Trine,
        AspectType.Sextile
    ];

    return (
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            {aspects.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🌟</div>
                    <p className="text-muted-foreground">No major aspects currently active</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {aspectOrder.map((aspectType) => {
                        const aspectsOfType = groupedAspects[aspectType];
                        if (!aspectsOfType || aspectsOfType.length === 0) return null;

                        return (
                            <div key={aspectType}>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border">
                                    <span className={`text-2xl px-3 py-1 rounded-lg border ${ASPECT_COLORS[aspectType]}`}>
                                        {ASPECT_SYMBOLS[aspectType]}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            {aspectType}
                                        </h3>
                                        <span className="text-xs text-muted-foreground">
                                            {aspectsOfType.length} active {aspectsOfType.length === 1 ? 'aspect' : 'aspects'}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    {aspectsOfType.map((aspect, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-3 rounded-lg bg-accent/50 border border-border hover:bg-accent transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">
                                                    {PLANET_SYMBOLS[aspect.planet1]}
                                                </span>
                                                <span className="font-medium text-foreground text-sm">
                                                    {aspect.planet1}
                                                </span>
                                                <span className={`text-lg px-2 py-1 rounded ${ASPECT_COLORS[aspect.aspectType]}`}>
                                                    {ASPECT_SYMBOLS[aspect.aspectType]}
                                                </span>
                                                <span className="text-xl">
                                                    {PLANET_SYMBOLS[aspect.planet2]}
                                                </span>
                                                <span className="font-medium text-foreground text-sm">
                                                    {aspect.planet2}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-muted-foreground font-mono">
                                                    {aspect.orb.toFixed(2)}°
                                                </span>
                                                {aspect.isApplying ? (
                                                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium">
                                                        Applying
                                                    </span>
                                                ) : (
                                                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full font-medium">
                                                        Separating
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
