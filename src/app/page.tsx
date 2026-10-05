import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Services from "@/components/sections/Services";
import Events from "@/components/sections/Events";
import Stats from "@/components/sections/Stats";
import Work from "@/components/sections/Work";
import Reels from "@/components/sections/Reels";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <ClientMarquee />
      <Services />
      <Events />
      <Stats />
      <Work />
      <Reels />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
