export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">[</span> {children} <span className="text-accent">]</span>
    </p>
  );
}
