import { useTranslations } from "next-intl";

export default function LogoType() {
  const t = useTranslations("Common");
  return (
    <div className="hidden pt-3 leading-2 md:block">
      <p className="font-serif text-2xl font-semibold text-gray-200">
        Jumeirah
      </p>
      <p className="font-serif text-[0.63rem] font-light text-gray-200">
        Real Estate Investment
      </p>
    </div>
  );
}
