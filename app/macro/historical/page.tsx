'use client';

import { useState, useEffect } from 'react';
import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { TensionTimeline } from '@/components/astrology/macro/TensionTimeline';
import type { TensionDataPoint } from '@/lib/astrology/tension-history-real';
import { Card } from '@/components/ui/card';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

export default function HistoricalMacroPage() {
    const [historicalData, setHistoricalData] = useState<TensionDataPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const response = await fetch('/api/tension-history');
                if (!response.ok) {
                    throw new Error('Failed to load tension history');
                }
                const data = await response.json();
                setHistoricalData(data);
            } catch (err) {
                console.error('Error loading tension history:', err);
                setError(err instanceof Error ? err.message : 'Failed to load data');
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-background">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
                        <p className="mt-4 text-muted-foreground">Computing 130 years of tension data...</p>
                        <p className="mt-2 text-sm text-muted-foreground">This may take a moment on first load</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-semibold mb-2">Error Loading Data</h2>
                        <p className="text-muted-foreground">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (historicalData.length === 0) {
        return (
            <div className="min-h-screen bg-background">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No data available</p>
                    </div>
                </div>
            </div>
        );
    }

    // Calculate statistics
    const avgScore = Math.round(
        historicalData.reduce((sum, d) => sum + d.score, 0) / historicalData.length
    );
    const maxScore = Math.max(...historicalData.map((d) => d.score));
    const minScore = Math.min(...historicalData.map((d) => d.score));

    // Get top 3 months per year with full data
    const yearlyHighTension: Array<{
        year: number;
        topMonths: Array<{
            month: string;
            score: number;
            level: string;
            hardAspectsCount: number;
            signChangesWithin2Years: number;
            saturnAspectingOuterPlanets: boolean;
            topEvents?: string[];
        }>;
    }> = [];

    for (let year = 1900; year <= 2030; year++) {
        const yearData = historicalData.filter((d) => d.year === year);
        if (yearData.length === 0) continue;

        const topMonths = yearData
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map((d) => ({
                month: d.month,
                score: d.score,
                level: d.level,
                hardAspectsCount: d.hardAspectsCount,
                signChangesWithin2Years: d.signChangesWithin2Years,
                saturnAspectingOuterPlanets: d.saturnAspectingOuterPlanets,
                topEvents: d.topEvents,
            }));

        yearlyHighTension.push({ year, topMonths });
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">Historical Macro Analysis</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        130 years of real structural tension data (1900–2030)
                    </p>
                </div>

                {/* Navigation */}
                <MacroNavigation />

                <div className="space-y-6">
                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="w-5 h-5 text-blue-500" />
                                <div className="text-sm text-muted-foreground">Time Span</div>
                            </div>
                            <div className="text-3xl font-bold">130 years</div>
                            <div className="text-sm text-muted-foreground mt-1">
                                {historicalData.length} monthly data points
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingUp className="w-5 h-5 text-green-500" />
                                <div className="text-sm text-muted-foreground">Average Tension</div>
                            </div>
                            <div className="text-3xl font-bold">{avgScore}</div>
                            <div className="text-sm text-muted-foreground mt-1">
                                Range: {minScore}–{maxScore}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                <div className="text-sm text-muted-foreground">High Tension Periods</div>
                            </div>
                            <div className="text-3xl font-bold">
                                {historicalData.filter((d) => d.level === 'High' || d.level === 'Extreme').length}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                                {Math.round((historicalData.filter((d) => d.level === 'High' || d.level === 'Extreme').length / historicalData.length) * 100)}% of all months
                            </div>
                        </Card>
                    </div>

                    {/* Note about data source */}
                    <Card className="p-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                        <div className="flex items-start gap-3">
                            <div className="text-xl">✅</div>
                            <div className="text-sm">
                                <div className="font-semibold text-green-900 dark:text-green-100 mb-1">
                                    Real Ephemeris Data
                                </div>
                                <p className="text-green-800 dark:text-green-200">
                                    This analysis uses Swiss Ephemeris to calculate actual planetary positions, aspects,
                                    and sign changes for each month from 1900-2030. Tension scores are computed from real
                                    astrological data, not estimates.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Timeline */}
                    <TensionTimeline data={historicalData} />

                    {/* Yearly High Tension Breakdown */}
                    <Card className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Highest Tension Months by Year</h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Top 3 months with highest structural tension for each year
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
                            <TooltipProvider>
                                {yearlyHighTension.map((yearData, i) => {
                                    const getScoreColor = (level: string) => {
                                        switch (level) {
                                            case 'Low':
                                                return 'text-green-500';
                                            case 'Moderate':
                                                return 'text-yellow-500';
                                            case 'High':
                                                return 'text-orange-500';
                                            case 'Extreme':
                                                return 'text-red-500';
                                            default:
                                                return 'text-gray-500';
                                        }
                                    };

                                    return (
                                        <div
                                            key={i}
                                            className="p-4 rounded-lg border hover:bg-accent transition-colors"
                                        >
                                            <div className="font-bold text-lg mb-3">{yearData.year}</div>
                                            <div className="space-y-2">
                                                {yearData.topMonths.map((month, j) => {
                                                    const fullData = historicalData.find(
                                                        d => d.year === yearData.year && d.month === month.month
                                                    );

                                                    return (
                                                        <Tooltip key={j}>
                                                            <TooltipTrigger asChild>
                                                                <div className="flex items-center justify-between cursor-help">
                                                                    <div className="text-sm text-muted-foreground">
                                                                        {month.month}
                                                                    </div>
                                                                    <div className={`font-bold ${getScoreColor(month.level)}`}>
                                                                        {month.score}
                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="right" className="max-w-sm p-4 bg-popover text-popover-foreground">
                                                                <div className="space-y-2">
                                                                    <div className="font-semibold border-b pb-1">
                                                                        {month.month} {yearData.year} - Score: {month.score}
                                                                    </div>
                                                                    <div className="text-xs space-y-1">
                                                                        <div>
                                                                            <span className="font-medium">Hard Aspects:</span> {fullData?.hardAspectsCount ?? month.hardAspectsCount}
                                                                        </div>
                                                                        <div>
                                                                            <span className="font-medium">Sign Changes (24mo):</span> {fullData?.signChangesWithin2Years ?? month.signChangesWithin2Years}
                                                                        </div>
                                                                        <div>
                                                                            <span className="font-medium">Saturn Aspecting Outer:</span>{' '}
                                                                            {(fullData?.saturnAspectingOuterPlanets ?? month.saturnAspectingOuterPlanets) ? 'Yes' : 'No'}
                                                                        </div>
                                                                        {fullData?.topEvents && fullData.topEvents.length > 0 && (
                                                                            <div className="pt-2 border-t mt-2">
                                                                                <div className="font-medium mb-1">Key Factors:</div>
                                                                                <ul className="space-y-0.5 pl-2">
                                                                                    {fullData.topEvents.slice(0, 5).map((event, k) => (
                                                                                        <li key={k} className="text-xs">• {event}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </TooltipProvider>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
