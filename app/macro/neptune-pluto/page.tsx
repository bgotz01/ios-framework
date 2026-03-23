'use client';

import { NeptunePlutoCycle } from '@/components/astrology/macro/NeptunePlutoCycle';
import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';

export default function NeptunePlutoPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="mb-8">
                <MacroNavigation />
            </div>
            <hr className="border-border/50 mb-8" />
            <NeptunePlutoCycle />
        </div>
    );
}
