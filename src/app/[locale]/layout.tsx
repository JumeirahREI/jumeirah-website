import ContactUsSection from "@/components/contact-us-section";
import FAQsSection from "@/components/faqs-section";
import Navbar from "@/components/navbar";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { aeonikFont, montserratArabicFont } from "@/fonts";
import { routing } from "@/i18n/routing";
import { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import heroBackgroundImage from "../../../public/images/hero-background-image.jpg";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: "#ffcb05",
};

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
      <body className="bg-background text-foreground relative max-w-svw overflow-x-clip font-sans md:pt-4 lg:pt-10">
        {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}
        <NextIntlClientProvider locale={locale}>
          <Navbar />
          <div>{children}</div>
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
      <div className="from-background/0 to-background/60 absolute start-0 top-0 -z-40 h-full w-4/6 bg-gradient-to-l rtl:bg-gradient-to-r" />
      <div className="absolute -end-32 top-0 -z-40 h-full w-[150svw] bg-gradient-to-tr from-black/0 from-50% to-[#2F3A43]/60 md:w-full rtl:bg-gradient-to-tl" />
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
