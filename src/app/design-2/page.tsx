import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import "@/components/design-2/design-2.css";

function Arrow({ strokeWidth = "1.5" }: { strokeWidth?: string }) {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.6 1 L15.8 5 L11.6 9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4 5 H0.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export const metadata = {
  title: "BusinessBar | Design 2 · Luxury Editorial",
  description:
    "Exclusive networking, maximum serendipity. A luxury editorial reading of BusinessBar evenings.",
};

export default function Design2Page() {
  return (
    <div className="d2-page">
      <div className="d2-artboard">
        {/* Section 1 — Hero */}
        <section className="d2-hero">
          <div className="d2-hero__photo" aria-hidden />
          <div className="d2-hero__scrim" aria-hidden />

          <nav className="d2-nav" aria-label="Primary">
            <Link href="/design-2" className="d2-wordmark">
              <span className="d2-wordmark__dot" aria-hidden />
              <span className="d2-wordmark__text">BUSINESSBAR</span>
            </Link>

            <div className="d2-menu">
              <a href="#evening">Evening</a>
              <a href="#room">Room</a>
              <a href="#invite">Invite</a>
              <a href="/">Home</a>
              <a href="mailto:businessbar.blog@gmail.com">Contact</a>
            </div>

            <a href="#invite" className="d2-buy">
              <span className="d2-buy__label">Join</span>
              <span className="d2-buy__divider" aria-hidden />
              <span className="d2-buy__price">Invite</span>
            </a>
          </nav>

          <div className="d2-hero__copy">
            <h1>Leave the pitch. Find the room.</h1>
            <p className="d2-hero__lede">
              Intimate evenings for entrepreneurs, investors, operators, and
              thinkers who thrive on meaningful conversation. Arrive, converse,
              connect. Maximum serendipity.
            </p>
            <div className="d2-hero__actions">
              <a href="#invite" className="d2-btn d2-btn--filled">
                Request access
                <Arrow />
              </a>
              <a href="#evening" className="d2-btn d2-btn--ghost">
                See the evening
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 — Feature */}
        <section id="evening" className="d2-feature">
          <h2>So everything else can wait.</h2>

          <div className="d2-feature__row">
            <div className="d2-card d2-card--stats">
              <p className="d2-card__stat">12</p>
              <p className="d2-card__body">
                Guests small enough to feel human. Density sharp enough to move
                ideas. Most people forget the agenda by the second conversation.
              </p>

              <dl className="d2-specs">
                <div className="d2-specs__row">
                  <dt>Arrive</dt>
                  <dd>Countryside villa</dd>
                </div>
                <div className="d2-specs__row">
                  <dt>Converse</dt>
                  <dd>Unforced talk</dd>
                </div>
                <div className="d2-specs__row">
                  <dt>Connect</dt>
                  <dd>Maximum serendipity</dd>
                </div>
                <div className="d2-specs__row">
                  <dt>Scale</dt>
                  <dd>12 guests</dd>
                </div>
              </dl>

              <div className="d2-card__action">
                <a href="#room" className="d2-btn d2-btn--quiet">
                  Explore the evening
                  <Arrow strokeWidth="1.4" />
                </a>
              </div>
            </div>

            <div
              id="room"
              className="d2-card d2-card--photo"
              role="img"
              aria-label="BusinessBar evening conversation"
            />
          </div>
        </section>

        {/* Section 3 — Closing CTA */}
        <section id="invite" className="d2-cta">
          <div className="d2-cta__photo" aria-hidden />
          <div className="d2-cta__copy">
            <h2>Request access</h2>
            <p className="d2-cta__lede">
              Be part of the community. Witness the best startup mixers across
              the country, and keep sipping at BusinessBar. If the room
              isn&apos;t everything you hoped for, tell us. We&apos;re all-ears.
            </p>
            <div className="d2-cta__action">
              <a
                href="mailto:businessbar.blog@gmail.com"
                className="d2-btn d2-btn--filled"
              >
                Request access
                <Arrow />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="d2-switcher-bar">
        <p>BusinessBar · Design 2 · Luxury editorial</p>
        <DesignSwitcher tone="encore" />
      </div>
    </div>
  );
}
