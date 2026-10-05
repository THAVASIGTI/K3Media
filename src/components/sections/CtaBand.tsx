import { CONTACT, CTA_LABEL } from "@/lib/content";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";
import SplitWords from "@/components/motion/SplitWords";

/** Closing call to action used at the bottom of every page. */
export default function CtaBand({
  lines = ["Got a launch, an event", "or a messy CRM?"],
}: {
  lines?: string[];
}) {
  return (
    <section className="pb-16 md:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-7 py-16 text-accent-ink md:px-16 md:py-24">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-white/25 blur-3xl" />
          <h2 className="relative max-w-4xl font-display text-[clamp(2.4rem,5.6vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <SplitWords lines={lines} />
          </h2>
          <p className="relative mt-6 max-w-md text-lg text-accent-ink/75">Tell us what you are planning. We reply within one working day.</p>
          <div className="relative mt-10 flex flex-wrap gap-3">
            <MagneticButton href="/contact" variant="dark">{CTA_LABEL}</MagneticButton>
            <MagneticButton href={CONTACT.whatsapp} variant="ghost" external>WhatsApp us</MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
