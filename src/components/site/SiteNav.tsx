"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BusinessBarLogo } from "@/components/BusinessBarLogo";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#evening", label: "Evening" },
  { href: "#library", label: "Library" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[rgba(92,196,196,0.15)] bg-[#050708]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link href="/" className="relative z-50 shrink-0" onClick={() => setOpen(false)}>
            <BusinessBarLogo onDark className="h-8 w-auto sm:h-9" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] font-medium tracking-[0.14em] text-white/55 uppercase transition hover:text-[#5CC4C4]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="relative z-50 flex items-center gap-2 sm:gap-3">
            <DesignSwitcher tone="dark" className="hidden sm:inline-flex" />
            <a href="#contact" className="bb-btn hidden h-10 px-5 md:inline-flex">
              Request access
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(92,196,196,0.35)] text-[#5CC4C4] md:hidden"
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
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[#050708]/98 md:hidden">
          <nav className="flex h-full flex-col justify-center gap-2 px-6 pb-10 pt-24">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="bb-display border-b border-white/10 py-4 text-4xl text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bb-btn mt-8 h-12 w-full"
            >
              Request access
            </a>
            <div className="mt-6">
              <DesignSwitcher
                tone="dark"
                compact={false}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
