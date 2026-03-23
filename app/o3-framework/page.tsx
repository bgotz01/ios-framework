import Image from "next/image";
import O3DeeperInsight from "@/components/O3DeeperInsight";

const laws = [
    {
        title: "Law of Obvious",
        subtitle: "The Signal",
        icon: "/images/icons/o1-icon.png",
        bullets: [
            "What's the most obvious issue or tension?",
            "Who has the incentives?",
            "What idea is being defended?",
        ],
        conclusion: "The most obvious answer is usually the right one."
    },
    {
        title: "Law of Opposites",
        subtitle: "The Swing",
        icon: "/images/icons/o2-icon.png",
        bullets: [
            "What's the inversion of the current failed paradigm?",
            "What's the opposite of what is being marketed to you?",
            "Where is the fringe gaining momentum?",
        ],
        conclusion: "Every paradigm eventually produces the force that will replace it."
    },
    {
        title: "Law of Outliers",
        subtitle: "The Story",
        icon: "/images/icons/o3-icon.png",
        bullets: [
            "What new idea wins the narrative?",
            "Where are the assymmetrical returns?",
            "What event forces the system to turn?",
        ],
        conclusion: "Paradigms shift when an outlier turns tension into transformation."
    }
];

export default function O3Page() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* Header */}
            <div className="mb-14 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                    O³ Framework
                </h1>
                <p className="text-sm text-black/50 dark:text-white/50 mt-2">
                    Obvious • Opposites • Outliers
                </p>
                <p className="text-base font-medium text-black dark:text-white mt-3">
                    Ideas that reshape systems
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {laws.map((law) => (
                    <div
                        key={law.title}
                        className="rounded-xl border border-black/10 dark:border-white/10 p-8 flex flex-col"
                    >
                        {/* Law Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                {law.title}
                            </h2>
                            <Image
                                src={law.icon}
                                alt={law.title}
                                width={48}
                                height={48}
                                className="mx-auto mt-3 object-contain"
                            />
                            <p
                                className="text-xs uppercase tracking-widest mt-2 px-2 py-0.5 rounded inline-block"
                                style={{ backgroundColor: "var(--accent)", color: "#1e3a5f" }}
                            >
                                {law.subtitle}
                            </p>
                        </div>

                        {/* Questions */}
                        <ul className="space-y-2 text-sm text-black/70 dark:text-white/70 pl-4 flex-1">
                            {law.bullets.map((b) => (
                                <li key={b} className="flex gap-2">
                                    <span className="select-none">•</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Conclusion */}
                        <p className="text-sm font-medium text-black dark:text-white mt-6 pt-4 border-t border-black/10 dark:border-white/10">
                            {law.conclusion}
                        </p>
                    </div>
                ))}
            </div>

            {/* Lever Image */}
            <div className="flex justify-center mt-12">
                <Image
                    src="/images/LeverImage.png"
                    alt="Lever"
                    width={600}
                    height={400}
                    className="object-contain"
                />
            </div>

        </div>
    );
}
