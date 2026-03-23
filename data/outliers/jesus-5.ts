import type { OutlierExample } from "@/types/outliers";

export const jesus5OutlierExample: OutlierExample = {
    slug: "jesus-5",
    title: "Outlier Spectrum — Jesus",
    subtitle:
        "Five escalating steps from familiar teacher to absolute theological outlier.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "teacher",
            title: "A Teacher of Truth",
            shortLabel: "Moral Authority",
            subtitle: "Teacher",
            rarity: 20,
            description:
                "A moral teacher who speaks with clarity and authority. Notable, but still within familiar human patterns.",
        },
        {
            id: "miracle-worker",
            title: "A Worker of Miracles",
            shortLabel: "Power Over Nature",
            subtitle: "Miracles",
            rarity: 40,
            description:
                "The figure moves beyond teaching into acts that appear to transcend natural limits, increasing memorability and influence.",
        },
        {
            id: "messiah",
            title: "God in Human Form",
            shortLabel: "The Messiah",
            subtitle: "God Incarnate",
            rarity: 60,
            description:
                "The promised one arrives not as a conquering king but as God himself in human flesh — collapsing the distance between divine and human.",
        },
        {
            id: "divine-sacrifice",
            title: "God Sacrifices Himself",
            shortLabel: "The Crucifixion",
            subtitle: "Sacrifice",
            rarity: 80,
            description:
                "The creator becomes the sacrifice. The highest descends into suffering and death, reversing every expectation of power.",
        },
        {
            id: "resurrection",
            title: "God Conquers Death",
            shortLabel: "The Resurrection",
            subtitle: "Victory Over Death",
            rarity: 100,
            description:
                "The ultimate outlier. Death itself is reversed. The story does not end in tragedy but in transformation — concentrating all of history's tension into a single vindication.",
        },
    ],
};
