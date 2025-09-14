import AboutUsCard from "@/app/[locale]/components/sections/about-us-card.section";
import ExploreOutProjectsSection from "@/app/[locale]/components/sections/explore-our-projects.section";
import OurServicesSection from "@/app/[locale]/components/sections/our-services.section";
import { AnimatedGroup } from "@/components/animated-group";
import AppLink from "@/components/app-link";
import { TextEffect } from "@/components/text-effect";
import GlassCard from "@/components/ui/glass-card";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { transitionVariants } from "@/lib/transition";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");

  return (
    <div className="space-sections overflow-hidden">
      <header className="relative">
        <div className="container grid grid-rows-2 pt-40 pb-16 md:pt-28 md:pb-40 lg:grid-cols-3 lg:pt-24">
          <div className="z-30 col-span-2 row-span-2 space-y-2 2xl:space-y-5 rtl:space-y-8">
            <AnimatedGroup
              className="max-md:mb-10"
              variants={transitionVariants}
            >
              <h1 className="text-foreground drop-shadow-background/60 md:drop-shadow-background/20 text-center text-7xl leading-tight font-bold drop-shadow-xl md:text-start md:text-7xl lg:text-8xl xl:text-[7rem] rtl:leading-tight">
                {t.rich("jumeirah-hero", {
                  span: (s) => <span className="text-primary">{s}</span>,
                })}
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  delay={0.25}
                  className="md:text-4x block font-serif text-3xl lg:text-5xl xl:text-6xl"
                >
                  {ct("rei")}
                  <span className="text-primary">.</span>
                </TextEffect>
              </h1>
            </AnimatedGroup>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.8,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="max-md:mb-10"
              childrenClassName="backdrop-blur-xl w-fit rounded-3xl lg:rounded-4xl"
            >
              <GlassCard className="max-w-md backdrop-blur-none md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <p className="text-center leading-6 font-medium text-white/80 md:text-start md:text-lg md:leading-7 xl:text-xl xl:leading-8">
                  {t("hero-description")}
                  <span className="text-primary">.</span>
                </p>
              </GlassCard>
            </AnimatedGroup>
            <AnimatedGroup
              className="ms-2.5 mt-4 flex items-center justify-center gap-4 text-xs font-semibold md:mt-6 md:justify-start md:text-sm lg:text-base"
              childrenClassName="rounded-full z-[-1]"
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 12, backdropFilter: "blur(0px)" },
                  visible: { opacity: 1, y: 0, backdropFilter: "blur(24px)" },
                },
              }}
            >
              <AppLink href="/projects" variant="outline">
                {t("our-projects")}
              </AppLink>
              <AppLink href="/contact">{ct("contact-us")}</AppLink>
            </AnimatedGroup>
          </div>
          <HeroBackground />
        </div>
      </header>
      <main className="space-sections">
        <OurServicesSection />
        <AboutUsCard />
        <ExploreOutProjectsSection />
      </main>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="from-background/0 to-background via-background absolute start-0 bottom-0 -z-20 h-2/3 w-full translate-y-2/5 bg-gradient-to-b" />
      <GridBackgroundEffect className="absolute start-0 bottom-0 z-20 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2" />
    </>
  );
}
