import MouseGlowTracker from "@/components/mouse-glow-tracker";
import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <MouseGlowTracker
      className={cn(
        "z-10 rounded-4xl bg-linear-[7deg] from-[#1A1A1A] to-[#1A1A1A]/0 px-4 py-6 md:rounded-[3.5rem] md:px-7 md:pt-10 md:pb-12 lg:px-14 lg:pt-14 lg:pb-16 rtl:bg-linear-[353deg]",
        className,
      )}
    >
      {children}
    </MouseGlowTracker>
  );
}
