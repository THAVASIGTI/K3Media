"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { WORK } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import SplitWords from "@/components/motion/SplitWords";

const ease = [0.16, 1, 0.3, 1] as const;
const loop = (duration: number, delay = 0) => ({ duration, delay, repeat: Infinity, ease: "easeInOut" as const });

/** Case cards with floating 3D renders: a swipe row on phones, a 2x2 grid from md up. */
export default function Work() {
  return (
    <section id="work" className="py-16 md:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-4xl font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <SplitWords lines={["Proof, not promises.", "A few recent rooms and rollouts."]} accentLine={0} />
          </h2>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint md:hidden">
            Swipe <ArrowRight size={12} />
          </p>
        </div>

        {/* The row triggers the reveal, so cards still off to the side on phones appear too */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:mt-20 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {WORK.map((w, i) => (
            <motion.li
              key={w.slug}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
              className="w-[86%] shrink-0 snap-center md:w-auto"
            >
              <Link href={`/work/${w.slug}`} className="group block h-full rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10">
                <article className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink text-canvas">
                  {/* Animated 3D stage */}
                  <div className="relative aspect-[5/4] overflow-hidden md:aspect-[16/11]">
                    <motion.div
                      className="absolute -inset-[6%]"
                      animate={{ y: ["-2%", "2%", "-2%"], rotate: [-1.2, 1.2, -1.2], scale: [1.02, 1.07, 1.02] }}
                      transition={loop(9 + i * 1.5)}
                    >
                      <div className="absolute inset-0 transition-transform duration-1000 ease-premium group-hover:scale-110">
                        <Image src={IMAGES[w.art].src} alt={IMAGES[w.art].alt} fill sizes="(max-width: 768px) 86vw, 50vw" className="object-cover" />
                      </div>
                    </motion.div>

                    {/* Drifting glow */}
                    <motion.span
                      aria-hidden
                      className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/40 blur-3xl"
                      animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.9, 1.15, 0.9] }}
                      transition={loop(6, i * 0.7)}
                    />
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

                    {/* Floating result badge */}
                    <motion.div
                      className="absolute left-4 top-4 rounded-2xl bg-white/90 px-3.5 py-2.5 text-ink shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md md:left-6 md:top-6"
                      animate={{ y: [0, -7, 0] }}
                      transition={loop(4.5, 0.3 + i * 0.4)}
                    >
                      <span className="block font-display text-2xl font-semibold leading-none tracking-tight">{w.results[0].value}</span>
                      <span className="mt-1 block text-[11px] text-muted">{w.results[0].label}</span>
                    </motion.div>

                    {/* Floating tag */}
                    <motion.span
                      className="absolute bottom-4 right-4 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-ink md:bottom-6 md:right-6"
                      animate={{ y: [0, 6, 0], rotate: [-2, 2, -2] }}
                      transition={loop(5.5, i * 0.5)}
                    >
                      {w.tag}
                    </motion.span>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                      <span>{w.client}</span>
                      <span>
                        {String(i + 1).padStart(2, "0")} / {String(WORK.length).padStart(2, "0")}
                      </span>
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{w.title}</h3>
                    <p className="mb-6 mt-3 text-accent">{w.result}</p>
                    <span className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium">
                      View case study
                      <span className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-ink">
                        <ArrowUpRight size={16} className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
