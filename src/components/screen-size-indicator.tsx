"use client";

import { useEffect, useState } from "react";
import useIsClient from "../../hooks/use-is-client";

const getInitialSize = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }

  return 0;
};

export default function ScreenSizeIndicator() {
  const [width, setWidth] = useState(getInitialSize);
  const isClient = useIsClient();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed start-0 left-0 z-[9999] w-fit text-3xl opacity-20 hover:opacity-100">
      <p className="inline-flex items-center gap-2 bg-white p-4">
        <span className="sm:hidden">DEFAULT</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
        <span className="max-2xl:hidden">2XL</span> - ({width})
      </p>
    </div>
  );
}
