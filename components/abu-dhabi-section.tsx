import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type AbuDhabiSectionProps = {
  content: LandingContent;
};

export function AbuDhabiSection({ content }: AbuDhabiSectionProps) {
  const { abuDhabi } = content;

  return (
    <section className="relative overflow-hidden bg-[#001423] px-5 pt-24 sm:px-8">
      <div className="relative z-10 mx-auto min-h-[430px] max-w-[1344px]">
        <SectionHeading title={abuDhabi.title} accent={abuDhabi.accent} />
        <p className="mt-7 max-w-[1250px] text-sm leading-relaxed text-[#b8bdc7]">
          {abuDhabi.description}
        </p>

        <Image
          className="absolute inset-x-0 -bottom-12 h-auto w-full object-contain object-bottom opacity-80"
          src="/images/figma-skyline.webp"
          alt=""
          width={1348}
          height={347}
        />
      </div>
    </section>
  );
}
