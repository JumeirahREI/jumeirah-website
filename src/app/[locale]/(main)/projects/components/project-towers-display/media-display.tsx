"use client";

import MediaContainer from "@/app/[locale]/(main)/projects/components/project-towers-display/media-container";
import TowerDisplayImage from "@/app/[locale]/(main)/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import { Project } from "@/data/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MediaDisplay({
  className,
  projectKey,
}: {
  className?: string;
  projectKey: Project;
}) {
  const t = useTranslations(projectKey);
  const ct = useTranslations("Common");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    mediaContainerData,
    selectedMediaIndex,
    setSelectedMediaIndex,
    selectedDataTab,
  } = useTowersDisplayContext();

  if (Array.isArray(mediaContainerData)) {
    return (
      <>
        <MediaContainer className={className}>
          <div className="absolute top-0 right-0 bottom-0 left-0">
            {mediaContainerData.length > 1 &&
              (selectedDataTab === "layout" ||
                selectedDataTab === "details") && (
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
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute end-4 bottom-4 z-40 cursor-pointer rounded-2xl border border-[#616161] bg-[#1A1A1A]/80 p-3 transition-colors hover:bg-neutral-600 active:bg-neutral-600"
              aria-label="View fullscreen"
            >
              <Image
                src="/svg/fullscreen-icon.svg"
                alt="Fullscreen"
                width={24}
                height={24}
              />
            </button>
            <TowerDisplayImage
              key={mediaContainerData[selectedMediaIndex].image.src}
              src={mediaContainerData[selectedMediaIndex].image}
              alt={t(mediaContainerData[selectedMediaIndex].alt)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </MediaContainer>
        {isFullscreen && (
          <FullscreenModal
            src={mediaContainerData[selectedMediaIndex].image}
            alt={t(mediaContainerData[selectedMediaIndex].alt)}
            onClose={() => setIsFullscreen(false)}
          />
        )}
      </>
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
      className="group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 cursor-pointer items-center rounded-2xl bg-[#1A1A1A]/80 bg-linear-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-3 font-bold text-nowrap text-[#DFDFDF]/70 transition-colors before:transition-colors hover:bg-neutral-600 active:bg-neutral-600 data-[select=false]:border data-[selected=true]:from-[#1A1A1A]"
    >
      {children}
    </button>
  );
}

function FullscreenModal({
  src,
  alt,
  onClose,
}: {
  src: any;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onEscapeKey);
    return () => {
      document.removeEventListener("keydown", onEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div
        className="absolute top-20 z-[10000] container"
        aria-label="Close fullscreen"
      >
        <button
          onClick={onClose}
          className="ms-auto block cursor-pointer rounded-full p-2 text-white transition-colors hover:bg-white/20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
          sizes="90vw"
        />
      </div>
    </div>
  );
}
