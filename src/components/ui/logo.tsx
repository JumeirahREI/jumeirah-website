// import logo from "@/../public/svg/logo.svg";
import logoWideAr from "@/../public/svg/jumeirah-logo-wide-ar.svg";
import logoWideEn from "@/../public/svg/jumeirah-logo-wide-en.svg";
import logo from "@/../public/svg/jumeirah-logo.svg";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo({
  className,
  wideLogo,
}: {
  className?: string;
  wideLogo?: boolean;
}) {
  const t = useTranslations("Common");
  const locale = useLocale();

  const logoSrc = wideLogo ? (locale === "ar" ? logoWideAr : logoWideEn) : logo;

  return (
    <Image src={logoSrc} alt={t("jumeirah")} className={className} priority />
  );
}
