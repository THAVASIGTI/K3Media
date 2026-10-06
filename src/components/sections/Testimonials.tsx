import { Star } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
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
    <figure className="w-[290px] shrink-0 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10 sm:w-[360px]">
      <div className="flex h-full flex-col justify-between gap-8 rounded-[calc(2rem-0.375rem)] bg-surface p-6 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_24px_48px_-24px_rgba(20,19,16,0.18)] sm:p-7">
        <div>
          <span className="flex gap-0.5 text-accent" aria-label="5 out of 5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} weight="fill" />
            ))}
          </span>
          <blockquote className="mt-5 text-base leading-relaxed text-ink/90 sm:text-lg">&ldquo;{q.quote}&rdquo;</blockquote>
        </div>
        <figcaption className="flex items-center gap-3 text-sm font-medium text-ink">
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
function Row({ quotes, reverse }: { quotes: Quote[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={clsx("flex w-max group-hover:[animation-play-state:paused]", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
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

/** Client quotes as two marquee rows moving in opposite directions; hover pauses a row. */
export default function Testimonials() {
  const rowB = [...QUOTES.slice(3), ...QUOTES.slice(0, 3)];
  return (
    <section aria-label="What clients say" className="overflow-hidden py-16 md:py-36">
      <Container>
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          <SplitWords lines={["Kind words from", "the brands we build."]} accentLine={1} />
        </h2>
      </Container>
      <div className="mt-12 space-y-4 sm:space-y-5 md:mt-16">
        <Row quotes={QUOTES} />
        <Row quotes={rowB} reverse />
      </div>
    </section>
  );
}
