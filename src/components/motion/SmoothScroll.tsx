"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig, useReducedMotion } from "motion/react";
import PageCurtain from "./PageCurtain";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, [reduce]);

  // New page: re-measure scroll triggers for the new layout, then jump to top.
  // Order matters: refresh() restores its cached scroll position, so scrolling first gets undone.
  useEffect(() => {
    const toTop = () => {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    };
    toTop();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      toTop();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Same tree on server and client (no remount after hydration); reduced motion just turns smoothing off.
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        ref={lenisRef}
        options={{ autoRaf: false, lerp: reduce ? 1 : 0.085, smoothWheel: !reduce, anchors: { offset: -24 } }}
      >
        {children}
        <PageCurtain pathname={pathname} />
      </ReactLenis>
    </MotionConfig>
  );
}
