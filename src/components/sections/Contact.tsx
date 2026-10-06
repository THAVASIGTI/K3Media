"use client";

import { useState } from "react";
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import clsx from "clsx";
import { CONTACT, CTA_LABEL, SERVICES } from "@/lib/content";
import Container from "@/components/ui/Container";
import SplitWords from "@/components/motion/SplitWords";

const field =
  "w-full rounded-2xl bg-canvas px-5 py-4 text-ink ring-1 ring-black/10 placeholder:text-faint transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-accent";

/** No backend yet: the form composes an email to the studio inbox. */
export default function Contact({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? "h1" : "h2";
  const [interest, setInterest] = useState<string[]>([]);
  const toggle = (t: string) => setInterest((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Company: ${d.get("company") || "-"}`,
      `Interested in: ${interest.join(", ") || "-"}`,
      "",
      String(d.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Enquiry from k3media.in")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className={asPage ? "relative overflow-hidden pb-16 pt-10 md:pb-36 md:pt-14" : "relative overflow-hidden py-16 md:py-36"}>
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-accent/10 blur-[140px]" />
      <Container className="relative grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Heading className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <SplitWords lines={["Got a launch,", "a campaign or a", "messy CRM?"]} accentLine={2} onMount={asPage} />
          </Heading>
          <p className="mt-6 max-w-sm text-lg text-muted">Tell us what you are planning. We reply within one working day.</p>
          <ul className="mt-10 space-y-3">
            {[
              { icon: Phone, label: CONTACT.phone, href: CONTACT.tel },
              { icon: WhatsappLogo, label: `WhatsApp ${CONTACT.phone}`, href: CONTACT.whatsapp },
              { icon: EnvelopeSimple, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: MapPin, label: CONTACT.addressLine, href: CONTACT.maps },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group inline-flex min-h-11 items-center gap-4 text-ink transition-colors hover:text-accent-deep"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-black/5 ring-1 ring-black/10 transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon size={18} weight="light" />
                  </span>
                  <span className="max-w-xs leading-snug">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/10 md:col-span-7">
          <div className="grid gap-6 rounded-[calc(2rem-0.375rem)] bg-surface p-5 shadow-[0_1px_2px_rgba(20,19,16,0.04),0_24px_48px_-24px_rgba(20,19,16,0.18)] sm:p-6 md:grid-cols-2 md:p-10">
            <fieldset className="md:col-span-2">
              <legend className="mb-3 text-sm text-muted">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const on = interest.includes(s.title);
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(s.title)}
                      className={clsx(
                        "min-h-10 rounded-full px-3.5 text-[13px] ring-1 transition-colors duration-300 md:px-4 md:text-sm",
                        on ? "bg-accent text-accent-ink ring-accent" : "text-ink/80 ring-black/15 hover:ring-black/40",
                      )}
                    >
                      {s.title}
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <label className="block text-sm text-muted">
              Name
              <input name="name" required autoComplete="name" className={clsx(field, "mt-2")} placeholder="Your name" />
            </label>
            <label className="block text-sm text-muted">
              Phone
              <input name="phone" required type="tel" autoComplete="tel" className={clsx(field, "mt-2")} placeholder="+91" />
            </label>
            <label className="block text-sm text-muted md:col-span-2">
              Company
              <input name="company" autoComplete="organization" className={clsx(field, "mt-2")} placeholder="Optional" />
            </label>
            <label className="block text-sm text-muted md:col-span-2">
              Tell us a little more
              <textarea name="message" rows={4} className={clsx(field, "mt-2 resize-none")} placeholder="Dates, guest count, goals, current tools..." />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent py-1.5 pl-6 pr-1.5 font-medium text-accent-ink transition-colors duration-500 ease-premium hover:bg-ink hover:text-canvas active:scale-[0.98]"
              >
                {CTA_LABEL}
                <span className="grid size-9 place-items-center rounded-full bg-accent-ink text-accent transition-transform duration-500 ease-premium group-hover:translate-x-0.5">
                  <Phone size={16} />
                </span>
              </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
