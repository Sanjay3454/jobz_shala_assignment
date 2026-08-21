import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type ComparisonSectionProps = {
  content: LandingContent;
};

export function ComparisonSection({ content }: ComparisonSectionProps) {
  const { comparison } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={comparison.title} accent={comparison.accent} />

        <div className="relative mt-10 min-h-[500px] overflow-hidden rounded-2xl border border-[#2c3b52] bg-[#001b2b]">
          <Image
            className="object-contain object-right-bottom"
            src="/images/figma-comparison.webp"
            alt={comparison.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1344px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#001b2b_0%,#001b2b_45%,rgba(0,27,43,0.82)_57%,rgba(0,27,43,0.02)_100%)]" />

          <div className="relative z-10 max-w-[720px] px-7 py-12 sm:px-14">
            <h3 className="text-2xl font-bold text-[#eaebe8]">
              {comparison.panelTitle}
            </h3>
            <div className="mt-10 grid gap-7 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <ComparisonList
                title={comparison.traditionalTitle}
                items={comparison.traditional}
                positive={false}
              />
              <span className="grid size-14 place-items-center rounded-full bg-[#009bdf] text-sm font-bold text-white shadow-[0_0_25px_rgba(0,155,223,0.45)]">
                {comparison.versus}
              </span>
              <ComparisonList
                title={comparison.jobzshalaTitle}
                items={comparison.jobzshala}
                positive
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ComparisonListProps = {
  title: string;
  items: string[];
  positive: boolean;
};

function ComparisonList({ title, items, positive }: ComparisonListProps) {
  return (
    <div>
      <h4 className={`text-sm font-bold ${positive ? "text-[#ffc600]" : "text-white"}`}>
        {title}
      </h4>
      <ul className="mt-5 grid gap-4 text-sm text-[#c2c6ce]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span
              className={positive ? "text-[#00e500]" : "text-[#ff4e52]"}
              aria-hidden="true"
            >
              {positive ? "✓" : "×"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
