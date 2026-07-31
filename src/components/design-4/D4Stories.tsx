import { D4Reveal } from "./D4Reveal";

const stories = [
  {
    quote:
      "It felt less like networking and more like being invited into a living room of sharp, kind people.",
    name: "Ananya",
    rotate: "d4-note--left",
  },
  {
    quote:
      "I left with two conversations that actually changed what I am building next quarter.",
    name: "Rahul",
    rotate: "d4-note--right",
  },
];

export function D4Stories() {
  return (
    <section id="stories" className="relative px-4 py-14 sm:px-6 sm:py-18">
      <div className="mx-auto max-w-[960px]">
        <D4Reveal className="mb-10 text-center sm:mb-12">
          <p className="text-[14px] font-medium text-[#78716c]">Diary entries</p>
          <h2 className="mt-2 text-[clamp(1.85rem,5vw,2.75rem)] font-medium tracking-[-0.025em] text-[#292524]">
            Notes from the night
          </h2>
        </D4Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {stories.map((s, i) => (
            <D4Reveal key={s.name} delay={i * 100}>
              <article className={`d4-note ${s.rotate} p-7 sm:p-9`}>
                <p className="text-[17px] leading-relaxed text-[#292524] sm:text-[18px]">
                  {s.quote}
                </p>
                <div className="mt-8">
                  <span className="mb-3 block h-px w-8 bg-[#d6d3d1]" />
                  <p className="d4-script text-[24px] text-[#78716c]">{s.name}</p>
                </div>
              </article>
            </D4Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
