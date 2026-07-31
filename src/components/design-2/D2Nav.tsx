"use client";

import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#journey", label: "The Evening" },
  { href: "#vision", label: "Vision" },
  { href: "#bartenders", label: "Bartenders" },
  { href: "#join", label: "Contact Us" },
];

export function D2Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="d2-anim-nav absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8 lg:px-10">
        <a
          href="/design-2"
          className="relative z-50 shrink-0 font-[family-name:var(--font-syne)] text-[14px] tracking-[0.12em] text-[#0b1520] sm:text-[15px]"
          style={{ fontWeight: 700 }}
          onClick={() => setOpen(false)}
        >
          BUSINESSBAR
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/90 bg-white/85 px-2 py-1.5 shadow-[0_8px_30px_-18px_rgba(11,21,32,0.28)] backdrop-blur-xl md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-[#0b1520]/75 transition hover:bg-[#0b1520]/06 hover:text-[#0b1520] lg:px-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2 sm:gap-3">
          <DesignSwitcher tone="light" className="hidden sm:inline-flex" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1520]/15 bg-white/90 text-[#0b1520] shadow-sm backdrop-blur-md md:hidden"
            aria-expanded={open}
            aria-controls="d2-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="d2-mobile-nav"
        className={`fixed inset-0 z-40 bg-[#e8f1f8]/96 backdrop-blur-xl transition md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-6 pb-10 pt-20">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 font-[family-name:var(--font-syne)] text-[1.65rem] font-bold tracking-[-0.02em] text-[#0b1520] transition hover:bg-white/50"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-6 px-4">
            <DesignSwitcher
              tone="light"
              compact={false}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
