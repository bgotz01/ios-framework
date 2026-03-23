"use client";

import Link from "next/link";

interface ErrorStateProps {
  error: string;
  title?: string;
  description?: string;
  backLink?: {
    href: string;
    label: string;
  };
  actionButton?: React.ReactNode;
}

export default function ErrorState({
  error,
  title,
  description,
  backLink = {
    href: "/arc/languages/spanish",
    label: "Back to Spanish Learning Hub",
  },
  actionButton,
}: ErrorStateProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <div className="py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {title || error || "Something went wrong"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {description ||
            "The resource you're looking for doesn't exist or you don't have access to it."}
        </p>
        {actionButton || (
          <Link
            href={backLink.href}
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            {backLink.label}
          </Link>
        )}
      </div>
    </div>
  );
}
