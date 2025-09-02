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
        alt=""
        className="shadow-primary/50 z-50 size-full rounded-full object-cover transition transition-discrete hover:brightness-110 hover:drop-shadow-[0_0_5px_#ffcb05] focus:brightness-110 focus:drop-shadow-[0_0_10px_#ffcb05]"
      />
    </div>
  );
}
