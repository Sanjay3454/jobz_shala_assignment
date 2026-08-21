import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
};

const styles = {
  primary:
    "bg-gradient-to-b from-[#ffe795] to-[#ffc600] text-[#003d5b] hover:brightness-105",
  outline:
    "border border-[#a0a19e] bg-transparent text-[#f3f4f2] hover:border-white",
  dark: "border border-[#003d5b] bg-transparent text-[#003d5b] hover:bg-black/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${styles[variant]} ${className}`}
      href={href}
    >
      {children}
      <span className="text-xl leading-none" aria-hidden="true">
        →
      </span>
    </a>
  );
}
