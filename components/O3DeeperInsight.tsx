const accent = { backgroundColor: "var(--accent)", color: "#1e3a5f" };

function Badge({ children }: { children: React.ReactNode }) {
    return <span className="text-xs font-semibold px-2 py-0.5 rounded shrink-0" style={accent}>{children}</span>;
}

function MiniTable({ headers, rows }: { headers: [string, string]; rows: [string, string][] }) {
    return (
        <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden text-sm mt-3">
            <div className="grid grid-cols-2 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
                {headers.map((h, i) => (
                    <div key={h} className={`px-3 py-2 text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 ${i === 0 ? "border-r border-black/10 dark:border-white/10" : ""}`}>{h}</div>
                ))}
            </div>
            {rows.map(([a, b]) => (
                <div key={a} className="grid grid-cols-2 border-b last:border-b-0 border-black/10 dark:border-white/10">
                    <div className="px-3 py-2 text-black/60 dark:text-white/60 border-r border-black/10 dark:border-white/10">{a}</div>
                    <div className="px-3 py-2 text-black/60 dark:text-white/60">{b}</div>
                </div>
            ))}
        </div>
    );
}

export default function O3DeeperInsight() {
    return (
        <div className="mt-16 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/30 dark:text-white/30">The deeper insight</p>

            {/* Intro */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
                <p className="text-base text-black/70 dark:text-white/70 mb-4">
                    The framework maps how ideas reshape reality. It asks three questions:
                </p>
                <div className="flex flex-col gap-2 mb-4">
                    {[
                        "What problem makes the current system obvious?",
                        "What opposite idea challenges it?",
                        "What outlier makes the idea dominant?",
                    ].map((q, i) => (
                        <div key={q} className="flex gap-3 text-sm text-black/60 dark:text-white/60">
                            <Badge>{i + 1}</Badge>
                            <span>{q}</span>
                        </div>
                    ))}
                </div>
                <p className="text-sm font-medium text-black dark:text-white">That is the arc of an idea.</p>
            </div>

            {/* 1. Obvious */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Badge>1</Badge>
                    <h3 className="text-sm font-semibold text-black dark:text-white">Obvious — The Signal</h3>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 mb-3">An obvious problem becomes visible, creating intellectual pressure.</p>
                <ul className="space-y-1">
                    {["Corruption in religious authority", "Centralized control of information", "Stale musical conventions", "Slow institutional systems"].map((e) => (
                        <li key={e} className="flex gap-2 text-sm text-black/60 dark:text-white/60">
                            <span className="select-none shrink-0">•</span><span>{e}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-xs text-black/40 dark:text-white/40 italic mt-4 pt-3 border-t border-black/10 dark:border-white/10">"Why does the system work this way?" — This is where the signal appears.</p>
            </div>

            {/* 2. Opposites */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Badge>2</Badge>
                    <h3 className="text-sm font-semibold text-black dark:text-white">Opposites — The Swing</h3>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 mb-1">Someone proposes an idea that inverts the existing paradigm.</p>
                <MiniTable
                    headers={["Old Idea", "Opposite Idea"]}
                    rows={[
                        ["Many gods tied to place", "One universal God"],
                        ["Institutional media", "Decentralized publishing"],
                        ["Corporate music", "Underground counterculture"],
                    ]}
                />
                <p className="text-xs text-black/40 dark:text-white/40 italic mt-4 pt-3 border-t border-black/10 dark:border-white/10">The swing of the intellectual pendulum.</p>
            </div>

            {/* 3. Outliers */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Badge>3</Badge>
                    <h3 className="text-sm font-semibold text-black dark:text-white">Outliers — The Story</h3>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 mb-1">An outlier becomes the form, movement, or technology that embodies the new paradigm.</p>
                <MiniTable
                    headers={["Domain", "Outlier"]}
                    rows={[
                        ["Religion", "Christianity"],
                        ["Internet", "Social media"],
                        ["Music", "Punk"],
                        ["Communication", "Twitter"],
                    ]}
                />
                <p className="text-xs text-black/40 dark:text-white/40 italic mt-4 pt-3 border-t border-black/10 dark:border-white/10">What once seemed fringe becomes the defining story of the new era.</p>
            </div>
        </div>
    );
}
