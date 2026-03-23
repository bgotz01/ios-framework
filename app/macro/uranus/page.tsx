'use client';

import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { UranusMacroTransits } from '@/components/astrology/macro/cycles/UranusMacroTransits';
import { UranusGeminiPhases } from '@/components/astrology/macro/cycles/UranusGeminiPhases';

export default function UranusMacroPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">♅ Uranus Macro Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Uranus rules disruption, awakening, and technological breakthrough
                    </p>
                </div>
                <div className="space-y-8">
                    <MacroNavigation />
                    <UranusMacroTransits />
                    <UranusGeminiPhases />
                </div>
            </div>
        </div>
    );
}
