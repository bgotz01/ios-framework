"use client";

import { useState } from "react";
import { useTheme } from "@/app/providers";

export type TimelineEra = {
    period: string;
    label: string;
    hex: string;
    dominantForce: string;
    bullets: string[];
    insight?: string;
    summary?: string;
    invertsFrom?: string;
    sequenceLabel?: string;
};

export type TimelineData = {
    subject: string;
    description?: string;
    sequence?: string;
    eras: TimelineEra[];
};

export default function Timeline({
    data,
    onEraChange,
}: {
    data: TimelineData;
    onEraChange?: (index: number) => void;
}) {
    const [active, setActive] = useState(0);
    const era = data.eras[active];
    const { theme } = useTheme();
    const isDark = theme === "dark";

    function selectEra(i: number) {
        setActive(i);
        onEraChange?.(i);
    }

    const headerBg = isDark ? `${era.hex}28` : `${era.hex}18`;
    const summaryBg = isDark ? `${era.hex}22` : `${era.hex}10`;
    const inversionBg = isDark ? `${era.hex}16` : `${era.hex}08`;
    const sequenceBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
    const borderColor = isDark ? `${era.hex}55` : `${era.hex}40`;
    const dividerColor = isDark ? `${era.hex}45` : `${era.hex}30`;

    return (
        <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">
                    Timeline
                </p>

                <h1 className="text-2xl font-bold text-black dark:text-white">
                    {data.subject}
                </h1>

                {data.description && (
                    <p className="text-sm text-black/50 dark:text-white/50 mt-1">
                        {data.description}
                    </p>
                )}

                {data.sequence && (
                    <div
                        className="mt-4 rounded-xl border px-4 py-3"
                        style={{
                            backgroundColor: sequenceBg,
                            borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                        }}
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-1">
                            Sequence
                        </p>
                        <p className="text-sm font-medium text-black/70 dark:text-white/75">
                            {data.sequence}
                        </p>
                    </div>
                )}
            </div>

            {/* Horizontal timeline */}
            <div className="relative mb-8">
                <div className="absolute top-[22px] left-0 right-0 h-px bg-black/10 dark:bg-white/10" />

                <div className="relative flex justify-between">
                    {data.eras.map((e, i) => {
                        const isActive = active === i;
                        return (
                            <button
                                key={e.period}
                                onClick={() => selectEra(i)}
                                className="flex flex-col items-center gap-2 cursor-pointer group"
                                style={{ flex: 1 }}
                            >
                                <span
                                    className="relative z-10 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0"
                                    style={{
                                        borderColor: e.hex,
                                        backgroundColor: isActive ? e.hex : "transparent",
                                        boxShadow: isActive
                                            ? `0 0 0 4px ${e.hex}35, 0 0 12px ${e.hex}60`
                                            : "none",
                                    }}
                                >
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                                    )}
                                </span>

                                <span className="flex flex-col items-center text-center px-1">
                                    <span className="text-[11px] font-semibold uppercase tracking-widest leading-tight text-black dark:text-white">
                                        {e.period}
                                    </span>
                                    <span
                                        className="text-xs font-semibold mt-0.5"
                                        style={{ color: e.hex }}
                                    >
                                        {e.dominantForce}
                                    </span>
                                    <span className="text-[10px] text-black/40 dark:text-white/50 mt-0.5">
                                        {e.label}
                                    </span>
                                    {e.sequenceLabel && (
                                        <span
                                            className="mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                            style={{
                                                backgroundColor: isActive ? `${e.hex}25` : `${e.hex}12`,
                                                color: e.hex,
                                            }}
                                        >
                                            {e.sequenceLabel}
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Detail card */}
            <div
                className="rounded-xl border overflow-hidden transition-all"
                style={{ borderColor }}
            >
                <div className="px-5 py-4" style={{ backgroundColor: headerBg }}>
                    <div className="flex items-center gap-2 mb-1">
                        <span
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: era.hex }}
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/50">
                            {era.label}
                        </span>
                    </div>

                    <h2 className="text-lg font-bold text-black dark:text-white">
                        {era.period}
                    </h2>

                    <p className="text-sm mt-0.5 font-medium" style={{ color: era.hex }}>
                        {era.dominantForce}
                    </p>

                    {era.summary && (
                        <div className="mt-3">
                            <span
                                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                    backgroundColor: `${era.hex}16`,
                                    color: era.hex,
                                }}
                            >
                                {era.summary}
                            </span>
                        </div>
                    )}
                </div>

                <div className="px-5 py-4 border-t" style={{ borderColor: dividerColor }}>
                    <ul className="space-y-2">
                        {era.bullets.map((b) => (
                            <li
                                key={b}
                                className="flex gap-2.5 text-sm text-black/70 dark:text-white/75"
                            >
                                <span
                                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: era.hex }}
                                />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {era.summary && (
                    <div
                        className="px-5 py-3 border-t flex items-center gap-2"
                        style={{ borderColor: dividerColor, backgroundColor: summaryBg }}
                    >
                        <span
                            className="text-[11px] font-semibold uppercase tracking-widest"
                            style={{ color: era.hex }}
                        >
                            Power Formula
                        </span>
                        <p className="text-sm font-semibold text-black dark:text-white">
                            {era.summary}
                        </p>
                    </div>
                )}

                {era.invertsFrom && (
                    <div
                        className="px-5 py-3 border-t flex items-start gap-2"
                        style={{ borderColor: dividerColor, backgroundColor: inversionBg }}
                    >
                        <span className="text-black/30 dark:text-white/40 flex-shrink-0 text-sm mt-0.5">
                            ↺
                        </span>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/50 mb-0.5">
                                What Changed
                            </p>
                            <p className="text-sm text-black dark:text-white">
                                {era.invertsFrom}
                            </p>
                        </div>
                    </div>
                )}

                {!era.summary && era.insight && (
                    <div
                        className="px-5 py-3 border-t flex items-center gap-2"
                        style={{ borderColor: dividerColor, backgroundColor: summaryBg }}
                    >
                        <span className="text-black/30 dark:text-white/40 flex-shrink-0 text-sm">
                            →
                        </span>
                        <p className="text-sm font-semibold text-black dark:text-white">
                            {era.insight}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}