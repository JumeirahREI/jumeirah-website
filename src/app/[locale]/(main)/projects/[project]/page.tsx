import ProjectDetails from "@/app/[locale]/(main)/projects/[project]/project-details-page";
import { alhathaaTowersData } from "@/data/alhathaa-towers";
import { sanaaTowersData } from "@/data/sanaa-towers";
import { Project, ProjectData } from "@/data/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const projects = {
  "sanaa-towers": sanaaTowersData,
  "alhathaa-towers": alhathaaTowersData,
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

  return (
    <ProjectDetails projectData={projects[project] as ProjectData<Project>} />
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
  const { project } = await params;

  if (!projects[project]) {
    notFound();
  }

  const t = await getTranslations(projects[project].projectKey);

  return {
    title: t("title"),
    description: t("meta-description"),
  };
}
