import Image from "next/image";
import Link from "next/link";
import { BBShell } from "./Shell";
import { Reveal } from "./Reveal";
import { EditionsCarousel } from "./EditionsCarousel";

const CITIES = [
  "Gurugram",
  "Bangalore",
  "Pune",
  "Mumbai",
  "San Francisco",
];

export function BBHome() {
  const cityLine = [...CITIES, ...CITIES, ...CITIES];

  return (
    <BBShell active="home">
      <section className="bb-hero">
        <Image
          src="/events/ev-rooftop.jpeg"
          alt=""
          fill
          priority
          className="bb-hero__img"
          sizes="100vw"
        />
        <video
          className="bb-hero__video"
          src="/events/reel.mp4"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden
        />
        <div className="bb-hero__scrim" />
        <div className="bb-hero__grain" aria-hidden />
        <div className="bb-hero__copy">
          <div className="bb-hero__brand bb-hero__enter bb-hero__enter--1">
            <span className="bb-hero__mark" aria-hidden />
            <span className="bb-hero__word">
              business
              <em>bar</em>
            </span>
          </div>
          <div className="bb-eyebrow bb-hero__enter bb-hero__enter--2">
            Five years · Every quarter · By invitation
          </div>
          <h1 className="bb-hero__title">
            <span className="bb-hero__line">
              <span className="bb-hero__line-inner bb-hero__enter bb-hero__enter--3">
                Exclusive networking,
              </span>
            </span>
            <span className="bb-hero__line">
              <span className="bb-hero__line-inner bb-hero__enter bb-hero__enter--4">
                maximum <em className="bb-hero__serif">serendipity</em>
              </span>
            </span>
          </h1>
          <p className="bb-hero__enter bb-hero__enter--5">
            Intimate evenings for founders, investors, and operators who thrive
            on conversation. Not an event. An experience.
          </p>
          <div className="bb-hero__cta bb-hero__enter bb-hero__enter--6">
            <a className="bb-hero__btn" href="mailto:hello@businessbar.in">
              Ask for an introduction
            </a>
            <Link href="/library" className="bb-hero__ghost">
              See a night →
            </Link>
          </div>
        </div>
      </section>

      <div className="bb-marquee" aria-hidden>
        <div className="bb-marquee__track">
          {cityLine.map((city, i) => (
            <span key={`${city}-${i}`}>
              {city}
              <em>·</em>
            </span>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="bb-stats">
          <div>
            <div className="bb-stats__n is-mint">10+</div>
            <div className="bb-stats__l">Editions hosted</div>
          </div>
          <div>
            <div className="bb-stats__n">05</div>
            <div className="bb-stats__l">Cities · GGN, Mum, Pune, BLR, SF</div>
          </div>
          <div>
            <div className="bb-stats__n">1,000+</div>
            <div className="bb-stats__l">Founders, investors, operators</div>
          </div>
        </div>
      </Reveal>

      <section className="bb-section">
        <div className="bb-pillars">
          <Reveal delay={0}>
            <div className="bb-pillars__n">01</div>
            <h3>Intimate spaces</h3>
            <p>
              A villa, a rooftop, an Airbnb with the lights turned down. Rooms
              small enough that you actually meet everyone in them.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="bb-pillars__n">02</div>
            <h3>Exciting people</h3>
            <p>
              Every guest is curated and every list is closed. Founders building
              at pace, the investors backing them, the operators who ship.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="bb-pillars__n">03</div>
            <h3>Absolutely no agenda</h3>
            <p>
              No panels, no pitches, no lanyards. The best conversations happen
              when nothing is over-planned.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bb-section bb-section--tight">
        <Reveal>
          <div className="bb-split">
            <div>
              <h2>
                Countryside ease meets a{" "}
                <span className="bb-serif">well-designed villa</span>
              </h2>
              <p>
                All wrapped up in the spirit of a lifestyle club. Just real
                people, fresh ideas, and the kind of conversations that spark
                when things aren&apos;t over-planned.
              </p>
              <p>
                Founders call it a brain vacation. We call it maximising
                serendipity: the entropy of impactful people and the osmosis of
                transformative ideas.
              </p>
              <Link href="/library" className="bb-cta-link">
                See what a night looks like <span>→</span>
              </Link>
            </div>
            <div className="bb-split__photos">
              <Image
                src="/events/ev-villa.jpeg"
                alt="Villa edition"
                width={640}
                height={800}
              />
              <Image
                src="/events/ev-sf-loft.jpeg"
                alt="Loft edition"
                width={640}
                height={800}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="bb-who">
          <div className="bb-who__inner">
            <h2>Who&apos;s in the room</h2>
            <p>
              Seed to Series C founders. Partners and principals writing
              cheques. Operators from the teams everyone quotes. Roughly 40
              people a night.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <EditionsCarousel />
      </Reveal>

      <Reveal>
        <section className="bb-invite">
          <div className="bb-eyebrow" style={{ marginBottom: 20 }}>
            Invitation only
          </div>
          <h2>
            There is no sign-up form.{" "}
            <span className="bb-invite__keep">There never was.</span>
          </h2>
          <p>
            Every seat at BusinessBar is offered, not requested. If you&apos;d
            like to be considered for the next edition, someone in the room
            already knows how to find us.
          </p>
          <a className="bb-mail" href="mailto:hello@businessbar.in">
            hello@businessbar.in
          </a>
        </section>
      </Reveal>
    </BBShell>
  );
}
