"use client";

import TowerDisplayImage from "@/app/[locale]/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { m } from "motion/react";
import { useTranslations } from "next-intl";

export default function MediaContainer({
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

  const Container = ({ children }: { children: React.ReactNode }) => (
    <m.div
      layoutId="mediaContainer"
      className={`overflow-hidden rounded-[2.5rem] border-2 border-[#7A7A7A]/30 bg-linear-[94deg] from-[#1A1A1A]/0 to-[#1A1A1A] backdrop-blur-2xl rtl:bg-linear-[266deg] ${className}`}
    >
      {children}
    </m.div>
  );

  if (selectedDataTab === "details") return null;

  if (Array.isArray(mediaContainerData)) {
    return (
      <Container>
        {mediaContainerData.length > 1 && selectedDataTab === "layout" && (
          <div className="absolute top-2 right-0 left-0 z-40 flex items-center justify-center gap-2">
            <FloorButton
              onClick={() => setSelectedMediaIndex(0)}
              isSelected={selectedMediaIndex === 0}
            >
              {ct("first-floor")}
            </FloorButton>
            <FloorButton
              onClick={() => setSelectedMediaIndex(1)}
              isSelected={selectedMediaIndex === 1}
            >
              {ct("second-floor")}
            </FloorButton>
          </div>
        )}
        <TowerDisplayImage
          src={mediaContainerData[selectedMediaIndex].image}
          alt={t(mediaContainerData[selectedMediaIndex].alt)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </Container>
    );
  }

  if (typeof mediaContainerData === "string") {
    return (
      <Container>
        <div></div>
      </Container>
    );
  }

  return;
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
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-md border border-[#7A7A7A]/30 px-4 py-2 transition-colors hover:bg-[#7A7A7A]/10 active:scale-90 active:bg-[#7A7A7A]/10",
        isSelected && "bg-[#7A7A7A]/30",
      )}
    >
      {children}
    </button>
  );
}
