"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import type { OutlierExample, OutlierLevel } from "@/types/outliers";

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function getFrequency(level: OutlierLevel) {
    if (typeof level.frequency === "number") return level.frequency;
    return clamp(100 - level.rarity, 2, 100);
}

type Props = {
    example: OutlierExample;
    initialLevelId?: string;
};

export default function OutlierSpectrumCompact({ example, initialLevelId }: Props) {
    const [activeId, setActiveId] = useState<string>(
        initialLevelId ?? example.levels[example.levels.length - 1]?.id ?? ""
    );
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const active = useMemo(() => {
        return (
            example.levels.find((l) => l.id === activeId) ??
            example.levels[example.levels.length - 1]
        );
    }, [activeId, example.levels]);

    const activeIndex = example.levels.findIndex((l) => l.id === active.id);

    return (
        <section className="w-full rounded-[28px] border border-white/10 bg-black text-white shadow-2xl">
            {/* Header */}
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    <Sparkles className="h-3.5 w-3.5" />
                    Law of Outliers
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {example.title}
                    </h2>
                    {example.subtitle && (
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65 md:text-base">
                            {example.subtitle}
                        </p>
                    )}
                </div>
            </div>

            <div className="px-4 py-6 md:px-6 md:py-8">
                {/* Axis */}
                <div className="mb-6 px-2">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/90">
                        <span>{example.axisStartLabel ?? "Common"}</span>
                        <span>{example.axisEndLabel ?? "Rare"}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-white/25 via-white/20 to-white/70" />
                        <ArrowRight className="h-4 w-4 shrink-0 text-white/70" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/70">
                        <span>{example.axisStartSubLabel ?? "High frequency"}</span>
                        <span>{example.axisEndSubLabel ?? "Low frequency / high asymmetry"}</span>
                    </div>
                </div>

                {/* Labels row */}
                <div className="px-2 pb-4 border-b border-white/10">
                    <div
                        className="grid gap-4"
                        style={{
                            gridTemplateColumns: `repeat(${example.levels.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {example.levels.map((level, index) => {
                            const isHovered = level.id === hoveredId;
                            const isActive = level.id === active.id;
                            const isPastOrActive = index <= activeIndex;

                            return (
                                <button
                                    key={level.id}
                                    type="button"
                                    onClick={() => setActiveId(level.id)}
                                    onMouseEnter={() => setHoveredId(level.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`flex flex-col items-center text-center outline-none rounded-lg px-2 py-2 transition-colors ${isHovered ? "bg-white/10" : ""}`}
                                >
                                    <div
                                        className={`text-base font-semibold leading-5 md:text-lg ${isHovered || isActive
                                            ? "text-white"
                                            : isPastOrActive
                                                ? "text-white/75"
                                                : "text-white/40"
                                            }`}
                                    >
                                        {level.shortLabel ?? level.title}
                                    </div>
                                    {level.subtitle && (
                                        <div
                                            className={`mt-1 text-sm leading-4 ${isHovered || isActive
                                                ? "text-white/70"
                                                : isPastOrActive
                                                    ? "text-white/40"
                                                    : "text-white/25"
                                                }`}
                                        >
                                            {level.subtitle}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Chart row */}
                <div className="relative px-2 pt-6">
                    <div
                        className="grid gap-4"
                        style={{
                            gridTemplateColumns: `repeat(${example.levels.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {example.levels.map((level, index) => {
                            const isActive = level.id === active.id;
                            const isPastOrActive = index <= activeIndex;

                            const nodeSize = clamp(22 + level.rarity * 0.3, 24, 52);
                            const glowSize = clamp(40 + level.rarity * 0.5, 44, 90);
                            const barHeight = clamp(getFrequency(level), 6, 92);

                            return (
                                <button
                                    key={level.id}
                                    type="button"
                                    onClick={() => setActiveId(level.id)}
                                    onMouseEnter={() => setHoveredId(level.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative flex flex-col items-center text-center outline-none"
                                >
                                    <motion.div
                                        layout
                                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                                        className={`mb-3 w-4 rounded-full ${isActive
                                            ? "bg-white"
                                            : isPastOrActive
                                                ? "bg-white/55"
                                                : "bg-white/20"
                                            }`}
                                        style={{ height: `${barHeight}px` }}
                                    />

                                    <div className="relative flex h-[76px] items-center justify-center">
                                        <motion.div
                                            animate={{
                                                opacity: isActive ? 0.55 : isPastOrActive ? 0.18 : 0.06,
                                                scale: isActive ? 1.15 : 1,
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="absolute rounded-full bg-white blur-xl"
                                            style={{ width: glowSize, height: glowSize }}
                                        />
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1.08 : 1,
                                                opacity: isPastOrActive ? 1 : 0.5,
                                            }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                            className={`relative rounded-full border ${isActive
                                                ? "border-white bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                                                : isPastOrActive
                                                    ? "border-white/70 bg-white/10 text-white"
                                                    : "border-white/20 bg-white/5 text-white/60"
                                                }`}
                                            style={{ width: nodeSize, height: nodeSize }}
                                        >
                                            {index === example.levels.length - 1 && (
                                                <div className="absolute inset-[-7px] rounded-full border border-white/35" />
                                            )}
                                        </motion.div>
                                    </div>

                                    <div
                                        className={`mt-3 text-xs uppercase tracking-[0.18em] ${isActive
                                            ? "text-white/70"
                                            : isPastOrActive
                                                ? "text-white/45"
                                                : "text-white/25"
                                            }`}
                                    >
                                        {index + 1}
                                    </div>

                                    {index < example.levels.length - 1 && (
                                        <ChevronRight className="absolute right-[-14px] top-[82px] h-5 w-5 text-white/20" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Detail card */}
                {(() => {
                    const display = example.levels.find((l) => l.id === hoveredId)
                        ?? example.levels.find((l) => l.id === activeId)
                        ?? example.levels[example.levels.length - 1];
                    if (!display) return null;
                    const displayIndex = example.levels.findIndex((l) => l.id === display.id);

                    return (
                        <div className="mt-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={display.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.22 }}
                                    className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 md:p-6"
                                >
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                                        Level {displayIndex + 1}
                                    </div>
                                    <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                                        {display.title}
                                    </h3>
                                    {display.subtitle && (
                                        <p className="mt-1 text-sm text-white/50">
                                            {display.subtitle}
                                        </p>
                                    )}
                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                                        {display.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    );
                })()}
            </div>
        </section>
    );
}
