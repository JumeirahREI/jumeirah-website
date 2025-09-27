"use client";

import { cn } from "@/lib/utils";
import { m, useScroll, useTransform } from "motion/react";

type ParallaxScrollEffectProps = Omit<Parameters<typeof m.div>[0], "style">;

export default function ParallaxScrollEffect({
  className,
  ...props
}: ParallaxScrollEffectProps) {
  // const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 350]);

  return (
    <m.div
      // ref={ref}
      style={{ y }}
      className={cn(
        "transform-gpu will-change-transform contain-paint",
        className,
      )}
      {...props}
    />
  );
}
