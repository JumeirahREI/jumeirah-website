"use client";

import MediaContainer from "@/app/[locale]/(main)/projects/components/project-towers-display/media-container";
import TowerDisplayImage from "@/app/[locale]/(main)/projects/components/project-towers-display/tower-display-image";
import { useTowersDisplayContext } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import { Project } from "@/data/types";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

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
  src: StaticImageData;
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
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit
        wheel={{ step: 0.1 }}
        doubleClick={{ mode: "toggle" }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute top-20 left-1/2 z-[10000] container -translate-x-1/2">
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => zoomOut()}
                  className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:block"
                  aria-label="Zoom out"
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
                    <circle cx="11" cy="11" r="8" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <button
                  onClick={() => zoomIn()}
                  className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:block"
                  aria-label="Zoom in"
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
                    <circle cx="11" cy="11" r="8" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:block"
                  aria-label="Reset zoom"
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
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </button>
                <button
                  onClick={onClose}
                  className="cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Close fullscreen"
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
            </div>
            <TransformComponent
              wrapperClass="!absolute !h-screen !w-screen  !inset-0 !flex !items-center !justify-center"
              contentClass="flex !h-screen !w-screen items-center justify-center"
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
                draggable={false}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
