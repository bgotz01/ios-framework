//components/astrology/macro/NeptunePlutoCycle
'use client';

import { Card } from '@/components/ui/card';
import {
    CURRENT_CYCLE,
    TECHNOLOGICAL_MILESTONES,
    PHASE_MEANINGS,
    CIVILIZATIONAL_EXPRESSIONS,
    MECHANISM_STEPS,
    DISTORTION_RISKS,
    SIGNALS_TO_WATCH,
    getNeptunePlutoYearsIntoCycle,
    NEPTUNE_PLUTO_MILESTONES,
    getCurrentInterval,
    MILESTONE_MEANINGS,
} from '@/lib/astrology/neptune-pluto-cycles-data';

export function NeptunePlutoCycle() {
    const yearsIn = getNeptunePlutoYearsIntoCycle();

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="page-title mb-4">Neptune–Pluto Civilizational Cycle</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    The ~492-year cycle describing how collective belief systems reshape power structures.
                </p>
            </div>

            {/* Era Card - Main Cycle Info */}
            <Card className="p-4 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
                <div className="space-y-4">
                    {/* Header Section */}
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-2xl">♆</span>
                                <span className="text-xl text-muted-foreground">×</span>
                                <span className="text-2xl">♇</span>
                                <h3 className="text-xl font-bold ml-2">{CURRENT_CYCLE.eraName}</h3>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                                When Neptune and Pluto interact, belief systems become instruments of power
                            </p>
                        </div>
                    </div>

                    {/* Cycle Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div>
                            <div className="text-xs font-semibold text-cyan-400 mb-0.5">Length</div>
                            <div className="text-base font-bold">~{CURRENT_CYCLE.totalCycleLength} years</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-cyan-400 mb-0.5">Cycle Start</div>
                            <div className="text-base font-bold">{CURRENT_CYCLE.conjunction} ({CURRENT_CYCLE.conjunctionSign})</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-cyan-400 mb-0.5">Current Phase</div>
                            <div className="text-base font-bold">{CURRENT_CYCLE.currentPhase}</div>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-cyan-400 mb-0.5">Progress</div>
                            <div className="text-base font-bold">~{yearsIn} / {CURRENT_CYCLE.totalCycleLength}</div>
                        </div>
                    </div>

                    {/* Civilizational Theme */}
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                        <div className="text-xs font-semibold text-cyan-400 mb-1">Civilizational Theme</div>
                        <p className="text-sm font-bold">Narrative technologies reshape power structures.</p>
                    </div>

                    {/* Cycle Phase Timeline */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Cycle Phase Timeline</span>
                        </div>

                        {/* Timeline with milestones */}
                        <div className="relative pt-8 pb-16">
                            {/* Background line */}
                            <div className="absolute top-2 left-0 right-0 h-0.5 bg-muted"></div>

                            {/* Current position indicator */}
                            {(() => {
                                const currentYear = new Date().getFullYear();
                                const startYear = NEPTUNE_PLUTO_MILESTONES[0].year;
                                const endYear = NEPTUNE_PLUTO_MILESTONES[NEPTUNE_PLUTO_MILESTONES.length - 1].year;
                                const cycleLength = endYear - startYear;
                                const position = ((currentYear - startYear) / cycleLength) * 100;

                                return (
                                    <div
                                        className="absolute top-0 h-6 w-0.5 bg-cyan-400 z-10"
                                        style={{ left: `${position}%` }}
                                    >
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-semibold text-cyan-400 whitespace-nowrap">
                                            {currentYear}
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Milestone dots and labels */}
                            <div className="relative">
                                {NEPTUNE_PLUTO_MILESTONES.map((milestone, i) => {
                                    const currentInterval = getCurrentInterval();
                                    const isCurrent = currentInterval &&
                                        (milestone.year === currentInterval.previous.year ||
                                            milestone.year === currentInterval.next.year);

                                    const startYear = NEPTUNE_PLUTO_MILESTONES[0].year;
                                    const endYear = NEPTUNE_PLUTO_MILESTONES[NEPTUNE_PLUTO_MILESTONES.length - 1].year;
                                    const cycleLength = endYear - startYear;
                                    const position = ((milestone.year - startYear) / cycleLength) * 100;
                                    const isFirst = i === 0;
                                    const isLast = i === NEPTUNE_PLUTO_MILESTONES.length - 1;

                                    return (
                                        <div
                                            key={i}
                                            className={`absolute flex flex-col items-center ${isFirst ? '' : isLast ? '-translate-x-full' : '-translate-x-1/2'}`}
                                            style={{ left: `${position}%` }}
                                        >
                                            <div className={`w-3 h-3 rounded-full -mt-6 ${isCurrent ? 'bg-cyan-400 ring-2 ring-cyan-400/30' : 'bg-muted-foreground'}`}></div>
                                            <div className="text-xs font-mono font-semibold text-cyan-400 mt-1 whitespace-nowrap">{milestone.year}</div>
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
                {/* Neptune */}
                <Card className="p-4 bg-cyan-500/5 border-cyan-500/20">
                    <div className="text-center mb-3">
                        <span className="text-2xl mb-1 block">♆</span>
                        <h4 className="text-base font-bold">Neptune</h4>
                        <p className="text-xs text-cyan-400">Collective Imagination</p>
                    </div>
                    <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Myth</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Ideology</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Religion</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Dreams</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Media</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400">•</span>
                            <span>Mass psychology</span>
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
                        <p className="text-xs text-muted-foreground">How Narrative Becomes Power</p>
                    </div>
                    <div className="space-y-2">
                        {MECHANISM_STEPS.map((item, i) => (
                            <div key={i} className="space-y-0.5">
                                <div className="text-xs font-semibold text-cyan-400">{item.step}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Together */}
            <Card className="p-3 bg-cyan-500/5 border-cyan-500/20">
                <div className="text-center">
                    <h4 className="text-sm font-bold mb-1">Together</h4>
                    <p className="text-sm">
                        The stories societies tell themselves become the mechanisms through which power operates.
                    </p>
                </div>
            </Card>

            {/* Civilizational Expression - 4 Columns */}
            <Card className="p-4">
                <h4 className="text-base font-semibold mb-3 text-center">Civilizational Expression</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Information Systems */}
                    <div>
                        <div className="text-xs font-semibold text-cyan-400 mb-2">Information Systems</div>
                        <ul className="space-y-1.5">
                            {CIVILIZATIONAL_EXPRESSIONS.informationSystems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                    <span className="text-cyan-400">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Collective Identity */}
                    <div>
                        <div className="text-xs font-semibold text-cyan-400 mb-2">Collective Identity</div>
                        <ul className="space-y-1.5">
                            {CIVILIZATIONAL_EXPRESSIONS.collectiveIdentity.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                    <span className="text-cyan-400">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Power Structures */}
                    <div>
                        <div className="text-xs font-semibold text-cyan-400 mb-2">Power Structures</div>
                        <ul className="space-y-1.5">
                            {CIVILIZATIONAL_EXPRESSIONS.powerStructures.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                    <span className="text-cyan-400">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Distortion Risks */}
                    <div>
                        <div className="text-xs font-semibold text-amber-400 mb-2">⚠ Distortion Risks</div>
                        <ul className="space-y-1.5">
                            {DISTORTION_RISKS.map((risk, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                    <span className="text-amber-400">!</span>
                                    <span className="text-muted-foreground">{risk}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Phase Meaning - 4 Boxes */}
            <div>
                <h4 className="text-base font-semibold mb-3 text-center">Phase Meaning</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PHASE_MEANINGS.map((phase, i) => (
                        <Card key={i} className="p-4 bg-muted/20">
                            <div className="text-xs font-semibold text-cyan-400 mb-2">{phase.phase}</div>
                            <p className="text-xs text-muted-foreground">{phase.meaning}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Historical Timeline */}
            <Card className="p-4">
                <h4 className="text-base font-semibold mb-2">Historical Timeline</h4>
                <p className="text-xs text-muted-foreground mb-3">
                    Major technological milestones and narrative forms through the cycle
                </p>
                <div className="space-y-2">
                    {TECHNOLOGICAL_MILESTONES.map((milestone, i) => (
                        <div key={i} className="grid grid-cols-[80px_1fr_1fr] gap-4 items-center">
                            <span className="font-mono text-sm font-semibold text-cyan-400">{milestone.year}</span>
                            <span className="text-sm">{milestone.technology}</span>
                            <span className="text-sm text-muted-foreground italic">→ {milestone.narrativeForm}</span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Signals to Watch */}
            <Card className="p-4 bg-cyan-500/5 border-cyan-500/20">
                <h4 className="text-base font-semibold mb-3">📡 Watch For (2026–2028)</h4>
                <ul className="space-y-1.5">
                    {SIGNALS_TO_WATCH.map((signal, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                            <span className="text-cyan-400">▸</span>
                            <span>{signal}</span>
                        </li>
                    ))}
                </ul>
            </Card>



            {/* Previous vs Current Cycle Comparison */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">The Deeper Pattern</h3>
                <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
                    Each Neptune–Pluto cycle produces a new way for belief to organize power.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Previous Cycle */}
                    <Card className="p-6 bg-muted/20">
                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">The Previous Neptune–Pluto Cycle</h4>
                            <p className="text-sm text-muted-foreground mb-1">~1400–1891</p>
                            <p className="text-xs text-cyan-400 font-semibold">Printing Civilizations</p>
                        </div>

                        <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                            <p className="text-2xl font-bold text-center mb-2">PRINT</p>
                            <p className="text-sm text-center text-muted-foreground">text → ideas → ideology → institutions</p>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <p className="text-sm font-semibold text-cyan-400 mb-2">Key Transitions</p>
                                <div className="space-y-2">
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1400s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Printing Press</p>
                                            <p className="text-muted-foreground">Ideas start spreading outside church control</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1500s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Reformation</p>
                                            <p className="text-muted-foreground">Pamphlets and translated Bibles destabilize religious authority</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1700s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Enlightenment</p>
                                            <p className="text-muted-foreground">Political philosophy spreads through print networks</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">Late 1700s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Revolutions</p>
                                            <p className="text-muted-foreground">Ideology mobilizes entire populations</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1800s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Industrial Nation States</p>
                                            <p className="text-muted-foreground">Mass schooling, newspapers, and nationalism become dominant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-muted/30 rounded">
                                <p className="text-sm font-semibold mb-1">This Cycle Produced</p>
                                <ul className="space-y-1">
                                    <li className="text-sm text-muted-foreground">• Literacy</li>
                                    <li className="text-sm text-muted-foreground">• Ideology</li>
                                    <li className="text-sm text-muted-foreground">• Nation states</li>
                                    <li className="text-sm text-muted-foreground">• Mass schooling</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    {/* Current Cycle */}
                    <Card className="p-6 bg-cyan-500/5 border-cyan-500/20">
                        <div className="mb-4">
                            <h4 className="text-lg font-bold mb-2">The Current Neptune–Pluto Cycle</h4>
                            <p className="text-sm text-muted-foreground mb-1">1891–~2380</p>
                            <p className="text-xs text-cyan-400 font-semibold">Information Civilizations</p>
                        </div>

                        <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                            <p className="text-2xl font-bold text-center mb-2">MEDIA</p>
                            <p className="text-sm text-center">media → perception → narrative → power</p>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <p className="text-sm font-semibold text-cyan-400 mb-2">Key Transitions</p>
                                <div className="space-y-2">
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1890s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Mass newspapers + telegraph</p>
                                            <p className="text-muted-foreground">The first global information system appears</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1920s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Radio</p>
                                            <p className="text-muted-foreground">Narratives become voice-driven and emotional</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1950s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Television</p>
                                            <p className="text-muted-foreground">Politics becomes visual and theatrical</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">1990s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">Internet</p>
                                            <p className="text-muted-foreground">Narratives fragment into decentralized networks</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-sm font-mono text-cyan-400 min-w-[60px]">2020s</span>
                                        <div className="text-sm">
                                            <p className="font-semibold">AI / algorithmic media</p>
                                            <p className="text-muted-foreground">Narratives are generated, optimized, and distributed by machines</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-cyan-500/10 rounded border border-cyan-500/20">
                                <p className="text-sm font-semibold mb-1">This Cycle Produces</p>
                                <ul className="space-y-1">
                                    <li className="text-sm">• Media</li>
                                    <li className="text-sm">• Networks</li>
                                    <li className="text-sm">• Algorithms</li>
                                    <li className="text-sm">• Identity systems</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Core Shift */}
                <Card className="p-6 bg-cyan-500/5 border-cyan-500/20">
                    <h4 className="text-lg font-semibold mb-4 text-center">The Core Shift</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-semibold mb-2 text-center">Old Cycle (~1400–1891)</p>
                            <p className="text-base font-bold mb-3">Belief spreads through text</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span className="text-muted-foreground">Printing enables ideas to scale across societies</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span className="text-muted-foreground">Ideologies form through written argument and philosophy</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span className="text-muted-foreground">Institutions of power center on churches, universities, and newspapers</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span className="text-muted-foreground">Political movements organize around shared doctrines and written narratives</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-2 text-center">Current Cycle (1891–~2380)</p>
                            <p className="text-base font-bold mb-3">Reality is mediated through media systems</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span>Electronic media distributes narratives instantly at global scale</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span>Belief forms through images, emotion, and immersive media environments</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span>Power shifts toward broadcast networks, platforms, and algorithms</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-cyan-400">•</span>
                                    <span>Competing narratives shape how people perceive reality itself</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Why This Matters */}
                <Card className="p-4 bg-muted/20">
                    <p className="text-base text-muted-foreground">
                        This is why propaganda, media influence, and narrative warfare become increasingly central during this era.
                        Not because people suddenly lie more — but because the infrastructure for shaping belief becomes extremely powerful.
                    </p>
                </Card>
            </div>

            {/* Cycle Milestone Meanings */}
            <div>
                <h3 className="text-xl font-bold text-center mb-2">Neptune–Pluto Cycle Milestones</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                    Understanding what happens at each phase of the civilizational cycle
                </p>

                <div className="space-y-6">
                    {MILESTONE_MEANINGS.map((milestone, i) => {
                        const milestoneData = NEPTUNE_PLUTO_MILESTONES[i];
                        return (
                            <Card key={i} className="p-4 bg-muted/20">
                                {/* Milestone Header */}
                                <div className="mb-4 pb-3 border-b border-border/50">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-cyan-400 font-semibold">{milestone.degree}</span>
                                        <h4 className="text-lg font-bold">{milestone.aspect}</h4>
                                        <span className="text-sm text-cyan-400 font-semibold">— {milestone.title}</span>
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
                                                    <span className="text-cyan-400">•</span>
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
                                                    <span className="text-cyan-400">→</span>
                                                    <span className="text-muted-foreground">{signal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Example */}
                                    <div>
                                        <p className="text-xs font-semibold text-cyan-400 mb-2">Example ({milestone.example.period})</p>
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
                    This cycle moves slowly, but its effects are profound. We are living through a transformation in how information, belief, and power interact.
                </p>
            </div>
        </div>
    );
}
