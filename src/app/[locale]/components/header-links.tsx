"use client";

import AppLink from "@/components/app-link";
import { m } from "motion/react";
import { useTranslations } from "next-intl";

export default function HeaderLinks() {
  const t = useTranslations("HomePage");
  const ct = useTranslations("Common");

  return (
    <div className="ms-2.5 mt-4 flex items-center justify-center gap-4 text-xs font-semibold md:mt-6 md:justify-start md:text-sm lg:text-base">
      <m.div
        initial={{ opacity: 0, y: 12, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, y: 0, backdropFilter: "blur(24px)" }}
      >
        <AppLink href="/projects" variant="outline">
          {t("our-projects")}
        </AppLink>
      </m.div>
      <AppLink href="/contact">{ct("contact-us")}</AppLink>
    </div>
  );
}
