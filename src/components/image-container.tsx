import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type ImageContainerProps = {
  className?: string;
  containerTag?: React.ElementType;
  imageClassName?: string;
  src: StaticImageData;
} & PropsWithChildren;

export default function ImageContainer({
  className,
  containerTag: Tag = "div",
  imageClassName,
  src,
  children,
}: ImageContainerProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-4xl md:rounded-[3.5rem]",
        className,
      )}
    >
      <figure>
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          className={cn(
            "top-0 right-0 bottom-0 left-0 -z-10 object-cover",
            imageClassName,
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          // placeholder="blur"
          fill
        />
        <div className="absolute inset-0 -z-10 bg-linear-[208deg] from-zinc-900/0 to-zinc-900 rtl:bg-linear-[152deg]" />
        <figcaption>{children}</figcaption>
      </figure>
    </Tag>
  );
}
