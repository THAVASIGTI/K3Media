"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, Clock, UsersThree } from "@phosphor-icons/react";
import clsx from "clsx";
import { EVENT_DETAILS } from "@/lib/page-content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";

const wipe = [0.76, 0, 0.24, 1] as const;
const ease = [0.16, 1, 0.3, 1] as const;

/** Each event type in depth; photos wipe open from alternating sides. */
export default function EventDetails() {
  return (
    <section className="py-16 md:py-32">
      <Container className="space-y-24 md:space-y-36">
        {EVENT_DETAILS.map((e, i) => {
          const flip = i % 2 === 1;
          return (
            // In-view is observed on the row: a fully clipped child has no visible area, so it would never trigger.
            <motion.article
              key={e.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid items-center gap-10 md:grid-cols-12 md:gap-14"
            >
              <motion.div
                className={clsx("relative aspect-[4/3] overflow-hidden rounded-[2rem] md:col-span-7", flip && "md:order-2")}
                variants={{
                  hidden: { clipPath: flip ? "inset(0% 0% 0% 100% round 2rem)" : "inset(0% 100% 0% 0% round 2rem)" },
                  show: { clipPath: "inset(0% 0% 0% 0% round 2rem)", transition: { duration: 1.2, ease: wipe } },
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{ hidden: { scale: 1.25 }, show: { scale: 1, transition: { duration: 1.8, ease } } }}
                >
                  <Image src={IMAGES[e.image].src} alt={IMAGES[e.image].alt} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
                </motion.div>
              </motion.div>

              <motion.div
                className={clsx("md:col-span-5", flip && "md:order-1")}
                variants={{ hidden: { opacity: 0, x: flip ? -40 : 40 }, show: { opacity: 1, x: 0, transition: { duration: 1, ease, delay: 0.25 } } }}
              >
                <h2 className="font-display text-[clamp(2rem,3.4vw,3.2rem)] font-semibold leading-none tracking-[-0.03em]">{e.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{e.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium ring-1 ring-black/5">
                    <UsersThree size={16} className="text-accent-deep" /> {e.guests}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium ring-1 ring-black/5">
                    <Clock size={16} className="text-accent-deep" /> Book {e.lead} ahead
                  </span>
                </div>
                <ul className="mt-8 space-y-3 border-t border-black/10 pt-7">
                  {e.handles.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
                        <Check size={13} weight="bold" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          );
        })}
      </Container>
    </section>
  );
}
