const stats = [
  {
    n: "01",
    value: "12",
    label: "Guests per night",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19" />
        <path d="M14 14.5c1.6 0 3.4.8 5 4.5" />
      </svg>
    ),
  },
  {
    n: "02",
    value: "03",
    label: "Evening beats",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15V9" />
        <path d="M12 15V7" />
        <path d="M16 15v-3" />
      </svg>
    ),
  },
  {
    n: "03",
    value: "∞",
    label: "Serendipity index",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M8 8c-2 0-3.5 1.8-3.5 4S6 16 8 16c1.4 0 2.4-.7 3.2-1.7L12 12l.8 2.3C13.6 15.3 14.6 16 16 16c2 0 3.5-1.8 3.5-4S18 8 16 8c-1.4 0-2.4.7-3.2 1.7L12 12" />
      </svg>
    ),
  },
];

export function D6Stats() {
  return (
    <section id="stats" className="scroll-mt-24 border-b border-[#e5e4de]">
      <div className="mx-auto grid max-w-7xl md:grid-cols-3">
        {stats.map((s) => (
          <article key={s.label} className="d6-stat">
            <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#e5e4de] text-[#3d7068]">
              {s.icon}
            </div>
            <p className="d6-mono mb-3 text-[10px] text-[#1c1c1c]/45">{s.n}</p>
            <p className="d6-display text-4xl tracking-[-0.03em] sm:text-5xl">{s.value}</p>
            <p className="d6-mono mt-4 text-[10px] text-[#1c1c1c]/55">{s.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
