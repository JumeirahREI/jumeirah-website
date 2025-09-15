"use client";

import { ImageData, Project, ProjectData } from "@/data/types";
import { createContext, use, useLayoutEffect, useState } from "react";

type DataTab = "layout" | "videos" | "photos" | "details";

type MediaContainerData = ImageData<Project> | ImageData<Project>[] | string;
// | string[];

interface TowersDisplayContextValue {
  selectedTower: number;
  setSelectedTower: (tower: number) => void;
  selectedModel: number;
  setSelectedModel: (model: number) => void;
  selectedDataTab: DataTab;
  setSelectedDataTab: (tab: DataTab) => void;
  mediaContainerData: MediaContainerData;
  setMediaContainerData: (data: MediaContainerData) => void;
  selectedMediaIndex: number;
  setSelectedMediaIndex: (index: number) => void;
}

const TowersDisplayContext = createContext<TowersDisplayContextValue>({
  selectedTower: 0,
  setSelectedTower: () => {},
  selectedModel: 0,
  setSelectedModel: () => {},
  selectedDataTab: "layout",
  setSelectedDataTab: () => {},
  mediaContainerData: [],
  setMediaContainerData: () => {},
  selectedMediaIndex: 0,
  setSelectedMediaIndex: () => {},
});

export function TowersDisplayProvider({
  children,
  projectData,
}: {
  children: React.ReactNode;
  projectData: ProjectData<Project>;
}) {
  const [selectedTower, setSelectedTower] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedDataTab, setSelectedDataTab] = useState<DataTab>("layout");
  const [mediaContainerData, setMediaContainerData] =
    useState<MediaContainerData>(
      projectData.towersSection[0].models[0].layout.images,
    );
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const handleTowerSelection = (tower: number) => {
    if (selectedTower === tower) {
      return;
    }
    setSelectedTower(tower);
    setSelectedModel(0);
    setSelectedDataTab("layout");
  };

  const handleModelSelection = (model: number) => {
    if (selectedModel === model) {
      return;
    }
    setSelectedModel(model);
    setSelectedMediaIndex(0);
  };

  const handleDataTabSelection = (tab: DataTab) => {
    if (selectedDataTab === tab) {
      return;
    }
    setSelectedDataTab(tab);
  };

  useLayoutEffect(() => {
    switch (selectedDataTab) {
      case "layout":
        const imageData =
          projectData.towersSection[selectedTower].models[selectedModel].layout
            .images;
        setMediaContainerData(imageData);
        break;
      case "videos":
        const videos =
          projectData.towersSection[selectedTower].models[selectedModel].videos;
        if (!videos) {
          return;
        }
        setMediaContainerData(videos[0]);
        break;
      case "photos":
        const photos =
          projectData.towersSection[selectedTower].models[selectedModel].photos;
        if (!photos) {
          return;
        }
        setMediaContainerData(photos);
        break;
      case "details":
        const details =
          projectData.towersSection[selectedTower].models[selectedModel]
            .details;
        if (!details) {
          return;
        }
        setMediaContainerData(details[0].images);
        break;
    }
    setSelectedMediaIndex(0);
  }, [selectedDataTab, selectedTower, selectedModel]);

  return (
    <TowersDisplayContext.Provider
      value={{
        selectedTower,
        setSelectedTower: handleTowerSelection,
        selectedModel,
        setSelectedModel: handleModelSelection,
        selectedDataTab,
        setSelectedDataTab: handleDataTabSelection,
        mediaContainerData,
        setMediaContainerData,
        selectedMediaIndex,
        setSelectedMediaIndex,
      }}
    >
      {children}
    </TowersDisplayContext.Provider>
  );
}

export const useTowersDisplayContext = () => {
  return use(TowersDisplayContext);
};

export default TowersDisplayContext;
