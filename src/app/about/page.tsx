import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Milestones from "@/components/sections/Milestones";
import Values from "@/components/sections/Values";
import Teams from "@/components/sections/Teams";
import Process from "@/components/sections/Process";
import ContactStrip from "@/components/sections/ContactStrip";

export const metadata: Metadata = {
  title: "About",
  description: "K3 Media is a brand-building studio from Tamil Nadu: photo, video, social, ads and events, plus websites, CRM and WhatsApp systems, run by one team.",
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
      <Milestones />
      <Values />
      <Teams />
      <Process />
      <ContactStrip title="Want to build with us?" sub="Whether you are a brand ready to grow or a creator who wants to join the team, we would love to hear from you." />
    </main>
  );
}
