/**
 * K3 Assistant: a rule-based chat brain that runs entirely in the browser (the site is a static export,
 * so there is no server to hold an AI key). It answers from the site's own content and hands anything
 * about pricing, complex or technical questions to the team via phone, email, WhatsApp or the lead form.
 */
import { CONTACT, FAQ, PROCESS, SERVICES, STAGES, WORK } from "./content";
import { SERVICE_TURNAROUND, SERVICES_FAQ } from "./page-content";
import { SERVICE_DETAILS } from "./service-details";

export type Chip = { label: string; intent: string };
export type LinkOut = { label: string; href: string };

/** One bot turn. Everything is plain data so a conversation can be saved to sessionStorage. */
export type Reply = {
  text: string[];
  /** Animated illustration (no photos): a service cover scene, the brand journey or a results dashboard. */
  art?: { kind: "service"; slug: string; caption?: string } | { kind: "journey" | "results"; caption?: string };
  /** Service slugs rendered as small tappable cards. */
  services?: string[];
  links?: LinkOut[];
  /** Show the phone / email / WhatsApp card. */
  contact?: boolean;
  /** Show the in-chat enquiry form, optionally pre-ticking services. */
  form?: { services: string[]; phone?: string; message?: string };
  /** Celebration art shown after the form is sent. */
  celebrate?: boolean;
  chips: Chip[];
};

const svc = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const STUDIO = SERVICES.filter((s) => s.pillar === "studio").map((s) => s.slug);
const LAB = SERVICES.filter((s) => s.pillar === "lab").map((s) => s.slug);

const EMOJI: Record<string, string> = {
  "video-editing": "🎬",
  "social-media": "📱",
  "photo-shoot": "📸",
  advertising: "🎯",
  "high-profile": "⭐",
  website: "🌐",
  "crm-erp": "🗂️",
  "whatsapp-crm": "💬",
  reviews: "⭐",
  automation: "🤖",
  "software-support": "🛠️",
};
export const serviceEmoji = (slug: string) => EMOJI[slug] ?? "✨";

/* ---------- Chips shared across replies ---------- */

const C = {
  grow: { label: "📈 Grow my brand", intent: "concept" },
  services: { label: "🧭 See all services", intent: "services" },
  studio: { label: "🎥 Media & content", intent: "studio" },
  lab: { label: "💻 Software & systems", intent: "lab" },
  shoot: { label: "📸 Photo & video shoot", intent: "service:photo-shoot" },
  social: { label: "📱 Social media", intent: "service:social-media" },
  ads: { label: "🎯 Run ads", intent: "service:advertising" },
  website: { label: "🌐 Website", intent: "service:website" },
  crm: { label: "🗂️ CRM & ERP", intent: "service:crm-erp" },
  whatsapp: { label: "💬 WhatsApp CRM", intent: "service:whatsapp-crm" },
  pricing: { label: "💰 Pricing", intent: "pricing" },
  timeline: { label: "⏱️ How fast can you start?", intent: "timeline" },
  process: { label: "🔄 How you work", intent: "process" },
  work: { label: "🏆 Results & clients", intent: "work" },
  location: { label: "📍 Where are you?", intent: "location" },
  human: { label: "📞 Talk to the team", intent: "contact" },
  form: { label: "📝 Share my requirement", intent: "form" },
  menu: { label: "🏠 Main menu", intent: "menu" },
} satisfies Record<string, Chip>;

const serviceChip = (slug: string): Chip => ({ label: `${serviceEmoji(slug)} ${svc(slug).title}`, intent: `service:${slug}` });

/* ---------- Intents ---------- */

export type Ctx = {
  lastService?: string;
  /** Services the visitor's own words pointed to (business type, problem or a list); pre-ticks the form. */
  picked?: string[];
  misses: number;
};

/** Service titles to pre-tick in the enquiry form, from what the visitor said or last looked at. */
const formServices = (ctx: Ctx) => (ctx.picked?.length ? ctx.picked : ctx.lastService ? [ctx.lastService] : []).map((slug) => svc(slug).title);

type Intent = { id: string; keys: string[]; reply: (ctx: Ctx, input: string) => Reply };

const WELCOME: Reply = {
  text: [
    "Hi there 👋 I'm the K3 Assistant.",
    "K3 Media is one team for the story and the system: our Studio makes your brand seen (shoots, reels, social media, ads) and our Lab makes it sell (websites, CRM, WhatsApp and automation).",
    "What would you like help with today? Pick one below or type your question ✍️",
  ],
  chips: [C.grow, C.shoot, C.social, C.ads, C.website, { label: "🤖 CRM, WhatsApp & automation", intent: "lab" }, C.pricing, C.form, C.human],
};

export const welcome = (): Reply => WELCOME;

const escalate = (lead: string, ctx: Ctx): Reply => ({
  text: [lead, "Call or WhatsApp us, or leave your details here and a specialist will get back to you within one working day 🙌"],
  contact: true,
  chips: [C.form, ctx.lastService ? serviceChip(ctx.lastService) : C.services, C.menu],
});

