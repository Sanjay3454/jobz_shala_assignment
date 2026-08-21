type SectionHeadingProps = {
  title: string;
  accent: string;
};

export function SectionHeading({ title, accent }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold leading-tight text-[#f9f9f8] sm:text-4xl">
      {title} <em className="text-[#00aeef]">{accent}</em>
    </h2>
  );
}
