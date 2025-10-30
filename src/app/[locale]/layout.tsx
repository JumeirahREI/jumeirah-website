import heroBackgroundImage from "@/../public/images/hero-background-image.webp";
import LazyMotionProvider from "@/components/lazy-motion-provider";
import Navbar from "@/components/navbar";
import ParallaxScrollEffect from "@/components/parallax-scroll-effect";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import StructuredData from "@/components/structured-data";
import { aeonikFont, montserratArabicFont } from "@/fonts";
import { routing } from "@/i18n/routing";
import { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  // initialScale: 1.0,
  // maximumScale: 1.0,
  // userScalable: false,
  themeColor: "#000101",
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
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className="bg-background text-foreground relative min-h-svh max-w-svw font-sans not-supports-[overflow:clip]:overflow-x-hidden supports-[overflow:clip]:overflow-x-clip md:pt-4 lg:pt-10">
        <div className="space-sections">
          <LazyMotionProvider>
            <BackgroundImage />
            {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}
            <NextIntlClientProvider locale={locale}>
              <Navbar />
              {children}
            </NextIntlClientProvider>
          </LazyMotionProvider>
        </div>
      </body>
    </html>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute top-0 right-0 left-0 -z-[9999] !mb-0 h-full max-h-[40rem] overflow-hidden md:max-h-[50rem] lg:max-h-[60rem]">
      <ParallaxScrollEffect
        aria-hidden
        className="pointer-events-none relative size-full"
      >
        <Image
          src={heroBackgroundImage}
          className="-z-50 h-full w-full object-cover object-top-right md:object-top ltr:rotate-y-180 rtl:max-md:object-top-left"
          alt="Jumeirah Real Estate Investment luxury residential towers in Yemen"
          placeholder="blur"
          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 100vw, 100vw"
          priority
          fetchPriority="high"
          fill
        />
        <div className="to-background absolute start-0 top-0 -z-40 h-full w-4/6 bg-linear-to-l from-[#00010100] opacity-60 rtl:bg-linear-to-r" />
        <div className="absolute -end-32 top-0 -z-40 h-full w-[150svw] bg-linear-to-tr from-black/0 from-50% to-[#2F3A43]/60 md:w-full rtl:bg-linear-to-tl" />
      </ParallaxScrollEffect>
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const { locale } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://jumeirah-rei.com";
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Jumeirah Real Estate Investment" }],
    creator: "Jumeirah Real Estate Investment",
    publisher: "Jumeirah Real Estate Investment",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_YE" : "en_US",
      url: currentUrl,
      title: t("title"),
      description: t("description"),
      siteName: "Jumeirah Real Estate Investment",
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t("og-image-alt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/images/twitter-image.jpg`],
      creator: "@jumeirah_rei",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}
