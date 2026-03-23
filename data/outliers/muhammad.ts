//data/outliers/muhammad.ts
import { OutlierExample } from "@/types/outliers";

export const muhammadOutlierExample: OutlierExample = {
    slug: "muhammad",
    title: "Outlier Spectrum — Muhammad",
    subtitle:
        "A horizontal escalation from solitary seeker to messenger, reciter, law-bearing prophet, and founder of a sacred civilization. Muhammad becomes an outlier by concentrating revelation, authority, community, and political order into one figure.",
    axisStartLabel: "Common",
    axisEndLabel: "Rare",
    axisStartSubLabel: "Higher frequency",
    axisEndSubLabel: "Lower frequency / higher asymmetry",
    levels: [
        {
            id: "seeker",
            title: "A Solitary Seeker of God",
            shortLabel: "Seeker",
            subtitle: "Retreat to Hira",
            rarity: 12,
            description:
                "A man withdrawn from society in search of truth is notable, but still belongs to a familiar spiritual pattern. Many traditions contain ascetics, seekers, and contemplatives.",
        },
        {
            id: "warned-reciter",
            title: "A Man Seized by Revelation",
            shortLabel: "Revelation",
            subtitle: "Iqra",
            rarity: 26,
            description:
                "The decisive escalation begins when Muhammad is not merely searching for truth, but is interrupted by it. He becomes the recipient of a message rather than the author of one.",
        },
        {
            id: "warner",
            title: "A Warner to His People",
            shortLabel: "Warner",
            subtitle: "Meccan Preaching",
            rarity: 38,
            description:
                "Muhammad moves from private encounter to public proclamation. He is no longer only a recipient of revelation, but a voice calling his society to judgment, repentance, and submission to one God.",
        },
        {
            id: "persecuted-prophet",
            title: "A Rejected and Persecuted Prophet",
            shortLabel: "Rejected",
            subtitle: "Opposition in Mecca",
            rarity: 48,
            description:
                "The outlier sharpens through resistance. Muhammad is not simply heard; he is opposed, mocked, and pressured, which pushes the story from teaching into conflict.",
        },
        {
            id: "leader-of-believers",
            title: "Leader of a New Community",
            shortLabel: "Community",
            subtitle: "Hijra to Medina",
            rarity: 62,
            description:
                "A major threshold is crossed when the message becomes embodied in a people. Muhammad is no longer only preacher or prophet, but the organizer of a living religious community.",
        },
        {
            id: "statesman",
            title: "Prophet and Statesman",
            shortLabel: "Statesman",
            subtitle: "Order in Medina",
            rarity: 76,
            description:
                "Muhammad’s asymmetry increases because spiritual authority becomes political authority. He does not merely preach to society; he begins to order it.",
        },
        {
            id: "military-leader",
            title: "Prophet and Military Leader",
            shortLabel: "Commander",
            subtitle: "Badr and Beyond",
            rarity: 86,
            description:
                "Now the figure expands beyond revelation and governance into conflict and defense. Muhammad becomes a leader whose message survives not only in speech, but in struggle.",
        },
        {
            id: "bearer-of-law",
            title: "Bearer of Sacred Law",
            shortLabel: "Law",
            subtitle: "Qur'an and Judgment",
            rarity: 93,
            description:
                "Muhammad is not only the founder of a movement, but the vessel through which divine guidance shapes worship, ethics, law, and communal life.",
        },
        {
            id: "seal-of-prophets",
            title: "Seal of the Prophets",
            shortLabel: "Seal",
            subtitle: "Final Messenger",
            rarity: 98,
            description:
                "At this level the story reaches closure. Muhammad is not one prophet among many, but the culminating messenger in a prophetic chain, giving him exceptional finality.",
        },
        {
            id: "civilizational-founder",
            title: "Founder of a Qur'anic Civilization",
            shortLabel: "Founder",
            subtitle: "Revelation into Empire",
            rarity: 100,
            description:
                "The final extreme. Muhammad concentrates revelation, recitation, law, community, political order, and sacred history into one figure. He is not only a prophet, but a civilizational founder whose message becomes the basis of a world-forming tradition.",
        },
    ],
};