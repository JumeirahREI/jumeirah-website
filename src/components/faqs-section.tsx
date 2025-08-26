"use client";

import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useState } from "react";
import faqImage from "../../public/images/faqs-image.png";

const question = {
  question: "Lorem ipsum dolor sit amet consectetur. Sagittis id",
  answer:
    "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices.  Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum elit velit.",
  image: faqImage,
};
const questions = [question, question, question];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("FAQsSection");
  const ct = useTranslations("Common");

  return (
    <Section
      title={t.rich("title", {
        span: (s) => <span className="text-primary">{s}</span>,
      })}
      sectionLink={() => (
        <SectionLink href="#">
          {ct.rich("what-we-create", {
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
    <li className="flex gap-5 md:text-lg lg:text-xl" onClick={onClick}>
      <motion.div
        layout="position"
        className={cn(
          "flex w-full cursor-pointer gap-6 rounded-4xl border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-xl duration-300 ease-in-out md:gap-7 md:px-6 md:py-4 lg:flex-grow-1 lg:rounded-[2.5rem] lg:px-8 lg:py-6 lg:transition-[flex-grow]",
          isActive && "lg:flex-grow-40",
        )}
      >
        <span className="text-primary pt-2 text-2xl font-semibold md:pt-0 md:text-lg lg:text-xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="font-bold">{question}</p>
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                initial={{
                  opacity: 0,
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  paddingTop: "2rem",
                  paddingBottom: "1rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                className="overflow-hidden text-neutral-200/70 lg:text-xl"
              >
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="hidden flex-grow-1 lg:block">
        <button
          className={cn(
            "text-primary cursor-pointer rounded-full border border-white/30 bg-white/5 px-7 py-4 text-3xl backdrop-blur-xl",
            isActive && "bg-primary text-black",
          )}
        >
          {isActive ? "-" : "+"}
        </button>
      </div>
    </li>
  );
}
