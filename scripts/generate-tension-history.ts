// scripts/generate-tension-history.ts
// Run with: npx tsx scripts/generate-tension-history.ts

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { swissEphemeris } from '../lib/astrology/ephemeris/swisseph-provider';
import { generateTensionHistoryReal } from '../lib/astrology/tension-history-real';

async function main() {
    console.log('Generating tension history (1900–2050)...');

    const data = await generateTensionHistoryReal(
        swissEphemeris,
        1900, 1,
        2050, 12
    );

    const outDir = join(process.cwd(), 'public', 'data');
    mkdirSync(outDir, { recursive: true });

    const outPath = join(outDir, 'tension-history.json');
    writeFileSync(outPath, JSON.stringify(data));

    console.log(`Done. ${data.length} data points written to ${outPath}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
