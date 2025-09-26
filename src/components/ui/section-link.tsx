import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionLinkProps = {
  href: string;
  className?: string;
} & PropsWithChildren;

export default function SectionLink({
  href,
  className,
  children,
}: SectionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "border-gradient-to-e rtl:border-gradient-to-s rounded-lg bg-linear-to-l from-zinc-900/0 to-zinc-900 px-4 pt-2 pb-1.5 text-center font-serif text-[0.625rem] whitespace-nowrap transition before:transition-colors hover:bg-neutral-500/30 hover:ring hover:ring-white/20 active:scale-95 active:opacity-50 md:rounded-xl md:text-xs lg:px-5 lg:pt-2.5 lg:pb-2 lg:text-base xl:rounded-2xl xl:text-xl rtl:bg-linear-to-r",
        className,
      )}
    >
      {children}
    </Link>
  );
}
