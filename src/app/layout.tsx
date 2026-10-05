import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://k3media.in"),
  title: { default: "K3 Media | Media, Events & Software Studio", template: "%s | K3 Media" },
  description:
    "Video editing, social media, photo shoots, ads, events, VIP management, website development, custom CRM & ERP, WhatsApp CRM and automation. One team for the story and the system.",
  openGraph: {
    title: "K3 Media | Where stories meet systems",
    description: "A creative studio and a software lab under one roof.",
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
