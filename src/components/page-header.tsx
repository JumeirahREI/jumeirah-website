import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subTitle: string;
  className?: string;
  children: React.ReactNode;
};

export default function PageHeader({
  title,
  subTitle,
  className,
  children,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "from-background to-background/0 relative z-20 overflow-x-clip bg-linear-to-t from-40% to-80% text-center",
        className,
      )}
    >
      <div className="container pt-28 pb-32 md:pb-40 lg:pt-40 lg:pb-60">
        <h1 className="first-letter:text-primary mb-2 text-[2.7rem] md:mb-1 md:text-[4rem] lg:text-[5rem]">
          {title}
        </h1>
        <p className="mx-auto mb-10 font-light opacity-70 max-md:px-2 md:mb-14 md:text-xl lg:text-2xl xl:w-[58rem]">
          {subTitle}
        </p>
        {children}
      </div>
      <GridBackgroundEffect className="absolute bottom-0 left-1/2 -z-10 container -translate-x-1/2 translate-y-2/3" />
    </header>
  );
}
