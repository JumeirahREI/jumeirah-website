"use client";

import MediaDisplay from "@/app/[locale]/projects/components/project-towers-display/media-display";
import TowerDisplayImage from "@/app/[locale]/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
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
      <p className="p-4 leading-normal md:p-7 lg:p-14 xl:p-12 2xl:w-9/12 2xl:p-10 2xl:text-2xl">
        {t(projectData.towersSection[0].models[0].layout.description)}
      </p>
    );
  }

  if (selectedDataTab === "photos" && Array.isArray(mediaContainerData)) {
    return (
      <div className="grid grid-flow-col grid-rows-2 gap-4 p-4 md:p-7 lg:p-14 xl:p-12 2xl:p-10">
        {mediaContainerData.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedMediaIndex(index)}
            data-selected={index === selectedMediaIndex}
            className="data-[selected=true]:border-primary relative h-32 w-52 cursor-pointer rounded-3xl border border-[#7A7A7A]/30 transition-colors"
          >
            <TowerDisplayImage
              key={image.image.src}
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
  const totalRooms = modelDetails.sections.reduce(
    (total, section) => total + section.rooms.length,
    0,
  );

  return (
    <div className="2xl:pl-8 2xl:rtl:pr-8">
      <div
        aria-label="details"
        className="grid grid-cols-1 gap-4 px-4 md:px-7 lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:px-14 xl:grid-cols-3 xl:px-12 2xl:gap-10 2xl:px-10 2xl:py-4"
      >
        <MediaDisplay
          projectKey={projectKey}
          className="h-52 lg:col-start-2 lg:row-start-1 lg:h-full xl:col-span-2 xl:col-start-2"
        />
        <div className="row-span-2 space-y-12 lg:py-5">
          <SectionDetails
            section={modelDetails.sections[0]}
            projectKey={projectKey}
            start={1}
          />
          <SectionDetails
            section={modelDetails.sections[1]}
            projectKey={projectKey}
            start={modelDetails.sections[0].rooms.length + 1}
          />
          {totalRooms <= 10 && modelDetails.sections.length > 2 && (
            <SectionDetails
              section={modelDetails.sections[2]}
              projectKey={projectKey}
              start={
                modelDetails.sections[0].rooms.length +
                modelDetails.sections[1].rooms.length +
                1
              }
            />
          )}
        </div>
        {totalRooms > 10 && modelDetails.sections.length > 2 && (
          <div className="flex justify-around xl:col-span-2 xl:col-start-2 2xl:gap-10">
            <SectionDetails
              section={modelDetails.sections[2]}
              projectKey={projectKey}
              start={
                modelDetails.sections[0].rooms.length +
                modelDetails.sections[1].rooms.length +
                1
              }
            />
            {modelDetails.sections.length > 3 && (
              <SectionDetails
                section={modelDetails.sections[3]}
                projectKey={projectKey}
                start={
                  modelDetails.sections[0].rooms.length +
                  modelDetails.sections[1].rooms.length +
                  modelDetails.sections[2].rooms.length +
                  1
                }
              />
            )}
          </div>
        )}
        {/* {modelDetails.sections.map((section, index) => {
        const details = (
          <SectionDetails
            key={index}
            section={section}
            projectKey={projectKey}
            start={count}
          />
        );

        count += section.rooms.length;

        return details;
      })} */}
      </div>
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
    <div>
      <h3 className="mb-3 text-3xl font-bold">{t(section.title)}</h3>
      <ol
        start={start}
        className="list-inside space-y-0.5 ps-2 text-lg text-[#a5a5a5]"
      >
        {section.rooms.map((room, index) => (
          <li key={index} className="list-decimal">
            {t(room)}
          </li>
        ))}
      </ol>
    </div>
  );
}
