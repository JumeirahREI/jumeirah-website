import { Project, ProjectData } from "@/data/types";
import { absoluteUrl, siteConfig } from "@/lib/site";
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

  const projectUrl = absoluteUrl(locale, `/projects/${projectSlug}`);

  // Real Estate Listing Schema
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: t("title"),
    description: t("meta-description"),
    url: projectUrl,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.dayOfWeek,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    image: `${siteConfig.baseUrl}/images/${projectSlug}.webp`,
    provider: {
      "@type": "RealEstateAgent",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
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
          addressCountry: siteConfig.address.country,
          addressLocality: siteConfig.address.locality,
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
