export type OutlierLevel = {
    id: string;
    title: string;
    shortLabel?: string;
    subtitle?: string;
    rarity: number;      // 0-100
    frequency?: number;  // optional visual inverse
    description: string;
};

export type OutlierExample = {
    slug: string;
    title: string;
    subtitle?: string;
    axisStartLabel?: string;
    axisEndLabel?: string;
    axisStartSubLabel?: string;
    axisEndSubLabel?: string;
    levels: OutlierLevel[];
};