import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo() {
  const t = useTranslations("Common");
  return (
    <Image
      src="./svg/jumeirah-logo.svg"
      height={100}
      width={100}
      alt={t("jumeirah")}
    />
  );
}
