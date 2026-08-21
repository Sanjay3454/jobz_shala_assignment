"use client";

import { useState } from "react";
import { AbuDhabiSection } from "@/components/abu-dhabi-section";
import { AvailabilitySection } from "@/components/availability-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ChallengeSection } from "@/components/challenge-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CorridorSection } from "@/components/corridor-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { PlatformSection } from "@/components/platform-section";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { VisionSection } from "@/components/vision-section";
import { translations, type Language } from "@/content";

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("en");
  const content = translations[language];

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <div className="min-h-screen bg-black text-[#f9f9f8]">
      <SiteHeader
        content={content}
        language={language}
        onLanguageChange={changeLanguage}
      />
      <main>
        <HeroSection content={content} />
        <TrustSection content={content} />
        <ChallengeSection content={content} />
        <ProcessSection content={content} />
        <BenefitsSection content={content} />
        <PlatformSection content={content} />
        <AvailabilitySection content={content} />
        <CorridorSection content={content} />
        <ComparisonSection content={content} />
        <IndustriesSection content={content} />
        <AbuDhabiSection content={content} />
        <VisionSection content={content} />
        <CtaSection content={content} />
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
