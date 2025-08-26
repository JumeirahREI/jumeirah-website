import AppLink from "@/components/app-link";
import PageHeader from "@/components/page-header";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  const ct = useTranslations("Common");

  return (
    <div>
      <PageHeader
        title={t.rich("title", {
          span: (s) => <span className="text-primary">{s}</span>,
        })}
        subTitle={t("sub-title")}
      >
        <div className="ms-2.5 mt-6 flex items-center justify-center gap-4 text-xs font-semibold md:mt-10 md:text-sm lg:text-base">
          {/* <Link
                href="#"
                className="bg-glass rounded-full border border-white/30 bg-white/[3%] px-7 py-3 backdrop-blur-lg hover:bg-white/20"
              >
                {ct("")}
              </Link> */}
          <AppLink href="#">{ct("contact-us")}</AppLink>
        </div>
      </PageHeader>
    </div>
  );
}
