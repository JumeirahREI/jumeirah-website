"use client";

import GotoIcon from "@/components/goto-icon";
import ImageContainer from "@/components/image-container";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import commercialPropertiesImage from "../../public/images/commercial-properties.webp";
import interiorDesignImage from "../../public/images/interior-design.webp";
import residentialPropertiesImage from "../../public/images/residential-properties.webp";
import commercialIcon from "../../public/svg/commercial-properties-icon.svg";
import homeIcon from "../../public/svg/home-icon.svg";
import interiorDesignIcon from "../../public/svg/interior-design-icon.svg";

const galleryImages = [
  {
    src: residentialPropertiesImage,
    title: "residential-properties",
    icon: homeIcon,
    options: ["apartments", "luxury-villas"],
  },
  {
    src: commercialPropertiesImage,
    title: "commercial-properties",
    icon: commercialIcon,
    options: ["office-spaces", "business-centers"],
  },
  {
    src: interiorDesignImage,
    title: "interior-design",
    icon: interiorDesignIcon,
    options: ["space-planning", "material-design"],
  },
];

export default function OurServicesCarousel() {
  const locale = useLocale();
  const [emplaRef] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    direction: locale === "ar" ? "rtl" : "ltr",
    skipSnaps: true,
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        align: "start",
        loop: false,
        dragFree: true,
        containScroll: "keepSnaps",
        slidesToScroll: 1,
        skipSnaps: true,
      },
    },
  });

  return (
    <>
      <div className="lg:hidden">
        <div
          ref={emplaRef}
          className="embla w-full overflow-hidden md:px-4 xl:px-32"
        >
          <div className="embla__container flex">
            {galleryImages.map((image, index) => (
              <div
                className="embla__slide mx-3 flex-[0_0_80%] md:flex-[0_0_47%]"
                key={index}
              >
                <ServiceGalleryCard {...image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="mx-auto hidden justify-between gap-5 lg:container lg:flex xl:gap-10">
        {galleryImages.map((image) => (
          <ServiceGalleryCard
            key={image.title}
            src={image.src}
            title={image.title}
            tag="li"
            icon={image.icon}
            options={image.options}
          />
        ))}
      </ul>
    </>
  );
}

function ServiceGalleryCard({
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

  return (
    <ImageContainer src={src} containerTag={tag} className="flex-1 text-center">
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 pt-16 lg:pt-30 xl:pt-44">
        <div className="flex w-full grow flex-col items-center gap-2">
          <div className="bg-glass rounded-full border border-white/30 p-4 md:p-4">
            <Image
              src={icon}
              loading="lazy"
              placeholder="empty"
              alt={t(title as Parameters<typeof t>[0])}
              className="size-14 lg:size-14 xl:size-20"
            />
          </div>
          <h3 className="z-10 text-2xl lg:text-xl xl:text-4xl">
            {t(title as Parameters<typeof t>[0])}
          </h3>
          <div className="mt-4 mb-10 flex justify-center gap-3 self-stretch text-sm lg:mt-2 lg:gap-2 lg:text-xs xl:mt-4 xl:mb-10 xl:text-base">
            {options.map((option) => (
              <span
                key={option}
                className="bg-glass flex items-center justify-center rounded-full border border-white/30 px-5 py-2 xl:px-6 xl:py-2"
              >
                {t(option as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>
        <GotoIcon
          className="size-10 lg:size-10 lg:p-1.5 xl:mb-4 xl:size-14 xl:p-2"
          alt={t(title as Parameters<typeof t>[0])}
        />
      </div>
    </ImageContainer>
  );
}
