"use client";

import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#moments", label: "Moments" },
  { href: "#room", label: "The room" },
  { href: "#stories", label: "Stories" },
];

export function D4Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="d4-nav">
      <div className="d4-nav__bar">
        <a
          href="/design-4"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#ffb7b2]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-[14px] font-medium text-[#292524]">
            BusinessBar
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-[#78716c] transition hover:text-[#292524]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DesignSwitcher tone="soft" className="hidden sm:inline-flex" />
          <a
            href="#waitlist"
            className="hidden h-9 items-center rounded-full bg-[#292524] px-4 text-[13px] font-medium text-[#fdfcf8] transition hover:scale-[1.03] md:inline-flex"
          >
            Join us
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e5e4] bg-white text-[#292524] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-3.5 flex-col gap-1">
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[2.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mt-2 overflow-hidden rounded-[2rem] border border-[#e7e5e4] bg-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-xl transition md:hidden ${
          open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] font-medium text-[#292524]"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 px-1 pb-1">
            <DesignSwitcher
              tone="soft"
              compact={false}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
