"use client";

import { useState } from "react";
import ApplicationReligionExample from "@/components/ApplicationReligionExample";
import FoundationalNarratives from "@/components/FoundationalNarratives";
import examples from "./data";
import { judaismNarratives, egyptNarratives } from "./narratives";

export default function ReligionPage() {
    const [active, setActive] = useState(0);

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">

            {/* Page header */}
            <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Applications</p>
                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">Religion</h1>
                <p className="mt-2 text-sm text-black/50 dark:text-white/50 max-w-xl">
                    Three paradigm shifts that reshaped how billions of people understand God, morality, and the divine.
                </p>
            </div>

            {/* Example tabs */}
            <div className="flex gap-1 mb-8 border border-black/10 dark:border-white/10 rounded-xl p-1">
                {examples.map((ex, i) => (
                    <button
                        key={ex.slug}
                        onClick={() => setActive(i)}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${active === i
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {ex.title}
                    </button>
                ))}
            </div>

            <ApplicationReligionExample examples={examples} title={examples[active].title} />


        </div>
    );
}
