import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type GlassCardProps = {
  className?: string;
} & PropsWithChildren;

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-black/50 px-5 py-4 backdrop-blur-xl lg:rounded-4xl lg:px-6 lg:py-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
