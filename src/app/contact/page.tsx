import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or WhatsApp +91 9047355000, email prem@k3media.in or visit us in Vilangudi, Madurai. K3 Media replies within one working day.",
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip pt-28 md:pt-36">
      <Container>
        <Breadcrumb items={[{ label: "Contact" }]} />
      </Container>
      <Contact asPage />
      <Faq />
    </main>
  );
}
