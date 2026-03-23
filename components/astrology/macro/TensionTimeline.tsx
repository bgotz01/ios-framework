'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SkipBack, SkipForward, TrendingUp } from 'lucide-react';

interface TensionDataPoint {
    date: string;
    score: number;
    level: 'Low' | 'Moderate' | 'High' | 'Extreme';
    month: string;
    year: number;
}

interface TensionTimelineProps {
    data: TensionDataPoint[];
    onDateChange?: (date: string) => void;
}

export function TensionTimeline({ data, onDateChange }: TensionTimelineProps) {
    const [currentIndex, setCurrentIndex] = useState(data.length - 1); // Start at most recent

    const currentData = data[currentIndex];

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newIndex = parseInt(e.target.value);
        setCurrentIndex(newIndex);
        if (onDateChange) {
            onDateChange(data[newIndex].date);
        }
    };

    const handleStepBack = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleStepForward = () => {
        setCurrentIndex((prev) => Math.min(data.length - 1, prev + 1));
    };

    const handleReset = () => {
        setCurrentIndex(data.length - 1);
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Low': return 'bg-green-500';
            case 'Moderate': return 'bg-yellow-500';
            case 'High': return 'bg-orange-500';
            case 'Extreme': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const getScoreColor = (level: string) => {
        switch (level) {
            case 'Low': return 'text-green-500';
            case 'Moderate': return 'text-yellow-500';
            case 'High': return 'text-orange-500';
            case 'Extreme': return 'text-red-500';
            default: return 'text-gray-500';
        }
    };

    // Calculate min/max for visualization
    const minScore = Math.min(...data.map(d => d.score));
    const maxScore = Math.max(...data.map(d => d.score));

    // Get top 10 highest tension months
    const topTensionMonths = [...data]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Tension Index Timeline</h2>
                    <p className="text-sm text-muted-foreground">
                        Explore how structural tension has evolved over time
                    </p>
                </div>

                {/* Current Score Display */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Selected Date</div>
                        <div className="text-2xl font-bold">{currentData.month} {currentData.year}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Tension Score</div>
                        <div className={`text-4xl font-bold ${getScoreColor(currentData.level)}`}>
                            {currentData.score}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Level</div>
                        <div className={`text-lg font-bold ${getScoreColor(currentData.level)}`}>
                            {currentData.level}
                        </div>
                    </div>
                </div>

                {/* Timeline Visualization */}
                <div className="mb-6">
                    <div className="relative h-24 bg-muted/30 rounded-lg overflow-hidden">
                        {/* Background bars */}
                        <div className="absolute inset-0 flex items-end">
                            {data.map((point, i) => {
                                const height = ((point.score - minScore) / (maxScore - minScore)) * 100;
                                const isActive = i === currentIndex;
                                return (
                                    <div
                                        key={i}
                                        className="flex-1 flex items-end justify-center px-0.5"
                                    >
                                        <div
                                            className={`w-full transition-all ${getLevelColor(point.level)} ${isActive ? 'opacity-100 ring-2 ring-white' : 'opacity-30'
                                                }`}
                                            style={{ height: `${height}%` }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Date labels */}
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>{data[0].month} {data[0].year}</span>
                        <span>{data[Math.floor(data.length / 2)].month} {data[Math.floor(data.length / 2)].year}</span>
                        <span>{data[data.length - 1].month} {data[data.length - 1].year}</span>
                    </div>
                </div>

                {/* Slider */}
                <div className="mb-4">
                    <input
                        type="range"
                        min="0"
                        max={data.length - 1}
                        value={currentIndex}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={handleReset}
                        className="px-3 py-2 rounded-lg border hover:bg-accent transition-colors text-sm"
                        title="Reset to current"
                    >
                        Reset to Now
                    </button>
                    <button
                        onClick={handleStepBack}
                        disabled={currentIndex === 0}
                        className="p-2 rounded-lg border hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Previous month"
                    >
                        <SkipBack className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleStepForward}
                        disabled={currentIndex === data.length - 1}
                        className="p-2 rounded-lg border hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Next month"
                    >
                        <SkipForward className="w-4 h-4" />
                    </button>
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-green-500" />
                        <span className="text-muted-foreground">Low (0-24)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-yellow-500" />
                        <span className="text-muted-foreground">Moderate (25-49)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-orange-500" />
                        <span className="text-muted-foreground">High (50-74)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-red-500" />
                        <span className="text-muted-foreground">Extreme (75-100)</span>
                    </div>
                </div>
            </Card>

            {/* Highest Tension Months */}
            <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                    <div>
                        <h3 className="text-xl font-bold">Highest Tension Months</h3>
                        <p className="text-sm text-muted-foreground">
                            Peak structural stress periods in the timeline
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {topTensionMonths.map((point, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                const index = data.findIndex(d => d.date === point.date);
                                if (index !== -1) setCurrentIndex(index);
                            }}
                            className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors text-left"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-lg font-bold text-muted-foreground">
                                    #{i + 1}
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        {point.month} {point.year}
                                    </div>
                                    <div className={`text-xs font-semibold ${getScoreColor(point.level)}`}>
                                        {point.level}
                                    </div>
                                </div>
                            </div>
                            <div className={`text-2xl font-bold ${getScoreColor(point.level)}`}>
                                {point.score}
                            </div>
                        </button>
                    ))}
                </div>
            </Card>
        </div>
    );
}
