"use client";

import Logo from "@/components/ui/logo";
import LogoType from "@/components/ui/logo-type";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Squeeze } from "hamburger-react";
import { m, Variants } from "motion/react";
import { useMessages } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
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

const SCROLL_THRESHOLD = 110;

const navMenuVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};
export default function Navbar() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const messages = useMessages();
  const pathname = usePathname();
  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setShowNavBackground(true);
      } else {
        setShowNavBackground(false);
      }
      setIsOpenMobile(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsOpenMobile]);

  useEffect(() => {
    setIsOpenMobile(false);
  }, [pathname]);

  return (
    <nav className="fixed start-0 end-0 top-0 z-[9999] md:py-4 lg:pointer-events-none lg:sticky">
      <div
        aria-hidden
        className={cn(
          "from-background to-background/0 pointer-events-none fixed inset-0 start-0 -top-4 hidden h-64 w-8/12 -translate-x-1/2 -translate-y-1/2 bg-radial opacity-0 blur-2xl transition-opacity duration-500 ease-in-out lg:block rtl:translate-x-1/2",
          showNavBackground && "opacity-80",
        )}
      />
      <div className="container max-lg:pt-2 max-md:!px-3">
        <div
          className={cn(
            "transition-[border-radius, backdrop-filter, background-color, border-color] mx-auto grid grid-cols-2 items-center justify-between rounded-md border border-white/0 backdrop-blur-none duration-400 max-lg:px-4 max-lg:py-1 lg:relative lg:container lg:flex lg:border-none lg:bg-transparent lg:backdrop-blur-none",
            (showNavBackground || isOpenMobile) &&
              "bg-background/40 rounded-2xl border-white/20 backdrop-blur",
          )}
        >
          <Link
            href="/"
            className="pointer-events-auto z-[100] flex items-baseline gap-2 md:items-center md:gap-3"
          >
            <Logo className="w-[3.5rem] md:w-20 md:-translate-y-1 lg:w-24" />
            <LogoType />
          </Link>
          <div className="static hidden lg:block">
            <nav className="pointer-events-auto top-0 left-1/2 col-span-3 flex items-center justify-center max-lg:mt-28 max-lg:text-center lg:absolute lg:-translate-x-1/2">
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
                        onClick={(e) => {
                          if (pathname === link.href) {
                            e.preventDefault();
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {messages.Common[link.key]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="pointer-events-auto flex items-center justify-around gap-3 max-lg:container max-lg:mx-auto max-lg:mt-28 max-lg:w-xs lg:justify-end">
              {socials.map((social) => {
                return (
                  <a
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
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pointer-events-auto justify-self-end lg:hidden">
            <Squeeze
              size={20}
              toggle={setIsOpenMobile}
              toggled={isOpenMobile}
              hideOutline
              rounded
            />
          </div>
          <m.div
            variants={navMenuVariants}
            initial="closed"
            animate={isOpenMobile ? "open" : "closed"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="col-span-2 lg:hidden"
          >
            <ul className="space-y-2 py-4 text-lg">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.key} className="relative">
                    <Link
                      href={link.href}
                      prefetch
                      className={cn(
                        "hover:text-primary transition-colors max-lg:w-full max-lg:p-2",
                        isActive && "text-primary font-serif font-medium",
                      )}
                      onClick={(e) => {
                        if (pathname === link.href) {
                          e.preventDefault();
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }
                        setIsOpenMobile(false);
                      }}
                    >
                      {messages.Common[link.key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </div>
      </div>
    </nav>
  );
}
