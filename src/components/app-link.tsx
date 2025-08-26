import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function AppLink({
  href,
  children,
  className,
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-primary hover:bg-primary/80 rounded-full px-5 py-2 text-black backdrop-blur-lg lg:px-7 lg:py-3",
        className,
      )}
    >
      {children}
    </Link>
  );
}
