import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type CorridorSectionProps = {
  content: LandingContent;
};

export function CorridorSection({ content }: CorridorSectionProps) {
  const { corridor } = content;

  return (
    <section className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={corridor.title} accent={corridor.accent} />

        <div className="mt-10 grid min-h-[330px] overflow-hidden rounded-2xl border border-[#2c3b52] bg-[linear-gradient(110deg,#071022,#002d40)] lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-14">
            <h3 className="text-2xl font-bold text-[#eaebe8]">
              {corridor.panelTitle}
            </h3>
            <p className="mt-7 max-w-[720px] text-sm leading-relaxed text-[#c2c6ce]">
              {corridor.description}
            </p>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              className="object-contain object-right px-6 py-8 sm:px-10"
              src="/images/figma-corridor.webp"
              alt={corridor.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
