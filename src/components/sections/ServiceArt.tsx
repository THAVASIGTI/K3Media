"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Bell,
  ChatCircle,
  CheckCircle,
  Code,
  Crown,
  Gear,
  Heart,
  Lightning,
  Megaphone,
  Play,
  Receipt,
  ShieldCheck,
  Star,
  Target,
  Wrench,
} from "@phosphor-icons/react";
import { CrmScene, Gloss, Shadow, ShootScene, loop } from "@/components/sections/CaseArt";

/* ---------- Video editing: monitor with a moving playhead over clip tracks ---------- */
function VideoEditScene() {
  const tracks = [
    ["w-[30%] bg-sky-400", "w-[22%] bg-violet-400", "w-[34%] bg-sky-300"],
    ["w-[18%] bg-amber-400", "w-[40%] bg-rose-400", "w-[24%] bg-amber-300"],
    ["w-[60%] bg-emerald-400", "w-[26%] bg-emerald-300"],
  ];
  return (
    <>
      <Shadow className="bottom-[6%] left-1/2 h-[6%] w-[56%] -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 p-[2.5%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ y: ["2%", "-3%", "2%"] }}
        transition={loop(6)}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400">
          <Gloss />
          <motion.span className="absolute left-1/2 top-1/2 grid size-[22%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink" animate={{ scale: [1, 1.12, 1] }} transition={loop(1.8)}>
            <Play weight="fill" className="size-1/2" />
          </motion.span>
        </div>
        <div className="relative mt-[3%] space-y-[2%] rounded-lg bg-zinc-800 p-[2.5%]">
          {tracks.map((t, i) => (
            <div key={i} className="flex gap-[2%]">
              {t.map((c, j) => (
                <span key={j} className={`h-[clamp(5px,1vw,10px)] rounded-sm ${c}`} />
              ))}
            </div>
          ))}
          <motion.span
            aria-hidden
            className="absolute inset-y-[6%] w-0.5 bg-white shadow-[0_0_8px_white]"
            animate={{ left: ["4%", "94%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </>
  );
}

/* ---------- Social media: phone feed scrolling with likes and notifications ---------- */
function SocialScene() {
  return (
    <>
      <Shadow className="bottom-[6%] left-1/2 h-[6%] w-[26%] -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-1/2 aspect-[9/17] w-[23%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[18%/9%] bg-zinc-900 p-[2%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ rotate: [-4, 2, -4] }}
        transition={loop(6)}
      >
        <div className="size-full overflow-hidden rounded-[15%/7.5%] bg-white">
          <motion.div className="space-y-[6%] p-[8%]" animate={{ y: ["0%", "-45%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
            {["from-pink-400 to-orange-300", "from-sky-400 to-indigo-400", "from-amber-300 to-rose-400", "from-emerald-300 to-teal-500", "from-pink-400 to-orange-300", "from-sky-400 to-indigo-400"].map((g, i) => (
              <div key={i}>
                <div className="mb-[4%] flex items-center gap-[6%]">
                  <span className="aspect-square w-[14%] rounded-full bg-zinc-200" />
                  <span className="h-1 w-[40%] rounded-full bg-zinc-200" />
                </div>
                <div className={`aspect-square rounded-lg bg-gradient-to-br ${g}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {[
        { c: "left-[14%] top-[22%]", icon: <Heart weight="fill" className="text-rose-500" />, t: "1.2K", d: 0 },
        { c: "right-[12%] top-[34%]", icon: <ChatCircle weight="fill" className="text-sky-500" />, t: "86", d: 0.8 },
        { c: "left-[16%] bottom-[20%]", icon: <Bell weight="fill" className="text-amber-500" />, t: "+240", d: 1.6 },
      ].map((b, i) => (
        <motion.span
          key={i}
          className={`absolute flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ink shadow-xl md:text-xs ${b.c}`}
          animate={{ scale: [0.8, 1, 1, 0.8], opacity: [0, 1, 1, 0], y: [6, 0, 0, -6] }}
          transition={loop(3.6, b.d, { times: [0, 0.15, 0.8, 1] })}
        >
          {b.icon}
          {b.t}
        </motion.span>
      ))}
    </>
  );
}

/* ---------- Advertising: megaphone, ad cards and a target being hit ---------- */
function AdvertisingScene() {
  return (
    <>
      <Shadow className="bottom-[8%] left-[18%] h-[6%] w-[30%]" />
      <motion.div className="absolute left-[12%] top-[26%] text-amber-300 drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)]" animate={{ rotate: [-14, -6, -14], y: [0, -6, 0] }} transition={loop(3)}>
        <Megaphone weight="fill" className="size-20 md:size-28" />
      </motion.div>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute left-[34%] top-[34%] size-10 rounded-full border-2 border-white/70 md:size-14"
          animate={{ scale: [0.4, 2.2], opacity: [0.9, 0] }}
          transition={loop(2.4, i * 0.8, { ease: "easeOut" })}
        />
      ))}
      {/* Target */}
      <motion.div className="absolute right-[12%] top-1/2 grid aspect-square w-[24%] -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)]" animate={{ rotate: [0, 6, 0] }} transition={loop(4)}>
        <div className="grid size-[72%] place-items-center rounded-full bg-rose-500">
          <div className="grid size-[64%] place-items-center rounded-full bg-white">
            <div className="size-[50%] rounded-full bg-rose-500" />
          </div>
        </div>
        <motion.span
          className="absolute left-1/2 top-1/2 h-1 w-[70%] origin-left rounded-full bg-zinc-800"
          style={{ rotate: -150 }}
          animate={{ x: ["-120%", "0%", "0%", "-120%"], opacity: [0, 1, 1, 0] }}
          transition={loop(3, 0.4, { times: [0, 0.25, 0.85, 1] })}
        />
      </motion.div>
      <motion.span className="absolute bottom-[14%] right-[30%] flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs" animate={{ y: [0, -6, 0] }} transition={loop(3.5, 0.6)}>
        <Target weight="bold" className="text-rose-500" /> 4.2x ROAS
      </motion.span>
    </>
  );
}

/* ---------- High-profile: spotlights, red carpet and VIP pass ---------- */
function VipScene() {
  return (
    <>
      {[-1, 1].map((d) => (
        <motion.span
          key={d}
          aria-hidden
          className="absolute -top-[10%] h-[130%] w-[22%] origin-top bg-gradient-to-b from-amber-100/60 to-transparent blur-sm"
          style={{ left: d < 0 ? "18%" : "60%", clipPath: "polygon(45% 0, 55% 0, 100% 100%, 0 100%)" }}
          animate={{ rotate: d < 0 ? [-18, 8, -18] : [18, -8, 18] }}
          transition={loop(5)}
        />
      ))}
      {/* Red carpet */}
      <div className="absolute bottom-0 left-1/2 h-[42%] w-[44%] -translate-x-1/2 bg-gradient-to-t from-red-700 to-red-500" style={{ clipPath: "polygon(30% 0, 70% 0, 100% 100%, 0 100%)" }} />
      {/* VIP pass */}
      <motion.div
        className="absolute left-1/2 top-[18%] w-[30%] -translate-x-1/2 rounded-2xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[2.5%] text-amber-950 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)]"
        animate={{ rotate: [-6, 6, -6], y: [0, -8, 0] }}
        transition={loop(5)}
      >
        <Gloss />
        <span className="mx-auto mb-[6%] block h-1 w-[24%] rounded-full bg-amber-950/30" />
        <Crown weight="fill" className="mx-auto size-6 md:size-8" />
        <span className="mt-[6%] block text-center font-display text-[clamp(10px,1.6vw,16px)] font-bold tracking-[0.2em]">VIP</span>
        <span className="mx-auto mt-[6%] block h-1 w-[60%] rounded-full bg-amber-950/25" />
      </motion.div>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="absolute text-amber-200"
          style={{ left: `${18 + i * 16}%`, top: `${14 + (i % 2) * 40}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4], rotate: [0, 90] }}
          transition={loop(2.2, i * 0.45)}
        >
          <Star weight="fill" className="size-3 md:size-4" />
        </motion.span>
      ))}
    </>
  );
}

/* ---------- Website: page blocks assembling inside a browser ---------- */
function BuildWebScene() {
  const blocks = [
    "col-span-6 h-[clamp(14px,3vw,30px)] bg-gradient-to-r from-indigo-500 to-sky-400",
    "col-span-3 h-[clamp(20px,4vw,40px)] bg-amber-300",
    "col-span-3 h-[clamp(20px,4vw,40px)] bg-rose-300",
    "col-span-2 h-[clamp(10px,2vw,20px)] bg-zinc-200",
    "col-span-2 h-[clamp(10px,2vw,20px)] bg-zinc-200",
    "col-span-2 h-[clamp(10px,2vw,20px)] bg-emerald-300",
  ];
  return (
    <>
      <Shadow className="bottom-[6%] left-1/2 h-[6%] w-[56%] -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ y: ["2%", "-3%", "2%"] }}
        transition={loop(6)}
      >
        <div className="flex items-center gap-1 bg-zinc-100 px-[4%] py-[2.5%]">
          {["bg-rose-400", "bg-amber-400", "bg-emerald-400"].map((c) => (
            <span key={c} className={`size-1.5 rounded-full md:size-2 ${c}`} />
          ))}
          <span className="ml-[4%] h-1.5 flex-1 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-6 gap-[3%] p-[5%]">
          {blocks.map((b, i) => (
            <motion.span
              key={i}
              className={`rounded-md ${b}`}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
              transition={loop(5, i * 0.25, { times: [0, 0.15, 0.9, 1] })}
            />
          ))}
        </div>
      </motion.div>
      <motion.span className="absolute left-[10%] top-[18%] grid size-10 place-items-center rounded-2xl bg-ink text-accent shadow-xl md:size-14" animate={{ y: [0, -8, 0], rotate: [-8, 0, -8] }} transition={loop(4)}>
        <Code weight="bold" className="size-1/2" />
      </motion.span>
      <motion.span className="absolute bottom-[14%] right-[10%] flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs" animate={{ y: [0, 6, 0] }} transition={loop(3.5, 0.5)}>
        <Lightning weight="fill" className="text-amber-500" /> 98 speed
      </motion.span>
    </>
  );
}

/* ---------- CRM & ERP: dashboard with cards moving through stages ---------- */
function ErpScene() {
  const cols = ["Lead", "Order", "Billed"];
  return (
    <>
      <Shadow className="bottom-[6%] left-1/2 h-[6%] w-[60%] -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-1/2 flex w-[72%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ y: ["2%", "-3%", "2%"] }}
        transition={loop(6)}
      >
        <div className="w-[16%] space-y-[18%] bg-zinc-900 p-[3%]">
          <span className="block aspect-square w-full rounded-md bg-accent" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-1 rounded-full bg-white/30" />
          ))}
        </div>
        <div className="relative grid flex-1 grid-cols-3 gap-[3%] p-[3%]">
          {cols.map((c) => (
            <div key={c} className="min-h-[clamp(70px,14vw,140px)] rounded-lg bg-zinc-100 p-[6%]">
              <span className="block text-[8px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[10px]">{c}</span>
              <span className="mt-[10%] block h-[clamp(10px,2vw,18px)] rounded bg-white shadow-sm" />
              <span className="mt-[8%] block h-[clamp(10px,2vw,18px)] rounded bg-white shadow-sm" />
            </div>
          ))}
          {/* Card travelling Lead -> Order -> Billed */}
          <motion.span
            className="absolute top-[58%] h-[clamp(10px,2vw,18px)] w-[27%] rounded bg-accent shadow-lg"
            animate={{ left: ["4%", "4%", "36.5%", "36.5%", "69%", "69%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.4, 0.55, 0.8, 1] }}
          />
        </div>
      </motion.div>
      <motion.span className="absolute bottom-[12%] right-[10%] flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs" animate={{ y: [0, -6, 0] }} transition={loop(3.5, 0.4)}>
        <Receipt weight="fill" className="text-emerald-600" /> GST invoice sent
      </motion.span>
    </>
  );
}

/* ---------- Reviews: stars filling, review cards and a rating badge ---------- */
function ReviewsScene() {
  return (
    <>
      <div className="absolute left-1/2 top-[22%] flex -translate-x-1/2 gap-[2%]">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span key={i} className="drop-shadow-[0_10px_12px_rgba(0,0,0,0.35)]" animate={{ color: ["#ffffff55", "#fbba00", "#fbba00", "#ffffff55"], scale: [0.8, 1.15, 1, 0.8] }} transition={loop(4, i * 0.2, { times: [0, 0.2, 0.85, 1] })}>
            <Star weight="fill" className="size-7 md:size-10" />
          </motion.span>
        ))}
      </div>
      {[
        { c: "left-[10%] bottom-[14%] w-[40%] rotate-[-4deg]", d: 0 },
        { c: "right-[10%] bottom-[22%] w-[38%] rotate-[5deg]", d: 1 },
      ].map((r, i) => (
        <motion.div key={i} className={`absolute rounded-2xl bg-white p-[2.5%] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] ${r.c}`} animate={{ y: [0, -8, 0] }} transition={loop(4.5, r.d)}>
          <div className="flex items-center gap-[6%]">
            <span className="aspect-square w-[16%] rounded-full bg-gradient-to-br from-sky-300 to-indigo-400" />
            <span className="flex gap-0.5 text-amber-400">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} weight="fill" className="size-2 md:size-3" />
              ))}
            </span>
          </div>
          <span className="mt-[8%] block h-1 w-[90%] rounded-full bg-zinc-200" />
          <span className="mt-[5%] block h-1 w-[65%] rounded-full bg-zinc-200" />
        </motion.div>
      ))}
      <motion.span className="absolute right-[14%] top-[8%] rounded-2xl bg-ink px-3 py-1.5 font-display text-sm font-semibold text-accent shadow-xl md:text-lg" animate={{ scale: [1, 1.08, 1] }} transition={loop(2.5)}>
        4.9 ★
      </motion.span>
    </>
  );
}

