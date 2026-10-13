"use client";

import Link from "next/link";
import clsx from "clsx";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowClockwise, ArrowUpRight, Camera, ChatCircleDots, Megaphone, ShoppingCart, Star, EnvelopeSimple, PaperPlaneRight, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { CONTACT, SERVICES } from "@/lib/content";
import ServiceArt from "@/components/sections/ServiceArt";
import { LaptopScene, SceneFrame, StepsScene } from "@/components/art/SceneKit";
import { googleFormReady, submitToGoogleForm } from "@/lib/google-form";
import { respond, serviceEmoji, thanksReply, welcome, type Ctx, type Reply } from "@/lib/assistant";

type Msg = { id: number; from: "bot"; reply: Reply; formSent?: boolean } | { id: number; from: "user"; text: string };

const STORE = "k3-chat";
const TEASER = "k3-chat-teaser";
const ease = [0.32, 0.72, 0, 1] as const;

/** Renders **bold** and line breaks from the assistant's plain-text replies. */
function Rich({ text }: { text: string }) {
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
        part.startsWith("**") ? (
          <strong key={j} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </Fragment>
  ));
}

function Avatar({ size = "size-8" }: { size?: string }) {
  return (
    <span aria-hidden className={clsx("relative grid shrink-0 place-items-center rounded-full bg-accent font-display text-[11px] font-bold text-accent-ink", size)}>
      K3
      <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" />
    </span>
  );
}

function ContactCard() {
  const item = "flex flex-col items-center gap-1 rounded-2xl bg-canvas px-2 py-3 text-[11px] font-medium text-ink ring-1 ring-black/5 transition-colors hover:bg-accent/20";
  return (
    <div className="mt-2 rounded-2xl bg-surface p-2 ring-1 ring-black/10">
      <div className="grid grid-cols-3 gap-1.5">
        <a href={CONTACT.tel} className={item}>
          <Phone size={18} weight="duotone" className="text-accent-deep" /> Call
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className={item}>
          <WhatsappLogo size={18} weight="duotone" className="text-emerald-600" /> WhatsApp
        </a>
        <a href={`mailto:${CONTACT.email}`} className={item}>
          <EnvelopeSimple size={18} weight="duotone" className="text-accent-deep" /> Email
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] leading-relaxed text-muted">
        📞 {CONTACT.phone} · ✉️ {CONTACT.email}
      </p>
    </div>
  );
}

/** Animated illustration for a bot reply; the chat never shows photos. */
function ReplyArt({ art }: { art: NonNullable<Reply["art"]> }) {
  return (
    <figure className="overflow-hidden rounded-2xl ring-1 ring-black/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        {art.kind === "service" ? (
          <ServiceArt slug={art.slug} />
        ) : art.kind === "journey" ? (
          <SceneFrame bg="from-[#1c1917] via-[#57400a] to-[#fbba00]">
            <StepsScene steps={[{ label: "Look", icon: Camera }, { label: "Talk", icon: Megaphone }, { label: "Stars", icon: Star }, { label: "Sell", icon: ShoppingCart }]} compact />
          </SceneFrame>
        ) : (
          <SceneFrame bg="from-[#052e22] via-[#065f46] to-[#15803d]">
            <LaptopScene title="Client results" metrics={[["Reach", "4.1x"], ["Views", "2.3M"], ["Reply", "4 min"]]} />
          </SceneFrame>
        )}
      </div>
      {art.caption && <figcaption className="bg-surface px-3 py-1.5 text-[11px] text-muted">{art.caption}</figcaption>}
    </figure>
  );
}

/** Animated check with a confetti burst, shown after the enquiry is sent. */
function Celebrate() {
  const bits = ["#fbba00", "#fb923c", "#34d399", "#60a5fa", "#f472b6", "#fbba00", "#a78bfa", "#fb923c"];
  return (
    <div aria-hidden className="relative mt-2 grid h-32 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 via-[#fff7e0] to-[#fb923c]/20">
      {bits.map((c, i) => {
        const a = (i / bits.length) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className={clsx("absolute size-2", i % 2 ? "rounded-full" : "rotate-45 rounded-[2px]")}
            style={{ background: c }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
            animate={{ x: Math.cos(a) * 90, y: Math.sin(a) * 46, opacity: [0, 1, 1, 0.7], scale: 1, rotate: 180 }}
            transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
          />
        );
      })}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
        className="relative grid size-16 place-items-center rounded-full bg-accent shadow-[0_14px_30px_-10px_rgba(143,95,0,0.6)]"
      >
        <svg viewBox="0 0 24 24" className="size-8 text-accent-ink" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M5 12.5l4.5 4.5L19 7.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />
        </svg>
      </motion.div>
      <span className="absolute bottom-2 text-[11px] font-medium text-accent-deep">Enquiry received 🎉</span>
    </div>
  );
}

