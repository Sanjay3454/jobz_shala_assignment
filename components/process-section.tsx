import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type ProcessSectionProps = {
  content: LandingContent;
};

const processIcons = [
  "/images/figma-process-employer.webp",
  "/images/figma-process-ai-review.webp",
  "/images/figma-process-profile.webp",
  "/images/figma-process-interview.webp",
  "/images/figma-process-offer.webp",
  "/images/figma-process-travel.webp",
  "/images/figma-process-support.webp",
];

export function ProcessSection({ content }: ProcessSectionProps) {
  const { process } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8" id="resources">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={process.title} accent={process.accent} />

        <div className="mt-10 rounded-2xl border border-[#2c3b52] bg-[#071022] px-5 py-9 sm:px-8">
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-7 lg:gap-3">
            {process.steps.map((step, index) => (
              <li className="relative" key={step.title}>
                <div className="flex h-full min-h-[232px] flex-col items-center rounded bg-[#002b3e] px-3 py-5 text-center">
                  <span className="grid size-7 place-items-center rounded-full bg-[#009bdf] text-xs font-bold text-white shadow-[0_0_16px_rgba(0,155,223,0.8)]">
                    {index + 1}
                  </span>
                  <Image
                    className="mt-5 h-16 w-20 object-contain"
                    src={processIcons[index]}
                    alt=""
                    width={80}
                    height={64}
                  />
                  <p className="mt-5 text-xs leading-snug text-[#eaebe8]">
                    {step.title}
                  </p>
                </div>
                {index < process.steps.length - 1 && (
                  <span
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-[#ffc600] lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm font-semibold text-[#d6d8d4]">
            {process.note}
          </p>
        </div>
      </div>
    </section>
  );
}
