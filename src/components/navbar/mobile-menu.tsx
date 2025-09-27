import { easings } from "@/lib/easings";
import { m, Variants } from "motion/react";
import { LocaleSwitcher } from "./locale-switcher";
import { NavigationLinks } from "./navigation-links";
import { SocialLinks } from "./social-links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const navMenuVariants: Variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <m.div
      variants={navMenuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2, ease: easings.gentleEaseOut }}
      className="col-span-2 space-y-5 overflow-hidden lg:hidden"
    >
      <div className="space-y-1 pt-10 pb-4">
        <NavigationLinks
          onLinkClick={() => onClose?.()}
          className="flex-col items-stretch gap-2 text-center text-lg"
          linkClassName="block p-2 !text-2xl"
          animated
          isOpen={isOpen}
          stagger={0.08}
        />
      </div>
      <div className="px-4 pb-2">
        <LocaleSwitcher
          variant="mobile"
          className="justify-center gap-6"
          onSelect={() => onClose?.()}
          animated
          stagger={0.08}
          isOpen={isOpen}
        />
      </div>
      <div className="mx-auto flex items-center justify-around gap-3 p-4">
        <SocialLinks
          className="flex gap-4"
          iconClassName="size-6"
          anchorClassName="rounded-full p-4 transition-colors active:bg-white/20"
          animated
          isOpen={isOpen}
          stagger={0.1}
        />
      </div>
    </m.div>
  );
}
