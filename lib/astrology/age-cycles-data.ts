// lib/astrology/age-cycles-data.ts

export type AgeCycleData = {
    age: string;
    symbol: string;
    period: string;
    isCurrent?: boolean;
    isEmerging?: boolean;
    civilizationBasis: string[];
    keyThemes: string[];
    examples: string[];
    symbolism?: string;
};

export const AGE_CYCLES: AgeCycleData[] = [
    {
        age: 'Taurus',
        symbol: '♉',
        period: '~4300–2150 BC',
        civilizationBasis: [
            'Agriculture and settled farming',
            'Land ownership and property',
            'Fertility religion and earth worship',
            'Bull symbolism and animal husbandry',
        ],
        keyThemes: [
            'Transition from nomadic to agricultural societies',
            'Development of permanent settlements',
            'Accumulation of material wealth',
            'Sacred relationship with land and animals',
        ],
        examples: [
            'Bull worship in Mesopotamia',
            'Egyptian Apis bull cult',
            'Minoan bull rituals and symbolism',
            'Early agricultural civilizations',
        ],
        symbolism: 'The bull represents strength, fertility, and the domestication of nature for human prosperity.',
    },
    {
        age: 'Aries',
        symbol: '♈',
        period: '~2150 BC – 1 AD',
        civilizationBasis: [
            'Warrior kings and military conquest',
            'Empire building and expansion',
            'Heroic mythology and individual glory',
            'Iron Age militarization',
        ],
        keyThemes: [
            'Assertion and conquest',
            'Individual heroism and leadership',
            'Military technology and warfare',
            'Expansion through force',
        ],
        examples: [
            'Roman Empire expansion',
            'Greek city-states and warfare',
            'Iron Age military technology',
            'Alexander the Great and conquest narratives',
        ],
        symbolism: 'The ram represents aggression, leadership, and the pioneering spirit of conquest.',
    },
    {
        age: 'Pisces',
        symbol: '♓',
        period: '~1 AD – ~2100 AD',
        isCurrent: true,
        civilizationBasis: [
            'Faith and universal religion',
            'Sacrifice and martyrdom',
            'Spiritual salvation narratives',
            'Transcendence over material world',
        ],
        keyThemes: [
            'Universal spiritual systems',
            'Compassion and suffering',
            'Belief over empirical proof',
            'Dissolution of boundaries through faith',
        ],
        examples: [
            'Christianity and global spread',
            'Islam and missionary expansion',
            'Buddhist compassion teachings',
            'Religious institutions as dominant power structures',
        ],
        symbolism: 'The fish appears heavily in early Christianity. Pisces represents faith, sacrifice, and spiritual transcendence.',
    },
    {
        age: 'Aquarius',
        symbol: '♒',
        period: '~2100 AD onward',
        isEmerging: true,
        civilizationBasis: [
            'Networks and collective intelligence',
            'Knowledge and information systems',
            'Technology and human coordination',
            'Decentralized power structures',
        ],
        keyThemes: [
            'Shift from faith to knowledge',
            'Network effects and connectivity',
            'Collective problem-solving',
            'Technology as organizing principle',
        ],
        examples: [
            'Internet and global connectivity',
            'Artificial intelligence systems',
            'Decentralized networks and platforms',
            'Global coordination mechanisms',
        ],
        symbolism: 'The water-bearer represents the distribution of knowledge and resources through networks, not hierarchy.',
    },
];

// Helper function to get current age
export function getCurrentAge(): AgeCycleData | undefined {
    return AGE_CYCLES.find(c => c.isCurrent);
}

// Helper function to get emerging age
export function getEmergingAge(): AgeCycleData | undefined {
    return AGE_CYCLES.find(c => c.isEmerging);
}

// Helper function to calculate approximate years into current age
export function getYearsIntoCurrentAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear; // Since Pisces started at ~1 AD
}

// Helper function to calculate years until next age
export function getYearsUntilNextAge(): number {
    const currentYear = new Date().getFullYear();
    return 2100 - currentYear;
}
