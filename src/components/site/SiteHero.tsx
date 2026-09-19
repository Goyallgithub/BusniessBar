import Image from "next/image";
import { Reveal } from "./Reveal";

export function SiteHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="BusinessBar villa evening"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050708]/55 via-[#050708]/72 to-[#050708]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,8,0.55)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <Reveal>
          <p className="bb-label mb-5">Intimate evenings · live signal</p>
          <h1 className="bb-display max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)] text-white">
            Exclusive networking.
            <br />
            <span className="italic text-[#5CC4C4]">Maximum serendipity.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/65 sm:text-base">
            Intimate evenings for entrepreneurs, investors, operators, and
            thinkers who thrive on meaningful conversation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="bb-btn h-12 px-7">
              Request invite
            </a>
            <a href="#library" className="bb-btn-ghost h-12 px-6">
              View the night
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
