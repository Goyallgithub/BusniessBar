"use client";

import { useCallback, useEffect, useState } from "react";
import { BBLogo, BBShell } from "./Shell";
import { Reveal } from "./Reveal";

type Span = "hero" | "tall" | "wide" | "sq";

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

const TILES: Tile[] = [
  {
    kind: "image",
    src: "/events/ev-bb-01.jpg",
    label: "Bangalore",
    span: "wide",
  },
  {
    kind: "image",
    src: "/events/ev-bb-03.jpg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "video",
    src: "/events/reel.mp4",
    label: "Bangalore",
    span: "hero",
  },
  {
    kind: "image",
    src: "/events/ev-bb-04.jpg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-bb-05.jpg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-bb-02.jpg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-rooftop.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-sf-loft.jpeg",
    label: "San Francisco",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-villa.jpeg",
    label: "Countryside",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-signage.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-04.jpeg",
    label: "San Francisco",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-07.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/ev-08.jpeg",
    label: "Bangalore",
    span: "wide",
  },
  {
    kind: "image",
    src: "/events/assets-1789822931591-xhs7.jpeg",
    label: "Bangalore",
    span: "wide",
  },
  {
    kind: "image",
    src: "/events/assets-1789823479615-ofka.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823479607-vnqh.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941774-mj61.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941759-c45t.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823479589-bebi.jpeg",
    label: "San Francisco",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941782-7giz.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  {
    kind: "image",
    src: "/events/assets-1789823941779-z08o.jpeg",
    label: "Bangalore",
    span: "tall",
  },
  /* single brand close — once, at the end */
  { kind: "logo", id: "end", span: "wide" },
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
        <div className="bb-library__top">
          <BBLogo size="footer" />
        </div>
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
              Still frames from the nights : portraits, reels, and the rooms
              between conversations.
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
                  className="bb-mosaic__cell bb-mosaic__cell--logo bb-mosaic__cell--end"
                  style={{ animationDelay: `${i * 24}ms` }}
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bb-logo-full.png"
                    alt=""
                    className="bb-mosaic__logo"
                  />
                </div>
              );
            }

            return (
              <button
                key={`${tile.src}-${tile.label}-${i}`}
                type="button"
                role="listitem"
                className={`bb-mosaic__cell bb-mosaic__cell--${tile.span}${
                  tile.kind === "video" ? " is-video" : ""
                }`}
                style={{ animationDelay: `${i * 24}ms` }}
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
                <span className="bb-mosaic__cap">{tile.label}</span>
              </button>
            );
          })}
        </div>
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
