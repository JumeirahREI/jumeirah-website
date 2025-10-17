import centralParkIcon from "@/../public/images/central-park-icon.png";
import fitnessCenterIcon from "@/../public/images/fitness-center-icon.png";
import centralParkImage from "@/../public/images/sanaa-towers/photos/central-park.webp";
import fitnessCenterImage from "@/../public/images/sanaa-towers/photos/fitness-center.webp";
import jacuzziImage from "@/../public/images/sanaa-towers/photos/jacuzzi.webp";
import saunaImage from "@/../public/images/sanaa-towers/photos/sauna.webp";
import swimmingPoolImage from "@/../public/images/sanaa-towers/photos/swimming-pool.webp";
import swimmingPoolIcon from "@/../public/images/swimming-pool-icon.png";
import afterSaleSupportIcon from "@/../public/svg/after-sale-support-icon.svg";
import earthquakeResistanceIcon from "@/../public/svg/earthquake-resistance-icon.svg";
import modernElevatorsIcon from "@/../public/svg/modern-elevators-icon.svg";
import privateParkingIcon from "@/../public/svg/private-parking-icon.svg";
import spaciousLayoutsIcon from "@/../public/svg/spacious-layouts-icon.svg";
import trustedSecurityIcon from "@/../public/svg/trusted-security-icon.svg";
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
        icon: modernElevatorsIcon,
      },
      {
        title: "featuresSection.entertainment-and-services",
        icon: spaciousLayoutsIcon,
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
        icon: trustedSecurityIcon,
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
        icon: swimmingPoolIcon,
        backgroundImage: saunaImage,
      },
      {
        title: "servicesSection.jacuzzi",
        icon: centralParkIcon,
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
        icon: centralParkIcon,
        backgroundImage: centralParkImage,
      },
      {
        title: "servicesSection.nursery",
        icon: centralParkIcon,
        backgroundImage: centralParkImage,
      },
      {
        title: "servicesSection.shops",
        icon: centralParkIcon,
        backgroundImage: centralParkImage,
      },
    ],
  },
};
