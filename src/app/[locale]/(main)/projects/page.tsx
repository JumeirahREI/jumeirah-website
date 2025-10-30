import ProjectsSection from "@/app/[locale]/(main)/projects/components/sections/projects.section";
import AppLink from "@/components/app-link";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = useTranslations("ProjectsPage");
  const ct = useTranslations("Common");
  const homeT = await getTranslations("Common");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: homeT("home"), url: `/${locale}` },
          { name: homeT("projects"), url: `/${locale}/projects` },
        ]}
      />
      <PageHeader title={t("title")} subTitle={t("sub-title")}>
        <div className="flex items-center justify-center gap-4 text-xs font-semibold md:gap-6 md:text-sm lg:text-base">
          <AppLink variant="outline" href="#" className="lg:py-2">
            {ct("our-services")}
          </AppLink>
          <AppLink href="/contact" className="lg:py-2">
            {ct("contact-us")}
          </AppLink>
        </div>
      </PageHeader>
      <main>
        <ProjectsSection />
        {/* <OurPartnersSection /> */}
      </main>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const t = await getTranslations("ProjectsPage");
  const { locale } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirahye.com";
  const currentUrl = `${baseUrl}/${locale}/projects`;

  return {
    title: t("meta-title"),
    description: t("meta-description"),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/en/projects`,
        ar: `${baseUrl}/ar/projects`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_YE" : "en_US",
      url: currentUrl,
      title: t("meta-title"),
      description: t("meta-description"),
      siteName: "Jumeirah Real Estate Investment",
      images: [
        {
          url: `${baseUrl}/images/projects-og.jpg`,
          width: 1200,
          height: 630,
          alt: t("meta-title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta-title"),
      description: t("meta-description"),
      images: [`${baseUrl}/images/projects-twitter.jpg`],
    },
  };
}
