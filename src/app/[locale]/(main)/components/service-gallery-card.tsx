"use client";

import ImageContainer from "@/components/image-container";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { easings } from "@/lib/easings";
import { m, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const listVariants: Variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  active: {
    opacity: 1,
    height: "auto",
  },
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
        initial="initial"
        whileHover="active"
        whileInView={!breakpoint.md ? "active" : ""}
        viewport={{ amount: 1 }}
        className="flex h-full flex-col items-center justify-center p-5 py-16 lg:py-30"
      >
        <div className="flex w-full flex-col items-center gap-2">
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
        </div>
        <m.div
          variants={listVariants}
          transition={{
            duration: 0.5,
            ease: easings.softEaseInOut,
            delay: !breakpoint.md ? 0.3 : 0,
          }}
        >
          <ul className="list-inside list-disc space-y-2 pt-10 text-lg font-thin text-white/80">
            {options.map((option, index) => (
              <li key={index} className="">
                {t(option as Parameters<typeof t>[0])}
              </li>
            ))}
          </ul>
          <div
            aria-hidden
            className="!pointer-events-none absolute inset-0 -z-10 bg-linear-[208deg] from-zinc-900/0 to-zinc-900 opacity-60 rtl:bg-linear-[152deg]"
          />
        </m.div>
      </m.div>
    </ImageContainer>
  );
}
