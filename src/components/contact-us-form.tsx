import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ContactUsFrom({ className }: { className?: string }) {
  const t = useTranslations("ContactUs");

  return (
    <div
      className={cn(
        "flex flex-col space-y-4 rounded-4xl md:space-y-6 lg:rounded-[3rem] lg:px-8 lg:py-7",
        className,
      )}
    >
      <div>
        <h3 className="first-letter-primary-or-clip from-[0.5ch] to-[0.5ch] pb-1 font-serif text-3xl md:text-4xl">
          {t("contact-us")}
        </h3>
        <h4 className="mt-2 text-sm font-light text-[#9C9C9C] md:text-base lg:mt-4">
          {t("description")}
        </h4>
      </div>
      <form className="grid grow items-center gap-4 lg:grid-cols-2">
        <Input name="firstname" placeholder={t("first-name")} />
        <Input name="lastname" placeholder={t("last-name")} />
        <Input
          name="email"
          className="col-span-full"
          placeholder={t("email")}
          type="email"
        />
        <Input
          name="phone"
          dir="ltr"
          className="col-span-full rtl:text-right"
          placeholder={t("phone")}
          type="tel"
        />
        <TextArea
          name="message"
          className="col-span-full"
          placeholder={t("message")}
        />
        <SubmitButton className="col-span-full">
          {t("send-message")}
        </SubmitButton>
      </form>
    </div>
  );
}

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "rounded-full border border-white/30 bg-white/5 px-5 py-3 placeholder-[#757575]",
        className,
      )}
      maxLength={255}
      {...props}
    />
  );
}

function TextArea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      rows={5}
      className={cn(
        "resize-none rounded-3xl border border-white/30 bg-white/5 px-5 py-3 placeholder-[#757575]",
        className,
      )}
      {...props}
    />
  );
}

function SubmitButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "bg-primary rounded-xl py-3 text-center text-black",
        className,
      )}
      type="submit"
      {...props}
    />
  );
}
