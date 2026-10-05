"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { WORK } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import SplitWords from "@/components/motion/SplitWords";

/** Case switcher: project list on one side, large crossfading frame on the other. */
export default function Work() {
  const [i, setI] = useState(0);
  const w = WORK[i];

  return (
    <section id="work" className="py-16 md:py-36">
      <Container>
        <h2 className="max-w-4xl font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          <SplitWords lines={["Proof, not promises.", "A few recent rooms and rollouts."]} accentLine={0} />
        </h2>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-12 md:gap-12">
          <div className="order-2 md:order-1 md:col-span-5">
            <ul>
              {WORK.map((item, idx) => (
                <li key={item.client} className="border-t border-black/10 last:border-b">
                  <button
                    type="button"
                    aria-pressed={i === idx}
                    onClick={() => setI(idx)}
                    onPointerEnter={(e) => e.pointerType === "mouse" && setI(idx)}
                    className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 text-left"
                  >
                    <span className={clsx("font-display text-xl font-medium tracking-tight transition-colors duration-500 md:text-2xl", i === idx ? "text-ink" : "text-black/40 group-hover:text-black/70")}>
                      {item.client}
                    </span>
                    <span className={clsx("font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-500", i === idx ? "text-accent-deep" : "text-faint")}>
                      {item.tag}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 md:col-span-7">
            <div className="rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={w.client}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image src={IMAGES[w.image].src} alt={IMAGES[w.image].alt} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={w.client}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 p-6 md:p-10"
                  >
                    <h3 className="max-w-lg font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">{w.title}</h3>
                    <p className="mt-3 text-accent">{w.result}</p>
                    <Link
                      href={`/work/${w.slug}`}
                      className="group/c mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/15 px-5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-md transition-colors hover:bg-white/25"
                    >
                      View case study
                      <ArrowUpRight size={16} className="transition-transform duration-500 ease-premium group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