function serviceReply(slug: string): Reply {
  const s = svc(slug);
  const detail = SERVICE_DETAILS[slug];
  const ideal = detail?.idealFor?.[0];
  return {
    text: [
      `${serviceEmoji(slug)} **${s.title}**: ${s.line}`,
      s.points.map((p) => `• ${p}`).join("\n"),
      `⏱️ ${SERVICE_TURNAROUND[slug] ?? "Quick start"}${ideal ? ` · Great for ${ideal.charAt(0).toLowerCase()}${ideal.slice(1)}` : ""}.`,
    ],
    art: { kind: "service", slug, caption: s.title },
    links: [{ label: `Read more about ${s.title}`, href: `/services/${slug}/` }],
    chips: [
      { label: "💰 What does it cost?", intent: "pricing" },
      { label: "❓ Common questions", intent: `faq:${slug}` },
      C.form,
      s.pillar === "studio" ? C.studio : C.lab,
      C.menu,
    ],
  };
}

const INTENTS: Intent[] = [
  /* Small talk */
  {
    id: "greet",
    keys: ["hi", "hii", "hello", "hey", "hai", "vanakkam", "good morning", "good afternoon", "good evening", "namaste", "yo"],
    reply: () => ({ ...WELCOME, text: ["Hello! 😊 Great to see you.", ...WELCOME.text.slice(1)] }),
  },
  {
    id: "howareyou",
    keys: ["how are you", "how r u", "how do you do", "whats up", "sup"],
    reply: () => ({ text: ["Doing great, thanks for asking 😄 Ready to help you grow your brand.", "What are you working on right now?"], chips: [C.grow, C.services, C.pricing] }),
  },
  {
    id: "bot",
    keys: ["who are you", "are you a bot", "are you human", "real person", "your name", "ai", "robot", "chatgpt"],
    reply: () => ({
      text: ["I'm K3 Media's virtual assistant 🤖 I can explain our services, timelines and how we work.", "For quotes or anything detailed, I'll connect you with a real person from our team."],
      chips: [C.services, C.human, C.form],
    }),
  },
  {
    id: "thanks",
    keys: ["thanks", "thank you", "thank u", "thx", "tq", "nandri", "great", "awesome", "super", "nice", "cool", "ok thanks", "perfect"],
    reply: () => ({ text: ["You're most welcome! 🙏", "Anything else I can help you with?"], chips: [C.services, C.form, C.human] }),
  },
  {
    id: "bye",
    keys: ["bye", "goodbye", "see you", "later", "thats all", "nothing else", "no thanks"],
    reply: () => ({ text: ["Thanks for stopping by 👋 Whenever you're ready, we're one message away.", `📞 ${CONTACT.phone} · ✉️ ${CONTACT.email}`], chips: [C.form, C.menu] }),
  },
  { id: "menu", keys: ["menu", "start over", "restart", "main menu", "options", "help"], reply: () => ({ ...WELCOME, text: ["Sure! Here's what I can help with 👇"] }) },

  /* Concept walk-through */
  {
    id: "concept",
    keys: ["grow", "growth", "brand building", "build my brand", "digital marketing", "marketing", "branding", "what do you do", "about k3", "about you", "your company", "k3 media", "how can you help", "more customers", "more sales", "increase sales", "business growth"],
    reply: () => ({
      text: [
        "Here's how we build brands, from first impression to repeat sale 🚀",
        STAGES.map((s, i) => `${["1️⃣", "2️⃣", "3️⃣", "4️⃣"][i]} **${s.title}**: ${s.line}`).join("\n"),
        "Most clients start with one step and add the rest as they grow. Where are you today?",
      ],
      art: { kind: "journey", caption: "One team for the story and the system" },
      chips: [
        { label: "1️⃣ I need a fresh look", intent: "stage:look" },
        { label: "2️⃣ I need more reach", intent: "stage:talk" },
        { label: "3️⃣ A celebrity for my launch", intent: "stage:live" },
        { label: "4️⃣ I need more leads & sales", intent: "stage:sell" },
        C.form,
      ],
    }),
  },
  {
    id: "studio",
    keys: ["studio", "media", "content creation", "content", "creative", "production"],
    reply: () => ({
      text: ["🎥 **Studio: Media & Content**", "The crew that makes your brand seen, felt and remembered. Pick a service to learn more 👇"],
      services: STUDIO,
      chips: [...STUDIO.map(serviceChip), C.lab],
    }),
  },
  {
    id: "lab",
    keys: ["lab", "software", "tech", "technology", "systems", "it services", "development", "digital tools"],
    reply: () => ({
      text: ["💻 **Lab: Software & Systems**", "Websites, CRM, WhatsApp and automation that turn attention into leads, orders and repeat customers 👇"],
      services: LAB,
      chips: [...LAB.map(serviceChip), C.studio],
    }),
  },
  {
    id: "services",
    keys: ["services", "service list", "what services", "offerings", "what can you do", "what all", "all services", "solutions"],
    reply: () => ({
      text: [`We offer ${SERVICES.length} services across two teams ✨`, "🎥 **Studio** makes you seen · 💻 **Lab** makes you sell. Tap any card to dig in."],
      services: SERVICES.map((s) => s.slug),
      links: [{ label: "Open the services page", href: "/services/" }],
      chips: [C.studio, C.lab, C.pricing, C.form],
    }),
  },

  /* Services */
  ...(
    [
      ["video-editing", ["video editing", "video edit", "editing", "editor", "reel", "reels", "shorts", "brand film", "aftermovie", "subtitle", "motion graphics", "youtube video", "edit"]],
      ["social-media", ["social media", "instagram", "insta", "facebook", "linkedin", "posts", "posting", "content calendar", "followers", "page handling", "smm", "engagement", "social"]],
      ["photo-shoot", ["photo shoot", "photoshoot", "photo", "photos", "drone", "drone shots", "photography", "photographer", "shoot", "catalogue", "product photo", "portrait", "model", "camera"]],
      ["advertising", ["ads", "ad", "advertising", "advertisement", "advert", "promotion", "promote", "meta ads", "google ads", "facebook ads", "campaign", "outdoor", "hoarding", "billboard", "radio", "ppc", "paid"]],
      ["high-profile", ["celebrity", "celebrities", "vip", "high profile", "chief guest", "influencer booking", "film star", "actor", "protocol"]],
      ["website", ["website", "web site", "webpage", "web", "landing page", "ecommerce", "e commerce", "online store", "online shop", "seo", "domain", "wordpress", "shopify"]],
      ["crm-erp", ["crm", "erp", "billing", "inventory", "stock", "gst invoice", "invoicing", "sales pipeline", "lead management", "dashboard", "custom software"]],
      ["whatsapp-crm", ["whatsapp", "whats app", "broadcast", "chatbot", "business api", "shared inbox", "wa"]],
      ["reviews", ["review", "reviews", "rating", "ratings", "amazon", "flipkart", "google reviews", "reputation"]],
      ["automation", ["automation", "automate", "automated", "workflow", "zapier", "reminders", "auto reply", "bot"]],
      ["software-support", ["support", "maintenance", "amc", "hosting", "backup", "bug", "fix", "server down", "update my site"]],
    ] as const
  ).map(([slug, keys]): Intent => ({ id: `service:${slug}`, keys: [...keys], reply: () => serviceReply(slug) })),

  /* Everything that needs a human */
  {
    id: "pricing",
    keys: ["price", "pricing", "cost", "costs", "charge", "charges", "fee", "fees", "rate", "rates", "budget", "quote", "quotation", "package", "packages", "how much", "evlo", "evvalavu", "vilai", "expensive", "cheap", "discount", "payment terms", "rupees", "rs", "inr", "₹"],
    reply: (ctx) => ({
      text: [
        "💰 Good question! Pricing depends on your scope, so every quote is itemised for you.",
        "• Social media, ads and video: a fixed monthly fee\n• Shoots, websites and software: a fixed project quote (50% to start, balance on delivery)\n• Everything together: a custom brand-building package",
        "For an exact number our team will need a few details. Share them below or reach us directly 👇",
      ],
      contact: true,
      chips: [C.form, ...(ctx.lastService ? [serviceChip(ctx.lastService)] : [C.services]), C.menu],
    }),
  },
  {
    id: "complex",
    keys: [
      "api", "integration", "integrate", "migrate", "migration", "database", "server", "architecture", "security", "sla", "contract", "agreement", "nda",
      "legal", "refund", "invoice copy", "complaint", "issue with", "not working", "custom requirement", "technical", "tech stack", "source code",
      "react", "python", "java", "node", "aws", "cloud", "tally", "zoho", "salesforce", "hubspot", "partnership", "franchise",
    ],
    reply: (ctx) =>
      escalate("🛠️ That's a detailed one, and it deserves a proper answer from a specialist rather than a quick reply from me.", ctx),
  },
  {
    id: "careers",
    keys: ["job", "jobs", "career", "careers", "hiring", "internship", "intern", "vacancy", "fresher", "resume", "cv", "work with you", "join your team"],
    reply: () => ({
      text: ["🙌 We love meeting talented people! Editors, designers, marketers and developers are always welcome.", `📧 Send your CV and portfolio to ${CONTACT.email} with the role in the subject line.`],
      links: [{ label: "Email your CV", href: `mailto:${CONTACT.email}?subject=${encodeURIComponent("Job application")}` }],
      chips: [C.services, C.menu],
    }),
  },
  {
    id: "contact",
    keys: ["contact", "call", "phone", "number", "mobile", "email", "mail", "talk", "speak", "human", "agent", "person", "team", "callback", "call back", "reach you", "connect", "meeting", "appointment", "book a call"],
    reply: () => ({
      text: ["📞 Happy to connect you with our team!", "Call or WhatsApp us, drop an email, or leave your details and we'll call you back within one working day."],
      contact: true,
      chips: [C.form, C.location, C.menu],
    }),
  },
  {
    id: "form",
    keys: ["share my requirement", "requirement", "enquiry", "enquire", "inquiry", "get started", "start a project", "hire", "interested", "sign up", "register", "leave details", "my details", "contact form", "callback request"],
    reply: (ctx) => ({
      text: ["📝 Wonderful! Tell us a little about yourself and what you need. It takes under a minute ⏱️"],
      form: { services: formServices(ctx) },
      chips: [],
    }),
  },

  /* FAQs */
  {
    id: "timeline",
    keys: ["how fast", "how long", "timeline", "turnaround", "duration", "when can you start", "start date", "deadline", "days", "weeks", "urgent", "asap", "quick"],
    reply: (ctx) => ({
      text: [
        "⏱️ " + FAQ.find((f) => f.q.startsWith("How fast"))!.a,
        ctx.lastService ? `For ${svc(ctx.lastService).title}: ${SERVICE_TURNAROUND[ctx.lastService]}.` : "Got a tight deadline? Tell us and we'll plan around it 💪",
      ],
      chips: [C.form, C.process, C.pricing],
    }),
  },
  {
    id: "process",
    keys: ["process", "how do you work", "how you work", "steps", "approach", "method", "procedure", "onboarding", "what happens next"],
    reply: () => ({
      text: ["🔄 Our process in four steps:", PROCESS.map((p, i) => `${["👂", "🗺️", "🛠️", "📈"][i]} **${p.title}**: ${p.body}`).join("\n\n")],
      chips: [C.form, C.timeline, C.pricing],
    }),
  },
  {
    id: "location",
    keys: ["where", "location", "address", "office", "madurai", "tamil nadu", "chennai", "bangalore", "coimbatore", "outside", "remote", "visit", "map", "city", "india"],
    reply: () => ({
      text: ["📍 We're based in Vilangudi, Madurai.", CONTACT.addressLine, "🌏 " + FAQ.find((f) => f.q.startsWith("Where"))!.a],
      links: [{ label: "Open in Google Maps", href: CONTACT.maps }],
      chips: [C.human, C.form, C.menu],
    }),
  },
  {
    id: "work",
    keys: ["results", "case study", "case studies", "portfolio", "clients", "previous work", "examples", "proof", "experience", "sample", "samples", "worked with"],
    reply: () => ({
      text: ["🏆 A few recent results:", WORK.map((w) => `• **${w.client}**: ${w.result}`).join("\n"), "📊 We report reach, leads, cost per lead and sales every month."],
      art: { kind: "results", caption: "Numbers from recent client work" },
      links: [{ label: "See our work on Instagram", href: CONTACT.instagram }],
      chips: [C.grow, C.form, C.services],
    }),
  },
  {
    id: "ownership",
    keys: ["own", "ownership", "who owns", "rights", "copyright", "handover", "hand over"],
    reply: () => ({ text: ["🔑 You do. Photos, videos, ad accounts, the website and the CRM are registered to your business and handed over in full."], chips: [C.services, C.form] }),
  },
  {
    id: "one-service",
    keys: ["only one", "one service", "start small", "small business", "startup", "both", "studio and lab", "combo", "together"],
    reply: () => ({
      text: ["👍 " + FAQ[0].a, "Most clients start with social media, a shoot or a website, then add ads or a CRM as they grow."],
      chips: [C.grow, C.services, C.form],
    }),
  },
];

