import Image from "next/image";

const beats = [
  {
    id: "arrive",
    n: "01",
    title: "Arrive",
    line: "Countryside ease, villa charm. The door opens slowly.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    shape: "d5-blob-shape",
  },
  {
    id: "converse",
    n: "02",
    title: "Converse",
    line: "Real people, fresh ideas. Talk that isn’t over-planned.",
    image:
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=900&q=80",
    shape: "d5-blob-shape-alt",
  },
  {
    id: "connect",
    n: "03",
    title: "Connect",
    line: "Entropy of people. Osmosis of ideas. Maximum serendipity.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    shape: "d5-blob-shape",
  },
];

export function D5Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF00FF]">
              The night
            </p>
            <h2 className="d5-display d5-glitch text-[clamp(2.5rem,8vw,6rem)] text-white">
              Arrive · Converse
              <br />
              <span className="d5-chrome-text">Connect</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 lg:text-right">
            Three beats. No agenda theater. Just the entropy that makes
            BusinessBar nights work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {beats.map((b, i) => (
            <article
              key={b.id}
              className={`d5-liquid-card ${b.shape} relative p-5 sm:p-6 ${
                i === 1 ? "md:translate-y-10" : i === 2 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[18%_60%_28%_55%/45%_25%_70%_40%]">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="d5-wavy object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
                <span className="absolute left-4 top-4 font-[family-name:var(--font-syne)] text-3xl font-black text-[#CCFF00] mix-blend-difference">
                  {b.n}
                </span>
              </div>
              <div className="relative z-10 flex items-start gap-3 pb-2">
                <span className="d5-thorn mt-1.5 shrink-0" />
                <div>
                  <h3 className="d5-display text-3xl text-white sm:text-4xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {b.line}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
