export function D6Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center border-b border-[#e5e4de] px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mb-5 inline-flex items-center gap-3 border border-[#e5e4de] bg-[#f7f6f2]/80 px-4 py-2 sm:mb-6">
          <span className="d6-pulse" aria-hidden />
          <span className="d6-mono text-[10px] text-[#3d7068]">
            Intimate evenings · live signal
          </span>
        </div>

        <h1 className="d6-display mx-auto uppercase tracking-[-0.04em]">
          <span className="block whitespace-nowrap text-[clamp(1.65rem,6.2vw,5.75rem)]">
            Exclusive{" "}
            <span className="italic font-normal text-[#B4B4B4]">Networking</span>
          </span>
          <span className="mt-[0.08em] block whitespace-nowrap text-[clamp(1.65rem,6.2vw,5.75rem)]">
            Maximum{" "}
            <span className="italic font-normal text-[#B4B4B4]">Serendipity</span>
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[14px] leading-relaxed text-[#1c1c1c]/65 sm:mt-6 sm:text-[15px]">
          Intimate evenings for entrepreneurs, investors, operators, and thinkers
          who thrive on meaningful conversation.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-5">
          <a href="#access" className="d6-btn d6-btn-shadow h-11 min-w-[180px] px-7">
            <span>Request Invite</span>
          </a>
          <a
            href="#evening"
            className="d6-mono text-[10px] text-[#1c1c1c]/55 underline decoration-[#e5e4de] underline-offset-8 transition hover:text-[#3d7068] hover:decoration-[#3d7068]"
          >
            View the evening
          </a>
        </div>
      </div>
    </section>
  );
}
