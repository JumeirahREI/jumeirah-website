import DataTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/data-tabs";
import DetailsPanel from "@/app/[locale]/(main)/projects/components/project-towers-display/details-panel";
import MediaPanel from "@/app/[locale]/(main)/projects/components/project-towers-display/media-panel";
import ModelTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/model-tabs";
import TowerTabs from "@/app/[locale]/(main)/projects/components/project-towers-display/tower-tabs";
import { TowersDisplayProvider } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import React, { useId } from "react";

interface ProjectTowersDisplayProps {
  projectData: ProjectData<Project>;
}

const MemoizedTowerTabs = React.memo(TowerTabs);
const MemoizedModelTabs = React.memo(ModelTabs);
const MemoizedMediaPanel = React.memo(MediaPanel);
const MemoizedDetailsPanel = React.memo(DetailsPanel);
const MemoizedDataTabs = React.memo(DataTabs);

const containerClasses =
  "border-gradient-to-s [--padding-x:1rem] md:[--padding-x:1.75rem] lg:[--padding-x:2.5rem] lg:border-gradient-width-0.5 border-gradient-to-[#14141400] border-gradient-from-[#7A7A7A99] z-10 space-y-6 rounded-4xl bg-linear-[268deg] from-[#1A1A1AE5] to-[#1A1A1A12] ltr:lg:pr-[var(--padding-x)] rtl:lg:pl-[var(--padding-x)] py-4 md:rounded-[3.5rem] md:py-7 lg:py-10 xl:rounded-[4rem] 2xl:space-y-6 2xl:rounded-[3.5rem] rtl:bg-linear-[100deg]";

const ProjectTowersDisplay = React.memo(
  ({ projectData }: ProjectTowersDisplayProps) => {
    const t = useTranslations(projectData.projectKey);
    const ct = useTranslations("Common");
    const componentId = useId();
    const tabPanelId = `${componentId}-tabpanel`;
    const tabListId = `${componentId}-tablist`;

    return (
      <TowersDisplayProvider projectData={projectData}>
        <section
          className={containerClasses}
          aria-label={t("title")}
          role="region"
        >
          <div
            role="tablist"
            aria-label={ct("tabs.navigation")}
            id={tabListId}
            className="relative"
          >
            <div className="w-full">
              <h2 className="sr-only">{ct("towers.title")}</h2>
              <MemoizedTowerTabs
                projectData={projectData}
                tabPanelId={tabPanelId}
                tabListId={tabListId}
              />
            </div>
          </div>

          <div
            id={tabPanelId}
            role="tabpanel"
            aria-labelledby={`${componentId}-tab`}
            className="tower-display-grid h-[calc(100vh-18rem)] min-h-[28rem] rounded-lg lg:max-h-[31rem]"
            tabIndex={0}
            aria-live="polite"
            aria-atomic="true"
          >
            <MemoizedModelTabs
              projectData={projectData}
              aria-controls={tabPanelId}
            />
            <MemoizedMediaPanel
              projectKey={projectData.projectKey}
              aria-label={ct("tabs.media")}
            />
            <div
              className="description text-foreground/90 scrollbar fade-y overflow-y-auto py-8 ltr:lg:mr-4 rtl:lg:ml-4 [&>*]:px-[var(--padding-x)]"
              aria-live="polite"
              aria-atomic="true"
            >
              <MemoizedDetailsPanel projectData={projectData} />
            </div>
            <div
              className="data-tabs max-w-full"
              role="tablist"
              aria-label={ct("tabs.data")}
            >
              <MemoizedDataTabs projectData={projectData} />
            </div>
          </div>
        </section>
      </TowersDisplayProvider>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.projectData.projectKey === nextProps.projectData.projectKey
    );
  },
);

ProjectTowersDisplay.displayName = "ProjectTowersDisplay";

export default ProjectTowersDisplay;
