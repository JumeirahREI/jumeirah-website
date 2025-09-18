import GlassCard from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ContactUsFrom() {
  const t = useTranslations("ContactUs");

  return (
    <GlassCard
      disableGlow
      className="space-y-4 rounded-4xl backdrop-blur-lg md:space-y-6 lg:rounded-[3rem] lg:px-8 lg:py-7"
    >
      <div>
        <h3 className="first-letter:text-primary font-serif text-3xl md:text-4xl lg:text-5xl">
          {t("contact-us")}
        </h3>
        <h4 className="mt-2 text-sm font-light text-[#9C9C9C] md:text-base lg:mt-4 lg:text-xl">
          {t("description")}
        </h4>
      </div>
      <form className="grid gap-4 lg:grid-cols-2">
        <Input name="firstname" placeholder={t("first-name")} />
        <Input name="lastname" placeholder={t("last-name")} />
        <Input
          name="email"
          className="col-span-full"
          placeholder={t("email")}
        />
        <Input
          name="phone"
          className="col-span-full"
          placeholder={t("phone")}
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
    </GlassCard>
  );
}

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "rounded-full border border-white/30 bg-white/5 px-5 py-3 placeholder-white/30",
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
        "resize-none rounded-3xl border border-white/30 bg-white/5 px-5 py-3 placeholder-white/30",
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
