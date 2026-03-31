'use client'

export function PressureStabilityBar() {
    return (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-red-500 text-sm">🔺</span>
                        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                            Internal Pressure Stack
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Debt ↑', 'Inequality ↑', 'Polarization ↑', 'State intervention ↑'].map((item) => (
                            <span key={item} className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs text-red-500 font-medium">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-500 text-sm">🔻</span>
                        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                            System Stability Base
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Trust ↓', 'Cohesion ↓', 'Global dominance ↓', 'Military edge ↓'].map((item) => (
                            <span key={item} className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs text-blue-500 font-medium">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                <div className="flex items-center gap-1.5">
                    <span className="text-green-500 text-sm">🟢</span>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                        Still Strong / Resilient
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['Innovation Capacity ↑', 'Capital Markets ↑', 'Entrepreneurial Culture ↑', 'Debt Issuance Power ↑', 'Geographic Advantage ↑'].map((item) => (
                        <span key={item} className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs text-green-500 font-medium">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
