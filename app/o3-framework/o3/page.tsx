import OutlierTabs from "@/components/o3/OutlierTabs";
import { jesus5OutlierExample } from "@/data/outliers/jesus-5";
import { moses5OutlierExample } from "@/data/outliers/moses-5";

import { batman5OutlierExample } from "@/data/outliers/batman-5";
import { steveJobs5OutlierExample } from "@/data/outliers/steve-jobs-5";
import { neo5OutlierExample } from "@/data/outliers/neo-5";

const tabs = [
    { label: "Jesus", example: jesus5OutlierExample },
    { label: "Moses", example: moses5OutlierExample },

    { label: "Batman", example: batman5OutlierExample },
    { label: "Steve Jobs", example: steveJobs5OutlierExample },
    { label: "Neo", example: neo5OutlierExample },
];

export default function O3OutlierPage() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <OutlierTabs tabs={tabs} />
        </div>
    );
}
