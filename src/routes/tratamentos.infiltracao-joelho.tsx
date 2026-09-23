import { createFileRoute } from "@tanstack/react-router";
import { TreatmentPage } from "@/components/TreatmentPage";
import { getTreatment, OG_IMAGE, SITE_URL } from "@/lib/treatments";
const treatment = getTreatment("infiltracao-joelho");
if (!treatment) throw new Error("Treatment not found");
const url = `${SITE_URL}/tratamentos/${treatment.slug}`;
export const Route = createFileRoute("/tratamentos/infiltracao-joelho")({ head: () => ({ meta: [{ title: treatment.metaTitle }, { name: "description", content: treatment.metaDescription }, { property: "og:title", content: treatment.metaTitle }, { property: "og:description", content: treatment.metaDescription }, { property: "og:type", content: "article" }, { property: "og:url", content: url }, { property: "og:image", content: OG_IMAGE }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: OG_IMAGE }], links: [{ rel: "canonical", href: url }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: treatment.title, description: treatment.metaDescription, url }) }] }), component: () => <TreatmentPage treatment={treatment} /> });
