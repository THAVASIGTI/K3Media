import Link from "next/link";
import { CONTACT, NAV_LINKS, SERVICES } from "@/lib/content";
import Container from "@/components/ui/Container";

const HEADING = "mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-faint";

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: CONTACT.youtube },
  { label: "WhatsApp", href: CONTACT.whatsapp },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 pt-14 md:pt-20">
      {/* Phones: two columns (pages | follow), the rest full width. md+: one row. */}
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-12">
        <div className="col-span-2 md:col-span-3">
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            A brand-building studio from Madurai. We make brands people remember, then build the systems that help them sell.
          </p>
        </div>
        <nav aria-label="Footer" className="min-w-0 md:col-span-1">
          <p className={HEADING}>Pages</p>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link className="text-muted transition-colors hover:text-ink" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services" className="col-span-2 max-md:order-1 md:col-span-3">
          <p className={HEADING}>Services</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}><Link className="text-muted transition-colors hover:text-ink" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 md:col-span-2">
          <p className={HEADING}>Follow</p>
          <ul className="space-y-3 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a className="text-muted transition-colors hover:text-ink" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <address className="col-span-2 space-y-3 text-sm not-italic max-md:order-2 md:col-span-3">
          <p className={HEADING}>Contact</p>
          <a href={CONTACT.tel} className="block text-ink">{CONTACT.phone}</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-ink">WhatsApp us</a>
          <a href={`mailto:${CONTACT.email}`} className="block text-muted hover:text-ink">{CONTACT.email}</a>
          <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="block leading-relaxed text-muted hover:text-ink">
            {CONTACT.address.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </a>
        </address>
      </Container>
      <Container className="mt-16">
        <div className="flex flex-col justify-between gap-2 border-t border-black/10 pb-8 pt-6 text-xs text-faint md:flex-row">
          <p>© {new Date().getFullYear()} K3 Media. All rights reserved.</p>
          <p>k3media.in</p>
        </div>
      </Container>
    </footer>
  );
}
