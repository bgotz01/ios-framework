'use client';

import { Card } from '@/components/ui/card';

interface SocialRegulatorProps {
    saturn: {
        sign: string;
        degree: number;
        yearsActive: string;
        beingRegulated: string[];
        beingTested: string[];
    };
    jupiter: {
        sign: string;
        degree: number;
        yearsActive: string;
        growing: string[];
        optimismSits: string[];
    };
}

export function SocialRegulatorLayer({ saturn, jupiter }: SocialRegulatorProps) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">The Social Regulator Layer</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    These shape cycles but not eras. Jupiter expands, Saturn constrains.
                </p>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Saturn - Constraint */}
                <Card className="p-5 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent flex flex-col">
                    <div className="mb-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">♄</span>
                            <h3 className="text-xl font-bold">Saturn</h3>
                        </div>
                        <p className="text-xs font-semibold text-blue-400 mb-1">Constraint & Discipline</p>
                        <p className="text-xs text-muted-foreground italic">What is being regulated</p>
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col">
                        <div className="space-y-2 text-center">
                            <div>
                                <div className="text-xs font-semibold text-blue-400 mb-1">Current Sign</div>
                                <div className="text-base font-bold">{saturn.sign}</div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-blue-400 mb-1">Years Active</div>
                                <div className="text-sm">{saturn.yearsActive}</div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-blue-400 mb-1">Degree</div>
                                <div className="text-sm font-bold">{saturn.degree.toFixed(1)}°</div>
                            </div>
                        </div>

                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
                            <div className="text-xs font-semibold text-blue-400 mb-1">Synthesis</div>
                            <p className="text-sm">{saturn.beingRegulated[0]}</p>
                        </div>

                        <div className="flex-1">
                            <div className="text-xs font-semibold text-blue-400 mb-2 text-center">Key Themes</div>
                            <ul className="space-y-1.5 text-left inline-block">
                                {saturn.beingTested.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className="text-blue-400">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Jupiter - Expansion */}
                <Card className="p-5 border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent flex flex-col">
                    <div className="mb-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-2xl">♃</span>
                            <h3 className="text-xl font-bold">Jupiter</h3>
                        </div>
                        <p className="text-xs font-semibold text-amber-400 mb-1">Expansion & Growth</p>
                        <p className="text-xs text-muted-foreground italic">Where optimism sits</p>
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col">
                        <div className="space-y-2 text-center">
                            <div>
                                <div className="text-xs font-semibold text-amber-400 mb-1">Current Sign</div>
                                <div className="text-base font-bold">{jupiter.sign}</div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-amber-400 mb-1">Years Active</div>
                                <div className="text-sm">{jupiter.yearsActive}</div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-amber-400 mb-1">Degree</div>
                                <div className="text-sm font-bold">{jupiter.degree.toFixed(1)}°</div>
                            </div>
                        </div>

                        <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
                            <div className="text-xs font-semibold text-amber-400 mb-1">Synthesis</div>
                            <p className="text-sm">{jupiter.growing[0]}</p>
                        </div>

                        <div className="flex-1">
                            <div className="text-xs font-semibold text-amber-400 mb-2 text-center">Key Themes</div>
                            <ul className="space-y-1.5 text-left inline-block">
                                {jupiter.optimismSits.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className="text-amber-400">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground pt-4">
                <p>This pair is especially important if you're building something regime-oriented.</p>
            </div>
        </div>
    );
}
