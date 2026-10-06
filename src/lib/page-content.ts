/* Content used only by inner pages (/services, /about), so they never repeat the home page.
   Figures, names and dates are sample content: replace with real details before launch. */

/* ---------- /services ---------- */

export const SERVICE_TURNAROUND: Record<string, string> = {
  "video-editing": "Reels in 48 hours",
  "social-media": "Starts within 1 week",
  "photo-shoot": "Edited photos in 5 days",
  advertising: "Campaign live in 7 days",
  "high-profile": "Bookings in 3 to 10 days",
  reviews: "Set up in 1 week",
  website: "Live in 2 to 4 weeks",
  "crm-erp": "Rollout in 3 to 8 weeks",
  "whatsapp-crm": "Live in 7 to 10 days",
  automation: "First flows in 1 week",
  "software-support": "Same-day response",
};

export const ENGAGEMENTS = [
  {
    name: "Monthly retainer",
    for: "Social media, ads, video and review management",
    from: "Fixed monthly fee",
    points: ["Fixed monthly deliverables", "Dedicated account manager", "Monthly report and strategy call", "Pause or change scope with 30 days notice"],
    featured: false,
  },
  {
    name: "Brand-building package",
    for: "Shoot, social, ads, website and CRM together",
    from: "Custom quote",
    points: ["One team across Studio and Lab", "Launch plan in the first week", "Website and CRM connected to every campaign", "Quarterly growth review"],
    featured: true,
  },
  {
    name: "Project or support plan",
    for: "Shoots, websites, CRM builds and AMC",
    from: "Fixed itemised quote",
    points: ["Clear scope, timeline and price", "50% to start, balance on delivery", "Annual maintenance plans for software", "Priority phone and WhatsApp support"],
    featured: false,
  },
];

export const SERVICES_FAQ = [
  { q: "Can we start with one service and add more later?", a: "Yes. Most clients start with social media, a shoot or a website, then add ads or a CRM as they grow. Everything we build connects." },
  { q: "Do you work with businesses outside Tamil Nadu?", a: "Social media, ads, websites and software are delivered remotely across India. Shoots are run across South India; other cities on request." },
  { q: "Who owns the content, website and software?", a: "You do. Photos, videos, ad accounts, the website and the CRM are registered to your business and handed over in full." },
  { q: "How do you report results?", a: "A monthly report covering reach, leads, cost per lead and sales from CRM, with a 30-minute call to plan the next month." },
];

/* ---------- /about ---------- */

export const MILESTONES = [
  { year: "2018", title: "Started with one camera", body: "K3 Media begins as a two-person photo and video studio shooting for local brands." },
  { year: "2019", title: "First 100 clients", body: "Local retailers and manufacturers start trusting us with their launches and campaigns." },
  { year: "2021", title: "Social media team", body: "We add a full content and ads team as brands move their budgets online." },
  { year: "2022", title: "The Lab opens", body: "Clients ask what happens after the launch, so we build our first CRM and website team." },
  { year: "2024", title: "WhatsApp CRM", body: "We launch WhatsApp CRM and automation so every lead we create gets answered in minutes." },
  { year: "2026", title: "One brand-building team", body: "Studio and Lab work as one team for 100+ active clients across South India." },
];

export const VALUES = [
  { title: "Results over likes", body: "We measure leads, bookings and sales, not just reach. Every campaign ends in a number you can bank." },
  { title: "One team, no hand-offs", body: "The people who shoot your launch also build the system that follows up. Nothing gets lost between agencies." },
  { title: "Straight answers", body: "Itemised quotes, honest timelines and a phone that gets picked up. If something will not work, we say so." },
  { title: "Built to be owned", body: "Your accounts, content, website and software belong to you, documented and handed over in full." },
];

export const TEAMS = [
  { name: "Production", people: "Photographers, cinematographers, editors" },
  { name: "Content & ads", people: "Strategists, designers, copywriters, media buyers" },
  { name: "VIP & talent", people: "Celebrity booking, protocol, VIP and artist relations" },
  { name: "The Lab", people: "Developers, CRM consultants, support engineers" },
];
