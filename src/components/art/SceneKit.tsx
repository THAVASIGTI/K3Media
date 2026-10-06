"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import clsx from "clsx";
import { Gloss, Shadow, loop } from "@/components/sections/CaseArt";

/**
 * Building blocks for code-drawn, animated illustrations. Each block takes its labels, icons and
 * colours as props, so every page gets its own picture without shipping image files.
 */

/** Gradient backdrop that only runs its scene while near the viewport. */
export function SceneFrame({ bg, className, children }: { bg: string; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { margin: "200px 0px" });
  return (
    <div ref={ref} aria-hidden className={clsx("absolute inset-0 overflow-hidden bg-gradient-to-br", bg, className)}>
      <span className="absolute -left-[15%] -top-[15%] size-[60%] rounded-full bg-white/15 blur-3xl" />
      <span className="absolute -bottom-[20%] -right-[10%] size-[55%] rounded-full bg-black/20 blur-3xl" />
      {near && children}
    </div>
  );
}

/** Glossy 3D icon tile. */
export function Tile({ icon: I, className, tone = "bg-white text-ink" }: { icon: Icon; className?: string; tone?: string }) {
  return (
    <span className={clsx("relative grid place-items-center rounded-[28%] shadow-[0_24px_40px_-14px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,255,255,0.5)]", tone, className)}>
      <Gloss />
      <I weight="fill" className="relative size-1/2" />
    </span>
  );
}

/* ---------- Orbit: big hero tile with satellites ---------- */
export function OrbitScene({ main, satellites, badge, tone }: { main: Icon; satellites: Icon[]; badge: string; tone: string }) {
  const spots = ["left-[10%] top-[16%]", "right-[10%] top-[24%]", "left-[14%] bottom-[24%]", "right-[14%] bottom-[16%]"];
  return (
    <>
      <Shadow className="bottom-[22%] left-1/2 h-[5%] w-[36%] -translate-x-1/2" />
      <motion.div className="absolute left-1/2 top-[44%] w-[42%] -translate-x-1/2 -translate-y-1/2" animate={{ y: ["-4%", "4%", "-4%"], rotate: [-6, 6, -6] }} transition={loop(6)}>
        <Tile icon={main} tone={tone} className="aspect-square w-full" />
      </motion.div>
      {/* Orbit ring */}
      <motion.span
        className="absolute left-1/2 top-[44%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {satellites.slice(0, 4).map((I, i) => (
        <motion.div key={i} className={clsx("absolute w-[17%]", spots[i])} animate={{ y: [0, i % 2 ? 10 : -10, 0], rotate: [i % 2 ? 8 : -8, 0, i % 2 ? 8 : -8] }} transition={loop(4 + i * 0.6, i * 0.3)}>
          <Tile icon={I} className="aspect-square w-full" />
        </motion.div>
      ))}
      <motion.span
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-xl md:text-sm"
        animate={{ y: [0, -6, 0] }}
        transition={loop(3.5, 0.5)}
      >
        {badge}
      </motion.span>
    </>
  );
}

/* ---------- Laptop dashboard: metric cards and a chart drawing itself ---------- */
export function LaptopScene({ title, metrics, accent = "#fbba00" }: { title: string; metrics: [string, string][]; accent?: string }) {
  return (
    <>
      <Shadow className="bottom-[8%] left-1/2 h-[6%] w-[66%] -translate-x-1/2" />
      <motion.div className="absolute left-1/2 top-[46%] w-[76%] -translate-x-1/2 -translate-y-1/2" animate={{ y: ["-2%", "2%", "-2%"] }} transition={loop(6)}>
        <div className="rounded-t-2xl bg-zinc-800 p-[2%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="rounded-lg bg-white p-[4%] text-ink">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[11px]">{title}</span>
              <span className="flex gap-1">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="size-1.5 rounded-full bg-zinc-200" />
                ))}
              </span>
            </div>
            <div className="mt-[4%] grid grid-cols-3 gap-[3%]">
              {metrics.map(([l, v], i) => (
                <motion.div key={l} className="rounded-lg bg-zinc-100 p-[8%]" animate={{ y: [0, -3, 0] }} transition={loop(3, i * 0.4)}>
                  <span className="block text-[7px] text-zinc-500 md:text-[10px]">{l}</span>
                  <span className="block font-display text-[clamp(10px,1.8vw,20px)] font-semibold leading-tight">{v}</span>
                </motion.div>
              ))}
            </div>
            <svg viewBox="0 0 200 60" className="mt-[4%] w-full" aria-hidden>
              {[12, 26, 40].map((y) => (
                <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#e4e4e7" strokeWidth="0.6" />
              ))}
              <motion.path
                d="M0 50 C20 46 30 40 45 42 S70 30 85 32 S110 18 125 22 S155 10 170 12 S190 6 200 4"
                fill="none"
                stroke={accent}
                strokeWidth="2.6"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.75, 1] }}
              />
            </svg>
          </div>
        </div>
        <div className="mx-auto h-[clamp(6px,1.2vw,12px)] w-[110%] -translate-x-[4.5%] rounded-b-xl bg-gradient-to-b from-zinc-300 to-zinc-500" />
      </motion.div>
    </>
  );
}

