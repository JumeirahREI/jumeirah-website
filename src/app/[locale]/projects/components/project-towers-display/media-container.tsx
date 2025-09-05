export default function MediaContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2.5rem] border-2 border-[#7A7A7A]/30 bg-linear-[94deg] from-[#1A1A1A]/0 to-[#1A1A1A] backdrop-blur-2xl rtl:bg-linear-[266deg] ${className}`}
    >
      {children}
    </div>
  );
}
