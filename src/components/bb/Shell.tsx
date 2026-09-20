"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import "./bb.css";

export function BBLogo({
  size = "nav",
  className = "",
}: {
  size?: "nav" | "hero" | "footer";
  className?: string;
}) {
  const dims =
    size === "hero"
      ? { width: 280, height: 114 }
      : size === "footer"
        ? { width: 120, height: 49 }
        : { width: 140, height: 57 };

  return (
    <span
      className={`bb-logo bb-logo--${size}${className ? ` ${className}` : ""}`}
    >
      <Image
        src="/bb-logo.png"
        alt="BusinessBar"
        width={dims.width}
        height={dims.height}
        className="bb-logo__img"
        priority={size === "nav" || size === "hero"}
      />
    </span>
  );
}

export function BBNav({ active }: { active: "home" | "library" }) {
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
      <Link
        href="/"
        className="bb-nav__brand"
        onClick={() => setOpen(false)}
        aria-label="BusinessBar home"
      >
        <BBLogo size="nav" />
      </Link>

      <div className="bb-nav__desk">
        <Link href="/" data-active={active === "home"}>
          Home
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
        <Link
          href="/"
          data-active={active === "home"}
          onClick={() => setOpen(false)}
        >
          Home
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
          href="mailto:businessbar.blog@gmail.com"
          onClick={() => setOpen(false)}
        >
          businessbar.blog@gmail.com
        </a>
      </div>
    </nav>
  );
}

export function BBFooter() {
  return (
    <footer className="bb-footer">
      <div className="bb-footer__brand">
        <BBLogo size="footer" />
      </div>
      <div className="bb-footer__links">
        <a href="mailto:businessbar.blog@gmail.com">
          businessbar.blog@gmail.com
        </a>
        <a
          href="https://in.linkedin.com/company/business-bar"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/businessbar.x"
          target="_blank"
          rel="noreferrer"
        >
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
  active: "home" | "library";
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