/* ---------- Automation: workflow nodes with data flowing between them ---------- */
const NODES = [
  { label: "Form", icon: <Bell weight="fill" />, x: "8%", c: "bg-sky-500" },
  { label: "CRM", icon: <Receipt weight="fill" />, x: "31%", c: "bg-violet-500" },
  { label: "WhatsApp", icon: <ChatCircle weight="fill" />, x: "54%", c: "bg-emerald-500" },
  { label: "Invoice", icon: <CheckCircle weight="fill" />, x: "77%", c: "bg-amber-500" },
];

function AutomationScene() {
  return (
    <>
      {/* Pipe */}
      <span aria-hidden className="absolute left-[14%] right-[14%] top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/25" />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_#fbba00] md:size-3"
          animate={{ left: ["14%", "86%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, delay: i, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute top-1/2 flex w-[15%] flex-col items-center"
          style={{ left: n.x }}
          animate={{ y: ["-50%", "-58%", "-50%"] }}
          transition={loop(3, i * 0.3)}
        >
          <motion.span
            className={`grid aspect-square w-full place-items-center rounded-2xl text-white shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)] ${n.c} [&_svg]:size-1/2`}
            animate={{ scale: [1, 1, 1.12, 1] }}
            transition={loop(3, i * 0.75, { times: [0, 0.6, 0.7, 0.8] })}
          >
            {n.icon}
          </motion.span>
          <span className="mt-2 text-[9px] font-semibold text-white/85 md:text-[11px]">{n.label}</span>
        </motion.div>
      ))}
      <motion.span className="absolute left-1/2 top-[10%] -translate-x-1/2 text-white/80" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        <Gear weight="fill" className="size-8 md:size-11" />
      </motion.span>
      <span className="absolute bottom-[12%] left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs">Runs on its own, 24/7</span>
    </>
  );
}

