"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TEXT =
  "Most brands hire one agency to get noticed and another to handle what happens next. We do both. The Studio shoots, edits, promotes and runs your events. The Lab builds the CRM, ERP and automations that catch every lead it brings.";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".mw",
          { opacity: 0.12 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: { trigger: ref.current, start: "top 75%", end: "bottom 45%", scrub: 1 },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-label="About K3 Media" className="py-28 md:py-44">
      <Container>
        <p className="max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.025em] md:max-w-[24ch]">
          {TEXT.split(" ").map((w, i) => (
            <span key={i}>
              <span className={`mw ${w === "Studio" || w === "Lab" ? "hl" : ""}`}>{w}</span>{" "}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
