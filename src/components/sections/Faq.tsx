"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import clsx from "clsx";
import { FAQ } from "@/lib/content";
import Container from "@/components/ui/Container";

export default function Faq({ items = FAQ, title = "Questions," }: { items?: { q: string; a: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-title" className="pb-24 md:pb-36">
      <Container className="grid gap-10 md:grid-cols-12">
        <h2 id="faq-title" className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.03em] md:col-span-4">
          {title} <span className="hl">answered.</span>
        </h2>
        <ul className="md:col-span-8">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-t border-black/10 last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-16 w-full items-center gap-6 py-5 text-left text-lg md:text-xl"
                  >
                    <span className={clsx("transition-colors duration-300", isOpen ? "text-ink" : "text-ink/70")}>{f.q}</span>
                    <Plus size={20} weight="light" className={clsx("ml-auto shrink-0 transition-transform duration-500 ease-premium", isOpen && "rotate-45 text-accent-deep")} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
