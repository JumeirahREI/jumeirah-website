import { getTranslations } from "next-intl/server";

export default async function ContactStructuredData({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations("ContactUs");

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirahye.com";

  // LocalBusiness Schema with ContactPoint
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Jumeirah Real Estate Investment",
    image: `${baseUrl}/images/logo.png`,
    "@id": baseUrl,
    url: baseUrl,
    telephone: "+967778265522",
    address: {
      "@type": "PostalAddress",
      streetAddress: t("location"),
      addressLocality: "Sana'a",
      addressRegion: "Sana'a Governorate",
      addressCountry: "YE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.3694,
      longitude: 44.191,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.facebook.com/JumeirahYemen",
      "https://www.instagram.com/JumeirahYemen",
      "https://www.linkedin.com/company/jumeirahye",
      "https://www.x.com/JumeirahYemen",
    ],
  };

  // ContactPage Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t("contact-us"),
    description: t("description"),
    url: `${baseUrl}/${locale}/contact`,
    mainEntity: {
      "@type": "RealEstateAgent",
      name: "Jumeirah Real Estate Investment",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+967778265522",
        contactType: "Customer Service",
        availableLanguage: ["English", "Arabic"],
        areaServed: "YE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
    </>
  );
}
