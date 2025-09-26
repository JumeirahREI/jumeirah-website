import FeaturesSection from "@/app/[locale]/projects/[project]/features.section";
import ProjectTowersDisplay from "@/app/[locale]/projects/components/project-towers-display";
import AppLink from "@/components/app-link";
import PageHeader from "@/components/page-header";
import { useTranslations } from "next-intl";
import { Project, ProjectData } from "../../../../data/types";

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
        <div className="flex items-center justify-center gap-4">
          {/* <GotoIcon alt="" className="" /> */}
          <AppLink
            href="#"
            className="font-semibold lg:px-4 lg:py-2 lg:text-xl"
          >
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
