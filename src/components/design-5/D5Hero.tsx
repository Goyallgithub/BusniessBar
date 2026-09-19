import Image from "next/image";
import { D5Marquee } from "./D5Marquee";

export function D5Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute -left-[10%] top-[12%] h-[38vw] w-[38vw] max-h-[420px] max-w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ffffff 0%, #00f0ff44 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[8%] bottom-[10%] h-[40vw] w-[40vw] max-h-[440px] max-w-[440px] opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #ccff00 0%, #ff00ff44 45%, transparent 70%)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />

      <D5Marquee />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-6 lg:px-10 lg:py-14">
        <div className="lg:col-span-7">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00F0FF]">
            <span className="d5-thorn" />
            Intimate evenings · 2099 energy
          </p>

          <h1 className="d5-display d5-glitch max-w-[14ch] text-[clamp(3.2rem,12vw,9.5rem)] text-white">
            Exclusive
            <br />
            <span className="d5-stroke italic scale-x-110 inline-block origin-left">
              Networking
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Maximum serendipity for entrepreneurs, investors, operators, and
            thinkers who thrive on meaningful conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#join" className="d5-btn-chrome h-12 px-7 text-xs">
              Request Invite
            </a>
            <a
              href="#journey"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CCFF00] underline decoration-[#CCFF00]/40 underline-offset-8 transition hover:decoration-[#CCFF00]"
            >
              See the night
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mb-6 lg:translate-x-4 lg:translate-y-8">
          <div className="d5-liquid-card d5-blob-shape relative aspect-[4/5] w-full max-w-md overflow-hidden lg:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75"
              alt="Villa evening at BusinessBar"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#CCFF00]/10" />
            <p className="absolute bottom-8 left-8 right-8 font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-[0.14em] text-[#CCFF00]">
              Countryside ease. Villa charm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
