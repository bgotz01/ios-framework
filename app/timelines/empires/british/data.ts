import { TriadCardData } from "@/components/TriadCard";

const britishTriad: TriadCardData = {
    subject: "British Empire",
    label: "Power Triad",
    hex: "#1d4ed8",
    prevEmpire: "Dutch",
    legs: [
        {
            icon: "🏭",
            title: "Industrialization",
            description: "First to industrialize at scale — mechanized production changed the nature of power.",
            bullets: [
                "Mechanized textiles, manufacturing, and energy (coal, steam)",
                "Could produce more, faster, and cheaper than any competitor",
                "Industrial output became the new foundation of national wealth",
            ],
            prev: "Dutch moved goods — trade and logistics as the power source",
            next: "Britain created the goods — production at industrial scale",
        },
        {
            icon: "🌊",
            title: "Global Naval Control",
            description: "Dominated the seas with the Royal Navy — owning and enforcing the global network.",
            bullets: [
                "Secured trade routes, colonies, and strategic chokepoints worldwide",
                "Built global infrastructure: ports, coaling stations, undersea cables",
                "Naval supremacy meant no rival could move goods without British permission",
            ],
            prev: "Dutch used networks — efficient routing through existing sea lanes",
            next: "Britain owned and enforced the network — infrastructure as empire",
        },
        {
            icon: "🏛️",
            title: "System Export",
            description: "Exported legal, financial, and linguistic systems — structuring the world in Britain's image.",
            bullets: [
                "Spread common law, financial systems, and the English language globally",
                "Standardized global trade and governance on British terms",
                "Systems outlasted the empire itself — still dominant today",
            ],
            prev: "Spain extracted — took resources out of conquered territories",
            next: "Britain structured the world — exported the rules of the game",
        },
    ],
};

export default britishTriad;
