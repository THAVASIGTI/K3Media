import { SERVICES } from "@/lib/content";

/** Moving strip of every K3 Media service, separated by brand-yellow stars. */
export default function ClientMarquee() {
  const topics = SERVICES.map((s) => s.title);
  const row = [...topics, ...topics];
  return (
    <section aria-label="What we do" className="border-y border-black/10 py-7 md:py-8">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <li key={i} aria-hidden={i >= topics.length} className="flex items-center whitespace-nowrap">
              <span className="font-display text-2xl font-semibold tracking-tight text-ink md:text-4xl">{t}</span>
              <svg viewBox="0 0 24 24" aria-hidden className="mx-6 size-5 shrink-0 fill-accent md:mx-10 md:size-7">
                <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12 6.4-.6 11.4-5.6 12-12z" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
