import { QUOTES } from "@/lib/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

/** Asymmetric quote wall: one lead quote, two supporting quotes offset below. */
export default function Testimonials() {
  const [lead, ...rest] = QUOTES;
  return (
    <section aria-label="What clients say" className="py-24 md:py-36">
      <Container className="grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <figure>
            <blockquote className="font-display text-[clamp(1.8rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.02em]">
              <span className="text-accent">&ldquo;</span>
              {lead.quote}
              <span className="text-accent">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8 text-sm">
              <span className="text-ink">{lead.name}</span>
              <span className="text-muted">, {lead.role}, {lead.company}</span>
            </figcaption>
          </figure>
        </Reveal>
        <div className="grid gap-6 md:col-span-10 md:col-start-3 md:grid-cols-2">
          {rest.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="h-full rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10">
                <div className="flex h-full flex-col justify-between gap-8 rounded-[calc(2rem-0.375rem)] bg-raised p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  <blockquote className="text-lg leading-relaxed text-ink/90">&ldquo;{q.quote}&rdquo;</blockquote>
                  <figcaption className="flex items-center gap-4 text-sm">
                    <span aria-hidden className="grid size-11 place-items-center rounded-full bg-accent/15 font-display font-semibold text-accent">
                      {q.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-ink">{q.name}</span>
                      <span className="text-muted">{q.role}, {q.company}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
