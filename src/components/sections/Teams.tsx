import { TEAMS } from "@/lib/page-content";
import { CONTACT } from "@/lib/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { TeamArt } from "@/components/art/AboutArt";

/** Department cards with an animated icon constellation per team. */
export default function Teams() {
  return (
    <section className="py-16 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            Four teams. <span className="hl">One studio.</span>
          </h2>
          <p className="max-w-sm text-muted">Based in {CONTACT.city}, working with brands across South India and remotely across the country.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-14 lg:grid-cols-4">
          {TEAMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07} className="h-full">
              <figure className="group flex h-full flex-col rounded-[1.75rem] bg-surface p-1.5 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(20,19,16,0.35)] md:rounded-[2rem]">
                <div className="relative aspect-square overflow-hidden rounded-[calc(1.75rem-0.375rem)] transition-transform duration-700 ease-premium group-hover:-translate-y-1 md:rounded-[calc(2rem-0.375rem)]">
                  <TeamArt name={t.name} />
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] text-ink backdrop-blur-md md:left-4 md:top-4 md:px-3 md:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="flex-1 px-3 pb-4 pt-4 md:px-5 md:pb-6">
                  <span className="block font-display text-lg font-semibold tracking-tight md:text-2xl">{t.name}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted md:text-sm">{t.people}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
