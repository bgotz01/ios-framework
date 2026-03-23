'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CyclePhase {
    phase: string;
    angle: string;
    meaning: string;
}

const CYCLE_PHASES: CyclePhase[] = [
    {
        phase: 'Conjunction',
        angle: '0°',
        meaning: 'birth of a new cycle',
    },
    {
        phase: 'Square',
        angle: '90°',
        meaning: 'first crisis / friction',
    },
    {
        phase: 'Opposition',
        angle: '180°',
        meaning: 'peak tension / culmination',
    },
    {
        phase: 'Square',
        angle: '270°',
        meaning: 'breakdown of the old system',
    },
];

export function PlanetaryCyclePhases() {
    return (
        <Card className="border-border/50">
            <CardHeader>
                <CardTitle className="text-2xl">The Planetary Cycle Phases</CardTitle>
                <CardDescription>
                    Every two-planet cycle has four structural points.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-sm">Phase</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">Angle</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CYCLE_PHASES.map((phase, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                                >
                                    <td className="py-3 px-4 font-medium">{phase.phase}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{phase.angle}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{phase.meaning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
