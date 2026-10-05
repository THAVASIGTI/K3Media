import type { ImageKey } from "./images";

export const CONTACT = {
  phone: "+91 90473 55000",
  tel: "tel:+919047355000",
  whatsapp: "https://wa.me/919047355000",
  email: "hello@k3media.in",
  city: "Tamil Nadu, India",
};

export const CTA_LABEL = "Book a call";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Pillar = "studio" | "lab";

export type Service = {
  slug: string;
  pillar: Pillar;
  title: string;
  line: string;
  points: string[];
  image: ImageKey;
};

export const PILLARS: Record<Pillar, { name: string; tagline: string; blurb: string }> = {
  studio: {
    name: "Studio",
    tagline: "Media & Events",
    blurb: "Cameras, edits, campaigns and stages. The crew that makes your brand seen, felt and remembered.",
  },
  lab: {
    name: "Lab",
    tagline: "Software & Systems",
    blurb: "Websites, custom CRM & ERP, WhatsApp CRM and automation that turn the attention we create into leads, orders and repeat customers.",
  },
};

export const SERVICES: Service[] = [
  {
    slug: "video-editing",
    pillar: "studio",
    title: "Video Editing",
    line: "Reels, films and ads cut for the scroll and the big screen.",
    points: ["Short-form reels and shorts", "Brand films and event aftermovies", "Colour grading, motion graphics, subtitles"],
    image: "video-editing",
  },
  {
    slug: "social-media",
    pillar: "studio",
    title: "Social Media Handling",
    line: "Calendars, content and community, run every single day.",
    points: ["Monthly content calendars", "Instagram, YouTube, LinkedIn, Facebook", "Community replies and monthly reports"],
    image: "social-media",
  },
  {
    slug: "photo-shoot",
    pillar: "studio",
    title: "Photo Shoot Team",
    line: "An on-call crew for product, portrait, brand and event shoots.",
    points: ["Studio and on-location shoots", "Product and catalogue photography", "Lighting, styling and retouching"],
    image: "photo-shoot",
  },
  {
    slug: "advertising",
    pillar: "studio",
    title: "Advertisement & Promotion",
    line: "Paid campaigns and outdoor media planned around real numbers.",
    points: ["Meta and Google ads", "Outdoor, print and radio placements", "Launch and festive promotions"],
    image: "advertising",
  },
  {
    slug: "events",
    pillar: "studio",
    title: "Event Organisation",
    line: "Corporate meets, conferences and commercial launches, end to end.",
    points: ["Venue, stage, sound and lighting", "Guest management and registrations", "Live coverage and same-day edits"],
    image: "event-corporate",
  },
  {
    slug: "high-profile",
    pillar: "studio",
    title: "High-Profile Management",
    line: "Discreet handling for celebrities, VIPs and leadership guests.",
    points: ["Celebrity and influencer booking", "Protocol, security and transport", "Green rooms and media handling"],
    image: "vip-management",
  },
  {
    slug: "website",
    pillar: "lab",
    title: "Website Development",
    line: "Fast, mobile-first websites and online stores that turn visitors into enquiries.",
    points: ["Business and corporate websites", "E-commerce stores and landing pages", "SEO setup, hosting and speed tuning"],
    image: "website-dev",
  },
  {
    slug: "crm-erp",
    pillar: "lab",
    title: "Custom CRM & ERP",
    line: "Built around how your business actually works, not a one-size-fits-all template.",
    points: ["Lead pipelines, follow-ups and sales reports", "Inventory, billing and GST invoicing", "Custom modules, roles and dashboards"],
    image: "crm-erp",
  },
  {
    slug: "whatsapp-crm",
    pillar: "lab",
    title: "WhatsApp CRM",
    line: "Every WhatsApp chat, lead and order in one shared team inbox on the web.",
    points: ["Official WhatsApp Business API", "Shared inbox for your whole team", "Broadcasts, chatbots and auto-replies"],
    image: "whatsapp-crm",
  },
  {
    slug: "reviews",
    pillar: "lab",
    title: "Product Review Management",
    line: "Collect, monitor and answer reviews across every marketplace.",
    points: ["Google, Amazon and Flipkart reviews", "Review request flows after purchase", "Sentiment dashboard and alerts"],
    image: "product-review",
  },
  {
    slug: "automation",
    pillar: "lab",
    title: "Automation Systems",
    line: "Workflows and bots that move data and follow up while you sleep.",
    points: ["Lead capture from ads and forms straight to CRM", "Email, SMS and payment reminders", "Custom integrations and reports"],
    image: "automation",
  },
  {
    slug: "software-support",
    pillar: "lab",
    title: "Software Support",
    line: "Maintenance, hosting and changes from a team that answers the phone.",
    points: ["Annual maintenance contracts", "Hosting, backups and security", "Feature updates on request"],
    image: "software-team",
  },
];

