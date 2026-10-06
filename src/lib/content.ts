import type { ImageKey } from "./images";

export const CONTACT = {
  phone: "+91 9047355000",
  tel: "tel:+919047355000",
  whatsapp: "https://wa.me/919047355000",
  email: "prem@k3media.in",
  city: "Madurai, Tamil Nadu",
  address: ["120, 1st floor, Bahathsingh Street,", "Ramamoorthy Nagar, Vilangudi,", "Madurai - 625 018"],
  addressLine: "120, 1st floor, Bahathsingh Street, Ramamoorthy Nagar, Vilangudi, Madurai - 625 018",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("120, Bahathsingh Street, Ramamoorthy Nagar, Vilangudi, Madurai 625018"),
  instagram: "https://www.instagram.com/k3mediaservices/",
  instagramHandle: "@k3mediaservices",
  youtube: "https://www.youtube.com/@k3mediaservices/shorts",
};

export type Short = { id: string; title: string; views: string; thumb: string };

/** Latest Shorts from youtube.com/@k3mediaservices. Thumbnails come from YouTube's image CDN. */
export const SHORTS: Short[] = [
  { id: "hBP9IgewyDY", title: "Make your ads look and feel like real content", views: "531 views", thumb: "https://i.ytimg.com/vi/hBP9IgewyDY/hq720.jpg" },
  { id: "yzr7qwDXcT8", title: "3 things every video editor must follow before editing social content", views: "986 views", thumb: "https://i.ytimg.com/vi/yzr7qwDXcT8/oardefault.jpg" },
  { id: "vmSfoznhrVw", title: "Skip lookalike audiences in Meta ads. Use more creatives instead", views: "66 views", thumb: "https://i.ytimg.com/vi/vmSfoznhrVw/oardefault.jpg" },
  { id: "LKQQ2IsmTOI", title: "No social media account yet? Create one and reach your customers", views: "490 views", thumb: "https://i.ytimg.com/vi/LKQQ2IsmTOI/oardefault.jpg" },
];

export const CTA_LABEL = "Book a call";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
    tagline: "Media & Content",
    blurb: "Cameras, edits, campaigns and the faces that front them. The crew that makes your brand seen, felt and remembered.",
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

export type HeroSlide = { topic: string; caption: string; main: ImageKey; card: ImageKey; href: string };

/** Hero banner slideshow: one cover image per topic. */
export const HERO_SLIDES: HeroSlide[] = [
  { topic: "Meta ads", caption: "Facebook & Instagram ads", main: "g-meta", card: "g-messenger", href: "/services/advertising" },
  { topic: "CRM & ERP", caption: "Custom CRM & ERP", main: "g-analytics", card: "g-laptop", href: "/services/crm-erp" },
  { topic: "Instagram & reels", caption: "Reels that get shared", main: "g-instagram", card: "g-instagram-2", href: "/services/social-media" },
  { topic: "WhatsApp CRM", caption: "One shared inbox", main: "g-whatsapp", card: "g-whatsapp-2", href: "/services/whatsapp-crm" },
  { topic: "Social media handling", caption: "Every platform, daily", main: "g-social", card: "g-social-2", href: "/services/social-media" },
  { topic: "Brand & web design", caption: "Websites that sell", main: "g-design", card: "g-laptop", href: "/services/website" },
];

export type Stage = {
  key: string;
  title: string;
  line: string;
  detail: string;
  image: ImageKey;
  services: string[];
  stat: { value: string; label: string };
  /** One of our own YouTube Shorts (SHORTS id) or the Instagram profile. */
  media: { kind: "short"; id: string } | { kind: "instagram" };
};

