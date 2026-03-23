"use client";

import { InlineLoadingSpinner } from "./LoadingSpinner";

interface ChatLoadingModalProps {
  isVisible: boolean;
  message?: string;
}

export default function ChatLoadingModal({
  isVisible,
  message = "Loading chat...",
}: ChatLoadingModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 flex items-center gap-3">
        <InlineLoadingSpinner />
        <span className="text-foreground">{message}</span>
      </div>
    </div>
  );
}
