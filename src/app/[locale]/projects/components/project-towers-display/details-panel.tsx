"use client";

import TowerDisplayImage from "@/app/[locale]/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";

export default function DetailsPanel({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations(projectData.projectKey);
  const {
    selectedDataTab,
    selectedTower,
    selectedModel,
    mediaContainerData,
    selectedMediaIndex,
    setSelectedMediaIndex,
  } = useTowersDisplayContext();

  const selectedModelData =
    projectData.towersSection[selectedTower].models[selectedModel];

  if (selectedDataTab === "layout") {
    return (
      <p className="leading-normal 2xl:w-9/12 2xl:text-2xl">
        {t(projectData.towersSection[0].models[0].layout.description)}
      </p>
    );
  }

  if (selectedDataTab === "photos" && Array.isArray(mediaContainerData)) {
    return (
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        {mediaContainerData.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedMediaIndex(index)}
            data-selected={index === selectedMediaIndex}
            className="data-[selected=true]:border-primary relative h-32 w-52 cursor-pointer rounded-3xl border border-[#7A7A7A]/30 transition-colors"
          >
            <TowerDisplayImage
              key={index}
              src={image.image}
              alt={t(image.alt)}
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        ))}
      </div>
    );
  }

  if (selectedDataTab === "details") {
    return <div aria-label="details"></div>;
  }

  return null;
}

function MediaContainer({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  return null;
}
