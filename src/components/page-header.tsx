import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string | React.ReactNode;
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
        "from-background to-background/0 via-background/90 bg-gradient-to-t text-center",
        className,
      )}
    >
      <div className="container pt-44 pb-36 md:pt-72 md:pb-40">
        <h1 className="text-[5rem]">{title}</h1>
        <h2 className="mx-auto text-2xl font-light opacity-70 xl:w-[58rem]">
          {subTitle}
        </h2>
        {children}
      </div>
      <HeroBackground />
    </header>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="from-background/0 to-background/60 absolute start-0 top-0 -z-20 h-full w-4/6 bg-gradient-to-l rtl:bg-gradient-to-r" />
      <div className="absolute -end-32 top-0 -z-20 h-full w-[150svw] bg-gradient-to-r from-black/0 to-slate-600/50 md:w-full rtl:bg-gradient-to-l" />
      <div className="from-background/0 to-background via-background absolute start-0 bottom-0 -z-20 h-2/3 w-full translate-y-2/5 bg-gradient-to-b" />
    </>
  );
}
