import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CONTACT, CTA_LABEL, SERVICES, STAGES, WORK } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import MagneticButton from "@/components/motion/MagneticButton";
import ContactStrip from "@/components/sections/ContactStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: SERVICE_DETAILS[slug]?.intro ?? service.line,
    openGraph: { images: [IMAGES[service.image].src] },
  };
}

/** Splits a headline into two balanced lines for the masked reveal. */
function twoLines(text: string) {
  const words = text.split(" ");
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const index = SERVICES.findIndex((s) => s.slug === slug);
  const service = SERVICES[index];
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) notFound();

  const stage = STAGES.find((st) => st.services.includes(slug));
  const stageNo = stage ? STAGES.indexOf(stage) + 1 : null;
  const work = WORK.filter((w) => w.services.includes(slug)).slice(0, 2);
  const siblings = stage ? stage.services.filter((s) => s !== slug).map((s) => SERVICES.find((x) => x.slug === s)!) : [];
  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <main className="w-full overflow-x-clip">
      {/* Hero */}
      <section className="pb-16 pt-32 md:pb-24 md:pt-44">
        <Container>
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
          <div className="mt-10 grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              {stage && (
                <p className="inline-flex items-center gap-3 rounded-full bg-black/5 py-1.5 pl-1.5 pr-4 text-sm text-muted ring-1 ring-black/5">
                  <span className="grid size-7 place-items-center rounded-full bg-accent font-mono text-[11px] font-semibold text-accent-ink">
                    {String(stageNo).padStart(2, "0")}
                  </span>
                  {stage.title}
                </p>
              )}
              <h1 className="mt-6 font-display text-[clamp(2.4rem,4.8vw,4.75rem)] font-semibold leading-[0.97] tracking-[-0.035em] [text-wrap:balance]">
                <SplitWords lines={twoLines(detail.headline)} accentLine={1} delay={0.1} onMount />
              </h1>
              <Reveal delay={0.35}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{detail.intro}</p>
              </Reveal>
              <Reveal delay={0.45} className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
                <MagneticButton href={CONTACT.whatsapp} variant="ghost" external>WhatsApp us</MagneticButton>
              </Reveal>
            </div>
            <Reveal delay={0.2} y={60} className="md:col-span-5">
              <div className="rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                  <Image src={IMAGES[service.image].src} alt={IMAGES[service.image].alt} fill preload sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-t border-black/10 py-16 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.03em]">
                Everything in <span className="hl">{service.title}</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent-deep" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[2rem] bg-black/10 ring-1 ring-black/10 sm:grid-cols-2 md:col-span-8">
            {detail.included.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 0.06} className="bg-surface p-8 md:p-10">
                <span className="font-mono text-xs text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Gallery */}
      <section aria-label={`${service.title} in pictures`} className="pb-16 md:pb-32">
        <Container className="grid gap-4 md:grid-cols-12">
          {detail.gallery.map((key, i) => (
            <Reveal key={key} delay={i * 0.1} y={50} className={i === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-24"}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image src={IMAGES[key].src} alt={IMAGES[key].alt} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Ideal for + FAQ */}
      <section className="pb-16 md:pb-32">
        <Container className="grid gap-6 md:grid-cols-12">
          <div className="rounded-[2rem] bg-ink p-8 text-canvas md:col-span-5 md:p-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Ideal for</h2>
            <ul className="mt-8 space-y-5">
              {detail.idealFor.map((x) => (
                <li key={x} className="flex items-start gap-4 text-lg leading-snug">
                  <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-accent" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-surface p-8 ring-1 ring-black/5 md:col-span-7 md:p-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Good questions</h2>
            <dl className="mt-8 divide-y divide-black/10">
              {detail.faq.map((f) => (
                <div key={f.q} className="py-5 first:pt-0 last:pb-0">
                  <dt className="text-lg font-medium">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Related work */}
      {work.length > 0 && (
        <section className="pb-16 md:pb-32">
          <Container>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.03em]">
              {service.title} <span className="hl">in action</span>
            </h2>
            <div className={`mt-12 grid gap-4 ${work.length > 1 ? "md:grid-cols-2" : ""}`}>
              {work.map((w) => (
                <Link key={w.slug} href={`/work/${w.slug}`} className="group relative block overflow-hidden rounded-[2rem]">
                  <div className={`relative ${work.length > 1 ? "aspect-[16/11]" : "aspect-[16/10] md:aspect-[21/9]"}`}>
                    <Image src={IMAGES[w.image].src} alt={IMAGES[w.image].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-white md:p-9">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{w.client}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">{w.title}</h3>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-premium group-hover:-rotate-45">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related services + next */}
      <section className="pb-16 md:pb-32">
        <Container className="grid gap-4 md:grid-cols-12">
          {siblings.length > 0 && (
            <div className="rounded-[2rem] bg-surface p-8 ring-1 ring-black/5 md:col-span-5 md:p-10">
              <p className="text-sm text-muted">Also in {stage?.title}</p>
              <ul className="mt-6 divide-y divide-black/10">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex min-h-14 items-center justify-between gap-4 py-3 font-display text-xl font-semibold tracking-tight">
                      {s.title}
                      <ArrowUpRight size={18} className="text-muted transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href={`/services/${next.slug}`}
            className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 text-white md:p-10 ${siblings.length ? "md:col-span-7" : "md:col-span-12"}`}
          >
            <Image src={IMAGES[next.image].src} alt="" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/45" />
            <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-white/70">Next service</p>
            <p className="relative flex items-end justify-between gap-6 font-display text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.03em]">
              {next.title}
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-premium group-hover:translate-x-1">
                <ArrowRight size={22} />
              </span>
            </p>
          </Link>
        </Container>
      </section>

      <ContactStrip title={`Let's talk about ${service.title}.`} sub={`Tell us what you need from ${service.title.toLowerCase()} and we will reply with a plan and itemised quote.`} />
    </main>
  );
}
