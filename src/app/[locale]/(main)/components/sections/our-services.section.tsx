import afterSaleServicesImage from "@/../public/images/after-sale-services.webp";
import propertyManagementImage from "@/../public/images/property-management.webp";
import realEstateProjectDevelopmentImage from "@/../public/images/real-estate-project-development.webp";
import afterSaleServicesIcon from "@/../public/svg/after-sale.svg";
import commercialIcon from "@/../public/svg/commercial-properties-icon.svg";
import developmentIcon from "@/../public/svg/development.svg";
import { AnimatedGroup } from "@/components/animated-group";
import ImageContainer from "@/components/image-container";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { transitionVariants } from "@/lib/transitions";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const galleryImages = [
  {
    src: realEstateProjectDevelopmentImage,
    title: "real-estate-project-development",
    icon: developmentIcon,
    options: ["apartments", "luxury-villas"],
  },
  {
    src: propertyManagementImage,
    title: "property-management",
    icon: commercialIcon,
    options: ["office-spaces", "business-centers"],
  },
  {
    src: afterSaleServicesImage,
    title: "after-sale-services",
    icon: afterSaleServicesIcon,
    options: ["space-planning", "material-design"],
  },
];

export default function OurServicesSection() {
  const t = useTranslations("OurServicesSection");
  const ct = useTranslations("Common");

  return (
    <Section
      title={t("our-services")}
      description={t("our-services-description")}
      sectionLink={() => (
        <SectionLink href="/projects">
          {ct.rich("what-we-offer", {
            span: (s) => <span className="text-primary">{s}</span>,
          })}
        </SectionLink>
      )}
      className="!px-0 max-lg:!max-w-none lg:!px-4"
      enableAnimation
    >
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
    </Section>
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
      fetchPriority="high"
      className="h-full w-full flex-1 text-center"
      sizes="(max-width: 1024px) 100vw, 33vw"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 py-16 lg:py-30 xl:py-44">
        <div className="flex w-full flex-col items-center gap-2">
          <div className="bg-glass rounded-full border border-white/30 p-4 md:p-4">
            <Image
              src={icon}
              placeholder="empty"
              alt={t(title as Parameters<typeof t>[0])}
              className="size-12 md:size-14 lg:size-14 xl:size-20"
              fetchPriority="high"
              priority
            />
          </div>
          <h3 className="z-10 text-2xl xl:text-3xl 2xl:text-4xl">
            {t(title as Parameters<typeof t>[0])}
          </h3>
        </div>
      </div>
    </ImageContainer>
  );
}
