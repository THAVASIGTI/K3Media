"use client";

import { motion } from "motion/react";
import {
  Bell,
  ChartLineUp,
  ChatCircle,
  CheckCircle,
  Checks,
  Heart,
  Lightning,
  UsersThree,
} from "@phosphor-icons/react";
import clsx from "clsx";
import type { HeroGraphic } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;
const chip =
  "rounded-2xl bg-white/90 text-ink shadow-[0_18px_40px_-16px_rgba(20,19,16,0.45)] ring-1 ring-black/5 backdrop-blur-md";

/** Pops in after the photo wipe, then drifts gently. */
function Float({ children, className, i, drift = 6 }: { children: React.ReactNode; className: string; i: number; drift?: number }) {
  return (
    <motion.div
      className={clsx("absolute", className)}
      initial={{ opacity: 0, y: 18, scale: 0.92, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.3 } }}
      transition={{ duration: 0.8, ease, delay: 0.55 + i * 0.16 }}
    >
      <motion.div animate={{ y: [0, -drift, 0] }} transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

function Camera() {
  return (
    <>
      <Float i={0} drift={0} className="left-[46%] top-[24%] h-[34%] w-[38%]">
        <div className="relative size-full">
          {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
            <span key={c} className={clsx("absolute size-7 rounded-[4px] border-accent", c)} />
          ))}
          <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          <span className="absolute -top-6 left-0 rounded-md bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold text-accent-ink">AF · FACE</span>
        </div>
      </Float>
      <Float i={1} className="left-4 top-4 md:left-5 md:top-5">
        <div className={clsx(chip, "flex items-center gap-2 px-3 py-2 font-mono text-[11px]")}>
          <span className="size-2 animate-pulse rounded-full bg-red-500" />
          ISO 200 · f/2.8 · 1/250
        </div>
      </Float>
      <Float i={2} className="right-4 top-[58%] md:right-5">
        <div className={clsx(chip, "flex items-center gap-3 px-3.5 py-3")}>
          <CheckCircle size={22} weight="fill" className="text-accent-deep" />
          <div className="text-[12px] leading-tight">
            <p className="font-semibold">Album delivered</p>
            <p className="text-muted">186 edited photos</p>
          </div>
        </div>
      </Float>
    </>
  );
}

function Social() {
  return (
    <>
      <Float i={0} className="left-4 top-4 md:left-5 md:top-5">
        <div className={clsx(chip, "flex items-center gap-2 px-3.5 py-2.5 text-[13px] font-semibold")}>
          <Heart size={18} weight="fill" className="text-rose-500" />
          12.4K
          <span className="mx-1 h-4 w-px bg-black/10" />
          <ChatCircle size={18} weight="fill" className="text-ink/70" />
          318
        </div>
      </Float>
      <Float i={1} className="right-4 top-[26%] max-w-[62%] md:right-5">
        <div className={clsx(chip, "flex items-start gap-2.5 px-3 py-2.5")}>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent font-display text-[10px] font-bold text-accent-ink">AK</span>
          <p className="text-[12px] leading-snug">
            <span className="font-semibold">anu.kitchen</span> This reel is everything. Ordering today!
          </p>
        </div>
      </Float>
      <Float i={2} className="right-4 top-[50%] hidden sm:block md:right-5">
        <div className={clsx(chip, "px-3.5 py-3")}>
          <p className="flex items-center gap-1.5 text-[12px] font-semibold">
            <UsersThree size={16} className="text-accent-deep" /> +2,340 followers
          </p>
          <svg viewBox="0 0 120 32" className="mt-2 h-7 w-[120px]" aria-hidden>
            <path d="M0 28 L18 24 L34 26 L50 18 L66 20 L82 11 L98 13 L120 3" fill="none" stroke="var(--color-accent-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[10px] text-muted">this week</p>
        </div>
      </Float>
    </>
  );
}

function Crm() {
  return (
    <>
      <Float i={0} className="left-4 top-4 w-[64%] md:left-5 md:top-5">
        <div className="space-y-2">
          <div className={clsx(chip, "rounded-tl-md px-3 py-2 text-[12px] leading-snug")}>
            Hi! Is the 2BHK in Anna Nagar still available?
            <span className="mt-1 block text-right text-[10px] text-muted">10:42</span>
          </div>
          <div className="ml-6 rounded-2xl rounded-tr-md bg-[#d9fdd3] px-3 py-2 text-[12px] leading-snug text-ink shadow-[0_18px_40px_-16px_rgba(20,19,16,0.45)]">
            Yes! Sharing photos and price now.
            <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted">
              10:42 <Checks size={14} weight="bold" className="text-sky-500" />
            </span>
          </div>
        </div>
      </Float>
      <Float i={2} className="right-4 top-[50%] md:right-5">
        <div className={clsx(chip, "w-[190px] px-3.5 py-3")}>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-ink">New lead</span>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-rose-600">
              <Lightning size={12} weight="fill" /> Hot
            </span>
          </div>
          <p className="mt-2 text-[13px] font-semibold">Ramesh K.</p>
          <p className="text-[11px] text-muted">via WhatsApp · assigned to Priya</p>
        </div>
      </Float>
    </>
  );
}

