import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { LandingContent } from "@/content";

type ChallengeSectionProps = {
  content: LandingContent;
};

export function ChallengeSection({ content }: ChallengeSectionProps) {
  const { challenge } = content;

  return (
    <section className="bg-black px-5 pb-24 sm:px-8" id="solutions">
      <div className="mx-auto max-w-[1344px]">
        <SectionHeading title={challenge.title} accent={challenge.accent} />

        <div className="mt-10 rounded-2xl border border-[#2c3b52] bg-[linear-gradient(115deg,#071022_0%,#001f31_100%)] px-6 py-10 sm:px-12">
          <h3 className="text-xl font-bold text-[#eaebe8] sm:text-2xl">
            {challenge.panelTitle}
          </h3>
          <p className="mt-4 max-w-[1180px] text-sm leading-relaxed text-[#b8bdc7]">
            {challenge.description}
          </p>

          <div className="relative mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-end">
            <Image
              className="pointer-events-none absolute bottom-[-25px] left-1/2 hidden w-[650px] -translate-x-1/2 object-contain opacity-80 lg:block"
              src="/images/figma-bridge.webp"
              alt=""
              width={704}
              height={302}
            />
            <ChallengeList
              section={challenge.employers}
              icon="/images/figma-challenge-employer.svg"
            />

            <div className="relative z-10 mx-auto w-full max-w-[330px] rounded-lg bg-[#ffc600] p-5 text-[#001423] shadow-[0_18px_50px_rgba(255,198,0,0.12)]">
              <Image
                src="/images/figma-challenge-mission.svg"
                alt=""
                width={60}
                height={60}
              />
              <h3 className="mt-2 text-xl font-bold">{challenge.mission.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-snug">
                {challenge.mission.description}
              </p>
              <a
                className="mt-5 block rounded-lg border border-[#003d5b] px-4 py-2 text-center text-sm"
                href="#about"
              >
                {challenge.mission.action}
              </a>
            </div>

            <ChallengeList
              section={challenge.candidates}
              icon="/images/figma-challenge-candidate.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ChallengeListProps = {
  section: LandingContent["challenge"]["employers"];
  icon: string;
};

function ChallengeList({ section, icon }: ChallengeListProps) {
  return (
    <div className="relative z-10">
      <Image
        className="h-[60px] w-[60px] object-contain object-left"
        src={icon}
        alt=""
        width={60}
        height={60}
      />
      <h3 className="mt-3 text-xl font-bold text-[#eaebe8]">{section.title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-[#d6d8d4]">
        {section.points.map((point) => (
          <li className="flex gap-3" key={point}>
            <span aria-hidden="true">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
