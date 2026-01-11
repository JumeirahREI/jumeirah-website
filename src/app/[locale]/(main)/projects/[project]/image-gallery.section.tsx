"use client";

import { Project, ProjectData } from "@/data/types";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const carouselOptions = (locale: string) => ({
  align: "center" as const,
  loop: true,
  direction: (locale === "ar" ? "rtl" : "ltr") as "rtl" | "ltr",
});

const TWEEN_FACTOR_BASE = 0.4;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function ImageGallerySection({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const locale = useLocale();
  const t = useTranslations<Project>(projectData.projectKey);
  const { imageGallerySection: imgs } = projectData;

  const initialGallery = useMemo(() => imgs?.[0], [imgs]);
  const [currentGallery, setCurrentGallery] = useState(initialGallery);
  const [activeImage, setActiveImage] = useState(initialGallery?.images[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...carouselOptions(locale),
    duration: 20,
    dragFree: true,
  });

  useEffect(() => {
    if (initialGallery) {
      setCurrentGallery(initialGallery);
      setActiveImage(initialGallery.images[0]);
    }
  }, [initialGallery]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const handleGalleryChange = (gallery: NonNullable<typeof imgs>[number]) => {
    setCurrentGallery(gallery);
    setActiveImage(gallery.images[0]);
  };

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!currentGallery) return;
      const index = emblaApi.selectedScrollSnap();
      setActiveImage(currentGallery.images[index]);
    },
    [currentGallery],
  );

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0.4, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    onSelect(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", onSelect);
  }, [emblaApi, tweenScale, onSelect]);

  if (!imgs || imgs.length === 0 || !currentGallery || !activeImage) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-10">
      {/* Background Preview */}
      <Image
        src={activeImage.src}
        alt={t(activeImage.alt)}
        fill
        className="object-cover opacity-40 transition-all duration-700"
        priority
      />
      <div className="from-background to-background/20 via-background/80 absolute inset-0 bg-linear-to-t" />

      {/* Gallery Tabs */}
      {/* <div className="mb-8 flex space-x-8 border-b border-white/10 pb-4">
            {imgs!.map((gallery) => (
              <button
                key={gallery.title}
                onClick={() => handleGalleryChange(gallery)}
                className={`cursor-pointer text-xl font-bold transition-all ${
                  currentGallery.title === gallery.title
                    ? "text-primary scale-105"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t(gallery.title)}
              </button>
            ))}
          </div> */}

      {/* Image Thumbnails Carousel */}
      <div
        className="embla__viewport relative z-10 min-h-[450px] w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {currentGallery.images.map((img, index) => (
            <div
              key={img.alt}
              className="embla__slide min-w-0 flex-[0_0_auto] shrink-0 justify-center"
            >
              <div className="embla__slide__number relative flex items-center justify-center will-change-transform">
                <Image
                  className="aspect-9/16 w-60 overflow-hidden rounded-4xl border-2 border-white/10 object-cover shadow-2xl"
                  src={img.src}
                  alt={t(img.alt)}
                  width={240}
                  height={427}
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