const STAGE_INTENTS: Record<string, (ctx: Ctx) => Reply> = Object.fromEntries(
  STAGES.map((s) => [
    `stage:${s.key}`,
    () => ({
      text: [`**${s.title}** ✨`, s.detail, `📊 ${s.stat.value} ${s.stat.label}.`, "Here are the services for this step 👇"],
      art: { kind: "service", slug: s.services[0], caption: s.title },
      services: s.services,
      chips: [...s.services.map(serviceChip), C.form],
    }),
  ]),
);

function faqReply(slug: string): Reply {
  const qs = SERVICE_DETAILS[slug]?.faq ?? [];
  return {
    text: [`❓ Common questions about ${svc(slug).title}:`, ...qs.map((f) => `**${f.q}**\n${f.a}`), "Have a different question? Ask away, or our team can help 👇"],
    chips: [{ label: "💰 What does it cost?", intent: "pricing" }, C.form, C.human],
  };
}

/* ---------- Business types and problems: recommend a service mix ---------- */

type Need = { label: string; keys: string[]; services: string[]; tip: string; /** Catches phrasings with words in between ("misses whatsapp leads"). */ re?: RegExp };

const INDUSTRIES: Need[] = [
  { label: "🍽️ restaurant or food business", keys: ["restaurant", "cafe", "bakery", "food", "catering", "cloud kitchen", "biryani", "sweets", "juice"], services: ["social-media", "photo-shoot", "reviews", "whatsapp-crm"], tip: "Mouth-watering reels and strong Google ratings fill tables; WhatsApp makes ordering easy." },
  { label: "🏨 hotel, resort or travel business", keys: ["hotel", "resort", "homestay", "home stay", "travel", "tours", "tourism", "travels", "tour operator", "farm stay"], services: ["video-editing", "social-media", "website", "whatsapp-crm"], tip: "Guests book what they can picture: drone and walkthrough reels, a booking-ready website and quick WhatsApp replies." },
  { label: "👗 fashion, textile or jewellery brand", keys: ["clothing", "fashion", "boutique", "textile", "textiles", "saree", "sarees", "silk", "jewellery", "jewelry", "garments", "apparel"], services: ["photo-shoot", "social-media", "advertising", "website"], tip: "Collections sell on visuals: a strong shoot, daily social and targeted ads, with a store to buy from." },
  { label: "🏥 clinic or healthcare practice", keys: ["clinic", "hospital", "doctor", "dental", "dentist", "healthcare", "pharmacy", "diagnostic", "physio", "skin care"], services: ["website", "reviews", "whatsapp-crm", "social-media"], tip: "Patients search, read reviews, then book: a trustworthy site, good ratings and WhatsApp appointment replies." },
  { label: "🏠 real estate or construction business", keys: ["real estate", "builder", "builders", "property", "properties", "construction", "plots", "villa", "apartment", "flats", "interior"], services: ["advertising", "video-editing", "crm-erp", "whatsapp-crm"], tip: "Property is sold on walkthrough videos and fast follow-up: ads bring leads, the CRM makes sure none go cold." },
  { label: "🎓 school, college or coaching centre", keys: ["school", "college", "academy", "coaching", "institute", "education", "tuition", "training centre", "university", "admission", "admissions"], services: ["advertising", "social-media", "crm-erp", "whatsapp-crm"], tip: "Admission season is a lead race: ads and social to attract, CRM and WhatsApp to follow up every parent." },
  { label: "🛒 e-commerce or D2C brand", keys: ["ecommerce", "e commerce", "d2c", "online store", "online shop", "amazon seller", "flipkart seller", "shopify", "online business", "sell online"], services: ["website", "photo-shoot", "advertising", "reviews", "automation"], tip: "Great product photos, a fast store, ads that convert and reviews that build trust, with automation doing the follow-ups." },
  { label: "🏭 manufacturing, export or B2B business", keys: ["manufacturing", "manufacturer", "factory", "exporter", "exports", "export", "distributor", "wholesale", "dealer", "b2b", "indiamart", "trading"], services: ["crm-erp", "website", "whatsapp-crm", "automation"], tip: "Orders, stock, GST billing and dealer follow-ups belong in one system, not in spreadsheets and personal phones." },
  { label: "💇 salon, spa or fitness studio", keys: ["salon", "spa", "gym", "fitness", "beauty", "parlour", "parlor", "yoga", "makeup artist"], services: ["social-media", "video-editing", "whatsapp-crm", "reviews"], tip: "Before-and-after reels pull people in; WhatsApp bookings and reviews keep them coming back." },
  { label: "🏬 retail shop or showroom", keys: ["shop", "showroom", "store", "supermarket", "retail", "outlet", "mobile shop", "electronics", "furniture"], services: ["social-media", "advertising", "reviews", "crm-erp"], tip: "Local ads and social bring footfall, reviews win the comparison and a CRM tracks repeat customers." },
  { label: "🚀 new business or startup", keys: ["startup", "start up", "new business", "new brand", "just started", "starting a business"], services: ["photo-shoot", "social-media", "website", "advertising"], tip: "Start with a look people remember, a site to land on and a steady social presence, then add ads to scale." },
  { label: "🎤 personal brand", keys: ["personal brand", "influencer", "youtuber", "creator", "coach", "consultant", "founder", "politician", "artist"], services: ["video-editing", "social-media", "website"], tip: "Consistent reels and a clean personal site turn attention into trust and enquiries." },
];

