import { cn } from "@/lib/utils";
import Link from "next/link";
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
        "rounded-xl border-2 border-neutral-500/60 bg-gradient-to-l from-zinc-900/0 to-zinc-900 px-4 pt-2 pb-1.5 font-serif text-[0.625rem] md:text-xs rtl:bg-gradient-to-l",
        className,
      )}
    >
      {children}
    </Link>
  );
}
