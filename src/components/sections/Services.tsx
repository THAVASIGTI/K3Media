"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, InstagramLogo, Plus } from "@phosphor-icons/react";
import clsx from "clsx";
import { CONTACT, SERVICES, STAGES, type Stage } from "@/lib/content";
import { IMAGES, type ImageKey } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ShortPlayer from "@/components/ui/ShortPlayer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ease = [0.16, 1, 0.3, 1] as const;
const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const num = (i: number) => String(i + 1).padStart(2, "0");

/* ---------- shared pieces ---------- */

function ServiceRows({ stage }: { stage: Stage }) {
  const dense = stage.services.length > 3;
  return (
    <ul className="divide-y divide-white/15 border-y border-white/15">
      {stage.services.map((slug, i) => {
        const s = bySlug(slug);
        return (
          <motion.li key={slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.05 }}>
            <Link href={`/services/${slug}`} className={clsx("group/r flex items-center gap-3", dense ? "py-2" : "py-3")}>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-semibold tracking-tight transition-transform duration-500 ease-premium group-hover/r:translate-x-1 md:text-lg">
                  {s.title}
                </span>
                {!dense && <span className="mt-0.5 block truncate text-xs text-white/60">{s.points.join(" · ")}</span>}
              </span>
              <ArrowUpRight size={16} className="shrink-0 text-white/60 transition-all duration-500 ease-premium group-hover/r:-translate-y-0.5 group-hover/r:translate-x-0.5 group-hover/r:text-accent" />
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

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

function StageMedia({ stage, compact = false }: { stage: Stage; compact?: boolean }) {
  if (stage.media.kind === "short") return <ShortPlayer id={stage.media.id} sizes={compact ? "150px" : "220px"} compact={compact} />;
  return <InstagramCard />;
}

/** Small rounded photo embedded inside the heading text. */
function Pill({ image }: { image: ImageKey }) {
  return (
    <span className="pill relative mx-[0.12em] inline-block h-[0.78em] w-[1.7em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline ring-1 ring-black/10">
      <Image src={IMAGES[image].src} alt="" fill sizes="120px" className="object-cover" />
    </span>
  );
}

/* ---------- desktop: horizontal accordion ---------- */

function Slice({ stage, i, open, onOpen }: { stage: Stage; i: number; open: boolean; onOpen: () => void }) {
  return (
    <div
      role="tab"
      tabIndex={0}
      aria-selected={open}
      aria-label={stage.title}
      onPointerEnter={(e) => e.pointerType === "mouse" && onOpen()}
      onFocus={onOpen}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      style={{ flexGrow: open ? 3.6 : 1 }}
      className="slice group relative min-w-0 basis-0 cursor-pointer overflow-hidden rounded-[2rem] bg-ink text-white transition-[flex-grow] duration-700 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="slice-img absolute inset-0">
        <Image
          src={IMAGES[stage.image].src}
          alt={IMAGES[stage.image].alt}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className={clsx("object-cover transition-transform duration-[1.2s] ease-premium", open ? "scale-100" : "scale-110 group-hover:scale-105")}
        />
      </div>
      <div className={clsx("absolute inset-0 transition-colors duration-700", open ? "bg-black/60" : "bg-black/45 group-hover:bg-black/35")} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Big number, always visible */}
      <span className={clsx("absolute left-6 top-6 font-display font-bold leading-none tracking-tighter transition-all duration-700 ease-premium", open ? "text-6xl text-accent" : "text-5xl text-white/90")}>
        {num(i)}
      </span>

      {/* Collapsed: vertical title */}
      <span
        className={clsx(
          "absolute bottom-7 left-1/2 origin-center -translate-x-1/2 rotate-180 whitespace-nowrap font-display text-2xl font-semibold tracking-tight transition-opacity duration-300 [writing-mode:vertical-rl]",
          open ? "opacity-0" : "opacity-100 delay-200",
        )}
      >
        {stage.title}
      </span>
      {!open && (
        <span className="absolute bottom-6 right-6 grid size-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-500 ease-premium group-hover:rotate-90">
          <Plus size={16} />
        </span>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="absolute inset-0 flex items-end gap-6 p-7 lg:p-9"
          >
            <div className="min-w-[300px] flex-1">
              <motion.h3
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.3 }}
                className="font-display text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold leading-none tracking-[-0.03em]"
              >
                {stage.title}
              </motion.h3>
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.38 }}
                className="mt-3 max-w-md text-sm leading-relaxed text-white/75 lg:text-[0.95rem]"
              >
                {stage.detail}
              </motion.p>
              <div className="mt-5 max-w-md">
                <ServiceRows stage={stage} />
              </div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-3xl font-semibold tracking-tight text-accent">{stage.stat.value}</span>
                <span className="text-sm text-white/70">{stage.stat.label}</span>
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 60, rotate: 8, opacity: 0 }}
              animate={{ y: 0, rotate: 3, opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="hidden w-[190px] shrink-0 self-end xl:block"
              onClick={(e) => e.stopPropagation()}
            >
              <StageMedia stage={stage} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- mobile: vertical accordion ---------- */

function MobileAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3 md:hidden">
      {STAGES.map((stage, i) => {
        const isOpen = open === i;
        return (
          <div key={stage.key} className="relative overflow-hidden rounded-[1.75rem] bg-ink text-white">
            <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="100vw" className="object-cover" />
            <div className={clsx("absolute inset-0 transition-colors duration-500", isOpen ? "bg-black/70" : "bg-black/45")} />
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="relative flex min-h-24 w-full items-center gap-4 px-5 py-5 text-left"
            >
              <span className={clsx("font-display text-4xl font-bold leading-none tracking-tighter", isOpen ? "text-accent" : "text-white/90")}>{num(i)}</span>
              <span className="flex-1 font-display text-2xl font-semibold tracking-tight">{stage.title}</span>
              <Plus size={20} className={clsx("transition-transform duration-500 ease-premium", isOpen && "rotate-45 text-accent")} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="relative overflow-hidden"
                >
                  <div className="px-5 pb-6">
                    <p className="text-sm leading-relaxed text-white/75">{stage.detail}</p>
                    <div className="mt-4">
                      <ServiceRows stage={stage} />
                    </div>
                    <div className="mt-5 flex items-end gap-4">
                      <div className="w-32 shrink-0 -rotate-2">
                        <StageMedia stage={stage} compact />
                      </div>
                      <p className="pb-1">
                        <span className="block font-display text-3xl font-semibold tracking-tight text-accent">{stage.stat.value}</span>
                        <span className="mt-1 block text-sm text-white/70">{stage.stat.label}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // Slices rise and unmask in sequence as the row scrolls into view.
        gsap.fromTo(
          ".slice",
          { y: 140, clipPath: "inset(30% 0% 0% 0% round 2rem)" },
          {
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            ease: "none",
            stagger: 0.12,
            scrollTrigger: { trigger: ".slices", start: "top 95%", end: "top 35%", scrub: 1 },
          },
        );
        // Photos settle from a zoom while the row travels through the viewport.
        gsap.fromTo(".slice-img", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".slices", start: "top bottom", end: "bottom top", scrub: true } });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Heading photo pills open up as the line scrolls in.
        gsap.fromTo(".pill", { width: "0.25em" }, { width: "1.7em", ease: "none", stagger: 0.1, scrollTrigger: { trigger: ".stage-heading", start: "top 90%", end: "top 45%", scrub: 1 } });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="services" className={heading ? "py-32 md:py-48" : "pb-32 md:pb-48"}>
      <Container>
        {heading && (
          <div className="mb-14 md:mb-20">
            <Eyebrow>Brand building, start to sale</Eyebrow>
            <h2 className="stage-heading mt-6 max-w-6xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Four moves <Pill image="photo-shoot" /> that turn a name <Pill image="social-media" /> into a brand <Pill image="event-corporate" /> that{" "}
              <span className="hl">sells.</span> <Pill image="software-team" />
            </h2>
          </div>
        )}

        <div role="tablist" aria-label="Brand building stages" className="slices hidden h-[min(78vh,700px)] min-h-[600px] gap-3 md:flex">
          {STAGES.map((s, i) => (
            <Slice key={s.key} stage={s} i={i} open={open === i} onOpen={() => setOpen(i)} />
          ))}
        </div>

        <MobileAccordion />
      </Container>
    </section>
  );
}
