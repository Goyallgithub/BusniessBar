"use client";

import { useEffect, useRef } from "react";

const CITIES = [
  "Gurugram",
  "Bangalore",
  "Pune",
  "Mumbai",
  "San Francisco",
];

function CityGroup({ id }: { id: string }) {
  return (
    <div className="bb-marquee__group" aria-hidden={id !== "a"}>
      {Array.from({ length: 4 }, (_, round) =>
        CITIES.map((city) => (
          <span key={`${id}-${round}-${city}`}>
            {city}
            <em>·</em>
          </span>
        )),
      )}
    </div>
  );
}

export function CitiesMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const group = track.querySelector<HTMLElement>(".bb-marquee__group");
    if (!group) return;

    let x = 0;
    const speed = 0.8; // px per tick (~48px/s at 60fps)

    const step = () => {
      x -= speed;
      const half = group.offsetWidth;
      if (half > 0 && -x >= half) x += half;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    // rAF can freeze in background / embedded browsers; interval keeps ticking
    const id = window.setInterval(step, 16);
    step();
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bb-marquee" aria-label="Cities">
      <div className="bb-marquee__track" ref={trackRef}>
        <CityGroup id="a" />
        <CityGroup id="b" />
      </div>
    </div>
  );
}
