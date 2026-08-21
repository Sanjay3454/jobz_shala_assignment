import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageToggle } from "@/components/language-toggle";
import type { LandingContent, Language } from "@/content";

type SiteHeaderProps = {
  content: LandingContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({
  content,
  language,
  onLanguageChange,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-[#ffc600] bg-[#002235] text-[#eaebe8]">
      <div className="mx-auto flex min-h-[79px] max-w-[1344px] items-center justify-between gap-8 px-5 sm:px-8 xl:px-0">
        <a
          className="flex w-[183px] shrink-0 flex-col justify-center"
          href="#top"
        >
          <BrandLogo name={content.brand.name} tagline={content.brand.tagline} />
        </a>

        <div className="hidden items-center gap-[43px] lg:flex">
          <nav
            className="flex items-center gap-1"
            aria-label={content.header.navLabel}
          >
            {content.header.nav.map((item) => (
              <a
                className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded px-3 text-sm transition-colors hover:bg-white/5 hover:text-white xl:px-4"
                href={item.href}
                key={item.label}
              >
                {item.label}
                {item.dropdown && (
                  <span
                    className="mb-1 size-1.5 rotate-45 border-b border-r border-current"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
            <LanguageToggle
              labels={content.language}
              language={language}
              onChange={onLanguageChange}
            />
          </nav>

          <a
            className="flex h-10 min-w-[194px] items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ffe795] to-[#ffc600] px-4 text-sm font-semibold text-[#003d5b] transition-opacity hover:opacity-90"
            href="#candidates"
          >
            {content.header.primaryAction}
            <span className="text-xl leading-none" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <button
          className="grid size-10 place-items-center rounded border border-[#1e375a] text-2xl text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc600] lg:hidden"
          type="button"
          aria-label={content.header.menuLabel}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="border-t border-[#1e375a] px-5 py-5 lg:hidden"
          id="mobile-navigation"
        >
          <nav
            className="mx-auto grid max-w-[1344px] gap-1"
            aria-label={content.header.navLabel}
          >
            {content.header.nav.map((item) => (
              <a
                className="rounded px-3 py-3 text-sm hover:bg-white/5"
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <LanguageToggle
                labels={content.language}
                language={language}
                onChange={onLanguageChange}
              />
              <a
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ffe795] to-[#ffc600] px-4 text-sm font-semibold text-[#003d5b]"
                href="#candidates"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.header.primaryAction}
                <span className="text-xl leading-none" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
