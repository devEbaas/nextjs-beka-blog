interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-semibold text-2xl lg:text-3xl text-white">
      <span className="text-brand">#</span>{title}
    </h2>
  );
}