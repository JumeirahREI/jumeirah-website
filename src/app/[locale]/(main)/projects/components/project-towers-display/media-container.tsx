export default function MediaContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      // layout
      // transition={{ duration: 0.3, ease: "easeInOut" }}
      // layoutId="mediaContainer"
      className={`overflow-hidden rounded-[2.5rem] border-[#7A7A7A]/30 from-[#1A1A1A]/0 to-[#1A1A1A] lg:border-2 lg:bg-linear-[94deg] lg:backdrop-blur-2xl rtl:lg:bg-linear-[266deg] ${className}`}
    >
      {children}
    </div>
  );
}
