"use client";

import CarouselArrowButton from "@/components/carousel-arrow-button";
import {
  CarouselDotButton,
  useDotButton,
} from "@/components/carousel-dot-button";
import { useCarouselPrevNext } from "@/hooks/use-carousel-prev-next";
import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";

type CarouselNavigationProps = {
  emblaApi: EmblaCarouselType | undefined;
  className?: string;
};

export default function CarouselNavigation({
  emblaApi,
  className,
}: CarouselNavigationProps) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselPrevNext(emblaApi);

  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <CarouselArrowButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <div className="space-x-2">
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "size-2.5 cursor-pointer rounded-full",
              selectedIndex === index ? "bg-primary scale-110" : "bg-[#606060]",
            )}
          />
        ))}
      </div>
      <CarouselArrowButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        isEnd
      />
    </div>
  );
}
