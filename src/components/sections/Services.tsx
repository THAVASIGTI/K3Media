"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, InstagramLogo, Plus } from "@phosphor-icons/react";
import clsx from "clsx";
import { CONTACT, SERVICES, SHORTS, STAGES, type Stage } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ShortPlayer from "@/components/ui/ShortPlayer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ease = [0.16, 1, 0.3, 1] as const;
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
  if (stage.media.kind === "short") return <ShortPlayer id={stage.media.id} sizes="220px" />;
  return <InstagramCard />;
}

/** Expanded panel under a row. */
function Detail({ stage }: { stage: Stage }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.7, ease }}
      className="overflow-hidden"
    >
      <div className="grid gap-10 pb-14 pt-4 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-muted">{stage.detail}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {stage.services.map((slug, i) => (
              <motion.li key={slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.05 }}>
                <Link
                  href={`/services/${slug}`}
                  className="group/c inline-flex min-h-11 items-center gap-2 rounded-full bg-surface py-2 pl-4 pr-2 text-sm font-medium ring-1 ring-black/10 transition-colors duration-300 hover:bg-ink hover:text-canvas"
                >
                  {bySlug(slug).title}
                  <span className="grid size-7 place-items-center rounded-full bg-black/5 transition-colors duration-300 group-hover/c:bg-accent group-hover/c:text-accent-ink">
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <p className="mt-9 border-t border-black/10 pt-6">
            <span className="hl font-display text-5xl font-semibold tracking-tight">{stage.stat.value}</span>
            <span className="mt-3 block text-muted">{stage.stat.label}</span>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] md:col-span-4 md:aspect-auto md:min-h-[420px]"
        >
          <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="(max-width: 768px) 100vw, 34vw" className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="mx-auto w-[220px] self-center md:col-span-3 md:mx-0 md:w-full md:max-w-[220px] md:justify-self-center"
        >
          <StageMedia stage={stage} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);
  const [hover, setHover] = useState<number | null>(null);

  // Cursor-following preview card (desktop pointers only).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.6 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.6 });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Titles rise from behind their masks, row by row, as the index scrolls in.
        gsap.fromTo(
          ".row-title",
          { yPercent: 110 },
          { yPercent: 0, ease: "none", stagger: 0.15, scrollTrigger: { trigger: ".stage-index", start: "top 90%", end: "top 30%", scrub: 1 } },
        );
        gsap.fromTo(
          ".row-line",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", stagger: 0.15, scrollTrigger: { trigger: ".stage-index", start: "top 95%", end: "top 40%", scrub: 1 } },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  const hovered = hover !== null && hover !== open ? STAGES[hover] : null;

  return (
    <section ref={ref} id="services" className={heading ? "py-32 md:py-44" : "pb-32 md:pb-44"}>
      <Container>
        {heading && (
          <div className="mb-14 md:mb-20">
            <Eyebrow>Brand building, start to sale</Eyebrow>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Four moves that turn a name into a brand that <span className="hl">sells.</span>
            </h2>
          </div>
        )}

        <div
          className="stage-index"
          onPointerMove={(e) => {
            if (e.pointerType !== "mouse") return;
            mx.set(e.clientX);
            my.set(e.clientY);
          }}
          onPointerLeave={() => setHover(null)}
        >
          {STAGES.map((stage, i) => {
            const isOpen = open === i;
            return (
              <div key={stage.key} className="relative">
                <span className="row-line absolute inset-x-0 top-0 h-px origin-left bg-black/15" />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}
                  className="group relative isolate grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[5rem_1fr_auto_auto] md:gap-8 md:py-8"
                >
                  {/* Yellow sweep on hover / open */}
                  <span
                    aria-hidden
                    className={clsx(
                      "absolute inset-0 -z-10 origin-left rounded-2xl bg-accent transition-transform duration-700 ease-premium",
                      isOpen ? "scale-x-0" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                  <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent-ink md:pl-4">{num(i)}</span>
                  <span className="block overflow-hidden pb-[0.08em]">
                    <span className="row-title block font-display text-[clamp(1.9rem,5.1vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] transition-transform duration-700 ease-premium group-hover:translate-x-3">
                      {stage.title}
                    </span>
                  </span>
                  <span className="hidden text-right md:block">
                    <span className="block font-display text-2xl font-semibold tracking-tight">{stage.stat.value}</span>
                    <span className="block max-w-[14rem] text-xs text-muted transition-colors group-hover:text-accent-ink/70">{stage.stat.label}</span>
                  </span>
                  <span
                    className={clsx(
                      "grid size-12 place-items-center rounded-full transition-all duration-500 ease-premium md:mr-4 md:size-14",
                      isOpen ? "rotate-45 bg-ink text-canvas" : "bg-black/5 group-hover:bg-ink group-hover:text-canvas",
                    )}
                  >
                    <Plus size={20} />
                  </span>
                </button>
                <AnimatePresence initial={false}>{isOpen && <Detail key="d" stage={stage} />}</AnimatePresence>
              </div>
            );
          })}
          <span className="row-line block h-px origin-left bg-black/15" />
        </div>
      </Container>

      {/* Floating preview that follows the cursor over closed rows */}
      <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block">
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.key}
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 4 }}
              transition={{ duration: 0.45, ease }}
              className="relative -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative h-64 w-52 overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-20px_rgba(20,19,16,0.5)] ring-4 ring-surface">
                <Image src={IMAGES[hovered.image].src} alt="" fill sizes="210px" className="object-cover" />
              </div>
              {hovered.media.kind === "short" && (
                <div className="absolute -bottom-6 -right-14 h-36 w-[5.1rem] overflow-hidden rounded-xl ring-4 ring-ink">
                  <Image src={SHORTS.find((sh) => sh.id === (hovered.media as { id: string }).id)?.thumb ?? ""} alt="" fill sizes="90px" className="object-cover" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
