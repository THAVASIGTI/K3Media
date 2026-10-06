"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useStickyFit } from "@/components/motion/useStickyFit";
import { PROCESS } from "@/lib/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Sticky card stack: each step pins, and the previous card recedes as the next slides over it. */
export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useStickyFit(ref, ".step-card");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".step-card");
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          const st = { trigger: cards[i + 1], start: "top bottom", end: "top 25%", scrub: true };
          gsap.to(card, { scale: 0.92, ease: "none", scrollTrigger: st });
          gsap.to(card.querySelector(".step-shade"), { opacity: 0.75, ease: "none", scrollTrigger: st });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section id="process" ref={ref} className="py-16 md:py-36">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Four steps. <span className="hl">Zero <span className="whitespace-nowrap">hand-offs.</span></span>
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              The same team plans the shoot, runs the campaign and builds the system behind it, so nothing gets lost between agencies.
            </p>
          </div>
        </div>

        <ol className="space-y-6 md:col-span-8 md:space-y-[18vh]">
          {PROCESS.map((s, i) => (
            <li
              key={s.title}
              className="step-card sticky top-[calc(5.5rem+var(--i)*0.75rem)] origin-top md:top-[calc(7rem+var(--i)*1.5rem)]"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10">
                <div className="relative grid min-h-[300px] gap-8 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface p-8 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_24px_48px_-24px_rgba(20,19,16,0.18)] md:grid-cols-[auto_1fr] md:p-12">
                  <span aria-hidden className="step-shade pointer-events-none absolute inset-0 z-10 bg-canvas opacity-0" />
                  <span aria-hidden className="font-display text-7xl font-bold leading-none tracking-tighter text-accent-deep md:text-8xl">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-muted">{s.body}</p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink/70 ring-1 ring-black/15">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
