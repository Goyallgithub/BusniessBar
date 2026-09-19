export function D5Vision() {
  return (
    <section
      id="vision"
      className="relative scroll-mt-24 overflow-hidden border-y border-[#CCFF00]/20 bg-[#0A0A0A] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg, #ccff00, #ff00ff, #00f0ff, #ffffff, #ccff00)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00F0FF]">
          Vision
        </p>

        <h2 className="d5-display max-w-[18ch] text-[clamp(2.8rem,10vw,8rem)]">
          <span className="d5-stroke">Maximise</span>
          <br />
          <span className="d5-glitch text-white">serendipity</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <p className="text-lg leading-relaxed text-white/70 lg:col-span-5 lg:text-xl">
            We gather people who build, invest, and think. The room does the
            rest. No forced intros. No pitch theater. Just density of good
            minds and room to collide.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {[
              {
                t: "Entropy of people",
                d: "Operators, founders, investors, creatives in one villa night.",
              },
              {
                t: "Osmosis of ideas",
                d: "Ideas move sideways. Conversations stay unfinished on purpose.",
              },
              {
                t: "Intimate scale",
                d: "Small enough to feel human. Sharp enough to feel electric.",
              },
              {
                t: "Maximum signal",
                d: "Exclusive networking without the corporate hangover.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="border border-white/10 bg-black/50 p-5 backdrop-blur-xl transition hover:border-[#CCFF00]/50 hover:shadow-[0_0_24px_rgba(204,255,0,0.25)]"
                style={{
                  borderRadius: "30% 70% 40% 60% / 60% 30% 70% 40%",
                }}
              >
                <h3 className="font-[family-name:var(--font-syne)] text-sm font-extrabold uppercase tracking-[0.08em] text-[#CCFF00]">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
