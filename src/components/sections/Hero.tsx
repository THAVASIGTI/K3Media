"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { IMAGES } from "@/lib/images";
import { CONTACT, CTA_LABEL } from "@/lib/content";
import SplitWords from "@/components/motion/SplitWords";
import MagneticButton from "@/components/motion/MagneticButton";
import Container from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-30%"]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100dvh] items-end overflow-hidden pb-14 pt-28 md:pb-20">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: "inset(12% 8% 12% 8% round 2rem)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 0rem)" }}
        transition={{ duration: 1.6, ease, delay: 0.1 }}
      >
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
          <Image
            src={IMAGES["hero-1"].src}
            alt={IMAGES["hero-1"].alt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/55 to-canvas/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div style={{ y: textY }} className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-12">
            <h1 className="font-display text-[clamp(2.4rem,6.2vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <SplitWords lines={["Stories that move people.", "Systems that move business."]} accentLine={1} delay={0.5} onMount />
            </h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              K3 Media is a creative studio and a software lab. Shoots, campaigns and events, plus the CRM that turns attention into sales.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.15 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton href="#contact">{CTA_LABEL}</MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} variant="ghost" external>
                WhatsApp us
              </MagneticButton>
            </motion.div>
          </div>

          <motion.a
            href="#services"
            aria-label="Explore services"
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.3 }}
            className="absolute bottom-0 right-0 hidden size-36 place-items-center md:grid"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden>
              <defs>
                <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-ink font-mono text-[8.5px] uppercase tracking-[0.3em]">
                <textPath href="#ring">Studio · Lab · Studio · Lab · </textPath>
              </text>
            </svg>
            <span className="grid size-14 place-items-center rounded-full bg-accent text-xl font-display font-bold text-accent-ink">K3</span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
