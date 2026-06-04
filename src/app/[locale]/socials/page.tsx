"use client";

import emailIcon from "@/../public/svg/email-icon.svg";
import facebookIcon from "@/../public/svg/facebook.svg";
import instagramIcon from "@/../public/svg/instagram.svg";
import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
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

// Container only orchestrates the stagger — it never sets opacity/transform on
// itself, so it does not create a backdrop root that would disable the cards'
// backdrop-blur.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

// Cards animate opacity only. Animating transform/filter on a card's ancestor
// would break its backdrop-filter (frosted glass), so we deliberately avoid it.
const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
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
      {/* Vertical gradient: transparent at the top (reveals the hero image),
          solid background colour at the bottom. */}
      <div
        aria-hidden
        className="from-background/0 to-background pointer-events-none fixed inset-0 -z-10 bg-linear-to-b"
      />
      <main className="flex min-h-svh items-center justify-center bg-transparent px-4 py-16 pt-0! md:pt-0! lg:pt-0!">
        <m.div
          className="flex w-full max-w-sm flex-col items-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <m.div variants={logoVariants}>
            <Link href="/" aria-label={common("home")}>
              <Logo className="w-48 md:w-60" />
            </Link>
          </m.div>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-4">
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
        "group flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-lg",
        "transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
      )}
    >
      {icon ? (
        <Image
          src={icon}
          alt=""
          className="size-5 opacity-80 transition-opacity group-hover:opacity-100"
          unoptimized
        />
      ) : (
        <Globe className="size-5 opacity-80 transition-opacity group-hover:opacity-100" />
      )}
      <span className="text-base font-medium tracking-wide text-white/90 transition-colors group-hover:text-white">
        {label}
      </span>
    </a>
  );
}
