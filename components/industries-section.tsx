import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type IndustriesSectionProps = {
  content: LandingContent;
};

export function IndustriesSection({ content }: IndustriesSectionProps) {
  const { industries } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={industries.title} accent={industries.accent} />
        <div className="mt-9 flex flex-wrap gap-3">
          {industries.items.map((item) => (
            <span
              className="rounded-xl border border-[#2c3b52] bg-[#071022] px-5 py-3 text-sm text-[#c2c6ce]"
              key={item}
            >
              <span className="mr-3 text-[#9dd6ff]" aria-hidden="true">
                •
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
