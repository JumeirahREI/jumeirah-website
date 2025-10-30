import { Project, ProjectData } from "@/data/types";
import { getTranslations } from "next-intl/server";

interface ProjectStructuredDataProps {
  projectData: ProjectData<Project>;
  locale: string;
  projectSlug: string;
}

export default async function ProjectStructuredData({
  projectData,
  locale,
  projectSlug,
}: ProjectStructuredDataProps) {
  const t = await getTranslations(projectData.projectKey);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirahye.com";
  const projectUrl = `${baseUrl}/${locale}/projects/${projectSlug}`;

  // Real Estate Listing Schema
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: t("title"),
    description: t("meta-description"),
    url: projectUrl,
    telephone: "+967778265522",
    address: {
      "@type": "PostalAddress",
      addressCountry: "YE",
      addressLocality: "Sana'a",
      addressRegion: "Sana'a Governorate",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.3694",
      longitude: "44.1910",
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
    image: `${baseUrl}/images/${projectSlug}.webp`,
    provider: {
      "@type": "RealEstateAgent",
      name: "Jumeirah Real Estate Investment",
      url: baseUrl,
    },
    ...(projectData.featuresSection && {
      amenityFeature: projectData.featuresSection.features.map((feature) => ({
        "@type": "LocationFeatureSpecification",
        name: t(feature.title),
      })),
    }),
  };

  // Apartment Complex Schema (if towers exist)
  const apartmentComplexSchema = projectData.towersSection
    ? {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        name: t("title"),
        description: t("meta-description"),
        address: {
          "@type": "PostalAddress",
          addressCountry: "YE",
          addressLocality: "Sana'a",
        },
        numberOfBedrooms: "2-4",
        numberOfBathroomsTotal: "2-3",
        amenityFeature: projectData.featuresSection?.features.map(
          (feature) => ({
            "@type": "LocationFeatureSpecification",
            name: t(feature.title),
          }),
        ),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateSchema),
        }}
      />
      {apartmentComplexSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentComplexSchema),
          }}
        />
      )}
    </>
  );
}
