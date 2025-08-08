import { useTranslations } from "next-intl";

export default function LogoType() {
  const t = useTranslations("Common");
  return (
    <div className="hidden pt-0 leading-2 md:block">
      <p className="font-serif font-semibold text-gray-200 md:text-xl lg:text-2xl">
        {t("jumeirah")}
      </p>
      <p className="font-serif font-light text-gray-200 md:text-[0.55rem] lg:text-[0.63rem]">
        {t("rei")}
      </p>
    </div>
  );
}
