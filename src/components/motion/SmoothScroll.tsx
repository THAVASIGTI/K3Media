"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig, useReducedMotion } from "motion/react";
import PageCurtain from "./PageCurtain";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lives inside <ReactLenis>, so it receives the real instance once it exists.
 * (Reading a ref in the parent's effect ran before Lenis was created, which left the RAF loop
 * unstarted: Lenis swallowed wheel events and the page never scrolled.)
 */
function LenisBridge() {
  const pathname = usePathname();
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  // New page: re-measure scroll triggers for the new layout, then jump to top.
  // Order matters: refresh() restores its cached scroll position, so scrolling first gets undone.
  useEffect(() => {
    const toTop = () => {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    };
    toTop();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      toTop();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, lenis]);

  return <PageCurtain pathname={pathname} />;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  // Same tree on server and client (no remount after hydration); reduced motion just turns smoothing off.
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{ autoRaf: true, lerp: reduce ? 1 : 0.085, smoothWheel: !reduce, anchors: { offset: -24 } }}
      >
        {children}
        <LenisBridge />
      </ReactLenis>
    </MotionConfig>
  );
}
