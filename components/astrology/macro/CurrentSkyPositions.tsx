// components/astrology/macro/CurrentSkyPositions.tsx
'use client';

import { CurrentPlanetPosition } from '@/lib/astrology/macro-transits';
import { Planet } from '@/types/astrology';

interface CurrentSkyPositionsProps {
    positions: CurrentPlanetPosition[];
    date: Date;
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

const PLANET_COLORS: Record<Planet, string> = {
    [Planet.Sun]: 'text-yellow-600 dark:text-yellow-400',
    [Planet.Moon]: 'text-slate-400 dark:text-slate-300',
    [Planet.Mercury]: 'text-cyan-600 dark:text-cyan-400',
    [Planet.Venus]: 'text-pink-600 dark:text-pink-400',
    [Planet.Mars]: 'text-red-600 dark:text-red-400',
    [Planet.Jupiter]: 'text-purple-600 dark:text-purple-400',
    [Planet.Saturn]: 'text-indigo-700 dark:text-indigo-400',
    [Planet.Uranus]: 'text-teal-600 dark:text-teal-400',
    [Planet.Neptune]: 'text-blue-600 dark:text-blue-400',
    [Planet.Pluto]: 'text-violet-800 dark:text-violet-400',
    [Planet.NorthNode]: 'text-emerald-600 dark:text-emerald-400',
    [Planet.SouthNode]: 'text-emerald-600 dark:text-emerald-400',
    [Planet.Chiron]: 'text-orange-600 dark:text-orange-400'
};

// Order planets: Outer planets first (most influential), then inner planets
const PLANET_ORDER = [
    Planet.Pluto,
    Planet.Neptune,
    Planet.Uranus,
    Planet.Saturn,
    Planet.Jupiter,
    Planet.NorthNode,
    Planet.Mars,
    Planet.Venus,
    Planet.Mercury,
    Planet.Moon,
    Planet.Sun
];

export function CurrentSkyPositions({ positions, date }: CurrentSkyPositionsProps) {
    // Sort positions by planet order
    const sortedPositions = [...positions].sort((a, b) => {
        return PLANET_ORDER.indexOf(a.planet) - PLANET_ORDER.indexOf(b.planet);
    });

    // Split into outer and inner planets
    const outerPlanets = sortedPositions.filter(p =>
        [Planet.Pluto, Planet.Neptune, Planet.Uranus, Planet.Saturn, Planet.Jupiter].includes(p.planet)
    );
    const innerPlanets = sortedPositions.filter(p =>
        ![Planet.Pluto, Planet.Neptune, Planet.Uranus, Planet.Saturn, Planet.Jupiter].includes(p.planet)
    );

    return (
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            {/* Outer Planets Section */}
            <div className="mb-8">
                <div className="mb-4 pb-3 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <span className="text-2xl">🪐</span>
                        Outer Planets (Collective Influence)
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        These slow-moving planets shape generational themes and long-term cycles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {outerPlanets.map((pos) => (
                        <PlanetCard key={pos.planet} position={pos} />
                    ))}
                </div>
            </div>

            {/* Inner Planets Section */}
            <div>
                <div className="mb-4 pb-3 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <span className="text-2xl">☀️</span>
                        Inner Planets & Points (Personal Influence)
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        These fast-moving planets add short-term flavors and personal themes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {innerPlanets.map((pos) => (
                        <PlanetCard key={pos.planet} position={pos} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface PlanetCardProps {
    position: CurrentPlanetPosition;
}

function PlanetCard({ position }: PlanetCardProps) {
    const isOuterPlanet = [Planet.Pluto, Planet.Neptune, Planet.Uranus, Planet.Saturn, Planet.Jupiter].includes(position.planet);

    // Calculate progress percentage if we have entry and exit dates
    let progressPercent = 0;
    let daysInSign = 0;
    let totalDays = 0;

    if (isOuterPlanet && position.signEntry && position.signExit) {
        const now = new Date();
        const entryTime = new Date(position.signEntry).getTime();
        const exitTime = new Date(position.signExit).getTime();
        const nowTime = now.getTime();

        totalDays = Math.floor((exitTime - entryTime) / (1000 * 60 * 60 * 24));
        daysInSign = Math.floor((nowTime - entryTime) / (1000 * 60 * 60 * 24));
        progressPercent = Math.min(100, Math.max(0, ((nowTime - entryTime) / (exitTime - entryTime)) * 100));
    }

    return (
        <div className="p-4 rounded-lg bg-accent/50 border border-border hover:bg-accent transition-colors">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className={`text-2xl ${PLANET_COLORS[position.planet]}`}>
                        {PLANET_SYMBOLS[position.planet]}
                    </span>
                    <span className="font-semibold text-foreground">
                        {position.planet}
                    </span>
                </div>
                {position.isRetrograde && (
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-medium">
                        ℞
                    </span>
                )}
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Position:</span>
                    <span className="font-mono text-sm text-foreground font-medium">
                        {position.degree}° {position.sign} {position.minute}'
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Speed:</span>
                    <span className="font-mono text-xs text-muted-foreground">
                        {position.speed.toFixed(4)}°/day
                    </span>
                </div>

                {/* Transit dates and progress bar for outer planets */}
                {isOuterPlanet && position.signEntry && position.signExit && (
                    <>
                        <div className="pt-2 mt-2 border-t border-border/50">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-muted-foreground">Entered:</span>
                                <span className="text-xs font-medium text-foreground">
                                    {new Date(position.signEntry).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-muted-foreground">Exits:</span>
                                <span className="text-xs font-medium text-foreground">
                                    {new Date(position.signExit).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="pt-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-muted-foreground">Progress:</span>
                                <span className="text-xs font-medium text-foreground">
                                    {progressPercent.toFixed(1)}%
                                </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${PLANET_COLORS[position.planet].replace('text-', 'bg-')}`}
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-muted-foreground">
                                    {daysInSign.toLocaleString()} days
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    {totalDays.toLocaleString()} total
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
