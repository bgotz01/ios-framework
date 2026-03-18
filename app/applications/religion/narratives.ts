import { FoundationalNarrativesData } from "@/app/components/FoundationalNarratives";

export const judaismNarratives: FoundationalNarrativesData = {
    subject: "Judaism",
    narratives: [
        {
            title: "The Covenant with Abraham",
            reference: "Genesis 12 / 15 / 17",
            coreIdea: "A personal covenant between God and a people",
            narrative: [
                "God calls Abraham to leave his homeland",
                "Promises him descendants and land",
                "Establishes a binding covenant between God and Abraham's lineage",
            ],
            whyItMatters: {
                summary: "This introduces the first radical outlier.",
                before: ["tied to geography", "tied to temples", "tied to priestly mediation"],
                after: ["a relationship between a universal God and a people"],
            },
            keyMoment: "Abraham leaving his homeland because of a divine promise.",
            outlierLabel: "The Covenant",
        },
        {
            title: "The Exodus and the Red Sea",
            reference: "Exodus 14",
            coreIdea: "God directly intervenes in history",
            narrative: [
                "Israelites enslaved in Egypt",
                "Moses leads them out",
                "Pharaoh pursues",
                "The Red Sea parts",
            ],
            whyItMatters: {
                summary: "This establishes the identity of Israel as a people chosen and delivered by God. Religion is not just ritual — it is history, liberation, and destiny. The Exodus becomes the central mythic memory of Judaism.",
            },
            keyMoment: "The crossing of the Red Sea.",
        },
        {
            title: "The Law at Sinai",
            reference: "Exodus 19–20",
            coreIdea: "Divine law governs society",
            narrative: [
                "God appears on Mount Sinai",
                "Moses receives the commandments",
                "Israel becomes a people governed by divine law",
            ],
            whyItMatters: {
                before: ["ritual appeasement"],
                after: ["law, ethics, and moral order"],
            },
            keyMoment: "Moses receiving the commandments on Mount Sinai.",
            outlierLabel: "The Law",
        },
    ],
};

export const egyptNarratives: FoundationalNarrativesData = {
    subject: "Pagan / Egyptian Religion",
    narratives: [
        {
            title: "Creation",
            reference: "Atum / Ra creates the world",
            coreIdea: "The universe emerges from chaos into order.",
            narrative: [
                "Primeval waters (Nun)",
                "The creator god emerges",
                "The world is formed",
                "The gods generate the cosmos",
            ],
            whyItMatters: {
                summary: "Religion explains how order came from chaos. The role of humans is to maintain that order.",
            },
            keyMoment: "The creator god rising from the primeval waters to form the world.",
            outlierLabel: "Ma'at",
        },
        {
            title: "Divine Kingship",
            reference: "Horus vs Seth",
            coreIdea: "The ruler embodies the divine order.",
            narrative: [
                "Osiris murdered by Seth",
                "Horus avenges him",
                "Horus becomes rightful king",
            ],
            whyItMatters: {
                summary: "The myth justifies the Pharaoh's authority. Pharaoh is not merely chosen by God — he is the living manifestation of Horus. Religion therefore legitimizes political hierarchy.",
            },
            keyMoment: "Horus defeating Seth and ascending as the rightful king.",
        },
        {
            title: "Death and Resurrection",
            reference: "Osiris resurrected",
            coreIdea: "Death is a passage to eternal life.",
            narrative: [
                "Osiris killed by Seth",
                "Isis resurrects him",
                "Osiris becomes ruler of the underworld",
            ],
            whyItMatters: {
                summary: "Religion provides the structure of the afterlife.",
                after: ["judgment of the soul", "weighing of the heart", "eternal life in the Field of Reeds"],
            },
            keyMoment: "Isis resurrecting Osiris, establishing death as a passage rather than an end.",
        },
    ],
};
