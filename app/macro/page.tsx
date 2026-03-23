'use client';

import { useState, useEffect } from 'react';
import { MacroNavigation } from '@/components/astrology/macro/MacroNavigation';
import { MacroSnapshot } from '@/components/astrology/macro/MacroSnapshot';
import { StructuralLayer } from '@/components/astrology/macro/StructuralLayer';
import { ConjunctionLayer } from '@/components/astrology/macro/ConjunctionLayer';
import { AgeCycle } from '@/components/astrology/macro/AgeCycle';
import { SocialRegulatorLayer } from '@/components/astrology/macro/SocialRegulatorLayer';
import { ActiveStructuralAlignments } from '@/components/astrology/macro/ActiveStructuralAlignments';
import { TensionIndex } from '@/components/astrology/macro/TensionIndex';
import { TensionTimeline } from '@/components/astrology/macro/TensionTimeline';
import { CycleTimeline } from '@/components/astrology/macro/CycleTimeline';
import type { TensionDataPoint } from '@/lib/astrology/tension-history-real';

export default function MacroTransitsPage() {
    const [tensionHistoryData, setTensionHistoryData] = useState<TensionDataPoint[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTensionData() {
            try {
                const response = await fetch('/api/tension-history');
                if (response.ok) {
                    const data = await response.json();
                    // Filter to 2020-2030 for the main page
                    const filtered = data.filter((d: TensionDataPoint) => d.year >= 2020 && d.year <= 2030);
                    setTensionHistoryData(filtered);
                }
            } catch (error) {
                console.error('Error loading tension data:', error);
            } finally {
                setLoading(false);
            }
        }
        loadTensionData();
    }, []);

    // Mock data - in production, fetch from API
    const snapshotData = [
        { planet: '♇ Pluto', sign: 'Aquarius', degree: 2.5, phase: 'Early' as const },
        { planet: '♆ Neptune', sign: 'Aries', degree: 1.2, phase: 'Early' as const },
        { planet: '♅ Uranus', sign: 'Gemini', degree: 3.8, phase: 'Early' as const },
        { planet: '♄ Saturn', sign: 'Pisces', degree: 18.4, phase: 'Mid' as const },
        { planet: '♃ Jupiter', sign: 'Cancer', degree: 12.7, phase: 'Mid' as const },
    ];

    const saturnData = {
        sign: 'Pisces',
        degree: 18.4,
        yearsActive: 'Mar 2023 – May 2025',
        beingRegulated: [
            'Boundaries and structure in spiritual/digital domains',
            'Institutional credibility and trust',
            'Financial system constraints post-liquidity era',
        ],
        beingTested: [
            'Ability to maintain order amid narrative fragmentation',
            'Traditional authority structures',
            'Regulatory frameworks for emerging tech',
        ],
    };

    const jupiterData = {
        sign: 'Cancer',
        degree: 12.7,
        yearsActive: 'Jun 2025 – Jun 2026',
        growing: [
            'Domestic policy and national priorities',
            'Family-oriented economic incentives',
            'Emotional/cultural narratives in politics',
        ],
        optimismSits: [
            'Home construction and real estate',
            'Childcare and family support systems',
            'Nostalgia-driven consumer behavior',
        ],
    };

    const aspectsData = [
        {
            planet1: 'Neptune',
            planet2: 'Pluto',
            aspectType: 'Sextile',
            orb: 2.3,
            peakDate: '2026-2028',
            archetype: 'Myth meets structure',
            description: 'Narrative layer supports regime transformation. Belief systems align with power shifts.',
        },
    ];

    const tensionData = {
        score: tensionHistoryData.length > 0 ? tensionHistoryData[tensionHistoryData.length - 1].score : 0,
        hardAspectsCount: tensionHistoryData.length > 0 ? tensionHistoryData[tensionHistoryData.length - 1].hardAspectsCount : 0,
        signChangesWithin2Years: tensionHistoryData.length > 0 ? tensionHistoryData[tensionHistoryData.length - 1].signChangesWithin2Years : 0,
        saturnAspectingOuterPlanets: tensionHistoryData.length > 0 ? tensionHistoryData[tensionHistoryData.length - 1].saturnAspectingOuterPlanets : false,
        tensionLevel: (tensionHistoryData.length > 0 ? tensionHistoryData[tensionHistoryData.length - 1].level : 'Low') as 'Low' | 'Moderate' | 'High' | 'Extreme',
        details: tensionHistoryData.length > 0 ? (tensionHistoryData[tensionHistoryData.length - 1].topEvents || []) : [],
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">Macro Cycles</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Strategic. Not mystical. The planetary architecture shaping our era.
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Navigation */}
                    <div className="mb-8">
                        <MacroNavigation />
                    </div>

                    <hr className="border-border/50" />

                    {/* 1. Macro Snapshot */}
                    <MacroSnapshot positions={snapshotData} />

                    <hr className="border-border/50" />

                    {/* 2. Cycle Timeline */}
                    <CycleTimeline />

                    <hr className="border-border/50" />

                    {/* 3. Structural Planets */}
                    <StructuralLayer />

                    <hr className="border-border/50" />
                    {/* 6. Social Regulator Layer */}
                    <SocialRegulatorLayer saturn={saturnData} jupiter={jupiterData} />

                    <hr className="border-border/50" />

                    {/* 4. Conjunction Layer */}
                    <ConjunctionLayer />

                    <hr className="border-border/50" />

                    {/* 5. Age Cycle */}
                    <AgeCycle />

                    <hr className="border-border/50" />



                    {/* 7. Active Structural Alignments */}
                    <ActiveStructuralAlignments aspects={aspectsData} />

                    <hr className="border-border/50" />

                    {/* 8. Tension Index */}
                    <TensionIndex {...tensionData} />

                    {/* 9. Tension Timeline */}
                    {!loading && tensionHistoryData.length > 0 && (
                        <>
                            <hr className="border-border/50" />
                            <TensionTimeline data={tensionHistoryData} />
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-sm text-muted-foreground">
                    <p>This page shows structural forces, not daily horoscopes.</p>
                </div>
            </div>
        </div>
    );
}
