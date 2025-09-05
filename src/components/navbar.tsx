"use client";

import Logo from "@/components/ui/logo";
import LogoType from "@/components/ui/logo-type";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Squeeze } from "hamburger-react";
import {
  domAnimation,
  LazyMotion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import * as m from "motion/react-m";
import { useMessages } from "next-intl";
import Image from "next/image";
import { useState } from "react";
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

const OPACITY_MAX = 60;
const SCROLL_THRESHOLD = 150;

export default function Navbar() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const { scrollY } = useScroll();
  const [gradientOpacity, setGradientOpacity] = useState(
    Math.min(scrollY.get(), SCROLL_THRESHOLD),
  );
  const messages = useMessages();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const opacity =
      Math.min(latest - SCROLL_THRESHOLD, OPACITY_MAX) / OPACITY_MAX;

    setGradientOpacity(opacity);
  });

  const backgroundImage = useMotionTemplate`linear-gradient(to bottom, rgba(0, 1, 1, ${gradientOpacity}), rgba(0, 1, 1, 0))`;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        style={{
          backgroundImage,
        }}
        className="sticky start-0 end-0 top-0 z-50 py-4"
      >
        <div className="container">
          <div className="mx-auto flex items-center justify-between rounded-3xl max-lg:px-4 max-lg:py-3 lg:relative lg:container">
            <Link href="/" className="z-[100] flex items-center gap-3">
              <Logo className="w-[4.5rem] md:w-20 md:-translate-y-1 lg:w-24" />
              <LogoType />
            </Link>
            <div
              className={cn(
                "fixed hidden lg:static lg:block",
                isOpenMobile &&
                  "transition-colors max-lg:top-0 max-lg:right-0 max-lg:left-0 max-lg:block max-lg:h-svh max-lg:bg-black/80 max-lg:backdrop-blur",
              )}
            >
              <nav className="top-0 left-1/2 col-span-3 flex items-center justify-center max-lg:mt-28 max-lg:text-center lg:absolute lg:-translate-x-1/2">
                <ul className="rtl:lg:bg-glass-gradient-to-e lg:bg-glass-gradient-to-s lg:border-gradient-to-s flex flex-col gap-10 px-8 py-2 text-2xl leading-loose font-medium text-white lg:flex-row lg:rounded-full lg:text-lg">
                  {links.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === link.href
                        : pathname.startsWith(link.href);

                    return (
                      <li key={link.key} className="relative">
                        <Link
                          href={link.href}
                          className={cn(
                            "hover:text-primary transition-colors max-lg:w-full max-lg:p-2",
                            isActive &&
                              "text-primary font-serif text-2xl font-medium after:absolute after:inset-0 after:start-1/2 after:top-full after:aspect-square after:size-[0.35rem] after:-translate-x-1/2 after:-translate-y-1.5 after:rounded-full after:bg-white lg:text-xl",
                          )}
                        >
                          {messages.Common[link.key]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="flex items-center justify-around gap-3 max-lg:container max-lg:mx-auto max-lg:mt-28 max-lg:w-xs lg:justify-end">
                {socials.map((social) => {
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      className="lg:bg-glass rounded-full p-4 transition-colors lg:hover:bg-white/20"
                      target="_blank"
                    >
                      <Image
                        src={social.icon}
                        className="size-6 lg:size-5"
                        unoptimized
                        alt={social.icon}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              className={cn(
                "bg-glass scale-90 rounded-full lg:hidden",
                isOpenMobile && "bg-transparent",
              )}
            >
              <Squeeze
                size={20}
                toggle={setIsOpenMobile}
                toggled={isOpenMobile}
                hideOutline
                rounded
              />
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
