export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent-deep">[</span> {children} <span className="text-accent-deep">]</span>
    </p>
  );
}
