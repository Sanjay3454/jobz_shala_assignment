import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type AvailabilitySectionProps = {
  content: LandingContent;
};

export function AvailabilitySection({ content }: AvailabilitySectionProps) {
  const { availability } = content;

  return (
    <section className="bg-[#001423] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={availability.title} accent={availability.accent} />

        <div className="mt-10 grid overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px] bg-[#071022]">
            <Image
              className="object-cover"
              src="/images/figma-gcc-map.webp"
              alt={availability.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#064564] px-7 py-12 sm:px-16">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {availability.cardTitle}
            </h3>
            <p className="mt-8 max-w-[640px] text-xl leading-relaxed text-[#eaebe8] sm:text-2xl">
              {availability.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
