"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const DESIGNS = [
  { href: "/", id: "1", label: "Design 1" },
  { href: "/design-2", id: "2", label: "Design 2" },
  { href: "/design-3", id: "3", label: "Design 3" },
  { href: "/design-4", id: "4", label: "Design 4" },
  { href: "/design-5", id: "5", label: "Design 5" },
  { href: "/design-6", id: "6", label: "Design 6" },
] as const;

type Tone = "light" | "dark" | "soft" | "editorial" | "acid";

const tones: Record<
  Tone,
  { wrap: string; link: string; active: string; label: string }
> = {
  light: {
    wrap: "border border-black/10 bg-white/70 backdrop-blur-md",
    link: "text-[#1a1a1a]/45 hover:text-[#1a1a1a]",
    active: "bg-[#1a1a1a] text-white",
    label: "text-[#1a1a1a]/35",
  },
  dark: {
    wrap: "border border-white/15 bg-black/40 backdrop-blur-md",
    link: "text-white/40 hover:text-white",
    active: "bg-[#CCFF00] text-black",
    label: "text-white/30",
  },
  soft: {
    wrap: "border border-[#e7e5e4] bg-white/80 backdrop-blur-md",
    link: "text-[#78716c] hover:text-[#292524]",
    active: "bg-[#292524] text-[#fdfcf8]",
    label: "text-[#a8a29e]",
  },
  editorial: {
    wrap: "border border-[#e5e4de] bg-[#f7f6f2]/90 backdrop-blur-md",
    link: "text-[#1c1c1c]/40 hover:text-[#1c1c1c]",
    active: "bg-[#3d7068] text-white",
    label: "text-[#1c1c1c]/30",
  },
  acid: {
    wrap: "border border-[#CCFF00]/35 bg-black/70 backdrop-blur-md",
    link: "text-white/40 hover:text-[#CCFF00]",
    active: "bg-[#CCFF00] text-black",
    label: "text-white/30",
  },
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type DesignSwitcherProps = {
  tone?: Tone;
  className?: string;
  /** Compact short labels (D1…) vs Design 1 */
  compact?: boolean;
  onNavigate?: () => void;
};

export function DesignSwitcher({
  tone = "light",
  className = "",
  compact = true,
  onNavigate,
}: DesignSwitcherProps) {
  const pathname = usePathname() || "/";
  const t = tones[tone];

  return (
    <nav
      aria-label="Design versions"
      className={`inline-flex items-center gap-0.5 rounded-full p-1 ${t.wrap} ${className}`}
    >
      <span
        className={`hidden pl-2 pr-1 text-[9px] font-semibold uppercase tracking-[0.16em] sm:inline ${t.label}`}
      >
        Designs
      </span>
      {DESIGNS.map((d) => {
        const active = isActive(pathname, d.href);
        return (
          <Link
            key={d.href}
            href={d.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition ${
              active ? t.active : t.link
            }`}
          >
            {compact ? `D${d.id}` : d.label}
          </Link>
        );
      })}
    </nav>
  );
}
