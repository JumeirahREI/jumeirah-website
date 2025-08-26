import AppLink from "@/components/app-link";
import GotoIcon from "@/components/goto-icon";
import GridBackgroundEffect from "@/components/ui/grid-background-effect";
import { useTranslations } from "next-intl";
import Image from "next/image";
import villaImage from "../../../../public/images/villa-image.png";
import missionIcon from "../../../../public/svg/mission-icon.svg";
import targetIcon from "../../../../public/svg/target-icon.svg";

export default function AboutUsCard() {
  const t = useTranslations("AboutUsCard");
  const ct = useTranslations("Common");

  return (
    <section className="relative mx-auto my-6 max-md:container max-md:px-4 lg:my-36">
      <GridBackgroundEffect className="absolute start-1/2 top-0 !h-full !w-full -translate-x-1/2 rotate-180 object-cover object-center opacity-80 rtl:translate-x-1/2" />
      <div className="rounded-4xl border-2 border-[#7A7A7A]/60 bg-gradient-to-t from-[#1A1A1A] to-[#1A1A1A]/0 px-4 py-6 md:rounded-[3.5rem] md:px-7 md:pt-10 md:pb-12 lg:px-14 lg:pt-14 lg:pb-16 xl:rounded-[6rem] rtl:bg-gradient-to-tl">
        <div className="mx-auto grid grid-flow-dense gap-8 md:container md:grid-cols-2 lg:grid-cols-5 lg:gap-12 lg:gap-x-28">
          <div className="lg:col-span-3">
            <h3 className="text-[1.4rem] leading-tight md:text-[1.6rem] lg:mb-5 lg:text-5xl">
              {t.rich("title", {
                span: (s) => <span className="text-primary">{s}</span>,
              })}
            </h3>
            <p className="mt-2 text-sm font-light md:text-lg lg:text-[1.7rem]">
              {t("description")}
            </p>
          </div>
          <div className="md:col-start-1 md:row-start-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-full">
              <Image
                alt="villa-image"
                src={villaImage}
                placeholder="blur"
                className="w-full object-cover md:h-32 lg:h-fit"
              />
              <div className="absolute top-0 right-0 left-0 size-full bg-gradient-to-tr from-[#1A1A1A] to-[#1A1A1A]/0 rtl:bg-gradient-to-tl" />
            </div>
            <div className="z-50 mt-4 flex items-center justify-center gap-2">
              <GotoIcon alt="about-us" />
              <AppLink
                className="py-1.5 text-sm font-bold lg:px-5 lg:py-2 lg:text-xl"
                href="#"
              >
                {ct("about-us")}
              </AppLink>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 md:mb-5 lg:mt-5 lg:mb-8 lg:gap-7">
              <Image
                src={targetIcon}
                alt="target-icon"
                className="size-6 lg:size-10"
              />
              <h4 className="text-[1.4rem] md:text-[1.6rem] lg:text-5xl">
                {t.rich("our-vision", {
                  span: (s) => <span className="text-primary">{s}</span>,
                })}
              </h4>
            </div>
            <p className="mt-2 text-sm font-light text-neutral-200/70 md:text-lg lg:text-[1.7rem]">
              {t("our-vision-subtext")}
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 md:mb-5 lg:mt-5 lg:mb-8 lg:gap-7">
              <Image
                src={missionIcon}
                alt="target-icon"
                className="size-6 md:size-8 lg:size-11"
              />
              <h4 className="text-[1.4rem] md:text-[1.6rem] lg:text-5xl">
                {t.rich("our-mission", {
                  span: (s) => <span className="text-primary">{s}</span>,
                })}
              </h4>
            </div>
            <p className="mt-2 text-sm font-light text-neutral-200/70 md:text-lg lg:text-[1.7rem]">
              {t.rich("our-mission-subtext", {
                span: (s) => <span className="text-primary">{s}</span>,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
