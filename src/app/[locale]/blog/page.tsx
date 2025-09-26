import PageHeader from "@/components/page-header";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("Common");

  return (
    <>
      <PageHeader title={t("blog")} subTitle="test">
        <h1></h1>
      </PageHeader>
      <main className="bg-background">
        <div className="container"></div>
      </main>
    </>
  );
}
