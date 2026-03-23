//components/astrology/macro/CycleTimeline
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PLUTO_CYCLES } from '@/lib/astrology/pluto-cycles-data';
import { NEPTUNE_CYCLES } from '@/lib/astrology/neptune-cycles-data';
import { URANUS_CYCLES } from '@/lib/astrology/uranus-cycles-data';
import {
    JUPITER_SATURN_CYCLES,
    getJupiterSaturnYearsIntoCycle,
    getJupiterSaturnCyclePhase,
} from '@/lib/astrology/jupiter-saturn-cycles-data';
import {
    SATURN_PLUTO_CONJUNCTIONS,
    getSaturnPlutoYearsIntoCycle,
    getSaturnPlutoCyclePhase,
} from '@/lib/astrology/saturn-pluto-cycles-data';
import {
    URANUS_PLUTO_MILESTONES,
    getUranusPlutoYearsIntoCycle,
    getUranusPlutoCyclePhase,
} from '@/lib/astrology/uranus-pluto-cycles-data';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CycleInfo {
    name: string;
    symbol: string;
    sign: string;
    element?: string;
    timeframe: string;
    yearsIn: number;
    totalYears: number;
    phase: string;
    theme: string;
    layer: 'Civilizational' | 'Structural' | 'Turning Point';
    category?: string;
}

