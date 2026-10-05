import Link from "next/link";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
        <li><Link href="/" className="hover:text-ink">Home</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden className="text-accent-deep">/</span>
            {it.href ? <Link href={it.href} className="hover:text-ink">{it.label}</Link> : <span aria-current="page" className="text-ink">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
