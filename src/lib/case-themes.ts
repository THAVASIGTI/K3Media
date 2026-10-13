/** Card colour per case study, matched to its animated scene (shared by the home cards and /work pages). */
export const CASE_THEME: Record<string, string> = {
  "lakshmi-silks-bridal-collection": "from-[#5c1424] via-[#8f2433] to-[#c2410c]",
  "brewhouse-summer-launch": "from-[#082f49] via-[#0c4a6e] to-[#0e7490]",
  "arun-exports-whatsapp-crm": "from-[#052e22] via-[#065f46] to-[#15803d]",
  "metro-heritage-walk-campaign": "from-[#1e1b4b] via-[#3b2a8a] to-[#6d28d9]",
};

export const caseTheme = (slug: string) => CASE_THEME[slug] ?? CASE_THEME["metro-heritage-walk-campaign"];
