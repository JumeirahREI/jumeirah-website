import { useCallback, useMemo, useState } from "react";
import { DataTab } from "../types";

/**
 * Custom hook to manage tower navigation state
 * @returns An object containing navigation state and handlers
 */
export const useTowerNavigation = () => {
  const [selectedTower, setSelectedTowerState] = useState(0);
  const [selectedModel, setSelectedModelState] = useState(0);
  const [selectedDataTab, setSelectedDataTabState] =
    useState<DataTab>("layout");

  const setSelectedTower = useCallback(
    (tower: number) => {
      if (selectedTower !== tower) {
        setSelectedTowerState(tower);
        setSelectedModelState(0);
      }
    },
    [selectedTower],
  );

  const setSelectedModel = useCallback(
    (model: number) => {
      if (selectedModel !== model) {
        setSelectedModelState(model);
      }
    },
    [selectedModel],
  );

  // Memoize the tab selection handler
  const setSelectedDataTab = useCallback(
    (tab: DataTab) => {
      if (selectedDataTab !== tab) {
        setSelectedDataTabState(tab);
      }
    },
    [selectedDataTab],
  );

  // Memoize the return value to prevent unnecessary re-renders
  return useMemo(
    () => ({
      selectedTower,
      selectedModel,
      selectedDataTab,
      setSelectedTower,
      setSelectedModel,
      setSelectedDataTab,
    }),
    [
      selectedTower,
      selectedModel,
      selectedDataTab,
      setSelectedTower,
      setSelectedModel,
      setSelectedDataTab,
    ],
  );
};
