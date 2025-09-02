"use client";

import CategoriesTabBar from "@/app/[locale]/projects/components/categories-tab-bar";
import CategoryProjectItem from "@/app/[locale]/projects/components/category-project-item";
import CarouselArrowButton from "@/components/carousel-arrow-button";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Virtual } from "swiper/modules";
import { Swiper } from "swiper/react";
import adenTowersImage from "../../../../../public/images/aden-towers.png";
import alHathaaTowersImage from "../../../../../public/images/alhathaa-towers.png";
import sanaaTowersImage from "../../../../../public/images/sanaa-towers.png";

export default function ProjectsSection() {
  const t = useTranslations("ProjectsPage");
  const [selectedTab, setSelectedTab] = useState("all-projects");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    skipSnaps: true,
    breakpoints: {
      "(min-width: 768px)": {
        align: "start",
        containScroll: "keepSnaps",
        slidesToScroll: 1,
        skipSnaps: true,
      },
      "(min-width: 1024px)": {
        align: "center",
        slidesToScroll: 3,
        containScroll: "keepSnaps",
        skipSnaps: false,
      },
      "(min-width: 1280px)": {
        align: "center",
        slidesToScroll: 3,
        containScroll: false,
        skipSnaps: true,
      },
    },
  });

  const tabs = [
    { label: t("all-projects"), value: "all-projects" },
    { label: t("towers"), value: "towers" },
    { label: t("apartments"), value: "apartments" },
    { label: t("villas"), value: "villas" },
  ];

  const projects = [
    {
      title: t.rich("sanaa-towers.title", {
        span: (s) => <span className="text-primary">{s}</span>,
      }),
      status: t("sanaa-towers.status"),
      image: sanaaTowersImage,
    },
    {
      title: t.rich("alhathaa-towers.title", {
        span: (s) => <span className="text-primary">{s}</span>,
      }),
      status: t("alhathaa-towers.status"),
      image: alHathaaTowersImage,
    },
    {
      title: t.rich("aden-towers.title", {
        span: (s) => <span className="text-primary">{s}</span>,
      }),
      status: t("aden-towers.status"),
      image: adenTowersImage,
    },
  ] as const;

  return (
    <section className="bg-background mb-20 md:mb-32 lg:mb-52">
      <div className="relative z-30 space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-24">
        <CategoriesTabBar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="relative md:container md:mx-auto">
          <CarouselArrowButton
            className="absolute start-0 top-2/5 z-30 hidden -translate-y-1/2 scale-80 md:block lg:scale-75 xl:scale-100"
            onClick={() => emblaApi?.scrollPrev()}
          />
          <CarouselArrowButton
            className="absolute end-0 top-2/5 z-30 hidden -translate-y-1/2 scale-80 md:block lg:scale-75 xl:scale-100"
            onClick={() => emblaApi?.scrollNext()}
            isEnd
          />
          <div
            className="embla md:fade-x w-full overflow-hidden md:px-24 xl:px-32"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div
                  className="embla__slide mx-3 min-w-0 flex-[0_0_80%] md:flex-[0_0_47%] lg:flex-[0_0_30%] xl:mx-5"
                  key={index}
                >
                  <CategoryProjectItem
                    title={project.title}
                    status={project.status}
                    img={project.image}
                    href="#"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OldSlider = () => {
  return (
    <Swiper
      modules={[Virtual]}
      spaceBetween={32}
      slidesPerView={3}
      centerInsufficientSlides
      tag="section"
      slideToClickedSlide
      virtual
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerGroupSkip: 2,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerGroupSkip: 3,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          slidesPerGroupSkip: 4,
        },
      }}
    >
      {/* {projects.map((project, index) => (
      <SwiperSlide key={index} virtualIndex={index}>
        <CategoryProjectItem
          title={project.title}
          status={project.status}
          img={project.image}
          href="#"
        />
      </SwiperSlide>
    ))} */}
    </Swiper>
  );
};
