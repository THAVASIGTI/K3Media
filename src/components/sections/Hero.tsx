"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import { IMAGES } from "@/lib/images";
import { CONTACT, CTA_LABEL, HERO_SLIDES } from "@/lib/content";
import SplitWords from "@/components/motion/SplitWords";
import MagneticButton from "@/components/motion/MagneticButton";
import Container from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;
const wipe = [0.76, 0, 0.24, 1] as const;
const SLIDE_MS = 5000;
const MotionLink = motion.create(Link);

/** Split hero: headline on the light canvas, a rotating photo collage per service topic on the right. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = HERO_SLIDES[index];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  // Auto-advance; pauses on hover/focus and while the tab is hidden.
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pb-16 pt-28 md:min-h-[100dvh] md:pb-20 md:pt-32">
      <Container className="grid items-center gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 lg:col-span-7">
          <h1 className="font-display text-[clamp(2.7rem,6.4vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <SplitWords lines={["We build brands", "people remember."]} accentLine={1} delay={0.3} onMount />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            Shoots, films, social, events, and the website and CRM behind them. One team from first impression to final sale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
            <MagneticButton href={CONTACT.whatsapp} variant="ghost" external>
              WhatsApp us
            </MagneticButton>
          </motion.div>
        </div>

        <div
          className="relative md:col-span-6 lg:col-span-5"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Main frame: each topic wipes up over the previous one */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 2rem)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-ink"
          >
            <motion.div style={{ y: mainY }} className="absolute -inset-y-[8%] inset-x-0">
              <AnimatePresence initial={false}>
                <motion.div
                  key={slide.main}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.15 }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                  exit={{ scale: 1.04, transition: { duration: 1.1 } }}
                  transition={{ clipPath: { duration: 1.1, ease: wipe }, scale: { duration: 1.6, ease } }}
                >
                  <Image
                    src={IMAGES[slide.main].src}
                    alt={IMAGES[slide.main].alt}
                    fill
                    preload={index === 0}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover object-[35%_center]"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Topic label + progress */}
            <div className="absolute bottom-4 left-[46%] right-4 flex items-center gap-3 rounded-full bg-black/40 py-2 pl-4 pr-2 text-white backdrop-blur-md md:bottom-5 md:right-5">
              <span className="hidden font-mono text-[11px] tabular-nums text-white/70 sm:inline">
                {String(index + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={slide.topic}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="min-w-0 flex-1 truncate text-sm font-medium"
                >
                  {slide.topic}
                </motion.span>
              </AnimatePresence>
              <span className="relative h-1 w-12 overflow-hidden rounded-full bg-white/25">
                {!reduce && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0 : 1 }}
                    transition={{ duration: paused ? 0.2 : SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </div>
          </motion.div>

          {/* Small overlapping card, links to the topic's service page */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.9 }}
            className="absolute -bottom-8 -left-2 w-[42%] max-w-[210px] md:-left-10 md:bottom-10"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <MotionLink
                key={slide.card}
                href={slide.href}
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                exit={{ opacity: 0, y: -20, rotate: -8 }}
                transition={{ duration: 0.8, ease }}
                className="group block rounded-[1.5rem] bg-surface p-1.5 shadow-[0_24px_60px_-20px_rgba(20,19,16,0.35)]"
              >
                <span className="relative block aspect-[3/4] overflow-hidden rounded-[calc(1.5rem-0.375rem)]">
                  <Image src={IMAGES[slide.card].src} alt={IMAGES[slide.card].alt} fill sizes="210px" className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
                </span>
                <span className="block px-2 pb-1 pt-2 text-xs text-muted transition-colors group-hover:text-ink">{slide.caption}</span>
              </MotionLink>
            </AnimatePresence>
          </motion.div>

          {/* Topic dots */}
          <div className="mt-6 flex justify-end gap-1.5 md:mt-5" role="tablist" aria-label="Hero topics">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.topic}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={s.topic}
                onClick={() => setIndex(i)}
                className="grid h-8 place-items-center px-1"
              >
                <span className={clsx("block h-1.5 rounded-full transition-all duration-500 ease-premium", i === index ? "w-8 bg-ink" : "w-1.5 bg-black/20 hover:bg-black/40")} />
              </button>
            ))}
          </div>

          {/* Warm the cache so each topic's photos are ready before their turn */}
          <div aria-hidden className="sr-only">
            {HERO_SLIDES.slice(1).map((s) => (
              <span key={s.topic}>
                <Image src={IMAGES[s.main].src} alt="" width={10} height={10} sizes="(max-width: 768px) 100vw, 42vw" loading="eager" />
                <Image src={IMAGES[s.card].src} alt="" width={10} height={10} sizes="210px" loading="eager" />
              </span>
            ))}
          </div>

          <MotionLink
            href="/services"
            aria-label="Explore services"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.1 }}
            className="absolute -top-8 right-4 grid size-28 place-items-center md:-right-6 md:size-32"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden>
              <defs>
                <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="49" className="fill-surface" />
              <text className="fill-ink font-mono text-[8.5px] uppercase tracking-[0.3em]">
                <textPath href="#ring">Brand · Build · Grow · Sell · </textPath>
              </text>
            </svg>
            <span className="relative grid size-12 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-ink">K3</span>
          </MotionLink>
        </div>
      </Container>
    </section>
  );
}
