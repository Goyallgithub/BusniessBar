export function D3Vision() {
  return (
    <section id="vision" className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-[#dceaf4]">
        <div className="d3-grid-bg px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
          <p className="d3-label">Fig. 04 · Vision</p>
          <h2 className="d3-serif mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] text-[#0f2433]">
            Maximise <em className="italic text-[#3d8fbf]">serendipity</em>.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[rgba(15,36,51,0.62)] sm:text-[18px]">
            We believe in the entropy of impactful people and the osmosis of
            transformative ideas. Evenings designed so the right conversations
            find you.
          </p>
        </div>
      </div>
    </section>
  );
}

export function D3StickyCta() {
  return (
    <section id="join" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <a href="mailto:team@businessbar.net" className="d3-sticky-note d3-sticky-note--cta block">
          <p className="font-mono text-[11px] tracking-wide text-[#0f2433]/55">
            Note · Contact
          </p>
          <h2 className="d3-serif mt-4 text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.1]">
            Stay in the room. Get the most insightful content every month.
          </h2>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-[rgba(15,36,51,0.15)] pt-4">
            <span className="text-[14px] font-semibold tracking-wide">
              team@businessbar.net
            </span>
            <span aria-hidden className="text-[18px]">
              →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

export function D3Footer() {
  return (
    <footer className="border-t border-[rgba(15,36,51,0.1)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] font-semibold tracking-[0.14em] text-[#0f2433]">
          BUSINESSBAR
        </p>
        <p className="text-[13px] text-[rgba(15,36,51,0.55)]">
          Exclusive networking, maximum serendipity
        </p>
        <div className="flex gap-4 text-[13px] text-[rgba(15,36,51,0.55)]">
          <a href="/" className="transition hover:text-[#0f2433]">
            Design 1
          </a>
          <a href="/design-2" className="transition hover:text-[#0f2433]">
            Design 2
          </a>
          <a href="/design-3" className="transition hover:text-[#0f2433]">
            Design 3
          </a>
          <a href="/design-4" className="transition hover:text-[#0f2433]">
            Design 4
          </a>
          <a href="/design-5" className="transition hover:text-[#0f2433]">
            Design 5
          </a>
          <a href="/design-6" className="transition hover:text-[#0f2433]">
            Design 6
          </a>
        </div>
      </div>
    </footer>
  );
}
