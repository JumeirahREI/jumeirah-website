import ProjectDetails from "@/app/[locale]/(main)/projects/[project]/project-details-page";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import ProjectStructuredData from "@/components/project-structured-data";
import { alhathaaTowersData } from "@/data/alhathaa-towers";
import { manaratAlHudaydahData } from "@/data/manarat-al-hudaydah";
import { sanaaTowersData } from "@/data/sanaa-towers";
import { Project, ProjectData } from "@/data/types";
import { absoluteUrl } from "@/lib/site";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const projects = {
  "sanaa-towers": sanaaTowersData,
  "alhathaa-towers": alhathaaTowersData,
  "manarat-al-hudaydah": manaratAlHudaydahData,
} as const;

interface PageProps {
  params: Promise<{ locale: string; project: keyof typeof projects }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { project, locale } = await params;

  if (!projects[project]) {
    notFound();
  }

  const t = await getTranslations("Common");
  const projectT = await getTranslations(projects[project].projectKey);

  return (
    <>
      <ProjectStructuredData
        projectData={projects[project] as ProjectData<Project>}
        locale={locale}
        projectSlug={project}
      />
      <BreadcrumbSchema
        items={[
          { name: t("home"), url: absoluteUrl(locale) },
          { name: t("projects"), url: absoluteUrl(locale, "/projects") },
          {
            name: projectT("title"),
            url: absoluteUrl(locale, `/projects/${project}`),
          },
        ]}
      />
      <ProjectDetails projectData={projects[project] as ProjectData<Project>} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(projects).map((project) => ({
    project,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project, locale } = await params;

  if (!projects[project]) {
    notFound();
  }

  const t = await getTranslations(projects[project].projectKey);
  // Not every project namespace has a `meta-title` key yet (e.g. Manarat
  // Al-Hudaydah) — fall back to the plain `title` rather than rendering a
  // missing-message placeholder.
  const metaTitle = t.has("meta-title") ? t("meta-title") : t("title");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirahye.com";
  const currentUrl =
    locale === "ar"
      ? `${baseUrl}/projects/${project}`
      : `${baseUrl}/${locale}/projects/${project}`;

  return {
    title: metaTitle,
    description: t("meta-description"),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/en/projects/${project}`,
        ar: `${baseUrl}/projects/${project}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_YE" : "en_US",
      url: currentUrl,
      title: metaTitle,
      description: t("meta-description"),
      siteName: "Jumeirah Real Estate Investment",
      images: [
        {
          url: `${baseUrl}/images/${project}.webp`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: t("meta-description"),
      images: [`${baseUrl}/images/${project}-twitter.jpg`],
    },
  };
}
