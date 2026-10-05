import { CLIENTS } from "@/lib/content";

export default function ClientMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Clients" className="border-y border-black/10 py-8">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <li key={i} aria-hidden={i >= CLIENTS.length} className="whitespace-nowrap font-display text-2xl font-medium tracking-tight text-black/35 md:text-3xl">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
