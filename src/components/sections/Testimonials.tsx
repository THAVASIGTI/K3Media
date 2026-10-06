import { QUOTES, type Quote } from "@/lib/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitWords from "@/components/motion/SplitWords";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

function QuoteCard({ q }: { q: Quote }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10 sm:w-[460px] md:w-[540px]">
      <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface p-7 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_30px_60px_-28px_rgba(20,19,16,0.35)] md:p-8">
        {/* Corner shapes */}
        <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/15 blur-2xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-6 -right-4 font-display text-[9rem] font-bold leading-none text-black/[0.04]">&rdquo;</span>
        <blockquote className="relative text-base leading-relaxed text-ink/90 sm:text-lg">&ldquo;{q.quote}&rdquo;</blockquote>
        <figcaption className="relative flex items-center gap-4 text-sm text-ink">
          <span aria-hidden className="grid size-11 place-items-center rounded-full bg-accent/15 font-display font-semibold text-accent-deep">
            {initials(q.name)}
          </span>
          {q.name}
        </figcaption>
      </div>
    </figure>
  );
}

/** One marquee row: the set is rendered twice so the -50% loop is seamless; the copy is hidden from screen readers. */
function Row({ quotes }: { quotes: Quote[] }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 || undefined} className="flex gap-4 pr-4 sm:gap-5 sm:pr-5">
            {quotes.map((q) => (
              <QuoteCard key={q.name} q={q} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Client quotes as a single marquee row; hover pauses it. */
export default function Testimonials() {
  return (
    <section aria-label="What clients say" className="relative isolate overflow-hidden py-16 md:py-36">
      {/* Background shapes behind the cards */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 top-[40%] -z-10">
        <span className="absolute left-[6%] top-[10%] size-72 rounded-full bg-accent/25 blur-[90px] md:size-96" />
        <span className="absolute right-[4%] top-[30%] size-64 rounded-full bg-[#fb923c]/15 blur-[90px] md:size-80" />
        <span className="absolute left-1/2 top-[18%] h-[70%] w-[78%] -translate-x-1/2 -rotate-2 rounded-[3rem] bg-ink/[0.04] shadow-[0_40px_120px_-40px_rgba(20,19,16,0.35)]" />
        <span className="absolute left-[18%] top-[6%] h-[60%] w-[40%] rotate-6 rounded-[3rem] border border-black/[0.06]" />
      </div>
      <Container>
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          <SplitWords lines={["Kind words from", "the brands we build."]} accentLine={1} />
        </h2>
      </Container>
      <div className="mt-12 md:mt-16">
        <Row quotes={QUOTES} />
      </div>
    </section>
  );
}
