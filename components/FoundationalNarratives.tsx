"use client";

import { useState } from "react";

export type FoundationalNarrative = {
    title: string;
    reference: string;
    coreIdea: string;
    narrative: string[];
    whyItMatters: {
        summary?: string;
        before?: string[];
        after?: string[];
    };
    keyMoment: string;
    outlierLabel?: string;
};

export type FoundationalNarrativesData = {
    subject: string;
    narratives: FoundationalNarrative[];
};

export default function FoundationalNarratives({ data }: { data: FoundationalNarrativesData }) {
    const [active, setActive] = useState(0);
    const narrative = data.narratives[active];

    return (
        <div className="max-w-4xl">
            <div className="mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">
                    {data.subject} — Foundational Narratives
                </p>
            </div>

            {/* Narrative tabs attached to content */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">

                {/* Tab bar */}
                <div className="grid border-b border-black/10 dark:border-white/10" style={{ gridTemplateColumns: `repeat(${data.narratives.length}, 1fr)` }}>
                    {data.narratives.map((n, i) => (
                        <button
                            key={n.title}
                            onClick={() => setActive(i)}
                            className={`px-4 py-3 text-sm font-medium text-left transition-colors cursor-pointer border-r last:border-r-0 border-black/10 dark:border-white/10 ${active === i
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                }`}
                        >
                            <span className="block truncate">{n.title}</span>
                            <span className={`text-[10px] uppercase tracking-widest ${active === i ? "text-white/60 dark:text-black/50" : "text-black/30 dark:text-white/30"}`}>
                                {n.reference}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-5 space-y-5">

                    {/* Core idea */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Core Idea</p>
                        <p className="text-base font-semibold text-black dark:text-white">{narrative.coreIdea}</p>
                    </div>

                    {/* Narrative */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Narrative</p>
                        <ul className="space-y-1">
                            {narrative.narrative.map((line) => (
                                <li key={line} className="flex gap-2 text-sm text-black/70 dark:text-white/70">
                                    <span className="text-black/30 dark:text-white/30 select-none">•</span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Why it matters */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Why It Matters</p>
                        {narrative.whyItMatters.summary && (
                            <p className="text-sm text-black/70 dark:text-white/70 mb-3">{narrative.whyItMatters.summary}</p>
                        )}
                        {(narrative.whyItMatters.before || narrative.whyItMatters.after) && (
                            <div className="grid md:grid-cols-2 gap-3">
                                {narrative.whyItMatters.before && (
                                    <div className="rounded-lg border border-black/10 dark:border-white/10 p-3">
                                        <p className="text-[11px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">Religion was no longer</p>
                                        <ul className="space-y-1">
                                            {narrative.whyItMatters.before.map((item) => (
                                                <li key={item} className="flex gap-2 text-sm text-black/60 dark:text-white/60">
                                                    <span className="select-none">—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {narrative.whyItMatters.after && (
                                    <div className="rounded-lg border border-black/10 dark:border-white/10 p-3">
                                        <p className="text-[11px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">Instead it became</p>
                                        <ul className="space-y-1">
                                            {narrative.whyItMatters.after.map((item) => (
                                                <li key={item} className="flex gap-2 text-sm font-medium text-black dark:text-white">
                                                    <span className="select-none">→</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Key moment + outlier label */}
                    <div className="flex items-start justify-between gap-4 pt-3 border-t border-black/10 dark:border-white/10">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Key Moment</p>
                            <p className="text-sm font-medium text-black dark:text-white">{narrative.keyMoment}</p>
                        </div>
                        {narrative.outlierLabel && (
                            <span
                                className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
                                style={{ backgroundColor: "var(--accent)", color: "#1e3a5f" }}
                            >
                                {narrative.outlierLabel}
                            </span>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
