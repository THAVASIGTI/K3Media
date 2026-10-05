"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowsHorizontal } from "@phosphor-icons/react";
import { MILESTONES } from "@/lib/page-content";
import Container from "@/components/ui/Container";

/** Our story as a draggable strip of year cards. */
export default function Milestones() {
  const track = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (track.current && viewport.current) setLimit(Math.max(0, track.current.scrollWidth - viewport.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="overflow-hidden py-16 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            From one camera to <span className="hl">one brand-building team.</span>
          </h2>
          <p className="flex items-center gap-2 text-sm text-muted">
            <ArrowsHorizontal size={18} className="text-accent-deep" /> Drag to explore
          </p>
        </div>
        <div ref={viewport} className="mt-14">
          <motion.div
            ref={track}
            drag="x"
            dragConstraints={{ left: -limit, right: 0 }}
            dragElastic={0.08}
            dragTransition={{ power: 0.25, timeConstant: 260 }}
            className="flex w-max cursor-grab gap-5 active:cursor-grabbing"
          >
            {MILESTONES.map((m, i) => (
              <motion.article
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="relative flex h-[380px] w-[300px] shrink-0 select-none flex-col justify-between rounded-[2rem] bg-surface p-8 ring-1 ring-black/5 md:w-[340px]"
              >
                <span className="font-display text-[5.5rem] font-bold leading-none tracking-tighter text-accent">{m.year}</span>
                <div>
                  <span className="mb-5 block h-px w-12 bg-black/20" />
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{m.body}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
