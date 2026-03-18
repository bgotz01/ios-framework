import { TriadCardData } from "@/components/TriadCard";

const usTriad: TriadCardData = {
    subject: "United States",
    label: "Power Triad",
    hex: "#b91c1c",
    prevEmpire: "Britain",
    legs: [
        {
            icon: "💵",
            title: "Financial Hegemony",
            description: "Built the global dollar system after WWII — money itself became the instrument of power.",
            bullets: [
                "Bretton Woods Agreement made the USD the world's reserve currency",
                "Controls global liquidity, credit, and capital flows",
                "Any country needing dollars must operate within U.S.-defined rules",
            ],
            prev: "Britain had finance — the City of London and the pound sterling",
            next: "U.S. made money itself the system — dollar as global infrastructure",
        },
        {
            icon: "🛡️",
            title: "Military + Security Umbrella",
            description: "Global military presence that guarantees trade routes and allies' security.",
            bullets: [
                "Hundreds of military bases worldwide — permanent global footprint",
                "Naval dominance across every major ocean and chokepoint",
                "Security guarantees turned allies into dependents",
            ],
            prev: "Britain controlled the seas — Royal Navy as global enforcer",
            next: "U.S. controls the entire security architecture — land, sea, air, and space",
        },
        {
            icon: "🎬",
            title: "Narrative + Culture",
            description: "Dominates the story layer — shaping ideology, aspirations, and global norms.",
            bullets: [
                "Hollywood, Silicon Valley, and academia set the global cultural agenda",
                "Shapes what people desire, fear, and believe is possible",
                "Soft power outlasts military and financial dominance",
            ],
            prev: "Britain exported rules — legal and financial systems",
            next: "U.S. exports reality itself — the story layer that defines the world",
        },
    ],
};

export default usTriad;
