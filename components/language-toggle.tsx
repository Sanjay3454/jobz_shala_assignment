import type { LandingContent, Language } from "@/content";

type LanguageToggleProps = {
  language: Language;
  labels: LandingContent["language"];
  onChange: (language: Language) => void;
};

const languages: Language[] = ["en", "hi"];

export function LanguageToggle({
  language,
  labels,
  onChange,
}: LanguageToggleProps) {
  return (
    <div className="relative h-10 w-[81px] shrink-0">
      <select
        className="h-full w-full appearance-none rounded-xl border border-[#1e375a] bg-[#002235] px-4 pr-8 text-sm text-[#eaebe8] outline-none transition-colors hover:border-[#49627c] focus-visible:border-[#ffc600] focus-visible:ring-2 focus-visible:ring-[#ffc600]/40"
        aria-label={labels.label}
        value={language}
        onChange={(event) => onChange(event.target.value as Language)}
      >
        {languages.map((option) => (
          <option className="bg-[#002235]" key={option} value={option}>
            {labels.shortOptions[option]}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-4 top-[15px] size-1.5 rotate-45 border-b border-r border-[#eaebe8]"
        aria-hidden="true"
      />
    </div>
  );
}
