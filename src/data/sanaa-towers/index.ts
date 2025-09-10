import afterSaleSupportIcon from "../../../public/svg/after-sale-support-icon.svg";
import earthquakeResistanceIcon from "../../../public/svg/earthquake-resistance-icon.svg";
import modernElevatorsIcon from "../../../public/svg/modern-elevators-icon.svg";
import privateParkingIcon from "../../../public/svg/private-parking-icon.svg";
import spaciousLayoutsIcon from "../../../public/svg/spacious-layouts-icon.svg";
import trustedSecurityIcon from "../../../public/svg/trusted-security-icon.svg";
import { ProjectData } from "../types";
import { towers } from "./towers";

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
        title: "featuresSection.earthquake-resistance",
        icon: earthquakeResistanceIcon,
      },
      {
        title: "featuresSection.private-parking",
        icon: privateParkingIcon,
      },
      {
        title: "featuresSection.modern-elevators",
        icon: modernElevatorsIcon,
      },
      {
        title: "featuresSection.spacious-layouts",
        icon: spaciousLayoutsIcon,
      },
      {
        title: "featuresSection.trusted-security",
        icon: trustedSecurityIcon,
      },
      {
        title: "featuresSection.after-sale-support",
        icon: afterSaleSupportIcon,
      },
    ],
  },
};
