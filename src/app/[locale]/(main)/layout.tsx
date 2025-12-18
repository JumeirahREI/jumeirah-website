import Footer from "@/components/footer";

export default function MainLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
