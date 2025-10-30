import { useTranslations } from "next-intl";

export default function StructuredData({ locale }: { locale: string }) {
  const t = useTranslations("Metadata");

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirahye.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Jumeirah Real Estate Investment",
    alternateName: "Jumeirah Real Estate Investment",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: t("description"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "YE",
      addressLocality: "Sana'a",
    },
    sameAs: [
      "https://www.facebook.com/JumeirahYemen",
      "https://www.instagram.com/JumeirahYemen",
      "https://www.linkedin.com/company/jumeirahye",
      "https://www.x.com/JumeirahYemen",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Arabic"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumeirah Real Estate Investment",
    url: baseUrl,
    description: t("description"),
    inLanguage: [locale],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}/projects?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
