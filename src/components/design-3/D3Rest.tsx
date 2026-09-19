import Image from "next/image";
import { TEAM } from "@/data/team";
import { D3Reveal } from "./D3Reveal";

const stats = [
  { lead: "12", caption: "Guests per night" },
  { lead: "03", caption: "Evening beats" },
  { lead: "05", caption: "Faces of the bar" },
  { lead: "∞", caption: "Serendipity index" },
];

const faqs = [
  {
    q: "Who is BusinessBar for?",
    a: "Entrepreneurs, investors, operators, and thinkers who want unforced conversation in an intimate room.",
  },
  {
    q: "What does a night look like?",
    a: "Arrive, converse, connect. Countryside ease, villa charm, and density of good minds without pitch theater.",
  },
  {
    q: "How do I request access?",
    a: "Use the request invite path below. Tell us who you are and what brings you to the Bar.",
  },
  {
    q: "Who holds the room?",
    a: "Yash, Nevin, Abhigyan, Shivam, and Sahil. Hosts, connectors, and keepers of the vibe.",
  },
];

export function D3Stats() {
  return (
    <section id="team-signal" className="d3-band">
      <div className="d3-shell">
        <D3Reveal>
          <div className="d3-eyebrow d3-mono">
            <span>03 · Signal</span>
          </div>
          <div className="d3-band-head">
            <h2>Numbers that stay quiet</h2>
            <p>
              Intimate scale on purpose. Enough people for entropy. Few enough
              to stay human.
            </p>
          </div>
        </D3Reveal>
        <D3Reveal>
          <div className="d3-stats">
            {stats.map((s) => (
              <div key={s.caption} className="d3-stat">
                <div className="d3-stat__n">
                  <em>{s.lead}</em>
                </div>
                <div className="d3-stat__c">{s.caption}</div>
              </div>
            ))}
          </div>
        </D3Reveal>

        <D3Reveal>
          <div className="d3-team">
            {TEAM.map((person, i) => (
              <a
                key={person.name}
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="d3-team__card"
              >
                <div className="d3-team__photo">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 1000px) 50vw, 20vw"
                  />
                </div>
                <div className="d3-team__meta">
                  <p className="d3-mono d3-team__idx">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="d3-team__name">{person.name}</p>
                  <p className="d3-team__link">LinkedIn →</p>
                </div>
              </a>
            ))}
          </div>
        </D3Reveal>
      </div>
    </section>
  );
}

export function D3Faq() {
  return (
    <section id="faq" className="d3-band">
      <div className="d3-shell">
        <D3Reveal>
          <div className="d3-eyebrow d3-mono">
            <span>04 · Faq</span>
          </div>
          <div className="d3-band-head">
            <h2>Straight answers</h2>
            <p>Short questions for people who already know how a good room feels.</p>
          </div>
        </D3Reveal>
        <D3Reveal>
          <div className="d3-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span className="d3-faq__plus" aria-hidden>
                    <span />
                    <span />
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </D3Reveal>
      </div>
    </section>
  );
}

export function D3Close() {
  return (
    <>
      <section id="close" className="d3-close">
        <D3Reveal>
          <h2>See you at the Bar</h2>
          <div className="d3-close__actions">
            <a href="mailto:team@businessbar.net" className="d3-btn d3-btn--fill">
              Request access
            </a>
            <a href="#library" className="d3-btn">
              Back to library
            </a>
          </div>
        </D3Reveal>
      </section>
      <footer className="d3-footer d3-mono">
        <span>BusinessBar · exclusive networking</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
