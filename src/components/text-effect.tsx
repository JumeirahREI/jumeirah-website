"use client";
import { cn } from "@/lib/utils";
import type {
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
} from "motion/react";
import { AnimatePresence, m } from "motion/react";
import React, { Children, isValidElement, ReactNode } from "react";

export type PresetType =
  | "blur"
  | "fade-in-blur"
  | "scale"
  | "fade"
  | "slide"
  | "rise"
  | "clip"
  | "skew-fade"
  | "cascade"
  | "mask-slide";
export type PerType = "word" | "char" | "line";

export type TextEffectProps = {
  children: ReactNode; // string OR React elements
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  onAnimationComplete?(): void;
  onAnimationStart?(): void;
  segmentWrapperClassName?: string;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  style?: React.CSSProperties;
  inView?:
    | boolean
    | { once?: boolean; amount?: number | "some" | "all"; margin?: string };
  disabled?: boolean;
  inherit?: boolean;
};

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const luxuryPresets: Record<
  "rise" | "clip" | "skew-fade" | "cascade" | "mask-slide",
  { container: Variants; item: Variants }
> = {
  rise: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        },
      },
      exit: { opacity: 0, y: 24 },
    },
  },

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

  "skew-fade": {
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

  cascade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.2,
        },
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

  "mask-slide": {
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
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(12px)" },
    },
  },
  "fade-in-blur": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 20, filter: "blur(12px)" },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
  rise: luxuryPresets.rise,
  clip: luxuryPresets.clip,
  "skew-fade": luxuryPresets["skew-fade"],
  cascade: luxuryPresets.cascade,
  "mask-slide": luxuryPresets["mask-slide"],
};

const AnimationComponent: React.FC<{
  segment: ReactNode;
  variants: Variants;
  per: "line" | "word" | "char";
  segmentWrapperClassName?: string;
}> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
  const wrap = (content: ReactNode) => {
    if (!segmentWrapperClassName) return content;
    const defaultWrapperClassName = per === "line" ? "block" : "inline-block";
    return (
      <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
        {content}
      </span>
    );
  };

  if (typeof segment === "string") {
    if (per === "line") {
      return wrap(
        <m.span variants={variants} className="block">
          {segment}
        </m.span>,
      );
    }
    if (per === "word") {
      return wrap(
        <m.span
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {segment}
        </m.span>,
      );
    }
    return wrap(
      <m.span className="inline-block whitespace-pre">
        {segment.split("").map((char, charIndex) => (
          <m.span
            key={`char-${charIndex}`}
            aria-hidden="true"
            variants={variants}
            className="inline-block whitespace-pre"
          >
            {char}
          </m.span>
        ))}
      </m.span>,
    );
  }

  return wrap(
    <m.span variants={variants} className="inline-block whitespace-pre">
      {segment}
    </m.span>,
  );
});
AnimationComponent.displayName = "AnimationComponent";

const splitChildren = (children: ReactNode, per: PerType): ReactNode[] => {
  let segments: ReactNode[] = [];
  const result: ReactNode[] = [];
  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      if (per === "line") {
        child.split("\n").forEach((line) => {
          result.push(line);
        });
      } else {
        child.split(/(\s+)/).forEach((part) => {
          if (part === " ") {
            result.push([...segments, " "]);
            segments = [];
          } else if (part) {
            segments.push(part);
          }
        });
      }
    } else if (isValidElement(child)) {
      segments.push(child);
    }
  });
  result.push(segments);

  return result;
};

const hasTransition = (
  variant?: Variant,
): variant is TargetAndTransition & { transition?: Transition } => {
  if (!variant) return false;
  return typeof variant === "object" && "transition" in variant;
};

const createVariantsWithTransition = (
  baseVariants: Variants,
  transition?: Transition & { exit?: Transition },
): Variants => {
  if (!transition) return baseVariants;
  const { exit: _, ...mainTransition } = transition;
  return {
    ...baseVariants,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(hasTransition(baseVariants.visible)
          ? baseVariants.visible.transition
          : {}),
        ...mainTransition,
      },
    },
    exit: {
      ...baseVariants.exit,
      transition: {
        ...(hasTransition(baseVariants.exit)
          ? baseVariants.exit.transition
          : {}),
        ...mainTransition,
        staggerDirection: -1,
      },
    },
  };
};

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset = "fade",
  delay = 0,
  speedReveal = 1,
  speedSegment = 0.5,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
  inView = false,
  disabled = false,
  inherit = false,
}: TextEffectProps) {
  const segments = splitChildren(children, per);
  const MotionTag = m[as as keyof typeof m] as typeof m.div;

  const baseVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const stagger = defaultStaggerTimes[per] / speedReveal;
  const baseDuration = 0.3 / speedSegment;

  const customStagger = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition
        ?.staggerChildren
    : undefined;
  const customDelay = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition
        ?.delayChildren
    : undefined;

  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || baseVariants.container,
      {
        staggerChildren: customStagger ?? stagger,
        delayChildren: customDelay ?? delay,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? stagger,
          staggerDirection: -1,
        },
      },
    ),
    item: createVariantsWithTransition(variants?.item || baseVariants.item, {
      duration: baseDuration,
      ...segmentTransition,
    }),
  };

  if (disabled) {
    const Tag = as;
    return React.createElement(Tag, { className, style }, children);
  }

  const motionVisibilityProps = inherit
    ? {}
    : inView
      ? {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport:
            typeof inView === "object"
              ? inView
              : { once: true, amount: 0.5, margin: "-50px" },
        }
      : {
          initial: "hidden" as const,
          animate: "visible" as const,
          exit: "exit" as const,
        };

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          {...motionVisibilityProps}
          variants={computedVariants.container}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {per !== "line" ? <span className="sr-only">{children}</span> : null}
          {segments.map((segment, index) => (
            <AnimationComponent
              key={`${per}-${index}`}
              segment={segment}
              variants={computedVariants.item}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}
