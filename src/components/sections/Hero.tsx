"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IMAGES } from "@/lib/images";
import { CONTACT, CTA_LABEL } from "@/lib/content";
import SplitWords from "@/components/motion/SplitWords";
import MagneticButton from "@/components/motion/MagneticButton";
import Container from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

/** Split hero: headline on the light canvas, framed portrait collage on the right. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const mainScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pb-16 pt-28 md:min-h-[100dvh] md:pb-20 md:pt-32">
      <Container className="grid items-center gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 lg:col-span-7">
          <h1 className="font-display text-[clamp(2.7rem,6.4vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <SplitWords lines={["We build brands", "people remember."]} accentLine={1} delay={0.3} onMount />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            Shoots, films, social, events, and the website and CRM behind them. One team from first impression to final sale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <MagneticButton href="#contact">{CTA_LABEL}</MagneticButton>
            <MagneticButton href={CONTACT.whatsapp} variant="ghost" external>
              WhatsApp us
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative md:col-span-6 lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 2rem)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem]"
          >
            <motion.div style={{ y: mainY, scale: mainScale }} className="absolute -inset-y-[8%] inset-x-0">
              <Image
                src={IMAGES["hero-1"].src}
                alt={IMAGES["hero-1"].alt}
                fill
                preload
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[35%_center]"
              />
            </motion.div>
          </motion.div>

          <motion.figure
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 1.2, ease, delay: 0.9 }}
            className="absolute -bottom-8 -left-2 w-[42%] max-w-[210px] rounded-[1.5rem] bg-surface p-1.5 shadow-[0_24px_60px_-20px_rgba(20,19,16,0.35)] md:-left-10 md:bottom-10"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(1.5rem-0.375rem)]">
              <Image src={IMAGES["hero-2"].src} alt={IMAGES["hero-2"].alt} fill sizes="210px" className="object-cover" />
            </div>
            <figcaption className="px-2 pb-1 pt-2 text-xs text-muted">Wedding &amp; event films</figcaption>
          </motion.figure>

          <motion.a
            href="#services"
            aria-label="Explore services"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.1 }}
            className="absolute -top-8 right-4 grid size-28 place-items-center md:-right-6 md:size-32"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden>
              <defs>
                <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="49" className="fill-surface" />
              <text className="fill-ink font-mono text-[8.5px] uppercase tracking-[0.3em]">
                <textPath href="#ring">Brand · Build · Grow · Sell · </textPath>
              </text>
            </svg>
            <span className="relative grid size-12 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-ink">K3</span>
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
