"use client";

import ServiceGalleryCard from "@/components/service-gallery-card";
import "swiper/css";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import commercialPropertiesImage from "../../public/images/commercial-properties.png";
import interiorDesignImage from "../../public/images/interior-design.png";
import residentialPropertiesImage from "../../public/images/residential-properties.png";
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
  return (
    <>
      <div className="lg:hidden">
        <Swiper
          modules={[Virtual]}
          spaceBetween={16}
          slidesPerView={1.2}
          slidesPerGroup={1}
          loopAddBlankSlides
          tag="ul"
          wrapperTag="li"
          centeredSlides
          slideToClickedSlide
          virtual
          // edgeSwipeDetection="prevent"
          // loopAdditionalSlides={3}
          // loop
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={image.title} virtualIndex={index}>
              <ServiceGalleryCard {...image} />
            </SwiperSlide>
          ))}
        </Swiper>
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
