// app/cycles/age-cycle/data.ts
import type { TimelineData } from "@/components/Timeline";

export type { TimelineData };

export type ComparisonRowKey =
    | "core"
    | "truth"
    | "authority"
    | "structure"
    | "power"
    | "change"
    | "economics";

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
    transition?: TimelineData;
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
        {
            key: "economics",
            label: "Economics",
            pisces: {
                summary: "Embedded in sacred order.",
                bullets: [
                    "Economic life nested inside monarchy and religious legitimacy",
                    "Inherited hierarchy determines station",
                    "Moral narratives about duty justify distribution",
                    "Wealth flows through sacred and feudal structures",
                ],
            },
            aquarius: {
                summary: "Abstract and systematized.",
                bullets: [
                    "Economic life becomes financialized and networked",
                    "Data-driven allocation replaces moral justification",
                    "Open to rapid disruption by new systems",
                    "Markets, protocols, and platforms replace courts and churches",
                ],
            },
        },
    ],
    transition: {
        subject: "Transition Timeline",
        description: "1800 → 2200 — The breakdown of belief-based order and the rise of system-based reality.",
        sequence: "Pisces dominant → hybrid phase → network emergence → system dominance → full Aquarius",
        eras: [
            {
                period: "Phase 1",
                label: "≈ 1800–1900",
                hex: "#6366f1",
                dominantForce: "Collapse of Divine Order",
                summary: "Pisces dominant — but systems begin to compete with belief",
                bullets: [
                    "Napoleonic Wars destroy feudal / divine-right order — power becomes military + organizational",
                    "Industrial Revolution introduces mechanical systems — production becomes process-driven, not tradition-driven",
                    "Telegraph creates the first instant network — breaks geographic isolation",
                ],
                insight: "Pisces is still dominant, but systems begin to compete with belief",
            },
            {
                period: "Phase 2",
                label: "≈ 1900–1990",
                hex: "#8b5cf6",
                dominantForce: "Systems Scale Globally",
                summary: "Hybrid phase — Aquarius systems exist but controlled in a Pisces way",
                bullets: [
                    "World War II — industrial + bureaucratic systems dominate warfare; total mobilization = system power",
                    "Cold War — competing ideological systems; centralized control at massive scale",
                    "Mainframe Computer — birth of digital systems, still controlled by institutions",
                    "Television — peak Pisces tool: one-to-many narrative control",
                ],
                insight: "Aquarius systems exist but are controlled in a Pisces way (centralized narrative control)",
            },
            {
                period: "Phase 3",
                label: "≈ 1990–2020",
                hex: "#06b6d4",
                dominantForce: "Network Emergence",
                summary: "Pisces authority collapses — Aquarius still unstable",
                bullets: [
                    "Internet removes gatekeepers — enables node-to-node communication",
                    "World Wide Web makes information accessible and searchable",
                    "Open Source Software makes production distributed",
                    "Social Media destroys narrative monopoly — creates fragmented truth",
                ],
                insight: "Pisces authority begins to collapse. But Aquarius is still unstable: too much noise, no clear structure, trust fragmentation",
            },
            {
                period: "Phase 4",
                label: "≈ 2020–2050",
                hex: "#10b981",
                dominantForce: "System Dominance",
                summary: "Uranus accelerates faster than Saturn can stabilize — volatility",
                bullets: [
                    "Artificial Intelligence — decision-making becomes system-driven",
                    "Rise of digital infrastructure — platforms, cloud, APIs, global coordination layers",
                    "Remote + digital work — geography becomes less relevant",
                    "Expansion of open networks — permissionless creation, distributed coordination",
                ],
                insight: "Uranus (innovation) is accelerating faster than Saturn (structure) can stabilize — this is volatility",
            },
            {
                period: "Phase 5",
                label: "≈ 2050–2200",
                hex: "#f59e0b",
                dominantForce: "Full Aquarius",
                summary: "Aquarius stabilizes when Saturn catches up to Uranus",
                bullets: [
                    "Infrastructure-first power replaces narrative-first power",
                    "Global coordination systems emerge",
                    "Reduced reliance on narrative authority",
                    "Continuous system evolution becomes the norm",
                    "High abstraction: AI, automation, digital identity",
                ],
                insight: "Aquarius stabilizes when Saturn catches up to Uranus",
            },
        ],
    },
};

export default ageCycleData;