const input =
  "w-full rounded-xl bg-canvas px-3.5 py-2.5 text-[16px] text-ink sm:text-[13px] ring-1 ring-black/10 placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent";

/** Enquiry form inside the chat; posts to the same Google Form as /contact. */
function LeadForm({ initial, onSent }: { initial: { services: string[]; phone?: string; message?: string }; onSent: (name: string) => void }) {
  const [picked, setPicked] = useState<string[]>(initial.services);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const toggle = (t: string) => setPicked((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const str = (k: string) => String(d.get(k) ?? "").trim();
    const data = { services: picked, name: str("name"), phone: str("phone"), company: str("company"), message: `${str("message")}\n(Sent from the website chat assistant)`.trim() };

    if (!googleFormReady()) {
      const body = `Name: ${data.name}\nPhone: ${data.phone}\nCompany: ${data.company}\nInterested in: ${picked.join(", ")}\n\n${data.message}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Website chat enquiry")}&body=${encodeURIComponent(body)}`;
      onSent(data.name);
      return;
    }
    setStatus("sending");
    try {
      await submitToGoogleForm(data);
      onSent(data.name);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-2 space-y-2 rounded-2xl bg-surface p-3 ring-1 ring-black/10">
      <input name="name" required autoComplete="name" placeholder="Your name *" aria-label="Your name" className={input} />
      <input
        name="phone"
        required
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        defaultValue={initial.phone}
        pattern="[+0-9 \-]{10,15}"
        title="A 10-digit mobile number"
        placeholder="Phone / WhatsApp *"
        aria-label="Phone or WhatsApp number"
        className={input}
      />
      <input name="company" autoComplete="organization" placeholder="Company or brand" aria-label="Company or brand" className={input} />
      <fieldset>
        <legend className="mb-1.5 text-[11px] font-medium text-muted">What do you need?</legend>
        <div className="flex flex-wrap gap-1">
          {SERVICES.map((s) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={picked.includes(s.title)}
              onClick={() => toggle(s.title)}
              className={clsx(
                "rounded-full px-2.5 py-1 text-[11px] ring-1 transition-colors",
                picked.includes(s.title) ? "bg-ink text-canvas ring-ink" : "bg-canvas text-muted ring-black/10 hover:text-ink",
              )}
            >
              {serviceEmoji(s.slug)} {s.title}
            </button>
          ))}
        </div>
      </fieldset>
      <textarea name="message" rows={initial.message ? 4 : 2} defaultValue={initial.message} placeholder="Tell us a little more (optional)" aria-label="Message" className={clsx(input, "resize-none")} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-[13px] font-semibold text-accent-ink transition-transform active:scale-[0.98] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send to K3 team 🚀"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-[11px] text-red-700">
          Couldn&apos;t send that. Please try again or WhatsApp us at {CONTACT.phone}.
        </p>
      )}
    </form>
  );
}

