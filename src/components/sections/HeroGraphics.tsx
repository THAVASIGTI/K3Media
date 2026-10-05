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

function Ads() {
  return (
    <>
      <Float i={0} className="left-4 top-4 md:left-5 md:top-5">
        <div className={clsx(chip, "w-[200px] px-3.5 py-3")}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted">Campaign · Diwali sale</span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Live
            </span>
          </div>
          <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight">4.2x ROAS</p>
          <div className="mt-2 flex h-8 items-end gap-1" aria-hidden>
            {[30, 45, 38, 60, 52, 75, 90].map((h, k) => (
              <motion.span
                key={k}
                className="flex-1 origin-bottom rounded-sm bg-accent"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.9 + k * 0.06 }}
              />
            ))}
          </div>
        </div>
      </Float>
      <Float i={2} className="right-4 top-[54%] md:right-5">
        <div className={clsx(chip, "flex items-center gap-3 px-3.5 py-3")}>
          <span className="grid size-8 place-items-center rounded-full bg-sky-100 text-sky-600">
            <UsersThree size={16} weight="fill" />
          </span>
          <div className="text-[12px] leading-tight">
            <p className="font-semibold">2.8L people reached</p>
            <p className="text-muted">CPC ₹6.40 · 1,214 leads</p>
          </div>
        </div>
      </Float>
    </>
  );
}

function Schedule() {
  const posts = [
    { time: "10:00", label: "Reel · Product launch", tone: "bg-rose-400" },
    { time: "13:30", label: "Carousel · 5 tips", tone: "bg-sky-400" },
    { time: "18:00", label: "Story · Behind the scenes", tone: "bg-accent" },
  ];
  return (
    <>
      <Float i={0} className="left-4 top-4 md:left-5 md:top-5">
        <div className={clsx(chip, "w-[210px] px-3.5 py-3")}>
          <p className="text-[11px] text-muted">Posting today</p>
          <ul className="mt-2 space-y-1.5">
            {posts.map((p) => (
              <li key={p.time} className="flex items-center gap-2 text-[12px]">
                <span className={clsx("h-6 w-1 rounded-full", p.tone)} />
                <span className="font-mono text-[10px] text-muted">{p.time}</span>
                <span className="truncate font-medium">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Float>
      <Float i={2} className="right-4 top-[56%] md:right-5">
        <div className={clsx(chip, "flex items-center gap-3 px-3.5 py-3")}>
          <CheckCircle size={22} weight="fill" className="text-emerald-500" />
          <div className="text-[12px] leading-tight">
            <p className="font-semibold">30 posts scheduled</p>
            <p className="text-muted">for this month</p>
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
  social: Social,
  ads: Ads,
  crm: Crm,
  video: Video,
  schedule: Schedule,
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
