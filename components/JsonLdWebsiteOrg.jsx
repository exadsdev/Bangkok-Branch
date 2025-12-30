import JsonLd from "./JsonLd";
import { SITE, BRAND, LOGO_URL } from "@/seo.config";

export default function JsonLdWebsiteOrg() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: BRAND.legalName || SITE.name,
    url: SITE.url,
    logo: new URL(LOGO_URL, SITE.url).toString(),
    email: BRAND.email,
    telephone: BRAND.phone,
    address: BRAND.address
      ? {
          "@type": "PostalAddress",
          streetAddress: BRAND.address,
        }
      : undefined,
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "th-TH",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd id="jsonld-org" data={org} />
      <JsonLd id="jsonld-website" data={website} />
    </>
  );
}
