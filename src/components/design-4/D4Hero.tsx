import { D4Reveal } from "./D4Reveal";

export function D4Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36">
      <div
        className="d4-blob d4-blob--peach left-[-10%] top-[12%] h-[280px] w-[280px] sm:h-[380px] sm:w-[380px]"
        aria-hidden
      />
      <div
        className="d4-blob d4-blob--lavender d4-blob--delay right-[-12%] top-[28%] h-[260px] w-[260px] sm:h-[360px] sm:w-[360px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px] text-center">
        <D4Reveal>
          <p className="text-[14px] font-medium tracking-wide text-[#78716c]">
            Soft evenings for builders
          </p>
          <h1 className="mt-5 text-[clamp(2.75rem,12vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#292524]">
            Exclusive networking,{" "}
            <span className="d4-script text-[1.15em] text-[#ffb7b2]">
              maximum
            </span>{" "}
            serendipity
          </h1>
          <p className="mx-auto mt-6 max-w-[500px] text-[16px] leading-relaxed text-[#78716c] sm:text-[18px]">
            Intimate evenings for entrepreneurs, investors and thinkers. A
            digital living room energy, in person.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-[#ffb7b2] px-7 text-[15px] font-medium text-[#292524] shadow-[0_4px_20px_-2px_rgba(255,183,178,0.55)] transition hover:scale-[1.03]"
            >
              Join the list
            </a>
            <a
              href="#moments"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-[#e7e5e4] bg-white px-7 text-[15px] font-medium text-[#292524] transition hover:scale-[1.03]"
            >
              See the evening
            </a>
          </div>
        </D4Reveal>
      </div>
    </section>
  );
}
