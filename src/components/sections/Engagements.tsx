import { Check } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { ENGAGEMENTS } from "@/lib/page-content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

/** Ways to work with K3 Media. */
export default function Engagements() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          Three ways to <span className="hl">work with us.</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">Every quote is itemised. No hidden costs, no lock-in contracts.</p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.08} className="h-full">
              <div className={clsx("flex h-full flex-col rounded-[2rem] p-8 md:p-10", e.featured ? "bg-ink text-canvas lg:-translate-y-4" : "bg-surface ring-1 ring-black/5")}>
                {e.featured && <span className="mb-6 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">Most chosen</span>}
                <h3 className="font-display text-3xl font-semibold tracking-tight">{e.name}</h3>
                <p className={clsx("mt-2 text-sm", e.featured ? "text-canvas/60" : "text-muted")}>{e.for}</p>
                <p className={clsx("mt-8 font-display text-2xl font-semibold", e.featured ? "text-accent" : "text-ink")}>{e.from}</p>
                <ul className={clsx("mt-8 space-y-3 border-t pt-8 text-sm", e.featured ? "border-white/10" : "border-black/10")}>
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check size={16} weight="bold" className={clsx("mt-0.5 shrink-0", e.featured ? "text-accent" : "text-accent-deep")} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
