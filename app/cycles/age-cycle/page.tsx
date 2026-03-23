import AgeComparison from "@/components/AgeComparison";
import Timeline from "@/components/Timeline";
import ageCycleData from "./data";

export default function AgeCyclePage() {
    return (
        <div className="space-y-16">
            <div className="text-center mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/35 dark:text-white/35 mb-3">
                    Cycles
                </p>
                <h1 className="page-title text-black dark:text-white">
                    {ageCycleData.title}
                </h1>
                {ageCycleData.description && (
                    <p className="text-sm text-black/50 dark:text-white/50 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                        {ageCycleData.description}
                    </p>
                )}
            </div>

            <AgeComparison data={ageCycleData} />

            {ageCycleData.transition && (
                <Timeline data={ageCycleData.transition} initialEra={2} />
            )}
        </div>
    );
}
