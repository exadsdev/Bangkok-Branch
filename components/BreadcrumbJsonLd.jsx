import JsonLd from "./JsonLd";
import { SITE } from "@/seo.config";

export default function BreadcrumbJsonLd({ items = [] }) {
  if (!items.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: new URL(it.url, SITE.url).toString(),
    })),
  };

  return <JsonLd id="jsonld-breadcrumb" data={data} />;
}
