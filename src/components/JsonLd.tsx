import { getSiteUrl, siteConfig } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();

  const organization = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    areaServed: {
      "@type": "City",
      name: "Edmonton",
      containedInPlace: { "@type": "AdministrativeArea", name: "Alberta" },
    },
    sameAs: [] as string[],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en-CA",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  );
}
