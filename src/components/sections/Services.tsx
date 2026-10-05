"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUpRight, InstagramLogo } from "@phosphor-icons/react";
import clsx from "clsx";
import { CONTACT, SERVICES, STAGES, type Stage } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ShortPlayer from "@/components/ui/ShortPlayer";
import SplitWords from "@/components/motion/SplitWords";

const ease = [0.16, 1, 0.3, 1] as const;
const N = STAGES.length;
const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const num = (i: number) => String(i + 1).padStart(2, "0");

/* ---------- shared pieces ---------- */

function ServiceRows({ stage, dark = false }: { stage: Stage; dark?: boolean }) {
  const dense = stage.services.length > 3;
  return (
    <ul className={clsx("divide-y", dark ? "divide-white/15" : "divide-black/10")}>
      {stage.services.map((slug, i) => {
        const s = bySlug(slug);
        return (
          <motion.li
            key={slug}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.06 }}
          >
            <Link href={`/services/${slug}`} className={clsx("group flex items-center gap-4", dense ? "py-2.5" : "py-3.5")}>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold tracking-tight transition-transform duration-500 ease-premium group-hover:translate-x-1 md:text-xl">
                  {s.title}
                </span>
                <span className={clsx("mt-0.5 block truncate", dense ? "text-xs" : "text-sm", dark ? "text-white/60" : "text-muted")}>{s.points.join(" · ")}</span>
              </span>
              <span
                className={clsx(
                  "grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-500",
                  dark ? "bg-white/10 group-hover:bg-accent group-hover:text-accent-ink" : "bg-black/5 group-hover:bg-accent",
                )}
              >
                <ArrowUpRight size={16} className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

/** Instagram profile preview used for the events stage. */
function InstagramCard({ className }: { className?: string }) {
  const grid = ["event-corporate", "event-commercial", "vip-management", "work-4", "event-corporate-3", "hero-2"] as const;
  return (
    <a
      href={CONTACT.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("group block overflow-hidden rounded-[1.75rem] bg-surface p-4 ring-[6px] ring-ink", className)}
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[conic-gradient(from_200deg,#f58529,#dd2a7b,#8134af,#515bd4,#f58529)] p-[2px]">
          <span className="grid size-11 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-ink ring-2 ring-surface">K3</span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-semibold">{CONTACT.instagramHandle}</span>
          <span className="block text-[11px] text-muted">1.5K followers · 62 posts</span>
        </span>
      </div>
      <span className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-[#0095f6] py-1.5 text-[12px] font-semibold text-white transition-opacity group-hover:opacity-90">
        <InstagramLogo size={14} weight="bold" /> Follow
      </span>
      <div className="mt-3 grid grid-cols-3 gap-1">
        {grid.map((k) => (
          <span key={k} className="relative aspect-square overflow-hidden rounded-md">
            <Image src={IMAGES[k].src} alt="" fill sizes="80px" className="object-cover" />
          </span>
        ))}
      </div>
    </a>
  );
}

function StageMedia({ stage, compact = false }: { stage: Stage; compact?: boolean }) {
  if (stage.media.kind === "short") return <ShortPlayer id={stage.media.id} sizes={compact ? "160px" : "260px"} compact={compact} />;
  return <InstagramCard />;
}

/* ---------- desktop: pinned scroll story ---------- */

function RailTab({ i, progress, active, onClick, title }: { i: number; progress: MotionValue<number>; active: boolean; onClick: () => void; title: string }) {
  const fill = useTransform(progress, (v) => Math.min(1, Math.max(0, v * N - i)));
  return (
    <button type="button" onClick={onClick} aria-current={active ? "step" : undefined} className="group flex-1 text-left">
      <span className="relative block h-0.5 overflow-hidden rounded-full bg-black/10">
        <motion.span style={{ scaleX: fill }} className="absolute inset-0 origin-left bg-accent" />
      </span>
      <span className={clsx("mt-3 flex items-baseline gap-2 text-sm transition-colors duration-300", active ? "text-ink" : "text-muted group-hover:text-ink")}>
        <span className="font-mono text-[11px]">{num(i)}</span>
        <span className="truncate font-medium">{title}</span>
      </span>
    </button>
  );
}

function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N)))));
  const stage = STAGES[active];

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const y = top + ((el.offsetHeight - window.innerHeight) / N) * i + 4;
    if (lenis) lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="relative hidden md:block" style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Text */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.55, ease }}
                >
                  <div className="flex items-end gap-5">
                    <span className="overflow-hidden">
                      <motion.span
                        className="block font-display text-[clamp(4.5rem,8vw,8rem)] font-bold leading-[0.8] tracking-tighter text-accent"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.7, ease }}
                      >
                        {num(active)}
                      </motion.span>
                    </span>
                    <span className="pb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Stage {active + 1} of {N}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-none tracking-[-0.03em]">{stage.title}</h3>
                  <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-muted">{stage.detail}</p>
                  <div className="mt-5 max-w-lg">
                    <ServiceRows stage={stage} />
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 flex items-baseline gap-3"
                  >
                    <span className="hl font-display text-3xl font-semibold tracking-tight">{stage.stat.value}</span>
                    <span className="text-sm text-muted">{stage.stat.label}</span>
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Media stack */}
            <div className="relative h-[min(68vh,640px)] lg:col-span-6">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`photo-${stage.key}`}
                  className="absolute left-0 top-0 h-[86%] w-[68%] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(20,19,16,0.45)]"
                  initial={{ opacity: 0, y: 80, rotate: -10, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
                  exit={{ opacity: 0, y: -60, rotate: 4, scale: 0.95 }}
                  transition={{ duration: 0.8, ease }}
                >
                  <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="40vw" className="object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 max-w-[60%] rounded-2xl bg-white/90 px-3.5 py-2 text-xs font-semibold leading-snug text-ink backdrop-blur-md">
                    {stage.line}
                  </span>
                </motion.div>
                <motion.div
                  key={`media-${stage.key}`}
                  className="absolute bottom-0 right-0 w-[40%] max-w-[270px]"
                  initial={{ opacity: 0, y: 120, rotate: 12 }}
                  animate={{ opacity: 1, y: 0, rotate: 4 }}
                  exit={{ opacity: 0, y: 80, rotate: 10 }}
                  transition={{ duration: 0.9, ease, delay: 0.12 }}
                >
                  <StageMedia stage={stage} />
                </motion.div>
              </AnimatePresence>
              <motion.span
                aria-hidden
                className="absolute -right-10 top-6 size-40 rounded-full bg-accent/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Progress rail */}
          <div className="mt-8 flex gap-4">
            {STAGES.map((s, i) => (
              <RailTab key={s.key} i={i} title={s.title} progress={scrollYProgress} active={i === active} onClick={() => jump(i)} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

/* ---------- mobile: stacked cards ---------- */

function MobileStages() {
  return (
    <Container className="space-y-6 md:hidden">
      {STAGES.map((stage, i) => (
        <motion.article
          key={stage.key}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease }}
          className="overflow-hidden rounded-[2rem] bg-surface ring-1 ring-black/5"
        >
          <div className="relative aspect-[4/3]">
            <Image src={IMAGES[stage.image].src} alt={IMAGES[stage.image].alt} fill sizes="100vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-5 font-display text-6xl font-bold leading-none tracking-tighter text-accent">{num(i)}</span>
          </div>
          <div className="p-6">
            <h3 className="font-display text-3xl font-semibold tracking-tight">{stage.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{stage.detail}</p>
            <div className="mt-4">
              <ServiceRows stage={stage} />
            </div>
            <div className="mt-6 flex items-end gap-5">
              <div className="w-36 shrink-0 -rotate-2">
                <StageMedia stage={stage} compact />
              </div>
              <p className="pb-2">
                <span className="hl block w-fit font-display text-3xl font-semibold tracking-tight">{stage.stat.value}</span>
                <span className="mt-2 block text-sm text-muted">{stage.stat.label}</span>
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </Container>
  );
}

export default function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className={heading ? "pt-24 md:pt-36" : ""}>
      {heading && (
        <Container>
          <Eyebrow>Brand building, start to sale</Eyebrow>
          <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <SplitWords lines={["Four moves that turn a name", "into a brand that sells."]} accentLine={1} />
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Scroll through the journey we run for every brand, with tips from our own channel along the way.
          </p>
        </Container>
      )}
      <div className="pb-24 pt-10 md:pb-16 md:pt-0">
        <MobileStages />
        <Story />
      </div>
    </section>
  );
}