function EventPass() {
  return (
    <>
      <Float i={0} className="left-4 top-4 md:left-5 md:top-5">
        <div className="w-[180px] overflow-hidden rounded-2xl bg-ink text-canvas shadow-[0_18px_40px_-16px_rgba(20,19,16,0.6)]">
          <div className="bg-accent px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-ink">VIP Pass</div>
          <div className="px-3.5 py-3">
            <p className="font-display text-[15px] font-semibold leading-tight">Dealer Meet 2026</p>
            <p className="mt-1 text-[11px] text-canvas/60">Chennai Trade Centre</p>
            <div className="mt-3 flex h-5 items-end gap-[2px]" aria-hidden>
              {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 3].map((w, k) => (
                <span key={k} className="h-full bg-canvas/80" style={{ width: w }} />
              ))}
            </div>
          </div>
        </div>
      </Float>
      <Float i={1} className="right-4 top-[54%] md:right-5">
        <div className={clsx(chip, "w-[180px] px-3.5 py-3")}>
          <p className="text-[11px] text-muted">Checked in</p>
          <p className="font-display text-xl font-semibold tabular-nums">
            986 <span className="text-[12px] font-normal text-muted">/ 1,200</span>
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/10">
            <motion.div className="h-full origin-left rounded-full bg-accent" initial={{ scaleX: 0 }} animate={{ scaleX: 0.82 }} transition={{ duration: 1.4, ease, delay: 1 }} />
          </div>
        </div>
      </Float>
    </>
  );
}

function Video() {
  const tracks = [
    [["w-[22%]", "bg-accent"], ["w-[30%]", "bg-accent/70"], ["w-[18%]", "bg-accent"], ["w-[20%]", "bg-accent/60"]],
    [["w-[40%]", "bg-white/70"], ["w-[34%]", "bg-white/50"], ["w-[16%]", "bg-white/70"]],
    [["w-[90%]", "bg-sky-300/70"]],
  ];
  return (
    <>
      <Float i={0} drift={3} className="left-4 right-[28%] top-4 md:left-5 md:top-5">
        <div className="relative overflow-hidden rounded-2xl bg-black/70 p-3 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-white/60">
            <span>REEL_FINAL_v3</span>
            <span>00:14 / 00:30</span>
          </div>
          <div className="space-y-1.5">
            {tracks.map((row, r) => (
              <div key={r} className="flex gap-1">
                {row.map(([w, c], k) => (
                  <span key={k} className={clsx("h-3 rounded-[3px]", w, c)} />
                ))}
              </div>
            ))}
          </div>
          <motion.span
            className="absolute bottom-2 top-7 w-0.5 rounded-full bg-red-500"
            initial={{ left: "18%" }}
            animate={{ left: ["18%", "78%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </Float>
      <Float i={1} className="right-4 top-[48%] md:right-5">
        <div className={clsx(chip, "px-3.5 py-3")}>
          <p className="flex items-center gap-1.5 text-[11px] text-muted">
            <ChartLineUp size={14} className="text-accent-deep" /> Meta ads · 7 days
          </p>
          <p className="mt-1 font-display text-2xl font-semibold tracking-tight">4.2x ROAS</p>
          <p className="text-[11px] text-muted">CTR 3.1% · CPC ₹6.40</p>
        </div>
      </Float>
    </>
  );
}

function Web() {
  return (
    <>
      <Float i={0} className="left-4 top-4 w-[62%] md:left-5 md:top-5">
        <div className={clsx(chip, "overflow-hidden p-0")}>
          <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="ml-2 flex-1 truncate rounded-full bg-black/5 px-2 py-0.5 font-mono text-[10px] text-muted">yourbrand.in</span>
          </div>
          <div className="flex gap-3 p-3">
            <div className="flex-1 space-y-1.5">
              <span className="block h-2.5 w-4/5 rounded bg-ink" />
              <span className="block h-2 w-full rounded bg-black/10" />
              <span className="block h-2 w-3/5 rounded bg-black/10" />
              <span className="mt-2 block h-4 w-14 rounded-full bg-accent" />
            </div>
            <div className="relative grid size-12 shrink-0 place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden>
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgb(0 0 0 / 0.08)" strokeWidth="3.5" />
                <motion.circle
                  cx="18" cy="18" r="15" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round"
                  pathLength={1} initial={{ pathLength: 0 }} animate={{ pathLength: 0.98 }} transition={{ duration: 1.4, ease, delay: 0.9 }}
                />
              </svg>
              <span className="font-display text-[13px] font-semibold text-emerald-600">98</span>
            </div>
          </div>
        </div>
      </Float>
      <Float i={2} className="right-4 top-[52%] md:right-5">
        <div className={clsx(chip, "flex items-center gap-3 px-3.5 py-3")}>
          <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-ink">
            <Bell size={16} weight="fill" />
          </span>
          <div className="text-[12px] leading-tight">
            <p className="font-semibold">New enquiry</p>
            <p className="text-muted">from website · just now</p>
          </div>
        </div>
      </Float>
    </>
  );
}

const MAP: Record<HeroGraphic, () => React.JSX.Element> = {
  camera: Camera,
  social: Social,
  crm: Crm,
  event: EventPass,
  video: Video,
  web: Web,
};

/** Floating interface graphics layered over the hero photo for the current topic. */
export default function HeroGraphics({ graphic }: { graphic: HeroGraphic }) {
  const G = MAP[graphic];
  return (
    <motion.div key={graphic} className="pointer-events-none absolute inset-0 z-10" exit={{ opacity: 0, transition: { duration: 0.35 } }}>
      <G />
    </motion.div>
  );
}
