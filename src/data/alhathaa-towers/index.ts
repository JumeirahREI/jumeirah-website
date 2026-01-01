import alhathaaTowersImage from "@/../public/images/alhathaa-towers.webp";
import afterSaleSupportIcon from "@/../public/svg/after-sale-support-icon.svg";
import earthquakeResistanceIcon from "@/../public/svg/earthquake-resistance-icon.svg";
import modernElevatorsIcon from "@/../public/svg/modern-elevators-icon.svg";
import privateParkingIcon from "@/../public/svg/private-parking-icon.svg";
import spaciousLayoutsIcon from "@/../public/svg/spacious-layouts-icon.svg";
import trustedSecurityIcon from "@/../public/svg/trusted-security-icon.svg";
import { towers } from "@/data/alhathaa-towers/towers";
import { ProjectData } from "@/data/types";

export const alhathaaTowersData: ProjectData<"Alhathaa-Towers"> = {
  projectKey: "Alhathaa-Towers",
  title: "title",
  subtitle: "subtitle",
  towersSection: towers,
  videoSection: {
    title: "videoSection.title",
    description: "videoSection.description",
    videoUrl: "https://youtu.be/6nRVVZ8nmEY?si=7v3Y5SBQpn-M4Bdr",
    videoThumbnail: alhathaaTowersImage,
  },
  featuresSection: {
    title: "featuresSection.title",
    subtitle: "featuresSection.subtitle",
    features: [
      {
        title: "featuresSection.earthquake-resistance",
        icon: earthquakeResistanceIcon,
      },
      {
        title: "featuresSection.private-parking",
        icon: privateParkingIcon,
      },
      {
        title: "featuresSection.green-space",
        icon: modernElevatorsIcon,
      },
      {
        title: "featuresSection.water-project",
        icon: spaciousLayoutsIcon,
      },
      {
        title: "featuresSection.sanitary-system",
        icon: trustedSecurityIcon,
      },
      {
        title: "featuresSection.after-sale-support",
        icon: afterSaleSupportIcon,
      },
    ],
  },
};
