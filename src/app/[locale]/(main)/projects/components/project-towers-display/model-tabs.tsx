"use client";

import { useTowersDisplayContext } from "@/app/[locale]/(main)/projects/components/project-towers-display/towers-display-context";
import Carousel, { CarouselApi, CarouselOptions } from "@/components/carousel";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Project, ProjectData } from "@/data/types";
import { useCarouselPrevNext } from "@/hooks/use-carousel-prev-next";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const carouselOptions: CarouselOptions = {
  align: "start",
  slidesToScroll: 1,
  dragFree: true,
  breakpoints: {
    "(min-width: 1024px)": {
      dragFree: false,
      slidesToScroll: 4,
    },
  },
};

export default function ModelTabs({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations<Project>(projectData.projectKey);
  const { selectedTower, selectedModel, setSelectedModel } =
    useTowersDisplayContext();
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = useCarouselPrevNext(emblaApi);

  const { towersSection } = projectData;
  const models = towersSection[selectedTower].models;

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0);
  }, [selectedTower, emblaApi]);

  return (
    <div className="model-tabs no-scrollbar relative w-full shrink-0 overflow-x-hidden py-0.5 md:row-start-1 ltr:mr-6 rtl:lg:ml-6">
      <ModelTabArrowButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute start-0 top-1/2 z-20 -translate-y-1/2 ps-[var(--padding-x)] pe-3"
      />
      <ModelTabArrowButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute end-0 top-1/2 z-20 -translate-y-1/2 ps-3 pe-3"
        isEnd
      />
      <div className="fade-x w-full px-[var(--padding-x)] [--fade-end:94%] [--fade-start:6%]">
        <Carousel options={carouselOptions} onReady={setEmblaApi}>
          <div className="embla__container flex items-center space-x-3 2xl:space-x-6">
            {models.map((model, index) => (
              <ModelTabButton
                key={index}
                isSelected={selectedModel === index}
                onClick={() => setSelectedModel(index)}
              >
                {t.rich(model.name, {
                  span: (s) => (
                    <span className="group-data-[selected=true]:text-primary">
                      {s}
                    </span>
                  ),
                  i: (s) => (
                    <small className="align-super text-sm font-normal">
                      {s}
                    </small>
                  ),
                })}
              </ModelTabButton>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

function ModelTabButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      className="embla__slide group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 cursor-pointer rounded-xl bg-linear-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-2 font-semibold text-nowrap text-[#A7AAAD] transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] lg:rounded-2xl lg:p-3 lg:text-lg xl:text-2xl 2xl:text-3xl"
    >
      {children}
    </button>
  );
}

function ModelTabArrowButton({
  onClick,
  disabled,
  className,
  isEnd,
}: {
  onClick: () => void;
  disabled: boolean;
  className?: string;
  isEnd?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "embla__arrow relative hidden aspect-square h-full cursor-pointer transition-opacity disabled:pointer-events-none disabled:opacity-0 lg:block",
        className,
      )}
    >
      <ArrowIcon
        className={cn(
          "text-primary h-6/12 drop-shadow-lg drop-shadow-black",
          "rtl:rotate-y-180",
          isEnd && "ms-auto rotate-y-180 rtl:rotate-y-0",
        )}
        // height={40}
        // width={30}
      />
    </button>
  );
}
