import villaImage from "@/../public/images/villa-image.webp";
import missionIcon from "@/../public/svg/mission-icon.svg";
import targetIcon from "@/../public/svg/target-icon.svg";
import { AnimatedGroup } from "@/components/animated-group";
import AppLink from "@/components/app-link";
import GotoIcon from "@/components/goto-icon";
import SectionWrapper from "@/components/section-wrapper";
import { TextEffect } from "@/components/text-effect";
import Card from "@/components/ui/card";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { transitionVariants } from "@/lib/transitions";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUsCard() {
  const t = useTranslations("AboutUsCard");
  const ct = useTranslations("Common");

  return (
    <SectionWrapper
      className="relative mx-auto mb-6 max-md:container max-md:px-4 lg:mb-36"
      enableAnimation
    >
      <GridBackgroundEffect className="!h-ull absolute start-1/2 top-0 container -translate-x-1/2 rotate-180 object-contain object-top opacity-90 rtl:translate-x-1/2" />
      <Card className="border-2 border-[#7A7A7A]/60">
        <div className="mx-auto grid grid-flow-dense gap-8 md:container md:grid-cols-2 xl:grid-cols-5 xl:gap-12 xl:gap-x-28">
          <div className="xl:col-span-3">
            <TextEffect
              className="first-letter-primary text-[1.4rem] leading-tight md:text-[1.6rem] lg:mb-5 lg:text-4xl xl:text-5xl"
              preset="cascade"
              as="h2"
              inherit
            >
              {t("title")}
            </TextEffect>
            <TextEffect
              className="mt-2 text-sm font-light text-[#DFDFDF] md:mt-5 md:text-lg lg:text-xl xl:text-[1.7rem]"
              preset="cascade"
              as="p"
              inherit
            >
              {t("description")}
            </TextEffect>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.8,
                  },
                },
              },
              ...transitionVariants,
            }}
            inherit
            className="md:col-start-1 md:row-start-2 xl:col-span-3"
          >
            <div className="relative overflow-hidden rounded-full">
              <div>
                <Image
                  alt="villa-image"
                  src={villaImage}
                  placeholder="blur"
                  className="w-full object-cover md:h-32 lg:h-fit"
                />
                <div className="absolute top-0 right-0 left-0 size-full bg-linear-to-tr from-[#1A1A1A] to-[#1A1A1A]/0 rtl:bg-linear-to-tl" />
              </div>
            </div>
            <AnimatedGroup
              variants={transitionVariants}
              inherit
              className="z-50 mt-4 flex items-center justify-center gap-2"
            >
              <GotoIcon alt="about-us" className="lg:max-xl:size-12" />
              <AppLink
                className="z-10 py-1.5 text-xs font-bold lg:px-5 lg:py-2 lg:text-base xl:text-xl"
                href="/about"
              >
                {ct("about-us")}
              </AppLink>
            </AnimatedGroup>
          </AnimatedGroup>
          <section className="xl:col-span-2">
            <AnimatedGroup
              variants={transitionVariants}
              inherit
              className="flex items-center gap-5 md:mb-5 xl:mt-5 xl:mb-8 xl:gap-7"
            >
              <Image
                src={targetIcon}
                alt="target-icon"
                className="size-6 lg:size-8 xl:size-10"
              />
              <TextEffect
                preset="cascade"
                as="h3"
                inherit
                className="first-letter-primary text-[1.4rem] md:text-[1.6rem] lg:text-4xl xl:text-5xl"
              >
                {t("our-vision")}
              </TextEffect>
            </AnimatedGroup>
            <TextEffect
              preset="cascade"
              as="p"
              delay={0.4}
              inherit
              className="mt-2 text-sm font-light text-[#9C9C9C] md:text-lg lg:text-xl xl:text-[1.7rem]"
            >
              {t("our-vision-subtext")}
            </TextEffect>
          </section>
          <section className="xl:col-span-2">
            <AnimatedGroup
              variants={transitionVariants}
              inherit
              className="flex items-center gap-5 md:mb-5 xl:mt-5 xl:mb-8 xl:gap-7"
            >
              <Image
                src={missionIcon}
                alt="target-icon"
                className="size-6 md:size-8 lg:size-9 xl:size-11"
              />
              <TextEffect
                preset="cascade"
                as="h3"
                inherit
                className="first-letter-primary text-[1.4rem] md:text-[1.6rem] lg:text-4xl xl:text-5xl"
              >
                {t("our-message")}
              </TextEffect>
            </AnimatedGroup>
            <TextEffect
              preset="cascade"
              as="p"
              delay={0.4}
              inherit
              className="mt-2 text-sm font-light text-[#9C9C9C] md:text-lg lg:text-xl xl:text-[1.7rem]"
            >
              {t("our-message-subtext")}
            </TextEffect>
          </section>
        </div>
      </Card>
    </SectionWrapper>
  );
}
