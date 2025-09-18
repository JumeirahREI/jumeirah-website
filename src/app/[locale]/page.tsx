import AboutUsCard from "@/app/[locale]/components/sections/about-us-card.section";
import ExploreOutProjectsSection from "@/app/[locale]/components/sections/explore-our-projects.section";
import OurServicesSection from "@/app/[locale]/components/sections/our-services.section";
import { AnimatedGroup } from "@/components/animated-group";
import AppLink from "@/components/app-link";
import { TextEffect } from "@/components/text-effect";
import GlassCard from "@/components/ui/glass-card";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { luxuryPresets } from "@/lib/luxury-presets";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");

  return (
    <div className="space-sections overflow-hidden">
      <header className="relative z-10">
        <div className="container grid grid-rows-2 pt-52 pb-14 md:pt-36 lg:grid-cols-3 lg:pt-20 xl:pt-24">
          <div className="z-30 col-span-2 row-span-2 space-y-2 2xl:space-y-5 rtl:space-y-8">
            <TextEffect
              as="h1"
              per="word"
              delay={0.2}
              speedSegment={0.25}
              variants={luxuryPresets.hero}
              className="text-foreground drop-shadow-background/70 first-letter:text-primary md:drop-shadow-background/20 text-center font-serif text-3xl leading-relaxed drop-shadow-xl max-md:mb-6 md:text-start md:text-4xl lg:text-4xl lg:leading-tight xl:text-6xl rtl:leading-tight [&>span:nth-child(2)]:block"
            >
              <span className="text-7xl font-bold md:text-7xl lg:text-7xl xl:text-[7rem]">
                {t("jumeirah-hero")}
              </span>{" "}
              {ct("rei")}
              <span className="text-primary">.</span>
            </TextEffect>
            <AnimatedGroup
              preset="slide"
              className="max-md:mb-4"
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 0.4,
                    },
                  },
                },
              }}
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
              preset="slide"
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 0.6,
                    },
                  },
                },
              }}
              className="z-20 mt-4 flex items-center justify-center gap-4 text-xs font-semibold md:mt-6 md:justify-start md:text-sm lg:ms-2.5 lg:text-sm xl:text-base"
              childrenClassName="rounded-full backdrop-blur-lg"
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
      <div className="from-background/0 to-background via-background md:via-background/50 absolute start-0 bottom-0 -z-20 h-2/3 w-full translate-y-2/5 bg-gradient-to-b md:translate-y-2/6 lg:translate-y-2/5 xl:translate-y-3/5" />
      <GridBackgroundEffect className="absolute start-0 bottom-0 -z-10 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2" />
    </>
  );
}
