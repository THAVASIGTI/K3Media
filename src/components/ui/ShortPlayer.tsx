"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, YoutubeLogo } from "@phosphor-icons/react";
import clsx from "clsx";
import { SHORTS } from "@/lib/content";

/** 9:16 YouTube Short: thumbnail first, the player only loads when tapped. */
export default function ShortPlayer({
  id,
  className,
  sizes = "260px",
  compact = false,
}: {
  id: string;
  className?: string;
  sizes?: string;
  /** small card: hide the caption so it does not collide with the play button */
  compact?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const short = SHORTS.find((s) => s.id === id);
  if (!short) return null;

  return (
    <div className={clsx("relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ink ring-[6px] ring-ink", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${short.id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={short.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${short.title}`} className="group absolute inset-0 text-left">
          <Image src={short.thumb} alt="" fill sizes={sizes} className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            <YoutubeLogo size={14} weight="fill" className="text-red-500" /> K3 Media
          </span>
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-ink shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-premium group-hover:scale-110">
            <Play size={20} weight="fill" />
          </span>
          <span className={clsx("absolute inset-x-0 bottom-0 p-4", compact && "hidden")}>
            <span className="line-clamp-2 block text-[13px] font-medium leading-snug text-white">{short.title}</span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">{short.views}</span>
          </span>
        </button>
      )}
    </div>
  );
}
