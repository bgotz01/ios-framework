const rows = [
    { o3: "Obvious", system: "Incentives", expression: "Signal" },
    { o3: "Opposites", system: "Inversion", expression: "Swing" },
    { o3: "Outliers", system: "Inflection", expression: "Story" },
];

const descriptions: Record<string, string> = {
    Obvious: "The current paradigm and its obvious problem.",
    Opposites: "The emerging counterforce that contradicts it.",
    Outliers: "The catalyst that flips the system.",
};

export default function IOSMapPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 flex flex-col items-center">
            {/* Header */}
            <div className="mb-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">
                    Framework
                </p>

                <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                    O³
                </h1>

                <p className="text-sm text-black/50 dark:text-white/50 mt-1">
                    Obvious • Opposites • Outliers
                </p>

                <p className="text-sm text-black/60 dark:text-white/60 mt-4 max-w-lg mx-auto">
                    Identify the <span className="font-medium text-black dark:text-white">Obvious</span> system,
                    the <span className="font-medium text-black dark:text-white">Opposite</span> force forming,
                    and the <span className="font-medium text-black dark:text-white">Outlier</span> that could flip the paradigm.
                </p>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden w-full">
                {/* Header */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
                    {["O³", "System", "Expression"].map((col, i) => (
                        <div
                            key={col}
                            className={`px-5 py-3 text-xs font-semibold uppercase tracking-widest text-black/40 dark:text-white/40 ${i < 2 ? "border-r border-black/10 dark:border-white/10" : ""
                                }`}
                        >
                            {col}
                        </div>
                    ))}
                </div>

                {/* Rows */}
                {rows.map((row, i) => (
                    <div
                        key={row.o3}
                        className={`grid grid-cols-[1.5fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-black/10 dark:border-white/10" : ""
                            }`}
                    >
                        <div className="px-5 py-5 border-r border-black/10 dark:border-white/10">
                            <p className="text-base font-semibold text-black dark:text-white">
                                {row.o3}
                            </p>
                            <p className="text-xs text-black/40 dark:text-white/40 mt-1">
                                {descriptions[row.o3]}
                            </p>
                        </div>

                        <div className="px-5 py-5 border-r border-black/10 dark:border-white/10 flex items-center">
                            <p className="text-sm text-black/80 dark:text-white/80">
                                {row.system}
                            </p>
                        </div>

                        <div className="px-5 py-5 flex items-center">
                            <p className="text-sm text-black/80 dark:text-white/80">
                                {row.expression}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}