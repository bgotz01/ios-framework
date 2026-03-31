import type { OutlierExample } from "@/types/outliers";

export const steveJobs5OutlierExample: OutlierExample = {
    slug: "steve-jobs-5",
    title: "Outlier Spectrum — Steve Jobs",
    subtitle:
        "Five escalating steps from spiritual seeker to architect of a digital world.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "seeker",
            title: "A Young Man Searches for Meaning",
            shortLabel: "Seeker",
            subtitle: "India & Psychedelics",
            rarity: 25,
            description:
                "A person explores spirituality and altered perception in search of deeper understanding.",
        },
        {
            id: "garage",
            title: "He Builds Computers in a Garage",
            shortLabel: "Garage",
            subtitle: "Start from Nothing",
            rarity: 45,
            description:
                "He begins creating technology from the ground up, outside traditional institutions.",
        },
        {
            id: "pc",
            title: "He Helps Create the Personal Computer",
            shortLabel: "PC",
            subtitle: "Computers for Individuals",
            rarity: 70,
            description:
                "Computing shifts from large systems to something individuals can own and use.",
        },
        {
            id: "art-tech",
            title: "He Merges Technology with Art and Design",
            shortLabel: "Art + Tech",
            subtitle: "Beauty Meets Function",
            rarity: 90,
            description:
                "Technology becomes intuitive, aesthetic, and emotionally engaging — not just functional.",
        },
        {
            id: "iphone",
            title: "A Device Becomes an Entire World in Your Hand",
            shortLabel: "Connects World",
            subtitle: "App Ecosystem",
            rarity: 100,
            description:
                "The core outlier. A single device becomes a platform for communication, work, media, and services — compressing an entire digital ecosystem into your hand.",
        },
    ],
};
