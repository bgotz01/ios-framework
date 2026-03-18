import { TriadCardData } from "@/components/TriadCard";

const portugueseTriad: TriadCardData = {
    subject: "Portuguese Empire",
    label: "Power Triad",
    hex: "#8b5e34",
    prevEmpire: "Medieval System",
    legs: [
        {
            icon: "🧭",
            title: "Oceanic Route Discovery",
            description: "Opened the sea route from western Europe to India around Africa — a decisive break from Mediterranean and overland dependence.",
            bullets: [
                "Vasco da Gama's voyage (1497–1499) created a repeatable maritime corridor to the Indian Ocean",
                "Bypassed Ottoman and Venetian middlemen controlling overland trade routes",
                "Turned the Atlantic and Indian Oceans into operational space for European power",
            ],
            prev: "Trade = overland routes and Mediterranean networks controlled by intermediaries",
            next: "Trade = direct oceanic corridors controlled by the state that discovered them",
        },
        {
            icon: "🏯",
            title: "Chokepoint Trading Posts",
            description: "Rather than conquering vast inland territories, Portugal built a chain of fortified ports along Africa, India, and Asia.",
            bullets: [
                "Model: control strategic harbors and sea lanes, then tax commerce moving through them",
                "Naval victory at Diu (1509) secured Portuguese dominance of eastern sea trade",
                "Minimal land footprint — maximum leverage over maritime flows",
            ],
            prev: "Power = owning land and extracting from territory",
            next: "Power = controlling strategic points and taxing flows through them",
        },
        {
            icon: "🌊",
            title: "Maritime Monopoly Logic",
            description: "Portugal's core innovation was turning the ocean itself into a state-controlled commercial system.",
            bullets: [
                "Held a European monopoly on Indian Ocean exploration and trade for roughly a century",
                "Shifted the locus of power from nearby land to long-distance flow control",
                "Established the template that Spain, the Dutch, and Britain would each build on",
            ],
            prev: "Wealth = what your land produces locally",
            next: "Wealth = controlling the routes through which global commerce flows",
        },
    ],
};

export default portugueseTriad;
