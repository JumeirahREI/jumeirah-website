import { cn } from "@/lib/utils";
import Image from "next/image";
import gotoIcon from "../../public/svg/go-to-icon.svg";
export default function GotoIcon({
  alt,
  className,
}: {
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-primary relative z-[10] flex cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/25 p-1 backdrop-blur-xl lg:size-14 lg:p-2",
        className,
      )}
    >
      <Image
        src={gotoIcon}
        alt={alt}
        className="shadow-primary/50 z-50 size-full rounded-full object-cover transition-shadow transition-discrete hover:shadow-md hover:brightness-110 focus:shadow-md focus:brightness-110"
      />
    </div>
  );
}
