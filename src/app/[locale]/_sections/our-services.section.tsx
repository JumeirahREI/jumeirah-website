import OurServicesCarousel from "@/components/our-services-carousel";
import Section from "@/components/section";
import SectionLink from "@/components/ui/section-link";
import { useTranslations } from "next-intl";

export default function OurServicesSection() {
  const t = useTranslations("OurServicesSection");
  const ct = useTranslations("Common");

  return (
    <Section
      title={t.rich("our-services", {
        span: (s) => <span className="text-primary">{s}</span>,
      })}
      description={t("our-services-description")}
      sectionLink={() => (
        <SectionLink href="/projects">
          {ct.rich("what-we-create", {
            span: (s) => <span className="text-primary">{s}</span>,
          })}
        </SectionLink>
      )}
      className="!max-w-none !px-0 lg:!px-4"
    >
      <OurServicesCarousel />
    </Section>
  );
}
