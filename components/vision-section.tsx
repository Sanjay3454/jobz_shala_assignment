import Image from "next/image";
import type { LandingContent } from "@/content";

type VisionSectionProps = {
  content: LandingContent;
};

export function VisionSection({ content }: VisionSectionProps) {
  const { vision } = content;

  return (
    <section className="bg-black px-5 py-24 sm:px-8" id="about">
      <div className="mx-auto max-w-[1344px]">
        <h2 className="text-3xl font-bold text-[#f9f9f8] sm:text-4xl">
          {vision.eyebrow}
        </h2>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#2c3b52] bg-[linear-gradient(110deg,#071022,#002d40)] lg:grid-cols-[0.95fr_1.1fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12">
            <h3 className="text-2xl font-bold leading-snug text-[#eaebe8] sm:text-3xl">
              {vision.title}
            </h3>
            <div className="mt-8 grid gap-5 text-sm leading-relaxed text-[#c2c6ce]">
              {vision.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <Image
              className="object-cover"
              src="/images/figma-vision.webp"
              alt={vision.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
