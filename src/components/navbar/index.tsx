"use client";

import { LocaleSwitcher } from "@/components/navbar/locale-switcher";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { NavigationLinks } from "@/components/navbar/navigation-links";
import { SocialLinks } from "@/components/navbar/social-links";
import Logo from "@/components/ui/logo";
import LogoType from "@/components/ui/logo-type";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Squeeze } from "hamburger-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 110;

export default function Navbar() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
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
    <nav className="fixed start-0 end-0 top-0 z-[999] !mb-0 md:py-4 lg:pointer-events-none lg:sticky">
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
              "rounded-2xl border-white/20 bg-[#00010151] backdrop-blur",
          )}
        >
          <Link
            href="/"
            className="pointer-events-auto z-[100] flex items-center gap-2 md:gap-3"
          >
            <Logo className="w-12 md:w-16 md:-translate-y-1 xl:w-24" />
            <LogoType />
          </Link>
          <div className="static hidden lg:block">
            <div className="pointer-events-auto top-1/2 left-1/2 col-span-3 flex -translate-y-1/2 items-center justify-center max-lg:mt-28 max-lg:text-center lg:absolute lg:-translate-x-1/2">
              <NavigationLinks
                className="rtl:lg:bg-glass-gradient-to-e lg:bg-glass-gradient-to-s lg:border-gradient-to-s flex flex-col gap-10 px-6 py-1.5 text-base leading-loose font-medium text-white lg:flex-row lg:rounded-full xl:px-8 xl:py-2 xl:text-lg"
                liClassName="relative"
                linkClassName="max-lg:w-full max-lg:p-2"
                activeLinkClassName="text-primary font-serif text-lg font-medium after:absolute after:inset-0 after:start-1/2 after:top-full after:aspect-square after:size-[0.35rem] after:-translate-x-1/2 after:-translate-y-1.5 after:rounded-full after:bg-white xl:text-xl"
              />
            </div>
            <div className="flex items-center gap-3">
              <LocaleSwitcher />
              <div className="h-8 w-px bg-white/50 xl:h-10" />
              <SocialLinks
                className="pointer-events-auto flex items-center justify-around gap-3 max-lg:container max-lg:mx-auto max-lg:mt-28 max-lg:w-xs lg:justify-end"
                anchorClassName="lg:bg-glass rounded-full p-3 transition-colors lg:hover:bg-white/20 xl:p-4"
                iconClassName="size-5 xl:size-5"
              />
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
          <MobileMenu
            isOpen={isOpenMobile}
            onClose={() => setIsOpenMobile(false)}
          />
        </div>
      </div>
    </nav>
  );
}
