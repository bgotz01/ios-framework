"use client";

export type TriadLeg = {
    icon: string;
    title: string;
    description: string;
    bullets: string[];
    prev: string;
    next: string;
};

export type TriadCardData = {
    subject: string;
    label: string;
    hex: string;
    prevEmpire?: string;
    legs: [TriadLeg, TriadLeg, TriadLeg];
};

export default function TriadCard({ data, openRows, onToggle }: {
    data: TriadCardData;
    openRows: boolean[];
    onToggle: (i: number) => void;
}) {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="mb-3 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-0.5">
                    {data.label}
                </p>
                <h3 className="text-2xl font-bold text-black dark:text-white">{data.subject}</h3>
            </div>

            {/* Rows */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${data.hex}35` }}>
                {data.legs.map((leg, i) => {
                    const isOpen = openRows[i];
                    return (
                        <div key={leg.title} className="border-b last:border-b-0" style={{ borderColor: `${data.hex}25` }}>
                            {/* Trigger */}
                            <button
                                onClick={() => onToggle(i)}
                                className="w-full flex items-center gap-3 px-4 py-3 text-left cursor-pointer transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                                style={{ backgroundColor: isOpen ? `${data.hex}10` : undefined }}
                            >
                                <span className="text-xl flex-shrink-0">{leg.icon}</span>
                                <span className="flex-1 text-base font-bold text-black dark:text-white">{leg.title}</span>
                                <svg
                                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2"
                                    className={`flex-shrink-0 text-black/30 dark:text-white/30 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {/* Content */}
                            {isOpen && (
                                <div className="px-4 py-3 border-t" style={{ borderColor: `${data.hex}20` }}>
                                    <p className="text-sm text-black/50 dark:text-white/50 mb-2">{leg.description}</p>
                                    <ul className="space-y-1.5">
                                        {leg.bullets.map((b) => (
                                            <li key={b} className="flex gap-2 text-sm text-black/70 dark:text-white/70">
                                                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: data.hex }} />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
