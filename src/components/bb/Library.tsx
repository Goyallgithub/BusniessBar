"use client";

import { useCallback, useEffect, useState } from "react";
import { BBShell } from "./Shell";
import { Reveal } from "./Reveal";

type Span = "hero" | "tall" | "wide" | "sq" | "slim";

type MediaTile = {
  kind: "image" | "video";
  src: string;
  label: string;
  span: Span;
};

type LogoTile = {
  kind: "logo";
  span: Span;
  id: string;
};

type Tile = MediaTile | LogoTile;

/**
 * Sized to real asset ratios:
 * - portraits (~0.67–0.75) → tall
 * - landscapes (~2.0) → wide
 * - reel → hero
 * Logo tiles pack into leftover dense-grid holes.
 */
const TILES: Tile[] = [
  {
    kind: "image",
    src: "/events/ev-rooftop.jpeg",
    label: "Rooftop · Gurugram",
    span: "tall",
  },
  {
    kind: "video",
    src: "/events/reel.mp4",
    label: "Edition reel",
    span: "hero",
  },
  {
    kind: "image",
    src: "/events/ev-sf-loft.jpeg",
    label: "Loft · San Francisco",
    span: "tall",
  },
  { kind: "logo", id: "L1", span: "sq" },
  {
    kind: "image",
    src: "/events/ev-villa.jpeg",
    label: "Villa · Countryside",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789822931591-xhs7.jpeg",
    label: "Wide · room",
    span: "wide",
  },
  {
    kind: "image",
    src: "/events/ev-signage.jpeg",
    label: "Signage",
    span: "tall",
  },
  { kind: "logo", id: "L2", span: "slim" },
  {
    kind: "image",
    src: "/events/ev-04.jpeg",
    label: "IIT Bombay · SF",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823479615-ofka.jpeg",
    label: "Evening · crowd",
    span: "tall",
  },
  { kind: "logo", id: "L3", span: "wide" },
  {
    kind: "image",
    src: "/events/ev-07.jpeg",
    label: "The menu",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823479607-vnqh.jpeg",
    label: "Conversation",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-08.jpeg",
    label: "Welcome board",
    span: "tall",
  },
  { kind: "logo", id: "L4", span: "sq" },
  {
    kind: "image",
    src: "/events/assets-1789823941774-mj61.jpeg",
    label: "Night · table",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941759-c45t.jpeg",
    label: "Corner light",
    span: "tall",
  },
  { kind: "logo", id: "L5", span: "slim" },
  {
    kind: "image",
    src: "/events/assets-1789823479589-bebi.jpeg",
    label: "Guests",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941782-7giz.jpeg",
    label: "Pour",
    span: "tall",
  },
  { kind: "logo", id: "L6", span: "sq" },
  {
    kind: "image",
    src: "/events/assets-1789823941779-z08o.jpeg",
    label: "Close of night",
    span: "tall",
  },
];

export function BBLibrary() {
  const [lightbox, setLightbox] = useState<{
    kind: "image" | "video";
    src: string;
  } | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

  return (
    <BBShell active="library">
      <div className="bb-library">
        <Reveal>
          <div className="bb-library__head">
            <div>
              <div className="bb-eyebrow" style={{ marginBottom: 14 }}>
                Library
              </div>
              <h1>
                Rooms we&apos;ve <span className="bb-serif">filled</span>
              </h1>
            </div>
            <p className="bb-library__lede">
              Portraits stay tall, reels stay wide, and empty cells wear the
              BusinessBar mark — a denser night, not a cropped scrapbook.
            </p>
          </div>
        </Reveal>

        <div className="bb-mosaic" role="list">
          {TILES.map((tile, i) => {
            if (tile.kind === "logo") {
              return (
                <div
                  key={tile.id}
                  role="listitem"
                  className={`bb-mosaic__cell bb-mosaic__cell--logo bb-mosaic__cell--${tile.span}`}
                  style={{ animationDelay: `${i * 28}ms` }}
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bb-logo.png"
                    alt=""
                    className="bb-mosaic__logo"
                  />
                </div>
              );
            }

            return (
              <button
                key={`${tile.src}-${tile.label}`}
                type="button"
                role="listitem"
                className={`bb-mosaic__cell bb-mosaic__cell--${tile.span}${
                  tile.kind === "video" ? " is-video" : ""
                }`}
                style={{ animationDelay: `${i * 28}ms` }}
                aria-label={`Open ${tile.label}`}
                onClick={() =>
                  setLightbox({ kind: tile.kind, src: tile.src })
                }
              >
                {tile.kind === "video" ? (
                  <video
                    src={tile.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={tile.src} alt="" />
                )}
                <span className="bb-mosaic__shade" aria-hidden />
                <span className="bb-mosaic__cap">
                  {tile.kind === "video" ? (
                    <span className="bb-mosaic__live">Reel</span>
                  ) : null}
                  {tile.label}
                </span>
              </button>
            );
          })}
        </div>

        <p className="bb-note" style={{ marginTop: 28 }}>
          Dense mosaic · photos keep their proportions · logos fill the gaps.
        </p>
      </div>

      {lightbox ? (
        <div className="bb-lightbox" onClick={close} role="presentation">
          {lightbox.kind === "video" ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={lightbox.src}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button type="button" className="bb-lightbox__close" onClick={close}>
            Close ✕
          </button>
        </div>
      ) : null}
    </BBShell>
  );
}
