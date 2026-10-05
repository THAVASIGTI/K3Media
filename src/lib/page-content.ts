import type { ImageKey } from "./images";

/* Content used only by inner pages (/services, /events, /about), so they never repeat the home page.
   Figures, names and dates are sample content: replace with real details before launch. */

/* ---------- /services ---------- */

/** Concept cover images for the /services catalogue cards (falls back to the service photo). */
export const SERVICE_COVER: Partial<Record<string, ImageKey>> = {
  website: "c-website",
  "crm-erp": "g-analytics",
  "whatsapp-crm": "g-whatsapp",
  reviews: "c-reviews",
  automation: "c-automation",
  "software-support": "c-support",
};

export const SERVICE_TURNAROUND: Record<string, string> = {
  "video-editing": "Reels in 48 hours",
  "social-media": "Starts within 1 week",
  "photo-shoot": "Edited photos in 5 days",
  advertising: "Campaign live in 7 days",
  events: "2 to 6 weeks lead time",
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
    from: "From ₹25,000 / month",
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
    for: "Events, shoots, websites, CRM builds and AMC",
    from: "Fixed itemised quote",
    points: ["Clear scope, timeline and price", "50% to start, balance on delivery", "Annual maintenance plans for software", "Priority phone and WhatsApp support"],
    featured: false,
  },
];

export const SERVICES_FAQ = [
  { q: "Can we start with one service and add more later?", a: "Yes. Most clients start with social media, a shoot or a website, then add ads, events or a CRM as they grow. Everything we build connects." },
  { q: "Do you work with businesses outside Tamil Nadu?", a: "Social media, ads, websites and software are delivered remotely across India. Shoots and events are run across South India; other cities on request." },
  { q: "Who owns the content, website and software?", a: "You do. Photos, videos, ad accounts, the website and the CRM are registered to your business and handed over in full." },
  { q: "How do you report results?", a: "A monthly report covering reach, leads, cost per lead and sales from CRM, with a 30-minute call to plan the next month." },
];

/* ---------- /events ---------- */

export type EventDetail = {
  title: string;
  image: ImageKey;
  body: string;
  guests: string;
  lead: string;
  handles: string[];
};

export const EVENT_DETAILS: EventDetail[] = [
  {
    title: "Corporate events",
    image: "event-corporate-2",
    body: "Annual days, award nights, town halls and leadership offsites that make teams proud of where they work.",
    guests: "100 to 2,000 guests",
    lead: "3 to 6 weeks",
    handles: ["Theme, script and run of show", "Stage, LED and sound design", "Award trophies and certificates", "Employee registrations and seating"],
  },
  {
    title: "Meetings & conferences",
    image: "event-corporate-3",
    body: "Dealer meets, summits, seminars and AGMs with tight agendas, clear audio and speakers who land on time.",
    guests: "40 to 1,500 delegates",
    lead: "2 to 5 weeks",
    handles: ["Venue, rooms and delegate travel", "Speaker coordination and rehearsals", "Badges, kits and check-in desks", "Live streaming and recordings"],
  },
  {
    title: "Commercial launches",
    image: "event-commercial",
    body: "Product reveals, store openings and brand activations designed to be filmed, shared and talked about.",
    guests: "50 to 5,000 visitors",
    lead: "2 to 4 weeks",
    handles: ["Reveal moment and stage props", "Press, influencers and media wall", "Celebrity or VIP appearance", "Same-day reels and photo coverage"],
  },
  {
    title: "Weddings & celebrations",
    image: "hero-2",
    body: "Weddings, receptions and milestone parties with the decor, flow and coverage your family will remember.",
    guests: "100 to 1,500 guests",
    lead: "6 to 12 weeks",
    handles: ["Decor, mandap and floral design", "Guest hospitality and transport", "Photo, film and drone coverage", "Entertainment and emcee"],
  },
];

export const EVENT_TIMELINE = [
  { when: "6 weeks before", title: "Brief and concept", body: "We agree goals, guest count, budget and the one moment people should remember." },
  { when: "4 weeks before", title: "Venue and vendors", body: "Venue locked, stage design approved, vendors contracted and a single timeline shared with you." },
  { when: "2 weeks before", title: "Guests and VIPs", body: "Invites, registrations and RSVPs tracked in our system; VIP arrivals and security planned." },
  { when: "Event day", title: "Run the show", body: "Our floor team runs the run of show from load-in to last guest out, with live photo and reel coverage." },
  { when: "After", title: "Coverage and report", body: "Highlight film within 48 hours, full photo album, guest data and a wrap-up report." },
];

export const EVENT_GALLERY: ImageKey[] = ["event-commercial-2", "work-1", "event-corporate", "work-7", "vip-management-2", "event-commercial-3"];

/* ---------- /about ---------- */

export const MILESTONES = [
  { year: "2018", title: "Started with one camera", body: "K3 Media begins as a two-person photo and video studio shooting for local brands." },
  { year: "2019", title: "First 100 events", body: "Corporate clients start trusting us with their annual days and dealer meets." },
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
  { name: "Production", people: "Photographers, cinematographers, editors", image: "photo-shoot-2" as ImageKey },
  { name: "Content & ads", people: "Strategists, designers, copywriters, media buyers", image: "social-media-2" as ImageKey },
  { name: "Events & talent", people: "Event managers, floor crew, VIP and artist relations", image: "event-corporate-2" as ImageKey },
  { name: "The Lab", people: "Developers, CRM consultants, support engineers", image: "software-team-2" as ImageKey },
];
