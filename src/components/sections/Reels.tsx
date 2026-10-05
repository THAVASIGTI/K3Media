"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { InstagramLogo, Play, YoutubeLogo, ArrowUpRight } from "@phosphor-icons/react";
import clsx from "clsx";
import { CONTACT, SHORTS, type Short } from "@/lib/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitWords from "@/components/motion/SplitWords";

const ease = [0.16, 1, 0.3, 1] as const;

/** 9:16 card that shows a thumbnail first and only loads the YouTube player when tapped. */
function ShortCard({ short, index }: { short: Short; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease, delay: index * 0.08 }}
      className={clsx("w-[68vw] shrink-0 snap-start sm:w-[44vw] md:w-auto", index % 2 === 1 && "md:mt-16")}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ink ring-1 ring-black/10">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${short.id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
            title={short.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${short.title}`} className="group absolute inset-0 text-left">
            <Image
              src={short.thumb}
              alt=""
              fill
              sizes="(max-width: 768px) 68vw, 18vw"
              className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />
            <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-ink shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-premium group-hover:scale-110">
              <Play size={22} weight="fill" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 px-1">
        <span className="line-clamp-2 block text-[0.95rem] font-medium leading-snug">{short.title}</span>
        <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{short.views}</span>
      </figcaption>
    </motion.figure>
  );
}

export default function Reels() {
  return (
    <section aria-labelledby="reels-title" className="overflow-hidden py-16 md:py-36">
      <Container className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Eyebrow>From our channels</Eyebrow>
            <h2 id="reels-title" className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <SplitWords lines={["We practise", "what we post."]} accentLine={1} />
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Short, useful tips on ads, editing and social media, made by the same team that runs your brand.
            </p>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center gap-5 rounded-[1.75rem] bg-accent p-5 text-accent-ink transition-transform duration-500 ease-premium hover:-translate-y-1"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent-ink text-accent">
                <InstagramLogo size={28} weight="light" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold">{CONTACT.instagramHandle}</span>
                <span className="block text-sm text-accent-ink/70">1.5K followers · 62 posts</span>
              </span>
              <ArrowUpRight size={20} className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-5 rounded-[1.75rem] bg-surface p-5 ring-1 ring-black/5 transition-transform duration-500 ease-premium hover:-translate-y-1"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-ink text-canvas">
                <YoutubeLogo size={28} weight="light" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold">K3 Media on YouTube</span>
                <span className="block text-sm text-muted">Watch all Shorts</span>
              </span>
              <ArrowUpRight size={20} className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:col-span-8 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-16">
          {SHORTS.map((s, i) => (
            <ShortCard key={s.id} short={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
