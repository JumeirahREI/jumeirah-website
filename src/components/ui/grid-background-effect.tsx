import gridBackgroundEffect from "@/../public/svg/grid-background-effect.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GridBackgroundEffect({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src={gridBackgroundEffect}
      alt=""
      aria-hidden="true"
      className={cn(
        "pointer-events-none w-96 scale-200 opacity-80 md:w-[40rem] md:scale-150 lg:w-[75rem] lg:scale-100",
        className,
      )}
    />
  );
}