const PROBLEMS: Need[] = [
  { label: "not enough leads", keys: ["no leads", "not getting leads", "less leads", "need leads", "more leads", "get leads", "lead generation", "no enquiries", "less enquiries", "more enquiries", "no customers", "more customers", "get customers"], re: / (no|not|less|few|low|zero) (\w+ ){0,3}(leads?|enquiries|enquiry|customers?) /, services: ["advertising", "website", "whatsapp-crm"], tip: "Ads put you in front of buyers, a focused landing page converts them and WhatsApp CRM replies in minutes." },
  { label: "slow sales", keys: ["low sales", "sales down", "sales dropped", "increase sales", "more sales", "boost sales", "improve sales", "sales growth"], re: / (low|less|poor|slow) (\w+ ){0,2}sales | sales (\w+ ){0,2}(down|dropped|dropping|falling|low) /, services: ["advertising", "crm-erp", "automation"], tip: "More of the right traffic, plus a pipeline and automatic follow-ups so warm leads actually close." },
  { label: "missed or slow follow-ups", keys: ["missing leads", "missed leads", "lost leads", "slow reply", "late reply", "follow up", "follow ups", "followup", "too many chats", "too many messages", "cant reply", "leads lost", "losing leads"], re: / (miss|misses|missed|missing|losing|lose|lost|forget|forgot) (\w+ ){0,3}(leads?|enquiries|customers?|chats?|messages?|calls?) /, services: ["whatsapp-crm", "crm-erp", "automation"], tip: "One shared WhatsApp inbox, every lead in the CRM and auto-replies, so nothing waits overnight." },
  { label: "low reach on social media", keys: ["no followers", "less followers", "low engagement", "no engagement", "low reach", "no reach", "no views", "low views", "not growing", "page not growing", "go viral"], re: / (no|low|less|few|poor) (\w+ ){0,2}(followers|engagement|reach|views|likes) /, services: ["social-media", "video-editing", "advertising"], tip: "Hook-first reels, a consistent calendar and a small ad push are what move reach." },
  { label: "bad or few reviews", keys: ["bad reviews", "negative reviews", "low rating", "bad rating", "fake reviews", "no reviews", "more reviews", "one star"], re: / (bad|negative|low|poor|fake|few) (\w+ ){0,2}(reviews?|ratings?) /, services: ["reviews"], tip: "We ask happy customers at the right moment, reply to every review and alert you to problems early." },
  { label: "a launch or opening coming up", keys: ["launch", "launching", "new product", "opening", "grand opening", "inauguration", "new branch", "new collection", "new outlet"], services: ["photo-shoot", "advertising", "social-media", "high-profile"], tip: "A launch needs visuals, buzz and a crowd: a shoot, a teaser calendar, ads and even a celebrity guest." },
  { label: "too much manual work", keys: ["excel", "spreadsheet", "spreadsheets", "manual work", "paper work", "paperwork", "billing errors", "stock mismatch", "track orders", "track inventory", "manage staff", "excel sheet", "inventory", "stock"], re: / (excel|spreadsheets?|manual|paper|notebook) /, services: ["crm-erp", "automation"], tip: "Billing, stock and orders in one custom system, with the repetitive steps automated." },
  { label: "a website that doesn't perform", keys: ["no website", "old website", "website slow", "slow website", "website not working", "site down", "redesign", "revamp", "outdated website", "no online presence"], services: ["website", "software-support"], tip: "A fast, mobile-first site wired to your CRM, then looked after so it stays fast and secure." },
  { label: "no time to manage marketing", keys: ["no time", "busy", "cant manage", "dont have time", "someone to handle", "outsource", "full service"], services: ["social-media", "advertising", "video-editing"], tip: "We run the calendar, content and ads every day; you approve once a month." },
];

