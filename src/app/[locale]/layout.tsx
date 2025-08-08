import Navbar from "@/components/navbar";
import { manropeFont, qurovaDemoFont } from "@/fonts";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";
import heroBackgroundImage from "../../../public/images/hero-background-image.jpg";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`bg-background text-foreground max-w-svw overflow-x-hidden font-sans ${qurovaDemoFont.variable} ${manropeFont.variable}`}
      >
        <Image
          src={heroBackgroundImage}
          className="absolute -z-40 min-h-[120svh] object-cover object-top"
          alt="Hero image"
          placeholder="blur"
          priority
          // fill
        />
        <NextIntlClientProvider locale={locale}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
