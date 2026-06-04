"use client";

import emailIcon from "@/../public/svg/email-icon.svg";
import facebookIcon from "@/../public/svg/facebook.svg";
import instagramIcon from "@/../public/svg/instagram.svg";
import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { luxuryPresets } from "@/lib/luxury-presets";
import { Globe } from "lucide-react";
import { m, LazyMotion, domAnimation, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const socials = [
  {
    key: "instagram",
    href: "https://www.instagram.com/jumeirahyemen",
    icon: instagramIcon,
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/share/1MDft5MQCh/",
    icon: facebookIcon,
  },
  {
    key: "email",
    href: "mailto:info@jumeirahye.com",
    icon: emailIcon,
  },
  {
    key: "website",
    href: "https://jumeirahye.com/",
    icon: null,
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: luxuryPresets.rise.item.visible.transition.ease,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SocialsPage() {
  const t = useTranslations("SocialsPage");
  const common = useTranslations("Common");

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-svh items-center justify-center bg-transparent px-4 py-16 pt-0 md:pt-0 lg:pt-0">
        <m.div
          className="flex w-full max-w-sm flex-col items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <m.div variants={logoVariants}>
            <Link href="/" aria-label={common("home")}>
              <Logo className="w-44 md:w-56" />
            </Link>
          </m.div>

          {/* Tagline */}
          <m.p
            className="text-center text-sm tracking-wide text-white/60"
            variants={itemVariants}
          >
            {t("tagline")}
          </m.p>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-3">
            {socials.map((social) => (
              <m.div key={social.key} variants={itemVariants}>
                <SocialLinkCard
                  href={social.href}
                  icon={social.icon}
                  label={t(social.key)}
                />
              </m.div>
            ))}
          </div>
        </m.div>
      </main>
    </LazyMotion>
  );
}

function SocialLinkCard({
  href,
  icon,
  label,
}: {
  href: string;
  icon: StaticImageData | null;
  label: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center backdrop-blur-xl",
        "transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,203,5,0.05)]",
      )}
    >
      <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,203,5,0.03)_0%,transparent_70%)]" />
      <span className="relative flex items-center gap-3">
        {icon ? (
          <Image
            src={icon}
            alt=""
            className="size-5 opacity-70 transition-opacity group-hover:opacity-100"
            unoptimized
          />
        ) : (
          <Globe className="size-5 opacity-70 transition-opacity group-hover:opacity-100" />
        )}
        <span className="text-base font-medium tracking-wide text-white/80 transition-colors group-hover:text-white">
          {label}
        </span>
      </span>
    </a>
  );
}
