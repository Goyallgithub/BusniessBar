"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BusinessBarLogo } from "@/components/BusinessBarLogo";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#stats", label: "Signal" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#evening", label: "Evening" },
  { href: "#vision", label: "Vision" },
  { href: "#bartenders", label: "Bartenders" },
  { href: "#rooms", label: "Rooms" },
  { href: "#access", label: "Access" },
];

export function D6Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,background,border-color,backdrop-filter] duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-[#e5e4de] bg-[#f7f6f2]/80 pt-0 backdrop-blur-md"
            : "border-b border-transparent bg-transparent pt-8"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/design-6"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="hidden h-px w-6 bg-[#1c1c1c] sm:block" aria-hidden />
            <BusinessBarLogo className="h-9 w-auto" />
            <span className="hidden h-px w-8 bg-[#1c1c1c] sm:block" aria-hidden />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="d6-mono text-[10px] text-[#1c1c1c]/70 transition-colors duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:text-[#3d7068]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <DesignSwitcher tone="editorial" className="hidden sm:inline-flex" />
            <a
              href="#access"
              className="d6-btn hidden h-9 px-5 xl:inline-flex"
            >
              <span>Request Access</span>
            </a>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center border border-[#e5e4de] bg-[#f7f6f2] text-[#1c1c1c] md:hidden"
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
        <div className="fixed inset-0 z-40 bg-[#f7f6f2] md:hidden">
          <nav className="flex h-full flex-col justify-center gap-2 px-6 pb-10 pt-24">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="d6-display border-b border-[#e5e4de] py-4 text-4xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#access"
              onClick={() => setOpen(false)}
              className="d6-btn mt-8 h-12 w-full"
            >
              <span>Request Access</span>
            </a>
            <div className="mt-8">
              <DesignSwitcher
                tone="editorial"
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
