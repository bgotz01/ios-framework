'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { PlutoMacroTransits } from '@/components/astrology/macro/cycles/PlutoMacroTransits';
import { PlutoAquariusPhases } from '@/components/astrology/macro/cycles/PlutoAquariusPhases';
import { PlutoTimeline } from '@/components/astrology/macro/cycles/PlutoTimeline';

export default function PlutoMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-8">
                    <MacroNavigation />
                </div>
                <hr className="border-border/50 mb-8" />
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">♇ Pluto Macro Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Pluto rules power structures
                    </p>
                </div>
                <div className="space-y-8">
                    <PlutoTimeline />
                    <PlutoMacroTransits />
                    <PlutoAquariusPhases />
                </div>
            </div>
        </div>
    );
}
