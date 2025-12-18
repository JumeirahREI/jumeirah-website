import redditLogo from "@/../public/svg/reddit-logo.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const partners = [
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
  {
    title: "Reddit",
    logo: redditLogo,
  },
];

export default function OurPartnersSection() {
  const t = useTranslations("OurPartnersSection");

  return (
    <section className="container px-2 lg:mb-52">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
        {t.rich("title", {
          span: (s) => <span className="text-primary">{s}</span>,
        })}
      </h2>
      <p className="mx-auto my-4 text-center text-sm font-light text-wrap text-[#9C9C9C] md:text-lg lg:mx-32 lg:my-6 lg:text-xl lg:leading-relaxed">
        {t("description")}
      </p>
      <div className="border-gradient-t border-gradient-width-0.5 border-gradient-to-[#14141400] border-gradient-from-[#7A7A7A99] z-10 mb-16 rounded-4xl bg-linear-[6deg] from-[#1A1A1A] to-[#1A1A1A]/0 px-4 py-6 md:mb-24 md:rounded-[3.5rem] md:px-7 md:py-9 lg:mt-10 lg:py-14 rtl:bg-linear-[354deg]">
        <div className="lg:gap- flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-8">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={partner.title}
              className="h-5 w-fit sm:h-6 md:h-6 lg:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
