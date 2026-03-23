// lib/astrology/tension/ingresses.ts

import type { FinalIngress } from '../ephemeris/types';

/**
 * Count how many ingresses fall within `months` months after `fromDate`.
 */
export function countIngressesWithin(
    ingresses: FinalIngress[],
    fromDate: Date,
    months: number
): number {
    const from = fromDate.getTime();
    const to = new Date(fromDate);
    to.setUTCMonth(to.getUTCMonth() + months);
    const toTime = to.getTime();

    return ingresses.filter((x) => {
        const t = Date.parse(x.ingressDate);
        return t >= from && t <= toTime;
    }).length;
}
