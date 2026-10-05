"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import clsx from "clsx";
import { PILLARS, SERVICES, type Pillar } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitWords from "@/components/motion/SplitWords";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const reduce = useReducedMotion();
  const [pillar, setPillar] = useState<Pillar>("studio");
  const list = SERVICES.filter((s) => s.pillar === pillar);
  const [activeSlug, setActiveSlug] = useState(list[0].slug);
  const active = SERVICES.find((s) => s.slug === activeSlug && s.pillar === pillar) ?? list[0];

  const switchTo = (p: Pillar) => {
    setPillar(p);
    setActiveSlug(SERVICES.find((s) => s.pillar === p)!.slug);
  };

  return (
    <section id="services" className={clsx("relative py-24 transition-colors duration-700 md:py-36", pillar === "lab" && "lab-grid")}>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <Eyebrow>Two engines, one team</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <SplitWords lines={["Everything a brand needs", "to be seen and to sell."]} />
            </h2>
          </div>

          <div role="tablist" aria-label="Choose a pillar" className="flex w-full rounded-full bg-black/5 p-1.5 ring-1 ring-black/10 md:w-auto">
            {(Object.keys(PILLARS) as Pillar[]).map((p) => (
              <button
                key={p}
                role="tab"
                type="button"
                aria-selected={pillar === p}
                aria-controls="services-panel"
                onClick={() => switchTo(p)}
                className="relative min-h-12 flex-1 rounded-full px-6 text-sm font-medium md:flex-none"
              >
                {pillar === p && (
                  <motion.span
                    layoutId="pillar-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={clsx("relative transition-colors duration-300", pillar === p ? "text-accent-ink" : "text-muted")}>
                  {PILLARS[p].name}
                  <span className="hidden sm:inline"> · {PILLARS[p].tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={pillar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease }}
            className="mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {PILLARS[pillar].blurb}
          </motion.p>
        </AnimatePresence>

        <div id="services-panel" role="tabpanel" className="mt-14 grid gap-10 md:grid-cols-12 md:gap-14">
          <ul className="md:col-span-7">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((s, i) => {
                const isActive = s.slug === active.slug;
                return (
                  <motion.li
                    key={s.slug}
                    layout={!reduce}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                    className="border-t border-black/10 last:border-b"
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onClick={() => setActiveSlug(s.slug)}
                      onPointerEnter={(e) => e.pointerType === "mouse" && setActiveSlug(s.slug)}
                      className="group flex w-full items-center gap-6 py-6 text-left md:py-7"
                    >
                      <span
                        className={clsx(
                          "font-display text-2xl font-medium tracking-tight transition-colors duration-500 md:text-[2.1rem]",
                          isActive ? "text-ink" : "text-black/40 group-hover:text-black/70",
                        )}
                      >
                        {s.title}
                      </span>
                      <Plus
                        size={20}
                        weight="light"
                        className={clsx("ml-auto shrink-0 transition-transform duration-500 ease-premium", isActive ? "rotate-45 text-accent-deep" : "text-faint")}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-lg pb-3 text-muted">{s.line}</p>
                          <ul className="flex flex-wrap gap-2 pb-7">
                            {s.points.map((pt) => (
                              <li key={pt} className="rounded-full bg-black/5 px-4 py-2 text-sm text-ink/80 ring-1 ring-black/10">
                                {pt}
                              </li>
                            ))}
                          </ul>
                          <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-[1.5rem] md:hidden">
                            <Image src={IMAGES[s.image].src} alt={IMAGES[s.image].alt} fill sizes="100vw" className="object-cover" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>

          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active.slug}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                    animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Image src={IMAGES[active.image].src} alt={IMAGES[active.image].alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <p className="absolute bottom-6 left-6 right-6 font-mono text-xs uppercase tracking-[0.2em] text-white/90">
                  {PILLARS[pillar].name} / {active.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
