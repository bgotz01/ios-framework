import { TriadCardData } from "@/components/TriadCard";

const spanishTriad: TriadCardData = {
    subject: "Spanish Empire",
    label: "Power Triad",
    hex: "#92400e",
    prevEmpire: "Before Spain",
    legs: [
        {
            icon: "🌎",
            title: "Transoceanic Conquest",
            description: "First Western power to project force across entire oceans and hold territory.",
            bullets: [
                "Not just ports like earlier Mediterranean traders — continental-scale control of the Americas",
                "Created a true intercontinental empire spanning Europe, the Americas, and Asia via the Philippines",
                "Permanent territorial occupation, not just trade outposts",
            ],
            prev: "Trade networks — coastal ports and regional routes",
            next: "Planetary conquest — full territorial control across oceans",
        },
        {
            icon: "⛏️",
            title: "Industrial-Scale Silver Extraction",
            description: "Systematic extraction from mines like Potosí created the first global monetary flow.",
            bullets: [
                "Mines like Potosí (Bolivia) produced staggering volumes of silver",
                "Flooded Europe — and even China — with silver, reshaping global prices",
                "Created the first truly global monetary circulation system",
            ],
            prev: "Wealth = land or local tribute",
            next: "Resource extraction at global scale — silver as world currency",
        },
        {
            icon: "✝️",
            title: "Religion as Expansion Engine",
            description: "Conquest tightly coupled with Catholic mission — ideology and empire as one system.",
            bullets: [
                "Expansion framed as conversion and divine mandate, not just conquest",
                "Unified state, military, and Church into a single operational system",
                "Provided moral legitimacy for subjugation on a massive scale",
            ],
            prev: "Religion and politics coexisted separately",
            next: "Religion weaponized as the ideological engine of global expansion",
        },
    ],
};

export default spanishTriad;
