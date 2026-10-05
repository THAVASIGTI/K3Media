import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

export default function NotFound() {
  return (
    <main className="flex min-h-[80dvh] items-center pt-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">Error 404</p>
        <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
          This page took <span className="hl">a different turn.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href="/">Back to home</MagneticButton>
          <MagneticButton href="/services" variant="ghost">See services</MagneticButton>
        </div>
      </Container>
    </main>
  );
}
