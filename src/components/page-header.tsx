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
      <div className="container pt-44 md:pt-72">
        <h1 className="text-[5rem]">{title}</h1>
        <h2 className="mx-auto text-2xl font-light opacity-70 xl:w-[58rem]">
          {subTitle}
        </h2>
        {children}
      </div>
    </header>
  );
}
