import GlassCard from "@/components/ui/glass-card";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import JumeirahLogoType from "../../../public/images/logo.png";

const blueGradientStyles = {
  en: {
    background:
      "linear-gradient(56deg, rgba(0, 0, 0, 0.00) 37.58%, #4C5E6C 116.39%)",
  },
  ar: {
    background:
      "linear-gradient(304deg, rgba(0, 0, 0, 0.00) 37.58%, #4C5E6C 116.39%)",
  },
};

const blackGradientStyles = {
  en: {
    background:
      "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 7.03%, rgba(0, 0, 0, 0.89) 114.4%)",
  },
  ar: {
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 7.03%, rgba(0, 0, 0, 0.89) 114.4%)",
  },
};

const bottomGradientStyles = {
  en: {
    background:
      "linear-gradient(180deg, rgba(0, 1, 1, 0.00) 6.56%, #000101 67.2%)",
  },
  ar: {
    background:
      "linear-gradient(180deg, rgba(0, 1, 1, 0.00) 6.56%, #000101 67.2%)",
  },
};

export default function Home() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");
  const locale = useLocale();

  return (
    <div className="relative min-h-[120svh] overflow-hidden">
      <main className="container mx-auto grid grid-rows-2 pt-36 md:pt-72 lg:grid-cols-3">
        <div className="col-span-2 row-span-2">
          <Image
            src={JumeirahLogoType}
            alt={ct("jumeirah")}
            className="w-xs md:w-96 lg:w-lg xl:w-xl"
          />
          <h2 className="my-2 ps-2.5 font-serif text-3xl text-gray-200 md:text-4xl lg:text-5xl xl:text-6xl">
            {ct("rei")}
            <span className="text-primary">.</span>
          </h2>
          <GlassCard className="ms-2.5 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <p className="leading-6 font-medium text-white/80 md:text-lg md:leading-7 xl:text-xl xl:leading-8">
              {t("hero-description")} <span className="text-primary">.</span>
            </p>
          </GlassCard>
        </div>
      </main>
      <GridBackgroundEffect
        className={`absolute start-0 top-2/5 -z-10 ${locale === "ar" ? "translate-x-1/2" : "-translate-x-1/2"} h-full scale-200 md:scale-125 lg:scale-100`}
      />
      <div
        className="absolute start-0 top-0 -z-20 h-full w-4/6"
        style={blackGradientStyles[locale]}
      />
      <div
        className="absolute start-0 bottom-0 -z-20 h-1/3 w-full"
        style={bottomGradientStyles[locale]}
      />
      <div
        className="absolute -end-32 top-0 -z-20 h-full w-[150svw] md:w-full"
        style={blueGradientStyles[locale]}
      />
    </div>
  );
}
