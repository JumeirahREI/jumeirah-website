"use client";

import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [width, setWidth] = useState<number>(Infinity);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    sm: true,
    md: width >= 768,
    lg: width >= 1024,
    xl: width >= 1280,
    ssr: width === Infinity,
  };
}
