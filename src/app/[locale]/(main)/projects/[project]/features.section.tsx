import { Project, ProjectData } from "@/data/types";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export default function FeaturesSection({
  projectData,
}: {
  projectData: ProjectData<Project>;
}) {
  const t = useTranslations<Project>(projectData.projectKey);
  const { featuresSection: fs } = projectData;

  if (!fs) return null;

  return (
    <section className="bg-background z-30">
      <div className="container">
        <h2 className="first-letter-primary-or-clip mx-auto w-fit pb-1 text-center text-3xl md:text-4xl">
          {t(fs.title)}
        </h2>
        <p className="mt-2 mb-4 text-center text-sm font-light text-wrap text-[#9C9C9C] md:text-lg lg:mx-32 lg:mt-3 lg:mb-10 lg:leading-relaxed">
          {t(fs.subtitle)}
        </p>
        <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
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
    <li className="border-gradient-t border-gradient-to-[#14141400] lg:border-gradient-width-0.5 border-gradient-from-[#7A7A7A99] flex flex-col items-center justify-center gap-4 rounded-4xl bg-linear-[5deg] from-[#1A1A1A] to-[#1A1A1A]/0 px-2 py-4 lg:py-8 rtl:bg-linear-[355deg]">
      <div className="rounded-full border border-white/30 bg-white/5 p-3 backdrop-blur-xl">
        <Image src={icon} alt={title} className="size-8 lg:size-12" />
      </div>
      <h3 className="text-center font-semibold">{title}</h3>
    </li>
  );
}
