import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { WORK } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import ContactStrip from "@/components/sections/ContactStrip";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from K3 Media: brand shoots, launch campaigns, corporate events, websites and WhatsApp CRM rollouts.",
};

/** Alternating large / offset case cards. */
export default function WorkPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PageHero
        crumbs={[{ label: "Work" }]}
        lines={["Proof, not promises."]}
        accentLine={0}
        intro="Shoots, launches, events and systems we have delivered for brands across Tamil Nadu and South India."
      />
      <section className="pb-16 md:pb-32">
        <Container className="grid gap-x-6 gap-y-16 md:grid-cols-12">
          {WORK.map((w, i) => (
            <Reveal
              key={w.slug}
              y={60}
              className={i % 3 === 0 ? "md:col-span-12" : i % 3 === 1 ? "md:col-span-7" : "md:col-span-5 md:mt-32"}
            >
              <Link href={`/work/${w.slug}`} className="group block">
                <div className={`relative overflow-hidden rounded-[2rem] ${i % 3 === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <Image src={IMAGES[w.image].src} alt={IMAGES[w.image].alt} fill sizes={i % 3 === 0 ? "100vw" : "(max-width: 768px) 100vw, 55vw"} className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105" />
                  <span className="absolute right-5 top-5 grid size-14 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-500 ease-premium group-hover:opacity-100 md:right-8 md:top-8">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="font-display text-2xl font-semibold tracking-tight transition-colors md:text-3xl">{w.title}</h2>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{w.client} / {w.tag}</p>
                </div>
                <p className="mt-2 text-accent-deep">{w.result}</p>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <ContactStrip title="Your brand could be the next case study." sub="Share what you are working on. We reply within one working day." />
    </main>
  );
}