/* ---------- Software support: system health, uptime pulse and resolved ticket ---------- */
function SupportScene() {
  return (
    <>
      <Shadow className="bottom-[6%] left-1/2 h-[6%] w-[56%] -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 p-[4%] text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        animate={{ y: ["2%", "-3%", "2%"] }}
        transition={loop(6)}
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-white/60 md:text-[11px]">System health</span>
          <motion.span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 md:text-[11px]" animate={{ opacity: [1, 0.5, 1] }} transition={loop(1.5)}>
            <span className="size-1.5 rounded-full bg-emerald-400" /> All systems up
          </motion.span>
        </div>
        <svg viewBox="0 0 200 50" className="mt-[5%] w-full" aria-hidden>
          <motion.path
            d="M0 30 L40 30 L50 30 L58 10 L66 44 L74 22 L82 30 L120 30 L128 16 L136 40 L144 30 L200 30"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.8, 1] }}
          />
        </svg>
        <div className="mt-[4%] grid grid-cols-3 gap-[4%] text-center">
          {[
            ["99.9%", "uptime"],
            ["12", "backups"],
            ["0", "open bugs"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-white/[0.06] py-[6%]">
              <span className="block font-display text-[clamp(10px,1.8vw,18px)] font-semibold">{v}</span>
              <span className="block text-[7px] text-white/50 md:text-[9px]">{l}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.span className="absolute left-[8%] top-[14%] grid size-10 place-items-center rounded-2xl bg-white text-zinc-700 shadow-xl md:size-14" animate={{ rotate: [-20, 20, -20] }} transition={loop(2.5)}>
        <Wrench weight="fill" className="size-1/2" />
      </motion.span>
      <motion.span className="absolute right-[8%] top-[12%] grid size-10 place-items-center rounded-2xl bg-emerald-500 text-white shadow-xl md:size-14" animate={{ y: [0, -6, 0] }} transition={loop(3)}>
        <ShieldCheck weight="fill" className="size-1/2" />
      </motion.span>
      <motion.span
        className="absolute bottom-[12%] right-[10%] flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink shadow-xl md:text-xs"
        animate={{ scale: [0.85, 1, 1, 0.85], opacity: [0, 1, 1, 0] }}
        transition={loop(4, 1, { times: [0, 0.15, 0.85, 1] })}
      >
        <CheckCircle weight="fill" className="text-emerald-500" /> Ticket resolved
      </motion.span>
    </>
  );
}

/* ---------- WhatsApp CRM: the case-study chat scene, scaled to the wider card ---------- */
function WhatsAppScene() {
  return (
    <div className="absolute inset-0 scale-[0.8]">
      <CrmScene />
    </div>
  );
}

const SCENES: Record<string, { Scene: () => React.JSX.Element; bg: string }> = {
  "video-editing": { Scene: VideoEditScene, bg: "from-[#1e1b4b] via-[#312e81] to-[#4c1d95]" },
  "social-media": { Scene: SocialScene, bg: "from-[#831843] via-[#be185d] to-[#f97316]" },
  "photo-shoot": { Scene: ShootScene, bg: "from-[#3f0d12] via-[#7f1d1d] to-[#b45309]" },
  advertising: { Scene: AdvertisingScene, bg: "from-[#7c2d12] via-[#c2410c] to-[#f59e0b]" },
  "high-profile": { Scene: VipScene, bg: "from-[#0c0a09] via-[#292524] to-[#44403c]" },
  website: { Scene: BuildWebScene, bg: "from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]" },
  "crm-erp": { Scene: ErpScene, bg: "from-[#1e293b] via-[#334155] to-[#475569]" },
  "whatsapp-crm": { Scene: WhatsAppScene, bg: "from-[#052e22] via-[#065f46] to-[#15803d]" },
  reviews: { Scene: ReviewsScene, bg: "from-[#4c1d95] via-[#7c3aed] to-[#db2777]" },
  automation: { Scene: AutomationScene, bg: "from-[#0f172a] via-[#1e3a8a] to-[#4338ca]" },
  "software-support": { Scene: SupportScene, bg: "from-[#022c22] via-[#064e3b] to-[#0f766e]" },
};

/**
 * Animated, code-drawn cover for a service card. Scenes only run while near the viewport,
 * so a page of eleven cards does not keep every animation going off-screen.
 */
export default function ServiceArt({ slug, className = "" }: { slug: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { margin: "200px 0px" });
  const { Scene, bg } = SCENES[slug] ?? SCENES.website;
  return (
    <div ref={ref} aria-hidden className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${bg} ${className}`}>
      <span className="absolute -right-[10%] -top-[20%] size-[60%] rounded-full bg-white/10 blur-3xl" />
      {near && <Scene />}
    </div>
  );
}
