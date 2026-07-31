"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const bartenders = [
  {
    name: "Sahil Dhingra",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/sahil-500x500.jpeg",
  },
  {
    name: "Nevil Kathiria",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-27-at-1.36.25-PM-500x500.jpeg",
  },
  {
    name: "Shivam Jindal",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/shivam-500x500.jpeg",
  },
  {
    name: "Abhigyan Joshi",
    image:
      "https://businessbar.net/wp-content/uploads/2021/05/abhigyan-500x500.jpg",
  },
  {
    name: "Yashvardhan Didwania",
    image:
      "https://businessbar.net/wp-content/uploads/2022/01/DSC_0369_3_portrait-500x500.jpg",
  },
  {
    name: "Keerthana Sreekanth Rao",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-28-at-8.40.31-PM-500x500.jpeg",
  },
  {
    name: "Tanmay Lad",
    image: "https://businessbar.net/wp-content/uploads/2021/05/tanmay.png",
  },
  {
    name: "Sunil Maurya",
    image:
      "https://businessbar.net/wp-content/uploads/2021/10/Untitled-1-500x500.jpg",
  },
  {
    name: "Priya Manjunath",
    image:
      "https://businessbar.net/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-1.14.05-PM-500x500.jpeg",
  },
];

function Card({
  person,
  index,
}: {
  person: (typeof bartenders)[number];
  index: number;
}) {
  return (
    <article
      data-bartender-card
      className="group w-[200px] shrink-0 will-change-transform sm:w-[240px] lg:w-[280px]"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#dfe5ec] sm:rounded-[24px]">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 200px, 280px"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-14 sm:p-5 sm:pt-16">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-[14px] font-semibold text-white sm:text-[16px]">
            {person.name}
          </h3>
        </div>
      </div>
    </article>
  );
}

export function D2Bartenders() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)");

    const onScroll = () => {
      if (reduce || !desktop.matches) {
        track.style.transform = "";
        track.querySelectorAll<HTMLElement>("[data-bartender-card]").forEach((card) => {
          card.style.transform = "";
        });
        return;
      }

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      const maxX = Math.max(0, track.scrollWidth - window.innerWidth + 80);
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;

      const cards = track.querySelectorAll<HTMLElement>("[data-bartender-card]");
      cards.forEach((card, i) => {
        const wave = Math.sin(p * Math.PI * 2 + i * 0.45) * 10;
        const tip = Math.sin(p * Math.PI + i * 0.3) * 1.4;
        card.style.transform = `translate3d(0, ${wave}px, 0) rotate(${tip}deg)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      id="bartenders"
      ref={sectionRef}
      className="relative lg:h-[240vh]"
    >
      {/* Mobile / tablet: native swipe strip */}
      <div className="d2-panel py-16 sm:py-20 lg:hidden">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-5 md:px-8">
          <p className="d2-label text-[12px] font-semibold tracking-[0.22em]">
            THE TEAM
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(2rem,8vw,3rem)] font-bold tracking-[-0.03em] text-[#f4f7fa]">
            Bartenders
          </h2>
          <p className="d2-panel-soft mt-3 max-w-sm text-[14px] leading-relaxed">
            Curious business observers. Swipe through the room.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 px-4 sm:gap-5 sm:px-5 md:px-8">
            {bartenders.map((person, i) => (
              <Card key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: scroll-linked horizontal gallery */}
      <div className="d2-panel sticky top-0 hidden h-[100svh] flex-col justify-center overflow-hidden lg:flex">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">
          <p className="d2-label text-[12px] font-semibold tracking-[0.22em]">
            THE TEAM
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2.2rem,5vw,3.75rem)] font-bold tracking-[-0.03em] text-[#f4f7fa]">
              Bartenders
            </h2>
            <p className="d2-panel-soft max-w-sm text-[14px] leading-relaxed">
              Curious business observers. Scroll through the room.
            </p>
          </div>
        </div>

        <div className="mt-10 w-full overflow-hidden pl-5 md:pl-8 lg:pl-10">
          <div
            ref={trackRef}
            className="flex w-max gap-5 will-change-transform pr-10 md:gap-6"
          >
            {bartenders.map((person, i) => (
              <Card key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
