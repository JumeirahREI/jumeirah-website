import ContactUsSection from "@/components/contact-us-section";
import FAQsSection from "@/components/faqs-section";
import Navbar from "@/components/navbar";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { aeonikFont, montserratArabicFont } from "@/fonts";
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

  let font = aeonikFont;

  if (locale === "ar") {
    font = montserratArabicFont;
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={font.className}
    >
      <body className="bg-background text-foreground relative max-w-svw overflow-x-clip font-sans">
        {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}

        <NextIntlClientProvider locale={locale}>
          <Navbar />
          <main>{children}</main>
          <FAQsSection />
          <ContactUsSection />
        </NextIntlClientProvider>
        <BackgroundImage />
      </body>
    </html>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute top-0 right-0 left-0 -z-[9999] h-full max-h-[40rem] overflow-hidden md:max-h-[50rem] lg:max-h-[60rem]">
      <Image
        src={heroBackgroundImage}
        className="-z-50 h-full w-full object-cover object-top"
        alt="Hero image"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
        fill
      />
      <div className="from-background/0 via-background/0 to-background/60 absolute start-0 top-0 -z-40 h-full w-4/6 bg-gradient-to-tl rtl:bg-gradient-to-tr" />
      <div className="absolute -end-32 top-0 -z-40 h-full w-[150svw] bg-gradient-to-br from-black/0 to-[#2F3A43]/60 md:w-full rtl:bg-gradient-to-bl" />
    </div>
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
