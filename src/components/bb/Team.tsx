"use client";

import { useState } from "react";
import { TEAM } from "@/data/team";
import { BBShell } from "./Shell";

export function BBTeam() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <BBShell active="team">
      <div className="bb-page bb-page--team">
        <header className="bb-team-head">
          <div className="bb-eyebrow">The hosts</div>
          <h1>
            Five people who <span className="bb-serif">pick the room</span>
          </h1>
          <p className="bb-lede">
            No photos, no bios worth padding. We spend our time on the guest
            list instead.
          </p>
        </header>

        <div className="bb-roster">
          {TEAM.map((person, i) => {
            const isOn = hovered === i;
            return (
              <a
                key={person.name}
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`bb-roster__row${isOn ? " is-expanded" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
              >
                <span className="bb-roster__rail" aria-hidden />
                <span className="bb-roster__num">{person.num}</span>
                <span className="bb-roster__line">
                  <span className="bb-roster__name">{person.name}</span>
                  <span className="bb-roster__role">{person.role}</span>
                </span>
                <span className="bb-roster__li">LinkedIn ↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </BBShell>
  );
}
