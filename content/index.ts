import { enContent } from "./en";
import { hiContent } from "./hi";

export const translations = {
  en: enContent,
  hi: hiContent,
};

export type Language = keyof typeof translations;
export type { LandingContent } from "./en";