function BotMessage({ msg, onIntent, onFormSent }: { msg: Extract<Msg, { from: "bot" }>; onIntent: (intent: string, label: string) => void; onFormSent: (id: number, name: string) => void }) {
  const r = msg.reply;
  return (
    <div className="flex items-end gap-2">
      <Avatar size="size-7" />
      <div className="min-w-0 max-w-[85%] space-y-1.5">
        {r.text.map((t, i) => (
          <p key={i} className="w-fit rounded-2xl rounded-bl-md bg-canvas px-3.5 py-2.5 text-[13px] leading-relaxed text-ink/85 ring-1 ring-black/5">
            <Rich text={t} />
          </p>
        ))}
        {r.art && <ReplyArt art={r.art} />}
        {r.services && (
          <div className="grid grid-cols-2 gap-1.5">
            {r.services.map((slug) => {
              const s = SERVICES.find((x) => x.slug === slug)!;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => onIntent(`service:${slug}`, `${serviceEmoji(slug)} ${s.title}`)}
                  className="rounded-xl bg-surface p-2.5 text-left ring-1 ring-black/10 transition-colors hover:bg-accent/15"
                >
                  <span className="text-lg leading-none">{serviceEmoji(slug)}</span>
                  <span className="mt-1 block text-[12px] font-medium leading-tight text-ink">{s.title}</span>
                </button>
              );
            })}
          </div>
        )}
        {r.links?.map((l) => {
          const cls = "inline-flex items-center gap-1 text-[12px] font-medium text-accent-deep underline-offset-4 hover:underline";
          return l.href.startsWith("/") ? (
            <Link key={l.href} href={l.href} className={clsx(cls, "mr-3")}>
              {l.label} <ArrowUpRight size={12} weight="bold" />
            </Link>
          ) : (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={clsx(cls, "mr-3")}>
              {l.label} <ArrowUpRight size={12} weight="bold" />
            </a>
          );
        })}
        {r.celebrate && <Celebrate />}
        {r.contact && <ContactCard />}
        {r.form &&
          (msg.formSent ? (
            <p className="w-fit rounded-2xl bg-emerald-50 px-3.5 py-2 text-[12px] text-emerald-800 ring-1 ring-emerald-200">✅ Details sent</p>
          ) : (
            <LeadForm initial={r.form} onSent={(name) => onFormSent(msg.id, name)} />
          ))}
      </div>
    </div>
  );
}

