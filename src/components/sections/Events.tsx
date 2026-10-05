"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EVENT_TYPES } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Eyebrow from "@/components/ui/Eyebrow";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Pinned horizontal pan on desktop; native swipe row on mobile and with reduced motion. */
export default function Events() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(el, { x: () => -distance(), ease: "none" }, 0).fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
        gsap.utils.toArray<HTMLElement>(".ev-img").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -12 },
            { xPercent: 12, ease: "none", scrollTrigger: { trigger: img, containerAnimation: tl, start: "left right", end: "right left", scrub: true } },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <section id="events" ref={section} className="relative overflow-hidden py-24 md:motion-safe:flex md:motion-safe:h-[100dvh] md:motion-safe:flex-col md:motion-safe:justify-center md:motion-safe:py-0 md:motion-safe:pt-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Event organisation</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Rooms we have filled, <span className="text-accent">stages we have lit.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            From a 40-seat board meeting to a 2,000-guest launch. Venue, stage, guests, VIPs and coverage, handled by one crew.
          </p>
        </div>
      </div>

      <div
        ref={track}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mt-16 md:px-10 md:motion-safe:w-max md:motion-safe:snap-none md:motion-safe:overflow-visible md:motion-safe:pb-0"
      >
        {EVENT_TYPES.map((ev, i) => (
          <article
            key={ev.title}
            className="group relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-[2rem] ring-1 ring-white/10 md:w-[34vw] md:max-w-[520px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-[min(56vh,560px)]">
              <div className="ev-img absolute -inset-x-[15%] inset-y-0">
                <Image src={IMAGES[ev.image].src} alt={IMAGES[ev.image].alt} fill sizes="(max-width: 768px) 82vw, 34vw" className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">{ev.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">{ev.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 hidden w-full max-w-[1400px] px-10 md:block">
        <div className="h-px w-full bg-white/10">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </section>
  );
}
