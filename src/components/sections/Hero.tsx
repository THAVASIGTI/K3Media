"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import { IMAGES } from "@/lib/images";
import { CONTACT, CTA_LABEL, HERO_SLIDES } from "@/lib/content";
import SplitWords from "@/components/motion/SplitWords";
import MagneticButton from "@/components/motion/MagneticButton";
import Container from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;
const SLIDE_MS = 5500;
const FADE_S = 0.55;
const OUT_S = 0.2;

/**
 * Full-resolution JPEG source for a full-width banner. The shared IMAGES set is sized for cards, and
 * Unsplash's auto=format AVIF is capped at a lower width, so ask for JPEG and let next/image convert it.
 */
const hiRes = (src: string) => src.replace("auto=format&fit=crop&w=1800&q=80", "fm=jpg&fit=crop&w=3200&q=90");

/** Full-bleed framed banner: each topic's cover dissolves in (blur + zoom) behind the headline. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  // `turn` only ever increases, so each new slide stacks above the previous one even when the index wraps.
  const [{ index, turn }, setSlide] = useState({ index: 0, turn: 0 });
  const goTo = (i: number) => setSlide((s) => (s.index === i ? s : { index: i, turn: s.turn + 1 }));
  const [paused, setPaused] = useState(false);
  const slide = HERO_SLIDES[index];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // Auto-advance; pauses on hover/focus and while the tab is hidden.
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) setSlide((s) => ({ index: (s.index + 1) % HERO_SLIDES.length, turn: s.turn + 1 }));
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100dvh] items-end overflow-hidden pb-10 pt-28 md:pb-14">
      {/* Framed banner */}
      <motion.div
        className="absolute inset-0 overflow-hidden bg-ink"
        initial={{ clipPath: "inset(12% 8% 12% 8% round 2rem)" }}
        animate={{ clipPath: "inset(0.75rem 0.75rem 0.75rem 0.75rem round 2rem)" }}
        transition={{ duration: 1.6, ease, delay: 0.1 }}
      >
        {/* `isolate` keeps the slides' z-index inside this layer, so the shading below always sits on top
            (without it the stacking changed once the scroll transform kicked in). */}
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 isolate">
          <AnimatePresence initial={false}>
            {/* Dark flash: the outgoing slide drops to dark, then the incoming one fades up from dark.
                Opacity + scale only, so it stays on the GPU. */}
            <motion.div
              key={turn}
              className="absolute inset-0 will-change-[opacity,transform]"
              style={{ zIndex: turn + 1 }}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: OUT_S, ease: [0.4, 0, 1, 1] } }}
              transition={{
                opacity: { duration: FADE_S, ease: [0, 0, 0.2, 1], delay: OUT_S },
                scale: { duration: SLIDE_MS / 1000 + FADE_S, ease: "linear" },
              }}
            >
              <Image
                src={hiRes(IMAGES[slide.main].src)}
                alt={IMAGES[slide.main].alt}
                fill
                preload={index === 0}
                quality={85}
                sizes="100vw"
                className="object-cover object-[70%_center]"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div style={{ y: textY }} className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="font-display text-[clamp(2.6rem,6.6vw,6.75rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-white">
              <SplitWords lines={["We build brands", "people remember."]} accentLine={1} accentClass="text-accent" delay={0.5} onMount />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1 }}
              className="mt-7 max-w-lg text-base leading-relaxed text-white/80 md:text-lg"
            >
              Shoots, films, social, events, and the website and CRM behind them. One team from first impression to final sale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.15 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} variant="glass" external>
                WhatsApp us
              </MagneticButton>
            </motion.div>
          </div>

          {/* Topic tabs with progress */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.3 }}
            className="md:col-span-4"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <div role="tablist" aria-label="Hero topics" className="grid grid-cols-3 gap-x-3 gap-y-4 md:grid-cols-2">
              {HERO_SLIDES.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.topic}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => goTo(i)}
                    className="group text-left"
                  >
                    <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/25">
                      {active && (
                        <motion.span
                          key={`${index}-${paused}`}
                          className="absolute inset-0 origin-left bg-accent"
                          // Same initial value on server and client; MotionConfig reducedMotion="user" fills it instantly when needed.
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </span>
                    <span className={clsx("mt-2.5 block text-xs leading-snug transition-colors duration-300 md:text-sm", active ? "text-white" : "text-white/50 group-hover:text-white/80")}>
                      {s.topic}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Warm the cache so each banner is ready before its turn */}
      <div aria-hidden className="sr-only">
        {HERO_SLIDES.slice(1).map((s) => (
          <Image key={s.topic} src={hiRes(IMAGES[s.main].src)} alt="" width={16} height={9} quality={85} sizes="100vw" loading="eager" />
        ))}
      </div>
    </section>
  );
}
