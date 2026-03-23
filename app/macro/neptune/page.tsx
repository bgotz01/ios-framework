'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { NeptuneMacroTransits } from '@/components/astrology/macro/cycles/NeptuneMacroTransits';
import { NeptuneTimeline } from '@/components/astrology/macro/cycles/NeptuneTimeline';
import { NeptuneAriesPhases } from '@/components/astrology/macro/cycles/NeptuneAriesPhases';

export default function NeptuneMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">♆ Neptune Macro Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Neptune rules illusion, dissolution, and collective enchantment
                    </p>
                </div>
                <div className="space-y-8">
                    <MacroNavigation />
                    <NeptuneTimeline />
                    <NeptuneMacroTransits />
                    <NeptuneAriesPhases />
                </div>
            </div>
        </div>
    );
}
