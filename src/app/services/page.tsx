import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand building from first impression to final sale: photo shoots, video editing, social media, ads, events, VIP management, websites, custom CRM & ERP, WhatsApp CRM and automation.",
};

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PageHero
        crumbs={[{ label: "Services" }]}
        lines={["Twelve services.", "One brand to build."]}
        accentLine={1}
        intro="Pick one service or the whole journey. Every stage is run by the same team, so your shoot, your feed, your event and your CRM all tell the same story."
      />
      <Services heading={false} />
      <Process />
      <CtaBand />
    </main>
  );
}
