import { Landing } from "@/components/Landing";

export default function Home() {
  return (
    <>
      <a
        href="#primary"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-surface"
      >
        Skip to content
      </a>
      <Landing />
    </>
  );
}
