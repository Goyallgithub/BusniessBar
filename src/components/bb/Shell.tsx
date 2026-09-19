"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import "./bb.css";

export function BBMark({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? "bb-mark bb-mark--sm" : "bb-mark"} aria-hidden />
  );
}

export function BBNav({ active }: { active: "home" | "team" | "library" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`bb-nav${scrolled || open ? " is-scrolled" : ""}`}>
      <Link href="/" className="bb-nav__brand" onClick={() => setOpen(false)}>
        <BBMark />
        <div className="bb-nav__word">
          <span>business</span>
          <span>bar</span>
        </div>
      </Link>

      <div className="bb-nav__desk">
        <Link href="/" data-active={active === "home"}>
          Home
        </Link>
        <Link href="/team" data-active={active === "team"}>
          Team
        </Link>
        <Link href="/library" data-active={active === "library"}>
          Library
        </Link>
        <span className="bb-pill">
          <i /> Invite only
        </span>
      </div>

      <button
        type="button"
        className={`bb-nav__menu-btn${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div className={`bb-nav__mobile${open ? " is-open" : ""}`} hidden={!open}>
        <Link href="/" data-active={active === "home"} onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          href="/team"
          data-active={active === "team"}
          onClick={() => setOpen(false)}
        >
          Team
        </Link>
        <Link
          href="/library"
          data-active={active === "library"}
          onClick={() => setOpen(false)}
        >
          Library
        </Link>
        <a
          className="bb-nav__mobile-mail"
          href="mailto:hello@businessbar.in"
          onClick={() => setOpen(false)}
        >
          hello@businessbar.in
        </a>
      </div>
    </nav>
  );
}

export function BBFooter() {
  return (
    <footer className="bb-footer">
      <div className="bb-footer__brand">
        <BBMark small />
        <span>
          BusinessBar · Gurugram · Bangalore · Pune · Mumbai · San Francisco
        </span>
      </div>
      <div className="bb-footer__links">
        <a href="mailto:hello@businessbar.in">hello@businessbar.in</a>
        <a
          href="https://www.linkedin.com/company/business-bar"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

export function BBShell({
  active,
  children,
}: {
  active: "home" | "team" | "library";
  children: ReactNode;
}) {
  return (
    <div className="bb-site">
      <BBNav active={active} />
      {children}
      <BBFooter />
    </div>
  );
}
