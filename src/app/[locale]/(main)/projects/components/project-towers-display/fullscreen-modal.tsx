"use client";

import Carousel, { CarouselApi } from "@/components/carousel";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export interface FullscreenModalProps {
  mediaData: Array<{ image: StaticImageData; alt: string }>;
  initialIndex: number;
  onClose: () => void;
  getAlt: (index: number) => string;
}

export default function FullscreenModal({
  mediaData,
  initialIndex,
  onClose,
  getAlt,
}: FullscreenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const hasMultipleImages = mediaData.length > 1;

  const goToNext = () => {
    if (currentIndex < mediaData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      emblaApi?.scrollTo(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      emblaApi?.scrollTo(currentIndex - 1);
    }
  };

  const onCarouselReady = useCallback(
    (api: CarouselApi) => {
      setEmblaApi(api);
      api.scrollTo(initialIndex, true);
    },
    [initialIndex],
  );

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    emblaApi?.scrollTo(index);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        goToNext();
      } else if (e.key === "ArrowLeft" && hasMultipleImages) {
        goToPrevious();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, currentIndex, hasMultipleImages]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
      <TransformWrapper
        initialScale={0.8}
        minScale={0.5}
        maxScale={4}
        centerOnInit
        wheel={{ step: 0.1 }}
        doubleClick={{ mode: "toggle" }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute top-20 left-1/2 z-[10000] container -translate-x-1/2 xl:top-28">
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
            </div>
            <TransformComponent
              wrapperClass="!absolute !h-screen !w-screen  !inset-0 !flex !items-center !justify-center"
              contentClass="flex !h-screen !w-screen items-center justify-center"
            >
              <Image
                key={mediaData[currentIndex].image.src}
                src={mediaData[currentIndex].image}
                alt={getAlt(currentIndex)}
                width={1920}
                height={1080}
                className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
                draggable={false}
              />
            </TransformComponent>
            {hasMultipleImages && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={goToPrevious}
                    className="absolute start-4 top-1/2 z-[10000] hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:block rtl:rotate-180"
                    aria-label="Previous image"
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
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                )}
                {currentIndex < mediaData.length - 1 && (
                  <button
                    onClick={goToNext}
                    className="absolute end-4 top-1/2 z-[10000] hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:block rtl:-rotate-180"
                    aria-label="Next image"
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
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}
                <div className="absolute bottom-8 left-1/2 z-[10000] w-full max-w-md -translate-x-1/2 px-4">
                  <Carousel
                    options={{
                      align: "center",
                      containScroll: "trimSnaps",
                      dragFree: false,
                    }}
                    onReady={onCarouselReady}
                  >
                    <div className="embla__container flex gap-3">
                      {mediaData.map((item, index) => (
                        <div
                          key={index}
                          className="embla__slide min-w-0 flex-[0_0_20%]"
                        >
                          <button
                            onClick={() => handleThumbnailClick(index)}
                            className={cn(
                              "relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all",
                              index === currentIndex
                                ? "scale-105 border-white"
                                : "border-white/30 hover:border-white/60",
                            )}
                            aria-label={`Go to image ${index + 1}`}
                          >
                            <Image
                              src={item.image}
                              alt={getAlt(index)}
                              fill
                              className="bg-black/30 object-cover backdrop-blur-sm"
                              sizes="100px"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </Carousel>
                </div>
              </>
            )}
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
