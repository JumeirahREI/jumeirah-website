"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 150;

export default function NavbarLogoBackgroundGradient() {
  const [showLogoBackground, setShowLogoBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setShowLogoBackground(true);
      } else {
        setShowLogoBackground(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={cn(
        "from-background to-background/0 pointer-events-none fixed inset-0 start-0 -top-4 z-[50] hidden h-56 w-6/12 -translate-x-1/2 -translate-y-1/2 bg-radial opacity-0 blur-2xl transition-opacity duration-300 ease-in-out lg:block rtl:translate-x-1/2",
        showLogoBackground && "opacity-80",
      )}
    />
  );
}
