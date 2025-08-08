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
      alt="Grid background effect"
      className={cn("opacity-80", className)}
      unoptimized
    />
  );
}
