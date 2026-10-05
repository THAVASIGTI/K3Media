"use client";

import Image from "next/image";
import { motion } from "motion/react";
import clsx from "clsx";
import { EVENT_GALLERY } from "@/lib/page-content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;
// Gapless 4-column mosaic, 12 cells over 3 rows:
// row 1: [0 0][1 1]   row 2: [0 0][2][3]   row 3: [4 4][5 5]
const SPANS = ["md:col-span-2 md:row-span-2", "md:col-span-2", "", "", "md:col-span-2", "md:col-span-2"];

export default function EventGallery() {
  return (
    <section aria-label="Event gallery" className="py-16 md:py-32">
      <Container>
        <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">From our floor.</h2>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-flow-dense md:auto-rows-[240px] md:grid-cols-4">
          {EVENT_GALLERY.map((key, i) => (
            <motion.figure
              key={key}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease, delay: (i % 4) * 0.07 }}
              className={clsx("group relative overflow-hidden rounded-[1.5rem]", SPANS[i])}
            >
              <Image src={IMAGES[key].src} alt={IMAGES[key].alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105" />
              <figcaption className="absolute inset-x-3 bottom-3 translate-y-2 rounded-xl bg-black/50 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {IMAGES[key].alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
