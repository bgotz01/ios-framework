"use client";

import { useState } from "react";

export type CoreDifference = { left: string; right: string };
export type ComparisonRow = { before: string; after: string };
export type OutlierItem = { concept: string; manifestation: string; role: string };

export type ReligionExampleData = {
    slug: string;
    topic: string;
    title: string;
    subtitle: string;
    description: string;
    coreDifferences: { labels: [string, string]; rows: CoreDifference[] };
    previousSystem: { headline: string; summary: string };
    winningIdea: { headline: string; summary: string };
    obvious: { summary: string; bullets: string[]; conclusion: string };
    opposites: { summary: string; comparisonLabels: [string, string]; rows: ComparisonRow[]; conclusion: string };
    outliers: { summary: string; items: OutlierItem[]; legacy: { name: string; desc: string }[] };
};

const tabs = ["Obvious", "Opposites", "Outliers"] as const;
type Tab = typeof tabs[number];
const sublabels: Record<Tab, string> = { Obvious: "Signal", Opposites: "Swing", Outliers: "Story" };

export default function ApplicationReligionExample({ examples, title }: { examples: ReligionExampleData[]; title: string }) {
    const data = examples.find((ex) => ex.title === title);
    const [active, setActive] = useState<Tab>("Obvious");
    if (!data) return null;

    return (
        <div className="max-w-4xl">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">{data.title}</h2>
                <p className="mt-1 text-sm text-black/50 dark:text-white/50">{data.description}</p>
            </div>

            {/* Overview */}
            <section className="mb-6 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">The Arc of the Idea</p>

                {/* Core differences table */}
                <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
                    <div className="grid grid-cols-2 bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/10 dark:border-white/10">
                        {data.coreDifferences.labels.map((label, i) => (
                            <div key={label} className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 ${i === 0 ? "border-r border-black/10 dark:border-white/10" : ""}`}>
                                {label}
                            </div>
                        ))}
                    </div>
                    {data.coreDifferences.rows.map((row, i) => (
                        <div key={row.left} className={`grid grid-cols-2 ${i < data.coreDifferences.rows.length - 1 ? "border-b border-black/10 dark:border-white/10" : ""}`}>
                            <div className="px-4 py-2.5 text-sm text-black/60 dark:text-white/60 border-r border-black/10 dark:border-white/10">{row.left}</div>
                            <div className="px-4 py-2.5 text-sm font-medium text-black dark:text-white">{row.right}</div>
                        </div>
                    ))}
                </div>

                {/* Previous system / winning idea */}
                <div className="grid gap-3 md:grid-cols-2">
                    {[
                        { label: "Previous System", d: data.previousSystem },
                        { label: "The Winning Idea", d: data.winningIdea },
                    ].map(({ label, d }) => (
                        <div key={label} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40">{label}</p>
                            <p className="mt-1.5 text-base font-semibold text-black dark:text-white">{d.headline}</p>
                            <p className="mt-1 text-sm text-black/60 dark:text-white/60 leading-relaxed">{d.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* The 3 Laws */}
            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">The 3 Laws</p>
            <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
                {/* Tab bar */}
                <div className="grid grid-cols-3 border-b border-black/10 dark:border-white/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-4 py-3 text-sm font-medium transition-colors cursor-pointer text-left border-r last:border-r-0 border-black/10 dark:border-white/10 ${active === tab
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                }`}
                        >
                            <span className="block">{tab}</span>
                            <span className={`text-[10px] uppercase tracking-widest ${active === tab ? "text-white/60 dark:text-black/50" : "text-black/30 dark:text-white/30"}`}>
                                {sublabels[tab]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="p-5">
                    {active === "Obvious" && (
                        <div className="space-y-4">
                            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{data.obvious.summary}</p>
                            <ul className="space-y-1.5 pl-4">
                                {data.obvious.bullets.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm text-black/70 dark:text-white/70">
                                        <span className="text-black/30 dark:text-white/30 select-none">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-black dark:text-white pt-3 border-t border-black/10 dark:border-white/10">{data.obvious.conclusion}</p>
                        </div>
                    )}

                    {active === "Opposites" && (
                        <div className="space-y-4">
                            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{data.opposites.summary}</p>
                            <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
                                <div className="grid grid-cols-2 bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/10 dark:border-white/10">
                                    {data.opposites.comparisonLabels.map((label, i) => (
                                        <div key={label} className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 ${i === 0 ? "border-r border-black/10 dark:border-white/10" : ""}`}>
                                            {label}
                                        </div>
                                    ))}
                                </div>
                                {data.opposites.rows.map((row, i) => (
                                    <div key={row.before} className={`grid grid-cols-2 ${i < data.opposites.rows.length - 1 ? "border-b border-black/10 dark:border-white/10" : ""}`}>
                                        <div className="px-4 py-2.5 text-sm text-black/60 dark:text-white/60 border-r border-black/10 dark:border-white/10">{row.before}</div>
                                        <div className="px-4 py-2.5 text-sm font-medium text-black dark:text-white">{row.after}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-black dark:text-white pt-3 border-t border-black/10 dark:border-white/10">{data.opposites.conclusion}</p>
                        </div>
                    )}

                    {active === "Outliers" && (
                        <div className="space-y-4">
                            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{data.outliers.summary}</p>
                            <div className="grid gap-3 md:grid-cols-3">
                                {data.outliers.items.map((item) => (
                                    <div key={item.concept} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                                        <p className="text-sm font-semibold text-black dark:text-white">{item.concept}</p>
                                        <p className="text-[11px] font-medium uppercase tracking-widest text-black/40 dark:text-white/40 mt-0.5">{item.manifestation}</p>
                                        <p className="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">{item.role}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
                                {data.outliers.legacy.map((item, i) => (
                                    <div key={item.name} className={`flex gap-4 px-4 py-2.5 ${i < data.outliers.legacy.length - 1 ? "border-b border-black/10 dark:border-white/10" : ""}`}>
                                        <span className="text-sm font-semibold text-black dark:text-white w-24 shrink-0">{item.name}</span>
                                        <span className="text-sm text-black/60 dark:text-white/60">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
