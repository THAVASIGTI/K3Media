"use client";

import {
  Camera,
  ChartLineUp,
  ChatsCircle,
  Code,
  Database,
  FilmSlate,
  Globe,
  Heart,
  ImageSquare,
  InstagramLogo,
  Lightning,
  MapPin,
  Megaphone,
  Rocket,
  Scissors,
  Sparkle,
  Target,
  Ticket,
  TrendUp,
  UserFocus,
  Users,
  WhatsappLogo,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import clsx from "clsx";
import { ChecklistScene, LaptopScene, OrbitScene, RingScene, SceneFrame, StepsScene, Tile } from "@/components/art/SceneKit";
import { loop } from "@/components/sections/CaseArt";

type Panel =
  | { kind: "laptop"; title: string; metrics: [string, string][] }
  | { kind: "checklist"; title: string; items: string[]; icon: Icon }
  | { kind: "steps"; steps: { label: string; icon: Icon }[] }
  | { kind: "ring"; label: string; value: number; suffix?: string; chips: string[] };

type CaseArtSet = {
  /** Backdrops: hero tile, then the three gallery panels. */
  bg: [string, string, string, string];
  hero: { main: Icon; satellites: Icon[]; tone: string };
  panels: [Panel, Panel, Panel];
};

/** One illustration set per case study; nothing here repeats a service page scene. */
const CASES: Record<string, CaseArtSet> = {
  "lakshmi-silks-bridal-collection": {
    bg: ["from-[#4c0519] via-[#9f1239] to-[#f97316]", "from-[#3b0764] via-[#9d174d] to-[#e11d48]", "from-[#7c2d12] via-[#b45309] to-[#facc15]", "from-[#500724] via-[#be123c] to-[#fb7185]"],
    hero: { main: Camera, satellites: [Sparkle, Heart, ImageSquare, InstagramLogo], tone: "bg-white text-rose-700" },
    panels: [
      { kind: "steps", steps: [{ label: "Cast", icon: UserFocus }, { label: "Style", icon: Sparkle }, { label: "Shoot", icon: Camera }, { label: "Post", icon: InstagramLogo }] },
      { kind: "laptop", title: "Launch month insights", metrics: [["Reach", "4.1x"], ["Enquiries", "312"], ["Reels", "18"]] },
      { kind: "checklist", title: "Six-week launch", items: ["42 sarees styled", "18 reels delivered", "Creator collabs live", "312 store enquiries"], icon: Heart },
    ],
  },
  "brewhouse-summer-launch": {
    bg: ["from-[#082f49] via-[#0369a1] to-[#22d3ee]", "from-[#0c4a6e] via-[#0e7490] to-[#2dd4bf]", "from-[#172554] via-[#1d4ed8] to-[#38bdf8]", "from-[#042f2e] via-[#0f766e] to-[#a3e635]"],
    hero: { main: Megaphone, satellites: [FilmSlate, Target, ChartLineUp, Lightning], tone: "bg-white text-sky-700" },
    panels: [
      { kind: "laptop", title: "Ads manager", metrics: [["Views", "2.3M"], ["Cost/view", "₹4.20"], ["Ads tested", "24"]] },
      { kind: "steps", steps: [{ label: "Shoot", icon: FilmSlate }, { label: "Cut", icon: Scissors }, { label: "Test", icon: Target }, { label: "Scale", icon: TrendUp }] },
      { kind: "ring", label: "Budget on top 3 ads", value: 72, chips: ["Meta", "YouTube", "Reels"] },
    ],
  },
  "arun-exports-whatsapp-crm": {
    bg: ["from-[#052e16] via-[#047857] to-[#4ade80]", "from-[#022c22] via-[#065f46] to-[#34d399]", "from-[#14532d] via-[#15803d] to-[#bef264]", "from-[#064e3b] via-[#0f766e] to-[#5eead4]"],
    hero: { main: WhatsappLogo, satellites: [ChatsCircle, Database, Lightning, Users], tone: "bg-white text-emerald-700" },
    panels: [
      { kind: "checklist", title: "Go-live", items: ["Custom CRM built", "Number on Business API", "Shared inbox for 6", "Auto follow-ups on"], icon: WhatsappLogo },
      { kind: "laptop", title: "Sales pipeline", metrics: [["First reply", "4 min"], ["Converted", "+38%"], ["Inboxes", "1"]] },
      { kind: "ring", label: "More leads converted", value: 38, chips: ["IndiaMART", "Ads", "Website"] },
    ],
  },
  "metro-heritage-walk-campaign": {
    bg: ["from-[#1e1b4b] via-[#4338ca] to-[#a855f7]", "from-[#2e1065] via-[#6d28d9] to-[#f472b6]", "from-[#0f172a] via-[#3730a3] to-[#818cf8]", "from-[#312e81] via-[#7c3aed] to-[#fbbf24]"],
    hero: { main: Globe, satellites: [Ticket, MapPin, Megaphone, Rocket], tone: "bg-white text-indigo-700" },
    panels: [
      { kind: "ring", label: "Bookings from mobile", value: 62, chips: ["Website", "Instagram", "Outdoor"] },
      { kind: "steps", steps: [{ label: "Build", icon: Code }, { label: "Shoot", icon: Camera }, { label: "Promote", icon: Megaphone }, { label: "Book", icon: Ticket }] },
      { kind: "laptop", title: "Bookings dashboard", metrics: [["Bookings", "11,000"], ["Mobile", "62%"], ["New routes", "3"]] },
    ],
  },
};

const pick = (slug: string) => CASES[slug] ?? CASES["metro-heritage-walk-campaign"];

function PanelScene({ panel }: { panel: Panel }) {
  switch (panel.kind) {
    case "laptop":
      return <LaptopScene title={panel.title} metrics={panel.metrics} />;
    case "checklist":
      return <ChecklistScene title={panel.title} items={panel.items} icon={panel.icon} />;
    case "steps":
      return <StepsScene steps={panel.steps} />;
    case "ring":
      return <RingScene label={panel.label} value={panel.value} suffix={panel.suffix} chips={panel.chips} />;
  }
}

/** Orbit tile for the case hero, badged with the headline result. */
export function CaseHeroArt({ slug, badge }: { slug: string; badge: string }) {
  const a = pick(slug);
  return (
    <SceneFrame bg={a.bg[0]}>
      <OrbitScene main={a.hero.main} satellites={a.hero.satellites} tone={a.hero.tone} badge={badge} />
    </SceneFrame>
  );
}

/** Gallery illustration `i` (0 to 2) for a case study. */
export function CasePanelArt({ slug, i }: { slug: string; i: 0 | 1 | 2 }) {
  const a = pick(slug);
  return (
    <SceneFrame bg={a.bg[i + 1]}>
      <PanelScene panel={a.panels[i]} />
    </SceneFrame>
  );
}

/** Floating icon cluster for the "Next case study" banner. */
export function CaseTeaserArt({ slug }: { slug: string }) {
  const a = pick(slug);
  const icons = [a.hero.main, ...a.hero.satellites.slice(0, 3)];
  const spots = ["right-[6%] top-[10%] w-[16%] md:w-[9%]", "right-[27%] top-[8%] w-[10%] md:w-[6%]", "right-[18%] top-[30%] w-[9%] md:w-[5%]", "right-[38%] top-[26%] w-[8%] md:w-[5%]"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {icons.map((I, i) => (
        <motion.div key={i} className={clsx("absolute opacity-90", spots[i])} animate={{ y: [0, i % 2 ? 10 : -10, 0], rotate: [i % 2 ? 8 : -8, 0, i % 2 ? 8 : -8] }} transition={loop(4 + i * 0.7, i * 0.3)}>
          <Tile icon={I} tone={i === 0 ? a.hero.tone : "bg-white/90 text-ink"} className="aspect-square w-full" />
        </motion.div>
      ))}
    </div>
  );
}
