"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const DESIGNS = [
  { href: "/", id: "H", label: "Home" },
  { href: "/design-1", id: "1", label: "Design 1" },
  { href: "/design-2", id: "2", label: "Design 2" },
  { href: "/design-3", id: "3", label: "Design 3" },
  { href: "/design-5", id: "5", label: "Design 5" },
  { href: "/design-6", id: "6", label: "Design 6" },
] as const;

type Tone = "editorial" | "acid" | "dark" | "cinematic" | "encore" | "kiln";

const tones: Record<
  Tone,
  { wrap: string; link: string; active: string; label: string }
> = {
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
  dark: {
    wrap: "border border-[rgba(92,196,196,0.28)] bg-black/50 backdrop-blur-md",
    link: "text-white/40 hover:text-[#5CC4C4]",
    active: "bg-[#5CC4C4] text-[#041011]",
    label: "text-white/30",
  },
  cinematic: {
    wrap: "border border-white/15 bg-white/5 backdrop-blur-[8px]",
    link: "text-white/45 hover:text-white",
    active: "bg-white text-black",
    label: "text-white/30",
  },
  encore: {
    wrap: "border border-[#F5F2EE6B] bg-[#0A0E1438] backdrop-blur-md",
    link: "text-[#F8F6F3A8] hover:text-[#F8F6F3]",
    active: "bg-[#F8F6F3] text-[#0E0F12]",
    label: "text-[#F8F6F385]",
  },
  kiln: {
    wrap: "border border-white/10 bg-black/50 backdrop-blur-md",
    link: "text-white/40 hover:text-[#5CC4C4]",
    active: "bg-[#5CC4C4] text-[#0A0A0A]",
    label: "text-white/30",
  },
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "/team" || pathname === "/library";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

type DesignSwitcherProps = {
  tone?: Tone;
  className?: string;
  compact?: boolean;
  onNavigate?: () => void;
};

export function DesignSwitcher({
  tone = "dark",
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
            className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition duration-200 ${
              active ? t.active : t.link
            }`}
          >
            {compact ? (d.id === "H" ? "Home" : `D${d.id}`) : d.label}
          </Link>
        );
      })}
    </nav>
  );
}
