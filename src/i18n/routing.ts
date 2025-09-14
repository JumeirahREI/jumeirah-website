import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "en",
  localeCookie: true,
  localeDetection: false,
  localePrefix: "as-needed",
});
