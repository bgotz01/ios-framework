import { TimelineData } from "@/components/Timeline";

const harvardTimeline: TimelineData = {
    subject: "Harvard University",
    description: "1636 → Today — How the institution's dominant force shifted across five centuries.",
    eras: [
        {
            period: "17th Century",
            label: "1600s",
            hex: "#92400e",
            dominantForce: "Church",
            bullets: [
                "Founded in 1636 by Puritans to train ministers",
                "Curriculum: Bible, Latin, Greek, Hebrew",
                "Truth = revealed — a God-first system",
            ],
            insight: "Harvard = religious authority factory",
        },
        {
            period: "18th Century",
            label: "1700s",
            hex: "#c2410c",
            dominantForce: "Enlightenment",
            bullets: [
                "Influence of the Enlightenment takes hold",
                "Adds math, science, and philosophy beyond theology",
                "Religion still present, but weakening",
            ],
            insight: "Harvard = hybrid system (faith + reason)",
        },
        {
            period: "19th Century",
            label: "1800s",
            hex: "#1d4ed8",
            dominantForce: "Knowledge / State",
            bullets: [
                "Secularization accelerates",
                "Rise of professional disciplines: law, medicine, science",
                "Charles William Eliot introduces the elective system",
                "Students choose their own specialization",
            ],
            insight: "Harvard = knowledge marketplace",
        },
        {
            period: "20th Century",
            label: "1900s",
            hex: "#7c3aed",
            dominantForce: "State + Capital",
            bullets: [
                "Produces politicians, executives, and intellectual elites",
                "Expansion of Business School (HBS) and policy schools",
                "Heavy research funding — especially post-WWII",
                "Deep ties to U.S. government and defense apparatus",
            ],
            insight: "Harvard = elite pipeline + power network",
        },
        {
            period: "21st Century",
            label: "2000s–Today",
            hex: "#475569",
            dominantForce: "Narrative + Networks",
            bullets: [
                "Massive global institutional brand",
                "Shapes policy, culture, and ideology",
                "Huge endowment + elite alumni network",
                "Kennedy School as a global policy engine",
            ],
            insight: "Harvard = global narrative authority",
        },
    ],
};

export default harvardTimeline;
