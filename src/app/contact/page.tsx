import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call +91 90473 55000, WhatsApp us or send an enquiry. K3 Media replies within one working day.",
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
