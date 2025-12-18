"use client";

import Carousel, { CarouselApi, CarouselOptions } from "@/components/carousel";
import CarouselNavigation from "@/components/carousel-navigation";
import ImageContainer from "@/components/image-container";
import Section from "@/components/section";
import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const carouselOptions: CarouselOptions = {
  slidesToScroll: 1,
  align: "center",
  breakpoints: {
    "(min-width: 768px)": {
      align: "start",
      skipSnaps: true,
    },
    "(min-width: 1024px)": {
      slidesToScroll: 3,
      skipSnaps: false,
    },
  },
};

type ServiceItemProps = {
  title: React.ReactNode;
  icon: StaticImageData;
  backgroundImage: StaticImageData;
};

type ServicesSectionProps = {
  projectData: ProjectData<Project>;
};

export default function ServicesSection({ projectData }: ServicesSectionProps) {
  const t = useTranslations(projectData.projectKey);
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();

  return (
    <Section
      title={t("servicesSection.title")}
      description={t("servicesSection.subtitle")}
    >
      <Carousel
        options={carouselOptions}
        className="lg:container"
        onReady={setEmblaApi}
      >
        <div className="flex md:space-x-6">
          {projectData.servicesSection?.services.map((item) => (
            <ServiceItem
              key={item.title}
              title={t.rich(item.title, {
                br: () => <br />,
              })}
              icon={item.icon}
              backgroundImage={item.backgroundImage}
            />
          ))}
        </div>
      </Carousel>
      <CarouselNavigation
        emblaApi={emblaApi}
        className="mt-14 hidden lg:flex"
      />
    </Section>
  );
}

function ServiceItem({ title, icon, backgroundImage }: ServiceItemProps) {
  return (
    <ImageContainer
      src={backgroundImage}
      className="aspect-[7/8] flex-[0_0_90%] max-md:mx-3 md:flex-[0_0_45%] lg:flex-[0_0_30%]"
    >
      <div className="flex size-full flex-col items-center justify-center gap-6 px-8">
        <div className="size-32 rounded-full border border-white/30 bg-[#A5A5A5]/25 p-5 backdrop-blur-md">
          <Image
            aria-hidden
            loading="lazy"
            src={icon}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="rounded-4xl border border-white/30 bg-[#A5A5A5]/25 px-6 py-2 backdrop-blur-md">
          <h3 className="first-letter-primary-or-clip w-fit !from-[1ch] !to-[1ch] text-center rtl:pb-0.5">
            {title}
          </h3>
        </div>
      </div>
    </ImageContainer>
  );
}
