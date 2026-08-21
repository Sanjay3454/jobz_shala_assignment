import type { Metadata } from "next";
import type { ReactNode } from "react";
import { enContent } from "@/content/en";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/lato/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: enContent.meta.title,
  description: enContent.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
