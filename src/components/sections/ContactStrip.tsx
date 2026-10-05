import { ArrowUpRight, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { CONTACT, CTA_LABEL } from "@/lib/content";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

/** Closing call to action for inner pages (the home page keeps its own yellow band). */
export default function ContactStrip({ title, sub }: { title: string; sub: string }) {
  const ways = [
    { icon: Phone, label: "Call", value: CONTACT.phone, href: CONTACT.tel },
    { icon: WhatsappLogo, label: "WhatsApp", value: CONTACT.phone, href: CONTACT.whatsapp },
    { icon: EnvelopeSimple, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Visit", value: "Vilangudi, Madurai - 625 018", href: CONTACT.maps },
  ];
  return (
    <section className="pb-16 md:pb-32">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 overflow-hidden rounded-[2.5rem] bg-ink p-6 text-canvas sm:p-8 md:grid-cols-12 md:p-14">
          <div className="min-w-0 md:col-span-6">
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">{title}</h2>
            <p className="mt-5 max-w-md text-canvas/65">{sub}</p>
            <div className="mt-8">
              <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
            </div>
          </div>
          <ul className="grid min-w-0 gap-3 self-end md:col-span-6">
            {ways.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors duration-300 hover:bg-accent hover:text-accent-ink"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 transition-colors group-hover:bg-accent-ink group-hover:text-accent">
                    <Icon size={22} weight="light" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.14em] opacity-60">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
