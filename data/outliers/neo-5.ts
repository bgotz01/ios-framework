import type { OutlierExample } from "@/types/outliers";

export const neo5OutlierExample: OutlierExample = {
    slug: "neo-5",
    title: "Outlier Spectrum — Neo",
    subtitle:
        "Five escalating steps from choosing truth to perceiving the code of reality.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "red-pill",
            title: "He Chooses the Red Pill",
            shortLabel: "Red Pill",
            subtitle: "Leaves the Illusion",
            rarity: 40,
            description:
                "He chooses to leave the world he knows, stepping into an unknown and irreversible reality.",
        },
        {
            id: "training",
            title: "He Learns Skills Instantly",
            shortLabel: "Downloads Skills",
            subtitle: "Knowledge Downloaded",
            rarity: 60,
            description:
                "He acquires complex abilities in seconds, breaking normal limits of learning.",
        },
        {
            id: "bullet-dodge",
            title: "He Dodges Bullets in Mid-Air",
            shortLabel: "Dodges Bullets",
            subtitle: "Bending the Rules",
            rarity: 80,
            description:
                "A defining visual moment — he moves in ways that defy the apparent laws of reality.",
        },
        {
            id: "death",
            title: "He Is Killed Inside the System",
            shortLabel: "Dies",
            subtitle: "The System Wins",
            rarity: 95,
            description:
                "He is shot and killed, showing that even he is still bound by the system’s rules.",
        },
        {
            id: "love",
            title: "Love Brings Him Back to Life",
            shortLabel: "Love",
            subtitle: "Beyond the System",
            rarity: 100,
            description:
                "The core outlier. He returns not through power or skill, but through love — something the system cannot account for.",
        }
    ],
};
