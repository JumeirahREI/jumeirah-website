import fitnessCenterIcon from "@/../public/images/fitness-center-icon.png";
import sanaaTowersImage from "@/../public/images/sanaa-towers.webp";
import sanaaTowersApartmentPath from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Apartment Path.webp";
import sanaaTowersBedroom1_2_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Bedroom1 2 (2).webp";
import sanaaTowersBedroom2_2_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Bedroom2 2 (2).webp";
import sanaaTowersDiwan2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Diwan 2.webp";
import sanaaTowersKitchen1_2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers Kitchen 1 (2).webp";
import sanaaTowersEntrance2 from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers entrance 2.webp";
import sanaaTowersEntrance from "@/../public/images/sanaa-towers/apartment-b/Sana_a Towers entrance.webp";
import balconyTest1 from "@/../public/images/sanaa-towers/apartment-b/balcony Test 1.webp";
import balconyTest2 from "@/../public/images/sanaa-towers/apartment-b/balcony Test 2.webp";
import diningArea from "@/../public/images/sanaa-towers/apartment-b/dining area.webp";
import living from "@/../public/images/sanaa-towers/apartment-b/living.webp";
import tvUnit from "@/../public/images/sanaa-towers/apartment-b/tv unit.webp";
import centralParkImage from "@/../public/images/sanaa-towers/photos/central-park.webp";
import fitnessCenterImage from "@/../public/images/sanaa-towers/photos/fitness-center.webp";
import jacuzziImage from "@/../public/images/sanaa-towers/photos/jacuzzi.webp";
import nurseryImage from "@/../public/images/sanaa-towers/photos/nursery.webp";
import saunaImage from "@/../public/images/sanaa-towers/photos/sauna.webp";
import storesImage from "@/../public/images/sanaa-towers/photos/stores.webp";
import supermarketImage from "@/../public/images/sanaa-towers/photos/supermarket.webp";
import swimmingPoolImage from "@/../public/images/sanaa-towers/photos/swimming-pool.webp";
import swimmingPoolIcon from "@/../public/images/swimming-pool-icon.png";
import afterSaleSupportIcon from "@/../public/svg/after-sale-support-icon.svg";
import closedCompoundIcon from "@/../public/svg/closed-compound-icon.svg";
import earthquakeResistanceIcon from "@/../public/svg/earthquake-resistance-icon.svg";
import centralParkIcon from "@/../public/svg/garden.svg";
import jacuzziIcon from "@/../public/svg/jacuzzi-icon.svg";
import nurseryIcon from "@/../public/svg/nursery-icon.svg";
import privateParkingIcon from "@/../public/svg/private-parking-icon.svg";
import saunaIcon from "@/../public/svg/sauna-icon.svg";
import sewageIcon from "@/../public/svg/sewage-icon.svg";
import shopsIcon from "@/../public/svg/shops-icon.svg";
import supermarketIcon from "@/../public/svg/supermarket-icon.svg";
import twoEntrancesIcon from "@/../public/svg/two-entrances-icon.svg";
import { towers } from "@/data/sanaa-towers/towers";
import { ProjectData } from "@/data/types";

export const sanaaTowersData: ProjectData<"SanaaTowers"> = {
  projectKey: "SanaaTowers",
  title: "title",
  subtitle: "subtitle",
  towersSection: towers,
  videoSection: {
    title: "videoSection.title",
    description: "videoSection.description",
    videoUrl: "https://youtu.be/gcCwNqkCMGk",
    videoThumbnail: sanaaTowersImage,
  },
  featuresSection: {
    title: "featuresSection.title",
    subtitle: "featuresSection.subtitle",
    features: [
      {
        title: "featuresSection.closed-compound",
        icon: closedCompoundIcon,
      },
      {
        title: "featuresSection.sanitary-system",
        icon: sewageIcon,
      },
      {
        title: "featuresSection.after-sale-support",
        icon: afterSaleSupportIcon,
      },
      {
        title: "featuresSection.earthquake-resistance",
        icon: earthquakeResistanceIcon,
      },
      {
        title: "featuresSection.privacy",
        icon: twoEntrancesIcon,
      },
      {
        title: "featuresSection.private-parking",
        icon: privateParkingIcon,
      },
    ],
  },
  servicesSection: {
    title: "servicesSection.title",
    subtitle: "servicesSection.subtitle",
    services: [
      {
        title: "servicesSection.fitness-center",
        icon: fitnessCenterIcon,
        backgroundImage: fitnessCenterImage,
      },
      {
        title: "servicesSection.sauna",
        icon: saunaIcon,
        backgroundImage: saunaImage,
      },
      {
        title: "servicesSection.jacuzzi",
        icon: jacuzziIcon,
        backgroundImage: jacuzziImage,
      },
      {
        title: "servicesSection.swimming-pool",
        icon: swimmingPoolIcon,
        backgroundImage: swimmingPoolImage,
      },
      {
        title: "servicesSection.central-park",
        icon: centralParkIcon,
        backgroundImage: centralParkImage,
      },
      {
        title: "servicesSection.super-market",
        icon: supermarketIcon,
        backgroundImage: supermarketImage,
      },
      {
        title: "servicesSection.nursery",
        icon: nurseryIcon,
        backgroundImage: nurseryImage,
      },
      {
        title: "servicesSection.shops",
        icon: shopsIcon,
        backgroundImage: storesImage,
      },
    ],
  },
  imageGallerySection: [
    {
      title: "imageGallerySection.interior",
      images: [
        {
          src: sanaaTowersApartmentPath,
          alt: "imageGallerySection.apartment-b.apartment-path",
        },
        {
          src: sanaaTowersBedroom1_2_2,
          alt: "imageGallerySection.apartment-b.bedroom-1",
        },
        {
          src: sanaaTowersBedroom2_2_2,
          alt: "imageGallerySection.apartment-b.bedroom-2",
        },
        {
          src: sanaaTowersDiwan2,
          alt: "imageGallerySection.apartment-b.diwan",
        },
        {
          src: sanaaTowersKitchen1_2,
          alt: "imageGallerySection.apartment-b.kitchen",
        },
        {
          src: sanaaTowersEntrance2,
          alt: "imageGallerySection.apartment-b.entrance-2",
        },
        {
          src: sanaaTowersEntrance,
          alt: "imageGallerySection.apartment-b.entrance-1",
        },
        { src: balconyTest1, alt: "imageGallerySection.apartment-b.balcony-1" },
        { src: balconyTest2, alt: "imageGallerySection.apartment-b.balcony-2" },
        { src: diningArea, alt: "imageGallerySection.apartment-b.dining-area" },
        { src: living, alt: "imageGallerySection.apartment-b.living-room" },
        { src: tvUnit, alt: "imageGallerySection.apartment-b.tv-unit" },
      ],
    },
  ],
};
