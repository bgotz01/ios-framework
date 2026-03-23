// app/api/tension-history/route.ts
// Serves pre-generated static data from public/data/tension-history.json
// To regenerate: npx tsx scripts/generate-tension-history.ts

import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

let cache: unknown[] | null = null;

export async function GET() {
    try {
        if (!cache) {
            const filePath = join(process.cwd(), 'public', 'data', 'tension-history.json');
            const raw = readFileSync(filePath, 'utf-8');
            cache = JSON.parse(raw);
        }
        return NextResponse.json(cache);
    } catch (error) {
        console.error('tension-history: static file not found. Run: npx tsx scripts/generate-tension-history.ts');
        return NextResponse.json({ error: 'Data not generated yet. Run the generation script.' }, { status: 503 });
    }
}