const bestNeed = (text: string, words: string[], list: Need[]) =>
  list
    .map((n) => ({ n, s: score(text, n.keys, words) + (n.re?.test(text) ? 12 : 0) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)[0]?.n;

const serviceLines = (slugs: string[]) => slugs.map((slug) => `${serviceEmoji(slug)} **${svc(slug).title}**: ${svc(slug).line}`).join("\n");

function recommend(intro: string, tip: string, slugs: string[]): Reply {
  return {
    text: [intro, `💡 ${tip}`, serviceLines(slugs), "Want a plan and quote for this mix? Tap a service to learn more, or share your details 👇"],
    art: { kind: "service", slug: slugs[0], caption: "Recommended for you" },
    chips: [{ label: "📝 Get a plan for this", intent: "form" }, ...slugs.slice(0, 3).map(serviceChip), C.pricing, C.human],
  };
}

/* ---------- Answers from every FAQ on the site ---------- */

const STOP = new Set(
  "a an the is are am be do does did can could will would should i we you your our my me us it its of for to in on at by with and or but if so what which who whom how when where why this that these those there here have has had any some all more most much many just also than then into from about as not no yes".split(" "),
);
const tokens = (t: string) => normalize(t).trim().split(" ").filter((w) => w.length > 2 && !STOP.has(w)).map((w) => w.replace(/(ing|es|s)$/, ""));

const CORPUS = [
  ...FAQ.map((f) => ({ ...f, slug: undefined as string | undefined })),
  ...SERVICES_FAQ.map((f) => ({ ...f, slug: undefined as string | undefined })),
  ...Object.entries(SERVICE_DETAILS).flatMap(([slug, d]) => d.faq.map((f) => ({ ...f, slug }))),
].map((f) => ({ ...f, toks: new Set(tokens(f.q)) }));

/** Best FAQ for the message, with how much of the question it covers. */
function findFaq(raw: string, lastService?: string) {
  const mine = new Set(tokens(raw));
  if (!mine.size) return undefined;
  let best: { f: (typeof CORPUS)[number]; hits: number; cover: number } | undefined;
  for (const f of CORPUS) {
    let hits = 0;
    for (const t of mine) if (f.toks.has(t)) hits++;
    // Prefer the service being discussed when two answers tie.
    const cover = hits / f.toks.size + (f.slug && f.slug === lastService ? 0.15 : 0);
    if (hits && (!best || hits > best.hits || (hits === best.hits && cover > best.cover))) best = { f, hits, cover };
  }
  return best;
}

const faqAnswer = (f: (typeof CORPUS)[number]): Reply => ({
  text: [`💬 **${f.q}**`, f.a, "Anything else you'd like to know?"],
  chips: [...(f.slug ? [serviceChip(f.slug)] : [C.services]), C.form, C.human],
});

/* ---------- Budget ---------- */

const BUDGET_RE = /(?:₹|\brs\.?|\binr)\s?[\d,.]+\s?(?:k|lakh|lakhs|l|cr|crore)?\b|\b[\d,.]+\s?(?:k|lakh|lakhs|thousand|cr|crore)\b/i;
const BUDGET_WORDS = /budget|spend|afford|cost|price|rupees|per month|monthly|pay/i;

/* ---------- Matching ---------- */

function normalize(s: string) {
  return ` ${s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9₹\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()} `;
}

/** True when two words differ by at most one typo (insert, delete or swap of one letter). */
function oneTypo(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    // Swapped neighbours ("webiste") count as one typo.
    if (a.length === b.length && a[i] === b[j + 1] && a[i + 1] === b[j]) {
      i += 2;
      j += 2;
      continue;
    }
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

/** Phrase hits on word boundaries; longer phrases win so "whatsapp crm" beats "crm". */
function score(text: string, keys: string[], words: string[] = text.trim().split(" ")) {
  let total = 0;
  for (const k of keys) {
    const key = normalize(k);
    const bare = key.trim();
    if (text.includes(key)) total += bare.length + 2;
    // Light stemming: "reels" or "shooting" still hit "reel" / "shoot".
    else if (bare.length >= 4 && !bare.includes(" ") && new RegExp(` ${bare}[a-z]{1,3} `).test(text)) total += bare.length;
    // Typos: "webiste", "instagarm", "photograpy".
    else if (bare.length >= 5 && !bare.includes(" ") && words.some((w) => w.length >= 5 && oneTypo(w, bare))) total += bare.length - 1;
  }
  return total;
}

const PHONE_RE = /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/;

/** Builds the reply for a chip intent or a typed message, and the updated context. */
export function respond(input: { intent?: string; text?: string }, ctx: Ctx): { reply: Reply; ctx: Ctx } {
  if (input.intent) return route(input.intent, ctx, "");

  const raw = input.text?.trim() ?? "";
  const text = normalize(raw);
  const words = text.trim().split(" ");
  const wordCount = raw.split(/\s+/).filter(Boolean).length;

  const phone = raw.match(PHONE_RE)?.[0];
  if (phone) {
    return {
      reply: {
        text: ["📱 Looks like you shared a phone number. Shall I send it to our team so they can call you? Fill in the rest below 👇"],
        form: { services: formServices(ctx), phone, message: wordCount > 4 ? raw : undefined },
        chips: [],
      },
      ctx: { ...ctx, misses: 0 },
    };
  }

  // What the visitor told us, in their own words.
  const ranked = INTENTS.map((it) => ({ it, s: score(text, it.keys, words) }))
    .filter((r) => r.s > 0)
    .sort((x, y) => y.s - x.s);
  const services = ranked.filter((r) => r.it.id.startsWith("service:")).map((r) => r.it.id.slice(8));
  const industry = bestNeed(text, words, INDUSTRIES);
  const problem = bestNeed(text, words, PROBLEMS);
  const budgetMatch = raw.match(BUDGET_RE);
  const budget = budgetMatch && (/₹|rs|inr/i.test(budgetMatch[0]) || BUDGET_WORDS.test(raw)) ? budgetMatch[0].trim() : undefined;
  const is = (id: string) => ranked.some((r) => r.it.id === id);

  const picked = [...new Set([...services, ...(problem?.services ?? []), ...(industry?.services ?? [])])].slice(0, 5);
  const base: Ctx = { ...ctx, misses: 0, lastService: services[0] ?? ctx.lastService, picked: picked.length ? picked : ctx.picked };

  // 1. A long, detailed requirement: summarise it and hand it to the team with the form pre-filled.
  if (wordCount >= 15 && (picked.length || budget || is("complex"))) {
    const lines = [
      industry && `🏢 Business: ${industry.label}`,
      problem && `🎯 Goal: fix ${problem.label}`,
      picked.length && `🧩 Services: ${picked.map((p) => svc(p).title).join(", ")}`,
      budget && `💰 Budget: ${budget}`,
    ].filter(Boolean);
    return {
      reply: {
        text: [
          "📝 Thanks for the detail! Here's what I understood:",
          lines.length ? lines.join("\n") : "A custom requirement that needs a specialist's eye.",
          "A requirement like this deserves a tailored plan, so I've added your message to the form below. Just add your name and number and our team will call you within one working day 🙌",
        ],
        form: { services: picked.map((p) => svc(p).title), message: raw },
        contact: true,
        chips: [],
      },
      ctx: base,
    };
  }

  // 2. A question the site answers word for word ("what is the minimum ad budget?") gets that answer.
  const faq = findFaq(raw, base.lastService);
  if (faq && faq.hits >= 2 && faq.cover >= 0.85 && !budget) return { reply: faqAnswer(faq.f), ctx: base };

  // 3. Money talk always goes to people, with the budget acknowledged.
  if (budget || is("pricing")) {
    const r = route("pricing", base, raw).reply;
    if (budget) r.text.splice(1, 0, `👍 Thanks for sharing your budget (${budget}). Our team will shape a plan that fits it, with the best mix for the money.`);
    if (picked.length > 1) r.text.splice(1, 0, `🧩 For ${picked.map((p) => svc(p).title).join(" + ")}, we'd usually suggest a combined package, which works out better than separate quotes.`);
    return { reply: r, ctx: base };
  }

  // 4. Technical, legal or integration questions.
  if (is("complex")) return route("complex", base, raw);

  // 5. A problem or a business type: recommend the right mix.
  if (problem) {
    const intro = industry ? `Got it: a ${industry.label.replace(/^\S+ /, "")} dealing with ${problem.label} 💪 Here's what usually works:` : `Sounds like ${problem.label} 💪 Here's what we'd suggest:`;
    const slugs = [...new Set([...services, ...problem.services, ...(industry?.services ?? [])])].slice(0, 4);
    return { reply: recommend(intro, problem.tip, slugs), ctx: { ...base, picked: slugs } };
  }
  if (industry && services.length < 2) {
    const slugs = services[0] ? [...new Set([services[0], ...industry.services])].slice(0, 4) : industry.services;
    return { reply: recommend(`${industry.label.split(" ")[0]} Nice, we work with many brands like yours. For a ${industry.label.replace(/^\S+ /, "")}, this mix works best:`, industry.tip, slugs), ctx: { ...base, picked: slugs } };
  }

  // 6. Several services in one message: one combined answer.
  if (services.length >= 2) {
    const slugs = services.slice(0, 4);
    return {
      reply: {
        text: [
          `🧩 Great combination! ${slugs.map((sl) => svc(sl).title).join(" + ")} is exactly what one team does best.`,
          serviceLines(slugs),
          "Doing them together means your campaigns, content and systems share one plan and one report. Want a combined plan and quote?",
        ],
        services: slugs,
        chips: [{ label: "📝 Get a combined plan", intent: "form" }, C.pricing, C.timeline, C.human],
      },
      ctx: { ...base, picked: slugs },
    };
  }

  // 7. A clear match to a question we've answered on the site.
  const asking = /\?|^(how|what|when|where|why|which|who|can|do|does|is|are|will|should)\b/i.test(raw);
  if (faq && faq.hits >= 2 && faq.cover >= 0.6 && (asking || !ranked.length)) return { reply: faqAnswer(faq.f), ctx: base };

  // 8. A known topic.
  if (ranked.length) return route(ranked[0].it.id, base, raw);

  // 9. A partial FAQ match beats a shrug.
  if (faq && faq.hits >= 2) return { reply: faqAnswer(faq.f), ctx: base };

  const misses = ctx.misses + 1;
  // Long messages or repeated misses are real requirements: route them to people.
  if (wordCount >= 15 || misses >= 2) {
    return {
      reply: {
        ...escalate("🤔 I want to make sure you get the right answer, so let's get a specialist on this.", ctx),
        form: wordCount >= 8 ? { services: formServices(ctx), message: raw } : undefined,
      },
      ctx: { ...ctx, misses: 0 },
    };
  }
  return {
    reply: {
      text: ["Hmm, I didn't quite catch that 🤔", "You can tell me your type of business (e.g. \"I run a restaurant\"), your goal (\"I need more leads\") or ask about a service, pricing or timelines."],
      chips: [C.grow, C.services, C.pricing, C.human],
    },
    ctx: { ...ctx, misses },
  };
}

/** Reply for a known intent id (chips and matched topics). */
function route(id: string, ctx: Ctx, raw: string): { reply: Reply; ctx: Ctx } {
  const next: Ctx = { ...ctx, misses: 0, lastService: id.startsWith("service:") ? id.slice(8) : id.startsWith("faq:") ? id.slice(4) : ctx.lastService };
  // Opening one service narrows the enquiry to it.
  if (id.startsWith("service:")) next.picked = undefined;
  if (id === "welcome") return { reply: WELCOME, ctx: next };
  if (id.startsWith("faq:")) return { reply: faqReply(id.slice(4)), ctx: next };
  if (STAGE_INTENTS[id]) return { reply: STAGE_INTENTS[id](next), ctx: next };
  const intent = INTENTS.find((it) => it.id === id);
  // Copy so callers can add lines without touching shared reply objects.
  const reply = intent ? intent.reply(next, raw) : WELCOME;
  return { reply: { ...reply, text: [...reply.text] }, ctx: next };
}

/** Bot reply once the in-chat form has been sent. */
export const thanksReply = (name: string): Reply => ({
  text: [
    `🎉 Thank you, ${name.split(" ")[0] || "friend"}! Your details are with our team.`,
    "📞 A specialist will call or WhatsApp you within one working day. Can't wait? Reach us right now:",
  ],
  celebrate: true,
  contact: true,
  chips: [C.services, C.work, C.menu],
});
