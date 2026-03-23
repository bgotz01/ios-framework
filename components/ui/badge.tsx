import * as React from "react";

const badgeVariants = {
  default: "ring-white/20 dark:ring-white/20 bg-white/10 dark:bg-white/10",
  secondary: "ring-slate-200 dark:ring-white/15 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white/70",
  destructive: "ring-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
  outline: "ring-slate-300 dark:ring-white/30 bg-transparent",
};

export function Badge({
  className = "",
  variant = "default",
  children,
}: {
  className?: string;
  variant?: keyof typeof badgeVariants;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1 ${className || badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
}
