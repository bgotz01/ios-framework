import type { OutlierExample } from "@/types/outliers";

export const jesusOutlierExample: OutlierExample = {
    slug: "jesus",
    title: "Outlier Spectrum — Jesus",
    subtitle:
        "A horizontal escalation from familiar archetype to singular theological extreme. As frequency falls, narrative force rises.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "High frequency",
    axisEndSubLabel: "Low frequency / high asymmetry",
    levels: [
        {
            id: "teacher",
            title: "Teacher",
            shortLabel: "Teacher",
            subtitle: "Sermon on the Mount",
            rarity: 10,
            frequency: 92,
            description:
                "A moral teacher is notable, but still familiar. Many traditions produce wise instructors.",
        },
        {
            id: "healer",
            title: "Healer",
            shortLabel: "Healer",
            subtitle: "Blind See, Lame Walk",
            rarity: 18,
            frequency: 82,
            description:
                "Healing raises the figure beyond ordinary teaching, but still remains within a recognizable religious pattern.",
        },
        {
            id: "followers",
            title: "Leader with Followers",
            shortLabel: "Followers",
            subtitle: "Twelve Disciples",
            rarity: 26,
            frequency: 72,
            description:
                "Charisma plus disciples makes the figure more distinct, but history contains many movements built around a leader.",
        },
        {
            id: "miracles",
            title: "Miracle Worker",
            shortLabel: "Miracles",
            subtitle: "Water to Wine, Lazarus",
            rarity: 38,
            frequency: 56,
            description:
                "Now the figure begins to exceed normal expectation. Miracles create memorability and narrative force.",
        },
        {
            id: "prophet",
            title: "Prophet from God",
            shortLabel: "Prophet",
            subtitle: "Voice in the Wilderness",
            rarity: 50,
            frequency: 42,
            description:
                "The figure is no longer merely gifted, but becomes a messenger carrying divine authority.",
        },
        {
            id: "messiah",
            title: "Messiah / Savior Figure",
            shortLabel: "Messiah",
            subtitle: "King of Kings",
            rarity: 63,
            frequency: 30,
            description:
                "The scope widens from local teacher to world-historical role. The figure becomes central to collective destiny.",
        },
        {
            id: "son-of-god",
            title: "Son of God",
            shortLabel: "Son of God",
            subtitle: "Baptism & Transfiguration",
            rarity: 76,
            frequency: 20,
            description:
                "The story moves beyond prophecy into metaphysical exception. Human and divine begin to converge.",
        },
        {
            id: "incarnate",
            title: "God Incarnate",
            shortLabel: "Incarnate",
            subtitle: "The Word Made Flesh",
            rarity: 88,
            frequency: 12,
            description:
                "This is a major leap in asymmetry: the source of reality enters history in human form.",
        },
        {
            id: "sacrifice",
            title: "God Sacrifices Himself",
            shortLabel: "Sacrifice",
            subtitle: "Crucifixion",
            rarity: 95,
            frequency: 6,
            description:
                "The highest descends into humiliation and death. Judge becomes sacrifice, creator enters suffering, and redemption is concentrated into one singular act.",
        },
        {
            id: "resurrection",
            title: "God Conquers Death",
            shortLabel: "Resurrection",
            subtitle: "The Empty Tomb",
            rarity: 100,
            frequency: 2,
            description:
                "The final extreme. Death itself is reversed. The story does not end in tragedy but in vindication — transforming defeat into the ultimate outlier event.",
        },
    ],
};
