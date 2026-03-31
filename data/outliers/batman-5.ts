import type { OutlierExample } from "@/types/outliers";

export const batman5OutlierExample: OutlierExample = {
    slug: "batman-5",
    title: "Outlier Spectrum — Batman",
    subtitle:
        "Five escalating steps from traumatized child to symbol of fear.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "trauma",
            title: "A Child Witnesses His Parents' Murder",
            shortLabel: "Origin",
            subtitle: "Trauma Creates Purpose",
            rarity: 25,
            description:
                "A defining traumatic event shapes the individual's path. This is powerful, but not unique.",
        },
        {
            id: "training",
            title: "A Man Trains to Human Limits",
            shortLabel: "Training",
            subtitle: "Peak Human Ability",
            rarity: 45,
            description:
                "Through discipline and resources, he pushes himself to the edge of human capability.",
        },
        {
            id: "vigilante",
            title: "A Man Becomes a Masked Vigilante",
            shortLabel: "Vigilante",
            subtitle: "Operates Outside the Law",
            rarity: 65,
            description:
                "He adopts a persona and takes justice into his own hands.",
        },
        {
            id: "alone-fight",
            title: "A Man Fights Crime Alone Without Powers or Backup",
            shortLabel: "Alone",
            subtitle: "No Powers. No Army.",
            rarity: 85,
            description:
                "He directly confronts criminals without superhuman abilities, without an army, and without institutional support.",
        },
        {
            id: "symbol",
            title: "A Man Becomes a Symbol Criminals Fear",
            shortLabel: "Symbol",
            subtitle: "Fear for Criminals Only",
            rarity: 100,
            description:
                "The core outlier. He becomes something criminals fear before they see him, while protecting ordinary people.",
        }
    ],
};
