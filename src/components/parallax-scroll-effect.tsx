"use client";

import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ParallaxScrollEffectProps = Omit<Parameters<typeof m.div>[0], "style">;

export default function ParallaxScrollEffect({
  ...props
}: ParallaxScrollEffectProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <m.div
      ref={ref}
      style={{ y, willChange: "transform" }}
      transition={{ ease: "easeInOut" }}
      {...props}
    />
  );
}
