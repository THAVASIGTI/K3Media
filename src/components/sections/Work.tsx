"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import clsx from "clsx";
import { WORK } from "@/lib/content";
import Container from "@/components/ui/Container";
import SplitWords from "@/components/motion/SplitWords";
import CaseArt from "@/components/sections/CaseArt";

const ease = [0.16, 1, 0.3, 1] as const;

/** Card colour per case, matched to its scene. */
const THEME: Record<string, string> = {
  "lakshmi-silks-bridal-collection": "from-[#5c1424] via-[#8f2433] to-[#c2410c]",
  "brewhouse-summer-launch": "from-[#082f49] via-[#0c4a6e] to-[#0e7490]",
  "arun-exports-whatsapp-crm": "from-[#052e22] via-[#065f46] to-[#15803d]",
  "metro-heritage-walk-campaign": "from-[#1e1b4b] via-[#3b2a8a] to-[#6d28d9]",
};

/** Bento layout: big/small alternating on desktop, stacked on phones. */
const SPAN = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

/** Case studies as colour-themed bento cards, each with an animated 3D-style scene. */
export default function Work() {
  return (
    <section id="work" className="py-16 md:py-36">
      <Container>
        <div className="grid items-end gap-6 md:grid-cols-12">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] md:col-span-8">
            <SplitWords lines={["Proof, not promises.", "A few recent rooms and rollouts."]} accentLine={0} />
          </h2>
          <div className="md:col-span-4 md:justify-self-end md:text-right">
            <p className="max-w-xs text-muted md:ml-auto">Real briefs, real deadlines and the numbers they moved.</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 md:mt-16 md:gap-5 lg:grid-cols-12">
          {WORK.map((w, i) => (
            <motion.li
              key={w.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease, delay: (i % 2) * 0.1 }}
              className={SPAN[i % SPAN.length]}
            >
              <Link
                href={`/work/${w.slug}`}
                className={clsx(
                  "group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br p-5 text-white shadow-[0_30px_60px_-30px_rgba(20,19,16,0.55)] md:p-7",
                  THEME[w.slug] ?? THEME["metro-heritage-walk-campaign"],
                )}
              >
                {/* Light sweep on hover */}
                <span aria-hidden className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/10 opacity-0 transition-all duration-1000 ease-premium group-hover:left-[120%] group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-white/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ring-1 ring-white/20 backdrop-blur-md">
                    {w.tag}
                  </span>
                  <span className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">{w.client}</span>
                </div>

                {/* Animated scene */}
                <div className="relative -mx-5 my-2 aspect-[4/3] transition-transform duration-1000 ease-premium group-hover:scale-[1.03] md:-mx-7 lg:aspect-auto lg:min-h-[340px] lg:flex-1">
                  <CaseArt slug={w.slug} />
                </div>

                <div className="relative z-10 grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{w.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{w.result}</p>
                  </div>
                  <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-end">
                    <p className="sm:text-right">
                      <span className="block font-display text-4xl font-semibold leading-none tracking-tight text-accent md:text-5xl">{w.results[0].value}</span>
                      <span className="mt-1 block text-xs text-white/60">{w.results[0].label}</span>
                    </p>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-500 ease-premium group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
