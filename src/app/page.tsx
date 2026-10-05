import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Events from "@/components/sections/Events";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <ClientMarquee />
      <Manifesto />
      <Services />
      <Events />
    </main>
  );
}
