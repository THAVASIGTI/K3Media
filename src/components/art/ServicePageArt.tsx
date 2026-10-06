"use client";

import {
  Aperture,
  Bug,
  CalendarCheck,
  Camera,
  Car,
  ChartLineUp,
  ChatCircleText,
  ChatsCircle,
  Code,
  Crown,
  CurrencyInr,
  Database,
  FilmSlate,
  FlowArrow,
  Funnel,
  Gear,
  Globe,
  Handshake,
  HardDrives,
  Heart,
  ImageSquare,
  Lightbulb,
  Lightning,
  Megaphone,
  Microphone,
  MusicNotes,
  Package,
  Palette,
  PenNib,
  Plugs,
  Receipt,
  Rocket,
  Scissors,
  ShieldCheck,
  Sparkle,
  Star,
  Storefront,
  Subtitles,
  Target,
  ThumbsUp,
  TreeStructure,
  UserFocus,
  Users,
  WhatsappLogo,
  Wrench,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { ChecklistScene, LaptopScene, OrbitScene, RingScene, SceneFrame, StepsScene } from "@/components/art/SceneKit";

type Panel =
  | { kind: "laptop"; title: string; metrics: [string, string][] }
  | { kind: "checklist"; title: string; items: string[]; icon: Icon }
  | { kind: "steps"; steps: { label: string; icon: Icon }[] }
  | { kind: "ring"; label: string; value: number; suffix?: string; chips: string[] };

type Art = { bg: [string, string, string]; hero: { main: Icon; satellites: Icon[]; tone: string }; panels: [Panel, Panel] };

/** One set of illustrations per service page: hero tile scene plus two gallery panels. */
const ART: Record<string, Art> = {
  "video-editing": {
    bg: ["from-[#2e1065] via-[#5b21b6] to-[#a21caf]", "from-[#0f172a] via-[#312e81] to-[#6d28d9]", "from-[#4a044e] via-[#86198f] to-[#db2777]"],
    hero: { main: FilmSlate, satellites: [Scissors, MusicNotes, Subtitles, Palette], tone: "bg-white text-violet-700" },
    panels: [
      { kind: "steps", steps: [{ label: "Cut", icon: Scissors }, { label: "Grade", icon: Palette }, { label: "Sound", icon: MusicNotes }, { label: "Subtitles", icon: Subtitles }] },
      { kind: "ring", label: "Rendering", value: 100, chips: ["4K", "9:16", "Captions"] },
    ],
  },
  "social-media": {
    bg: ["from-[#831843] via-[#db2777] to-[#fb923c]", "from-[#9d174d] via-[#e11d48] to-[#f97316]", "from-[#701a75] via-[#c026d3] to-[#f472b6]"],
    hero: { main: Heart, satellites: [ChatCircleText, CalendarCheck, Sparkle, Users], tone: "bg-white text-rose-600" },
    panels: [
      { kind: "checklist", title: "This week", items: ["Calendar approved", "Reel posted", "Comments replied", "Report sent"], icon: CalendarCheck },
      { kind: "laptop", title: "Instagram insights", metrics: [["Reach", "+38%"], ["Followers", "+1.2K"], ["Saves", "+64%"]] },
    ],
  },
  "photo-shoot": {
    bg: ["from-[#431407] via-[#9a3412] to-[#f59e0b]", "from-[#1c1917] via-[#57534e] to-[#a8a29e]", "from-[#7c2d12] via-[#c2410c] to-[#fbbf24]"],
    hero: { main: Camera, satellites: [Aperture, Lightbulb, ImageSquare, Storefront], tone: "bg-zinc-900 text-amber-300" },
    panels: [
      { kind: "steps", steps: [{ label: "Plan", icon: PenNib }, { label: "Light", icon: Lightbulb }, { label: "Shoot", icon: Aperture }, { label: "Retouch", icon: Sparkle }] },
      { kind: "ring", label: "Retouched", value: 60, suffix: " pics", chips: ["RAW", "Print", "Web"] },
    ],
  },
  advertising: {
    bg: ["from-[#7c2d12] via-[#ea580c] to-[#facc15]", "from-[#1e1b4b] via-[#4338ca] to-[#0ea5e9]", "from-[#991b1b] via-[#dc2626] to-[#fb923c]"],
    hero: { main: Megaphone, satellites: [Target, ChartLineUp, CurrencyInr, Funnel], tone: "bg-white text-orange-600" },
    panels: [
      { kind: "laptop", title: "Campaign manager", metrics: [["Spend", "₹50K"], ["Leads", "312"], ["Cost/lead", "₹160"]] },
      { kind: "steps", steps: [{ label: "Creative", icon: PenNib }, { label: "Target", icon: Target }, { label: "Launch", icon: Rocket }, { label: "Report", icon: ChartLineUp }] },
    ],
  },
  "high-profile": {
    bg: ["from-[#0c0a09] via-[#44403c] to-[#a16207]", "from-[#1c1917] via-[#78350f] to-[#d97706]", "from-[#0a0a0a] via-[#262626] to-[#525252]"],
    hero: { main: Crown, satellites: [Star, Car, ShieldCheck, Microphone], tone: "bg-gradient-to-br from-amber-200 to-amber-500 text-amber-950" },
    panels: [
      { kind: "checklist", title: "Launch day", items: ["Celebrity confirmed", "Travel booked", "Security briefed", "Green room ready"], icon: Crown },
      { kind: "steps", steps: [{ label: "Book", icon: Handshake }, { label: "Brief", icon: PenNib }, { label: "Host", icon: Star }, { label: "Media", icon: Microphone }] },
    ],
  },
  website: {
    bg: ["from-[#082f49] via-[#0369a1] to-[#38bdf8]", "from-[#0c4a6e] via-[#0891b2] to-[#2dd4bf]", "from-[#172554] via-[#1d4ed8] to-[#60a5fa]"],
    hero: { main: Globe, satellites: [Code, Lightning, Rocket, Storefront], tone: "bg-white text-sky-700" },
    panels: [
      { kind: "ring", label: "Page speed", value: 98, suffix: "", chips: ["SEO", "Mobile", "SSL"] },
      { kind: "checklist", title: "Launch list", items: ["Design approved", "Pages built", "Forms to CRM", "Site live"], icon: Rocket },
    ],
  },
  "crm-erp": {
    bg: ["from-[#0f172a] via-[#334155] to-[#64748b]", "from-[#111827] via-[#1f2937] to-[#4b5563]", "from-[#0b1120] via-[#1e3a8a] to-[#475569]"],
    hero: { main: Database, satellites: [Receipt, Package, Users, ChartLineUp], tone: "bg-accent text-accent-ink" },
    panels: [
      { kind: "laptop", title: "Sales overview", metrics: [["Orders", "1,284"], ["Invoices", "GST"], ["Stock", "In sync"]] },
      { kind: "steps", steps: [{ label: "Map", icon: TreeStructure }, { label: "Build", icon: Code }, { label: "Train", icon: Users }, { label: "Go live", icon: Rocket }] },
    ],
  },
  "whatsapp-crm": {
    bg: ["from-[#022c22] via-[#047857] to-[#22c55e]", "from-[#064e3b] via-[#059669] to-[#34d399]", "from-[#052e16] via-[#15803d] to-[#4ade80]"],
    hero: { main: WhatsappLogo, satellites: [ChatsCircle, Users, Lightning, Receipt], tone: "bg-[#25d366] text-white" },
    panels: [
      { kind: "checklist", title: "Setup", items: ["Business API live", "Shared inbox", "Auto-replies on", "Broadcast sent"], icon: WhatsappLogo },
      { kind: "ring", label: "Answered", value: 96, chips: ["Inbox", "Bots", "Tags"] },
    ],
  },
  reviews: {
    bg: ["from-[#3b0764] via-[#7c3aed] to-[#f472b6]", "from-[#4c1d95] via-[#6d28d9] to-[#a78bfa]", "from-[#581c87] via-[#a21caf] to-[#fb7185]"],
    hero: { main: Star, satellites: [ThumbsUp, ChatCircleText, Storefront, Heart], tone: "bg-accent text-accent-ink" },
    panels: [
      { kind: "laptop", title: "Review monitor", metrics: [["Rating", "4.8 ★"], ["New", "+56"], ["Replied", "100%"]] },
      { kind: "steps", steps: [{ label: "Ask", icon: ChatCircleText }, { label: "Collect", icon: Star }, { label: "Reply", icon: ChatsCircle }, { label: "Alert", icon: Lightning }] },
    ],
  },
  automation: {
    bg: ["from-[#0f172a] via-[#1e40af] to-[#6366f1]", "from-[#111827] via-[#3730a3] to-[#8b5cf6]", "from-[#020617] via-[#1d4ed8] to-[#22d3ee]"],
    hero: { main: FlowArrow, satellites: [Gear, Plugs, Lightning, Receipt], tone: "bg-white text-indigo-700" },
    panels: [
      { kind: "steps", steps: [{ label: "Trigger", icon: Lightning }, { label: "Check", icon: Funnel }, { label: "Send", icon: ChatsCircle }, { label: "Log", icon: Database }] },
      { kind: "ring", label: "Tasks automated", value: 80, chips: ["Forms", "Payments", "Reminders"] },
    ],
  },
  "software-support": {
    bg: ["from-[#042f2e] via-[#0f766e] to-[#2dd4bf]", "from-[#022c22] via-[#065f46] to-[#10b981]", "from-[#083344] via-[#0e7490] to-[#22d3ee]"],
    hero: { main: Wrench, satellites: [ShieldCheck, HardDrives, Bug, UserFocus], tone: "bg-white text-teal-700" },
    panels: [
      { kind: "checklist", title: "Monthly care", items: ["Backup done", "Security patched", "Bug fixed", "Report sent"], icon: ShieldCheck },
      { kind: "laptop", title: "Server monitor", metrics: [["Uptime", "99.9%"], ["Load", "32%"], ["Alerts", "0"]] },
    ],
  },
};

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

/** Hero illustration for /services/[slug]. */
export function ServiceHeroArt({ slug, badge }: { slug: string; badge: string }) {
  const a = ART[slug];
  if (!a) return null;
  return (
    <SceneFrame bg={a.bg[0]}>
      <OrbitScene main={a.hero.main} satellites={a.hero.satellites} tone={a.hero.tone} badge={badge} />
    </SceneFrame>
  );
}

/** Gallery illustration `i` (0 or 1) for /services/[slug]. */
export function ServicePanelArt({ slug, i }: { slug: string; i: 0 | 1 }) {
  const a = ART[slug];
  if (!a) return null;
  return (
    <SceneFrame bg={a.bg[i + 1]}>
      <PanelScene panel={a.panels[i]} />
    </SceneFrame>
  );
}
