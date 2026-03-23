// lib/astrology/uranus-cycles-data.ts

export type UranusCycleData = {
    sign: string;
    symbol: string;
    timeframe: string;
    isCurrent: boolean;
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
    extendedHistoricalPeriods?: {
        period: string;
        note: string;
    }[];
};

export const URANUS_CYCLES: UranusCycleData[] = [
    {
        sign: 'Gemini',
        symbol: '♊',
        timeframe: 'Apr 25, 2026 – 2033',
        isCurrent: true,
        domain: 'Information & Networks',
        catalyst: 'AI',
        coreArchetype: [
            'Shock to communication systems',
            'Disruption of information networks',
            'Rapid cognitive acceleration',
            'Technology rewires thought patterns',
        ],
        narrativeTheme: [
            'Information warfare intensifies',
            'AI-mediated cognition becomes normal',
            'Communication speed overwhelms institutions',
            'Multiplicity of truth explodes',
        ],
        economicExpression: [
            'Volatility in media & tech sectors',
            'Trade systems disrupted (digital & physical)',
            'New information-based asset classes',
            'Fragmentation of global digital markets',
        ],
        technologyExpression: [
            'AI agents mainstreamed',
            'Autonomous information systems',
            'Brain–computer interface advances',
            'Quantum communication development',
        ],
        politicalImpact: [
            'Cyber conflict escalation',
            'Regulation attempts lag innovation',
            'Decentralized platforms vs state control',
            'Education system disruption',
        ],
        distortionRisk: [
            'Information overload collapse',
            'Algorithmic market instability',
            'Deepfake / trust crisis',
            'Fragmented cognitive reality',
        ],
        historicalParallel: {
            previousOccurrence: '1941–1949',
            historicalThemes: [
                'WWII communications revolution',
                'Radar, codebreaking (Enigma)',
                'Nuclear era information secrecy',
                'Birth of computing systems',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1857–1865', note: 'Telegraph networks transformed war strategy and news distribution during the US Civil War.' },
            { period: '1773–1781', note: 'Pamphlet warfare and revolutionary communication networks fueled the American Revolution.' },
        ],
    },
    {
        sign: 'Taurus',
        symbol: '♉',
        timeframe: '2018–2026',
        isCurrent: false,
        domain: 'Value & Material Stability',
        catalyst: 'COVID & Inflation',
        coreArchetype: [
            'Shock to money and value systems',
            'Disruption of material stability',
            'Technological upheaval in finance',
            'Volatility in tangible assets',
        ],
        narrativeTheme: [
            'Trust in traditional finance questioned',
            'Scarcity and inflation return to consciousness',
            'Digital money challenges sovereign currency',
            'Energy and resource security prioritized',
        ],
        economicExpression: [
            'Inflation shock cycle',
            'Interest rate volatility and repricing of risk',
            'Crypto boom–bust expansion',
            'Supply chain and commodity instability',
        ],
        technologyExpression: [
            'Blockchain infrastructure scaling',
            'Rise of decentralized finance (DeFi)',
            'Digital payments normalization',
            'Energy and resource optimization technology',
        ],
        politicalImpact: [
            'Monetary policy stress tests',
            'Banking system instability episodes',
            'Industrial policy around energy security',
            'CBDC experimentation and regulatory tightening',
        ],
        distortionRisk: [
            'Asset bubbles in speculative currencies',
            'Overcorrection via aggressive tightening',
            'Banking fragility exposure',
            'Mispricing of inflation persistence',
        ],
        historicalParallel: {
            previousOccurrence: '1934–1942',
            historicalThemes: [
                'Monetary restructuring during the Great Depression',
                'Gold confiscation and currency regime shifts',
                'Pre-WWII resource mobilization',
                'Industrial capacity build-up',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1850–1858', note: 'California Gold Rush reshaped global monetary flows and commodity-driven speculation.' },
            { period: '1766–1774', note: 'Colonial currency crises and British taxation disputes destabilized material value systems.' },
        ],
    },
    {
        sign: 'Aries',
        symbol: '♈',
        timeframe: '2010–2018',
        isCurrent: false,
        domain: 'Identity & Activation',
        catalyst: 'Social Media',
        coreArchetype: [
            'Shock to identity and sovereignty',
            'Disruption through assertion and confrontation',
            'Acceleration of individual power movements',
            'Technological ignition of social uprisings',
        ],
        narrativeTheme: [
            'Power returns to the individual',
            'Direct action over institutional process',
            'Revolt against established authority',
            'Identity-driven mobilization',
        ],
        economicExpression: [
            'Startup and disruption culture dominance',
            'Venture capital acceleration in platform tech',
            'Gig economy expansion',
            'Market preference for bold growth narratives',
        ],
        technologyExpression: [
            'Mobile-first ecosystem maturation',
            'Rise of social media as political tool',
            'Platform dominance (ride-sharing, on-demand services)',
            'Early AI commercialization',
        ],
        politicalImpact: [
            'Populist movements surge globally',
            'Arab Spring and decentralized uprisings',
            'Polarization intensifies in Western democracies',
            'Erosion of traditional party structures',
        ],
        distortionRisk: [
            'Overconfidence in disruption models',
            'Social fragmentation via digital outrage cycles',
            'Geopolitical instability triggered by rapid mobilization',
            'Platform monopolies forming unchecked power',
        ],
        historicalParallel: {
            previousOccurrence: '1927–1934',
            historicalThemes: [
                'Rise of radical political movements',
                'Stock market crash of 1929',
                'Collapse of prior economic order',
                'Mass mobilization around ideology',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1843–1851', note: 'Revolutions of 1848 swept Europe as nationalist and democratic uprisings challenged monarchies.' },
            { period: '1759–1767', note: 'Wilkite radicalism and colonial assertiveness challenged British imperial authority.' },
        ],
    },
    {
        sign: 'Pisces',
        symbol: '♓',
        timeframe: '2003–2010',
        isCurrent: false,
        domain: 'Collective Mood & Dissolution',
        catalyst: 'Financialization & Global War on Terror',
        coreArchetype: [
            'Shock to collective reality and shared meaning',
            'Dissolution of clear boundaries (truth, security, markets)',
            'Surge in speculative belief cycles',
            'Hidden systemic risk builds beneath calm narratives',
        ],
        narrativeTheme: [
            'Security theater and invisible threats dominate',
            'Reality becomes mediated (screens, narratives, “official truth”)',
            'Escapism and fantasy economies expand',
            'Moral narratives justify large-scale interventions',
        ],
        economicExpression: [
            'Credit boom accelerates into systemic fragility',
            'Housing bubble and leverage expansion',
            'Commodities supercycle momentum builds',
            'Risk mispriced through complex financial products',
        ],
        technologyExpression: [
            'Web 2.0 social platforms emerge (early network effects)',
            'Always-on media cycles intensify',
            'Early smartphone era begins (iPhone launch)',
            'Digitized finance scales (model-driven risk)',
        ],
        politicalImpact: [
            'Expansion of surveillance and security state powers',
            'Long-duration wars framed as moral necessity',
            'Institutional trust begins to fracture',
            'Globalization deepens while resentment accumulates',
        ],
        distortionRisk: [
            'Narrative-driven wars and policy overreach',
            'Hidden leverage and counterparty fragility',
            'Fraud and opacity in credit products',
            'Complacency before systemic breaks (GFC)',
        ],
        historicalParallel: {
            previousOccurrence: '1919–1927',
            historicalThemes: [
                'Post-war disillusionment and “lost generation” mood',
                'Speculative boom psychology building toward 1929',
                'Mass media expansion shaping public perception',
                'Political polarization and ideological drift',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1835–1843', note: 'Messianic movements and utopian communes flourished amid industrial dislocation and spiritual searching.' },
            { period: '1751–1759', note: 'Enlightenment skepticism dissolved religious certainties while early print media shaped collective belief.' },
        ],
    },
    {
        sign: 'Aquarius',
        symbol: '♒',
        timeframe: '1995–2003',
        isCurrent: false,
        domain: 'Networks & Digital Society',
        catalyst: 'Internet',
        coreArchetype: [
            'Shock to networks and social organization',
            'Disruption of gatekeepers via the open internet',
            'Acceleration of global connectivity',
            'New forms of coordination outside institutions',
        ],
        narrativeTheme: [
            'The internet changes everything',
            'Networks beat hierarchies',
            'Information wants to be free',
            'Global connectivity becomes destiny',
        ],
        economicExpression: [
            'Dot-com boom and speculative tech capital formation',
            'Productivity optimism and “new economy” valuation',
            'Capital floods telecom and network infrastructure',
            'Winner-take-most dynamics begin forming',
        ],
        technologyExpression: [
            'Commercial internet adoption (web goes mainstream)',
            'Search, email, and early e-commerce scale',
            'Mobile + wireless foundations laid',
            'Open protocols and software ecosystems expand',
        ],
        politicalImpact: [
            'Globalization accelerates through networks',
            'New cyber governance questions emerge',
            'Decentralized communities challenge institutions',
            'Media gatekeeping weakens rapidly',
        ],
        distortionRisk: [
            'Tech bubble valuations detached from cash flow',
            'Overbuild of telecom infrastructure',
            'Speculative capital misallocation',
            'Early cybercrime and security fragility',
        ],
        historicalParallel: {
            previousOccurrence: '1912–1919',
            historicalThemes: [
                'Electrification and communications acceleration (radio foundations)',
                'Mass coordination capacity rises alongside conflict pressures',
                'Institutional disruption under wartime mobilization',
                'New technical networks reshape power dynamics',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1828–1836', note: 'Abolitionist networks and reform societies pioneered decentralized mass coordination outside state institutions.' },
            { period: '1744–1752', note: 'Masonic lodges and learned societies created transnational networks that bypassed traditional hierarchies.' },
        ],
    },
    {
        sign: 'Capricorn',
        symbol: '♑',
        timeframe: '1988–1995',
        isCurrent: false,
        domain: 'Institutions & Structural Authority',
        catalyst: 'Cold War Collapse',
        coreArchetype: [
            'Shock to entrenched political and economic structures',
            'Collapse of rigid hierarchies',
            'Institutional realignment and consolidation',
            'Structural reset of global power order',
        ],
        narrativeTheme: [
            'The old order is ending',
            'Markets triumph over central planning',
            'Institutions must modernize or dissolve',
            'Global realignment becomes inevitable',
        ],
        economicExpression: [
            'Transition from state-controlled to market economies',
            'Privatization waves and structural reforms',
            'Emergence of multinational corporate dominance',
            'Early stages of financial globalization surge',
        ],
        technologyExpression: [
            'Enterprise computing expansion',
            'Early commercial internet infrastructure foundations',
            'Global logistics and supply chain modernization',
            'Rise of modern financial trading systems',
        ],
        politicalImpact: [
            'Fall of the Soviet Union',
            'European integration momentum builds',
            'Shift toward neoliberal economic policy frameworks',
            'Redefinition of global alliances and trade blocs',
        ],
        distortionRisk: [
            'Overconfidence in deregulated markets',
            'Institutional hollowing beneath surface stability',
            'Rapid privatization leading to inequality',
            'Fragile emerging market transitions',
        ],
        historicalParallel: {
            previousOccurrence: '1904–1912',
            historicalThemes: [
                'Pre-WWI alliance rigidification',
                'Industrial power consolidation',
                'Imperial competition under formal treaties',
                'Institutional tensions building beneath apparent order',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1820–1828', note: 'Concert of Europe imposed institutional order after Napoleonic collapse, restructuring continental power.' },
            { period: '1736–1744', note: 'Bureaucratic consolidation under enlightened despots reshaped European state structures.' },
        ],
    },
    {
        sign: 'Sagittarius',
        symbol: '♐',
        timeframe: '1981–1988',
        isCurrent: false,
        domain: 'Ideology & Global Expansion',
        catalyst: 'Neoliberal Policy Shift',
        coreArchetype: [
            'Shock to belief systems and economic doctrine',
            'Expansion through ideological conviction',
            'Reframing of global trade and monetary philosophy',
            'Renewed confidence in market-driven growth',
        ],
        narrativeTheme: [
            'Free markets restore strength',
            'Deregulation unleashes prosperity',
            'Global trade expands opportunity',
            'Strong currency and disciplined policy win',
        ],
        economicExpression: [
            'Volcker disinflation aftermath',
            'Dollar strength cycle',
            'Early globalization acceleration',
            'Equity bull market ignition',
        ],
        technologyExpression: [
            'Personal computing adoption begins scaling',
            'Financial market digitization expands',
            'Telecommunications modernization',
            'Early enterprise software systems',
        ],
        politicalImpact: [
            'Reagan–Thatcher policy era',
            'Cold War ideological confrontation intensifies',
            'Shift toward privatization and deregulation',
            'Strengthening of Western alliance frameworks',
        ],
        distortionRisk: [
            'Debt accumulation beneath growth optimism',
            'Overconfidence in deregulated finance',
            'Emerging market instability (Latin debt crisis)',
            'Speculative equity excess late in cycle',
        ],
        historicalParallel: {
            previousOccurrence: '1891–1898',
            historicalThemes: [
                'Imperial expansion and global trade competition',
                'Monetary policy realignments (gold standard tensions)',
                'Ideological nationalism rising',
                'Speculative market enthusiasm before structural shifts',
            ],
        },
        extendedHistoricalPeriods: [
            { period: '1807–1814', note: 'Napoleonic expansion spread revolutionary ideology and free-market doctrine across Europe by force.' },
            { period: '1723–1731', note: 'South Sea Bubble aftermath reshaped speculative finance and ideological faith in market expansion.' },
        ],
    },
];
