import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://k3media.in"),
  title: { default: "K3 Media | Brand Building Studio, Events & Software", template: "%s | K3 Media" },
  description:
    "Video editing, social media, photo shoots, ads, events, VIP management, website development, custom CRM & ERP, WhatsApp CRM and automation. One team for the story and the system.",
  openGraph: {
    title: "K3 Media | We build brands people remember",
    description: "Brand building from first impression to final sale: shoots, social, events, websites and CRM.",
    url: "https://k3media.in",
    siteName: "K3 Media",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f5f3ed" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          // Local business details for search engines.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "K3 Media",
              url: "https://k3media.in",
              telephone: "+919047355000",
              email: CONTACT.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "120, 1st floor, Bahathsingh Street, Ramamoorthy Nagar, Vilangudi",
                addressLocality: "Madurai",
                addressRegion: "Tamil Nadu",
                postalCode: "625018",
                addressCountry: "IN",
              },
              sameAs: [CONTACT.instagram, CONTACT.youtube],
            }),
          }}
        />
        <SmoothScroll>
          <div className="grain" aria-hidden />
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
