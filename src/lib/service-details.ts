
export type ServiceDetail = {
  headline: string;
  intro: string;
  included: { title: string; body: string }[];
  idealFor: string[];
  faq: { q: string; a: string }[];
};

/** Long-form copy for each /services/[slug] page, keyed by Service.slug. */
export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "photo-shoot": {
    headline: "A shoot crew that makes your brand look the part.",
    intro:
      "Product, portrait, catalogue and campaign photography from one on-call crew. We plan the look, light the set, direct the talent and deliver retouched images ready for print, web and social.",
    included: [
      { title: "Creative direction", body: "Moodboards, shot lists and styling notes agreed before anyone picks up a camera." },
      { title: "Studio and on-location", body: "Our studio setup or your store, factory, venue or street, with full lighting kits." },
      { title: "Product and catalogue", body: "Clean e-commerce shots, flat lays and lifestyle frames for every SKU." },
      { title: "Models and styling", body: "Casting, hair, makeup and wardrobe coordinated by our team." },
      { title: "Retouching", body: "Colour-matched, skin-safe retouching with consistent grading across the set." },
      { title: "Usage-ready delivery", body: "Exports sized for print, website, marketplaces and every social format." },
    ],
    idealFor: ["Fashion and jewellery brands launching a collection", "D2C and Amazon or Flipkart sellers", "Restaurants, clinics and showrooms refreshing their look"],
    faq: [
      { q: "How many photos do we get?", a: "It depends on the brief. A typical half-day product shoot delivers 40 to 60 retouched images." },
      { q: "Can you shoot outside Madurai?", a: "Yes. We travel across Tamil Nadu and South India; travel is quoted separately." },
    ],
  },
  "video-editing": {
    headline: "Edits that stop the scroll and hold the room.",
    intro:
      "Reels, shorts, brand films, ads and event aftermovies, cut to the rhythm of each platform. Send us raw footage or let our shoot crew capture it, and we handle the edit, grade, sound and subtitles.",
    included: [
      { title: "Short-form reels", body: "Hook-first edits for Instagram Reels, YouTube Shorts and Moj, delivered in batches." },
      { title: "Brand films", body: "60 to 180 second stories for your website, launches and investor decks." },
      { title: "Ad cuts", body: "Multiple lengths and aspect ratios of one idea, ready for Meta and YouTube ads." },
      { title: "Event aftermovies", body: "Same-day or next-day highlight edits from conferences, launches and weddings." },
      { title: "Colour and sound", body: "Professional grading, music licensing guidance, cleanup and mixing." },
      { title: "Subtitles and motion", body: "Burned-in captions in English, Tamil or Hindi, plus titles and motion graphics." },
    ],
    idealFor: ["Brands posting reels every week", "Founders building a personal brand", "Event hosts who want highlights the same night"],
    faq: [
      { q: "What is the turnaround?", a: "Reels in 48 hours, brand films in 5 to 10 working days, depending on revisions." },
      { q: "How many revisions are included?", a: "Two rounds of revisions are included in every edit." },
    ],
  },
  "social-media": {
    headline: "Your feed, run every single day.",
    intro:
      "Strategy, calendars, content, posting and community management for Instagram, Facebook, YouTube and LinkedIn. You approve the plan once a month; we make sure your brand shows up daily.",
    included: [
      { title: "Monthly strategy", body: "Content pillars, campaign themes and a calendar built around your sales goals." },
      { title: "Content production", body: "Posts, carousels, reels and stories designed and written in your brand voice." },
      { title: "Posting and scheduling", body: "Published at the times your audience is actually online." },
      { title: "Community management", body: "Replies to comments and DMs, with leads passed straight to your team." },
      { title: "Influencer collaborations", body: "Creator shortlists, outreach, briefs and tracking." },
      { title: "Monthly reports", body: "Reach, engagement, follower growth and what we will change next month." },
    ],
    idealFor: ["Businesses with no time to post consistently", "Brands entering a new city or audience", "Teams that want one partner for content and ads"],
    faq: [
      { q: "Do we need to provide content?", a: "No. We plan, shoot and design it. Your input is a monthly approval call." },
      { q: "Which platforms do you handle?", a: "Instagram, Facebook, YouTube, LinkedIn and Google Business Profile." },
    ],
  },
  advertising: {
    headline: "Campaigns planned around real numbers.",
    intro:
      "Paid digital ads and traditional media under one plan. We write the creative, target the right audience, manage the budget and report every rupee in leads, calls and sales.",
    included: [
      { title: "Meta and Google ads", body: "Lead, sales and awareness campaigns with weekly optimisation." },
      { title: "Creative that converts", body: "Ad copy, static and video creatives tested in multiple variations." },
      { title: "Outdoor and print", body: "Hoardings, bus shelters, newspapers and magazines planned and booked." },
      { title: "Radio and cinema", body: "FM spots and in-cinema ads for city-wide launches." },
      { title: "Festive promotions", body: "Diwali, Pongal and season-sale campaigns planned weeks ahead." },
      { title: "Tracking and reports", body: "Pixel, call and form tracking so you see cost per lead, not just clicks." },
    ],
    idealFor: ["Launches that need reach fast", "Retail and real estate brands", "Businesses whose ads spend more than they earn"],
    faq: [
      { q: "What is the minimum ad budget?", a: "We recommend at least ₹30,000 a month in ad spend for digital campaigns to learn and scale." },
      { q: "Do you charge a percentage of spend?", a: "We charge a fixed monthly management fee, so our advice is never tied to spending more." },
    ],
  },
  "high-profile": {
    headline: "Discreet care for the people everyone is watching.",
    intro:
      "Celebrity, influencer and VIP management for launches, events and brand campaigns. From booking the right face to protocol, security and media handling on the day, nothing is left to chance.",
    included: [
      { title: "Celebrity booking", body: "Film, sports and influencer talent matched to your audience and budget." },
      { title: "Contracts and riders", body: "Fees, deliverables, travel and hospitality negotiated and documented." },
      { title: "Protocol and security", body: "Arrival plans, bouncers, crowd control and green-room management." },
      { title: "Luxury transport", body: "Chauffeured cars and airport pickups with coordinated timings." },
      { title: "Media handling", body: "Press lines, photo calls and interview slots managed on the day." },
      { title: "Leadership guests", body: "Hosting ministers, CXOs and dignitaries with the right protocol." },
    ],
    idealFor: ["Store and product launches with a celebrity face", "Award nights and conferences with VIP guests", "Brands running influencer campaigns"],
    faq: [
      { q: "Can you get a specific celebrity?", a: "We reach out through verified managers and agencies and confirm availability and fees within days." },
      { q: "Is confidentiality guaranteed?", a: "Yes. Our team signs NDAs and we never share guest details or itineraries." },
    ],
  },
  reviews: {
    headline: "More five-star reviews, fewer surprises.",
    intro:
      "Your reputation lives on Google, Amazon, Flipkart and social media. We help you collect genuine reviews, respond to every one of them and spot problems before they spread.",
    included: [
      { title: "Review requests", body: "Automatic WhatsApp and SMS requests after purchase or service." },
      { title: "Marketplace monitoring", body: "Amazon, Flipkart, Google and app store reviews in one view." },
      { title: "Response management", body: "Professional, on-brand replies to every review within 24 hours." },
      { title: "Sentiment alerts", body: "Instant alerts for negative reviews so your team can fix issues fast." },
      { title: "Creator reviews", body: "Product seeding with genuine reviewers and YouTube creators." },
      { title: "Monthly insights", body: "What customers love, what they complain about and what to fix." },
    ],
    idealFor: ["D2C and marketplace sellers", "Restaurants, hotels, clinics and service businesses", "Brands recovering from bad reviews"],
    faq: [
      { q: "Do you post fake reviews?", a: "Never. We only help you collect and respond to genuine customer reviews." },
      { q: "Which platforms do you cover?", a: "Google, Amazon, Flipkart, Meesho, Zomato, Swiggy, Play Store and App Store." },
    ],
  },
  website: {
    headline: "Websites that turn visitors into enquiries.",
    intro:
      "Fast, mobile-first business websites, landing pages and online stores, designed to look like your brand and built to bring in leads. Every site is connected to your CRM and WhatsApp from day one.",
    included: [
      { title: "Design that fits your brand", body: "Custom layouts, not recycled templates, with your photography and voice." },
      { title: "Business and corporate sites", body: "Company profiles, service pages and career pages your team can update." },
      { title: "E-commerce stores", body: "Shopify, WooCommerce or custom stores with Razorpay and UPI payments." },
      { title: "Landing pages", body: "Campaign pages built for ads, with forms that go straight to your CRM." },
      { title: "SEO foundations", body: "Speed, structure, schema and Google Business setup so you can be found." },
      { title: "Hosting and care", body: "SSL, backups, uptime monitoring and updates handled for you." },
    ],
    idealFor: ["Businesses with an outdated or slow website", "Brands starting to sell online", "Teams running ads to a page that does not convert"],
    faq: [
      { q: "How long does a website take?", a: "Two to four weeks for most business websites; online stores take four to eight weeks." },
      { q: "Can we edit the site ourselves?", a: "Yes. We set up an easy editor and train your team." },
    ],
  },
  "crm-erp": {
    headline: "Software built around how your business actually works.",
    intro:
      "Custom CRM and ERP systems for sales, inventory, billing and operations. Instead of forcing your team into a generic tool, we map your process first and build exactly what you need.",
    included: [
      { title: "Process mapping", body: "We sit with your team, document the workflow and agree on what to automate." },
      { title: "Lead and sales CRM", body: "Pipelines, follow-up reminders, quotations and sales reports." },
      { title: "Inventory and billing", body: "Stock, purchase, GST invoicing, e-way bills and payment tracking." },
      { title: "Custom modules", body: "Service tickets, field staff, production or anything specific to your business." },
      { title: "Roles and dashboards", body: "Owner, manager and staff views with the numbers each person needs." },
      { title: "Training and support", body: "Hands-on training, data migration and ongoing support after go-live." },
    ],
    idealFor: ["Businesses running on Excel and WhatsApp groups", "Teams that outgrew an off-the-shelf CRM", "Distributors, manufacturers and service companies"],
    faq: [
      { q: "Why custom instead of an existing CRM?", a: "Off-the-shelf tools make you change how you work. Custom software fits your process and grows with it." },
      { q: "Do we own the software?", a: "Yes. You own your data and the system we build for you." },
    ],
  },
  "whatsapp-crm": {
    headline: "Every WhatsApp lead in one shared inbox.",
    intro:
      "A web-based WhatsApp CRM on the official WhatsApp Business API. Your whole team replies from one number, every chat is tagged and assigned, and nothing gets lost in someone's personal phone.",
    included: [
      { title: "Official Business API", body: "Verified business number with green-tick eligibility support." },
      { title: "Shared team inbox", body: "Multiple agents on one number, with chat assignment and notes." },
      { title: "Lead tagging and pipeline", body: "Tag, sort and move chats through your sales stages." },
      { title: "Broadcasts and campaigns", body: "Approved template messages sent to thousands of opted-in customers." },
      { title: "Chatbots and auto-replies", body: "Instant answers to common questions, day and night." },
      { title: "CRM and ads integration", body: "Click-to-WhatsApp ads, website chat and CRM sync built in." },
    ],
    idealFor: ["Businesses that sell mostly over WhatsApp", "Teams sharing one phone for customer chats", "Brands running click-to-WhatsApp ads"],
    faq: [
      { q: "Can we keep our current number?", a: "Yes. We migrate your existing business number to the official API." },
      { q: "Is there a risk of the number being banned?", a: "The official API follows WhatsApp's rules, which is far safer than unofficial bulk tools." },
    ],
  },
  automation: {
    headline: "Workflows that follow up while you sleep.",
    intro:
      "We connect your forms, ads, CRM, payments and messaging so data moves on its own. Your team stops copy-pasting and starts closing.",
    included: [
      { title: "Lead capture", body: "Leads from Meta, Google, website and IndiaMART pushed straight to your CRM." },
      { title: "Follow-up sequences", body: "Timed WhatsApp, email and SMS follow-ups until a lead replies." },
      { title: "Payment reminders", body: "Automatic invoice and due-date reminders with payment links." },
      { title: "Internal alerts", body: "Notify the right person when a big lead arrives or a task is overdue." },
      { title: "Reports on autopilot", body: "Daily and weekly sales summaries sent to owners and managers." },
      { title: "Custom integrations", body: "APIs and connectors between the tools you already use." },
    ],
    idealFor: ["Teams losing leads between tools", "Owners chasing payments manually", "Businesses scaling without hiring more admin staff"],
    faq: [
      { q: "Which tools can you connect?", a: "Most tools with an API, including Google Sheets, Zoho, Tally, Razorpay, Shopify and IndiaMART." },
      { q: "What if something breaks?", a: "Every automation is monitored and covered under our support plans." },
    ],
  },
  "software-support": {
    headline: "Support from a team that answers the phone.",
    intro:
      "Annual maintenance, hosting, security and feature updates for the websites and software we build, and for systems built by others. One call fixes it.",
    included: [
      { title: "Annual maintenance", body: "Planned updates, bug fixes and health checks every month." },
      { title: "Hosting and backups", body: "Managed cloud hosting with daily backups and quick restores." },
      { title: "Security", body: "SSL, firewalls, updates and malware monitoring." },
      { title: "Feature updates", body: "New reports, screens and changes delivered on request." },
      { title: "Taking over old systems", body: "We audit and support software built by previous vendors." },
      { title: "Priority helpline", body: "Phone and WhatsApp support with clear response times." },
    ],
    idealFor: ["Businesses whose developer has moved on", "Teams that need small changes regularly", "Companies that cannot afford downtime"],
    faq: [
      { q: "Do you support software you did not build?", a: "Yes, after a short technical audit of the code and hosting." },
      { q: "What are your response times?", a: "Critical issues within 2 hours on working days; others within one working day." },
    ],
  },
};
