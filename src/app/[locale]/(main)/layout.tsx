import ContactUsSection from "@/components/contact-us-section";
import FAQsSection from "@/components/faqs-section";

export default function MainLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <div>{children}</div>
      <FAQsSection />
      <ContactUsSection />
    </>
  );
}
