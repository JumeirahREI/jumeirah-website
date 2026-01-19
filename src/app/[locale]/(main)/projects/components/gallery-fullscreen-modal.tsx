"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export interface GallerySection {
  title: string;
  images: Array<{ image: StaticImageData; alt: string }>;
}

export interface GalleryFullscreenModalProps {
  sections: GallerySection[];
  initialSectionIndex?: number;
  initialImageIndex?: number;
  onClose: () => void;
}

export default function GalleryFullscreenModal({
  sections,
  initialSectionIndex = 0,
  initialImageIndex = 0,
  onClose,
}: GalleryFullscreenModalProps) {
  const [currentSectionIndex, setCurrentSectionIndex] =
    useState(initialSectionIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const currentSection = sections[currentSectionIndex];
  const currentImage = currentSection?.images[currentImageIndex];

  const handleThumbnailClick = (sectionIndex: number, imageIndex: number) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentImageIndex(imageIndex);
  };

  const goToNext = () => {
    if (currentImageIndex < currentSection.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentImageIndex(0);
    }
  };

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentImageIndex(sections[currentSectionIndex - 1].images.length - 1);
    }
  };

  const isFirstImage = currentSectionIndex === 0 && currentImageIndex === 0;
  const isLastImage =
    currentSectionIndex === sections.length - 1 &&
    currentImageIndex === currentSection.images.length - 1;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && !isLastImage) {
        goToNext();
      } else if (e.key === "ArrowLeft" && !isFirstImage) {
        goToPrevious();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, currentSectionIndex, currentImageIndex]);

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black">
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
            {/* Top Controls */}
            <div className="absolute top-4 right-4 z-[100000] flex items-center gap-2 md:top-6 md:right-6">
              <button
                onClick={() => zoomOut()}
                className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:block"
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
                className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:block"
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
                className="hidden cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:block"
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
                className="cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
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

            {/* Main Layout */}
            <div className="flex h-screen flex-col md:flex-row">
              {/* Left Sidebar - Thumbnails (Desktop) / Bottom Thumbnails (Mobile) */}
              <div className="order-2 max-h-[40vh] overflow-y-auto border-t border-white/10 bg-black/80 backdrop-blur-sm md:order-1 md:h-auto md:max-h-none md:w-[500px] md:border-t-0 md:border-r">
                <div className="flex flex-col gap-4 p-4 md:gap-0 md:space-y-8 md:p-6">
                  {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="mb-3 text-sm font-bold text-white md:mb-4 md:text-lg">
                        {section.title}
                      </h3>
                      <div className="overflow-x-auto md:overflow-x-visible">
                        <div className="flex gap-2 p-1 md:grid md:grid-cols-3 md:gap-3">
                          {section.images.map((item, imageIndex) => (
                            <button
                              key={imageIndex}
                              onClick={() =>
                                handleThumbnailClick(sectionIndex, imageIndex)
                              }
                              className={cn(
                                "relative aspect-square size-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all md:h-auto md:w-auto",
                                sectionIndex === currentSectionIndex &&
                                  imageIndex === currentImageIndex
                                  ? "scale-105 border-white ring-2 ring-white/50"
                                  : "border-white/20 hover:border-white/60",
                              )}
                              aria-label={`View ${item.alt}`}
                            >
                              <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 64px, 120px"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Main Image (Desktop) / Top Image (Mobile) */}
              <div className="relative order-1 w-full flex-1 md:order-2">
                <TransformComponent
                  wrapperClass="!absolute !h-full !w-full !inset-0 !flex !items-center !justify-center"
                  contentClass="flex !h-full !w-full items-center justify-center"
                >
                  <Image
                    key={currentImage.image.src}
                    src={currentImage.image}
                    alt={currentImage.alt}
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    className="h-auto max-h-full w-auto max-w-[95%] object-contain"
                    draggable={false}
                  />
                </TransformComponent>

                {/* Navigation Arrows */}
                {!isFirstImage && (
                  <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-2 z-[100000] -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:left-4 md:p-3 rtl:rotate-180"
                    aria-label="Previous image"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:h-6 md:w-6"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                )}
                {!isLastImage && (
                  <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-2 z-[100000] -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:right-4 md:p-3 rtl:-rotate-180"
                    aria-label="Next image"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:h-6 md:w-6"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
