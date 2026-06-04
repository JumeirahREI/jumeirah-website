import { AnimatedGroup } from "@/components/animated-group";
import GlassCard from "@/components/ui/glass-card";
import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

import emailIcon from "@/../public/svg/email-icon.svg";
import facebookIcon from "@/../public/svg/facebook.svg";
import websiteIcon from "@/../public/svg/home-icon.svg";
import instagramIcon from "@/../public/svg/instagram.svg";

export default function SocialsPage() {
  const t = useTranslations("Common");

  const socials = [
    {
      href: "https://www.instagram.com/jumeirahyemen",
      icon: instagramIcon,
      label: t("instagram"),
    },
    {
      href: "https://www.facebook.com/share/1MDft5MQCh/",
      icon: facebookIcon,
      label: t("facebook"),
    },
    {
      href: "mailto:info@jumeirahye.com",
      icon: emailIcon,
      label: t("email"),
    },
    {
      href: "/",
      icon: websiteIcon,
      label: t("website"),
    },
  ];

  return (
    <>
      <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-transparent pt-10 pb-20">
        <div className="relative z-10 container flex max-w-md flex-col items-center gap-12">
          <Logo className="w-48 drop-shadow-2xl md:w-64" />

          <AnimatedGroup
            preset="slide"
            className="flex w-full flex-col gap-4"
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              },
            }}
          >
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className="group block w-full"
              >
                <GlassCard className="flex items-center gap-4 border-white/10 bg-white/5 py-4 transition-all group-hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 active:scale-[0.98]">
                  <div className="group-hover:bg-primary flex size-12 items-center justify-center rounded-full bg-white/5 transition-colors">
                    <Image
                      src={social.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 transition-all group-hover:scale-110 group-hover:brightness-0"
                    />
                  </div>
                  <span className="text-lg font-semibold tracking-wide text-white/90 group-hover:text-white">
                    {social.label}
                  </span>
                </GlassCard>
              </Link>
            ))}
          </AnimatedGroup>
        </div>
      </main>
      <div className="from-background absolute top-0 left-0 -z-10 size-full bg-linear-to-t from-50% to-[#00010100]" />
    </>
  );
}
