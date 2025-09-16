"use client";
import { transitions } from "@/lib/transitions"; // your luxury presets
import { Variants, m } from "motion/react";
import React, { ReactNode } from "react";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "rotate";

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  childrenClassName?: string;
  variants?: { container?: Variants; item?: Variants };
  preset?: PresetType;
  as?: React.ElementType;
  inView?:
    | boolean
    | { once?: boolean; amount?: number | "some" | "all"; margin?: string };
  disabled?: boolean;
  inherit?: boolean;
  ref?: React.RefObject<any>;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0, transition: transitions.heroReveal },
  },
  scale: {
    hidden: { scale: 0.95 },
    visible: { scale: 1, transition: transitions.uiDeliberate },
  },
  blur: {
    hidden: { filter: "blur(6px)" },
    visible: { filter: "blur(0px)", transition: transitions.fadeIn },
  },
  "blur-slide": {
    hidden: { filter: "blur(6px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0, transition: transitions.heroReveal },
  },
  zoom: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: transitions.heroCinematic },
  },
  rotate: {
    hidden: { rotate: -6, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: transitions.uiQuick },
  },
};

const mergeVariants = (base: Variants, override: Variants) => ({
  hidden: { ...base.hidden, ...override.hidden },
  visible: { ...base.visible, ...override.visible },
});

function getMotionVisibilityProps(
  inView: AnimatedGroupProps["inView"],
  inherit: boolean,
) {
  if (inherit) return {};
  if (inView) {
    return {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport:
        typeof inView === "object"
          ? inView
          : { once: true, amount: 0.1, margin: "-50px" },
    };
  }
  return { initial: "hidden" as const, animate: "visible" as const };
}

const AnimatedGroup = ({
  children,
  className,
  childrenClassName,
  variants,
  preset,
  as = "div",
  inView = false,
  disabled = false,
  inherit = false,
  ref,
}: AnimatedGroupProps) => {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = mergeVariants(
    defaultItemVariants,
    preset ? presetVariants[preset] : variants?.item || {},
  );

  const MotionComponent: React.ComponentType<any> =
    ((m as any)[as as keyof typeof m] as React.ComponentType<any>) || m.div;

  if (disabled) {
    const ContainerTag = as as React.ElementType;
    return (
      <ContainerTag className={className} ref={ref}>
        {React.Children.map(children, (child, i) => (
          <div key={i} className={childrenClassName}>
            {child}
          </div>
        ))}
      </ContainerTag>
    );
  }

  return (
    <MotionComponent
      {...getMotionVisibilityProps(inView, inherit)}
      variants={containerVariants}
      className={className}
      ref={ref}
    >
      {React.Children.map(children, (child, i) => (
        <m.div key={i} variants={itemVariants} className={childrenClassName}>
          {child}
        </m.div>
      ))}
    </MotionComponent>
  );
};

AnimatedGroup.displayName = "AnimatedGroup";
export { AnimatedGroup };
