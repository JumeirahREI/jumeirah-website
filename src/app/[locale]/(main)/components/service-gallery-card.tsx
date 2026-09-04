"use client";

import ImageContainer from "@/components/image-container";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { easings } from "@/lib/easings";
import { AnimatePresence, m } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const dimTransition = {
  duration: 0.5,
  ease: easings.softEaseInOut,
};

const layoutTransition = {
  duration: 0.5,
  ease: easings.softEaseInOut,
};

const listTransition = {
  duration: 0.5,
  ease: easings.softEaseInOut,
};

export function ServiceGalleryCard({
  src,
  title,
  tag = "div",
  icon,
  options,
}: {
  src: StaticImageData;
  title: string;
  tag?: React.ElementType;
  icon: StaticImageData;
  options: string[];
}) {
  const t = useTranslations("OurServicesSection");
  const breakpoint = useBreakpoint();
  const [isActive, setIsActive] = useState(false);

  return (
    <ImageContainer
      src={src}
      containerTag={tag}
      fetchPriority="high"
      alt={t(title as Parameters<typeof t>[0])}
      className="aspect-[4/5] h-full w-full flex-1 text-center md:max-lg:aspect-auto"
      sizes="(max-width: 1024px) 100vw, 33vw"
    >
      <m.div
        onHoverStart={() => breakpoint.md && setIsActive(true)}
        onHoverEnd={() => breakpoint.md && setIsActive(false)}
        onViewportEnter={() => !breakpoint.md && setIsActive(true)}
        onViewportLeave={() => !breakpoint.md && setIsActive(false)}
        viewport={{ amount: 1 }}
        className="relative flex h-full flex-col items-center justify-center overflow-hidden p-5 py-16 lg:py-30"
      >
        <m.div
          aria-hidden
          initial={false}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={dimTransition}
          className="!pointer-events-none absolute inset-0 -z-10 bg-linear-[208deg] from-zinc-900/0 to-zinc-900 rtl:bg-linear-[152deg]"
        />
        <m.div
          layout="position"
          transition={layoutTransition}
          className="flex w-full flex-col items-center gap-2"
        >
          <div className="bg-glass rounded-full border border-white/30 p-4 md:p-4">
            <Image
              src={icon}
              placeholder="empty"
              alt={t(title as Parameters<typeof t>[0])}
              className="size-12 md:size-14 lg:size-14"
              fetchPriority="high"
              priority
            />
          </div>
          <h3 className="z-10 text-2xl">
            {t(title as Parameters<typeof t>[0])}
          </h3>
        </m.div>
        <AnimatePresence>
          {isActive && (
            <m.div
              key="options"
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={listTransition}
              className="w-full pt-10"
            >
              <ul className="list-inside list-disc space-y-2 text-lg font-thin text-white/80">
                {options.map((option, index) => (
                  <li key={index} className="">
                    {t(option as Parameters<typeof t>[0])}
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </ImageContainer>
  );
}
