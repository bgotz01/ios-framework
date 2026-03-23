//lib/astrology/pluto-cycles-data.ts

export type PlutoCycleData = {
    sign: string;
    symbol: string;
    timeframe: string;
    isCurrent?: boolean;
    domain: string;
    catalyst: string;
    coreArchetype: string[];
    narrativeTheme: string[];
    economicExpression: string[];
    technologyExpression: string[];
    politicalImpact: string[];
    distortionRisk: string[];
    historicalParallel: {
        previousOccurrence: string;
        historicalThemes: string[];
    };
};

export const PLUTO_CYCLES: PlutoCycleData[] = [
    {
        sign: 'Aquarius',
        symbol: '♒',
        timeframe: 'Nov 19, 2024 – Jan 19, 2044',
        isCurrent: true,
        domain: 'Networks, Institutions, and Collective Power',
        catalyst: 'AI',
        coreArchetype: [
            'Power shifts from legacy hierarchies to networks',
            'Deep restructuring of institutions through technology',
            'Collective-scale transformation of governance and social order',
            'Exposure and purification of systemic corruption in "future" industries',
        ],
        narrativeTheme: [
            '"Power to the people" (but mediated by platforms)',
            'From nation-first politics to network-first politics',
            'Digital identity and citizenship become central',
            'Freedom vs control becomes the defining cultural conflict',
        ],
        economicExpression: [
            'Repricing of platform monopolies and network effects',
            'New infrastructure booms (compute, energy, chips, grids)',
            'Shift from financialized growth toward strategic industrial capacity',
            'Tokenization / digital rails compete with legacy banking',
        ],
        technologyExpression: [
            'AI + automation reorganize labor and institutions',
            'Decentralized systems mature (but re-centralize in new forms)',
            'Surveillance, verification, and reputation systems expand',
            'Cybersecurity becomes a baseline utility (like electricity)',
        ],
        politicalImpact: [
            'Institutional legitimacy crises and reform waves',
            'Mass movements coordinated through digital networks',
            'State–platform power struggles (speech, data, payments)',
            'New forms of governance experimentation (local, digital, parallel systems)',
        ],
        distortionRisk: [
            'Techno-authoritarianism disguised as progress',
            'Algorithmic social control and reputation scoring abuse',
            'Network fragmentation into hostile digital blocs',
            'Utopian narratives masking new oligarchies',
        ],
        historicalParallel: {
            previousOccurrence: '1777–1798',
            historicalThemes: [
                'Age of Revolution: American and French Revolutions',
                'Industrial Revolution acceleration (proto-factory and mechanization shifts)',
                'New rights frameworks and anti-monarchy sentiment',
                'Early modern "network" effects via print culture and clubs/societies',
            ],
        },
    },
    {
        sign: 'Capricorn',
        symbol: '♑',
        timeframe: 'Jan 2008 – Nov 2024',
        isCurrent: false,
        domain: 'Institutions, Authority, and Capital Structure',
        catalyst: 'Financial Crisis (QE)',
        coreArchetype: [
            'Power concentrates through institutions and formal authority',
            'Systems are stress-tested until they break or reform',
            'Debt, discipline, and hierarchy define the era’s constraints',
            'Corruption and fragility in “respectable” structures get exposed',
        ],
        narrativeTheme: [
            'Stability at any cost (bailouts, backstops, emergency legitimacy)',
            'Rules tighten after crisis (regulation, compliance, surveillance)',
            'Merit, productivity, and “adult in the room” governance become ideology',
            'Distrust of elites rises as institutions fail visibly',
        ],
        economicExpression: [
            'Debt supercycle management (bailouts → QE → tightening)',
            'Asset inflation via financial plumbing (rates, liquidity, collateral)',
            'Consolidation: winners get bigger (banks, tech, mega-caps)',
            'Inequality widens as capital outpaces wages',
        ],
        technologyExpression: [
            'Platforms professionalize and centralize distribution',
            'Data becomes a balance-sheet asset (ads, attention, targeting)',
            'Fintech modernizes rails while increasing systemic coupling',
            'Infrastructure scale matters (cloud, hyperscale, chips, logistics)',
        ],
        politicalImpact: [
            'Legitimacy crises: establishment vs populist backlash',
            'Expansion of state capacity during emergencies',
            'Regulatory regimes harden (finance, tech, speech, borders)',
            'Geopolitical competition re-enters industrial policy',
        ],
        distortionRisk: [
            'Moral hazard and “too big to fail” normalization',
            'Technocratic control masking democratic decay',
            'System fragility hidden by liquidity support',
            'Austerity cycles that deepen social polarization',
        ],
        historicalParallel: {
            previousOccurrence: '1762–1778',
            historicalThemes: [
                'State finance and empire management pressures',
                'Taxation/legitimacy conflicts (pre–American Revolution dynamics)',
                'Early industrial-capital consolidation and enclosure-era restructuring',
                'Institutional reform vs hardening authority tensions',
            ],
        },
    },
    {
        sign: 'Sagittarius',
        symbol: '♐',
        timeframe: 'Jan 1995 – Jan 2008',
        isCurrent: false,
        domain: 'Globalization, Ideology, and Expansion',
        catalyst: 'Internet',
        coreArchetype: [
            'Power expands through ideology and open markets',
            'Belief systems globalize and compete',
            'Borders weaken in trade, capital, and information',
            'Confidence in perpetual expansion dominates policy and markets',
        ],
        narrativeTheme: [
            'Globalization is inevitable and beneficial',
            'Free markets and liberal democracy spread worldwide',
            'The world is becoming flat and interconnected',
            'Growth and expansion are the default state',
        ],
        economicExpression: [
            'Emerging markets integration and capital inflows',
            'Credit expansion and financial innovation surge',
            'Housing and leverage cycle builds',
            'Trade liberalization accelerates (WTO era)',
        ],
        technologyExpression: [
            'Internet commercialization and global adoption',
            'Search engines and early platform dominance',
            'E-commerce expansion',
            'Cross-border digital connectivity accelerates',
        ],
        politicalImpact: [
            'Post–Cold War unipolar moment',
            'Expansion of multinational institutions',
            'Ideological conflicts framed as global missions',
            'Pre-crisis complacency in regulatory oversight',
        ],
        distortionRisk: [
            'Overconfidence in global financial integration',
            'Excess leverage hidden by growth optimism',
            'Ideological overreach abroad',
            'Credit bubble culminating in systemic breakdown',
        ],
        historicalParallel: {
            previousOccurrence: '1748–1762',
            historicalThemes: [
                'Imperial expansion and colonial competition',
                'Philosophical Enlightenment ideas spreading across borders',
                'Global trade route expansion',
                'Overextension of empires leading to fiscal strain',
            ],
        },
    },
    {
        sign: 'Scorpio',
        symbol: '♏',
        timeframe: 'Nov 1983 – Nov 1995',
        isCurrent: false,
        domain: 'Capital Power, Debt, and Hidden Systems',
        catalyst: 'Wall St Financialization',
        coreArchetype: [
            'Deep restructuring of financial power',
            'Exposure of hidden leverage and systemic risk',
            'Transformation through crisis and purge',
            'Intensification of capital concentration',
        ],
        narrativeTheme: [
            'Greed and excess dominate the cultural mood',
            'Finance becomes the engine of power',
            'Control of capital equals control of outcomes',
            'Crisis reveals what was buried beneath the system',
        ],
        economicExpression: [
            'Deregulation and financial engineering expansion',
            'Leveraged buyouts and junk bond boom',
            'Savings & Loan crisis and banking stress',
            'Emergence of derivatives and structured finance',
        ],
        technologyExpression: [
            'Electronic trading expansion',
            'Financial modeling and quantitative systems rise',
            'Global capital mobility accelerates',
            'Early digitization of financial infrastructure',
        ],
        politicalImpact: [
            'Deregulatory policy environment',
            'Consolidation of banking and financial institutions',
            'Rise of corporate influence in governance',
            'Global capital markets gain structural dominance',
        ],
        distortionRisk: [
            'Excess leverage and hidden counterparty risk',
            'Speculative bubbles fueled by financial engineering',
            'Moral hazard in deregulated finance',
            'Systemic fragility masked by innovation',
        ],
        historicalParallel: {
            previousOccurrence: '1735–1748',
            historicalThemes: [
                'Colonial trade intensification and capital consolidation',
                'Expansion of private financial power structures',
                'War finance and sovereign debt stress',
                'Speculative excess in early global markets',
            ],
        },
    },
    {
        sign: 'Libra',
        symbol: '♎',
        timeframe: 'Oct 1971 – Nov 1983',
        isCurrent: false,
        domain: 'Contracts, Alliances, and Monetary Balance',
        catalyst: 'Gold Depeg',
        coreArchetype: [
            'Power shifts through renegotiation of agreements',
            'Breakdown and reformation of financial contracts',
            'Transformation of diplomatic and economic partnerships',
            'Balance collapses before a new equilibrium forms',
        ],
        narrativeTheme: [
            'The old monetary order no longer works',
            'Partnerships must be restructured',
            'Fairness and balance become political battlegrounds',
            'Global cooperation competes with national self-interest',
        ],
        economicExpression: [
            'End of Bretton Woods and gold convertibility',
            'Currency volatility and floating exchange rates',
            'Inflation crisis and wage–price instability',
            'Shift toward financial liberalization and capital mobility',
        ],
        technologyExpression: [
            'Early electronic market infrastructure',
            'Expansion of global currency trading systems',
            'Financial data digitization begins scaling',
            'Automation of exchange and clearing mechanisms',
        ],
        politicalImpact: [
            'Reordering of global monetary alliances',
            'Rise of supranational coordination attempts (IMF influence grows)',
            'Cold War détente and strategic balancing',
            'Domestic political instability tied to economic imbalance',
        ],
        distortionRisk: [
            'Runaway inflation eroding purchasing power',
            'Currency crises from unstable pegs',
            'Breakdown of international monetary trust',
            'Overcorrection via aggressive tightening (Volcker shock)',
        ],
        historicalParallel: {
            previousOccurrence: '1684–1698',
            historicalThemes: [
                'Rebalancing of European alliances and power blocs',
                'Early central banking foundations (Bank of England era)',
                'War finance reshaping sovereign debt structures',
                'Currency and trade treaty renegotiations',
            ],
        },
    },
];
