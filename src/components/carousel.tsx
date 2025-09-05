"use client";

import { cn } from "@/lib/utils";
import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useBreakpoint } from "../hooks/use-breakpoint";

type CarouselHandle = {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  currentIndex: number;
};

type CarouselProps = {
  children: React.ReactNode[];
  swipeDisabledAt?: "sm" | "md" | "lg" | "xl";
  loop?: boolean;
  center?: boolean;
  className?: string;
};

const itemsPerBp = { sm: 1.2, md: 2, lg: 3, xl: 4 };

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  (
    { children, swipeDisabledAt, loop = false, center = false, className },
    ref,
  ) => {
    const breakpoint = useBreakpoint();
    const [itemsPerView, setItemsPerView] = useState(1);
    const [isCarousel, setIsCarousel] = useState(true);
    const [current, setCurrent] = useState(0);

    const total = children.length;
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    // update itemsPerView on breakpoint change
    useEffect(() => {
      if (breakpoint === "ssr") return;
      const perView = itemsPerBp[breakpoint] ?? 1;
      setItemsPerView(perView);

      const disabled =
        (swipeDisabledAt && breakpoint === swipeDisabledAt) || total <= perView;

      setIsCarousel(!disabled);
      setCurrent(0);
      animate(x, 0, { duration: 0 }); // reset position on layout change
    }, [breakpoint, swipeDisabledAt, total, x]);

    // Measure actual item width and track gap to compute precise step size
    const getMetrics = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const trackEl = trackRef.current as HTMLDivElement | null;
      const firstItem = trackEl?.firstElementChild as HTMLElement | null;
      const styles = trackEl ? getComputedStyle(trackEl) : null;
      const gap = styles ? parseFloat(styles.gap || "0") : 0;
      const itemWidth =
        firstItem?.offsetWidth ??
        (itemsPerView > 0 ? containerWidth / itemsPerView : 0);
      const step = itemWidth + gap; // distance between slide starts
      const totalTrackWidth = itemWidth * total + gap * Math.max(0, total - 1);
      return { containerWidth, itemWidth, gap, step, totalTrackWidth };
    };

    const slideTo = (index: number) => {
      const { containerWidth, itemWidth, step, totalTrackWidth } = getMetrics();
      if (!containerWidth || !itemWidth) return;

      let targetIndex = index;

      if (loop) {
        if (index < 0) targetIndex = total - 1;
        if (index > total - 1) targetIndex = 0;
      } else {
        targetIndex = Math.max(0, Math.min(index, total - 1));
      }

      let targetX: number;
      if (center && itemsPerView === 1) {
        // Center the item accounting for actual item width
        const offset = (containerWidth - itemWidth) / 2;
        targetX = -(targetIndex * step) + offset;

        // clamp so you can't overscroll into blank space
        const maxLeft = 0;
        const maxRight = -(totalTrackWidth - containerWidth);
        targetX = Math.min(maxLeft, Math.max(targetX, maxRight));
      } else {
        // standard left-aligned, still account for gap when stepping
        targetX = -targetIndex * step;
        if (!loop) {
          const maxRight = -(totalTrackWidth - containerWidth);
          targetX = Math.max(targetX, maxRight);
        }
      }

      animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
      setCurrent(targetIndex);
    };

    const next = () => slideTo(current + 1);
    const prev = () => slideTo(current - 1);

    useImperativeHandle(ref, () => ({
      next,
      prev,
      goTo: slideTo,
      get currentIndex() {
        return current;
      },
    }));

    // keyboard support
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (!isCarousel) return;
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [isCarousel, next, prev]);

    if (!isCarousel) {
      return (
        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            className,
          )}
          role="region"
          aria-roledescription="carousel"
        >
          {children}
        </div>
      );
    }

    return (
      <div
        className={cn("relative overflow-hidden", className)}
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Content carousel"
      >
        <motion.div
          className="flex justify-around gap-4"
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.05}
          onDragEnd={(_, info) => {
            const { step } = getMetrics();
            const delta = info.offset.x;
            let newIndex = current;
            const velocity = info.velocity.x;
            const threshold = Math.max(40, step / 3);
            if (delta < -threshold || velocity < -500) newIndex = current + 1;
            else if (delta > threshold || velocity > 500)
              newIndex = current - 1;
            slideTo(newIndex);
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${total}`}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    );
  },
);

Carousel.displayName = "Carousel";
export default Carousel;
export type { CarouselHandle };
