"use client";

import { useTowersDisplayContext } from "@/app/[locale]/projects/components/project-towers-display/towers-display-context";
import Carousel, { CarouselApi, CarouselOptions } from "@/components/carousel";
import { Project, ProjectData } from "@/data/types";
import { useCarouselPrevNext } from "@/hooks/use-carousel-prev-next";
import { useSelectedSnapDisplay } from "@/hooks/use-selected-snap";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const carouselOptions: CarouselOptions = {
  align: "start",
  slidesToScroll: 1,
  // dragFree: true,
};

export default function ModelTabs({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations(projectData.projectKey);
  const { selectedTower, selectedModel, setSelectedModel } =
    useTowersDisplayContext();
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselPrevNext(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const { towersSection } = projectData;
  const models = towersSection[selectedTower].models;

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [models.length]);

  console.log(selectedSnap, snapCount);

  return (
    <div
      className={cn(
        "model-tabs fade no-scrollbar overflow-x-hidden md:row-start-1",
        !nextBtnDisabled && "fade-end",
        !prevBtnDisabled && "fade-start",
      )}
    >
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
                  <small className="align-super text-sm font-normal">{s}</small>
                ),
              })}
            </ModelTabButton>
          ))}
        </div>
      </Carousel>
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
      className="embla__slide group border-gradient-t border-gradient-to-[#14141400] data-[selected=true]:border-gradient-from-[#7A7A7A99] data-[selected=true]:text-foreground border-gradient-from-[#7A7A7A00] active:text-foreground/50 relative z-30 cursor-pointer rounded-xl bg-gradient-to-t from-[#1A1A1A]/0 to-[#1A1A1A]/0 p-2 font-semibold text-nowrap text-[#DFDFDF]/70 transition-colors before:transition-colors hover:bg-neutral-600/30 active:bg-neutral-600/50 data-[selected=true]:from-[#1A1A1A] lg:rounded-2xl lg:p-3 2xl:text-3xl"
    >
      {children}
    </button>
  );
}
