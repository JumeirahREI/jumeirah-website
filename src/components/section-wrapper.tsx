"use client";

import { m } from "motion/react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  enableAnimation?: boolean;
};

export default function SectionWrapper({
  children,
  enableAnimation = false,
}: SectionWrapperProps) {
  return (
    <m.section
      {...(enableAnimation
        ? {
            initial: "hidden" as const,
            whileInView: "visible" as const,
            transition: { staggerChildren: 0.2, ease: "easeInOut" },
            viewport: { once: true, amount: 0.5, margin: "-50px" },
          }
        : {})}
      className="bg-background relative overflow-x-clip"
    >
      {children}
    </m.section>
  );
}
