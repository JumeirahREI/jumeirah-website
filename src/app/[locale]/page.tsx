import OurServicesSection from "@/app/[locale]/_sections/our-services.section";
import GlassCard from "@/components/ui/glass-card";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import JumeirahLogoType from "../../../public/svg/jumeirah-hero-type-logo.svg";

export default function Home() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");

  return (
    <div className="overflow-hidden">
      <main>
        <section className="relative">
          <div className="container grid grid-rows-2 pt-44 pb-36 md:pt-72 md:pb-40 lg:grid-cols-3">
            <div className="col-span-2 row-span-2 space-y-2">
              <h1 className="sr-only">{ct("jumeirah")}</h1>
              <Image
                src={JumeirahLogoType}
                alt={ct("jumeirah")}
                className="w-3xs md:w-96 lg:w-lg xl:w-xl"
                priority
              />
              <h2 className="ps-2.5 font-serif text-2xl text-gray-200 md:text-4xl lg:text-5xl xl:text-6xl">
                {ct("rei")}
                <span className="text-primary">.</span>
              </h2>
              <GlassCard className="ms-2.5 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <p className="leading-6 font-medium text-white/80 md:text-lg md:leading-7 xl:text-xl xl:leading-8">
                  {t("hero-description")}{" "}
                  <span className="text-primary">.</span>
                </p>
              </GlassCard>
              <div className="ms-2.5 mt-4 flex items-center gap-4 text-xs font-semibold md:mt-6 md:text-sm lg:text-base">
                <Link
                  href="#"
                  className="bg-glass rounded-full border border-white/30 bg-white/[3%] px-7 py-3 backdrop-blur-lg hover:bg-white/20"
                >
                  {t("our-projects")}
                </Link>
                <Link
                  href="#"
                  className="bg-primary hover:bg-primary/80 rounded-full px-7 py-3 text-black backdrop-blur-lg"
                >
                  {ct("contact-us")}
                </Link>
              </div>
            </div>
            <HeroBackground />
          </div>
        </section>
        <OurServicesSection />
      </main>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="from-background/0 to-background/80 absolute start-0 top-0 -z-20 h-full w-4/6 bg-gradient-to-l rtl:bg-gradient-to-r" />
      <div className="absolute -end-32 top-0 -z-20 h-full w-[150svw] bg-gradient-to-r from-black/0 to-slate-600/50 md:w-full rtl:bg-gradient-to-l" />
      <div className="from-background/0 to-background via-background absolute start-0 bottom-0 -z-20 h-2/3 w-full translate-y-2/5 bg-gradient-to-b" />
      <GridBackgroundEffect className="absolute start-0 bottom-0 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2" />
    </>
  );
}
