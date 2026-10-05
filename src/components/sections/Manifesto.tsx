"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IMAGES, type ImageKey } from "@/lib/images";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Part = string | { image: ImageKey };

const STATEMENT: Part[] = [
  "A brand is a feeling",
  { image: "photo-shoot" },
  "people carry from the first frame",
  { image: "work-2" },
  "to the first follow‑up",
  { image: "whatsapp-crm" },
  "We build both ends.",
];

/** Editorial statement with inline photo pills that open up as the line scrolls into view. */
export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".pill").forEach((pill) => {
          gsap.fromTo(
            pill,
            { width: "0.2em" },
            { width: "1.9em", ease: "none", scrollTrigger: { trigger: pill, start: "top 92%", end: "top 55%", scrub: 1 } },
          );
          gsap.fromTo(
            pill.querySelector("img"),
            { scale: 1.6 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: pill, start: "top 92%", end: "top 55%", scrub: 1 } },
          );
        });
        gsap.fromTo(
          ".mw",
          { opacity: 0.15 },
          { opacity: 1, ease: "none", stagger: 0.08, scrollTrigger: { trigger: ".statement", start: "top 80%", end: "bottom 60%", scrub: 1 } },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-label="What we believe" className="py-28 md:py-44">
      <Container>
        <p className="statement max-w-[18ch] font-display text-[clamp(2.2rem,5.6vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.035em] md:max-w-[20ch]">
          {STATEMENT.map((part, i) =>
            typeof part === "string" ? (
              <span key={i} className={i === STATEMENT.length - 1 ? "mw mt-[0.15em] block" : "mw"}>
                {i === STATEMENT.length - 1 ? <span className="hl">{part}</span> : part}{" "}
              </span>
            ) : (
              <span
                key={i}
                aria-hidden
                className="pill relative mx-[0.08em] inline-block h-[0.82em] w-[1.9em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline ring-1 ring-black/10"
              >
                <Image src={IMAGES[part.image].src} alt="" fill sizes="160px" className="object-cover" />
              </span>
            ),
          )}
        </p>

        <div className="mt-16 grid gap-10 border-t border-black/10 pt-10 md:mt-24 md:grid-cols-12">
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-6">
            Most brands hire one agency to get noticed and another to handle what happens next. With K3 Media it is one team, one plan and one bill.
          </p>
          <dl className="grid grid-cols-2 gap-8 md:col-span-6">
            <div>
              <dt className="font-display text-2xl font-semibold tracking-tight">The Studio</dt>
              <dd className="mt-2 text-muted">Makes you seen. Shoots, films, social, ads, events and VIP moments.</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-semibold tracking-tight">The Lab</dt>
              <dd className="mt-2 text-muted">Makes you sell. Websites, custom CRM & ERP, WhatsApp CRM and automation.</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
