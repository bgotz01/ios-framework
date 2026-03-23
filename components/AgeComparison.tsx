"use client";

import { useState } from "react";
import { useTheme } from "@/app/providers";
import type { AgeComparisonData, ComparisonRowKey } from "@/app/cycles/age-cycle/data";

export type { AgeComparisonData };

export default function AgeComparison({ data }: { data: AgeComparisonData }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [openRow, setOpenRow] = useState<ComparisonRowKey | null>("core");

    const pisces = data.ages[0];
    const aquarius = data.ages[1];

    const tint = (hex: string, opacity: string) => `${hex}${opacity}`;

    return (
        <div className="max-w-5xl">
            <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr] mb-6">
                <div />
                {data.ages.map((age, i) => (
                    <div
                        key={age.name}
                        className={`px-6 py-5 border-y ${i === 0
                            ? "border-l rounded-tl-2xl rounded-bl-2xl"
                            : "border-l border-r rounded-tr-2xl rounded-br-2xl"
                            }`}
                        style={{
                            borderColor: tint(age.hex, isDark ? "35" : "28"),
                            background: `linear-gradient(135deg, ${tint(
                                age.hex,
                                isDark ? "18" : "0e"
                            )} 0%, transparent 60%)`,
                        }}
                    >
                        <div className="flex flex-col items-center text-center gap-2 mb-3">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: age.hex, boxShadow: `0 0 6px ${age.hex}80` }}
                            />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                                {age.range}
                            </span>
                        </div>
                        <h2 className="text-lg font-bold text-black dark:text-white mb-1 text-center">{age.name}</h2>
                        <p className="text-xs font-medium mb-3 text-center" style={{ color: age.hex }}>
                            Ruled by {age.rulers.join(" · ")}
                        </p>
                        <div
                            className="text-sm font-semibold text-black dark:text-white px-3 py-2 rounded-lg text-center"
                            style={{ backgroundColor: tint(age.hex, isDark ? "18" : "0d") }}
                        >
                            {age.corePrinciple}
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden grid grid-cols-1 gap-3 mb-6">
                {data.ages.map((age) => (
                    <div
                        key={age.name}
                        className="px-5 py-4 rounded-2xl border"
                        style={{
                            borderColor: tint(age.hex, isDark ? "35" : "28"),
                            background: `linear-gradient(135deg, ${tint(
                                age.hex,
                                isDark ? "18" : "0e"
                            )} 0%, transparent 60%)`,
                        }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: age.hex, boxShadow: `0 0 6px ${age.hex}80` }}
                            />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                                {age.range}
                            </span>
                        </div>
                        <h2 className="text-base font-bold text-black dark:text-white">{age.name}</h2>
                        <p className="text-xs font-medium mt-1 mb-3" style={{ color: age.hex }}>
                            Ruled by {age.rulers.join(" · ")}
                        </p>
                        <div
                            className="text-sm font-semibold text-black dark:text-white px-3 py-2 rounded-lg"
                            style={{ backgroundColor: tint(age.hex, isDark ? "18" : "0d") }}
                        >
                            {age.corePrinciple}
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
                <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr] border-b border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.015]">
                    <div className="px-5 py-3" />
                    {data.ages.map((age) => (
                        <div
                            key={age.name}
                            className="px-5 py-3 border-l border-black/10 dark:border-white/10"
                        >
                            <span
                                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                style={{ color: age.hex }}
                            >
                                {age.name}
                            </span>
                        </div>
                    ))}
                </div>

                {data.rows.map((row, index) => {
                    const isOpen = openRow === row.key;
                    const isLast = index === data.rows.length - 1;

                    return (
                        <div
                            key={row.key}
                            className={!isLast ? "border-b border-black/10 dark:border-white/10" : ""}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenRow(isOpen ? null : row.key)}
                                className="w-full text-left"
                            >
                                <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr]">
                                    <div className="group px-5 py-4 flex items-center justify-between gap-2 bg-black/[0.015] dark:bg-white/[0.015] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors border-r border-black/10 dark:border-white/10">
                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 dark:text-white/50 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
                                            {row.label}
                                        </span>
                                        <span
                                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                                            style={{
                                                backgroundColor: isOpen
                                                    ? isDark
                                                        ? "rgba(255,255,255,0.12)"
                                                        : "rgba(0,0,0,0.08)"
                                                    : "transparent",
                                                color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
                                            }}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </div>

                                    <div
                                        className="px-5 py-4 border-r border-black/10 dark:border-white/10"
                                        style={{ backgroundColor: tint(pisces.hex, isDark ? "0d" : "07") }}
                                    >
                                        <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                                            {row.pisces.summary}
                                        </p>
                                    </div>

                                    <div
                                        className="px-5 py-4"
                                        style={{ backgroundColor: tint(aquarius.hex, isDark ? "0d" : "07") }}
                                    >
                                        <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                                            {row.aquarius.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:hidden">
                                    <div className="px-4 py-3 bg-black/[0.015] dark:bg-white/[0.015] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 dark:text-white/50">
                                            {row.label}
                                        </span>
                                        <span className="text-black/35 dark:text-white/35 text-sm">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </div>
                                    <div
                                        className="px-4 py-3 border-b border-black/10 dark:border-white/10"
                                        style={{ backgroundColor: tint(pisces.hex, isDark ? "0d" : "07") }}
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: pisces.hex }}>
                                            {pisces.name}
                                        </p>
                                        <p className="text-sm font-semibold text-black dark:text-white">
                                            {row.pisces.summary}
                                        </p>
                                    </div>
                                    <div
                                        className="px-4 py-3"
                                        style={{ backgroundColor: tint(aquarius.hex, isDark ? "0d" : "07") }}
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: aquarius.hex }}>
                                            {aquarius.name}
                                        </p>
                                        <p className="text-sm font-semibold text-black dark:text-white">
                                            {row.aquarius.summary}
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {isOpen && (
                                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] border-t border-black/10 dark:border-white/10">
                                    <div className="hidden md:block bg-black/[0.01] dark:bg-white/[0.01] border-r border-black/10 dark:border-white/10" />

                                    {[
                                        { age: pisces, side: row.pisces },
                                        { age: aquarius, side: row.aquarius },
                                    ].map(({ age, side }, i) => (
                                        <div
                                            key={age.name}
                                            className={`px-5 py-5 ${i === 0 ? "border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10" : ""
                                                }`}
                                            style={{ backgroundColor: tint(age.hex, isDark ? "10" : "08") }}
                                        >
                                            <div className="md:hidden text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: age.hex }}>
                                                {age.name}
                                            </div>

                                            <ul className="space-y-2.5 mb-3">
                                                {side.bullets.map((bullet) => (
                                                    <li
                                                        key={bullet}
                                                        className="flex gap-2.5 text-sm text-black/75 dark:text-white/75 leading-snug"
                                                    >
                                                        <span
                                                            className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                            style={{ backgroundColor: age.hex }}
                                                        />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {side.note && (
                                                <div
                                                    className="flex items-start gap-2 rounded-lg px-3 py-2.5 mt-3"
                                                    style={{ backgroundColor: tint(age.hex, isDark ? "18" : "10") }}
                                                >
                                                    <span className="text-[10px] mt-0.5 flex-shrink-0 font-bold" style={{ color: age.hex }}>
                                                        →
                                                    </span>
                                                    <p className="text-xs leading-relaxed text-black/55 dark:text-white/55">
                                                        {side.note}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}