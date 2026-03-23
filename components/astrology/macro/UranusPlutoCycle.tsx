//components/astrology/macro/UranusPlutoCycle
'use client';

import { Card } from '@/components/ui/card';
import {
    URANUS_PLUTO_MILESTONES,
    HISTORICAL_CONJUNCTIONS,
    WAXING_SQUARE_2012,
    MILESTONE_MEANINGS,
    getUranusPlutoCyclePhase,
    getCurrentInterval,
    getUranusPlutoYearsIntoCycle,
} from '@/lib/astrology/uranus-pluto-cycles-data';

export function UranusPlutoCycle() {
    const lastConjunction = URANUS_PLUTO_MILESTONES[0].year;
    const nextConjunction = URANUS_PLUTO_MILESTONES[URANUS_PLUTO_MILESTONES.length - 1].year;
    const cycleLength = nextConjunction - lastConjunction;
    const yearsIn = getUranusPlutoYearsIntoCycle();
    const currentPhase = getUranusPlutoCyclePhase();
    const currentInterval = getCurrentInterval();
    const currentYear = new Date().getFullYear();

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="page-title mb-4">Uranus–Pluto Revolutionary Cycle</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    The ~130-year cycle describing revolutionary transformation of power structures.
                </p>
            </div>

            {/* Era Card - Main Cycle Info */}
            <Card className="p-4 border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent">
                <div className="space-y-4">
                    {/* Header Section */}
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-2xl">♅</span>
                                <span className="text-xl text-muted-foreground">×</span>
                                <span className="text-2xl">♇</span>
                                <h3 className="text-xl font-bold ml-2">Revolutionary Eras</h3>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                                When Uranus and Pluto interact, sudden breakthroughs disrupt entrenched power
                            </p>
                        </div>
                    </div>

                    {/* Cycle Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-0.5">Length</div>
                            <div className="text-base font-bold">~{cycleLength} years</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-0.5">Last Conjunction</div>
                            <div className="text-base font-bold">{lastConjunction} (Virgo)</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-0.5">Current Phase</div>
                            <div className="text-base font-bold">{currentPhase}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-purple-400 mb-0.5">Progress</div>
                            <div className="text-base font-bold">{yearsIn} / {cycleLength}</div>
                        </div>
                    </div>

                    {/* Revolutionary Theme */}
                    <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-xs font-semibold text-purple-400 mb-1">Revolutionary Theme</div>
                        <p className="text-sm font-bold">Technological disruption forces power redistribution.</p>
                    </div>

                    {/* Cycle Aspect Timeline */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Cycle Phase Timeline</span>
                            {currentInterval && (
                                <span className="font-semibold text-purple-400">
                                    Currently: {currentInterval.previous.label} → {currentInterval.next.label}
                                </span>
                            )}
                        </div>

                        {/* Timeline with milestones */}
                        <div className="relative pt-8 pb-16">
                            {/* Background line */}
                            <div className="absolute top-2 left-0 right-0 h-0.5 bg-muted"></div>

                            {/* Current position indicator */}
                            {currentInterval && (() => {
                                const position = ((currentYear - lastConjunction) / cycleLength) * 100;

                                return (
                                    <div
                                        className="absolute top-0 h-6 w-0.5 bg-purple-400 z-10"
                                        style={{ left: `${position}%` }}
                                    >
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-semibold text-purple-400 whitespace-nowrap">
                                            {currentYear}
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Milestone dots and labels */}
                            <div className="relative">
                                {URANUS_PLUTO_MILESTONES.map((milestone, i) => {
                                    const isCurrent = currentInterval &&
                                        (milestone.year === currentInterval.previous.year ||
                                            milestone.year === currentInterval.next.year);

                                    const position = ((milestone.year - lastConjunction) / cycleLength) * 100;
                                    const isFirst = i === 0;
                                    const isLast = i === URANUS_PLUTO_MILESTONES.length - 1;

                                    return (
                                        <div
                                            key={i}
                                            className={`absolute flex flex-col items-center ${isFirst ? '' : isLast ? '-translate-x-full' : '-translate-x-1/2'}`}
                                            style={{ left: `${position}%` }}
                                        >
                                            <div className={`w-3 h-3 rounded-full -mt-6 ${isCurrent ? 'bg-purple-400 ring-2 ring-purple-400/30' : 'bg-muted-foreground'}`}></div>
                                            <div className="text-xs font-mono font-semibold text-purple-400 mt-1 whitespace-nowrap">{milestone.year}</div>
                                            <div className="text-xs text-muted-foreground text-center max-w-[100px] whitespace-nowrap">{milestone.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Planet Roles & Mechanism - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Uranus */}
                <Card className="p-4 bg-purple-500/5 border-purple-500/20">
                    <div className="text-center mb-3">
                        <span className="text-2xl mb-1 block">♅</span>
                        <h4 className="text-base font-bold">Uranus</h4>
                        <p className="text-xs text-purple-400">Sudden Breakthrough</p>
                    </div>
                    <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span>Innovation</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span>Revolution</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span>Liberation</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span>Technology</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span>Disruption</span>
                        </li>
                    </ul>
                </Card>

                {/* Pluto */}
                <Card className="p-4 bg-muted/30 border-muted">
                    <div className="text-center mb-3">
                        <span className="text-2xl mb-1 block">♇</span>
                        <h4 className="text-base font-bold">Pluto</h4>
                        <p className="text-xs text-muted-foreground">Deep Power Systems</p>
                    </div>
                    <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">•</span>
                            <span>Control structures</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">•</span>
                            <span>Elites</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">•</span>
                            <span>Underground forces</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">•</span>
                            <span>Transformation</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground">•</span>
                            <span>Rebirth of power</span>
                        </li>
                    </ul>
                </Card>

                {/* Mechanism */}
                <Card className="p-4 bg-muted/20">
                    <div className="text-center mb-3">
                        <h4 className="text-base font-bold">Mechanism</h4>
                        <p className="text-xs text-muted-foreground">How Innovation Disrupts Power</p>
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-0.5">
                            <div className="text-xs font-semibold text-purple-400">Breakthrough</div>
                            <div className="text-xs text-muted-foreground">New technology emerges</div>
                        </div>
                        <div className="space-y-0.5">
                            <div className="text-xs font-semibold text-purple-400">Disruption</div>
                            <div className="text-xs text-muted-foreground">Old power structures destabilize</div>
                        </div>
                        <div className="space-y-0.5">
                            <div className="text-xs font-semibold text-purple-400">Crisis</div>
                            <div className="text-xs text-muted-foreground">Conflict between old and new</div>
                        </div>
                        <div className="space-y-0.5">
                            <div className="text-xs font-semibold text-purple-400">Transformation</div>
                            <div className="text-xs text-muted-foreground">Power reorganizes around new tech</div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Together */}
            <Card className="p-3 bg-purple-500/5 border-purple-500/20">
                <div className="text-center">
                    <h4 className="text-sm font-bold mb-1">Together</h4>
                    <p className="text-sm">
                        Revolutionary technologies force the transformation of entrenched power structures.
                    </p>
                </div>
            </Card>

            {/* Historical Conjunctions */}
            <Card className="p-4">
                <h4 className="text-base font-semibold mb-2">Historical Conjunctions & Major Aspects</h4>
                <p className="text-xs text-muted-foreground mb-3">
                    Major Uranus-Pluto conjunctions and critical aspects with their revolutionary themes
                </p>
                <div className="space-y-2">
                    {HISTORICAL_CONJUNCTIONS.map((conj, i) => (
                        <div key={i} className="grid grid-cols-[80px_1fr_1fr] gap-4 items-center">
                            <span className="font-mono text-sm font-semibold text-purple-400">{conj.year}</span>
                            <span className="text-sm">{conj.theme}</span>
                            <span className="text-sm text-muted-foreground italic">→ {conj.impact}</span>
                        </div>
                    ))}
                    <div className="grid grid-cols-[80px_1fr_1fr] gap-4 items-center">
                        <span className="font-mono text-sm font-semibold text-purple-400">{WAXING_SQUARE_2012.years}</span>
                        <span className="text-sm">{WAXING_SQUARE_2012.theme}</span>
                        <span className="text-sm text-muted-foreground italic">→ {WAXING_SQUARE_2012.impact}</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr_1fr] gap-4 items-center">
                        <span className="font-mono text-sm font-semibold text-purple-400">~{nextConjunction}</span>
                        <span className="text-sm">Next conjunction</span>
                        <span className="text-sm text-muted-foreground italic">→ Unknown revolutionary era</span>
                    </div>
                </div>
            </Card>

            {/* Cycle Milestone Meanings */}
            <div>
                <h3 className="text-xl font-bold text-center mb-2">Uranus–Pluto Cycle Milestones</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                    Understanding what happens at each phase of the revolutionary cycle
                </p>

                <div className="space-y-6">
                    {MILESTONE_MEANINGS.map((milestone, i) => {
                        const milestoneData = URANUS_PLUTO_MILESTONES[i];
                        return (
                            <Card key={i} className="p-4 bg-muted/20">
                                {/* Milestone Header */}
                                <div className="mb-4 pb-3 border-b border-border/50">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-purple-400 font-semibold">{milestone.degree}</span>
                                        <h4 className="text-lg font-bold">{milestone.aspect}</h4>
                                        <span className="text-sm text-purple-400 font-semibold">— {milestone.title}</span>
                                        <span className="text-sm text-muted-foreground">— {milestoneData.year}</span>
                                    </div>
                                </div>

                                {/* 3 Columns */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* What Happens */}
                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground mb-2">What Happens</p>
                                        <ul className="space-y-1.5">
                                            {milestone.whatHappens.map((item, j) => (
                                                <li key={j} className="text-sm flex items-center gap-2">
                                                    <span className="text-purple-400">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Typical Signals */}
                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground mb-2">Typical Signals</p>
                                        <ul className="space-y-1.5">
                                            {milestone.typicalSignals.map((signal, j) => (
                                                <li key={j} className="text-sm flex items-center gap-2">
                                                    <span className="text-purple-400">→</span>
                                                    <span className="text-muted-foreground">{signal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Example */}
                                    <div>
                                        <p className="text-xs font-semibold text-purple-400 mb-2">Example ({milestone.example.period})</p>
                                        <ul className="space-y-1.5">
                                            {milestone.example.events.map((event, j) => (
                                                <li key={j} className="text-sm flex items-center gap-2">
                                                    <span className="text-muted-foreground">▸</span>
                                                    <span className="text-muted-foreground italic">{event}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-xs text-muted-foreground pt-2">
                <p>
                    This cycle marks periods when technological innovation forces rapid transformation of existing power structures.
                </p>
            </div>
        </div>
    );
}