export type EventType = { title: string; detail: string; image: ImageKey };

export const EVENT_TYPES: EventType[] = [
  { title: "Corporate Events", detail: "Annual days, award nights and leadership offsites.", image: "event-corporate-2" },
  { title: "Meetings & Conferences", detail: "Dealer meets, summits and seminars for 50 to 2,000 guests.", image: "event-corporate-3" },
  { title: "Commercial Launches", detail: "Product launches, store openings and brand activations.", image: "event-commercial" },
  { title: "Concerts & Shows", detail: "Stage, sound, light and artist management for live nights.", image: "event-commercial-2" },
  { title: "Galas & Celebrations", detail: "Weddings, private galas and milestone parties with full decor.", image: "work-1" },
];

export type Step = { title: string; body: string; tags: string[] };

export const PROCESS: Step[] = [
  { title: "Listen", body: "A one-hour call to understand your goal, audience, budget and deadline. You leave with a clear plan, even if you never hire us.", tags: ["Discovery call", "Brief", "Budget"] },
  { title: "Plan", body: "Creative concept, content calendar or system blueprint. Every deliverable has an owner and a date before any work starts.", tags: ["Concept", "Timeline", "Quote"] },
  { title: "Make", body: "Shoots, edits, stages or software, built by one team in one place, so the campaign and the CRM speak the same language.", tags: ["Production", "Build", "Review"] },
  { title: "Grow", body: "We measure, report and keep improving. Reels get recut, campaigns get tuned and automations get smarter every month.", tags: ["Reports", "Support", "Scale"] },
];

export type Work = { client: string; tag: string; title: string; result: string; image: ImageKey };

export const WORK: Work[] = [
  { client: "Lakshmi Silks", tag: "Shoot + Social", title: "A bridal collection shot in two days", result: "4.1x reach in the launch month", image: "work-2" },
  { client: "Coastal Motors", tag: "Event", title: "A 1,200-guest dealer meet in Chennai", result: "Planned and delivered in 19 days", image: "work-4" },
  { client: "Brewhouse Co.", tag: "Ads + Video", title: "A summer drink launch built for reels", result: "2.3M views across 6 weeks", image: "work-6" },
  { client: "Arun Exports", tag: "CRM + Automation", title: "WhatsApp follow-ups wired into a new CRM", result: "Lead response time from 6 hours to 4 minutes", image: "crm-erp-3" },
  { client: "Metro Heritage Walk", tag: "Campaign", title: "A city night campaign for a heritage trail", result: "11,000 bookings in one season", image: "work-3" },
];

export const STATS = [
  { value: 240, suffix: "+", label: "events delivered", pillar: "studio" as Pillar },
  { value: 18, suffix: "K", label: "reels and edits shipped", pillar: "studio" as Pillar },
  { value: 65, suffix: "+", label: "CRM and ERP rollouts", pillar: "lab" as Pillar },
  { value: 1.4, suffix: "M", label: "automated messages a month", pillar: "lab" as Pillar, decimals: 1 },
];

export const CLIENTS = ["Lakshmi Silks", "Coastal Motors", "Brewhouse Co.", "Arun Exports", "Nila Foods", "Vetri Hospitals", "Kaveri Realty", "Orbit Academy", "Sri Murugan Textiles", "Pixel Mart"];

export type Quote = { quote: string; name: string; role: string; company: string };

export const QUOTES: Quote[] = [
  { quote: "They shot our launch, ran the ads and then built the CRM that caught every lead. One team, no hand-offs.", name: "Priya Raman", role: "Marketing Head", company: "Lakshmi Silks" },
  { quote: "A 1,200-person dealer meet in under three weeks, and not one guest complaint. The VIP desk was flawless.", name: "Karthik Subramanian", role: "Regional Director", company: "Coastal Motors" },
  { quote: "Our WhatsApp flow now answers enquiries in minutes. Sales stopped losing leads over the weekend.", name: "Divya Narayanan", role: "Founder", company: "Arun Exports" },
];

export const FAQ = [
  { q: "Do I have to hire both the Studio and the Lab?", a: "No. Most clients start with one service. The benefit of one team shows up when your campaign leads flow straight into a system we also built." },
  { q: "Where do you work?", a: "We are based in Tamil Nadu and run shoots and events across South India. Software and social media work is fully remote, anywhere in India." },
  { q: "How fast can you start?", a: "Social media and video edits usually start within a week. Events need 2 to 6 weeks depending on size. Websites take 2 to 4 weeks, and custom CRM or ERP builds 3 to 8 weeks." },
  { q: "Can you set up WhatsApp CRM on our existing number?", a: "Yes. We move your business number to the official WhatsApp Business API, connect it to a shared web inbox and your CRM, and train your team." },
  { q: "How is pricing done?", a: "Monthly retainers for social media and support, fixed quotes for events, shoots and software builds. Every quote is itemised." },
];
