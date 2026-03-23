import { BirthData, BirthChart } from '@/types/astrology';
import { calculateRealBirthChart } from './real-calculator';

/**
 * Server-side calculator that safely imports Swiss Ephemeris
 */
export async function calculateBirthChart(birthData: BirthData): Promise<BirthChart> {
    try {
        return await calculateRealBirthChart(birthData);
    } catch (error) {
        console.error('Swiss Ephemeris calculation failed:', error);
        throw new Error(`Failed to calculate birth chart: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Check if Swiss Ephemeris is available on the server
 */
export async function isSwissEphemerisAvailable(): Promise<boolean> {
    try {
        // Try to import Swiss Ephemeris
        await import('swisseph-v2');
        return true;
    } catch {
        return false;
    }
}