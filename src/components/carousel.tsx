"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { useLocale } from "next-intl";
import { useEffect } from "react";

export type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
export type CarouselApi = EmblaCarouselType;

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  options: CarouselOptions;
  onReady?(emblaApi: CarouselApi): void;
};

export default function Carousel({
  children,
  className,
  options,
  onReady,
}: CarouselProps) {
  const locale = useLocale();
  const [emplaRef, emblaApi] = useEmblaCarousel(
    {
      direction: locale === "ar" ? "rtl" : "ltr",
      watchDrag: (_, event) => {
        if (event.type === "mousedown" && event.isTrusted) {
          return false;
        }
        return true;
      },
      ...options,
    },
    [WheelGesturesPlugin()],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onReady?.(emblaApi);
  }, [emblaApi, onReady]);

  return (
    <div ref={emplaRef} className={cn("embla", className)}>
      {children}
    </div>
  );
}
