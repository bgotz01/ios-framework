'use client';

import { Card } from '@/components/ui/card';

interface TimelineEvent {
    planet: string;
    sign: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
}

interface MacroTimelineProps {
    events: TimelineEvent[];
    upcomingIngresses: {
        planet: string;
        fromSign: string;
        toSign: string;
        date: string;
        daysUntil: number;
    }[];
}

export function MacroTimeline({ events, upcomingIngresses }: MacroTimelineProps) {
    return (
        <div className="space-y-6">
            <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Macro Timeline</h2>

                {/* Timeline visualization */}
                <div className="space-y-6">
                    {events.map((event, i) => (
                        <div key={i} className="relative">
                            <div className="flex items-center gap-4">
                                <div className={`w-3 h-3 rounded-full ${event.isCurrent ? 'bg-purple-500 ring-4 ring-purple-500/30' : 'bg-muted-foreground/30'}`} />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-bold">{event.planet}</span>
                                            <span className="mx-2 text-muted-foreground">→</span>
                                            <span className="font-semibold">{event.sign}</span>
                                            {event.isCurrent && (
                                                <span className="ml-3 text-xs font-bold px-2 py-1 rounded bg-purple-500 text-white">
                                                    NOW
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {event.startDate} – {event.endDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {i < events.length - 1 && (
                                <div className="ml-1.5 h-8 w-0.5 bg-border" />
                            )}
                        </div>
                    ))}
                </div>
            </Card>

            {/* Upcoming Ingresses */}
            {upcomingIngresses.length > 0 && (
                <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30">
                    <h3 className="text-xl font-bold mb-4">Upcoming Ingresses</h3>
                    <div className="space-y-3">
                        {upcomingIngresses.map((ingress, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                                <div>
                                    <div className="font-semibold">
                                        {ingress.planet}: {ingress.fromSign} → {ingress.toSign}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{ingress.date}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-amber-500">{ingress.daysUntil}</div>
                                    <div className="text-xs text-muted-foreground">days</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </div>
    );
}
