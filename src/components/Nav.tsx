"use client";

import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#about", label: "About" },
  { href: "#bartenders", label: "Bartenders" },
  { href: "#vision", label: "Vision" },
  { href: "#subscribe", label: "Subscribe" },
  { href: "#subscribe", label: "Contact Us" },
];

export function Nav() {
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
    <header className="anim-nav absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-6 md:px-10 lg:px-14">
        <a
          href="#primary"
          className="relative z-50 shrink-0 text-[14px] font-semibold tracking-[0.18em] text-[#1a1a1a] sm:text-[15px]"
          onClick={() => setOpen(false)}
        >
          BUSINESSBAR
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links
            .filter((l) => l.label !== "Contact Us")
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[13px] font-medium tracking-wide text-[#1a1a1a]/75 transition-colors hover:text-[#1a1a1a]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2 sm:gap-3">
          <DesignSwitcher tone="light" className="hidden sm:inline-flex" />
          <a
            href="#subscribe"
            className="hidden text-[12px] font-semibold tracking-[0.14em] text-[#1a1a1a] underline decoration-[#1a1a1a]/30 underline-offset-8 transition hover:decoration-[#1a1a1a] lg:inline"
          >
            CONTACT US
          </a>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1a1a]/12 bg-[#f7f6f3]/85 text-[#1a1a1a] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
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
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-[#e8e6e1]/97 backdrop-blur-xl transition md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-1 px-6 pb-10 pt-20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 font-[family-name:var(--font-instrument)] text-[2rem] leading-none tracking-[-0.02em] text-[#1a1a1a] transition hover:bg-black/5"
            >
              {link.label}
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