/** Floating assistant (bottom-right): guided suggestions, answers from site content, escalation to the team and an in-chat enquiry form. */
export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [ctx, setCtx] = useState<Ctx>({ misses: 0 });
  const [typing, setTyping] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  // Show the teaser bubble once per session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(TEASER)) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Keep this tab's conversation across reloads.
  useEffect(() => {
    if (!msgs.length) return;
    try {
      sessionStorage.setItem(STORE, JSON.stringify({ msgs, ctx }));
    } catch {}
  }, [msgs, ctx]);

  const pushBot = useCallback((reply: Reply, delay = 650) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { id: nextId.current++, from: "bot", reply }]);
    }, delay);
  }, []);

  const openChat = () => {
    setOpen(true);
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER, "1");
    } catch {}
    if (msgs.length || typing) return;
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORE) ?? "null") as { msgs: Msg[]; ctx: Ctx } | null;
      if (saved?.msgs?.length) {
        setMsgs(saved.msgs);
        setCtx(saved.ctx);
        nextId.current = Math.max(...saved.msgs.map((m) => m.id)) + 1;
        return;
      }
    } catch {}
    pushBot(welcome(), 500);
  };

  const send = (input: { intent?: string; text?: string }, label: string) => {
    if (typing) return;
    setMsgs((m) => [...m, { id: nextId.current++, from: "user", text: label }]);
    const { reply, ctx: next } = respond(input, ctx);
    setCtx(next);
    pushBot(reply, 450 + Math.min(reply.text.join(" ").length * 4, 900));
  };

  const onFormSent = (id: number, name: string) => {
    setMsgs((m) => [...m.map((x) => (x.id === id && x.from === "bot" ? { ...x, formSent: true } : x)), { id: nextId.current++, from: "user", text: "📨 Sent my details" }]);
    pushBot(thanksReply(name), 700);
  };

  const restart = () => {
    setMsgs([]);
    setCtx({ misses: 0 });
    pushBot(welcome(), 400);
  };

  // Keep the newest message in view.
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // Don't pop the phone keyboard over the welcome message.
    if (window.matchMedia("(min-width: 640px)").matches) inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const last = msgs[msgs.length - 1];
  const chips = !typing && last?.from === "bot" && !(last.reply.form && !last.formSent) ? last.reply.chips : [];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="K3 Assistant chat"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.35, ease }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-3 right-3 z-40 flex h-[min(640px,calc(100dvh-7rem))] w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_30px_80px_-20px_rgba(20,19,16,0.45)] ring-1 ring-black/10 sm:bottom-24 sm:right-5 sm:h-[min(600px,calc(100dvh-9rem))] sm:w-[380px]"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 overflow-hidden bg-ink px-4 py-3.5 text-canvas">
              <span aria-hidden className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-accent/30 blur-2xl" />
              <Avatar size="size-10" />
              <div className="relative min-w-0 flex-1">
                <p className="font-display text-[15px] font-semibold leading-tight">K3 Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-canvas/65">
                  <span className="size-1.5 rounded-full bg-emerald-400" /> Online · replies instantly
                </p>
              </div>
              <button type="button" onClick={restart} aria-label="Start a new chat" title="Start over" className="relative grid size-9 place-items-center rounded-full text-canvas/70 transition-colors hover:bg-white/10 hover:text-canvas">
                <ArrowClockwise size={17} />
              </button>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="relative grid size-9 place-items-center rounded-full text-canvas/70 transition-colors hover:bg-white/10 hover:text-canvas">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} data-lenis-prevent role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-3.5 py-4">
              {msgs.map((m) => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease }}>
                  {m.from === "user" ? (
                    <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-[13px] leading-relaxed text-canvas">{m.text}</p>
                  ) : (
                    <BotMessage msg={m} onIntent={(intent, label) => send({ intent }, label)} onFormSent={onFormSent} />
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="flex items-end gap-2" aria-label="K3 Assistant is typing">
                  <Avatar size="size-7" />
                  <span className="flex gap-1 rounded-2xl rounded-bl-md bg-canvas px-3.5 py-3 ring-1 ring-black/5">
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="size-1.5 rounded-full bg-muted" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </span>
                </div>
              )}
              {chips.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pl-9">
                  {chips.map((c) => (
                    <button
                      key={c.intent + c.label}
                      type="button"
                      onClick={() => send({ intent: c.intent }, c.label)}
                      className="rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-ink ring-1 ring-black/15 transition-colors hover:bg-accent hover:ring-accent"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const t = draft.trim();
                if (!t || typing) return;
                setDraft("");
                send({ text: t }, t);
              }}
              className="flex items-center gap-2 border-t border-black/[0.06] bg-surface p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={500}
                placeholder="Ask about services, pricing, timelines…"
                aria-label="Type your message"
                className="min-w-0 flex-1 rounded-full bg-canvas px-4 py-2.5 text-[16px] text-ink ring-1 ring-black/10 placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent sm:text-[13px]"
              />
              <button
                type="submit"
                disabled={!draft.trim() || typing}
                aria-label="Send message"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform active:scale-95 disabled:opacity-40"
              >
                <PaperPlaneRight size={17} weight="fill" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teaser bubble */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease }}
            className="fixed bottom-[5.5rem] right-4 z-40 flex max-w-[250px] items-start gap-2 rounded-2xl rounded-br-md bg-surface p-3 pr-2 text-[13px] text-ink shadow-[0_20px_50px_-20px_rgba(20,19,16,0.45)] ring-1 ring-black/10 sm:right-5"
          >
            <button type="button" onClick={openChat} className="text-left leading-snug">
              👋 Hi! Need help picking the right service? <span className="font-semibold text-accent-deep">Ask me</span>
            </button>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => {
                setTeaser(false);
                try {
                  sessionStorage.setItem(TEASER, "1");
                } catch {}
              }}
              className="grid size-6 shrink-0 place-items-center rounded-full text-muted hover:bg-black/5"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher (hidden on phones while the full-height panel is open; the panel has its own close button) */}
      <motion.button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open K3 Assistant chat"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease }}
        className={clsx(
          "fixed bottom-4 right-4 z-40 h-14 items-center gap-2.5 rounded-full bg-ink p-2 sm:pr-5 text-canvas shadow-[0_18px_40px_-14px_rgba(20,19,16,0.55)] ring-1 ring-white/10 transition-transform hover:scale-[1.03] active:scale-95 sm:right-5 sm:bottom-5",
          open ? "hidden sm:flex" : "flex",
        )}
      >
        <span className="relative grid size-10 place-items-center rounded-full bg-accent text-accent-ink">
          {open ? <X size={18} weight="bold" /> : <ChatCircleDots size={22} weight="fill" />}
          {!open && <span className="absolute inset-0 animate-ping rounded-full bg-accent/50 [animation-duration:2.4s]" />}
        </span>
        <span className="hidden text-sm font-medium sm:inline">{open ? "Close" : "Ask K3"}</span>
      </motion.button>
    </>
  );
}
