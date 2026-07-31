import { m } from "motion/react";
import { LocaleSwitcher } from "./locale-switcher";
import { NavigationLinks } from "./navigation-links";
import { SocialLinks } from "./social-links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <m.div
      initial={{ opacity: 0, gridTemplateRows: "0fr" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        gridTemplateRows: isOpen ? "1fr" : "0fr",
      }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      className="col-span-2 grid overflow-hidden lg:hidden"
    >
      <div className="min-h-0 space-y-5 pt-10 pb-4">
        <div className="space-y-1">
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
      </div>
    </m.div>
  );
}
