"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import "./bb.css";

export function BBLogo({
  size = "hero",
  className = "",
  href = "/",
}: {
  size?: "hero" | "footer";
  className?: string;
  href?: string | false;
}) {
  const dims =
    size === "footer"
      ? { width: 160, height: 59 }
      : { width: 280, height: 102 };

  const mark = (
    <span
      className={`bb-logo bb-logo--${size}${className ? ` ${className}` : ""}`}
    >
      <Image
        src="/bb-logo-full-v3.png"
        alt="BusinessBar"
        width={dims.width}
        height={dims.height}
        className="bb-logo__img"
        priority={size === "hero"}
      />
    </span>
  );

  if (href === false) return mark;
  return (
    <Link href={href} className="bb-logo-link" aria-label="BusinessBar home">
      {mark}
    </Link>
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
  active: _active,
  children,
}: {
  active: "home" | "library";
  children: ReactNode;
}) {
  return (
    <div className="bb-site bb-site--nonav">
      {children}
      <BBFooter />
    </div>
  );
}
