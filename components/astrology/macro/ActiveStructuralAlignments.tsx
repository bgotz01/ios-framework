'use client';

import { Card } from '@/components/ui/card';

interface Aspect {
    planet1: string;
    planet2: string;
    aspectType: string;
    orb: number;
    peakDate: string;
    archetype: string;
    description: string;
}

interface ActiveStructuralAlignmentsProps {
    aspects: Aspect[];
}

export function ActiveStructuralAlignments({ aspects }: ActiveStructuralAlignmentsProps) {
    const getAspectColor = (type: string) => {
        switch (type) {
            case 'Conjunction': return 'text-purple-400';
            case 'Opposition': return 'text-red-400';
            case 'Square': return 'text-orange-400';
            case 'Trine': return 'text-green-400';
            case 'Sextile': return 'text-blue-400';
            default: return 'text-muted-foreground';
        }
    };

    const getAspectSymbol = (type: string) => {
        switch (type) {
            case 'Conjunction': return '☌';
            case 'Opposition': return '☍';
            case 'Square': return '□';
            case 'Trine': return '△';
            case 'Sextile': return '⚹';
            default: return '•';
        }
    };

    if (aspects.length === 0) {
        return (
            <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Active Structural Alignments</h2>
                <p className="text-muted-foreground text-center py-8">
                    No major outer planet aspects currently active within tight orbs.
                </p>
            </Card>
        );
    }

    return (
        <Card className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Active Structural Alignments</h2>
                <p className="text-sm text-muted-foreground">
                    Aspects = activation. These are more important than sign placements.
                </p>
            </div>

            <div className="space-y-4">
                {aspects.map((aspect, i) => (
                    <Card key={i} className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent border-l-4 border-purple-500">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <span className={`text-2xl ${getAspectColor(aspect.aspectType)}`}>
                                    {getAspectSymbol(aspect.aspectType)}
                                </span>
                                <div>
                                    <div className="font-bold text-lg">
                                        {aspect.planet1} {aspect.aspectType} {aspect.planet2}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Orb: {aspect.orb.toFixed(2)}° • Peak: {aspect.peakDate}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="text-xs font-semibold text-purple-400 mb-1">Archetype</div>
                                <div className="text-sm font-semibold">{aspect.archetype}</div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-purple-400 mb-1">Meaning</div>
                                <div className="text-sm text-muted-foreground">{aspect.description}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Card>
    );
}
