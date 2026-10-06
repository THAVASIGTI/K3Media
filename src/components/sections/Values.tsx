"use client";

import { motion } from "motion/react";
import { ChatCircleText, ChartLineUp, Handshake, Key } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { VALUES } from "@/lib/page-content";
import Container from "@/components/ui/Container";
import { Tile } from "@/components/art/SceneKit";
import { loop } from "@/components/sections/CaseArt";

const ICONS: Icon[] = [ChartLineUp, Handshake, ChatCircleText, Key];
const ease = [0.16, 1, 0.3, 1] as const;

/** Values as a bento on dark: each card has a floating 3D icon and an accent sweep on hover. */
export default function Values() {
  return (
    <section className="bg-ink py-16 text-canvas md:py-32">
      <Container>
        <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          What we <span className="text-accent">stand for.</span>
        </h2>
        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-12">
          {VALUES.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: (i % 2) * 0.08 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white/[0.05] p-7 ring-1 ring-white/10 md:p-10 ${i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"}`}
            >
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-premium group-hover:scale-x-100" />
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <motion.div className="w-16 md:w-20" animate={{ y: [0, -8, 0], rotate: [i % 2 ? 6 : -6, 0, i % 2 ? 6 : -6] }} transition={loop(4 + i * 0.5, i * 0.3)}>
                  <Tile icon={ICONS[i % ICONS.length]} tone={i % 2 ? "bg-white text-ink" : "bg-accent text-accent-ink"} className="aspect-square w-full" />
                </motion.div>
              </div>
              <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight transition-transform duration-700 ease-premium group-hover:translate-x-1 md:mt-12">{v.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-canvas/65">{v.body}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
