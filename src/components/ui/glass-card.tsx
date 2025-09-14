import MouseGlowTracker from "@/components/mouse-glow-tracker";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type GlassCardProps = {
  className?: string;
  disableGlow?: boolean;
} & PropsWithChildren;

export default function GlassCard({
  children,
  className,
  disableGlow,
}: GlassCardProps) {
  return disableGlow ? (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-black/50 px-5 py-4 backdrop-blur-xl lg:rounded-4xl lg:px-6 lg:py-5",
        className,
      )}
    >
      {children}
    </div>
  ) : (
    <MouseGlowTracker
      className={cn(
        "rounded-3xl border border-white/40 bg-black/50 px-5 py-4 backdrop-blur-xl lg:rounded-4xl lg:px-6 lg:py-5",
        className,
      )}
    >
      {children}
    </MouseGlowTracker>
  );
}
