"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, InstagramLogo } from "@phosphor-icons/react";
import { CONTACT, SERVICES, STAGES, type Stage } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ShortPlayer from "@/components/ui/ShortPlayer";
import SplitWords from "@/components/motion/SplitWords";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const num = (i: number) => String(i + 1).padStart(2, "0");

/** Instagram profile preview used for the events stage. */
function InstagramCard() {
  const grid = ["event-corporate", "event-commercial", "vip-management", "work-4", "event-corporate-3", "hero-2"] as const;
  return (
    <a
      href={CONTACT.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group/ig block overflow-hidden rounded-[1.5rem] bg-surface p-3.5 text-ink ring-[5px] ring-ink"
    >
      <div className="flex items-center gap-2.5">
        <span className="rounded-full bg-[conic-gradient(from_200deg,#f58529,#dd2a7b,#8134af,#515bd4,#f58529)] p-[2px]">
          <span className="grid size-9 place-items-center rounded-full bg-accent font-display text-xs font-bold text-accent-ink ring-2 ring-surface">K3</span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-semibold">{CONTACT.instagramHandle}</span>
          <span className="block text-[10px] text-muted">1.5K followers · 62 posts</span>
        </span>
      </div>
      <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-[#0095f6] py-1.5 text-[11px] font-semibold text-white transition-opacity group-hover/ig:opacity-90">
        <InstagramLogo size={13} weight="bold" /> Follow
      </span>
      <div className="mt-2.5 grid grid-cols-3 gap-1">
        {grid.map((k) => (
          <span key={k} className="relative aspect-square overflow-hidden rounded-md">
            <Image src={IMAGES[k].src} alt="" fill sizes="70px" className="object-cover" />
          </span>
        ))}
      </div>
    </a>
  );
}

function StageMedia({ stage }: { stage: Stage }) {
  if (stage.media.kind === "short") return <ShortPlayer id={stage.media.id} sizes="200px" />;
  return <InstagramCard />;
}

function StageCard({ stage, i }: { stage: Stage; i: number }) {
  const dense = stage.services.length > 3;
  return (
    <article
      className="stack-card relative origin-top md:sticky"
      style={{ top: `calc(6.5rem + ${i * 1.4}rem)` }}
    >
      <div className="relative grid overflow-hidden rounded-[2.25rem] bg-ink text-canvas shadow-[0_-30px_60px_-30px_rgba(20,19,16,0.5)] md:h-[min(78vh,700px)] md:grid-cols-2">
        {/* Shade that deepens as the next card stacks on top */}
        <span aria-hidden className="stack-shade pointer-events-none absolute inset-0 z-20 bg-black opacity-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between gap-10 p-7 md:p-11 lg:p-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 min-w-10 place-items-center rounded-full bg-accent px-3 font-mono text-sm font-semibold text-accent-ink">{num(i)}</span>
              <span className="h-px flex-1 bg-white/15" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">{stage.services.length} services</span>
            </div>
            <h3 className="mt-8 font-display text-[clamp(2.2rem,4vw,3.9rem)] font-semibold leading-[0.95] tracking-[-0.035em]">{stage.title}</h3>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">{stage.detail}</p>
          </div>

          <div>
            <ul className={dense ? "grid grid-cols-2 gap-2" : "flex flex-wrap gap-2"}>
              {stage.services.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="group/c flex min-h-11 items-center justify-between gap-2 rounded-full bg-white/[0.07] py-2 pl-4 pr-2 text-sm font-medium ring-1 ring-white/10 transition-colors duration-300 hover:bg-accent hover:text-accent-ink"
                  >
                    <span className="truncate">{bySlug(slug).title}</span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover/c:bg-accent-ink group-hover/c:text-accent">
                      <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-baseline gap-4 border-t border-white/10 pt-6">
              <span className="font-display text-5xl font-semibold leading-none tracking-tight text-accent">{stage.stat.value}</span>
              <span className="text-sm text-white/60">{stage.stat.label}</span>
            </p>
          </div>
        </div>

        {/* Media */}
        <div className="relative min-h-[420px] overflow-hidden md:min-h-0">
          <div className="stack-img absolute inset-0">
            <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <span className="absolute inset-0 bg-gradient-to-r from-ink via-ink/20 to-transparent md:via-transparent" />
          <div className="absolute bottom-6 right-6 w-[170px] rotate-3 transition-transform duration-700 ease-premium hover:rotate-0 hover:scale-[1.03] md:bottom-10 md:right-10 md:w-[200px]">
            <StageMedia stage={stage} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
        cards.forEach((card, i) => {
          // Photo drifts inside its frame while the card is on screen.
          gsap.fromTo(card.querySelector(".stack-img"), { yPercent: -6, scale: 1.12 }, {
            yPercent: 6,
            scale: 1.02,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
          });
          if (i === cards.length - 1) return;
          // When the next card slides over, this one recedes and darkens.
          const st = { trigger: cards[i + 1], start: "top bottom", end: "top 20%", scrub: true };
          gsap.to(card, { scale: 0.9, ease: "none", scrollTrigger: st });
          gsap.to(card.querySelector(".stack-shade"), { opacity: 0.55, ease: "none", scrollTrigger: st });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="services" className={heading ? "py-32 md:py-44" : "pb-32 md:pb-44"}>
      <Container>
        {heading && (
          <div className="mb-14 md:mb-16">
            <Eyebrow>Brand building, start to sale</Eyebrow>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <SplitWords lines={["Four moves that turn a name", "into a brand that sells."]} accentLine={1} />
            </h2>
          </div>
        )}
        <div className="space-y-6 md:space-y-[12vh]">
          {STAGES.map((s, i) => (
            <StageCard key={s.key} stage={s} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
