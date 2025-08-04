"use client";

import Logo from "@/components/ui/logo";
import LogoType from "@/components/ui/logo-type";
import { useMessages } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Navbar() {
  const messages = useMessages();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 container mx-auto grid grid-cols-5">
      <div className="flex items-baseline gap-2">
        <Logo />
        <LogoType />
      </div>
      <nav className="col-span-3 flex items-center justify-center">
        <ul className="bg-gradient-light flex gap-10 rounded-full px-8 py-1 text-lg leading-loose font-medium text-white">
          {links.map((link) => {
            return (
              <li key={link.key} className="relative">
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "text-primary font-serif text-xl font-medium after:absolute after:inset-0 after:start-1/2 after:top-full after:aspect-square after:size-[0.35rem] after:-translate-x-1/2 after:-translate-y-2 after:rounded-full after:bg-white"
                      : ""
                  }
                >
                  {messages.Common[link.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div></div>
    </nav>
  );
}
