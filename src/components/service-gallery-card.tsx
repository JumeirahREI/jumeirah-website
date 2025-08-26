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
      className="grow text-center"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 lg:pt-24 xl:pt-36">
        <div className="flex grow flex-col items-center gap-2">
          <div className="bg-glass rounded-full border border-white/30 p-4">
            <Image
              src={icon}
              alt={t(title as Parameters<typeof t>[0])}
              className="lg:size-9 xl:size-16"
            />
          </div>
          <p className="z=10 lg:text-lg xl:text-3xl">
            {t(title as Parameters<typeof t>[0])}
          </p>
          <div className="flex gap-3 lg:mt-2 xl:mt-4 xl:mb-10">
            {options.map((option) => (
              <span
                key={option}
                className="bg-glass flex grow items-center justify-center rounded-full border border-white/30 px-5 py-2 text-xs xl:px-7 xl:py-2.5 xl:text-base"
              >
                {t(option as Parameters<typeof t>[0])}
              </span>
            ))}
          </div>
        </div>
        <GotoIcon
          className="xl:mb-4"
          alt={t(title as Parameters<typeof t>[0])}
        />
      </div>
    </ImageContainer>
  );
}
