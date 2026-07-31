export function About() {
  return (
    <section id="about" className="relative bg-[#f7f6f3]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:gap-12 sm:px-5 sm:py-24 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14 lg:py-32">
        <div className="reveal">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-[#8a8a8a]">
            ABOUT US
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument)] text-[clamp(2rem,8vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
            We don&apos;t just host events. We craft experiences.
          </h2>
        </div>

        <div className="reveal flex flex-col justify-end gap-6 text-[15px] leading-relaxed text-[#5c5c5c] sm:gap-8 sm:text-[16px] lg:pt-16">
          <p>
            Picture this: countryside ease meets the charm of a cozy,
            well-designed villa, all wrapped up in the spirit of a lifestyle
            club. Just real people, fresh ideas, and the kind of conversations
            that spark when things aren&apos;t over-planned.
          </p>
          <p>
            At BusinessBar, we are a bunch of curious business observers:
            hosting intimate evenings for entrepreneurs, investors, operators,
            and thinkers who thrive on meaningful conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
