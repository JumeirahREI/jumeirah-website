import ContactUsForm from "@/components/contact-us-form";
import GlassCard from "@/components/ui/glass-card";
import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import footerImage from "../../public/images/footer-image.webp";
import emailIcon from "../../public/svg/email-icon.svg";
import facebookIcon from "../../public/svg/facebook.svg";
import instagramIcon from "../../public/svg/instagram.svg";
import linkedinIcon from "../../public/svg/linkedin.svg";
import locationIcon from "../../public/svg/location-icon.svg";
import phoneIcon from "../../public/svg/phone-icon.svg";
import twitterIcon from "../../public/svg/twitter.svg";

export default function ContactUsSection() {
  const t = useTranslations("ContactUs");
  const common = useTranslations("Common");
  const projects = useTranslations("ProjectTitles");

  return (
    <section className="relative">
      <div className="container grid grid-cols-1 gap-5 pb-16 lg:grid-cols-2">
        <ContactUsForm />
        <div className="flex flex-col gap-5">
          <Card className="space-y-5 text-lg xl:text-xl 2xl:space-y-7 2xl:text-2xl [&_p]:text-[#9C9C9C]">
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-5 xl:gap-10">
              <div className="flex items-center gap-4">
                <Icon src={phoneIcon} alt="Phone Icon" />
                <p>+(967) 778265522</p>
              </div>
              <div className="flex items-center gap-4">
                <Icon src={emailIcon} alt="Email Icon" />
                <p>info@jumeirahye.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon src={locationIcon} alt="Location Icon" />
              <p>{t("location")}</p>
            </div>
          </Card>
          <Card className="flex-grow space-y-8 [&_h5]:font-semibold [&_h5]:2xl:text-xl [&_li]:text-sm">
            <div className="inline-flex flex-col items-center text-center">
              <Logo className="w-16 2xl:w-24" />
              <div>
                <p className="text-lg font-black 2xl:text-2xl">
                  {common("jumeirah")}
                </p>
                <p className="text-[0.6rem]">{common("rei")}</p>
              </div>
            </div>
            <nav className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
              <div className="flex-1 space-y-4">
                <h5>{common("company")}</h5>
                <ul className="space-y-2 text-[#D2D2D2]">
                  <FooterLink href="/about">{common("about")}</FooterLink>
                  <FooterLink href="/contact">
                    {common("contact-us")}
                  </FooterLink>
                  <FooterLink href="/blog">{common("blog")}</FooterLink>
                </ul>
              </div>
              <div className="flex-1 space-y-4">
                <h5>{common("projects")}</h5>
                <ul className="space-y-2 text-[#D2D2D2]">
                  <FooterLink href="/projects">
                    {common("all-projects")}
                  </FooterLink>
                  <FooterLink href="/projects/sanaa-towers">
                    {projects("sanaa-towers-no-span")}
                  </FooterLink>
                  <FooterLink href="/projects/alhathaa-towers">
                    {projects("alhathaa-towers-no-span")}
                  </FooterLink>
                </ul>
              </div>
              <div className="col-span-2 space-y-4">
                <h5>{common("subscribe")}</h5>
                <p className="text-sm text-[#9C9C9C]">
                  {common("subscribe-description")}
                </p>
                <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
                  <SocialLink href="#" icon={linkedinIcon} alt="LinkedIn" />
                  <SocialLink href="#" icon={instagramIcon} alt="Instagram" />
                  <SocialLink href="#" icon={twitterIcon} alt="Twitter" />
                  <SocialLink href="#" icon={facebookIcon} alt="Facebook" />
                </div>
              </div>
            </nav>
          </Card>
        </div>
      </div>
      <Image
        src={footerImage}
        alt="Footer Image"
        fill
        className="-z-[9999] object-cover object-bottom"
      />
      <div className="to-background/0 from-background absolute top-0 right-0 left-0 -z-50 h-full bg-gradient-to-b via-90%" />
    </section>
  );
}

function Card({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  return (
    <GlassCard
      className={cn(
        "rounded-4xl p-6 backdrop-blur lg:rounded-[3rem] lg:p-8 2xl:p-10",
        className,
      )}
    >
      {children}
    </GlassCard>
  );
}

function Icon({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <Image
      src={src}
      width={32}
      height={32}
      className="size-6 2xl:size-9"
      alt={alt}
    />
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  icon,
  alt,
}: {
  href: string;
  icon: StaticImageData;
  alt: string;
}) {
  return (
    <Link
      href={href}
      aria-label={alt}
      className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg transition hover:bg-white/30"
    >
      <Image src={icon} alt={alt} width={16} height={16} className="size-4" />
    </Link>
  );
}
