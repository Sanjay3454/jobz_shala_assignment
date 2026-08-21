import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import type { LandingContent } from "@/content";

type CtaSectionProps = {
  content: LandingContent;
};

export function CtaSection({ content }: CtaSectionProps) {
  const { finalCta } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8" id="candidates">
      <div className="mx-auto grid max-w-[1344px] gap-5 lg:grid-cols-2">
        <CtaCard
          content={finalCta.employer}
          image="/images/figma-employer-cta.webp"
          actionVariant="primary"
          background="bg-[#10afe9]"
        />
        <CtaCard
          content={finalCta.candidate}
          image="/images/figma-worker-cta.webp"
          actionVariant="dark"
          background="bg-[#ffc600]"
        />
      </div>
    </section>
  );
}

type CtaCardProps = {
  content: LandingContent["finalCta"]["employer"];
  image: string;
  actionVariant: "primary" | "dark";
  background: string;
};

function CtaCard({
  content,
  image,
  actionVariant,
  background,
}: CtaCardProps) {
  return (
    <article
      className={`relative min-h-[300px] overflow-hidden rounded-2xl ${background}`}
    >
      <div className="relative z-10 flex max-w-full flex-col px-7 py-9 text-[#001423] sm:min-h-[300px] sm:max-w-[64%] sm:justify-center sm:px-12 sm:py-10 lg:max-w-[58%]">
        <h2 className="text-2xl font-bold sm:text-3xl">{content.title}</h2>
        <p className="mt-5 text-sm leading-relaxed">{content.description}</p>
        <ButtonLink
          href="#top"
          variant={actionVariant}
          className="mt-7 w-fit"
        >
          {content.action}
        </ButtonLink>
      </div>
      <div className="relative h-[240px] sm:absolute sm:inset-0 sm:h-auto">
        <Image
          className="object-contain object-right-bottom"
          src={image}
          alt={content.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 672px"
        />
      </div>
    </article>
  );
}
