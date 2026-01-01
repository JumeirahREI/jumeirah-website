"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { luxuryPresets } from "@/lib/luxury-presets";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { m, Variants } from "motion/react";
import { useLocale } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

type AppLocale = "en" | "ar";

interface LocaleSwitcherProps {
  locales?: { code: AppLocale | undefined; label: string }[];
  onSelect?: () => void;
  variant?: "desktop" | "mobile";
  className?: string;
  animated?: boolean;
  stagger?: number;
  isOpen?: boolean;
}

const DEFAULT_LOCALES = [
  { code: "en" as AppLocale, label: "English" },
  { code: "ar" as AppLocale, label: "العربية" },
] as const;

export function LocaleSwitcher({
  locales,
  onSelect,
  variant = "desktop",
  className,
  animated = true,
  stagger = 0.08,
  isOpen = true,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const available: { code: AppLocale | undefined; label: string }[] =
    locales && locales.length ? locales : [...DEFAULT_LOCALES];

  const container = luxuryPresets.cascade.container;
  const item = luxuryPresets.cascade.item;

  const listVariants: Variants = {
    hidden: container.hidden || { opacity: 0 },
    visible: {
      ...(container.visible as object),
      transition: {
        ...(container.visible?.transition as object),
        staggerChildren: stagger,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { ...(item.hidden as object), y: 8 },
    visible: {
      ...(item.visible as object),
      y: 0,
      transition: { ...(item.visible?.transition as object), duration: 0.4 },
    },
  };

  if (variant === "mobile") {
    return (
      <m.div
        className={cn("flex items-center gap-3", className)}
        variants={animated ? listVariants : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? (isOpen ? "visible" : "hidden") : undefined}
      >
        {available.map((loc) => {
          const isActive = loc.code === currentLocale;
          return (
            <m.div
              key={loc.label}
              variants={animated ? itemVariants : undefined}
            >
              <Link
                href={pathname}
                locale={loc.code}
                className={cn(
                  "rounded-full border border-white/15 px-7 py-2 text-sm transition-colors",
                  "bg-white/5 hover:bg-white/15",
                  isActive && "text-primary border-white/30 bg-white/20",
                )}
                onClick={(e) => {
                  onSelect?.();
                  if (isActive) {
                    e.preventDefault();
                  }
                }}
              >
                {loc.label}
              </Link>
            </m.div>
          );
        })}
      </m.div>
    );
  }

  return (
    <DesktopLocaleDropdown
      className={className}
      available={available}
      currentLocale={currentLocale}
      pathname={pathname}
      animated={animated}
      listVariants={listVariants}
      itemVariants={itemVariants}
    />
  );
}

function DesktopLocaleDropdown({
  className,
  available,
  currentLocale,
  pathname,
  animated,
  listVariants,
  itemVariants,
}: {
  className?: string;
  available: { code: AppLocale | undefined; label: string }[];
  currentLocale: string;
  pathname: string;
  animated: boolean;
  listVariants: Variants;
  itemVariants: Variants;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const onDocumentClick = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    if (!ref.current.contains(e.target as Node)) setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, [onDocumentClick]);

  const current =
    available.find((l) => l.code === currentLocale) || available[0];

  return (
    <div
      ref={ref}
      className={cn("pointer-events-auto relative h-full", className)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="lg:bg-glass aspect-square h-full cursor-pointer rounded-full border border-white/10 p-2.5 font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/20"
      >
        <GlobeIcon className="size-6" />
      </button>

      {open && (
        <m.div
          className="absolute right-0 z-[1000] mt-3 min-w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0F0F0F]/80 p-1 shadow-lg backdrop-blur"
          initial={animated ? { opacity: 0, y: 8 } : undefined}
          animate={animated ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <m.ul
            className="flex flex-col gap-1"
            variants={animated ? listVariants : undefined}
            initial={animated ? "hidden" : undefined}
            animate={animated ? "visible" : undefined}
          >
            {available.map((loc) => {
              const isActive = loc.code === currentLocale;
              return (
                <m.li
                  key={loc.label}
                  variants={animated ? itemVariants : undefined}
                >
                  <Link
                    href={pathname}
                    locale={loc.code}
                    scroll={false}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/90",
                      "hover:bg-white/5",
                      isActive && "text-primary !bg-white/10",
                    )}
                    onClick={(e) => {
                      setOpen(false);
                      if (isActive) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span className="size-1.5 rounded-full bg-white/40" />
                    {loc.label}
                  </Link>
                </m.li>
              );
            })}
          </m.ul>
        </m.div>
      )}
    </div>
  );
}
