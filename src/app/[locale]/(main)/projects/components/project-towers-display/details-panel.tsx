"use client";

import TowerDisplayImage from "@/app/[locale]/(main)/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import {
  ModelDetails,
  ModelDetailsSection,
  Project,
  ProjectData,
} from "@/data/types";
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
      <p className="leading-normal md:py-7 lg:w-10/12 lg:py-14 lg:text-lg xl:py-12 xl:text-xl 2xl:w-9/12 2xl:py-10 2xl:text-2xl">
        {t(selectedModelData.layout.description)}
      </p>
    );
  }

  if (selectedDataTab === "photos" && Array.isArray(mediaContainerData)) {
    return (
      <div className="w-full max-w-full columns-2 space-y-4 overflow-x-hidden lg:columns-3 xl:columns-4">
        {mediaContainerData.map((image, index) => (
          // <div
          //   key={index}
          //   onClick={() => setSelectedMediaIndex(index)}
          //   data-selected={index === selectedMediaIndex}
          //   className="data-[selected=true]:border-primary relative cursor-pointer rounded-3xl border border-[#7A7A7A]/30 transition-colors hover:bg-white/5"
          // >
          <TowerDisplayImage
            key={index}
            onClick={() => setSelectedMediaIndex(index)}
            src={image.image}
            alt={t(image.alt)}
            className="data-[selected=true]:border-primary block cursor-pointer rounded-3xl border border-[#7A7A7A]/30 transition-colors hover:bg-white/5 data-[selected=true]:bg-white/5"
            fill={false}
            data-selected={index === selectedMediaIndex}
            placeholder="blur"
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 50vw"
          />
          // </div>
        ))}
      </div>
    );
  }

  if (selectedDataTab === "details" && selectedModelData.details) {
    return (
      <ModelDetailsPanel
        projectKey={projectData.projectKey}
        modelDetails={selectedModelData.details[selectedMediaIndex]}
      />
    );
  }

  return null;
}

function ModelDetailsPanel({
  projectKey,
  modelDetails,
}: {
  projectKey: Project;
  modelDetails: ModelDetails<Project>;
}) {
  let start = 1;

  return (
    <div
      aria-label="details"
      className="grid grid-cols-1 gap-6 overflow-x-hidden lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    >
      {modelDetails.sections.map((section, index) => {
        const details = (
          <SectionDetails
            key={index}
            section={section}
            projectKey={projectKey}
            start={start}
          />
        );

        start += section.rooms.length;

        return details;
      })}
    </div>
  );
}

function SectionDetails({
  section,
  projectKey,
  start,
}: {
  section: ModelDetailsSection<Project>;
  projectKey: Project;
  start: number;
}) {
  const t = useTranslations(projectKey);

  return (
    <div className="lg:has-[ol>li:nth-child(n+6)]:col-span-2">
      <h3 className="mb-3 font-bold 2xl:text-2xl">{t(section.title)}</h3>
      <ol
        start={start}
        className="flex w-fit list-inside flex-col flex-wrap space-y-0.5 gap-x-7 ps-2 text-[#a5a5a5] lg:max-h-32"
      >
        {section.rooms.map((room, index) => (
          <li
            key={index}
            className="list-decimal break-words whitespace-normal max-md:text-sm"
          >
            {t(room)}
          </li>
        ))}
      </ol>
    </div>
  );
}
