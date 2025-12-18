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
        "from-background relative z-20 overflow-x-clip bg-linear-to-t from-40% to-[#00010100] to-80% text-center not-supports-[overflow:clip]:overflow-hidden",
        className,
      )}
    >
      <div className="container pt-28 pb-32 md:pb-40 lg:pt-40 lg:pb-60">
        <h1 className="first-letter-primary-or-clip mx-auto mb-2 w-fit from-[1ch] to-[1ch] text-[2.7rem] md:mb-1 md:text-[4rem]">
          {title}
        </h1>
        <p className="mx-auto mb-10 font-light opacity-70 max-md:px-2 md:mb-14 md:text-xl lg:max-w-[72ch]">
          {subTitle}
        </p>
        {children}
      </div>
      <GridBackgroundEffect className="absolute bottom-0 left-1/2 -z-10 container -translate-x-1/2 translate-y-2/3" />
    </header>
  );
}
