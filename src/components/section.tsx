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
    <section className="relative">
      <GridBackgroundEffect className="absolute start-0 top-0 !size-full object-cover" />
      <div className="container px-2 py-5">
        <div className="flex items-center justify-between lg:mb-3">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h3>
          {sectionLink && sectionLink()}
        </div>
        {description && (
          <p className="mt-2 text-sm font-medium text-neutral-200/70 md:text-lg lg:text-xl">
            {description}
          </p>
        )}
      </div>
      <div className={cn("container py-3", className)}>{children}</div>
    </section>
  );
}
