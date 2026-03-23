"use client";

import Link from "next/link";

/**
 * Standardized back button component for consistent navigation UI across the app
 * 
 * @example
 * // Simple text link (for headers/breadcrumbs)
 * <StandardBackButton href="/dashboard" title="Back to Dashboard" variant="simple" />
 * 
 * // Elegant gradient button (default - for all content pages)
 * <StandardBackButton href="/nouns" title="Back to Nouns" variant="button" />
 * 
 * // Colorful gradient button with icon (for main navigation)
 * <StandardBackButton href="/spanish" title="Back to Spanish Learning" variant="gradient" icon="🇪🇸" />
 * 
 * // Gray button (for test/lesson contexts)
 * <StandardBackButton href="/lesson" title="Back to Lesson" variant="gray" />
 * 
 * // Extra stylish button (same as button - for premium features)
 * <StandardBackButton href="/premium" title="Back to Premium" variant="stylish" />
 */
interface StandardBackButtonProps {
    href: string;
    title: string;
    variant?: "simple" | "button" | "gradient" | "gray" | "stylish";
    icon?: string;
    className?: string;
}

export default function StandardBackButton({
    href,
    title,
    variant = "button",
    icon,
    className = "",
}: StandardBackButtonProps) {
    const baseClasses = "inline-flex items-center gap-2 font-medium transition-all mb-6";

    const variantClasses = {
        simple: "text-muted-foreground hover:text-foreground transition-colors",
        button: "group relative bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 hover:from-slate-200 hover:via-slate-50 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:via-slate-600 dark:hover:to-slate-700 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-slate-300 dark:border-slate-600 transform hover:-translate-y-1 backdrop-blur-md transition-all duration-300",
        gradient: "group relative bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 hover:from-red-600 hover:via-yellow-600 hover:to-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        gray: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg",
        stylish: "group relative bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 hover:from-slate-200 hover:via-slate-50 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:via-slate-600 dark:hover:to-slate-700 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-slate-300 dark:border-slate-600 transform hover:-translate-y-1 backdrop-blur-md transition-all duration-300"
    };

    const content = (
        <>
            {variant === "gradient" && icon && (
                <span className="text-lg group-hover:animate-pulse">{icon}</span>
            )}
            <span className="flex items-center gap-2">
                {variant === "gradient" ? (
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                ) : (
                    <span>←</span>
                )}
                {title}
            </span>
            {variant === "gradient" && (
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
        </>
    );

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {content}
        </Link>
    );
}