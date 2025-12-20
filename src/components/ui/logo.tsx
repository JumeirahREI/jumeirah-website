import logoWideEn from "@/../public/svg/jumeirah-logo-wide-en.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo({
  className,
  wideLogo,
}: {
  className?: string;
  wideLogo?: boolean;
}) {
  const t = useTranslations("Common");

  const logoSrc = logoWideEn;

  return (
    <Image src={logoSrc} alt={t("jumeirah")} className={className} priority />
  );
}
