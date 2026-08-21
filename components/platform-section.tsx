import Image from "next/image";
import type { LandingContent } from "@/content";

type PlatformSectionProps = {
  content: LandingContent;
};

export function PlatformSection({ content }: PlatformSectionProps) {
  const { verification, visibility } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8">
      <div className="mx-auto grid max-w-[1344px] gap-16">
        <div className="grid min-h-[210px] items-center gap-8 rounded-2xl border border-[#2c3b52] bg-[linear-gradient(110deg,#071022,#002d40)] px-7 py-10 sm:px-14 lg:grid-cols-[1fr_220px]">
          <div>
            <h2 className="text-2xl font-bold text-[#eaebe8]">
              {verification.title}
            </h2>
            <p className="mt-5 max-w-[1000px] text-sm leading-relaxed text-[#c2c6ce]">
              {verification.description}
            </p>
          </div>
          <Image
            className="mx-auto h-auto w-28 object-contain"
            src="/images/figma-trust.webp"
            alt=""
            width={167}
            height={179}
          />
        </div>

        <div className="rounded-2xl border border-[#2c3b52] bg-[linear-gradient(110deg,#071022,#002d40)] px-7 py-10 sm:px-14">
          <h2 className="text-2xl font-bold text-[#eaebe8]">{visibility.title}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {visibility.tools.map((tool) => (
              <span
                className="flex items-center gap-2 rounded-xl border border-[#2c3b52] bg-[#071022] px-4 py-3 text-sm text-[#c2c6ce]"
                key={tool}
              >
                <span className="text-[#9dd6ff]" aria-hidden="true">
                  ✦
                </span>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
