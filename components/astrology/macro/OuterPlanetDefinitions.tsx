'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';

type OuterPlanetDefinitionsProps = {
    userId?: string;
};

export function OuterPlanetDefinitions({ userId }: OuterPlanetDefinitionsProps) {
    const base = userId ? `/arc/personal/${userId}/astro/macro` : `/macro`;
    const planets = [
        {
            symbol: '♇',
            name: 'Pluto',
            rules: 'Power structure transformation',
            href: `${base}/pluto`,
        },
        {
            symbol: '♆',
            name: 'Neptune',
            rules: 'Narrative transformation',
            href: `${base}/neptune`,
        },
        {
            symbol: '♅',
            name: 'Uranus',
            rules: 'Technological disruption',
            href: null, // No page yet
        },
    ];

    return (
        <Card className="p-6">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Outer Planet Archetypes</h2>
                <p className="text-muted-foreground">The three forces shaping civilizational change</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {planets.map((planet) => {
                    const content = (
                        <Card
                            key={planet.name}
                            className={`p-4 bg-muted/30 border-border ${planet.href ? 'hover:bg-muted/50 transition-colors cursor-pointer' : ''}`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">{planet.symbol}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-foreground">{planet.name}</span>
                                    {planet.href && (
                                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="text-sm text-muted-foreground">{planet.rules}</div>
                        </Card>
                    );

                    return planet.href ? (
                        <Link key={planet.name} href={planet.href}>
                            {content}
                        </Link>
                    ) : (
                        content
                    );
                })}
            </div>
        </Card>
    );
}
