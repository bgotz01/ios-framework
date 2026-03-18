import { TriadCardData } from "@/components/TriadCard";

const preSpainTriad: TriadCardData = {
    subject: "Pre-Portuguese Western System",
    label: "Power Triad — Medieval / Late Medieval",
    hex: "#64748b",
    prevEmpire: "Ancient World",
    legs: [
        {
            icon: "🏰",
            title: "Land-Based Power",
            description: "Power tied to land ownership, agriculture, and feudal hierarchy.",
            bullets: [
                "Wealth = what your land produces — no concept of scaling beyond geography",
                "Expansion = slow, physical conquest of adjacent territory",
                "Feudal lords, serfs, and inherited land defined the power structure",
            ],
            prev: "Ancient empires — military conquest of city-states and regions",
            next: "Transoceanic conquest — planetary-scale territorial control",
        },
        {
            icon: "🐫",
            title: "Regional Trade Networks",
            description: "Trade existed but was fragmented, route-dependent, and controlled by intermediaries.",
            bullets: [
                "Silk Road and Mediterranean routes — no unified global system",
                "Europe depended on Eastern goods via middlemen like the Venetian Republic",
                "Trade was a supplement to land wealth, not the primary power source",
            ],
            prev: "Ancient trade — local and regional barter and tribute systems",
            next: "Global trade empire — direct oceanic routes cutting out all middlemen",
        },
        {
            icon: "👑",
            title: "Church + Monarchy Dual Authority",
            description: "Power shared between kings and the Catholic Church — religion legitimized rule.",
            bullets: [
                "Kings held political and military power; the Church held spiritual legitimacy",
                "Religion legitimized rule but didn't actively drive global expansion",
                "Authority = top-down, fixed, and hierarchical — change was slow",
            ],
            prev: "Ancient authority — divine kings or city-state councils",
            next: "Unified state + church as a single expansion engine",
        },
    ],
};

export default preSpainTriad;
