'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { AgeCycleHistorical } from '@/components/astrology/macro/cycles/AgeCycleHistorical';
import { PiscesAquariusTransition } from '@/components/astrology/macro/cycles/PiscesAquariusTransition';

export default function AgeCycleMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">Astrological Age Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ~2,150-year civilizational paradigms driven by the precession of the equinoxes
                    </p>
                </div>
                <div className="space-y-8">
                    <MacroNavigation />
                    <PiscesAquariusTransition />
                    <AgeCycleHistorical />
                </div>
            </div>
        </div>
    );
}
