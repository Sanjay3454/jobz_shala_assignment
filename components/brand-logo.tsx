type BrandLogoProps = {
  name: string;
  tagline: string;
  compact?: boolean;
};

export function BrandLogo({ name, tagline, compact = false }: BrandLogoProps) {
  return (
    <span className="flex flex-col" aria-label={name}>
      <span
        className={`flex items-center font-semibold leading-none ${
          compact ? "text-2xl" : "text-[25px]"
        }`}
        aria-hidden="true"
      >
        <span className="text-white">
          j<span className="text-[#ffc600]">o</span>bz
        </span>
        <span className="rounded-[2px] bg-[#ffc600] px-1 py-0.5 text-white">
          shala
        </span>
      </span>
      <span className="mt-1 text-center text-[9px] leading-none text-[#dfe0dd]">
        {tagline}
      </span>
    </span>
  );
}
