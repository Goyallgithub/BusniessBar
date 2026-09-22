import Image from "next/image";
import Link from "next/link";
import { BBLogo, BBShell } from "./Shell";
import { Reveal } from "./Reveal";
import { EditionsCarousel } from "./EditionsCarousel";
import { CitiesMarquee } from "./CitiesMarquee";
import { TEAM } from "@/data/team";

export function BBHome() {
  return (
    <BBShell active="home">
      <section className="bb-hero">
        <div className="bb-hero__media" aria-hidden>
          <Image
            src="/events/ev-rooftop.jpeg"
            alt=""
            fill
            priority
            className="bb-hero__poster"
            sizes="100vw"
          />
          <video
            className="bb-hero__video"
            src="/events/reel.mp4"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          />
        </div>
        <div className="bb-hero__veil" aria-hidden />

        <div className="bb-hero__copy">
          <div className="bb-hero__brand bb-hero__enter bb-hero__enter--1">
            <BBLogo size="hero" href={false} />
          </div>

          <h1 className="bb-hero__title bb-hero__enter bb-hero__enter--2">
            Exclusive networking,
            <br />
            maximum <em>serendipity</em>
          </h1>

          <p className="bb-hero__lede bb-hero__enter bb-hero__enter--3">
            <span className="bb-hero__nowrap">
              Intimate evenings for founders, investors, and operators who
              thrive on conversations.
            </span>
            <br />
            Not an event. <strong>An experience.</strong>
          </p>

          <div className="bb-hero__cta bb-hero__enter bb-hero__enter--4">
            <Link href="/library" className="bb-hero__ghost">
              Inside BusinessBar
            </Link>
          </div>
        </div>
      </section>

      <CitiesMarquee />

      <Reveal>
        <section className="bb-proof">
          <div className="bb-proof__metrics">
            <div className="bb-proof__metric">
              <div className="bb-proof__n is-mint">10+</div>
              <div className="bb-proof__l">Editions hosted</div>
            </div>
            <div className="bb-proof__metric">
              <div className="bb-proof__n">1,000+</div>
              <div className="bb-proof__l bb-proof__l--row">
                <span>Founders</span>
                <span className="bb-proof__dot" aria-hidden>
                  ·
                </span>
                <span>Investors</span>
                <span className="bb-proof__dot" aria-hidden>
                  ·
                </span>
                <span>Operators</span>
              </div>
            </div>
          </div>

          <div className="bb-proof__pillars">
            <article className="bb-proof__pillar">
              <h3>Intimate spaces</h3>
              <p>A villa, a rooftop, a home that feels like your own</p>
            </article>
            <article className="bb-proof__pillar">
              <h3>Exciting people</h3>
              <p>A closed guest list, an open evening</p>
            </article>
            <article className="bb-proof__pillar">
              <h3>Absolutely no agenda</h3>
              <p>Free flowing drinks and conversations</p>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <EditionsCarousel />
      </Reveal>

      <Reveal>
        <section className="bb-invite" id="hosts">
          <div className="bb-eyebrow">Invitation only</div>
          <h2>
            <span className="bb-invite__glue">There is no sign-up form.</span>
            <em className="bb-invite__punch">There never was.</em>
          </h2>

          <div className="bb-hosts">
            <p className="bb-hosts__label">The hosts</p>
            <ul className="bb-hosts__list">
              {TEAM.map((person) => (
                <li key={person.name}>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    {person.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </BBShell>
  );
}
