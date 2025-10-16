import ArrowIcon from "@/components/icons/arrow-icon";
import CarouselBorderIcon from "@/components/icons/carousel-border-icon";
import { cn } from "@/lib/utils";

interface CarouselArrowButtonProps {
  onClick: () => void;
  isEnd?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function CarouselArrowButton({
  onClick,
  disabled,
  isEnd,
  className,
}: CarouselArrowButtonProps) {
  return (
    <div>
      <button
        className="group relative cursor-pointer rounded-full"
        onClick={onClick}
        disabled={disabled}
      >
        <ArrowIcon
          className={cn(
            "text-primary absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 group-disabled:text-[#606060]",
            "rtl:rotate-y-180",
            isEnd && "rotate-y-180 rtl:rotate-y-0",
            className,
          )}
          height={40}
          width={30}
        />
        <CarouselBorderIcon height={50} width={50} />
      </button>
    </div>
  );
}
