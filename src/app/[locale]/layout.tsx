import Navbar from "@/components/navbar";
import { manropeFont, qurovaDemoFont } from "@/fonts";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import heroBackgroundImage from "../../../public/images/hero-background-image.jpg";
import "../globals.css";

export default async function RootLayout({
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
          className="from-background to-background/0 absolute -z-40 h-svh max-h-[40rem] bg-gradient-to-t object-cover object-top md:max-h-[50rem] lg:max-h-[60rem]"
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}
