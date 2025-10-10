"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TowerDisplayImage({
  fill = true,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Image
        onLoad={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        onError={() => setIsLoading(true)}
        alt={alt || ""}
        fill={fill}
        {...props}
        className={cn("w-full scale-105 object-contain", className)}
      />
      {isLoading && (
        <div className="absolute top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center">
          <Loader2 className="size-1/12 animate-spin" />
        </div>
      )}
    </>
  );
}
