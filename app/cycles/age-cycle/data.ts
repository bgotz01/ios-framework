export type ComparisonRowKey =
    | "core"
    | "truth"
    | "authority"
    | "structure"
    | "power"
    | "change";

export type AgeData = {
    name: string;
    range: string;
    rulers: string[];
    corePrinciple: string;
    hex: string;
};

export type ComparisonSide = {
    summary: string;
    bullets: string[];
    note?: string;
};

export type ComparisonRow = {
    key: ComparisonRowKey;
    label: string;
    pisces: ComparisonSide;
    aquarius: ComparisonSide;
};

export type AgeComparisonData = {
    title: string;
    description?: string;
    ages: [AgeData, AgeData];
    rows: ComparisonRow[];
};

const ageCycleData: AgeComparisonData = {
    title: "Pisces → Aquarius",
    description: "A civilizational transition from belief-based order to system-based order.",
    ages: [
        {
            name: "Age of Pisces",
            range: "≈ 0 – 2000 CE",
            rulers: ["Jupiter"],
            corePrinciple: "Reality is defined by belief",
            hex: "#6366f1",
        },
        {
            name: "Age of Aquarius",
            range: "≈ 2000 CE – emerging",
            rulers: ["Saturn", "Uranus"],
            corePrinciple: "Reality is defined by systems",
            hex: "#06b6d4",
        },
    ],
    rows: [
        {
            key: "core",
            label: "Core Principle",
            pisces: {
                summary: "Faith and meaning.",
                bullets: [
                    "Reality is interpreted through faith",
                    "Truth is inherited before it is examined",
                    "Belief organizes the world",
                ],
                note: "Jupiter leads the age.",
            },
            aquarius: {
                summary: "Systems and function.",
                bullets: [
                    "Reality is organized through infrastructure",
                    "Truth must function, not merely inspire",
                    "Design organizes the world",
                ],
                note: "Saturn defines the system; Uranus rewrites it.",
            },
        },
        {
            key: "truth",
            label: "Truth",
            pisces: {
                summary: "Truth is revealed.",
                bullets: [
                    "Sacred text, doctrine, and tradition dominate",
                    "Doubt is treated as deviation",
                    "Authority validates what is true",
                ],
            },
            aquarius: {
                summary: "Truth is tested.",
                bullets: [
                    "Models, evidence, and systems dominate",
                    "Verification matters more than proclamation",
                    "Function validates what is true",
                ],
            },
        },
        {
            key: "authority",
            label: "Authority",
            pisces: {
                summary: "Sacred and vertical.",
                bullets: [
                    "God → institution → people",
                    "Priests and intermediaries hold interpretive power",
                    "Hierarchy is justified through divine meaning",
                ],
            },
            aquarius: {
                summary: "Embedded in systems.",
                bullets: [
                    "Protocols, platforms, and networks shape behavior",
                    "Gatekeepers weaken, system designers gain power",
                    "Hierarchy moves into the infrastructure layer",
                ],
            },
        },
        {
            key: "structure",
            label: "Structure",
            pisces: {
                summary: "Hidden behind faith.",
                bullets: [
                    "Power appears sacred rather than engineered",
                    "Institutions feel permanent",
                    "Order is preserved through shared belief",
                ],
            },
            aquarius: {
                summary: "Visible and explicit.",
                bullets: [
                    "Rules are written into code, incentives, and process",
                    "Infrastructure becomes the new authority",
                    "Systems are exposed rather than mythologized",
                ],
            },
        },
        {
            key: "power",
            label: "Power",
            pisces: {
                summary: "Control of meaning.",
                bullets: [
                    "Control the story, and you shape the people",
                    "Symbols outrank mechanisms",
                    "Narrative stabilizes hierarchy",
                ],
            },
            aquarius: {
                summary: "Control of systems.",
                bullets: [
                    "Control infrastructure, and you shape outcomes",
                    "Mechanics outrank symbolism",
                    "Design governs behavior at scale",
                ],
            },
        },
        {
            key: "change",
            label: "Change",
            pisces: {
                summary: "Slow and resisted.",
                bullets: [
                    "Tradition protects continuity",
                    "Belief preserves the structure",
                    "Stability is treated as virtue",
                ],
            },
            aquarius: {
                summary: "Continuous and structural.",
                bullets: [
                    "Innovation is built into the age",
                    "Systems are continuously updated",
                    "Adaptation replaces permanence",
                ],
            },
        },
    ],
};

export default ageCycleData;