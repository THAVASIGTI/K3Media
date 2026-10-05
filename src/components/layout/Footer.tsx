import { CONTACT, NAV_LINKS } from "@/lib/content";
import Container from "@/components/ui/Container";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "WhatsApp", href: CONTACT.whatsapp },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 pt-20">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            A creative studio and a software lab under one roof. Stories that move people, systems that move business.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a className="text-muted transition-colors hover:text-ink" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-3 text-sm md:col-span-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a className="text-muted transition-colors hover:text-ink" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
        <address className="space-y-3 text-sm not-italic md:col-span-3">
          <a href={CONTACT.tel} className="block text-ink">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="block text-muted hover:text-ink">{CONTACT.email}</a>
          <p className="text-muted">{CONTACT.city}</p>
        </address>
      </Container>
      <Container className="mt-20 flex flex-col justify-between gap-2 pb-6 text-xs text-faint md:flex-row">
        <p>© {new Date().getFullYear()} K3 Media. All rights reserved.</p>
        <p>k3media.in</p>
      </Container>
      <p aria-hidden className="pointer-events-none select-none text-center font-display text-[26vw] font-bold leading-[0.75] tracking-tighter text-black/[0.04]">
        K3 Media
      </p>
    </footer>
  );
}
