//components/astrology/macro/TensionIndex
'use client';

import { Card } from '@/components/ui/card';
import { AlertTriangle, TrendingUp, Minus } from 'lucide-react';

interface TensionIndexProps {
    score: number;
    hardAspectsCount: number;
    signChangesWithin2Years: number;
    saturnAspectingOuterPlanets: boolean;
    tensionLevel: 'Low' | 'Moderate' | 'High' | 'Extreme';
    details: string[];
}

export function TensionIndex({
    score,
    hardAspectsCount,
    signChangesWithin2Years,
    saturnAspectingOuterPlanets,
    tensionLevel,
    details
}: TensionIndexProps) {
    const getTensionColor = () => {
        switch (tensionLevel) {
            case 'Low': return 'from-green-500/20 to-green-500/5 border-green-500/30';
            case 'Moderate': return 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30';
            case 'High': return 'from-orange-500/20 to-orange-500/5 border-orange-500/30';
            case 'Extreme': return 'from-red-500/20 to-red-500/5 border-red-500/30';
        }
    };

    const getTensionIcon = () => {
        switch (tensionLevel) {
            case 'Low': return <Minus className="w-6 h-6 text-green-500" />;
            case 'Moderate': return <TrendingUp className="w-6 h-6 text-yellow-500" />;
            case 'High': return <AlertTriangle className="w-6 h-6 text-orange-500" />;
            case 'Extreme': return <AlertTriangle className="w-6 h-6 text-red-500" />;
        }
    };

    const getScoreColor = () => {
        switch (tensionLevel) {
            case 'Low': return 'text-green-500';
            case 'Moderate': return 'text-yellow-500';
            case 'High': return 'text-orange-500';
            case 'Extreme': return 'text-red-500';
        }
    };

    return (
        <Card className={`p-6 bg-gradient-to-br ${getTensionColor()} border-2`}>
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold mb-1">Structural Tension Index</h2>
                    <p className="text-sm text-muted-foreground">
                        Measures stress in the macro environment
                    </p>
                </div>
                <div className="text-center">
                    <div className={`text-5xl font-bold ${getScoreColor()} mb-1`}>{score}</div>
                    <div className="text-xs text-muted-foreground">/ 100</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold mb-1">{hardAspectsCount}</div>
                    <div className="text-xs text-muted-foreground">Active Hard Aspects</div>
                    <div className="text-xs text-muted-foreground mt-1">(Outer planets)</div>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold mb-1">{signChangesWithin2Years}</div>
                    <div className="text-xs text-muted-foreground">Sign Changes</div>
                    <div className="text-xs text-muted-foreground mt-1">(Within 2 years)</div>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold mb-1">{saturnAspectingOuterPlanets ? 'YES' : 'NO'}</div>
                    <div className="text-xs text-muted-foreground">Saturn Aspecting</div>
                    <div className="text-xs text-muted-foreground mt-1">(Pluto/Neptune/Uranus)</div>
                </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
                {getTensionIcon()}
                <div>
                    <div className="text-lg font-bold">
                        Tension Level: {tensionLevel}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {tensionLevel === 'Low' && 'Structural environment is relatively stable'}
                        {tensionLevel === 'Moderate' && 'Some structural pressure building'}
                        {tensionLevel === 'High' && 'Significant structural stress present'}
                        {tensionLevel === 'Extreme' && 'Maximum structural tension and volatility'}
                    </div>
                </div>
            </div>

            {details.length > 0 && (
                <div className="p-4 bg-card rounded-lg border-l-4 border-purple-500">
                    <div className="text-sm font-semibold mb-2">Contributing Factors</div>
                    <ul className="space-y-1.5">
                        {details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="text-purple-400">•</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Card>
    );
}
