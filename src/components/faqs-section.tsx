"use client";

import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { faqKeys } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { LayoutGroup, m, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("FAQsSection");
  const ct = useTranslations("Common");

  const questions = faqKeys.map((key) => ({
    question: t(`${key}.question`),
    answer: t(`${key}.answer`),
  }));

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
      <ul className="relative space-y-4 lg:space-y-8">
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

const faqAnswerVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
  },
  closed: {
    height: 0,
    opacity: 0,
  },
};

function FAQCard({
  question,
  answer,
  index,
  onClick,
  isActive,
}: {
  question: string;
  answer: string;
  index: number;
  onClick: () => void;
  isActive: boolean;
}) {
  const answerId = `faq-answer-${index}`;

  return (
    <li className="flex gap-5 text-sm md:text-lg">
      <LayoutGroup>
        <m.div
          layout="position"
          variants={faqCardVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          className="flex w-full gap-6 rounded-2xl border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-xl duration-300 ease-in-out [--max-width-active:100%] [--max-width-inactive:100%] md:gap-7 md:px-6 md:py-4 lg:rounded-[2.5rem] lg:px-8 lg:py-6 lg:[--max-width-active:90%] lg:[--max-width-inactive:66%]"
        >
          <span className="text-primary font-semibold md:text-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-full">
            {/* Width/negative-margin values here must stay in sync with the
                outer card's own padding (px-4 py-2 / md:px-6 md:py-4 /
                lg:px-8 lg:py-6 on the m.div above) — changing one without
                the other silently breaks the click/tap hit-area fix. */}
            <button
              type="button"
              onClick={onClick}
              aria-expanded={isActive}
              aria-controls={answerId}
              className="-my-2 block w-[calc(100%_+_1rem)] cursor-pointer border-0 bg-transparent py-2 text-start font-bold md:-my-4 md:w-[calc(100%_+_1.5rem)] md:py-4 lg:-my-6 lg:w-[calc(100%_+_2rem)] lg:py-6"
            >
              {question}
            </button>
            <m.div
              id={answerId}
              layout
              initial={false}
              animate={isActive ? "open" : "closed"}
              variants={faqAnswerVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
              aria-hidden={!isActive}
              className="max-w-[40rem] overflow-hidden"
            >
              <p className="pt-4 pb-4 text-[#9C9C9C] lg:pt-8">{answer}</p>
            </m.div>
          </div>
        </m.div>
        <m.div layout className="hidden flex-grow-1 lg:block">
          <button
            type="button"
            onClick={onClick}
            aria-hidden="true"
            tabIndex={-1}
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
