import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Manifesto from "@/components/sections/Manifesto";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <ClientMarquee />
      <Manifesto />
    </main>
  );
}
