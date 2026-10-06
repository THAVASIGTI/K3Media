"use client";

import { motion } from "motion/react";
import { CalendarCheck, ChatCircleDots, Eye, Heart, MapPin, Play } from "@phosphor-icons/react";

const loop = (duration: number, delay = 0, extra: object = {}) => ({ duration, delay, repeat: Infinity, ease: "easeInOut" as const, ...extra });

/** Glossy highlight laid over a shape so it reads as a 3D object. */
const Gloss = ({ className = "" }: { className?: string }) => (
  <span aria-hidden className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/45 via-white/5 to-transparent ${className}`} />
);

/** Soft floor shadow under a floating object. */
const Shadow = ({ className }: { className: string }) => (
  <motion.span
    aria-hidden
    className={`absolute rounded-[50%] bg-black/35 blur-md ${className}`}
    animate={{ scaleX: [1, 0.8, 1], opacity: [0.5, 0.3, 0.5] }}
    transition={loop(5)}
  />
);

/* ---------- Shoot + Social: camera, flash, posts and hearts ---------- */
function ShootScene() {
  return (
    <>
      <Shadow className="bottom-[10%] left-1/2 h-[7%] w-[44%] -translate-x-1/2" />
      {/* Camera */}
      <motion.div
        className="absolute left-1/2 top-1/2 aspect-[4/3] w-[46%] -translate-x-1/2 -translate-y-1/2"
        animate={{ y: ["-4%", "4%", "-4%"], rotate: [-4, 2, -4] }}
        transition={loop(6)}
      >
        <span className="absolute -top-[14%] left-[14%] h-[16%] w-[26%] rounded-t-xl bg-gradient-to-b from-zinc-600 to-zinc-800" />
        <span className="absolute -top-[9%] right-[12%] h-[12%] w-[14%] rounded-t-lg bg-gradient-to-b from-amber-200 to-amber-400" />
        <div className="absolute inset-0 rounded-[22%] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <Gloss />
          {/* Lens */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-700 p-[7%] shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            <div className="size-full rounded-full bg-[conic-gradient(from_0deg,#111,#333,#111,#2a2a2a,#111)] p-[12%]">
              <motion.div
                className="size-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#a5b4fc_0%,#4338ca_35%,#0b0b1a_75%)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-[28%] top-[22%] size-[18%] rounded-full bg-white/80 blur-[1px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Shutter flash */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-white"
        animate={{ opacity: [0, 0, 0.55, 0] }}
        transition={loop(4, 1, { times: [0, 0.82, 0.86, 1], ease: "easeOut" })}
      />
      {/* Posts */}
      {[
        { c: "left-[6%] top-[14%] w-[24%] rotate-[-10deg]", g: "from-rose-300 to-orange-400", d: 0 },
        { c: "right-[6%] bottom-[14%] w-[22%] rotate-[8deg]", g: "from-amber-200 to-pink-400", d: 1.2 },
      ].map((p, i) => (
        <motion.div key={i} className={`absolute rounded-2xl bg-white p-[2.5%] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${p.c}`} animate={{ y: [0, -10, 0] }} transition={loop(5, p.d)}>
          <div className={`aspect-square rounded-xl bg-gradient-to-br ${p.g}`} />
          <div className="mt-[8%] flex items-center gap-1 text-rose-500">
            <Heart weight="fill" className="size-3 md:size-4" />
            <span className="h-1.5 flex-1 rounded-full bg-zinc-200" />
          </div>
        </motion.div>
      ))}
      {/* Rising hearts */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute bottom-[18%] text-rose-400"
          style={{ left: `${30 + i * 12}%` }}
          animate={{ y: [0, -140], opacity: [0, 1, 0], scale: [0.6, 1.1, 0.8] }}
          transition={loop(3.2, i * 0.8, { ease: "easeOut" })}
        >
          <Heart weight="fill" className="size-4 md:size-6" />
        </motion.span>
      ))}
    </>
  );
}

/* ---------- Ads + Video: can, play tile, bubbles and views ---------- */
function AdsScene() {
  return (
    <>
      <Shadow className="bottom-[9%] left-[30%] h-[6%] w-[24%]" />
      {/* Drink can */}
      <motion.div
        className="absolute left-[28%] top-1/2 aspect-[1/1.9] w-[20%] -translate-y-1/2"
        animate={{ y: ["4%", "-4%", "4%"], rotate: [-10, -4, -10] }}
        transition={loop(5.5)}
      >
        <div className="relative size-full overflow-hidden rounded-[30%/12%] bg-gradient-to-r from-amber-600 via-amber-300 to-amber-700 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.7)]">
          <span className="absolute inset-x-0 top-[6%] h-[5%] bg-zinc-300/80" />
          <span className="absolute inset-x-0 top-[34%] h-[30%] bg-gradient-to-r from-sky-900 via-sky-700 to-sky-900" />
          <span className="absolute inset-x-0 top-[42%] text-center font-display text-[clamp(8px,1.6vw,16px)] font-bold tracking-widest text-amber-200">BREW</span>
          <span className="absolute inset-y-0 left-[22%] w-[14%] bg-white/40 blur-[2px]" />
        </div>
      </motion.div>
      {/* Play tile */}
      <motion.div
        className="absolute right-[12%] top-[22%] grid aspect-video w-[38%] place-items-center rounded-[18%] bg-gradient-to-br from-rose-500 to-red-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7),inset_0_2px_0_rgba(255,255,255,0.35)]"
        animate={{ y: [0, -12, 0], rotate: [6, 2, 6] }}
        transition={loop(6, 0.6)}
      >
        <Gloss />
        <motion.span animate={{ scale: [1, 1.15, 1] }} transition={loop(1.6)} className="text-white">
          <Play weight="fill" className="size-6 md:size-10" />
        </motion.span>
      </motion.div>
      {/* Views pill */}
      <motion.div
        className="absolute bottom-[16%] right-[14%] flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink shadow-xl md:text-sm"
        animate={{ y: [0, 6, 0] }}
        transition={loop(4, 0.3)}
      >
        <Eye weight="bold" /> 2.3M views
      </motion.div>
      {/* Bubbles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          className="absolute bottom-[12%] rounded-full border border-white/60 bg-white/15"
          style={{ left: `${22 + (i % 3) * 9}%`, width: 6 + (i % 3) * 4, height: 6 + (i % 3) * 4 }}
          animate={{ y: [0, -180], opacity: [0, 1, 0] }}
          transition={loop(3.5 + (i % 2), i * 0.55, { ease: "easeOut" })}
        />
      ))}
    </>
  );
}

/* ---------- WhatsApp CRM: phone chat and pipeline ---------- */
const CHAT = [
  { me: false, w: "w-[70%]" },
  { me: true, w: "w-[60%]" },
  { me: false, w: "w-[50%]" },
  { me: true, w: "w-[66%]" },
];

function CrmScene() {
  return (
    <>
      <Shadow className="bottom-[7%] left-[16%] h-[6%] w-[30%]" />
      {/* Phone */}
      <motion.div
        className="absolute left-[14%] top-1/2 aspect-[9/17] w-[32%] -translate-y-1/2 rounded-[18%/9%] bg-zinc-900 p-[3%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75),inset_0_0_0_2px_rgba(255,255,255,0.15)]"
        animate={{ y: ["2%", "-2%", "2%"], rotate: [-6, -2, -6] }}
        transition={loop(6)}
      >
        <div className="flex size-full flex-col overflow-hidden rounded-[15%/7.5%] bg-[#e7ddd3]">
          <div className="flex items-center gap-[6%] bg-[#075e54] px-[8%] py-[7%]">
            <span className="aspect-square w-[16%] rounded-full bg-emerald-200" />
            <span className="h-1.5 w-[40%] rounded-full bg-white/70" />
          </div>
          <div className="flex flex-1 flex-col justify-end gap-[5%] p-[7%]">
            {CHAT.map((m, i) => (
              <motion.span
                key={i}
                className={`h-[10%] rounded-lg ${m.w} ${m.me ? "self-end bg-[#d9fdd3]" : "self-start bg-white"} shadow-sm`}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 1] }}
                transition={loop(6, i * 0.9, { times: [0, 0.08, 0.85, 1] })}
              />
            ))}
            <motion.span className="flex gap-1 self-start rounded-lg bg-white px-2 py-1.5" animate={{ opacity: [1, 0.3, 1] }} transition={loop(1.2)}>
              {[0, 1, 2].map((d) => (
                <span key={d} className="size-1 rounded-full bg-zinc-400" />
              ))}
            </motion.span>
          </div>
        </div>
      </motion.div>
      {/* Pipeline card */}
      <motion.div
        className="absolute right-[8%] top-[20%] w-[42%] rounded-2xl bg-white p-[3.5%] text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        animate={{ y: [0, -10, 0], rotate: [3, 0, 3] }}
        transition={loop(7, 0.5)}
      >
        <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 md:text-xs">
          <ChatCircleDots weight="fill" className="text-emerald-600" /> Leads
        </p>
        {[
          { l: "New", c: "bg-sky-400", w: "92%" },
          { l: "Contacted", c: "bg-amber-400", w: "70%" },
          { l: "Won", c: "bg-emerald-500", w: "48%" },
        ].map((r, i) => (
          <div key={r.l} className="mt-[7%]">
            <span className="text-[9px] text-zinc-500 md:text-[11px]">{r.l}</span>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100 md:h-2">
              <motion.span className={`block h-full rounded-full ${r.c}`} animate={{ width: ["0%", r.w, r.w, "0%"] }} transition={loop(6, i * 0.3, { times: [0, 0.35, 0.9, 1] })} />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Reply time badge */}
      <motion.div
        className="absolute bottom-[14%] right-[12%] rounded-full bg-[#25d366] px-3 py-1.5 text-[11px] font-semibold text-white shadow-xl md:text-sm"
        animate={{ y: [0, 6, 0], scale: [1, 1.05, 1] }}
        transition={loop(3.5, 0.8)}
      >
        Replied in 4 min
      </motion.div>
    </>
  );
}

/* ---------- Campaign + Website: booking site, map pin, chart ---------- */
function WebScene() {
  return (
    <>
      <Shadow className="bottom-[8%] left-1/2 h-[6%] w-[54%] -translate-x-1/2" />
      {/* Browser */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75)]"
        animate={{ y: ["2%", "-3%", "2%"], rotateX: [8, 2, 8] }}
        transition={loop(6.5)}
        style={{ transformPerspective: 800 }}
      >
        <div className="flex gap-1 bg-zinc-100 px-[4%] py-[2.5%]">
          {["bg-rose-400", "bg-amber-400", "bg-emerald-400"].map((c) => (
            <span key={c} className={`size-1.5 rounded-full md:size-2 ${c}`} />
          ))}
        </div>
        <div className="p-[5%]">
          <div className="h-[clamp(18px,4vw,44px)] rounded-lg bg-gradient-to-r from-indigo-900 via-violet-700 to-fuchsia-600" />
          <div className="mt-[5%] grid grid-cols-7 gap-[4%]">
            {Array.from({ length: 14 }, (_, i) => (
              <motion.span
                key={i}
                className="aspect-square rounded-[30%] bg-zinc-100"
                animate={{ backgroundColor: ["#f4f4f5", "#fbba00", "#f4f4f5"] }}
                transition={loop(4.2, (i * 0.37) % 4)}
              />
            ))}
          </div>
          <div className="mt-[5%] flex items-center justify-between">
            <span className="h-1.5 w-[40%] rounded-full bg-zinc-200" />
            <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-1 text-[8px] font-semibold text-white md:text-[10px]">
              <CalendarCheck weight="bold" /> Book
            </span>
          </div>
        </div>
      </motion.div>
      {/* Map pin */}
      <div className="absolute left-[12%] top-[14%]">
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-[85%] h-3 w-8 -translate-x-1/2 rounded-[50%] border-2 border-white/70"
          animate={{ scale: [0.6, 1.6], opacity: [0.9, 0] }}
          transition={loop(1.6, 0, { ease: "easeOut" })}
        />
        <motion.span className="block text-rose-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]" animate={{ y: [0, -14, 0] }} transition={loop(1.6, 0, { ease: [0.5, 0, 0.5, 1] })}>
          <MapPin weight="fill" className="size-9 md:size-14" />
        </motion.span>
      </div>
      {/* Chart */}
      <motion.div
        className="absolute bottom-[5%] right-[4%] flex h-[24%] w-[20%] items-end gap-[8%] rounded-2xl bg-white/90 p-[2.5%] shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={loop(5, 0.4)}
      >
        {[40, 65, 50, 90].map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-fuchsia-400"
            animate={{ height: ["15%", `${h}%`, `${h}%`, "15%"] }}
            transition={loop(5, i * 0.2, { times: [0, 0.4, 0.85, 1] })}
          />
        ))}
      </motion.div>
    </>
  );
}

const SCENES: Record<string, () => React.JSX.Element> = {
  "lakshmi-silks-bridal-collection": ShootScene,
  "brewhouse-summer-launch": AdsScene,
  "arun-exports-whatsapp-crm": CrmScene,
  "metro-heritage-walk-campaign": WebScene,
};

/** Animated, code-drawn 3D-style scene for a case study (falls back to the web scene). */
export default function CaseArt({ slug }: { slug: string }) {
  const Scene = SCENES[slug] ?? WebScene;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <Scene />
    </div>
  );
}
