"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
};

export default function MagneticButton({ href, children, variant = "solid", className, external }: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={clsx(
        "group inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full py-1.5 pl-6 pr-1.5 text-[0.95rem] font-medium transition-colors duration-500 ease-premium active:scale-[0.98]",
        variant === "solid"
          ? "bg-accent text-accent-ink hover:bg-ink"
          : "bg-white/5 text-ink ring-1 ring-white/15 hover:bg-white/10",
        className,
      )}
    >
      {children}
      <span
        className={clsx(
          "grid size-9 place-items-center rounded-full transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          variant === "solid" ? "bg-accent-ink text-accent" : "bg-white/10 text-ink",
        )}
      >
        <ArrowUpRight size={16} weight="regular" />
      </span>
    </motion.a>
  );
}
