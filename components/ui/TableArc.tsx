// components/ui/TableArc.tsx
"use client";

interface TableArcProps {
  className?: string;
}

export default function TableArc({ className = "" }: TableArcProps) {
  return (
    <div
      className={`relative w-full h-16 overflow-hidden bg-o3-bg ${className}`}
    >
      {/* SVG Arc */}
      <svg
        viewBox="0 0 800 120"
        className="absolute inset-0 w-full h-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tableArcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(51 65 85)" stopOpacity="0.6" />
            <stop offset="30%" stopColor="rgb(100 116 139)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="rgb(148 163 184)" stopOpacity="0.2" />
            <stop
              offset="100%"
              stopColor="rgb(203 213 225)"
              stopOpacity="0.1"
            />
          </linearGradient>

          {/* Dark mode gradient */}
          <linearGradient id="tableArcGradDark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="30%" stopColor="white" stopOpacity="0.2" />
            <stop offset="70%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Main arc path - curved from left to right */}
        <g className="dark:hidden">
          <path
            d="M50 100 C200 20, 600 20, 750 100"
            stroke="url(#tableArcGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M80 95 C220 30, 580 30, 720 95"
            stroke="url(#tableArcGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
        </g>

        {/* Dark mode arcs */}
        <g className="hidden dark:block">
          <path
            d="M50 100 C200 20, 600 20, 750 100"
            stroke="url(#tableArcGradDark)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M80 95 C220 30, 580 30, 720 95"
            stroke="url(#tableArcGradDark)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
