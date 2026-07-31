import { D4Reveal } from "./D4Reveal";

function Phone({
  className = "",
  bg,
  label,
  pulse,
}: {
  className?: string;
  bg: string;
  label: string;
  pulse?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] border border-[#e7e5e4] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] ${className}`}
      style={{ background: bg }}
    >
      <div className="absolute inset-x-0 top-0 flex justify-center pt-3">
        <span className="h-1.5 w-16 rounded-full bg-[#292524]/12" />
      </div>
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="d4-script text-[28px] text-[#78716c]">{label}</p>
        {pulse ? (
          <button
            type="button"
            className="d4-pulse mt-8 inline-flex h-14 items-center rounded-full bg-[#ffb7b2] px-8 text-[15px] font-medium text-[#292524]"
          >
            Breathe in
          </button>
        ) : (
          <p className="mt-4 max-w-[10rem] text-[13px] leading-relaxed text-[#78716c]">
            Soft prompts for better conversation
          </p>
        )}
      </div>
    </div>
  );
}

export function D4Room() {
  return (
    <section id="room" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div
        className="d4-blob d4-blob--lavender left-[10%] top-[20%] h-[220px] w-[220px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[960px]">
        <D4Reveal className="text-center">
          <p className="text-[14px] font-medium text-[#78716c]">The room</p>
          <h2 className="mt-2 text-[clamp(1.85rem,5vw,2.75rem)] font-medium tracking-[-0.025em] text-[#292524]">
            How the evening{" "}
            <span className="d4-script text-[1.2em] text-[#ffb7b2]">feels</span>
          </h2>
        </D4Reveal>

        <D4Reveal delay={120} className="mt-12 flex items-start justify-center gap-3 sm:gap-5">
          <Phone
            className="mt-12 hidden h-[580px] w-[280px] opacity-80 md:block"
            bg="#e8efe8"
            label="Arrive"
          />
          <Phone
            className="h-[540px] w-[260px] sm:h-[620px] sm:w-[300px]"
            bg="#efedf4"
            label="Connect"
            pulse
          />
          <Phone
            className="mt-24 hidden h-[580px] w-[280px] opacity-80 md:block"
            bg="#e8efe8"
            label="Stay"
          />
        </D4Reveal>
      </div>
    </section>
  );
}
