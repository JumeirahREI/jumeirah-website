"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  options: Parameters<typeof useEmblaCarousel>[0];
};

export default function Carousel({
  children,
  className,
  options,
}: CarouselProps) {
  const locale = useLocale();
  const [emplaRef] = useEmblaCarousel({
    direction: locale === "ar" ? "rtl" : "ltr",
    ...options,
  });

  return (
    <div ref={emplaRef} className={cn("embla", className)}>
      {children}
    </div>
  );
}
