"use client";

import { createContext, use, useState } from "react";

type DataTab = "layout" | "videos" | "photos" | "details";

interface TowersDisplayContextValue {
  selectedTower: number;
  setSelectedTower: (tower: number) => void;
  selectedModel: number;
  setSelectedModel: (model: number) => void;
  selectedDataTab: DataTab;
  setSelectedDataTab: (tab: DataTab) => void;
}

const TowersDisplayContext = createContext<TowersDisplayContextValue>({
  selectedTower: 0,
  setSelectedTower: () => {},
  selectedModel: 0,
  setSelectedModel: () => {},
  selectedDataTab: "layout",
  setSelectedDataTab: () => {},
});

export function TowersDisplayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTower, setSelectedTower] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedDataTab, setSelectedDataTab] = useState<DataTab>("layout");

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
    // setSelectedDataTab("layout");
  };

  const handleDataTabSelection = (tab: DataTab) => {
    if (selectedDataTab === tab) {
      return;
    }
    setSelectedDataTab(tab);
  };

  return (
    <TowersDisplayContext.Provider
      value={{
        selectedTower,
        setSelectedTower: handleTowerSelection,
        selectedModel,
        setSelectedModel: handleModelSelection,
        selectedDataTab,
        setSelectedDataTab: handleDataTabSelection,
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
