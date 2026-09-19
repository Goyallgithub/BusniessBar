import { Reveal } from "./Reveal";

const beats = [
  {
    n: "01",
    title: "Arrive",
    line: "Countryside ease, villa charm. The door opens slowly.",
  },
  {
    n: "02",
    title: "Converse",
    line: "Real people, fresh ideas. Talk that isn’t over-planned.",
  },
  {
    n: "03",
    title: "Connect",
    line: "Entropy of people. Osmosis of ideas. Maximum serendipity.",
  },
];

export function SiteEvening() {
  return (
    <section id="evening" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="bb-label mb-4">The evening</p>
              <h2 className="bb-display text-[clamp(2rem,5vw,3.75rem)] text-white">
                How the night moves
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-white/55 lg:text-right">
              We believe in the entropy of impactful people and the osmosis of
              transformative ideas and shared knowledge.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {beats.map((b, i) => (
            <Reveal key={b.n} delay={i * 90}>
              <article className="bb-glass group h-full rounded-[1.75rem] p-7 transition duration-500 hover:border-[#5CC4C4]/40">
                <p className="bb-label mb-8 text-white/35">{b.n}</p>
                <h3 className="bb-display text-3xl text-white sm:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                  {b.line}
                </p>
                <div className="mt-8 h-px w-12 bg-[#5CC4C4]/50 transition-all duration-500 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
