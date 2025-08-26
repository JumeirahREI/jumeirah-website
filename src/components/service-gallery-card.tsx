import GotoIcon from "@/components/goto-icon";
import ImageContainer from "@/components/image-container";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export default function ServiceGalleryCard({
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
      alt={t(title as Parameters<typeof t>[0])}
      className="flex-1 text-center"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 pt-16 lg:pt-30 xl:pt-36">
        <div className="flex w-full grow flex-col items-center gap-2">
          <div className="bg-glass rounded-full border border-white/30 p-4 md:p-4">
            <Image
              src={icon}
              alt={t(title as Parameters<typeof t>[0])}
              className="size-14 lg:size-14 xl:size-16"
            />
          </div>
          <p className="z-10 text-2xl lg:text-xl xl:text-3xl">
            {t(title as Parameters<typeof t>[0])}
          </p>
          <div className="mt-4 mb-10 flex justify-center gap-3 self-stretch text-sm lg:mt-2 lg:gap-2 lg:text-xs xl:mt-4 xl:mb-10 xl:text-base">
            {options.map((option) => (
              <span
                key={option}
                className="bg-glass flex items-center justify-center rounded-full border border-white/30 px-5 py-2 xl:px-7 xl:py-2.5"
              >
                {t(option as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>
        <GotoIcon
          className="size-10 lg:size-10 lg:p-1.5 xl:mb-4 xl:size-12"
          alt={t(title as Parameters<typeof t>[0])}
        />
      </div>
    </ImageContainer>
  );
}
