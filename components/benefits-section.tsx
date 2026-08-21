import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type BenefitsSectionProps = {
  content: LandingContent;
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  const { benefits } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8" id="employers">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={benefits.title} accent={benefits.accent} />

        <div className="relative mt-10 min-h-[500px] overflow-hidden rounded-2xl border border-[#2c3b52] bg-[#001b2b]">
          <Image
            className="object-contain object-right-bottom"
            src="/images/figma-employer-team.webp"
            alt={benefits.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1344px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#001b2b_0%,#001b2b_44%,rgba(0,27,43,0.88)_58%,rgba(0,27,43,0.04)_100%)]" />

          <div className="relative z-10 flex min-h-[500px] max-w-[720px] flex-col justify-center px-6 py-12 sm:px-12">
            <h3 className="max-w-[470px] text-2xl font-bold leading-snug text-[#eaebe8] sm:text-3xl">
              {benefits.panelTitle}
            </h3>
            <div className="mt-7 flex max-w-[660px] flex-wrap gap-3">
              {benefits.tags.map((tag) => (
                <span
                  className="rounded-full border border-[#2c3b52] bg-[#071022]/90 px-4 py-3 text-xs text-[#a0a19e]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <blockquote className="mt-10 max-w-[620px] text-xl font-bold leading-relaxed text-[#ffc600] sm:text-2xl">
              “ {benefits.quote} ”
            </blockquote>
            <ButtonLink href="#resources" className="mt-8 w-fit">
              {benefits.action}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
