import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, WORK } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import ContactStrip from "@/components/sections/ContactStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const w = WORK.find((x) => x.slug === slug);
  if (!w) return {};
  return { title: `${w.client}: ${w.title}`, description: w.challenge, openGraph: { images: [IMAGES[w.image].src] } };
}

export default async function CasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const index = WORK.findIndex((x) => x.slug === slug);
  const w = WORK[index];
  if (!w) notFound();
  const next = WORK[(index + 1) % WORK.length];
  const services = w.services.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean);

  return (
    <main className="w-full overflow-x-clip">
      <section className="pb-14 pt-32 md:pt-44">
        <Container>
          <Breadcrumb items={[{ label: "Case studies", href: "/#work" }, { label: w.client }]} />
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">{w.client} / {w.tag}</p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <SplitWords lines={[w.title]} delay={0.1} onMount />
          </h1>
        </Container>
      </section>

      <Reveal y={60}>
        <Container>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:aspect-[21/9]">
            <Image src={IMAGES[w.image].src} alt={IMAGES[w.image].alt} fill preload sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </Reveal>

      <section className="py-20 md:py-28">
        <Container>
          <dl className="grid gap-px overflow-hidden rounded-[2rem] bg-black/10 ring-1 ring-black/10 md:grid-cols-3">
            {w.results.map((r) => (
              <div key={r.label} className="bg-surface p-8 md:p-10">
                <dt className="sr-only">{r.label}</dt>
                <dd className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]">{r.value}</dd>
                <dd aria-hidden className="mt-3 text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="space-y-12 md:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight">The challenge</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{w.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight">What we did</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{w.approach}</p>
            </Reveal>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="rounded-[2rem] bg-surface p-8 ring-1 ring-black/5 md:sticky md:top-32">
              <p className="text-sm text-muted">Services used</p>
              <ul className="mt-5 divide-y divide-black/10">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex min-h-12 items-center justify-between gap-4 py-3 font-medium">
                      {s.title}
                      <ArrowUpRight size={16} className="text-muted transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section aria-label="Gallery" className="pb-16 md:pb-32">
        <Container className="grid gap-4 md:grid-cols-12">
          {w.gallery.map((key, i) => (
            <Reveal key={key + i} y={50} delay={i * 0.08} className={["md:col-span-5", "md:col-span-7 md:mt-20", "md:col-span-12"][i] ?? "md:col-span-6"}>
              <div className={`relative overflow-hidden rounded-[2rem] ${i === 2 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <Image src={IMAGES[key].src} alt={IMAGES[key].alt} fill sizes={i === 2 ? "100vw" : "(max-width: 768px) 100vw, 55vw"} className="object-cover" />
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-16 md:pb-32">
        <Container>
          <Link href={`/work/${next.slug}`} className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 text-white md:p-12">
            <Image src={IMAGES[next.image].src} alt="" fill sizes="100vw" className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/45" />
            <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-white/70">Next case study</p>
            <p className="relative flex items-end justify-between gap-6 font-display text-[clamp(2rem,4.5vw,4.25rem)] font-semibold leading-none tracking-[-0.03em]">
              {next.title}
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-premium group-hover:translate-x-1">
                <ArrowRight size={22} />
              </span>
            </p>
          </Link>
        </Container>
      </section>

      <ContactStrip title="Want results like these?" sub="Tell us about your brand and goal. We will show you how we would approach it, with a timeline and itemised quote." />
    </main>
  );
}