/** Services grouped as the brand-building journey, from first impression to repeat sale. */
export const STAGES: Stage[] = [
  {
    key: "look",
    title: "Look the part",
    line: "Shoots and films that give your brand a face people recognise.",
    detail:
      "First impressions are visual. Our photo crew and editors build a look that is yours alone, then cut it for every screen: catalogue, reel, billboard and big-screen brand film.",
    image: "photo-shoot",
    services: ["photo-shoot", "video-editing"],
    stat: { value: "18K+", label: "reels and edits delivered" },
    media: { kind: "short", id: "yzr7qwDXcT8" },
  },
  {
    key: "talk",
    title: "Get talked about",
    line: "Content, campaigns and reviews that keep your name in every feed.",
    detail:
      "We plan the calendar, make the content, run the ads and answer the reviews, so your brand shows up daily and every rupee of ad spend is tracked to leads.",
    image: "social-media",
    services: ["social-media", "advertising", "reviews"],
    stat: { value: "4.2x", label: "average return on ad spend" },
    media: { kind: "short", id: "hBP9IgewyDY" },
  },
  {
    key: "live",
    title: "Bring in the big names",
    line: "Celebrities, influencers and VIPs who make your launch headline.",
    detail:
      "The right face for your launch or campaign, booked, briefed and looked after. Protocol, security, transport and media are handled by one team.",
    image: "vip-management",
    services: ["high-profile"],
    stat: { value: "1 desk", label: "for booking, protocol and media on the day" },
    media: { kind: "instagram" },
  },
  {
    key: "sell",
    title: "Turn fans into customers",
    line: "The website, CRM and WhatsApp systems that catch every lead your brand creates.",
    detail:
      "Attention only pays when someone follows up. We build the website, custom CRM & ERP, WhatsApp inbox and automations that turn every enquiry into a customer.",
    image: "software-team",
    services: ["website", "crm-erp", "whatsapp-crm", "automation", "software-support"],
    stat: { value: "4 min", label: "average lead response with WhatsApp CRM" },
    media: { kind: "short", id: "LKQQ2IsmTOI" },
  },
];

export type Step = { title: string; body: string; tags: string[] };

export const PROCESS: Step[] = [
  { title: "Listen", body: "A one-hour call to understand your goal, audience, budget and deadline. You leave with a clear plan, even if you never hire us.", tags: ["Discovery call", "Brief", "Budget"] },
  { title: "Plan", body: "Creative concept, content calendar or system blueprint. Every deliverable has an owner and a date before any work starts.", tags: ["Concept", "Timeline", "Quote"] },
  { title: "Make", body: "Shoots, edits, stages or software, built by one team in one place, so the campaign and the CRM speak the same language.", tags: ["Production", "Build", "Review"] },
  { title: "Grow", body: "We measure, report and keep improving. Reels get recut, campaigns get tuned and automations get smarter every month.", tags: ["Reports", "Support", "Scale"] },
];

export type Work = {
  slug: string;
  client: string;
  tag: string;
  title: string;
  result: string;
  image: ImageKey;
  gallery: ImageKey[];
  services: string[];
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
};

