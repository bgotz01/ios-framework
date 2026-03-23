// types/comprehensive-transits.ts
// Extended transit types for comprehensive transit analysis

import type { Planet, AspectType, ZodiacSign } from './astrology';

export interface TransitWindow {
    planet: Planet;
    aspectType: AspectType;
    natalPoint: Planet | string;
    startDate: Date;
    exactDate: Date;
    endDate: Date;
    orb: number;
}

export interface TransitTheme {
    title: string;
    description: string;
    planets: Planet[];
    intensity: 'Low' | 'Moderate' | 'High' | 'Extreme';
    startDate: Date;
    endDate: Date;
}

export interface TransitSummary {
    date: Date;
    activeWindows: TransitWindow[];
    themes: TransitTheme[];
    dominantPlanet?: Planet;
    overallIntensity: 'Low' | 'Moderate' | 'High' | 'Extreme';
}

export interface PlanetaryStation {
    planet: Planet;
    date: Date;
    longitude: number;
    sign: ZodiacSign;
    type: 'retrograde' | 'direct';
}

export interface EclipseEvent {
    date: Date;
    type: 'solar' | 'lunar';
    sign: ZodiacSign;
    degree: number;
    sarosNumber?: number;
}
