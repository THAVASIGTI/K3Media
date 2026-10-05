"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { PILLARS, STATS } from "@/lib/content";
import Container from "@/components/ui/Container";

function Counter({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = value.toFixed(decimals) + suffix;
      return;
    }
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = v.toFixed(decimals) + suffix),
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {(0).toFixed(decimals) + suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="K3 Media in numbers" className="border-y border-white/10">
      <Container className="grid grid-cols-1 md:grid-cols-2">
        {(["studio", "lab"] as const).map((p, pi) => (
          <div key={p} className={`py-14 md:py-20 ${pi === 0 ? "md:border-r md:border-white/10 md:pr-12" : "lab-grid border-t border-white/10 md:border-t-0 md:pl-12"}`}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {PILLARS[p].name} <span className="text-faint">/ {PILLARS[p].tagline}</span>
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {STATS.filter((s) => s.pillar === p).map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.04em]">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </dd>
                  <dd aria-hidden className="mt-3 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </Container>
    </section>
  );
}
