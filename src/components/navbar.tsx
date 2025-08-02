import Logo from "@/components/ui/logo";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
];

export default function Navbar() {
  const t = useTranslations("Common");
  return (
    <nav className="container mx-auto grid grid-cols-3">
      <Logo />
      <div>
        <ul className="text-white flex gap-4 font-serif">
          {links.map((link) => {
            return (
              <Link key={link.key} href={link.href}>
                {t(link.key)}
              </Link>
            );
          })}
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
