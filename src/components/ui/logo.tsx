import { useTranslations } from "next-intl";
import Image from "next/image";
// import logo from "@/../public/images/logo.png";
import logo from "@/../public/svg/jumeirah-logo.svg";

export default function Logo({ className }: { className?: string }) {
  const t = useTranslations("Common");
  return (
    <Image src={logo} alt={t("jumeirah")} className={className} priority />
  );
}
