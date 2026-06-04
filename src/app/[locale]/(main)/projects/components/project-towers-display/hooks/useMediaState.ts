import { useState, useCallback, useMemo } from "react";
import { MediaContainerData } from "../types";

/**
 * Custom hook to manage media-related state
 * @param initialData - Initial data for the media container
 * @returns An object containing media state and handlers
 */
export const useMediaState = (initialData: MediaContainerData) => {
  const [mediaContainerData, setMediaContainerData] =
    useState<MediaContainerData>(initialData);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  // Memoize the media data update handler
  const updateMediaContainerData = useCallback((data: MediaContainerData) => {
    setMediaContainerData((prevData) => {
      // Only update if data has changed
      if (prevData !== data) {
        return data;
      }
      return prevData;
    });
    // Reset index when data changes
    setSelectedMediaIndex(0);
  }, []);

  // Memoize the media index setter
  const handleSetSelectedMediaIndex = useCallback((index: number) => {
    setSelectedMediaIndex((prevIndex) => {
      // Only update if index has changed
      return prevIndex !== index ? index : prevIndex;
    });
  }, []);

  // Memoize the return value to prevent unnecessary re-renders
  return useMemo(
    () => ({
      mediaContainerData,
      selectedMediaIndex,
      setMediaContainerData: updateMediaContainerData,
      setSelectedMediaIndex: handleSetSelectedMediaIndex,
    }),
    [
      mediaContainerData,
      selectedMediaIndex,
      updateMediaContainerData,
      handleSetSelectedMediaIndex,
    ],
  );
};
