import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "K3 Media is a brand-building studio from Tamil Nadu: a creative Studio and a software Lab under one roof.",
};

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PageHero
        crumbs={[{ label: "About" }]}
        lines={["A studio and a lab", "under one roof."]}
        accentLine={1}
        intro="K3 Media started with cameras and campaigns. Our clients kept asking what happens after the launch, so we built a software team to answer. Today one crew takes a brand from its first photo to its thousandth customer."
        image="studio-team"
      />
      <Stats />
      <Process />
      <Testimonials />
      <CtaBand lines={["Let's build your brand", "together."]} />
    </main>
  );
}
