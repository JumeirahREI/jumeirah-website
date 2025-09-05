import ProjectDetails from "@/app/[locale]/projects/[project]/project-details-page";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { sanaaTowersData } from "../../../../data/sanaa-towers";

const projects = {
  "sanaa-towers": sanaaTowersData,
  // "alhathaa-towers": {key: "Alhathaa-Towers", data: alhathaaTowersData},
} as const;

interface PageProps {
  params: Promise<{ locale: string; project: keyof typeof projects }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { project } = await params;

  if (!projects[project]) {
    notFound();
  }

  console.log(projects[project]);

  return <ProjectDetails projectData={projects[project]} />;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((project) => ({
    project,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project } = await params;

  if (!projects[project]) {
    notFound();
  }

  const t = await getTranslations(projects[project].projectKey);

  return {
    title: t("meta-title"),
    description: t("meta-description"),
  };
}
