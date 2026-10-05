"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

const word: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: { y: "0%", rotate: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Line-masked word reveal for headlines. The in-view trigger sits on the wrapper:
 * masked words have no visible area, so observing them directly never fires.
 */
export default function SplitWords({
  lines,
  className,
  delay = 0,
  accentLine,
  onMount = false,
  accentClass = "hl",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  accentLine?: number;
  /** animate immediately on mount (above-the-fold) instead of when scrolled into view */
  onMount?: boolean;
  /** override for headlines that sit on photos */
  accentClass?: string;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: 0.045 } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial={"hidden"}
      {...(onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.4 } })}
    >
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          // Phones: lines flow inline so words wrap naturally (no orphans); each word carries its own mask.
          // md+: one masked block per authored line.
          <span key={li} className="inline md:block md:overflow-hidden md:pb-[0.08em]">
            {/* one wrapper per line so a highlighter stroke runs continuously under the words */}
            <span className={li === accentLine ? accentClass : undefined}>
              {words.map((w, wi) => (
                <Fragment key={wi}>
                  <span className="-mb-[0.08em] inline-block overflow-hidden pb-[0.08em] align-top md:mb-0 md:overflow-visible md:pb-0">
                    <motion.span variants={word} className="inline-block will-change-transform">
                      {w}
                    </motion.span>
                  </span>
                  {wi < words.length - 1 ? " " : ""}
                </Fragment>
              ))}
            </span>{" "}
          </span>
        );
      })}
    </motion.span>
  );
}
