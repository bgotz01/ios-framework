//components/ui/tooltip.tsx
import * as React from "react";
import { createPortal } from "react-dom";

// Lightweight tooltip using group-hover (no portal needed).
export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block group/tooltip">{children}</div>;
}

export function TooltipTrigger({
  asChild = false,
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: `${(children as any).props?.className || ""} group/tooltip`.trim(),
    });
  }
  return (
    <span className="group/tooltip cursor-help inline-flex items-center">
      {children}
    </span>
  );
}

export function TooltipContent({
  className = "",
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
}: {
  className?: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const trigger = triggerRef.current?.closest('.group\\/tooltip');
    if (!trigger) return;

    const handleMouseEnter = () => {
      const rect = trigger.getBoundingClientRect();
      let top = 0;
      let left = 0;

      // Calculate position based on side
      switch (side) {
        case "top":
          top = rect.top - sideOffset;
          break;
        case "bottom":
          top = rect.bottom + sideOffset;
          break;
        case "left":
          top = rect.top + rect.height / 2;
          left = rect.left - sideOffset;
          break;
        case "right":
          top = rect.top + rect.height / 2;
          left = rect.right + sideOffset;
          break;
      }

      // Calculate horizontal position based on align
      if (side === "top" || side === "bottom") {
        switch (align) {
          case "start":
            left = rect.left;
            break;
          case "center":
            left = rect.left + rect.width / 2;
            break;
          case "end":
            left = rect.right;
            break;
        }
      }

      setPosition({ top, left });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    trigger.addEventListener('mouseenter', handleMouseEnter);
    trigger.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      trigger.removeEventListener('mouseenter', handleMouseEnter);
      trigger.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [side, align, sideOffset]);

  // Transform classes based on side and align
  const getTransformClass = () => {
    if (side === "top" || side === "bottom") {
      switch (align) {
        case "start":
          return side === "top" ? "-translate-y-full" : "";
        case "center":
          return side === "top" ? "-translate-x-1/2 -translate-y-full" : "-translate-x-1/2";
        case "end":
          return side === "top" ? "-translate-x-full -translate-y-full" : "-translate-x-full";
      }
    }
    // For left/right sides
    return "";
  };

  if (typeof window === 'undefined' || !isVisible || !position) {
    return <div ref={triggerRef} className="hidden" />;
  }

  return (
    <>
      <div ref={triggerRef} className="hidden" />
      {createPortal(
        <div
          className={`fixed z-[9999] pointer-events-none ${getTransformClass()} rounded-md border border-tooltip-border bg-tooltip-bg dark:bg-tooltip-bg-dark text-tooltip-text dark:text-tooltip-text-dark shadow-xl ${className}`}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
}
