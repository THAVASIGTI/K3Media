"use client";

import { motion } from "motion/react";
import {
  Camera,
  ChartLineUp,
  Code,
  Crown,
  Database,
  FilmSlate,
  Megaphone,
  Microphone,
  PenNib,
  Star,
  WhatsappLogo,
  Car,
  Aperture,
  MusicNotes,
  Target,
  HardDrives,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { SceneFrame, Tile } from "@/components/art/SceneKit";
import { loop } from "@/components/sections/CaseArt";

/* ---------- About hero: Studio and Lab joined by a live data stream ---------- */
function Cluster({ icons, side }: { icons: Icon[]; side: "left" | "right" }) {
  const pos = side === "left" ? ["left-[6%] top-[22%]", "left-[18%] top-[52%]", "left-[5%] bottom-[10%]"] : ["right-[6%] top-[20%]", "right-[18%] top-[50%]", "right-[5%] bottom-[10%]"];
  return (
    <>
      {icons.map((I, i) => (
        <motion.div key={i} className={`absolute w-[clamp(44px,8vw,110px)] ${pos[i]} ${i === 2 ? "hidden sm:block" : ""}`} animate={{ y: [0, i % 2 ? 10 : -10, 0], rotate: [i % 2 ? 6 : -6, 0, i % 2 ? 6 : -6] }} transition={loop(4 + i * 0.7, i * 0.4)}>
          <Tile icon={I} className="aspect-square w-full" />
        </motion.div>
      ))}
    </>
  );
}

export function AboutHeroArt() {
  return (
    <SceneFrame bg="from-[#141310] via-[#2a2620] to-[#5c4a12]">
      <Cluster icons={[Camera, Megaphone, FilmSlate]} side="left" />
      <Cluster icons={[Code, Database, WhatsappLogo]} side="right" />
      {/* Stream between the two teams */}
      <span aria-hidden className="absolute left-[24%] right-[24%] top-1/2 h-0.5 -translate-y-1/2 bg-white/20" />
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_#fbba00] md:size-3"
          animate={{ left: i % 2 ? ["76%", "24%"] : ["24%", "76%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.75, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
        />
      ))}
      {/* K3 core */}
      <motion.div className="absolute left-1/2 top-1/2 grid aspect-square w-[clamp(84px,15vw,200px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] bg-accent text-accent-ink shadow-[0_0_80px_-10px_#fbba00,inset_0_2px_0_rgba(255,255,255,0.5)]" animate={{ scale: [1, 1.06, 1] }} transition={loop(3)}>
        <span className="font-display text-[clamp(28px,5.5vw,72px)] font-bold tracking-tight">K3</span>
      </motion.div>
      <motion.span className="absolute left-1/2 top-1/2 aspect-square w-[clamp(130px,24vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/25" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <span className="absolute left-[8%] top-[8%] rounded-full bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white ring-1 ring-white/20 md:text-xs">Studio</span>
      <span className="absolute right-[8%] top-[8%] rounded-full bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white ring-1 ring-white/20 md:text-xs">Lab</span>
      <motion.span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-xl md:text-sm" animate={{ y: [0, -6, 0] }} transition={loop(3.5)}>
        One team, first photo to final sale
      </motion.span>
    </SceneFrame>
  );
}

/* ---------- Team cards: a small tile constellation per team ---------- */
const TEAM_ART: Record<string, { bg: string; main: Icon; tone: string; around: Icon[] }> = {
  Production: { bg: "from-[#431407] via-[#9a3412] to-[#f59e0b]", main: Aperture, tone: "bg-zinc-900 text-amber-300", around: [Camera, FilmSlate, MusicNotes] },
  "Content & ads": { bg: "from-[#831843] via-[#db2777] to-[#fb923c]", main: Megaphone, tone: "bg-white text-rose-600", around: [PenNib, Target, ChartLineUp] },
  "VIP & talent": { bg: "from-[#0c0a09] via-[#44403c] to-[#a16207]", main: Crown, tone: "bg-gradient-to-br from-amber-200 to-amber-500 text-amber-950", around: [Star, Car, Microphone] },
  "The Lab": { bg: "from-[#0f172a] via-[#1e40af] to-[#6366f1]", main: Code, tone: "bg-white text-indigo-700", around: [Database, HardDrives, WhatsappLogo] },
};

export function TeamArt({ name }: { name: string }) {
  const t = TEAM_ART[name] ?? TEAM_ART["The Lab"];
  const pos = ["right-[8%] top-[8%]", "left-[8%] bottom-[10%]", "right-[10%] bottom-[18%]"];
  return (
    <SceneFrame bg={t.bg}>
      <motion.div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2" animate={{ rotate: [-6, 6, -6], scale: [1, 1.04, 1] }} transition={loop(6)}>
        <Tile icon={t.main} tone={t.tone} className="aspect-square w-full" />
      </motion.div>
      {t.around.map((I, i) => (
        <motion.div key={i} className={`absolute w-[22%] ${pos[i]}`} animate={{ y: [0, i % 2 ? 9 : -9, 0] }} transition={loop(3.8 + i * 0.6, i * 0.3)}>
          <Tile icon={I} className="aspect-square w-full" />
        </motion.div>
      ))}
    </SceneFrame>
  );
}
