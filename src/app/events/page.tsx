import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, WORK } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import EventDetails from "@/components/sections/EventDetails";
import EventTimeline from "@/components/sections/EventTimeline";
import EventGallery from "@/components/sections/EventGallery";
import ContactStrip from "@/components/sections/ContactStrip";

export const metadata: Metadata = {
  title: "Events",
  description: "Corporate events, meetings and conferences, commercial launches, weddings and VIP management, planned and run end to end by K3 Media.",
};

export default function EventsPage() {
  const vip = SERVICES.find((s) => s.slug === "high-profile")!;
  const vipDetail = SERVICE_DETAILS["high-profile"];
  const caseStudy = WORK.find((w) => w.services.includes("events"));

  return (
    <main className="w-full overflow-x-clip">
      <PageHero
        crumbs={[{ label: "Events" }]}
        lines={["Events people still", "mention a year later."]}
        accentLine={1}
        intro={SERVICE_DETAILS.events.intro}
        image="event-corporate-2"
      />

      <EventDetails />
      <EventTimeline />

      {/* VIP & high-profile management */}
      <section className="py-16 md:py-32">
        <Container>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-ink text-canvas md:grid-cols-2">
            <div className="relative min-h-[360px]">
              <Image src={IMAGES["vip-management"].src} alt={IMAGES["vip-management"].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink/40" />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.03em]">{vipDetail.headline}</h2>
              <p className="mt-5 leading-relaxed text-canvas/70">{vipDetail.intro}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {vipDetail.included.map((x) => (
                  <li key={x.title} className="flex items-start gap-3 text-sm">
                    <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                    {x.title}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${vip.slug}`} className="group mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-ink">
                About {vip.title.toLowerCase()}
                <ArrowUpRight size={18} className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <EventGallery />

      {caseStudy && (
        <section className="pb-16 md:pb-32">
          <Container>
            <Reveal>
              <Link href={`/work/${caseStudy.slug}`} className="group flex flex-col justify-between gap-8 border-y border-black/10 py-10 md:flex-row md:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">Case study / {caseStudy.client}</p>
                  <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-none tracking-[-0.03em] transition-transform duration-700 ease-premium group-hover:translate-x-2">
                    {caseStudy.title}
                  </h2>
                </div>
                <div className="flex items-center gap-6">
                  {caseStudy.results.slice(0, 2).map((r) => (
                    <p key={r.label}>
                      <span className="block font-display text-3xl font-semibold tracking-tight">{r.value}</span>
                      <span className="text-sm text-muted">{r.label}</span>
                    </p>
                  ))}
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-ink">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <ContactStrip title="Planning an event?" sub="Share the date, city and guest count. We will send a plan and itemised quote within two working days." />
    </main>
  );
}
