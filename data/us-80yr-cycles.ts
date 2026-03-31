// data/us-80yr-cycles.ts

export interface CycleEvent {
    year: number
    label: string
}

export interface CyclePhase {
    name: 'Reset / Crisis' | 'Order' | 'Awakening' | 'Unraveling'
    startYear: number
    endYear: number
    events: CycleEvent[]
}

export interface Cycle {
    title: string
    startYear: number
    endYear: number
    resetType: 'foundational' | 'internal' | 'global' | 'stacked'
    resetLabel: string
    resetNote: string
    phases: [CyclePhase, CyclePhase, CyclePhase, CyclePhase]
}

export const us80yrCycles: Cycle[] = [
    {
        title: 'Revolutionary Cycle',
        startYear: 1776,
        endYear: 1861,
        resetType: 'foundational',
        resetLabel: 'Foundational Reset',
        resetNote:
            'Creation of a new system — break from prior sovereignty, institutions built from scratch',
        phases: [
            {
                name: 'Reset / Crisis',
                startYear: 1776,
                endYear: 1796,
                events: [
                    { year: 1776, label: 'Declaration of Independence' },
                    { year: 1787, label: 'Constitutional Convention' },
                    { year: 1789, label: 'Washington inaugurated' },
                ],
            },
            {
                name: 'Order',
                startYear: 1796,
                endYear: 1816,
                events: [
                    { year: 1803, label: 'Louisiana Purchase' },
                    { year: 1812, label: 'War of 1812 begins' },
                ],
            },
            {
                name: 'Awakening',
                startYear: 1816,
                endYear: 1836,
                events: [
                    { year: 1816, label: 'War of 1812 ended' },

                ],
            },
            {
                name: 'Unraveling',
                startYear: 1836,
                endYear: 1861,
                events: [
                    { year: 1837, label: 'Panic of 1837' },
                    { year: 1860, label: 'Lincoln elected' },
                ],
            },
        ],
    },
    {
        title: 'Civil War Cycle',
        startYear: 1861,
        endYear: 1941,
        resetType: 'internal',
        resetLabel: 'Internal Reset',
        resetNote:
            'Internal contradictions explode — power structure and identity redefined, system preserved but fundamentally altered',
        phases: [
            {
                name: 'Reset / Crisis',
                startYear: 1861,
                endYear: 1881,
                events: [
                    { year: 1861, label: 'Civil War begins' },
                    { year: 1863, label: 'Emancipation Proclamation' },
                    { year: 1877, label: 'Reconstruction ends' },
                ],
            },
            {
                name: 'Order',
                startYear: 1881,
                endYear: 1901,
                events: [
                    { year: 1890, label: 'Closing of the frontier' },
                    { year: 1898, label: 'Spanish-American War' },
                ],
            },
            {
                name: 'Awakening',
                startYear: 1901,
                endYear: 1921,
                events: [
                    { year: 1901, label: 'Progressive Era begins — reform mindset emerges' },
                    { year: 1911, label: 'Standard Oil broken up — corporate power challenged' },
                    { year: 1913, label: 'Federal Reserve created' },
                ],
            },
            {
                name: 'Unraveling',
                startYear: 1921,
                endYear: 1941,
                events: [
                    { year: 1921, label: 'Post-WWI reset → credit expansion and Wall Street boom begin' },
                    { year: 1929, label: 'Stock market crash' },
                    { year: 1939, label: 'World War II begins in Europe' },
                ],
            },
        ],
    },
    {
        title: 'WWII Cycle',
        startYear: 1941,
        endYear: 2020,
        resetType: 'global',
        resetLabel: 'Global Reset',
        resetNote:
            'External war reorganizes the system — full mobilization, new global order established',
        phases: [
            {
                name: 'Reset / Crisis',
                startYear: 1941,
                endYear: 1961,
                events: [
                    { year: 1941, label: 'Pearl Harbor — U.S. enters WWII' },
                    { year: 1944, label: 'Bretton Woods — new global financial order' },
                    { year: 1947, label: 'Truman Doctrine — Cold War order begins' },
                ],
            },
            {
                name: 'Order',
                startYear: 1961,
                endYear: 1981,
                events: [
                    { year: 1961, label: 'Kennedy era begins — postwar confidence peaks' },
                    { year: 1969, label: 'Moon landing' },
                    { year: 1971, label: 'Nixon ends gold convertibility' },
                ],
            },
            {
                name: 'Awakening',
                startYear: 1981,
                endYear: 2001,
                events: [
                    { year: 1981, label: 'Reagan era begins — market-led worldview takes hold' },
                    { year: 1989, label: 'Berlin Wall falls' },
                    { year: 1991, label: 'Soviet Union collapses — unipolar moment begins' },
                ],
            },
            {
                name: 'Unraveling',
                startYear: 2001,
                endYear: 2020,
                events: [
                    { year: 2001, label: '9/11 — security state and endless war era begin' },
                    { year: 2008, label: 'Global Financial Crisis' },
                    { year: 2016, label: 'Populist break — trust in system fractures' },
                ],
            },
        ],
    },
    {
        title: 'Decline / Multipolar Transition',
        startYear: 2020,
        endYear: 2100,
        resetType: 'stacked',
        resetLabel: 'Stacked Reset',
        resetNote:
            'Simultaneous internal and global stress — political fragmentation, global instability, structural pressures',
        phases: [
            {
                name: 'Reset / Crisis',
                startYear: 2020,
                endYear: 2040,
                events: [
                    { year: 2020, label: 'COVID-19 pandemic / global lockdowns' },
                    { year: 2020, label: 'Monetary debasement (trillions in stimulus)' },
                    { year: 2022, label: 'Russia invades Ukraine' },
                    { year: 2023, label: 'Middle Eastern conflicts' },
                    { year: 2023, label: 'AI race' },
                    { year: 2024, label: 'Epstein files released' },
                ],
            },
            {
                name: 'Order',
                startYear: 2040,
                endYear: 2060,
                events: [],
            },
            {
                name: 'Awakening',
                startYear: 2060,
                endYear: 2080,
                events: [],
            },
            {
                name: 'Unraveling',
                startYear: 2080,
                endYear: 2100,
                events: [],
            },
        ],
    },
]