export function CycleTimeline() {
    const now = new Date();
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Helper function to get element from zodiac sign
    const getElementFromSign = (sign: string): string => {
        const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
        const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
        const airSigns = ['Gemini', 'Libra', 'Aquarius'];
        const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];

        if (fireSigns.includes(sign)) return 'Fire';
        if (earthSigns.includes(sign)) return 'Earth';
        if (airSigns.includes(sign)) return 'Air';
        if (waterSigns.includes(sign)) return 'Water';
        return '';
    };

    // Helper function to parse date from timeframe string
    const parseStartDate = (timeframe: string): Date => {
        const startPart = timeframe.split('–')[0].trim();
        // Try to parse full date like "Jan 26, 2026" or "Nov 19, 2024"
        const fullDateMatch = startPart.match(/([A-Za-z]+)\s+(\d+),\s+(\d{4})/);
        if (fullDateMatch) {
            const [, month, day, year] = fullDateMatch;
            return new Date(`${month} ${day}, ${year}`);
        }
        // Fallback to just year
        const yearMatch = startPart.match(/\d{4}/);
        if (yearMatch) {
            return new Date(`January 1, ${yearMatch[0]}`);
        }
        return now;
    };

    // Helper function to calculate years elapsed (with fractional years)
    const calculateYearsElapsed = (startDate: Date): number => {
        const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
        const elapsed = now.getTime() - startDate.getTime();
        // Round to 4 decimal places to avoid hydration mismatches
        return Math.round((elapsed / msPerYear) * 10000) / 10000;
    };

    // Get current cycles
    const currentPluto = PLUTO_CYCLES.find((c) => c.isCurrent);
    const currentNeptune = NEPTUNE_CYCLES.find((c) => c.isCurrent);
    const currentUranus = URANUS_CYCLES.find((c) => c.isCurrent);
    const currentJupiterSaturn = JUPITER_SATURN_CYCLES.find((c) => c.isCurrent);
    const currentSaturnPluto = SATURN_PLUTO_CONJUNCTIONS.find((c) => c.isCurrent);

    // Calculate progress for each cycle
    const cycles: CycleInfo[] = [];

    // Civilizational Layer - Neptune-Pluto (~500 years)
    cycles.push({
        name: 'Neptune–Pluto',
        symbol: '♆-♇',
        sign: 'Gemini',
        element: 'Air',
        timeframe: '1891–~2380',
        yearsIn: new Date().getFullYear() - 1891,
        totalYears: 492,
        phase: 'Waxing Square',
        theme: 'Information Civilizations',
        layer: 'Civilizational',
        category: '~500 years',
    });

    // Civilizational Layer - Uranus-Pluto (~130 years)
    const uranusPlutoYearsIn = getUranusPlutoYearsIntoCycle();
    const uranusPlutoPhase = getUranusPlutoCyclePhase();
    const uranusPlutoStart = URANUS_PLUTO_MILESTONES[0].year;
    const uranusPlutoEnd = URANUS_PLUTO_MILESTONES[URANUS_PLUTO_MILESTONES.length - 1].year;
    const uranusPluTotalYears = uranusPlutoEnd - uranusPlutoStart;

    cycles.push({
        name: 'Uranus–Pluto',
        symbol: '♅-♇',
        sign: 'Virgo',
        element: 'Earth',
        timeframe: `${uranusPlutoStart}–${uranusPlutoEnd}`,
        yearsIn: uranusPlutoYearsIn,
        totalYears: uranusPluTotalYears,
        phase: uranusPlutoPhase,
        theme: 'Revolutionary Eras',
        layer: 'Civilizational',
        category: '~130 years',
    });

    // Structural Layer - Pluto (248 years, ~20 years per sign)
    if (currentPluto) {
        const startDate = parseStartDate(currentPluto.timeframe);
        const yearsIn = calculateYearsElapsed(startDate);
        const totalYears = 20; // Approximate
        cycles.push({
            name: 'Pluto',
            symbol: '♇',
            sign: currentPluto.sign,
            element: getElementFromSign(currentPluto.sign),
            timeframe: currentPluto.timeframe,
            yearsIn,
            totalYears,
            phase: yearsIn < 5 ? 'Early' : yearsIn < 15 ? 'Mid' : 'Late',
            theme: currentPluto.domain,
            layer: 'Structural',
            category: '~20 years',
        });
    }

    // Structural Layer - Neptune (165 years, ~14 years per sign)
    if (currentNeptune) {
        const startDate = parseStartDate(currentNeptune.timeframe);
        const yearsIn = calculateYearsElapsed(startDate);
        const totalYears = 14; // Approximate
        cycles.push({
            name: 'Neptune',
            symbol: '♆',
            sign: currentNeptune.sign,
            element: getElementFromSign(currentNeptune.sign),
            timeframe: currentNeptune.timeframe,
            yearsIn,
            totalYears,
            phase: yearsIn < 4 ? 'Early' : yearsIn < 10 ? 'Mid' : 'Late',
            theme: currentNeptune.domain,
            layer: 'Structural',
            category: '~14 years',
        });
    }

    // Structural Layer - Uranus (84 years, ~7 years per sign)
    if (currentUranus) {
        const startDate = parseStartDate(currentUranus.timeframe);
        const yearsIn = calculateYearsElapsed(startDate);
        const totalYears = 7; // Approximate
        cycles.push({
            name: 'Uranus',
            symbol: '♅',
            sign: currentUranus.sign,
            element: getElementFromSign(currentUranus.sign),
            timeframe: currentUranus.timeframe,
            yearsIn,
            totalYears,
            phase: yearsIn < 2 ? 'Early' : yearsIn < 5 ? 'Mid' : 'Late',
            theme: currentUranus.domain,
            layer: 'Structural',
            category: '~7 years',
        });
    }

    // Turning Point Layer - Jupiter-Saturn (20 years)
    if (currentJupiterSaturn) {
        const yearsIn = getJupiterSaturnYearsIntoCycle();
        const phase = getJupiterSaturnCyclePhase();
        cycles.push({
            name: 'Jupiter-Saturn',
            symbol: '♃-♄',
            sign: currentJupiterSaturn.sign,
            element: currentJupiterSaturn.element,
            timeframe: `${currentJupiterSaturn.year}–${currentJupiterSaturn.year + 20}`,
            yearsIn,
            totalYears: 20,
            phase,
            theme: currentJupiterSaturn.economicTheme,
            layer: 'Turning Point',
            category: '~20 years',
        });
    }

    // Turning Point Layer - Saturn-Pluto (33 years)
    if (currentSaturnPluto) {
        const yearsIn = getSaturnPlutoYearsIntoCycle();
        const phase = getSaturnPlutoCyclePhase();
        cycles.push({
            name: 'Saturn-Pluto',
            symbol: '♄-♇',
            sign: currentSaturnPluto.sign,
            element: currentSaturnPluto.element,
            timeframe: `${currentSaturnPluto.year}–${currentSaturnPluto.year + 33}`,
            yearsIn,
            totalYears: 33,
            phase,
            theme: currentSaturnPluto.structuralTheme,
            layer: 'Turning Point',
            category: '~33 years',
        });
    }

    const civilizationalCycles = cycles.filter((c) => c.layer === 'Civilizational');
    const structuralCycles = cycles.filter((c) => c.layer === 'Structural');
    const turningPointCycles = cycles.filter((c) => c.layer === 'Turning Point');

    if (cycles.length === 0) {
        return (
            <Card className="border-border/50">
                <CardHeader>
                    <CardTitle className="text-2xl">Current Cycle Timeline</CardTitle>
                    <CardDescription>
                        All active cycles from Civilizational, Structural, and Turning Point layers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center py-8">No active cycles found</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-border/50">
            <CardHeader>
                <div
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1 text-center">
                            <CardTitle className="text-2xl">Current Cycle Timeline</CardTitle>
                            <CardDescription>
                                All active cycles from the Structural and Conjunction layers with their current progress
                            </CardDescription>
                        </div>
                        {isExpanded ? (
                            <ChevronUp className="h-6 w-6 text-muted-foreground" />
                        ) : (
                            <ChevronDown className="h-6 w-6 text-muted-foreground" />
                        )}
                    </div>
                </div>
            </CardHeader>
            {isExpanded && (
                <CardContent className="space-y-6">
                    {/* Civilizational Layer */}
                    {civilizationalCycles.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-muted-foreground text-center">Civilizational</h3>
                            <div className="space-y-4">
                                {civilizationalCycles.map((cycle) => (
                                    <CycleProgressBar key={cycle.name} cycle={cycle} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Structural Layer */}
                    {structuralCycles.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-muted-foreground text-center">Structural</h3>
                            <div className="space-y-4">
                                {structuralCycles.map((cycle) => (
                                    <CycleProgressBar key={cycle.name} cycle={cycle} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Turning Point Layer */}
                    {turningPointCycles.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-muted-foreground text-center">Turning Point</h3>
                            <div className="space-y-4">
                                {turningPointCycles.map((cycle) => (
                                    <CycleProgressBar key={cycle.name} cycle={cycle} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Planetary Cycle Phases */}
                    <div className="pt-4">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Planetary Cycle Phases</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Every two-planet cycle has four structural points.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <PhaseCard phase="Conjunction" angle="0°" meaning="birth of a new cycle" />
                            <PhaseCard phase="Square" angle="90°" meaning="first crisis / friction" />
                            <PhaseCard phase="Opposition" angle="180°" meaning="peak tension / culmination" />
                            <PhaseCard phase="Square" angle="270°" meaning="breakdown of the old system" />
                        </div>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}

function CycleProgressBar({ cycle }: { cycle: CycleInfo }) {
    const progress = (cycle.yearsIn / cycle.totalYears) * 100;
    const progressClamped = Math.min(Math.max(progress, 0), 100);

    // Calculate midpoint year
    const timeframeParts = cycle.timeframe.split('–');
    const startYear = parseInt(timeframeParts[0].match(/\d{4}/)?.[0] || '0');
    const endYear = parseInt(timeframeParts[1].match(/\d{4}/)?.[0] || '0');
    const midpointYear = Math.round((startYear + endYear) / 2);

    // Element color mapping
    const getElementColor = (element?: string) => {
        switch (element) {
            case 'Fire':
                return 'text-red-600 dark:text-red-400';
            case 'Earth':
                return 'text-green-700 dark:text-green-400';
            case 'Air':
                return 'text-blue-600 dark:text-blue-400';
            case 'Water':
                return 'text-cyan-600 dark:text-cyan-400';
            default:
                return 'text-muted-foreground';
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 flex-1">
                    <span className="text-2xl">{cycle.symbol}</span>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">
                            {cycle.name} in {cycle.sign}
                            {cycle.element && (
                                <span className={`ml-1 text-sm ${getElementColor(cycle.element)}`}>
                                    ({cycle.element})
                                </span>
                            )}:
                        </span>
                        <span className="text-sm text-muted-foreground">{cycle.theme}</span>
                    </div>
                </div>
                {cycle.category && (
                    <span className="text-xs text-muted-foreground italic whitespace-nowrap">({cycle.category})</span>
                )}
            </div>
            <div className="space-y-1">
                <Progress value={progressClamped} className="h-2" />
                <div className="grid grid-cols-3 text-xs text-muted-foreground">
                    <span className="text-left">{cycle.timeframe.split('–')[0]}</span>
                    <span className="text-center">{midpointYear}</span>
                    <span className="text-right">{cycle.timeframe.split('–')[1]}</span>
                </div>
            </div>
        </div>
    );
}

function PhaseCard({ phase, angle, meaning }: { phase: string; angle: string; meaning: string }) {
    return (
        <div className="border border-border/50 rounded-lg p-4 hover:bg-muted/50 transition-colors">
            <div className="font-semibold text-lg mb-1">{phase}</div>
            <div className="text-sm text-muted-foreground mb-2">{angle}</div>
            <div className="text-sm">{meaning}</div>
        </div>
    );
}
