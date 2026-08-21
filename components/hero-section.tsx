import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import type { LandingContent } from "@/content";

type HeroSectionProps = {
  content: LandingContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const { hero } = content;

  return (
    <section className="bg-[#001423]" id="top">
      <div className="relative isolate overflow-hidden">
        <Image
          className="object-contain object-right-bottom"
          src="/images/figma-hero.webp"
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#001423_0%,#001423_34%,rgba(0,20,35,0.86)_47%,rgba(0,20,35,0.08)_78%)]" />

        <div className="relative mx-auto flex min-h-[519px] max-w-[1344px] items-center px-5 py-16 sm:px-8 xl:px-0">
          <div className="max-w-[625px]">
            <p className="mb-7 inline-flex items-center gap-2 rounded-md border border-[#007cb3]/60 bg-[#002b3e]/80 px-4 py-2 text-xs text-[#9dd6ff] shadow-[0_0_22px_rgba(0,155,223,0.18)] sm:text-sm">
              <span aria-hidden="true">✦</span>
              {hero.badge}
            </p>

            <h1 className="font-display max-w-[625px] text-4xl font-bold leading-[1.18] text-[#f9f9f8] sm:text-5xl lg:text-[49px]">
              {hero.title} <em>{hero.titleEmphasis}</em>{" "}
              <em className="text-[#00aeef]">{hero.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-[520px] text-sm leading-relaxed text-[#d6d8d4]">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#candidates" className="sm:min-w-[194px]">
                {hero.primaryAction}
              </ButtonLink>
              <ButtonLink
                href="#candidates"
                variant="outline"
                className="sm:min-w-[262px]"
              >
                {hero.secondaryAction}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#4d4e4d] bg-[#001423]">
        <div className="mx-auto flex min-h-[69px] max-w-[1344px] flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 sm:px-8 xl:px-0">
          {hero.highlights.map((highlight) => (
            <p
              className="flex items-center gap-3 text-sm text-[#eaebe8]"
              key={highlight}
            >
              <span className="text-[#9dd6ff]" aria-hidden="true">
                ✦
              </span>
              {highlight}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