// Sample case studies; replace with real client work before launch.
export const WORK: Work[] = [
  {
    slug: "lakshmi-silks-bridal-collection",
    client: "Lakshmi Silks",
    tag: "Shoot + Social",
    title: "Unique Product photoshoot",
    result: "4.1x reach in the launch month",
    image: "work-2",
    gallery: ["work-8", "advertising", "work-1"],
    services: ["photo-shoot", "video-editing", "social-media"],
    challenge: "A family-run silk house was launching its biggest bridal collection in years, with old catalogue photos and a quiet Instagram page.",
    approach: "We cast models, styled 42 sarees and shot stills and reels across two days, then ran a six-week launch calendar with reels, carousels and creator collaborations.",
    results: [{ value: "4.1x", label: "reach in launch month" }, { value: "312", label: "store visit enquiries" }, { value: "18", label: "reels delivered" }],
  },
  {
    slug: "brewhouse-summer-launch",
    client: "Brewhouse Co.",
    tag: "Ads + Video",
    title: "A summer drink launch built for reels",
    result: "2.3M views across 6 weeks",
    image: "work-6",
    gallery: ["social-media", "video-editing", "advertising"],
    services: ["advertising", "video-editing", "social-media"],
    challenge: "A new beverage brand had to win shelf attention in a crowded summer market with a modest budget.",
    approach: "We produced a bank of 24 short ads, tested hooks on Meta and YouTube, and moved budget every week toward the three best performers.",
    results: [{ value: "2.3M", label: "views in 6 weeks" }, { value: "₹4.20", label: "cost per engaged view" }, { value: "24", label: "ad variations tested" }],
  },
  {
    slug: "arun-exports-whatsapp-crm",
    client: "Arun Exports",
    tag: "WhatsApp CRM",
    title: "WhatsApp follow-ups wired into a new CRM",
    result: "Lead response time from 6 hours to 4 minutes",
    image: "work-9",
    gallery: ["whatsapp-crm", "crm-erp", "software-team"],
    services: ["whatsapp-crm", "crm-erp", "automation"],
    challenge: "Enquiries from IndiaMART, ads and the website landed in three inboxes and two personal phones. Leads waited hours for a reply.",
    approach: "We built a custom CRM, moved the business number to the WhatsApp Business API with a shared inbox, and automated first replies and follow-ups.",
    results: [{ value: "4 min", label: "average first response" }, { value: "38%", label: "more leads converted" }, { value: "6", label: "sales staff on one number" }],
  },
  {
    slug: "metro-heritage-walk-campaign",
    client: "Metro Heritage Walk",
    tag: "Campaign + Website",
    title: "4x E-Commerce sales through ads",
    result: "11,000 bookings in one season",
    image: "work-3",
    gallery: ["website-dev", "advertising", "social-media-2"],
    services: ["advertising", "website", "social-media"],
    challenge: "A heritage tour operator wanted locals, not only tourists, to book its evening walks.",
    approach: "We built a fast booking website, shot the trail at night and ran outdoor and Instagram campaigns aimed at city families and students.",
    results: [{ value: "11,000", label: "bookings in one season" }, { value: "62%", label: "bookings from mobile" }, { value: "3", label: "new walk routes added" }],
  },
];

export const CLIENTS = ["Lakshmi Silks", "Coastal Motors", "Brewhouse Co.", "Arun Exports", "Nila Foods", "Vetri Hospitals", "Kaveri Realty", "Orbit Academy", "Sri Murugan Textiles", "Pixel Mart"];

export type Quote = { quote: string; name: string };

// Sample testimonials; replace with real client quotes before launch.
export const QUOTES: Quote[] = [
  { quote: "They shot our launch, ran the ads and then built the CRM that caught every lead. One team, no hand-offs.", name: "Priya Raman" },
  { quote: "Our WhatsApp flow now answers enquiries in minutes. Sales stopped losing leads over the weekend.", name: "Divya Narayanan" },
  { quote: "Our product photos finally look like the brand we wanted to be. Online sales went up the month we switched.", name: "Karthik Selvam" },
  { quote: "The reels they edit for us get more views in a week than our old posts got in a month.", name: "Meena Sundar" },
  { quote: "The custom ERP replaced four spreadsheets. Billing, stock and GST now sit in one place.", name: "Arjun Prakash" },
  { quote: "Ads, reviews and the website are handled by one team, and every month we get a report we can actually read.", name: "Lakshmi Narayan" },
];

export const FAQ = [
  { q: "Do I have to hire both the Studio and the Lab?", a: "No. Most clients start with one service. The benefit of one team shows up when your campaign leads flow straight into a system we also built." },
  { q: "Where do you work?", a: "We are based in Vilangudi, Madurai and run shoots across South India. Software and social media work is fully remote, anywhere in India." },
  { q: "How fast can you start?", a: "Social media and video edits usually start within a week. Websites take 2 to 4 weeks, and custom CRM or ERP builds 3 to 8 weeks." },
  { q: "Can you set up WhatsApp CRM on our existing number?", a: "Yes. We move your business number to the official WhatsApp Business API, connect it to a shared web inbox and your CRM, and train your team." },
  { q: "How is pricing done?", a: "Monthly retainers for social media and support, fixed quotes for shoots and software builds. Every quote is itemised." },
];
