import companyHistoryImage from "@/../public/images/company-history-image.webp";
import ourMissionImage from "@/../public/images/our-mission-image.webp";
import collaborationIcon from "@/../public/svg/collaboration-icon.svg";
import customerCentricityIcon from "@/../public/svg/customer-centricity-icon.svg";
import excellenceIcon from "@/../public/svg/excellence-icon.svg";
import innovationIcon from "@/../public/svg/innovation-icon.svg";
import integrityIcon from "@/../public/svg/integrity-icon.svg";
import missionIcon from "@/../public/svg/mission-icon.svg";
import sustainabilityIcon from "@/../public/svg/sustainability-icon.svg";
import AppLink from "@/components/app-link";
import ImageContainer from "@/components/image-container";
import PageHeader from "@/components/page-header";
import Section from "@/components/section";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";

const ourValuesData = [
  {
    icon: integrityIcon,
    title: "integrity",
    description: "integrity-description",
  },
  {
    icon: excellenceIcon,
    title: "excellence",
    description: "excellence-description",
  },
  {
    icon: customerCentricityIcon,
    title: "customer-first",
    description: "customer-first-description",
  },
  {
    icon: innovationIcon,
    title: "innovation",
    description: "innovation-description",
  },
  {
    icon: collaborationIcon,
    title: "collaboration",
    description: "collaboration-description",
  },
  {
    icon: sustainabilityIcon,
    title: "sustainability",
    description: "sustainability-description",
  },
] as const;

export default function AboutUsPage() {
  const t = useTranslations("AboutUs");
  const ct = useTranslations("Common");
  const pt = useTranslations("ProjectTitles");

  return (
    <>
      <PageHeader title={t("title")} subTitle={t("subtitle")}>
        <div className="flex items-center justify-center gap-4">
          <AppLink
            href="/contact"
            className="font-semibold lg:px-4 lg:py-2 lg:text-xl"
          >
            {ct("contact-us")}
          </AppLink>
        </div>
      </PageHeader>
      <main className="bg-background relative space-y-32 lg:space-y-52">
        <section className="z-40 container space-y-24 lg:space-y-52">
          <article className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-28">
            <div className="self-stretch lg:col-span-2">
              <ImageContainer
                className="z-30 h-full min-h-72"
                src={companyHistoryImage}
              />
            </div>
            <div className="lg:col-span-3">
              <h2 className="ltr:first-letter-primary text-2xl md:text-3xl lg:mt-14 lg:mb-4 lg:text-4xl xl:text-5xl">
                {t("company-history")}
              </h2>
              <p className="text-lg leading-snug font-light text-wrap opacity-70 md:text-xl lg:mb-14 lg:text-2xl xl:text-3xl">
                {t("company-history-description")}
              </p>
            </div>
          </article>
          <article className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-28">
            <div className="space-y-3 lg:col-span-3 lg:my-12 lg:space-y-2">
              <p className="border-gradient-to-e rtl:border-gradient-to-s border-gradient-width-0.5 border-gradient-from-[#7A7A7A99] border-gradient-to-[#14141400] inline-flex gap-3 rounded-full bg-linear-to-l from-zinc-900/0 to-zinc-900 px-4 pt-2 pb-1.5 text-center font-serif whitespace-nowrap transition before:transition-colors md:text-xs lg:mb-4 lg:px-5 lg:pt-2.5 lg:pb-2 lg:text-lg xl:text-xl rtl:bg-linear-to-r">
                <Image src={missionIcon} alt="target-icon" className="size-6" />
                {t("our-mission")}
              </p>
              <h2 className="text-[1.4rem] leading-tight md:text-[1.6rem] lg:mb-5 lg:text-4xl xl:text-5xl">
                {t("our-mission-title")}
              </h2>
              <p className="text-lg leading-snug font-light text-wrap opacity-70 md:text-xl lg:text-2xl xl:text-3xl">
                {t("our-mission-subtitle")}
              </p>
            </div>
            <div className="self-stretch lg:col-span-2">
              <ImageContainer
                className="z-30 h-full min-h-72"
                src={ourMissionImage}
              />
            </div>
          </article>
          {/* <article className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-28">
            <div className="row-start-2 self-stretch md:row-start-1 lg:col-span-2">
              <ImageContainer
                className="z-30 h-full min-h-72"
                src={sanaaTowersImage}
                alt={pt("sanaa-towers")}
              />
            </div>
            <div className="space-y-3 lg:col-span-3 lg:my-12 lg:space-y-2">
              <p className="border-gradient-to-e rtl:border-gradient-to-s border-gradient-width-0.5 border-gradient-from-[#7A7A7A99] border-gradient-to-[#14141400] inline-flex gap-3 rounded-full bg-linear-to-l from-zinc-900/0 to-zinc-900 px-4 pt-2 pb-1.5 text-center font-serif whitespace-nowrap transition before:transition-colors md:text-xs lg:mb-4 lg:px-5 lg:pt-2.5 lg:pb-2 lg:text-lg xl:text-xl rtl:bg-linear-to-r">
                <Image
                  src={missionIcon}
                  alt="mission-icon"
                  className="size-6"
                />
                {t("our-mission")}
              </p>
              <h2 className="text-[1.4rem] leading-tight md:text-[1.6rem] lg:mb-5 lg:text-5xl xl:text-[3.5rem]">
                {t("our-mission-title")}
              </h2>
              <p className="text-lg leading-snug font-light text-wrap opacity-70 md:text-xl lg:text-3xl">
                {t("our-mission-subtitle")}
              </p>
            </div>
          </article> */}
        </section>
        <Section
          title={t("our-values")}
          description={t("our-values-title")}
          imgClassName="opacity-30"
        >
          <ul className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
            {ourValuesData.map((item) => (
              <WhatWeStandFor
                key={item.title}
                icon={item.icon}
                title={t(item.title)}
                description={t(item.description)}
              />
            ))}
          </ul>
        </Section>
      </main>
    </>
  );
}

function WhatWeStandFor({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <li>
      <div className="flex flex-col items-start gap-4 md:gap-7">
        <div className="border-gradient-t border-gradient-to-[#14141400] border-gradient-from-[#7A7A7A99] rounded-full bg-linear-to-t from-[#1A1A1A] to-[#1A1A1A]/0 p-4">
          <Image src={icon} alt="icon" className="size-8 md:size-10" />
        </div>
        <h3 className="first-letter:text-primary text-xl font-semibold md:text-xl lg:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="opacity-70 xl:text-xl">{description}</p>
      </div>
    </li>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutUs");

  return {
    title: t("meta-title"),
    description: t("meta-description"),
  };
}
