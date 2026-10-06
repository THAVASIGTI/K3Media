"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Camera, Code, Handshake, Megaphone, Users, WhatsappLogo } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { MILESTONES } from "@/lib/page-content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { Tile } from "@/components/art/SceneKit";

const ICONS: Icon[] = [Camera, Handshake, Megaphone, Code, WhatsappLogo, Users];
const ease = [0.16, 1, 0.3, 1] as const;

/** Our story as a vertical timeline; the rail fills as you scroll and each year's icon lights up. */
export default function Milestones() {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="py-16 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              From one camera to <span className="hl">one brand-building team.</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted">Eight years, two teams and one idea: the people who make you seen should also help you sell.</p>
          </div>
        </div>

        <ol ref={list} className="relative md:col-span-7">
          {/* Rail */}
          <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-0.5 bg-black/10 md:left-[35px]" />
          <motion.span aria-hidden style={{ scaleY: fill }} className="absolute bottom-6 left-[27px] top-6 w-0.5 origin-top bg-accent md:left-[35px]" />

          {MILESTONES.map((m, i) => (
            <motion.li
              key={m.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="relative grid grid-cols-[56px_1fr] gap-5 pb-10 last:pb-0 md:grid-cols-[72px_1fr] md:gap-8 md:pb-14"
            >
              <motion.div
                initial={{ scale: 0.6, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="relative z-10"
              >
                <Tile icon={ICONS[i % ICONS.length]} tone={i === MILESTONES.length - 1 ? "bg-accent text-accent-ink" : "bg-ink text-accent"} className="aspect-square w-full" />
              </motion.div>
              <div className="rounded-[1.75rem] bg-surface p-6 ring-1 ring-black/5 md:p-8">
                <span className="font-display text-5xl font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-accent-deep)] md:text-6xl">{m.year}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
