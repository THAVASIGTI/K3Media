"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import clsx from "clsx";
import { SERVICES, STAGES, type Stage } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitWords from "@/components/motion/SplitWords";

const ease = [0.16, 1, 0.3, 1] as const;

const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

/** Bento layout per stage: one tall photo card, two stacked, and a full-width "sell" panel. */
const CELL = [
  "md:col-span-7 md:row-span-2 md:min-h-[640px]",
  "md:col-span-5 md:min-h-[310px]",
  "md:col-span-5 md:min-h-[310px]",
  "md:col-span-12",
];

function PhotoCard({ stage, index }: { stage: Stage; index: number }) {
  return (
    <div className="group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-[calc(2rem-0.375rem)]">
      <Image
        src={IMAGES[stage.image].src}
        alt={IMAGES[stage.image].alt}
        fill
        sizes={index === 0 ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"}
        className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
      <div className="relative p-7 text-white md:p-9">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-accent-ink">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">{stage.title}</h3>
        <p className="mt-3 max-w-sm text-white/75">{stage.line}</p>
        <ul className="mt-6">
          {stage.services.map((slug) => {
            const s = bySlug(slug);
            return (
              <li key={slug} className="border-t border-white/15">
                <Link href={`/services/${slug}`} className="group/l flex min-h-12 items-center justify-between gap-4 py-3 text-lg font-medium">
                  <span className="transition-transform duration-500 ease-premium group-hover/l:translate-x-1">{s.title}</span>
                  <ArrowUpRight size={18} weight="light" className="shrink-0 transition-transform duration-500 ease-premium group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function SellPanel({ stage, index }: { stage: Stage; index: number }) {
  return (
    <div className="lab-grid grid h-full gap-8 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface p-7 md:grid-cols-12 md:p-10">
      <div className="md:col-span-4">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-accent-ink">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">{stage.title}</h3>
        <p className="mt-3 max-w-sm text-muted">{stage.line}</p>
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[1.25rem]">
          <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
        </div>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 md:col-span-8">
        {stage.services.map((slug, i) => {
          const s = bySlug(slug);
          return (
            <li key={slug} className={clsx(i === 0 && "sm:col-span-2")}>
              <Link
                href={`/services/${slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-[1.25rem] bg-canvas p-6 ring-1 ring-black/5 transition-colors duration-500 hover:bg-accent"
              >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{s.title}</h4>
                <ArrowUpRight size={20} weight="light" className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-accent-ink/80">{s.line}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors group-hover:text-accent-ink/70">
                  {s.points.slice(0, 2).join(" / ")}
                </p>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className={heading ? "py-24 md:py-36" : "pb-24 md:pb-36"}>
      <Container>
        {heading && (
        <>
        <Eyebrow>Brand building, start to sale</Eyebrow>
        <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          <SplitWords lines={["Four moves that turn a name", "into a brand that sells."]} accentLine={1} />
        </h2>
        </>
        )}

        <div className={clsx("grid grid-cols-1 gap-4 md:grid-flow-dense md:grid-cols-12", heading && "mt-14 md:mt-20")}>
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.1, ease, delay: (i % 3) * 0.08 }}
              className={clsx("rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5", CELL[i])}
            >
              {stage.key === "sell" ? <SellPanel stage={stage} index={i} /> : <PhotoCard stage={stage} index={i} />}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
