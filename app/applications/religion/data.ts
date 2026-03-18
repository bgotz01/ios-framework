//applications/religion/data.ts
import { ReligionExampleData } from "@/components/ApplicationReligionExample";

const examples: ReligionExampleData[] = [
    {
        slug: "paganism-vs-judaism",
        topic: "Religion",
        title: "Paganism vs Judaism",
        subtitle: "Obvious • Opposites • Outliers",
        description: "How monotheism inverted the foundations of ancient pagan religion.",
        coreDifferences: {
            labels: ["Pagan", "Judaism"],
            rows: [
                { left: "Cosmic order", right: "Covenant" },
                { left: "Divine kingship", right: "Liberation from kings" },
                { left: "Ritual maintenance", right: "Moral law" },
            ],
        },
        previousSystem: {
            headline: "Many local gods, controlled by priests.",
            summary: "Religion was fragmented, geographic, and transactional — ritual compliance over moral behavior.",
        },
        winningIdea: {
            headline: "There is one universal God.",
            summary: "That idea reshaped religion for billions of people and still defines much of the world today.",
        },
        obvious: {
            summary: "Ancient religion was a local power structure. Temples and priesthoods controlled ritual sacrifice to maintain favor with the gods.",
            bullets: [
                "Temples and priesthoods controlled ritual sacrifice",
                "Religion closely tied to political authority",
                "Gods were tied to specific places and peoples",
                "Ritual compliance mattered more than moral behavior",
            ],
            conclusion: "The tension: religion was fragmented, local, and ritualistic — with little universal moral structure.",
        },
        opposites: {
            summary: "Judaism introduced a radical inversion. Every pillar of pagan religion was flipped.",
            comparisonLabels: ["Pagan", "Judaism"],
            rows: [
                { before: "Cosmic order", after: "Covenant" },
                { before: "Divine kingship", after: "Liberation from kings" },
                { before: "Ritual maintenance", after: "Moral law" },
            ],
            conclusion: "The shift was not just theological — it changed the structure of religion itself.",
        },
        outliers: {
            summary: "The outlier was the monotheistic covenant tradition embodied in the Hebrew narrative.",
            items: [
                { concept: "The Covenant", manifestation: "Abraham", role: "A personal relationship with one universal God, replacing transactional ritual" },
                { concept: "The Law", manifestation: "Moses", role: "Ethics and morality as the foundation of religion, not sacrifice" },
                { concept: "The Text", manifestation: "The Torah", role: "A portable, universal scripture — religion no longer tied to a place" },
            ],
            legacy: [
                { name: "Judaism", desc: "The origin — covenant, law, and monotheism" },
                { name: "Christianity", desc: "The expansion — universal salvation through one God" },
                { name: "Islam", desc: "The completion — final revelation of the same God" },
            ],
        },
    },
    {
        slug: "judaism-vs-christianity",
        topic: "Religion",
        title: "Judaism vs Christianity",
        subtitle: "Obvious • Opposites • Outliers",
        description: "How Christianity universalized the Jewish covenant and broke from its ethnic and legal boundaries.",
        coreDifferences: {
            labels: ["Judaism", "Christianity"],
            rows: [
                { left: "Covenant with one people", right: "Salvation for all people" },
                { left: "Law as the path to God", right: "Faith as the path to God" },
                { left: "Ethnic identity", right: "Spiritual rebirth" },
            ],
        },
        previousSystem: {
            headline: "A covenant for one people, governed by law.",
            summary: "Judaism was a national religion — the covenant was with Israel, mediated through Torah observance and priestly ritual.",
        },
        winningIdea: {
            headline: "Salvation is universal, through faith.",
            summary: "Christianity broke the ethnic and legal boundaries of Judaism, offering the covenant to all people through belief rather than law.",
        },
        obvious: {
            summary: "Judaism was a covenant religion tied to a specific people, land, and legal code. Membership was ethnic and ritual observance was central.",
            bullets: [
                "The covenant was with the Jewish people specifically",
                "Torah law governed religious and civil life",
                "Temple sacrifice was the mechanism of atonement",
                "Gentiles were outside the covenant without conversion",
            ],
            conclusion: "The tension: a universal God with a particular people — the covenant felt bounded and exclusive.",
        },
        opposites: {
            summary: "Christianity inverted the core assumptions of Jewish religious identity.",
            comparisonLabels: ["Jewish Framework", "Christian Inversion"],
            rows: [
                { before: "Covenant with one people", after: "Salvation for all people" },
                { before: "Law as the path to God", after: "Faith as the path to God" },
                { before: "Temple sacrifice", after: "Christ as final sacrifice" },
                { before: "Ethnic identity", after: "Spiritual rebirth" },
            ],
            conclusion: "Christianity kept the monotheistic foundation but dissolved the ethnic and legal boundaries.",
        },
        outliers: {
            summary: "Two figures drove the transformation — Jesus reframed the covenant, Paul universalized it.",
            items: [
                { concept: "The Reinterpretation", manifestation: "Jesus", role: "The law fulfilled through love and inner transformation, not ritual observance" },
                { concept: "The Universalization", manifestation: "Paul", role: "The covenant was always meant for all nations — faith over ethnic identity" },
                { concept: "The Narrative", manifestation: "The Gospels", role: "The new covenant written in a portable form that could cross any culture" },
            ],
            legacy: [
                { name: "Catholicism", desc: "The institutional church — universal authority through Rome" },
                { name: "Protestantism", desc: "The reformation — scripture and faith over institutional hierarchy" },
                { name: "Orthodoxy", desc: "The eastern tradition — continuity with early Christian practice" },
            ],
        },
    },
    {
        slug: "christianity-vs-islam",
        topic: "Religion",
        title: "Christianity vs Islam",
        subtitle: "Obvious • Opposites • Outliers",
        description: "How Islam reasserted strict monotheism and challenged the theological drift of Christianity.",
        coreDifferences: {
            labels: ["Christianity", "Islam"],
            rows: [
                { left: "Trinity", right: "Absolute oneness (Tawhid)" },
                { left: "Christ as intermediary", right: "No intermediary" },
                { left: "Church authority", right: "Direct submission to God" },
            ],
        },
        previousSystem: {
            headline: "God mediated through Christ, church, and clergy.",
            summary: "Christianity had developed complex theology — the Trinity, the incarnation, and an institutional church standing between the individual and God.",
        },
        winningIdea: {
            headline: "There is no God but God, and no intermediary.",
            summary: "Islam stripped away theological complexity and institutional mediation, returning to direct, uncompromising monotheism.",
        },
        obvious: {
            summary: "By the 7th century, Christianity had become theologically complex and institutionally powerful. The church mediated access to God through clergy, sacrament, and doctrine.",
            bullets: [
                "The Trinity introduced complexity into monotheism",
                "The church held authority over salvation",
                "Clergy mediated between God and the individual",
                "Theological disputes fragmented Christian unity",
            ],
            conclusion: "The tension: a religion founded on one God had become layered with doctrine, hierarchy, and institutional power.",
        },
        opposites: {
            summary: "Islam inverted the theological and institutional assumptions of Christianity.",
            comparisonLabels: ["Christian Framework", "Islamic Inversion"],
            rows: [
                { before: "Trinity (Father, Son, Holy Spirit)", after: "Absolute oneness of God (Tawhid)" },
                { before: "Christ as divine intermediary", after: "No intermediary between God and man" },
                { before: "Church as institutional authority", after: "Direct submission to God (Islam)" },
                { before: "Salvation through sacrament", after: "Salvation through faith and practice" },
            ],
            conclusion: "Islam reasserted the radical simplicity of monotheism — one God, one text, direct relationship.",
        },
        outliers: {
            summary: "Muhammad received and transmitted the final revelation, and the Quran became the definitive, unalterable word of God.",
            items: [
                { concept: "The Revelation", manifestation: "Muhammad", role: "The final prophet — direct receiver of divine speech, no intermediary" },
                { concept: "The Scripture", manifestation: "The Quran", role: "The unaltered word of God — superseding and correcting all prior texts" },
                { concept: "The Community", manifestation: "The Hijra", role: "The founding event — Islam as both a religious and political order" },
            ],
            legacy: [
                { name: "Sunni", desc: "The majority tradition — authority through community consensus" },
                { name: "Shia", desc: "The minority tradition — authority through the lineage of Ali" },
                { name: "Sufism", desc: "The mystical tradition — direct inner experience of God" },
            ],
        },
    },
];

export default examples;
