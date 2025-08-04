import { useTranslations } from "next-intl";
import Image from "next/image";

export default function LogoType() {
  const t = useTranslations("Common");
  return (
    <div>
      <Image
        src="./svg/jumeirah-logo-type.svg"
        height={100}
        width={110}
        alt={t("jumeirah")}
      />
      <Image
        src="./svg/slogan.svg"
        height={100}
        width={110}
        alt={t("jumeirah")}
      />
    </div>
  );
}
