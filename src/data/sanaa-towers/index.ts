import fitnessCenterIcon from "@/../public/images/fitness-center-icon.png";
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
};
