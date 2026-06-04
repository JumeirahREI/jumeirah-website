import { ImageData, Project } from "@/data/types";

/**
 * Represents the different tabs available in the towers display
 */
export type DataTab = "layout" | "videos" | "photos" | "details";

/**
 * Union type for the data that can be displayed in the media container
 */
export type MediaContainerData =
  | ImageData<Project>
  | ImageData<Project>[]
  | string;

/**
 * The shape of the context value provided by TowersDisplayProvider
 */
export interface TowersDisplayContextValue {
  /** Currently selected tower index */
  selectedTower: number;
  /** Function to update the selected tower */
  setSelectedTower: (tower: number) => void;
  /** Currently selected model index */
  selectedModel: number;
  /** Function to update the selected model */
  setSelectedModel: (model: number) => void;
  /** Currently active data tab */
  selectedDataTab: DataTab;
  /** Function to update the active data tab */
  setSelectedDataTab: (tab: DataTab) => void;
  /** Current media data to be displayed */
  mediaContainerData: MediaContainerData;
  /** Function to update the media data */
  setMediaContainerData: (data: MediaContainerData) => void;
  /** Index of the currently selected media item */
  selectedMediaIndex: number;
  /** Function to update the selected media index */
  setSelectedMediaIndex: (index: number) => void;
}

/**
 * Props for the TowersDisplayProvider component
 */
export interface TowersDisplayProviderProps {
  /** Child components */
  children: React.ReactNode;
  /** Project data containing towers and models */
  projectData: {
    towersSection: Array<{
      models: Array<{
        layout: { images: MediaContainerData };
        videos?: any[];
        photos?: any[];
        details?: Array<{ images: MediaContainerData }>;
      }>;
    }>;
  };
}
