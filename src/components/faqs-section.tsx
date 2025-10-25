"use client";

import faqImage from "@/../public/images/faqs-image.webp";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, LayoutGroup, m, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useState } from "react";

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("FAQsSection");
  const ct = useTranslations("Common");

  const questions = [
    {
      question: t("q1.question"),
      answer: t("q1.answer"),
      image: faqImage,
    },
    {
      question: t("q2.question"),
      answer: t("q2.answer"),
      image: faqImage,
    },
    {
      question: t("q3.question"),
      answer: t("q3.answer"),
      image: faqImage,
    },
    {
      question: t("q4.question"),
      answer: t("q4.answer"),
      image: faqImage,
    },
    {
      question: t("q5.question"),
      answer: t("q5.answer"),
      image: faqImage,
    },
  ];

  return (
    <Section
      title={t("title")}
      sectionLink={() => (
        <SectionLink className="hidden md:block" href="/projects">
          {ct.rich("what-we-offer", {
            span: (s) => <span className="text-primary">{s}</span>,
          })}
        </SectionLink>
      )}
    >
      <ul className="relative space-y-8">
        {questions.map((q, i) => (
          <FAQCard
            key={i}
            {...q}
            index={i}
            onClick={() => setActiveIndex(i === activeIndex ? null : i)}
            isActive={activeIndex === i}
          />
        ))}
      </ul>
    </Section>
  );
}

const faqCardVariants: Variants = {
  inactive: {
    width: "var(--max-width-inactive)",
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "linear",
    },
  },
  active: {
    width: "var(--max-width-active)",
    transition: {
      type: "tween",
      duration: 0.1,
      ease: "linear",
    },
  },
};

function FAQCard({
  question,
  answer,
  image,
  index,
  onClick,
  isActive,
}: {
  question: string;
  answer: string;
  image: StaticImageData;
  index: number;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <li className="flex gap-5 text-sm md:text-lg lg:text-xl">
      <LayoutGroup>
        <m.div
          layout="position"
          variants={faqCardVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          className={cn(
            "flex w-full cursor-pointer gap-6 rounded-2xl border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-xl duration-300 ease-in-out [--max-width-active:100%] [--max-width-inactive:100%] md:gap-7 md:px-6 md:py-4 lg:rounded-[2.5rem] lg:px-8 lg:py-6 lg:[--max-width-active:90%] lg:[--max-width-inactive:66%] 2xl:[--max-width-inactive:50%]",
            // isActive && "lg:flex-grow-40",
          )}
          onClick={onClick}
        >
          <span className="text-primary text-xl font-semibold md:text-lg lg:text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="my-auto font-bold">{question}</p>
            <AnimatePresence initial={false}>
              {isActive && (
                <m.div
                  layout
                  initial={{
                    opacity: 0,
                    maxHeight: 0,
                  }}
                  animate={{
                    opacity: 1,
                    maxHeight: 300,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  exit={{
                    opacity: 0,
                    maxHeight: 0,
                  }}
                  className="max-w-[40rem] overflow-hidden"
                >
                  <p className="pt-8 pb-4 text-[#9C9C9C] lg:text-xl">
                    {answer}
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </m.div>
        <m.div layout className="hidden flex-grow-1 lg:block">
          <button
            onClick={onClick}
            className={cn(
              "text-primary aspect-square cursor-pointer rounded-full border border-white/30 bg-white/5 p-6 text-3xl backdrop-blur-xl transition-colors duration-300",
              isActive && "bg-primary text-black",
            )}
          >
            {isActive ? <Minus /> : <Plus />}
          </button>
        </m.div>
      </LayoutGroup>
    </li>
  );
}
