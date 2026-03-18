"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/providers";

const navItems = [
    { label: "IOS Map", href: "/ios-map" },
    { label: "Core Forces", href: "/core-forces" },
    { label: "Applications", href: "/applications" },
];

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const pathname = usePathname();

    return (
        <header className="h-12 flex items-center justify-between px-6 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black">
            <nav className="flex items-center gap-1">
                {navItems.map(({ label, href }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${active
                                ? "bg-black text-white dark:bg-white dark:text-black font-medium"
                                : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                                }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="p-1.5 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
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
            </button>
        </header>
    );
}
