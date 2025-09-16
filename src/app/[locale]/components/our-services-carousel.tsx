import commercialPropertiesImage from "@/../public/images/commercial-properties.webp";
import interiorDesignImage from "@/../public/images/interior-design.webp";
import residentialPropertiesImage from "@/../public/images/residential-properties.webp";
import commercialIcon from "@/../public/svg/commercial-properties-icon.svg";
import homeIcon from "@/../public/svg/home-icon.svg";
import interiorDesignIcon from "@/../public/svg/interior-design-icon.svg";
import { AnimatedGroup } from "@/components/animated-group";
import GotoIcon from "@/components/goto-icon";
import ImageContainer from "@/components/image-container";
import { transitionVariants } from "@/lib/transitions";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

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
  return (
    <div className="container">
      <AnimatedGroup
        variants={transitionVariants}
        className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-7"
        childrenClassName="flex-1"
        inherit
      >
        {galleryImages.map((image, index) => (
          <ServiceGalleryCard key={index} {...image} />
        ))}
      </AnimatedGroup>
    </div>
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
    <ImageContainer
      src={src}
      containerTag={tag}
      className="h-full w-full flex-1 text-center"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 pt-16 lg:pt-30 xl:pt-44">
        <div className="flex w-full grow flex-col items-center gap-2">
          <div className="bg-glass rounded-full border border-white/30 p-4 md:p-4">
            <Image
              src={icon}
              loading="lazy"
              placeholder="empty"
              alt={t(title as Parameters<typeof t>[0])}
              className="size-12 md:size-14 lg:size-14 xl:size-20"
            />
          </div>
          <h3 className="z-10 text-2xl xl:text-3xl 2xl:text-4xl">
            {t(title as Parameters<typeof t>[0])}
          </h3>
          <div className="mt-4 mb-4 flex justify-center gap-3 self-stretch text-sm md:mb-10 lg:mt-2 lg:gap-2 lg:text-xs xl:mt-4 xl:mb-10 xl:text-base">
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
          className="size-10 justify-self-end lg:size-10 lg:p-1.5 xl:mb-4 xl:size-14 xl:p-2"
          alt={t(title as Parameters<typeof t>[0])}
        />
      </div>
    </ImageContainer>
  );
}
