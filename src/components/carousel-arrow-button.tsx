import CarouselArrowIcon from "@/components/icons/carousel-arrow-icon";
import CarouselBorderIcon from "@/components/icons/carousel-border-icon";
import { cn } from "@/lib/utils";

interface CarouselArrowButtonProps {
  onClick: () => void;
  isEnd?: boolean;
  className?: string;
}

export default function CarouselArrowButton({
  onClick,
  isEnd,
  className,
}: CarouselArrowButtonProps) {
  return (
    <div
      className={cn(
        "rtl:rotate-y-180",
        isEnd && "rotate-y-180 rtl:rotate-y-0",
        className,
      )}
    >
      <button
        className="relative cursor-pointer rounded-full"
        onClick={onClick}
      >
        <CarouselArrowIcon
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          height={47}
          width={34}
        />
        <CarouselBorderIcon height={88} width={88} />
      </button>
    </div>
  );
}
