"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useMediaState } from "./hooks/useMediaState";
import { useTowerNavigation } from "./hooks/useTowerNavigation";
import {
  DataTab,
  TowersDisplayContextValue,
  TowersDisplayProviderProps,
} from "./types";

// Create context with default values
export const TowersDisplayContext = createContext<
  TowersDisplayContextValue | undefined
>(undefined);

/**
 * Provider component for the towers display context
 * Manages the state for tower selection, model selection, and media display
 */
// Memoize the provider to prevent unnecessary re-renders
export const TowersDisplayProvider = React.memo(
  ({ children, projectData }: TowersDisplayProviderProps) => {
    // Use custom hooks for better separation of concerns
    const {
      selectedTower,
      selectedModel,
      selectedDataTab,
      setSelectedTower: setTower,
      setSelectedModel: setModel,
      setSelectedDataTab: setDataTab,
    } = useTowerNavigation();

    const {
      mediaContainerData,
      selectedMediaIndex,
      setMediaContainerData,
      setSelectedMediaIndex,
    } = useMediaState(
      projectData.towersSection[0]?.models[0]?.layout?.images || [],
    );

    const handleTowerSelection = useCallback(
      (tower: number) => {
        if (selectedTower !== tower) {
          setTower(tower);
          setSelectedMediaIndex(0);
          if (
            (selectedDataTab === "photos" &&
              !projectData.towersSection[tower].models[selectedModel].photos
                ?.length) ||
            (selectedDataTab === "videos" &&
              !projectData.towersSection[tower].models[selectedModel].videos
                ?.length)
          ) {
            setDataTab("layout");
          }
        }
      },
      [selectedTower, setTower],
    );

    const handleModelSelection = useCallback(
      (model: number) => {
        if (selectedModel !== model) {
          setModel(model);
          setSelectedMediaIndex(0);
        }
      },
      [selectedModel, setModel],
    );

    const handleDataTabSelection = useCallback(
      (tab: DataTab) => {
        if (selectedDataTab !== tab) {
          setDataTab(tab);
          if (selectedDataTab === "photos" || tab === "photos") {
            setSelectedMediaIndex(0);
          }
        }
      },
      [selectedDataTab, setDataTab],
    );

    useEffect(() => {
      try {
        const currentTower = projectData.towersSection[selectedTower];
        const currentModel = currentTower?.models[selectedModel];

        if (!currentModel) return;

        switch (selectedDataTab) {
          case "layout":
            setMediaContainerData(currentModel.layout?.images || []);
            break;
          case "videos":
            if (currentModel.videos?.length) {
              setMediaContainerData(currentModel.videos[0]);
            }
            break;
          case "photos":
            if (currentModel.photos?.length) {
              setMediaContainerData(currentModel.photos);
            }
            break;
          case "details":
            if (currentModel.details?.length) {
              setMediaContainerData(currentModel.details[0]?.images || []);
            }
            break;
        }
      } catch (error) {
        console.error("Error updating media data:", error);
      }
    }, [
      selectedDataTab,
      selectedTower,
      selectedModel,
      projectData.towersSection,
      setMediaContainerData,
    ]);

    const contextValue = React.useMemo<TowersDisplayContextValue>(
      () => ({
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
      }),
      [
        selectedTower,
        selectedModel,
        selectedDataTab,
        mediaContainerData,
        selectedMediaIndex,
        handleTowerSelection,
        handleModelSelection,
        handleDataTabSelection,
        setMediaContainerData,
        setSelectedMediaIndex,
      ],
    );

    return (
      <TowersDisplayContext.Provider value={contextValue}>
        {children}
      </TowersDisplayContext.Provider>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.projectData === nextProps.projectData;
  },
);

export const useTowersDisplayContext = (): TowersDisplayContextValue => {
  const context = useContext(TowersDisplayContext);
  if (context === undefined) {
    throw new Error(
      "useTowersDisplayContext must be used within a TowersDisplayProvider",
    );
  }
  return context;
};

export default TowersDisplayContext;
