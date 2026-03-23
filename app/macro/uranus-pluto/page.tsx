'use client';

import { UranusPlutoCycle } from '@/components/astrology/macro/UranusPlutoCycle';
import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';

export default function UranusPlutoPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="mb-8">
                <MacroNavigation />
            </div>
            <hr className="border-border/50 mb-8" />
            <UranusPlutoCycle />
        </div>
    );
}
