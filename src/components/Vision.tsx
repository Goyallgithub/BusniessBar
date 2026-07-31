export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#1a1a1a] text-[#f7f6f3]"
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-5 sm:py-24 md:px-10 lg:px-14 lg:py-36">
        <div className="reveal max-w-4xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-white/45">
            OUR VISION
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument)] text-[clamp(2rem,8vw,3.75rem)] leading-[1.1] tracking-[-0.02em] sm:mt-5">
            Maximise serendipity.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-white/70 sm:mt-8 sm:text-[17px]">
            We believe in the entropy of impactful people and the osmosis of
            transformative ideas and shared knowledge. Witness the best startup
            mixers across the country, and be part of the conversations that
            change trajectories.
          </p>
        </div>
      </div>
    </section>
  );
}
