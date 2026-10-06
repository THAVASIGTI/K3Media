import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SERVICES, WORK } from "@/lib/content";

const BASE = "https://k3media.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${BASE}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...WORK.map((w) => ({ url: `${BASE}/work/${w.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
