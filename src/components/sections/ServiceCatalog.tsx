"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowUpRight, Check, Clock } from "@phosphor-icons/react";
import clsx from "clsx";
import { PILLARS, SERVICES, type Pillar } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { SERVICE_COVER, SERVICE_TURNAROUND } from "@/lib/page-content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";

type Filter = "all" | Pillar;
const ease = [0.16, 1, 0.3, 1] as const;

/** Full service directory with an animated Studio / Lab filter. */
export default function ServiceCatalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = SERVICES.filter((s) => filter === "all" || s.pillar === filter);
  // `short` is shown on phones so all three tabs fit on one line.
  const tabs: { key: Filter; label: string; short: string; count: number }[] = [
    { key: "all", label: "All services", short: "All", count: SERVICES.length },
    { key: "studio", label: PILLARS.studio.tagline, short: "Media & Events", count: SERVICES.filter((s) => s.pillar === "studio").length },
    { key: "lab", label: PILLARS.lab.tagline, short: "Software", count: SERVICES.filter((s) => s.pillar === "lab").length },
  ];

  return (
    <section className="pb-16 md:pb-32">
      <Container>
        <div className="sticky top-24 z-30 -mx-2 mb-10 flex justify-center md:mb-14">
          <div role="tablist" aria-label="Filter services" className="flex rounded-full bg-surface/90 p-1.5 shadow-[0_12px_40px_-16px_rgba(20,19,16,0.35)] ring-1 ring-black/5 backdrop-blur-xl">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={filter === t.key}
                onClick={() => setFilter(t.key)}
                className="relative min-h-11 whitespace-nowrap rounded-full px-3.5 text-[13px] font-medium sm:px-4 sm:text-sm md:px-6"
              >
                {filter === t.key && <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className={clsx("relative transition-colors duration-300", filter === t.key ? "text-canvas" : "text-muted")}>
                  <span className="sm:hidden">{t.short}</span>
                  <span className="hidden sm:inline">{t.label}</span> <span className="font-mono text-[11px] opacity-60">{t.count}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((s) => {
                const d = SERVICE_DETAILS[s.slug];
                const cover = IMAGES[SERVICE_COVER[s.slug] ?? s.image];
                return (
                  <motion.li
                    key={s.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.55, ease }}
                  >
                    <Link href={`/services/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-surface ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(20,19,16,0.35)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-md">
                          {PILLARS[s.pillar].name}
                        </span>
                        <span className="absolute bottom-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-7">
                        <h2 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{d?.intro ?? s.line}</p>
                        <ul className="mt-5 space-y-2 text-sm">
                          {s.points.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent-deep" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-auto flex items-center gap-2 border-t border-black/10 pt-5 text-xs font-medium text-muted">
                          <Clock size={15} className="text-accent-deep" />
                          {SERVICE_TURNAROUND[s.slug]}
                        </p>
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </Container>
    </section>
  );
}
