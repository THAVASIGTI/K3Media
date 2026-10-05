"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/** Brand-yellow wipe that plays on client-side navigation (never on first load, so it can't hide content). */
export default function PageCurtain({ pathname }: { pathname: string }) {
  const first = useRef(true);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setRun((n) => n + 1);
  }, [pathname]);

  return (
    <AnimatePresence>
      {run > 0 && (
        <motion.div
          key={run}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] origin-top bg-accent"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
