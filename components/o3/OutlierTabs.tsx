"use client";

import { useState } from "react";
import type { OutlierExample } from "@/types/outliers";
import OutlierSpectrumCompact from "./OutlierSpectrumCompact";

type Tab = {
    label: string;
    example: OutlierExample;
};

type Props = {
    tabs: Tab[];
};

export default function OutlierTabs({ tabs }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab, i) => (
                    <button
                        key={tab.example.slug}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === activeIndex
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-black/10 text-black/70 hover:bg-black/20 hover:text-black dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <OutlierSpectrumCompact
                key={tabs[activeIndex].example.slug}
                example={tabs[activeIndex].example}
            />
        </div>
    );
}
