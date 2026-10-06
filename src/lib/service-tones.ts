/** Main gradient per service, shared by server pages and the client illustrations. */
export const SERVICE_TONE: Record<string, string> = {
  "video-editing": "from-[#2e1065] via-[#5b21b6] to-[#a21caf]",
  "social-media": "from-[#831843] via-[#db2777] to-[#fb923c]",
  "photo-shoot": "from-[#431407] via-[#9a3412] to-[#f59e0b]",
  "advertising": "from-[#7c2d12] via-[#ea580c] to-[#facc15]",
  "high-profile": "from-[#0c0a09] via-[#44403c] to-[#a16207]",
  "website": "from-[#082f49] via-[#0369a1] to-[#38bdf8]",
  "crm-erp": "from-[#0f172a] via-[#334155] to-[#64748b]",
  "whatsapp-crm": "from-[#022c22] via-[#047857] to-[#22c55e]",
  "reviews": "from-[#3b0764] via-[#7c3aed] to-[#f472b6]",
  "automation": "from-[#0f172a] via-[#1e40af] to-[#6366f1]",
  "software-support": "from-[#042f2e] via-[#0f766e] to-[#2dd4bf]",
};

export const serviceTone = (slug: string) => SERVICE_TONE[slug] ?? "from-[#141310] to-[#3f3f46]";
