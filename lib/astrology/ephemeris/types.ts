// lib/astrology/ephemeris/types.ts

export type Planet = 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';

export type PlanetPos = {
    planet: Planet;
    lonDeg: number; // 0..360
    retrograde?: boolean;
};

export type FinalIngress = {
    planet: Planet;
    ingressDate: string; // ISO
    sign: string;
};

export type EphemerisProvider = {
    /**
     * Return ecliptic longitude (0..360) for each requested planet at a UTC date/time.
     */
    getPlanetPositionsUTC(date: Date, planets: Planet[]): Promise<PlanetPos[]>;

    /**
     * Return "final ingress" dates for outer planets across a range.
     * Precompute once and cache.
     */
    getFinalIngressesUTC(
        rangeStart: Date,
        rangeEnd: Date,
        planets: Planet[]
    ): Promise<FinalIngress[]>;
};
