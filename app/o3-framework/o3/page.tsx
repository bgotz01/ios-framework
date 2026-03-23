import OutlierSpectrum from "@/components/o3/OutlierSpectrum";
import OutlierSpectrumCompact from "@/components/o3/OutlierSpectrumCompact";
import { jesusOutlierExample } from "@/data/outliers/jesus";
import { jesus5OutlierExample } from "@/data/outliers/jesus-5";
import { mosesOutlierExample } from "@/data/outliers/moses";
import { moses5OutlierExample } from "@/data/outliers/moses-5";
import { muhammadOutlierExample } from "@/data/outliers/muhammad";
import { muhammad5OutlierExample } from "@/data/outliers/muhammad-5";

export default function O3OutlierPage() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
            <OutlierSpectrumCompact example={jesus5OutlierExample} />
            <OutlierSpectrumCompact example={moses5OutlierExample} />


            <OutlierSpectrum example={jesusOutlierExample} />
            <OutlierSpectrum example={mosesOutlierExample} />

        </div>
    );
}
