import ContactUsSection from "@/components/contact-us-section";

export default function MainLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <div>{children}</div>
      <ContactUsSection />
    </>
  );
}
