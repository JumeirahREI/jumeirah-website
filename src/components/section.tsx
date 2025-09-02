import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  sectionLink?: () => React.ReactNode;
} & PropsWithChildren;

export default function Section({
  title,
  description,
  sectionLink,
  className,
  children,
}: SectionProps) {
  return (
    <section className="bg-background relative overflow-x-clip">
      <GridBackgroundEffect className="absolute start-1/2 top-0 !h-auto -translate-x-1/2 object-cover object-center opacity-70 lg:!w-full rtl:translate-x-1/2" />
      <div className="relative z-30 container px-2 py-5 lg:mb-5">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          {sectionLink?.()}
        </div>
        {description && (
          <p className="mt-2 text-sm font-light text-neutral-200/70 md:text-lg lg:mt-6 lg:text-[1.7rem]">
            {description}
          </p>
        )}
      </div>
      <div
        className={cn("relative z-30 container pt-3 pb-20 lg:pb-36", className)}
      >
        {children}
      </div>
    </section>
  );
}
