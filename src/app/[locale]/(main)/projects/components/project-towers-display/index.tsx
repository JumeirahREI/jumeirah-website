import DataTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/data-tabs";
import DetailsPanel from "@/app/[locale]/(main)/projects/components/project-towers-display/details-panel";
import MediaPanel from "@/app/[locale]/(main)/projects/components/project-towers-display/media-panel";
import ModelTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/model-tabs";
import TowerTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/tower-tabs";
import { TowersDisplayProvider } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import { Project, ProjectData } from "@/data/types";

interface ProjectTowersDisplayProps {
  projectData: ProjectData<Project>;
}

export default function ProjectTowersDisplay({
  projectData,
}: ProjectTowersDisplayProps) {
  return (
    <TowersDisplayProvider projectData={projectData}>
      <div className="border-gradient-to-s border-gradient-width-0.5 border-gradient-to-[#14141400] border-gradient-from-[#7A7A7A99] z-10 space-y-6 rounded-4xl bg-linear-[268deg] from-[#1A1A1A] to-[#1A1A1A]/0 px-4 py-4 md:rounded-[3.5rem] md:px-7 md:py-7 lg:px-14 lg:py-14 xl:rounded-[4rem] xl:px-12 xl:py-12 2xl:space-y-12 2xl:rounded-[3.5rem] 2xl:px-10 2xl:py-10 rtl:bg-linear-[92deg]">
        <TowerTabs projectData={projectData} />
        <div className="tower-display-grid">
          <ModelTabs projectData={projectData} />
          <MediaPanel projectKey={projectData.projectKey} />
          <div className="description text-foreground/90">
            <DetailsPanel projectData={projectData} />
          </div>
          <div className="fade-end data-tabs no-scrollbar overflow-x-scroll pl-4">
            <DataTabs projectData={projectData} />
          </div>
        </div>
      </div>
    </TowersDisplayProvider>
  );
}
