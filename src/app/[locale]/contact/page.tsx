import PageHeader from "@/components/page-header";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Common");

  return (
    <>
      <PageHeader title={t("contact-us")} subTitle="test">
        <h1></h1>
      </PageHeader>
      <main className="bg-background">
        <div className="container"></div>
      </main>
    </>
  );
}
