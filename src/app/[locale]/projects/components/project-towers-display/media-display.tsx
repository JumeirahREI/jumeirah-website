"use client";

import MediaContainer from "@/app/[locale]/projects/components/project-towers-display/media-container";
import TowerDisplayImage from "@/app/[locale]/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import { Project } from "@/data/types";
import { m } from "motion/react";
import { useTranslations } from "next-intl";

export default function MediaDisplay({
  className,
  projectKey,
}: {
  className?: string;
  projectKey: Project;
}) {
  const t = useTranslations(projectKey);
  const ct = useTranslations("Common");

  const {
    mediaContainerData,
    selectedMediaIndex,
    setSelectedMediaIndex,
    selectedDataTab,
  } = useTowersDisplayContext();

  if (Array.isArray(mediaContainerData)) {
    return (
      <MediaContainer className={className}>
        <m.div
          layout
          layoutId="towerDisplayImage"
          className="absolute top-0 right-0 bottom-0 left-0"
        >
          {mediaContainerData.length > 1 &&
            (selectedDataTab === "layout" || selectedDataTab === "details") && (
              <div className="absolute start-4 bottom-4 z-40 flex items-center justify-center gap-2">
                <FloorButton
                  onClick={() => setSelectedMediaIndex(0)}
                  isSelected={selectedMediaIndex === 0}
                >
                  {ct.rich("first-floor", {
                    sup: (children) => <sup>{children}</sup>,
                  })}
                </FloorButton>
                <FloorButton
                  onClick={() => setSelectedMediaIndex(1)}
                  isSelected={selectedMediaIndex === 1}
                >
                  {ct.rich("second-floor", {
                    sup: (children) => <sup>{children}</sup>,
                  })}
                </FloorButton>
              </div>
            )}
          <TowerDisplayImage
            key={mediaContainerData[selectedMediaIndex].image.src}
            src={mediaContainerData[selectedMediaIndex].image}
            alt={t(mediaContainerData[selectedMediaIndex].alt)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </m.div>
      </MediaContainer>
    );
  }

  if (typeof mediaContainerData === "string") {
    return (
      <MediaContainer className={className}>
        <div></div>
      </MediaContainer>
    );
  }

  return null;
}

function FloorButton({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      className="group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 cursor-pointer items-center rounded-2xl bg-[#1A1A1A]/80 bg-gradient-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-3 font-bold text-nowrap text-[#DFDFDF]/70 transition-colors before:transition-colors hover:bg-neutral-600 active:bg-neutral-600 data-[select=false]:border data-[selected=true]:from-[#1A1A1A]"
    >
      {children}
    </button>
  );
}
