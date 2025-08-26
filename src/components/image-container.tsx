import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type ImageContainerProps = {
  className?: string;
  containerTag?: React.ElementType;
  imageClassName?: string;
  src: StaticImageData;
  alt: string;
} & PropsWithChildren;

export default function ImageContainer({
  className,
  containerTag: Tag = "div",
  imageClassName,
  src,
  alt,
  children,
}: ImageContainerProps) {
  return (
    <Tag className={cn("relative overflow-hidden rounded-[3.5rem]", className)}>
      <Image
        src={src}
        alt={alt}
        className={cn("-z-10 object-cover", imageClassName)}
        placeholder="blur"
        fill
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900/0 to-zinc-900" />
      {children}
    </Tag>
  );
}
