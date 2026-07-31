import { D4Reveal } from "./D4Reveal";

const moments = [
  {
    time: "6:30 pm",
    title: "Doors open slowly",
    accent: "#ffb7b2",
  },
  {
    time: "7:15 pm",
    title: "First unscripted chats",
    accent: "#a8c5a8",
  },
  {
    time: "8:00 pm",
    title: "Ideas start crossing tables",
    accent: "#b8b0d0",
  },
  {
    time: "9:10 pm",
    title: "The room takes over",
    accent: "#ffb7b2",
  },
  {
    time: "Later",
    title: "Serendipity, soft landing",
    accent: "#a8c5a8",
  },
];

export function D4Scenarios() {
  return (
    <section id="moments" className="relative px-0 py-10 sm:py-14">
      <div className="mx-auto max-w-[960px] px-4 sm:px-6">
        <D4Reveal>
          <p className="text-[14px] font-medium text-[#78716c]">One evening</p>
          <h2 className="mt-2 text-[clamp(1.85rem,5vw,2.75rem)] font-medium tracking-[-0.025em] text-[#292524]">
            Soft beats through the night
          </h2>
        </D4Reveal>
      </div>

      <div className="mt-8 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-4 px-4 sm:gap-5 sm:px-6">
          {moments.map((m, i) => (
            <D4Reveal key={m.time} delay={i * 80}>
              <article
                className="d4-scenario flex h-[160px] w-[288px] flex-col justify-between rounded-3xl bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
                style={{ ["--accent" as string]: m.accent }}
              >
                <p className="text-[14px] text-[#a8a29e]">{m.time}</p>
                <p className="d4-scenario__title text-[20px] font-medium leading-snug text-[#292524]">
                  {m.title}
                </p>
              </article>
            </D4Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
