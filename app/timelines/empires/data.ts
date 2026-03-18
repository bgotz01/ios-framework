import { TimelineData } from "@/components/Timeline";

const empiresTimeline: TimelineData = {
    subject: "Western Power Model by Century",
    description:
        "1500s → 1900s — Each century highlights the Western power that best represents the next major inversion in how power was built.",
    eras: [
        {
            period: "16th Century",
            label: "1500s",
            hex: "#8b5e34",
            dominantForce: "Portugal",
            sequenceLabel: "Routes",
            bullets: [
                "Opened the oceanic system by establishing the sea route to India",
                "Built strategic trading posts and chokepoints from Africa to Asia",
                "Shifted Western power from regional land politics to maritime global reach",
            ],
            summary: "Routes + chokepoints + maritime monopoly",
            invertsFrom:
                "Instead of land-bound regional power, Portugal opened repeatable oceanic routes and strategic port control.",
        },
        {
            period: "17th Century",
            label: "1600s",
            hex: "#92400e",
            dominantForce: "Spanish Empire",
            sequenceLabel: "Conquest",
            bullets: [
                "Scaled overseas expansion into continental conquest across the Americas",
                "Turned silver extraction into a global monetary engine",
                "Fused imperial expansion with Catholic mission and dynastic power",
            ],
            summary: "Conquest + extraction + religious empire",
            invertsFrom:
                "Instead of controlling routes alone, Spain used the opened sea system to seize land, mine wealth, and scale empire.",
        },
        {
            period: "18th Century",
            label: "1700s",
            hex: "#c2410c",
            dominantForce: "Dutch Republic",
            sequenceLabel: "Trade + Finance",
            bullets: [
                "Inverted land empire into trade empire through ports, shipping, and flows",
                "Pioneered finance at scale through the VOC, exchanges, and credit",
                "Made merchant pragmatism more powerful than sacred monarchy",
            ],
            summary: "Trade + finance + commercial republic",
            invertsFrom:
                "Instead of heavy conquest and silver extraction, the Dutch made trade flows, capital markets, and merchant coordination the new power base.",
        },
        {
            period: "19th Century",
            label: "1800s",
            hex: "#1d4ed8",
            dominantForce: "British Empire",
            sequenceLabel: "Industry + System",
            bullets: [
                "Industrialized power through mass production, coal, and steam",
                "Enforced the global system through naval supremacy and chokepoint control",
                "Exported law, language, governance, and standards across the world",
            ],
            summary: "Industry + navy + rule-setting system",
            invertsFrom:
                "Instead of merely moving goods and money, Britain industrialized production and enforced a global operating system.",
        },
        {
            period: "20th Century",
            label: "1900s",
            hex: "#b91c1c",
            dominantForce: "United States",
            sequenceLabel: "Abstraction",
            bullets: [
                "Rebuilt the world order around the dollar after World War II",
                "Replaced colonial administration with a global security umbrella",
                "Projected culture, media, and technology as a worldwide narrative layer",
            ],
            summary: "Dollar + security + narrative",
            invertsFrom:
                "Instead of ruling primarily through empire and industry, the U.S. abstracted power into money, security architecture, and perception.",
        },
    ],
};

export default empiresTimeline;