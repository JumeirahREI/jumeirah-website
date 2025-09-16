import { easings } from "@/lib/easings";

export const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const transitions = {
  // ✦ Hero / Headlines
  heroReveal: {
    duration: 1.2,
    ease: easings.luxuryEaseOut,
  },
  heroCinematic: {
    duration: 1.4,
    ease: easings.cinematicGlide,
  },
  heroSlowRise: {
    duration: 1.6,
    ease: easings.slowLuxuryRise,
  },

  // ✦ UI Components
  uiQuick: {
    duration: 0.5,
    ease: easings.softEaseInOut,
  },
  uiDeliberate: {
    duration: 0.8,
    ease: easings.subtleLinger,
  },

  // ✦ Fades & Media
  fadeIn: {
    duration: 0.7,
    ease: easings.gentleEaseIn,
  },
  fadeOut: {
    duration: 0.6,
    ease: easings.gentleEaseOut,
  },
};
