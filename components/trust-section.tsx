import Image from "next/image";
import type { LandingContent } from "@/content";

type TrustSectionProps = {
  content: LandingContent;
};

const countryFlags = [
  "/images/figma-flag-uae.webp",
  "/images/figma-flag-saudi.webp",
  "/images/figma-flag-qatar.webp",
  "/images/figma-flag-oman.webp",
  "/images/figma-flag-kuwait.webp",
  "/images/figma-flag-bahrain.webp",
];

export function TrustSection({ content }: TrustSectionProps) {
  const { trust } = content;

  return (
    <section className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1344px]">
        <h2 className="text-2xl font-bold text-[#eaebe8]">{trust.title}</h2>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.08fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-[#a0a19e]">
              {trust.sectorsLabel}
            </p>
            <div className="min-h-[52px] rounded-2xl border border-[#2c3b52] bg-[#071022] px-5 py-4 text-sm font-light text-white">
              {trust.sectors}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-[#a0a19e]">
              {trust.countriesLabel}
            </p>
            <div className="flex min-h-[52px] flex-wrap items-center rounded-2xl border border-[#2c3b52] bg-[#071022] px-3 py-1">
              {trust.countries.map((country, index) => (
                <span
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white"
                  key={country.name}
                >
                  <Image
                    className="size-5 rounded-full"
                    src={countryFlags[index]}
                    alt=""
                    width={20}
                    height={20}
                  />
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-4 grid overflow-hidden rounded-2xl border border-[#2c3b52] bg-[#071022] sm:grid-cols-2 lg:grid-cols-5">
          {trust.stats.map((stat) => (
            <div
              className="border-b border-[#2c3b52] px-5 py-8 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              key={stat.label}
            >
              <dt className="text-4xl font-light text-[#f9f9f8] sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs text-[#a0a19e]">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-[#2c3b52] bg-[#071022] px-5 py-4">
          {trust.assurances.map((item) => (
            <p className="flex items-center gap-2 text-xs text-[#a0a19e]" key={item}>
              <span className="text-[#9dd6ff]" aria-hidden="true">
                ✦
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
