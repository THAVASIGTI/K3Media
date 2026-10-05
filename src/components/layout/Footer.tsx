import Link from "next/link";
import { CONTACT, NAV_LINKS, SERVICES } from "@/lib/content";
import Container from "@/components/ui/Container";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com/@k3mediaservices/shorts" },
  { label: "WhatsApp", href: CONTACT.whatsapp },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 pt-20">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            A brand-building studio from Tamil Nadu. We make brands people remember, then build the systems that help them sell.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link className="text-muted transition-colors hover:text-ink" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}><Link className="text-muted transition-colors hover:text-ink" href={`/services/${s.slug}`}>{s.title}</Link></li>
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
        <address className="space-y-3 text-sm not-italic md:col-span-2">
          <a href={CONTACT.tel} className="block text-ink">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="block text-muted hover:text-ink">{CONTACT.email}</a>
          <p className="text-muted">{CONTACT.city}</p>
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
