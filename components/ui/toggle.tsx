import * as React from "react";

export function Toggle({
  pressed,
  onPressedChange,
  children,
  className = "",
}: {
  pressed?: boolean;
  onPressedChange?: (v: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOn, setIsOn] = React.useState(!!pressed);
  return (
    <button
      onClick={() => {
        const v = !isOn;
        setIsOn(v);
        onPressedChange?.(v);
      }}
      className={`inline-flex items-center rounded-xl px-3 py-1.5 text-xs ring-1 ring-white/20 ${
        isOn ? "bg-white/20" : "bg-transparent"
      } ${className}`}
    >
      {children}
    </button>
  );
}
