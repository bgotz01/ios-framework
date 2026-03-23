"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/providers";

const navItems = [
    { label: "IOS Map", href: "/ios-map" },
    { label: "O³ Framework", href: "/o3-framework" },
    { label: "Core Forces", href: "/core-forces" },
    { label: "Applications", href: "/applications" },
];

const mapsItems = [
    { label: "Propaganda", href: "/maps/propaganda" },
];

const timelinesItems = [
    { label: "Harvard", href: "/timelines/harvard" },
    { label: "Empires", href: "/timelines/empires" },
];

const cyclesItems = [
    { label: "Age Cycle", href: "/cycles/age-cycle" },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [mapsOpen, setMapsOpen] = useState(true);
    const [timelinesOpen, setTimelinesOpen] = useState(true);
    const [cyclesOpen, setCyclesOpen] = useState(true);
    const { theme, toggle } = useTheme();
    const pathname = usePathname();

    return (
        <aside
            className={`flex flex-col h-screen bg-white dark:bg-black border-r border-black/10 dark:border-white/10 transition-all duration-300 ${collapsed ? "w-14" : "w-56"
                }`}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 h-12 border-b border-black/10 dark:border-white/10">
                {!collapsed && (
                    <span className="text-sm font-semibold text-black dark:text-white tracking-wide">
                        Menu
                    </span>
                )}
                <button
                    onClick={() => setCollapsed((c) => !c)}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    className="ml-auto p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
                >
                    {collapsed ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
                {navItems.map(({ label, href }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-colors ${active
                                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-medium"
                                : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                                }`}
                        >
                            {!collapsed && <span className="truncate">{label}</span>}
                        </Link>
                    );
                })}

                {/* Maps group */}
                <button
                    onClick={() => setMapsOpen((o) => !o)}
                    className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-full mt-1"
                >
                    {!collapsed && (
                        <>
                            <span className="truncate flex-1 text-left">Maps</span>
                            <svg
                                width="12" height="12" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                className={`transition-transform ${mapsOpen ? "rotate-180" : ""}`}
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </>
                    )}
                </button>
                {mapsOpen && !collapsed && (
                    <div className="flex flex-col gap-1 pl-4">
                        {mapsItems.map(({ label, href }) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors ${active
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                                        : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    <span className="truncate">{label}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Timelines group */}
                <button
                    onClick={() => setTimelinesOpen((o) => !o)}
                    className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-full mt-1"
                >
                    {!collapsed && (
                        <>
                            <span className="truncate flex-1 text-left">Timelines</span>
                            <svg
                                width="12" height="12" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                className={`transition-transform ${timelinesOpen ? "rotate-180" : ""}`}
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </>
                    )}
                </button>
                {timelinesOpen && !collapsed && (
                    <div className="flex flex-col gap-1 pl-4">
                        {timelinesItems.map(({ label, href }) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors ${active
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                                        : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    <span className="truncate">{label}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Cycles group */}
                <button
                    onClick={() => setCyclesOpen((o) => !o)}
                    className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-full mt-1"
                >
                    {!collapsed && (
                        <>
                            <span className="truncate flex-1 text-left">Cycles</span>
                            <svg
                                width="12" height="12" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                className={`transition-transform ${cyclesOpen ? "rotate-180" : ""}`}
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </>
                    )}
                </button>
                {cyclesOpen && !collapsed && (
                    <div className="flex flex-col gap-1 pl-4">
                        {cyclesItems.map(({ label, href }) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors ${active
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                                        : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    <span className="truncate">{label}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>

            {/* Theme toggle */}
            <div className="px-2 pb-4">
                <button
                    onClick={toggle}
                    aria-label="Toggle theme"
                    className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-full"
                >
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        {theme === "dark" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </span>
                    {!collapsed && (
                        <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                    )}
                </button>
            </div>
        </aside>
    );
}
