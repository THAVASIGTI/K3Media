import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, WORK } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import Events from "@/components/sections/Events";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Events",
  description: "Corporate events, meetings, conferences, commercial launches, weddings and VIP management, handled end to end by K3 Media.",
};

const EVENT_SERVICES = ["events", "high-profile", "video-editing"];

export default function EventsPage() {
  const services = EVENT_SERVICES.map((s) => SERVICES.find((x) => x.slug === s)!);
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
      <Events />

      <section className="py-24 md:py-32">
        <Container className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link href={`/services/${s.slug}`} className="group flex h-full flex-col justify-between gap-10 rounded-[2rem] bg-surface p-8 ring-1 ring-black/5 transition-colors duration-500 hover:bg-accent md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h2>
                  <ArrowUpRight size={22} className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="leading-relaxed text-muted transition-colors group-hover:text-accent-ink/80">{s.line}</p>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      {caseStudy && (
        <section className="pb-24 md:pb-32">
          <Container>
            <Link href={`/work/${caseStudy.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-ink text-canvas md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image src={IMAGES[caseStudy.image].src} alt={IMAGES[caseStudy.image].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-between gap-12 p-8 md:p-14">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Case study / {caseStudy.client}</p>
                <div>
                  <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.03em]">{caseStudy.title}</h2>
                  <p className="mt-4 text-canvas/70">{caseStudy.result}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-medium text-accent">
                    Read the case study <ArrowUpRight size={18} className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <CtaBand lines={["Planning an event", "people will remember?"]} />
    </main>
  );
}
