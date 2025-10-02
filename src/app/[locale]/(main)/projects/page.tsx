import ProjectsSection from "@/app/[locale]/(main)/projects/_sections/projects.section";
import AppLink from "@/components/app-link";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  const ct = useTranslations("Common");

  return (
    <>
      <PageHeader title={t("title")} subTitle={t("sub-title")}>
        <div className="flex items-center justify-center gap-4 text-xs font-semibold md:gap-6 md:text-sm lg:text-base">
          <AppLink variant="outline" href="#" className="lg:py-2">
            {ct("our-services")}
          </AppLink>
          <AppLink href="/contact" className="lg:py-2">
            {ct("contact-us")}
          </AppLink>
        </div>
      </PageHeader>
      <main>
        <ProjectsSection />
        {/* <OurPartnersSection /> */}
      </main>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProjectsPage");

  return {
    title: t("meta-title"),
    description: t("meta-description"),
  };
}
