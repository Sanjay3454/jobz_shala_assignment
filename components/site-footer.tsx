import { BrandLogo } from "@/components/brand-logo";
import type { LandingContent } from "@/content";

type SiteFooterProps = {
  content: LandingContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  const { footer } = content;

  return (
    <footer className="bg-[#001423] text-[#a0a19e]">
      <div className="mx-auto grid max-w-[1344px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] xl:px-0">
        <div>
          <BrandLogo
            name={content.brand.name}
            tagline={content.brand.tagline}
            compact
          />
          <p className="mt-6 max-w-[620px] text-sm leading-relaxed">
            {footer.description}
          </p>
        </div>

        <nav
          className="grid gap-10 sm:grid-cols-3"
          aria-label={footer.navLabel}
        >
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-[#eaebe8]">{column.title}</h2>
              <ul className="mt-6 grid gap-4 border-l border-[#2c3b52] pl-5 text-xs">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="transition-colors hover:text-white" href="#top">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#2c3b52] bg-[#0b1321]">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-5 px-5 py-7 text-xs sm:px-8 md:flex-row md:items-center md:justify-between xl:px-0">
          <p className="font-semibold">{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {footer.countries.map((country) => (
              <span key={country}>{country}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
