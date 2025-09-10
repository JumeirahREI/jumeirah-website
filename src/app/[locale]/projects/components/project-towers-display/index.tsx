import DataTabs from "@/app/[locale]/projects/components/project-towers-display/data-tabs";
import DetailsPanel from "@/app/[locale]/projects/components/project-towers-display/details-panel";
import MediaContainer from "@/app/[locale]/projects/components/project-towers-display/media-container";
import ModelTabs from "@/app/[locale]/projects/components/project-towers-display/model-tabs";
import TowerTabs from "@/app/[locale]/projects/components/project-towers-display/tower-tabs";
import { TowersDisplayProvider } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";

interface ProjectTowersDisplayProps {
  projectData: ProjectData<Project>;
}

export default function ProjectTowersDisplay({
  projectData,
}: ProjectTowersDisplayProps) {
  const t = useTranslations(projectData.projectKey);

  return (
    <TowersDisplayProvider projectData={projectData}>
      <div className="border-gradient-to-s border-gradient-width-0.5 border-gradient-to-[#14141400] border-gradient-from-[#7A7A7A99] z-10 space-y-6 rounded-4xl bg-linear-[268deg] from-[#1A1A1A] to-[#1A1A1A]/0 py-4 pr-4 md:rounded-[3.5rem] md:py-7 md:pr-7 lg:py-14 lg:pr-14 xl:rounded-[4rem] xl:py-12 xl:pr-12 2xl:space-y-12 2xl:rounded-[3.5rem] 2xl:py-10 2xl:pr-10 rtl:bg-linear-[92deg] rtl:pl-4 rtl:md:pl-7 rtl:lg:pl-14 rtl:xl:pl-12 rtl:2xl:pl-10">
        <TowerTabs projectData={projectData} />
        <div className="tower-display-grid">
          <div className="fade-x model-tabs no-scrollbar overflow-x-scroll pl-4 md:row-start-1 md:pl-7 lg:pl-14 xl:pl-12 2xl:pl-10 rtl:pr-4 rtl:md:pr-7 rtl:lg:pr-14 rtl:xl:pr-12 rtl:2xl:pr-10">
            <ModelTabs projectData={projectData} />
          </div>
          <div className="media max-md:pl-4 max-md:rtl:pr-4">
            <MediaContainer
              className="relative h-full min-h-52"
              projectKey={projectData.projectKey}
            />
          </div>
          <div className="description text-foreground/90 p-4 md:p-7 lg:p-14 xl:p-12 2xl:p-10">
            <DetailsPanel projectData={projectData} />
          </div>
          <div className="fade-x data-tabs no-scrollbar overflow-x-scroll pl-4 md:pl-7 lg:pl-14 xl:pl-12 2xl:pl-10 rtl:pr-4 rtl:md:pr-7 rtl:lg:pr-14 rtl:xl:pr-12 rtl:2xl:pr-10">
            <DataTabs projectData={projectData} />
          </div>
        </div>
      </div>
    </TowersDisplayProvider>
  );
}
