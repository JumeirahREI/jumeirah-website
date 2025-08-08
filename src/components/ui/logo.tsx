import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../public/svg/jumeirah-logo.svg";

export default function Logo() {
  const t = useTranslations("Common");
  return <Image src={logo} alt={t("jumeirah")} className="w-16 md:w-24" />;
}
