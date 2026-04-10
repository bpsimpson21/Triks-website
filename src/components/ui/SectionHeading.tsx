interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl md:text-4xl font-bold text-stone-900">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-stone-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
