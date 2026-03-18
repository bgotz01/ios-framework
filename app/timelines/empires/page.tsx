"use client";

import { useState } from "react";
import Timeline from "@/components/Timeline";
import { TriadCardData } from "@/components/TriadCard";
import empiresTimeline from "./data";
import preSpainTriad from "./pre-spain/data";
import portugueseTriad from "./portuguese/data";
import spanishTriad from "./spanish/data";
import dutchTriad from "./dutch/data";
import britishTriad from "./british/data";
import usTriad from "./us/data";

const triadMap: Record<string, [TriadCardData, TriadCardData] | null> = {
    "16th Century": [preSpainTriad, portugueseTriad],
    "17th Century": [portugueseTriad, spanishTriad],
    "18th Century": [spanishTriad, dutchTriad],
    "19th Century": [dutchTriad, britishTriad],
    "20th Century": [britishTriad, usTriad],
};

const summaryMap: Record<string, string> = {
    "Pre-Spain": "Land + regional trade + hierarchical legitimacy",
    Portugal: "Routes + chokepoints + maritime monopoly",
    "Spanish Empire": "Conquest + extraction + religious empire",
    "Dutch Republic": "Trade + finance + commercial republic",
    "British Empire": "Industry + navy + rule-setting system",
    "United States": "Dollar + security + narrative",
};

export default function EmpiresTimelinePage() {
    const [activeEra, setActiveEra] = useState(0);
    const [openRows, setOpenRows] = useState<boolean[]>([true, true, true]);

    const period = empiresTimeline.eras[activeEra].period;
    const triads = triadMap[period] ?? null;

    function handleEraChange(i: number) {
        setActiveEra(i);
        setOpenRows([true, true, true]);
    }

    function handleToggle(i: number) {
        setOpenRows((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
    }

    if (!triads) {
        return (
            <div className="px-8">
                <Timeline data={empiresTimeline} onEraChange={handleEraChange} />
            </div>
        );
    }

    const [left, right] = triads;
    const leftHex = left.hex;
    const rightHex = right.hex;

    const leftSummary = summaryMap[left.subject] ?? "";
    const rightSummary = summaryMap[right.subject] ?? "";

    return (
        <div className="space-y-10">
            <div className="px-8">
                <Timeline data={empiresTimeline} onEraChange={handleEraChange} />
            </div>

            <div className="px-8 space-y-4">


                {/* Column headers */}
                <div className="grid grid-cols-2 gap-6 mb-3">
                    {[
                        { data: left, summary: leftSummary, hex: leftHex },
                        { data: right, summary: rightSummary, hex: rightHex },
                    ].map(({ data, summary, hex }) => (
                        <div key={data.subject} className="text-center">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-0.5">
                                {data.label}
                            </p>

                            <h3 className="text-2xl font-bold text-black dark:text-white">
                                {data.subject}
                            </h3>

                            {summary && (
                                <p
                                    className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                                    style={{
                                        backgroundColor: `${hex}14`,
                                        color: hex,
                                    }}
                                >
                                    {summary}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Shared rows */}
                <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
                    {left.legs.map((_, i) => {
                        const ll = left.legs[i];
                        const rl = right.legs[i];
                        const isOpen = openRows[i];

                        return (
                            <div
                                key={i}
                                className="border-b last:border-b-0 border-black/10 dark:border-white/10"
                            >
                                {/* Shared trigger row */}
                                <div className="grid grid-cols-2">
                                    {[{ leg: ll, hex: leftHex }, { leg: rl, hex: rightHex }].map(
                                        ({ leg, hex }, col) => (
                                            <button
                                                key={col}
                                                onClick={() => handleToggle(i)}
                                                className="flex items-center gap-3 px-4 py-3 text-left cursor-pointer transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-r last:border-r-0 border-black/10 dark:border-white/10"
                                                style={{ backgroundColor: isOpen ? `${hex}10` : undefined }}
                                            >
                                                <span className="text-xl flex-shrink-0">{leg.icon}</span>
                                                <span className="flex-1 text-base font-bold text-black dark:text-white">
                                                    {leg.title}
                                                </span>
                                                {col === 1 && (
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        className={`flex-shrink-0 text-black/30 dark:text-white/30 transition-transform ${isOpen ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                )}
                                            </button>
                                        )
                                    )}
                                </div>

                                {/* Shared content row */}
                                {isOpen && (
                                    <div className="grid grid-cols-2 border-t border-black/10 dark:border-white/10">
                                        {[{ leg: ll, hex: leftHex }, { leg: rl, hex: rightHex }].map(
                                            ({ leg, hex }, col) => (
                                                <div
                                                    key={col}
                                                    className="px-4 py-3 border-r last:border-r-0 border-black/10 dark:border-white/10"
                                                    style={{ backgroundColor: `${hex}08` }}
                                                >
                                                    <p className="text-sm text-black/50 dark:text-white/50 mb-2">
                                                        {leg.description}
                                                    </p>
                                                    <ul className="space-y-1.5">
                                                        {leg.bullets.map((b) => (
                                                            <li
                                                                key={b}
                                                                className="flex gap-2 text-sm text-black/70 dark:text-white/70"
                                                            >
                                                                <span
                                                                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                                                    style={{ backgroundColor: hex }}
                                                                />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}