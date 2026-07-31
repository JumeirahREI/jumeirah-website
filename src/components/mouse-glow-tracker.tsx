"use client";

import { m, useMotionValue } from "motion/react";
import React from "react";

type MouseGlowTrackerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function MouseGlowTracker({
  className,
  children,
}: MouseGlowTrackerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const onMouseEnter = () => {
    opacity.set(0.07);
  };

  const onMouseLeave = () => {
    opacity.set(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      className={`${className} relative overflow-hidden`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <m.div
        style={{
          left: mouseX,
          top: mouseY,
          opacity,
        }}
        className={`pointer-events-none absolute hidden size-[40rem] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white blur-3xl will-change-transform lg:block`}
      />
      {children}
    </div>
  );
}
