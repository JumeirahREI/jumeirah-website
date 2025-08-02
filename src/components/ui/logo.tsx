import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo() {
  const t = useTranslations("Common");
  return (
    <div className="flex items-baseline gap-2">
      <Image
        src="./images/jumeirah-logo.svg"
        height={100}
        width={100}
        alt={t("jumeirah")}
      />
      <div>
        <Image
          src="./images/jumeirah-logo-type.svg"
          height={100}
          width={110}
          alt={t("jumeirah")}
        />
        <Image
          src="./images/slogan.svg"
          height={100}
          width={110}
          alt={t("jumeirah")}
        />
      </div>
    </div>
  );
}
