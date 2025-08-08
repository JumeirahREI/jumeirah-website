"use client";

import Logo from "@/components/ui/logo";
import LogoType from "@/components/ui/logo-type";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import facebookLogo from "../../public/svg/facebook.svg";
import instagramLogo from "../../public/svg/instagram.svg";
import linkedInLogo from "../../public/svg/linkedin.svg";
import twitterLogo from "../../public/svg/twitter.svg";

const links = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "about-us",
    href: "/about",
  },
  {
    key: "blog",
    href: "/blog",
  },
] as const;

const socials = [
  {
    href: "https://www.linkedin.com/",
    icon: linkedInLogo,
  },
  {
    href: "https://www.instagram.com/",
    icon: instagramLogo,
  },
  {
    href: "https://www.twitter.com/",
    icon: twitterLogo,
  },
  {
    href: "https://www.facebook.com/",
    icon: facebookLogo,
  },
] as const;

export default function Navbar() {
  const messages = useMessages();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="fixed start-0 end-0 top-4 z-50 md:top-8 lg:top-14">
      <div className="container">
        <div className="max-lg:bg-glass-gradient max-lg:border-gradient mx-auto flex items-center justify-between rounded-3xl max-lg:px-4 max-lg:py-3 lg:relative lg:container">
          <div className="flex items-center gap-3">
            <Logo className="w-[4.5rem] md:w-20 md:-translate-y-1 lg:w-24" />
            <LogoType />
          </div>
          <div className="hidden lg:block">
            <nav
              className={`absolute start-1/2 top-0 col-span-3 flex ${locale === "ar" ? "translate-x-1/2" : "-translate-x-1/2"} items-center justify-center`}
            >
              <ul className="md:bg-glass-gradient border-gradient flex gap-10 rounded-full px-8 py-2 text-lg leading-loose font-medium text-white">
                {links.map((link) => {
                  return (
                    <li key={link.key} className="relative">
                      <Link
                        href={link.href}
                        className={
                          pathname.includes(link.href)
                            ? "text-primary font-serif text-xl font-medium after:absolute after:inset-0 after:start-1/2 after:top-full after:aspect-square after:size-[0.35rem] after:-translate-x-1/2 after:-translate-y-1.5 after:rounded-full after:bg-white"
                            : "hover:text-primary transition-colors"
                        }
                      >
                        {messages.Common[link.key]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center justify-end gap-3">
              {socials.map((social) => {
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="bg-glass rounded-full p-4 transition-colors hover:bg-white/20"
                    target="_blank"
                  >
                    <Image
                      src={social.icon}
                      className="size-5"
                      unoptimized
                      alt={social.icon}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