/* ---------- Phone checklist: tasks ticking off one by one ---------- */
export function ChecklistScene({ title, items, icon: I }: { title: string; items: string[]; icon: Icon }) {
  const n = items.length;
  return (
    <>
      <Shadow className="bottom-[6%] left-[40%] h-[5%] w-[30%] -translate-x-1/2" />
      <motion.div
        className="absolute left-[40%] top-1/2 aspect-[9/17] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[16%/8.5%] bg-zinc-900 p-[2.5%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ rotate: [-5, -1, -5] }}
        transition={loop(6)}
      >
        <div className="flex size-full flex-col rounded-[13%/7%] bg-white p-[8%] text-ink">
          <span className="text-[8px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[10px]">{title}</span>
          <div className="mt-[10%] flex flex-1 flex-col gap-[7%]">
            {items.map((t, i) => (
              <div key={t} className="flex items-center gap-[6%]">
                <motion.span
                  className="grid size-[clamp(12px,2.2vw,20px)] shrink-0 place-items-center rounded-full border-2 border-zinc-300"
                  animate={{ backgroundColor: ["#ffffff", "#22c55e", "#22c55e", "#ffffff"], borderColor: ["#d4d4d8", "#22c55e", "#22c55e", "#d4d4d8"] }}
                  transition={loop(n * 1.2 + 2, i * 1.2, { times: [0, 0.08, 0.92, 1] })}
                />
                <span className="text-[clamp(7px,1.25vw,12px)] leading-tight text-zinc-700">{t}</span>
              </div>
            ))}
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
            <motion.span className="block h-full rounded-full bg-emerald-500" animate={{ width: ["0%", "100%", "100%", "0%"] }} transition={{ duration: n * 1.2 + 2, repeat: Infinity, ease: "linear", times: [0, 0.85, 0.95, 1] }} />
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute right-[10%] top-[18%] w-[20%]" animate={{ y: [0, -10, 0], rotate: [8, 0, 8] }} transition={loop(4.5)}>
        <Tile icon={I} className="aspect-square w-full" />
      </motion.div>
      <motion.span
        className="absolute bottom-[14%] right-[8%] flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs"
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={loop(3)}
      >
        <CheckCircle weight="fill" className="text-emerald-500" /> All done
      </motion.span>
    </>
  );
}

/* ---------- Steps: process stages lighting up in turn ---------- */
export function StepsScene({ steps }: { steps: { label: string; icon: Icon }[] }) {
  const n = steps.length;
  return (
    <>
      <div className="absolute inset-x-[8%] top-1/2 flex -translate-y-1/2 items-start justify-between">
        <span aria-hidden className="absolute left-[10%] right-[10%] top-[clamp(20px,5.5vw,46px)] h-1 rounded-full bg-white/25" />
        <motion.span
          aria-hidden
          className="absolute left-[10%] top-[clamp(20px,5.5vw,46px)] h-1 rounded-full bg-accent shadow-[0_0_12px_#fbba00]"
          animate={{ width: ["0%", "80%", "80%", "0%"] }}
          transition={{ duration: n * 1.1 + 1.5, repeat: Infinity, ease: "linear", times: [0, 0.8, 0.95, 1] }}
        />
        {steps.map(({ label, icon: I }, i) => (
          <div key={label} className="relative flex w-[22%] flex-col items-center">
            <motion.span
              className="grid aspect-square w-[clamp(40px,11vw,92px)] place-items-center rounded-[28%] bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm"
              animate={{ backgroundColor: ["rgba(255,255,255,0.15)", "#fbba00", "#fbba00", "rgba(255,255,255,0.15)"], color: ["#ffffff", "#151003", "#151003", "#ffffff"], scale: [1, 1.12, 1, 1] }}
              transition={loop(n * 1.1 + 1.5, i * 1.1, { times: [0, 0.1, 0.85, 1] })}
            >
              <I weight="fill" className="size-1/2" />
            </motion.span>
            <span className="mt-3 text-center text-[clamp(9px,1.4vw,14px)] font-semibold text-white">{label}</span>
            <span className="mt-1 font-mono text-[8px] text-white/55 md:text-[10px]">{String(i + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- Ring: progress donut filling to a value ---------- */
export function RingScene({ label, value, suffix = "%", chips }: { label: string; value: number; suffix?: string; chips: string[] }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const spots = ["left-[8%] top-[18%]", "right-[8%] top-[30%]", "left-[12%] bottom-[18%]"];
  return (
    <>
      <motion.div className="absolute left-1/2 top-1/2 aspect-square w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 p-[4%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" animate={{ y: ["2%", "-3%", "2%"] }} transition={loop(5)}>
        <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r={r} fill="none" stroke="#f4f4f5" strokeWidth="9" />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#fbba00"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={c}
            animate={{ strokeDashoffset: [c, c * (1 - Math.min(value, 100) / 100), c * (1 - Math.min(value, 100) / 100), c] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.9, 1] }}
          />
        </svg>
        <span className="absolute inset-0 grid place-content-center text-center text-ink">
          <span className="font-display text-[clamp(16px,3.6vw,40px)] font-semibold leading-none tracking-tight">
            {value}
            {suffix}
          </span>
          <span className="mt-1 text-[8px] text-zinc-500 md:text-[11px]">{label}</span>
        </span>
      </motion.div>
      {chips.slice(0, 3).map((t, i) => (
        <motion.span key={t} className={clsx("absolute rounded-full bg-white/15 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white ring-1 ring-white/30 backdrop-blur-md md:text-[11px]", spots[i])} animate={{ y: [0, i % 2 ? 8 : -8, 0] }} transition={loop(3.5 + i * 0.5, i * 0.4)}>
          {t}
        </motion.span>
      ))}
    </>
  );
}
