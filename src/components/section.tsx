import { AnimatedGroup } from "@/components/animated-group";
import SectionWrapper from "@/components/section-wrapper";
import { TextEffect } from "@/components/text-effect";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { transitionVariants } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  sectionLink?: () => React.ReactNode;
  enableAnimation?: boolean;
  imgClassName?: string;
} & PropsWithChildren;

export default function Section({
  title,
  description,
  sectionLink,
  className,
  enableAnimation = false,
  children,
  imgClassName,
}: SectionProps) {
  return (
    <SectionWrapper enableAnimation={enableAnimation}>
      <GridBackgroundEffect
        className={cn(
          "absolute start-1/2 top-0 !h-auto -translate-x-1/2 object-cover object-center opacity-70 lg:!w-full rtl:translate-x-1/2",
          imgClassName,
        )}
      />
      <div className="relative z-30 container px-2 py-5 lg:mb-5">
        <div className="flex items-center justify-between">
          <TextEffect
            preset="slide"
            as="h2"
            className="text-3xl md:text-4xl xl:text-5xl"
            inherit
          >
            {title}
          </TextEffect>
          {sectionLink && (
            <AnimatedGroup variants={transitionVariants} inherit>
              {sectionLink()}
            </AnimatedGroup>
          )}
        </div>
        {description && (
          <TextEffect
            preset="skew-fade"
            as="p"
            speedReveal={2}
            className="mt-2 text-sm font-light text-[#9C9C9C] md:text-lg lg:text-xl xl:mt-6 xl:text-[1.7rem]"
            inherit
          >
            {description}
          </TextEffect>
        )}
      </div>
      <div className={cn("relative z-30 container pt-3", className)}>
        {children}
      </div>
    </SectionWrapper>
  );
}
