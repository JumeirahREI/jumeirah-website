import alHathaaTowersImage from "@/../public/images/alhathaa-towers.webp";
import sanaaTowersImage from "@/../public/images/sanaa-towers.webp";
import { AnimatedGroup } from "@/components/animated-group";
import Carousel from "@/components/carousel";
import GotoIcon from "@/components/goto-icon";
import ImageContainer from "@/components/image-container";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { Link } from "@/i18n/navigation";
import { transitionVariants } from "@/lib/transition";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "sanaa-towers",
    titleNoSpan: "sanaa-towers-no-span",
    status: "under-construction",
    image: sanaaTowersImage,
    href: "/sanaa-towers",
  },
  {
    title: "alhathaa-towers",
    titleNoSpan: "alhathaa-towers-no-span",
    status: "complete",
    image: alHathaaTowersImage,
    href: "/alhathaa-towers",
  },
] as const;

const carouselOptions = {
  align: "center",
  containScroll: false,
  skipSnaps: true,
  breakpoints: {
    "(min-width: 768px)": {
      align: "center",
      slidesToScroll: 2,
      active: false,
    },
  },
} as const;

export default function ExploreOutProjectsSection() {
  const t = useTranslations("ExploreOurProjectsSection");
  const ct = useTranslations("Common");
  const projectsT = useTranslations("ProjectTitles");

  return (
    <Section
      title={t.rich("explore-our-projects", {
        span: (s) => <span className="text-primary">{s}</span>,
      })}
      description={t("explore-our-projects-description")}
      sectionLink={() => (
        <SectionLink href="#">
          {t.rich("more-projects", {
            span: (s) => <span className="text-primary">{s}</span>,
          })}
        </SectionLink>
      )}
      className="pb-20 lg:pb-36"
      enableAnimation
    >
      <Carousel options={carouselOptions} className="w-full md:px-4">
        <AnimatedGroup
          variants={transitionVariants}
          className="embla__container flex gap-4 md:gap-6 xl:gap-10 2xl:justify-center"
          childrenClassName="embla__slide md:mx-2 flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-[0_0_47%] 2xl:flex-[0_0_40%]"
          inherit
        >
          {projects.map((p) => (
            <ImageContainer
              key={p.title}
              src={p.image}
              className="group transition-[filter, scale] w-full cursor-pointer overflow-hidden rounded-4xl duration-300 ease-in-out active:scale-95 active:brightness-80 lg:rounded-4xl xl:rounded-[4rem]"
              imageClassName="transition-[filter] duration-300 ease-in-out lg:group-hover:brightness-125"
            >
              <Link
                href={p.href}
                className="flex flex-col justify-between gap-80 px-5 py-4 md:px-6 md:py-6 lg:px-5 lg:py-4 xl:gap-[30rem] xl:px-12 xl:pt-10 xl:pb-14"
              >
                <p className="bg-glass self-start rounded-2xl border border-white/30 bg-black/20 px-3 py-1.5 text-xs text-white/70 lg:border-2 xl:text-lg">
                  {ct(p.status)}
                </p>
                <div className="flex items-center justify-center gap-2 xl:gap-4">
                  <GotoIcon
                    className="md:size-10 md:p-1.5 xl:size-20 xl:p-3"
                    alt={projectsT(p.titleNoSpan)}
                  />
                  <p className="border-gradient-to-e border-gradient-to-neutral-500/60 xl:border-gradient-width-0.5 grow rounded-2xl bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A]/0 p-2 text-center md:text-lg xl:p-4 xl:text-[2rem] rtl:bg-gradient-to-l">
                    {projectsT.rich(p.title, {
                      span: (s) => <span className="text-primary">{s}</span>,
                    })}
                  </p>
                </div>
              </Link>
            </ImageContainer>
          ))}
        </AnimatedGroup>
      </Carousel>
    </Section>
  );
}
