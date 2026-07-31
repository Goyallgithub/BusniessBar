export function D5Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [
    "Exclusive Networking",
    "Maximum Serendipity",
    "Arrive",
    "Converse",
    "Connect",
    "BusinessBar",
    "Intimate Evenings",
    "Entropy of People",
  ];

  const line = items.map((t) => (
    <span key={t}>
      {t} <span className="text-[#FF00FF]">✦</span>
    </span>
  ));

  return (
    <div className="d5-marquee" aria-hidden>
      <div
        className="d5-marquee__track"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {line}
        {line}
      </div>
    </div>
  );
}
