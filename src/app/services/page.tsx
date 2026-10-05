import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceCatalog from "@/components/sections/ServiceCatalog";
import Engagements from "@/components/sections/Engagements";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import ContactStrip from "@/components/sections/ContactStrip";
import { SERVICES_FAQ } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Every K3 Media service in detail: photo shoots, video editing, social media, ads, events, VIP management, review management, websites, custom CRM & ERP, WhatsApp CRM, automation and software support.",
};

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PageHero
        crumbs={[{ label: "Services" }]}
        lines={["Twelve services.", "One brand to build."]}
        accentLine={1}
        intro="Browse every service with what is included and how fast we deliver. Filter by Media & Events or Software & Systems, then open any service for the full details."
      />
      <ServiceCatalog />
      <Engagements />
      <Process />
      <Faq items={SERVICES_FAQ} title="Service questions," />
      <ContactStrip title="Not sure where to start?" sub="Tell us your goal and budget. We will recommend the two or three services that will move it fastest." />
    </main>
  );
}
