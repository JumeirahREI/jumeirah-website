"use client";

import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import DetailsIcon from "@/components/icons/details-icon";
import LayoutIcon from "@/components/icons/layout-icon";
import PhotosIcon from "@/components/icons/photos-icon";
import VideosIcon from "@/components/icons/videos-icon";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const tabs = [
  {
    name: "layout",
    icon: LayoutIcon,
  },
  {
    name: "videos",
    icon: VideosIcon,
  },
  {
    name: "photos",
    icon: PhotosIcon,
  },
  {
    name: "details",
    icon: DetailsIcon,
  },
] as const;

export default function DataTabs({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const ct = useTranslations("Common");
  const { selectedTower, selectedModel, selectedDataTab, setSelectedDataTab } =
    useTowersDisplayContext();

  const { towersSection } = projectData;
  const selectedModelData = towersSection[selectedTower].models[selectedModel];

  useEffect(() => {
    if (!selectedModelData[selectedDataTab]) {
      setSelectedDataTab("layout");
    }
  }, [selectedModelData, selectedDataTab]);

  return (
    <div className="flex items-center gap-1 2xl:gap-6">
      {tabs.map((tab, index) => {
        const hasData = !!selectedModelData[tab.name];

        if (!hasData) {
          return null;
        }

        return (
          <DataTabButton
            key={index}
            isSelected={selectedDataTab === tab.name}
            onClick={() => setSelectedDataTab(tab.name)}
            Icon={tab.icon}
          >
            {ct(tab.name)}
          </DataTabButton>
        );
      })}
    </div>
  );
}

function DataTabButton({
  isSelected,
  Icon,
  onClick,
  children,
}: {
  isSelected: boolean;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      className="group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 flex cursor-pointer items-center gap-3 rounded-2xl bg-linear-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-3 text-nowrap text-[#DFDFDF]/70 transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] 2xl:text-xl"
    >
      <Icon className="2xl:size-10" />
      {children}
    </button>
  );
}
