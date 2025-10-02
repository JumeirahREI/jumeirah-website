import FeaturesSection from "@/app/[locale]/(main)/projects/[project]/features.section";
import ProjectTowersDisplay from "@/app/[locale]/(main)/projects/components/project-towers-display";
import AppLink from "@/components/app-link";
import PageHeader from "@/components/page-header";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  projectData: ProjectData<Project>;
}

export default function ProjectDetails({ projectData }: ProjectDetailsProps) {
  const t = useTranslations(projectData.projectKey);
  const ct = useTranslations("Common");

  return (
    <>
      <PageHeader
        className={
          projectData.projectKey === "SanaaTowers"
            ? "[&_h1]:from-[1.5ch] [&_h1]:to-[1.5ch]"
            : "[&_h1]:first-letter-primary [&_h1]:text-foreground"
        }
        title={t(projectData.title)}
        subTitle={t(projectData.subtitle)}
      >
        <div className="flex items-center justify-center gap-4 text-xs font-semibold md:gap-6 md:text-sm lg:text-base">
          <AppLink href="/contact" className="lg:py-2">
            {ct("contact-us")}
          </AppLink>
        </div>
      </PageHeader>
      <main className="bg-background mb-32 space-y-32 lg:mb-52 lg:space-y-52">
        <section className="relative z-30 container">
          <h2 className="mb-5 text-center text-3xl md:text-4xl lg:text-5xl 2xl:mb-12">
            {ct.rich("include-two-towers", {
              span: (s) => <span className="text-primary">{s}</span>,
            })}
          </h2>
          <ProjectTowersDisplay projectData={projectData} />
        </section>
        <FeaturesSection projectData={projectData} />
      </main>
    </>
  );
}
