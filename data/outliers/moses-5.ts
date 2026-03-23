import type { OutlierExample } from "@/types/outliers";

export const moses5OutlierExample: OutlierExample = {
    slug: "moses-5",
    title: "Outlier Spectrum — Moses",
    subtitle:
        "Five escalating steps from preserved child to civilizational founder.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "chosen-child",
            title: "A Child Preserved by Providence",
            shortLabel: "Basket on the Nile",
            subtitle: "Preserved",
            rarity: 20,
            description:
                "A life spared against overwhelming odds. This signals early that the figure is set apart, but still within familiar heroic patterns.",
        },
        {
            id: "called-prophet",
            title: "A Prophet Called by God",
            shortLabel: "Burning Bush",
            subtitle: "Called",
            rarity: 40,
            description:
                "The decisive shift: Moses is no longer shaped by events, but commissioned by God. Authority now comes from divine command.",
        },
        {
            id: "liberator",
            title: "Liberator of a People",
            shortLabel: "The Exodus",
            subtitle: "Liberator",
            rarity: 65,
            description:
                "The scope expands from individual to nation. Moses becomes the instrument of mass deliverance, transforming history itself.",
        },
        {
            id: "lawgiver",
            title: "Bearer of Divine Law",
            shortLabel: "Mount Sinai",
            subtitle: "Law",
            rarity: 85,
            description:
                "A major escalation: Moses does not only free a people, he gives them structure. Law transforms a group into a lasting order.",
        },
        {
            id: "covenant-founder",
            title: "Founder of a Covenant Civilization",
            shortLabel: "Torah & Nation",
            subtitle: "Covenant",
            rarity: 100,
            description:
                "The final outlier. Moses unites liberation, law, identity, and divine relationship into one figure — establishing a civilization, not just an event.",
        },
    ],
};
