import { cn } from "@/lib/utils";
import Image from "next/image";
import gridBackgroundEffect from "../../../public/svg/grid-background-effect.svg";

export default function GridBackgroundEffect({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src={gridBackgroundEffect}
      alt=""
      className={cn(
        "w-96 scale-200 opacity-80 md:w-[40rem] md:scale-150 lg:w-[75rem] lg:scale-100",
        className,
      )}
      unoptimized
    />
  );
}
