import Image from "next/image";
import { TEAMS } from "@/lib/page-content";
import { CONTACT } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

/** Department cards: photos start grayscale and come alive on hover. */
export default function Teams() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            Four teams. <span className="hl">One studio.</span>
          </h2>
          <p className="max-w-sm text-muted">Based in {CONTACT.city}, working with brands across South India and remotely across the country.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                  <Image
                    src={IMAGES[t.image].src}
                    alt={IMAGES[t.image].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-[1.2s] ease-premium group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-xs text-ink backdrop-blur-md">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <figcaption className="mt-5">
                  <span className="block font-display text-2xl font-semibold tracking-tight">{t.name}</span>
                  <span className="mt-1 block text-sm text-muted">{t.people}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
