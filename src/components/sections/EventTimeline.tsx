"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EVENT_TIMELINE } from "@/lib/page-content";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** How an event runs, with a yellow line that draws down the timeline as you scroll. */
export default function EventTimeline() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".tl-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".tl-list", start: "top 65%", end: "bottom 65%", scrub: true } });
        gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item) => {
          gsap.fromTo(item, { opacity: 0.25 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 75%", end: "top 55%", scrub: true } });
          gsap.fromTo(
            item.querySelector(".tl-dot"),
            { scale: 0.4, backgroundColor: "#d8d6cf" },
            { scale: 1, backgroundColor: "#fbba00", ease: "none", scrollTrigger: { trigger: item, start: "top 70%", end: "top 60%", scrub: true } },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-surface py-24 md:py-36">
      <Container className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              How your event <span className="hl">comes together.</span>
            </h2>
            <p className="mt-5 max-w-sm text-muted">One timeline, one point of contact and a weekly update from the day you book.</p>
          </div>
        </div>
        <ol className="tl-list relative md:col-span-7 md:col-start-6">
          <span aria-hidden className="absolute bottom-3 left-[15px] top-3 w-0.5 bg-black/10" />
          <span aria-hidden className="tl-fill absolute bottom-3 left-[15px] top-3 w-0.5 origin-top bg-accent" />
          {EVENT_TIMELINE.map((t) => (
            <li key={t.when} className="tl-item relative pb-14 pl-14 last:pb-0">
              <span className="tl-dot absolute left-0 top-1 size-8 rounded-full bg-accent ring-8 ring-surface" />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-deep">{t.when}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">{t.title}</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
