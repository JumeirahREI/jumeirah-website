import GotoIcon from "@/components/goto-icon";
import ImageContainer from "@/components/image-container";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { useTranslations } from "next-intl";
import alHathaaTowersImage from "../../../../public/images/alhathaa-towers.webp";
import sanaaTowersImage from "../../../../public/images/sanaa-towers.webp";

const projects = [
  {
    title: "sanaa-towers",
    titleNoSpan: "sanaa-towers-no-span",
    status: "under-construction",
    image: sanaaTowersImage,
  },
  {
    title: "alhathaa-towers",
    titleNoSpan: "alhathaa-towers-no-span",
    status: "complete",
    image: alHathaaTowersImage,
  },
] as const;

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
    >
      <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row xl:gap-20">
        {projects.map((p) => (
          <ImageContainer
            key={p.title}
            src={p.image}
            className="w-full rounded-3xl lg:w-fit xl:rounded-[4rem]"
          >
            <div className="flex flex-col justify-between gap-68 px-3 py-2 xl:w-[35rem] xl:gap-[30rem] xl:px-12 xl:pt-10 xl:pb-14">
              <p className="bg-glass self-start rounded-2xl border border-white/30 bg-black/20 px-3 py-1.5 text-xs text-white/70 xl:text-lg">
                {ct(p.status)}
              </p>
              <div className="flex items-center justify-center gap-2 xl:gap-4">
                <GotoIcon
                  className="lg:size-20 lg:p-3"
                  alt={projectsT(p.titleNoSpan)}
                />
                <p className="border-gradient-to-e border-gradient-to-neutral-500/60 lg:border-gradient-0.5 grow rounded-2xl bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A]/0 p-2 text-center xl:p-4 xl:text-[2rem] rtl:bg-gradient-to-l">
                  {projectsT.rich(p.title, {
                    span: (s) => <span className="text-primary">{s}</span>,
                  })}
                </p>
              </div>
            </div>
          </ImageContainer>
        ))}
      </div>
    </Section>
  );
}
