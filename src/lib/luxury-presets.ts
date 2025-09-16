import type { Variants } from "motion/react";

// Shared defaults
const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const luxuryPresets = {
  // ✦ Hero Headlines
  hero: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // smooth rise
        },
      },
      exit: { opacity: 0, y: 32 },
    },
  },

  rise: {
    container: defaultContainerVariants,
    item: {
      hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.9,
          ease: [0.25, 1, 0.5, 1], // luxe cubic easing
        },
      },
    },
  },

  // ✦ Editorial / Bold
  clip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
      visible: {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        transition: {
          duration: 1,
          ease: [0.83, 0, 0.17, 1],
        },
      },
      exit: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    },
  },

  // ✦ Modern / Angular
  skewFade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, skewY: 8, y: 20 },
      visible: {
        opacity: 1,
        skewY: 0,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.19, 1, 0.22, 1],
        },
      },
      exit: { opacity: 0, skewY: 8, y: 20 },
    },
  },

  // ✦ Paragraphs / Calm
  cascade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 16 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.25, 1, 0.5, 1],
        },
      },
      exit: { opacity: 0, y: 16 },
    },
  },

  // ✦ Cinematic / Masked slide
  maskSlide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, x: -30, clipPath: "inset(0 100% 0 0)" },
      visible: {
        opacity: 1,
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        transition: {
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1],
        },
      },
      exit: { opacity: 0, x: -30, clipPath: "inset(0 100% 0 0)" },
    },
  },
} as const;
