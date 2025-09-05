import ProjectTowersDisplay from "@/app/[locale]/projects/components/project-towers-display";
import AppLink from "@/components/app-link";
import GotoIcon from "@/components/goto-icon";
import PageHeader from "@/components/page-header";
import { useTranslations } from "next-intl";
import { Project, ProjectData } from "../../../../data/types";

interface ProjectDetailsProps {
  projectData: ProjectData<Project>;
}

export default function ProjectDetails({ projectData }: ProjectDetailsProps) {
  console.log(projectData);

  const t = useTranslations(projectData.projectKey);
  const ct = useTranslations("Common");

  return (
    <>
      <PageHeader
        title={t.rich(projectData.title, {
          span: (s) => <span className="text-primary">{s}</span>,
        })}
        subTitle={t(projectData.subtitle)}
      >
        <div className="flex items-center justify-center gap-4">
          <GotoIcon alt="" className="" />
          <AppLink
            href="#"
            className="font-semibold lg:px-4 lg:py-2 lg:text-xl"
          >
            {ct("contact-us")}
          </AppLink>
        </div>
      </PageHeader>
      <main className="bg-background">
        <section className="relative z-30 container">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:mb-12">
            {ct.rich("include-two-towers", {
              span: (s) => <span className="text-primary">{s}</span>,
            })}
          </h2>
          <ProjectTowersDisplay projectData={projectData} />
        </section>
      </main>
    </>
  );
}
