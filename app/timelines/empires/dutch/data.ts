import { TriadCardData } from "@/components/TriadCard";

const dutchTriad: TriadCardData = {
    subject: "Dutch Republic",
    label: "Power Triad",
    hex: "#c2410c",
    prevEmpire: "Spain",
    legs: [
        {
            icon: "🚢",
            title: "Trade Over Territory",
            description: "Didn't aim to conquer vast continents — built a global network of ports and trade routes.",
            bullets: [
                "Focused on spices (Indonesia), shipping dominance, and controlling flows — not land",
                "VOC (Dutch East India Company) operated as a state-backed global logistics network",
                "Controlled the movement of goods rather than the territory they came from",
            ],
            prev: "Own the world — territorial conquest at scale",
            next: "Move the world — network and flow control",
        },
        {
            icon: "📈",
            title: "Financialization of Power",
            description: "Created the first modern financial system — wealth abstracted from metal into capital.",
            bullets: [
                "Dutch East India Company: first publicly traded company in history",
                "Amsterdam Stock Exchange: first modern equity market",
                "Wealth no longer tied to silver — tied to equity, credit, and capital flows",
            ],
            prev: "Wealth = silver and physical resource extraction",
            next: "Wealth = financial abstraction — equity and credit",
        },
        {
            icon: "🧠",
            title: "Decentralized Commercial State",
            description: "Power centered in the merchant class, not an absolute monarchy.",
            bullets: [
                "Highly urban, decentralized governance — cities held real power",
                "Pragmatic and profit-driven, not ideologically rigid",
                "Merchant class replaced kings and clergy as the dominant decision-makers",
            ],
            prev: "Empire of kings + church — centralized divine authority",
            next: "Republic of traders — decentralized commercial power",
        },
    ],
};

export default dutchTriad;
