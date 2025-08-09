import { cn } from "@/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";

type ImageContainerProps = {
  className?: string;
  src: any;
  alt: string;
} & PropsWithChildren;

export default function ImageContainer({
  className,
  src,
  alt,
  children,
}: ImageContainerProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[4rem]", className)}>
      <Image src={src} alt={alt} className="-z-10" placeholder="blur" fill />
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-zinc-900/0 to-zinc-900" />
      {children}
    </div>
  );
}
