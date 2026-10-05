import { VALUES } from "@/lib/page-content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function Values() {
  return (
    <section className="bg-ink py-16 text-canvas md:py-32">
      <Container>
        <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          What we <span className="text-accent">stand for.</span>
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08} className="group bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.04] md:p-12">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight transition-transform duration-700 ease-premium group-hover:translate-x-1">{v.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-canvas/65">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
