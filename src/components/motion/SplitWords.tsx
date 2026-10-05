"use client";

import { motion, useReducedMotion } from "motion/react";

/** Line-masked word reveal for headlines. Each line slides up from behind a mask. */
export default function SplitWords({
  lines,
  className,
  delay = 0,
  accentLine,
  onMount = false,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  accentLine?: number;
  /** animate immediately on mount (above-the-fold) instead of when scrolled into view */
  onMount?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-[0.08em]">
          {line.split(" ").map((word, wi) => (
            <motion.span
              key={wi}
              className={`inline-block will-change-transform ${li === accentLine ? "text-accent" : ""}`}
              initial={reduce ? false : { y: "110%", rotate: 4 }}
              {...(onMount
                ? { animate: { y: "0%", rotate: 0 } }
                : { whileInView: { y: "0%", rotate: 0 }, viewport: { once: true, amount: 0.5 } })}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: delay + li * 0.12 + wi * 0.04 }}
            >
              {word}
              {wi < line.split(" ").length - 1 ? " " : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
