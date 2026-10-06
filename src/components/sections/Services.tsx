"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import clsx from "clsx";
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
import { useStickyFit } from "@/components/motion/useStickyFit";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const num = (i: number) => String(i + 1).padStart(2, "0");

/** Instagram profile preview used for the VIP stage. */
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
      className="stack-card sticky top-[calc(5.25rem+var(--i)*0.75rem)] origin-top md:top-[calc(6.5rem+var(--i)*1.4rem)]"
      style={{ "--i": i } as React.CSSProperties}
    >
      {/* Phones: one-screen card, photo behind the copy. md+: copy and photo side by side. */}
      <div className="relative flex min-h-[min(calc(100svh-9rem),640px)] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink text-canvas shadow-[0_-30px_60px_-30px_rgba(20,19,16,0.5)] md:grid md:min-h-[min(78vh,700px)] md:grid-cols-2 md:rounded-[2.25rem]">
        {/* Shade that deepens as the next card stacks on top */}
        <span aria-hidden className="stack-shade pointer-events-none absolute inset-0 z-20 bg-black opacity-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between gap-6 p-6 [@media(max-height:700px)]:gap-4 md:gap-10 md:p-11 lg:p-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 min-w-10 place-items-center rounded-full bg-accent px-3 font-mono text-sm font-semibold text-accent-ink">{num(i)}</span>
              <span className="h-px flex-1 bg-white/15" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">{stage.services.length} {stage.services.length === 1 ? "service" : "services"}</span>
            </div>
            <h3 className="mt-5 font-display text-[clamp(2.1rem,4vw,3.9rem)] font-semibold leading-[0.95] tracking-[-0.035em] md:mt-8">{stage.title}</h3>
            <p className="mt-4 line-clamp-4 max-w-md text-[15px] [@media(max-height:700px)]:line-clamp-3 leading-relaxed text-white/75 md:mt-5 md:line-clamp-none md:text-base md:text-white/70">{stage.detail}</p>
          </div>

          <div>
            <ul className={clsx("flex flex-wrap gap-2", dense && "lg:grid lg:grid-cols-2")}>
              {stage.services.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="group/c flex min-h-10 items-center justify-between gap-2 rounded-full bg-white/[0.09] py-1.5 pl-3.5 pr-3.5 text-[13px] font-medium ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-accent hover:text-accent-ink md:min-h-11 md:bg-white/[0.07] md:py-2 md:pl-4 md:pr-2 md:text-sm md:backdrop-blur-none"
                  >
                    <span className="whitespace-nowrap lg:truncate">{bySlug(slug).title}</span>
                    <span className="hidden size-7 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover/c:bg-accent-ink group-hover/c:text-accent md:grid">
                      <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-baseline gap-4 border-t border-white/10 pt-5 [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:pt-3 md:mt-8 md:pt-6">
              <span className="whitespace-nowrap font-display text-4xl font-semibold leading-none tracking-tight text-accent md:text-5xl">{stage.stat.value}</span>
              <span className="text-sm text-white/60">{stage.stat.label}</span>
            </p>
          </div>
        </div>

        {/* Media: full-bleed backdrop on phones, right column on md+ */}
        <div className="absolute inset-0 overflow-hidden md:relative md:inset-auto">
          <div className="stack-img absolute inset-0">
            <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <span className="absolute inset-0 bg-gradient-to-t from-ink from-45% via-ink/80 via-65% to-ink/10 md:hidden" />
          <span className="absolute inset-0 hidden bg-gradient-to-r from-ink to-transparent md:block" />
          <div className="absolute bottom-10 right-10 hidden w-[200px] rotate-3 transition-transform duration-700 ease-premium hover:rotate-0 hover:scale-[1.03] md:block">
            <StageMedia stage={stage} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useStickyFit(ref, ".stack-card");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Stacking runs on every screen size; phones get a gentler recede to suit the shorter cards.
      mm.add(
        { desktop: "(min-width: 768px)", motionOk: "(prefers-reduced-motion: no-preference)" },
        (ctx) => {
          const { desktop, motionOk } = ctx.conditions as { desktop: boolean; motionOk: boolean };
          if (!motionOk) return;
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
            const st = { trigger: cards[i + 1], start: "top bottom", end: desktop ? "top 20%" : "top 15%", scrub: true };
            gsap.to(card, { scale: desktop ? 0.9 : 0.93, ease: "none", scrollTrigger: st });
            gsap.to(card.querySelector(".stack-shade"), { opacity: desktop ? 0.55 : 0.6, ease: "none", scrollTrigger: st });
          });
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="services" className={heading ? "py-20 md:py-44" : "pb-20 md:pb-44"}>
      <Container>
        {heading && (
          <div className="mb-14 md:mb-16">
            <Eyebrow>Brand building, start to sale</Eyebrow>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <SplitWords lines={["Four moves that turn a name", "into a brand that sells."]} accentLine={1} />
            </h2>
          </div>
        )}
        <div className="space-y-[8vh] md:space-y-[12vh]">
          {STAGES.map((s, i) => (
            <StageCard key={s.key} stage={s} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
