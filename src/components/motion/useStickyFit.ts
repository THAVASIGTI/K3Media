"use client";

import { useEffect, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Sticky stacking cards hide their bottom edge when a card is taller than the space below its
 * sticky `top` (small phones, landscape). For those cards, lower `top` so the card sticks once its
 * bottom reaches the viewport bottom instead; cards that fit keep their CSS `top`.
 */
export function useStickyFit(scope: RefObject<HTMLElement | null>, selector: string, gap = 12) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(selector));

    const fit = () => {
      const vh = window.innerHeight;
      for (const card of cards) {
        card.style.top = "";
        const top = parseFloat(getComputedStyle(card).top) || 0;
        const fitTop = vh - card.offsetHeight - gap;
        if (fitTop < top) card.style.top = `${fitTop}px`;
      }
    };

    fit();
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        fit();
        ScrollTrigger.refresh();
      });
    });
    cards.forEach((c) => ro.observe(c));
    window.addEventListener("resize", fit);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", fit);
      cards.forEach((c) => (c.style.top = ""));
    };
  }, [scope, selector, gap]);
}
