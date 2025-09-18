import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export default function FeaturesSection({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations(projectData.projectKey);
  const { featuresSection: fs } = projectData;

  if (!fs) return null;

  return (
    <section className="bg-background z-30">
      <div className="container">
        <h2 className="first-letter:text-primary text-center text-3xl md:text-4xl lg:text-5xl">
          {t(fs.title)}
        </h2>
        <p className="mt-2 mb-4 text-center text-sm font-light text-wrap text-[#9C9C9C] md:text-lg lg:mx-32 lg:mt-3 lg:mb-10 lg:text-xl lg:leading-relaxed xl:mx-52 xl:text-2xl 2xl:mx-80">
          {t(fs.subtitle)}
        </p>
        <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-3 2xl:gap-8">
          {fs.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.title)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
}) {
  return (
    <li>
      <div className="border-gradient-t border-gradient-to-[#14141400] lg:border-gradient-width-0.5 border-gradient-from-[#7A7A7A99] flex flex-col items-center justify-center gap-4 rounded-4xl bg-linear-[5deg] from-[#1A1A1A] to-[#1A1A1A]/0 py-4 xl:rounded-[5rem] xl:py-10 rtl:bg-linear-[355deg]">
        <div className="rounded-full border border-white/30 bg-white/5 p-3 backdrop-blur-xl xl:p-6">
          <Image src={icon} alt={title} className="size-8 xl:size-12" />
        </div>
        <h3 className="text-center font-semibold xl:text-2xl">{title}</h3>
      </div>
    </li>
  );
}
