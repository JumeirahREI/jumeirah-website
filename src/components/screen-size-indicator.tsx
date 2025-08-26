export default function ScreenSizeIndicator() {
  return (
    <div className="fixed top-0 left-0 z-[9999] bg-white p-4 text-3xl">
      <p className="sm:hidden">DEFAULT</p>
      <p className="hidden sm:block md:hidden">SM</p>
      <p className="hidden md:block lg:hidden">MD</p>
      <p className="hidden lg:block xl:hidden">LG</p>
      <p className="hidden xl:block 2xl:hidden">XL</p>
      <p className="max-2xl:hidden">XL</p>
    </div>
  );
}
