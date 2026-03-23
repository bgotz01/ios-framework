'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MacroNavigationProps {
    userId?: string;
}

export function MacroNavigation({ userId }: MacroNavigationProps) {
    const pathname = usePathname();
    const base = userId ? `/arc/personal/${userId}/astro/macro` : `/macro`;

    const overviewLink = {
        href: base,
        label: 'Overview',
        icon: '🌌',
    };

    const categories = [
        {
            name: 'Civilizational',
            color: 'purple',
            cycles: [
                {
                    href: `${base}/age-cycle`,
                    label: 'Age Cycle',
                    icon: '🌍',
                },
                {
                    href: `${base}/neptune-pluto`,
                    label: 'Neptune–Pluto',
                    icon: '♆♇',
                },
                {
                    href: `${base}/uranus-pluto`,
                    label: 'Uranus–Pluto',
                    icon: '♅♇',
                },
            ],
        },
        {
            name: 'Structural',
            color: 'purple',
            cycles: [
                {
                    href: `${base}/pluto`,
                    label: 'Pluto',
                    icon: '♇',
                },
                {
                    href: `${base}/neptune`,
                    label: 'Neptune',
                    icon: '♆',
                },
                {
                    href: `${base}/uranus`,
                    label: 'Uranus',
                    icon: '♅',
                },

            ],
        },
        {
            name: 'Turning Point',
            color: 'purple',
            cycles: [
                {
                    href: `${base}/saturn-pluto`,
                    label: 'Saturn–Pluto',
                    icon: '♄♇',
                },
                {
                    href: `${base}/jupiter-saturn`,
                    label: 'Jupiter–Saturn',
                    icon: '♃♄',
                },
                {
                    href: `${base}/saturn-uranus`,
                    label: 'Saturn–Uranus',
                    icon: '♄♅',
                },

            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            purple: {
                active: 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400',
                inactive: 'border-border hover:border-purple-500/50 hover:bg-purple-500/5',
                label: 'text-muted-foreground',
            },
            default: {
                active: 'border-primary bg-primary/10 text-primary',
                inactive: 'border-border hover:border-primary/50 hover:bg-primary/5',
                label: 'text-primary',
            },
        };

        return colorMap[color as keyof typeof colorMap] || colorMap.default;
    };

    return (
        <div className="mb-6 py-4">
            {/* Categorized Cycles with Overview First */}
            <div className="flex flex-wrap items-start justify-center gap-6">
                {/* Overview Link */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        &nbsp;
                    </div>
                    <Link
                        href={overviewLink.href}
                        className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${pathname === overviewLink.href
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                            }`}
                    >
                        <span className="text-base">{overviewLink.icon}</span>
                        <span className="font-medium text-xs">{overviewLink.label}</span>
                    </Link>
                </div>

                {/* Category Groups */}
                {categories.map((category) => {
                    const colors = getColorClasses(category.color);
                    return (
                        <div key={category.name} className="flex flex-col items-center gap-2">
                            <div className={`text-xs font-semibold uppercase tracking-wider ${colors.label}`}>
                                {category.name}
                            </div>
                            <div className="flex items-center gap-2">
                                {category.cycles.map((cycle) => {
                                    const isActive = pathname === cycle.href;
                                    return (
                                        <Link
                                            key={cycle.href}
                                            href={cycle.href}
                                            className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${isActive ? colors.active : colors.inactive
                                                }`}
                                        >
                                            <span className="text-base">{cycle.icon}</span>
                                            <span className="font-medium text-xs">{cycle.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
