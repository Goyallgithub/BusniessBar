type BusinessBarLogoProps = {
  className?: string;
  /** Light page = dark "bar". Dark page = light "bar". */
  onDark?: boolean;
};

/** Brand mark: glass + $ with stacked business / bar wordmark. */
export function BusinessBarLogo({
  className = "h-9 w-auto",
  onDark = false,
}: BusinessBarLogoProps) {
  const teal = "#5CC4C4";
  const bar = onDark ? "#D0D0D0" : "#1C1C1C";
  const glassStroke = onDark ? "#B0B0B0" : "#1C1C1C";

  return (
    <svg
      viewBox="0 0 236 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BusinessBar"
    >
      {/* Glass bowl outline */}
      <path
        d="M14 6
           C14 6 11.5 30 11.5 38
           C11.5 47.5 18.5 54 28 54
           C37.5 54 44.5 47.5 44.5 38
           C44.5 30 42 6 42 6
           Z"
        stroke={glassStroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Liquid with wavy surface */}
      <path
        d="M12.4 28
           C16 25.8 20.5 30.2 24.5 27.4
           C28.5 24.6 33 29.8 37.2 27.2
           C40 25.4 42.8 27.6 43.6 28.4
           L43.8 38
           C43.8 46.8 37.2 52.4 28 52.4
           C18.8 52.4 12.2 46.8 12.2 38
           Z"
        fill={teal}
      />
      {/* Dollar mark */}
      <path
        d="M28 33.2v16.4M25.2 36.4c0-1.6 1.2-2.6 2.8-2.6s2.8 1 2.8 2.4c0 2.2-5.6 2-5.6 5.2 0 1.5 1.3 2.6 2.8 2.6s2.8-1.1 2.8-2.5"
        stroke="#000"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stem */}
      <path d="M28 54v10" stroke={glassStroke} strokeWidth="1.5" strokeLinecap="round" />
      {/* Base */}
      <path d="M19 64h18" stroke={glassStroke} strokeWidth="1.5" strokeLinecap="round" />

      {/* Wordmark */}
      <text
        x="58"
        y="32"
        fill={teal}
        fontFamily="var(--font-space), system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        business
      </text>
      <text
        x="58"
        y="58"
        fill={bar}
        fontFamily="var(--font-space), system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        bar
      </text>
    </svg>
  );
}
