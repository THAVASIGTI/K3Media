"use client";

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
          <span key={li} className="block overflow-hidden pb-[0.08em]">
            {words.map((w, wi) => (
              <motion.span
                key={wi}
                variants={word}
                className={`inline-block will-change-transform ${li === accentLine ? accentClass : ""}`}
              >
                {w}
                {wi < words.length - 1 ? " " : ""}
              </motion.span>
            ))}{" "}
          </span>
        );
      })}
    </motion.span>
  );
}
