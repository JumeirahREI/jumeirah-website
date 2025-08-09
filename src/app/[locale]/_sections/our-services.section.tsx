import ImageContainer from "@/components/image-container";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import residentialPropertiesImage from "../../../../public/images/residential-properties.png";
import gotoIcon from "../../../../public/svg/go-to-icon.svg";
import homeIcon from "../../../../public/svg/home-icon.svg";

export default function OurServicesSection() {
  const t = useTranslations("OurServicesSection");
  const ct = useTranslations("Common");

  const galleryImages = [
    {
      src: residentialPropertiesImage,
      title: "residential-properties",
      icon: homeIcon,
      options: ["apartments", "luxury-villas"],
    },
  ];

  return (
    <Section
      title={t.rich("our-services", {
        span: (s) => <span className="text-primary">{s}</span>,
      })}
      description={t("our-services-description")}
      sectionLink={() => (
        <SectionLink href="#">
          {ct.rich("what-we-create", {
            span: (s) => <span className="text-primary">{s}</span>,
          })}
        </SectionLink>
      )}
    >
      {galleryImages.map((image) => (
        <ServiceGalleryCard
          key={image.title}
          src={image.src}
          title={image.title}
          icon={image.icon}
          options={image.options}
        />
      ))}
    </Section>
  );
}

function ServiceGalleryCard({
  src,
  title,
  icon,
  options,
}: {
  src: any;
  title: string;
  icon: any;
  options: string[];
}) {
  const t = useTranslations("OurServicesSection");

  return (
    <ImageContainer src={src} alt={t(title as any)} className="max-w-lg">
      <div className="flex flex-col items-center justify-end gap-4 p-5 pt-32">
        <div className="bg-glass rounded-full border border-white/30 p-4">
          <Image src={icon} alt={t(title as any)} className="size-14" />
        </div>
        <p className="z=10 font-serif text-3xl">{t(title as any)}</p>
        <div className="flex gap-3">
          {options.map((option) => (
            <span
              key={option}
              className="bg-glass rounded-full border border-white/30 px-5 py-3"
            >
              {t(option as any)}
            </span>
          ))}
        </div>
        <div className="bg-glass rounded-full border border-white/30 p-1">
          <Image src={gotoIcon} alt={t(title as any)} />
        </div>
      </div>
    </ImageContainer>
  );
}
