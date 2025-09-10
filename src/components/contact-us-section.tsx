import ContactUsForm from "@/components/contact-us-form";
import GlassCard from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PropsWithChildren } from "react";
import footerImage from "../../public/images/footer-image.webp";
import emailIcon from "../../public/svg/email-icon.svg";
import locationIcon from "../../public/svg/location-icon.svg";
import phoneIcon from "../../public/svg/phone-icon.svg";

export default function ContactUsSection() {
  const t = useTranslations("ContactUs");
  return (
    <section className="relative">
      <div className="container grid grid-cols-1 gap-5 pb-16 md:grid-cols-2">
        <ContactUsForm />
        <div className="flex flex-col gap-5">
          <Card className="space-y-7 text-xl">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src={phoneIcon}
                  width={24}
                  height={24}
                  alt="Phone Icon"
                />
                <p>778265522</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={emailIcon}
                  width={24}
                  height={24}
                  alt="Email Icon"
                />
                <p>info@jumeirahye.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src={locationIcon}
                width={24}
                height={24}
                alt="Location Icon"
              />
              <p>{t("location")}</p>
            </div>
          </Card>
          <Card></Card>
        </div>
      </div>
      <Image
        src={footerImage}
        alt="Footer Image"
        fill
        className="-z-[9999] object-cover object-top"
      />
      <div className="to-background/0 from-background via-background/90 absolute top-0 right-0 left-0 -z-50 h-full bg-gradient-to-b" />
    </section>
  );
}

function Card({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  return (
    <GlassCard
      className={cn("rounded-4xl lg:rounded-[3rem] lg:px-8 lg:py-7", className)}
    >
      {children}
    </GlassCard>
  );
}
