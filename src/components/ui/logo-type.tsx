import { useTranslations } from "next-intl";

export default function LogoType() {
  const t = useTranslations("Common");
  return (
    <div className="pt-0 leading-2">
      <p className="font-serif text-2xl font-semibold text-gray-200 md:text-xl lg:text-xl xl:text-2xl">
        {t("jumeirah")}
      </p>
      <p className="hidden font-serif font-light text-gray-200 md:block md:text-[0.55rem] lg:text-[0.55rem] xl:text-[0.63rem]">
        {t("rei")}
      </p>
    </div>
  );
}
