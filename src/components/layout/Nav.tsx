"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { CONTACT, CTA_LABEL, NAV_LINKS } from "@/lib/content";
import MagneticButton from "@/components/motion/MagneticButton";

const MotionLink = motion.create(Link);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <nav
        aria-label="Primary"
        className="relative z-50 mx-auto flex h-16 max-w-[1100px] items-center justify-between rounded-full bg-canvas/75 pl-5 pr-2 ring-1 ring-black/10 backdrop-blur-xl"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="K3 Media home">
          <Image src="/brand/k3-logo-dark.png" alt="" width={516} height={122} className="h-7 w-auto md:h-8" />
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-300 hover:bg-black/5 hover:text-ink",
                  isActive(l.href) ? "bg-black/5 text-ink" : "text-muted",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 grid size-12 place-items-center rounded-full bg-black/5 ring-1 ring-black/10 md:hidden"
        >
          <span className={`absolute h-px w-5 bg-ink transition-transform duration-500 ease-premium ${open ? "rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute h-px w-5 bg-ink transition-transform duration-500 ease-premium ${open ? "-rotate-45" : "translate-y-1"}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-surface px-6 pb-10 pt-32 md:hidden"
          >
            <ul className="space-y-2">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <MotionLink
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
                    className="block font-display text-5xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
            <div className="space-y-1 text-muted">
              <a href={CONTACT.tel} className="block text-lg text-ink">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="block">{CONTACT.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
