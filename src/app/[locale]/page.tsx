import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { useTranslations } from "next-intl";
import Image from "next/image";
import JumeirahLogoType from "../../../public/images/logo.png";

const blueGradientStyles = {
  background:
    "linear-gradient(56deg, rgba(0, 0, 0, 0.00) 37.58%, #4C5E6C 116.39%)",
};

const blackGradientStyles = {
  background:
    "linear-gradient(268deg, rgba(0, 0, 0, 0.00) 7.03%, rgba(0, 0, 0, 0.89) 114.4%)",
};

const bottomGradientStyles = {
  background:
    "linear-gradient(180deg, rgba(0, 1, 1, 0.00) 6.56%, #000101 67.2%)",
};

export default function Home() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");
  return (
    <div className="relative min-h-[120svh] overflow-x-hidden">
      <main className="container mx-auto grid grid-cols-2 grid-rows-2 pt-72">
        <div className="row-span-2">
          <Image src={JumeirahLogoType} alt={ct("jumeirah")} className="w-xl" />
        </div>
      </main>
      <GridBackgroundEffect className="absolute start-0 top-2/5 z-20 -translate-x-1/2 md:h-full" />
      <div
        className="absolute start-0 top-0 -z-10 h-full w-4/6"
        style={blackGradientStyles}
      />
      <div
        className="absolute start-0 bottom-0 -z-10 h-1/3 w-full"
        style={bottomGradientStyles}
      />
      <div
        className="absolute -end-32 top-0 -z-10 h-full w-[150svw] md:w-full"
        style={blueGradientStyles}
      />
    </div>
  );
}
