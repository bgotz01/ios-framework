import type { OutlierExample } from "@/types/outliers";

export const muhammad5OutlierExample: OutlierExample = {
    slug: "muhammad-5",
    title: "Outlier Spectrum — Muhammad",
    subtitle:
        "Five escalating steps from solitary seeker to seal of prophecy.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "isolation",
            title: "A Man Alone in Isolation",
            shortLabel: "Isolation",
            subtitle: "Withdrawal from Society",
            rarity: 15,
            description:
                "A person separates from society in search of clarity or reflection. This is familiar across cultures and not yet an outlier.",
        },
        {
            id: "encounter",
            title: "An Overwhelming Encounter with a Higher Force",
            shortLabel: "Encounter",
            subtitle: "Seized by an External Voice",
            rarity: 40,
            description:
                "A decisive shift: the figure is no longer acting freely, but is confronted by an external force or message that claims authority over him.",
        },
        {
            id: "recites-book",
            title: "A Man Recites a Sacred Text",
            shortLabel: "Text",
            subtitle: "Message Becomes Scripture",
            rarity: 65,
            description:
                "The message is preserved and structured into a coherent text. The outlier deepens as spoken words become lasting scripture.",
        },
        {
            id: "builds-following",
            title: "A Man Builds a Unified Community",
            shortLabel: "Community",
            subtitle: "Belief Becomes Collective",
            rarity: 85,
            description:
                "The message gathers people into a shared identity. It is no longer individual belief, but a social force.",
        },
        {
            id: "forms-civilization",
            title: "A Message Becomes a Civilization",
            shortLabel: "Civilization",
            subtitle: "Belief Becomes System",
            rarity: 100,
            description:
                "The final outlier. A single message evolves into a lasting system shaping law, identity, and society across generations.",
        },
    ]
};
