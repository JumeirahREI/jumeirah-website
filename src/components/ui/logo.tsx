// import logo from "@/../public/svg/logo.svg";
import logo from "@/../public/svg/jumeirah-logo.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  const t = useTranslations("Common");
  return (
    <Image src={logo} alt={t("jumeirah")} className={className} priority />
  );
}
