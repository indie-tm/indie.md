export type AdviceCategory = "seo" | "distribution" | "product" | "business" | "mindset";

export interface Person {
  id: string;
  name: string;
  avatar: string; // emoji for now
  tagline: string;
  bio: string;
}

export interface Journey {
  id: string;
  personId: string;
  title: string;
  subtitle: string;
  story: string; // markdown-ish
  lessons: string[];
  adviceIds: string[];
  date: string;
}

export interface Advice {
  id: string;
  category: AdviceCategory;
  title: string;
  content: string;
  journeyId: string; // where this advice was extracted from
  personId: string;
}

export const categoryLabels: Record<AdviceCategory, string> = {
  seo: "SEO",
  distribution: "Distribution",
  product: "Product",
  business: "Business & Legal",
  mindset: "Mindset",
};

export const categoryIcons: Record<AdviceCategory, string> = {
  seo: "🔍",
  distribution: "📡",
  product: "🎯",
  business: "📋",
  mindset: "🧠",
};

export const people: Person[] = [
  {
    id: "you",
    name: "Alex",
    avatar: "🧑‍💻",
    tagline: "Building in public, one side project at a time",
    bio: "Full-stack dev turned indie hacker. Shipped 3 products in 2 years, one of them actually makes money. Obsessed with SEO and organic growth.",
  },
  {
    id: "mircea",
    name: "Mircea",
    avatar: "🧔",
    tagline: "From agency burnout to $4k MRR",
    bio: "Ex-agency developer who got tired of building other people's dreams. Now runs a B2B SaaS tool for small accounting firms. Big believer in boring businesses.",
  },
  {
    id: "raul",
    name: "Raul",
    avatar: "👨‍🎨",
    tagline: "Designer who learned to ship",
    bio: "Product designer who taught himself to code. Launched a design resources marketplace that grew to $2k/mo through Twitter and SEO alone. No paid ads, ever.",
  },
];

export const journeys: Journey[] = [
  {
    id: "alex-seo-journey",
    personId: "you",
    title: "How I got 10k organic visitors with zero budget",
    subtitle: "6 months of SEO experiments on a side project — what actually moved the needle",
    date: "March 2026",
    story: `I launched a simple tool for freelancers to track their invoices. No audience, no followers, no money for ads. Just me and a keyboard.

**Month 1-2: The "just write content" phase**
I wrote 15 blog posts in 6 weeks. Generic stuff like "best invoicing tips" and "freelancer productivity hacks." Traffic? About 20 visits/day, mostly bots.

**Month 3: The turning point**
I stopped writing what I thought people wanted and started looking at what they actually searched for. Found a goldmine: "invoice template [country name]" had thousands of monthly searches with almost no competition.

**Month 4-5: Template pages explosion**
I created invoice template pages for 30 countries. Each page had a free downloadable template, local tax info, and currency formatting. This was tedious but brain-dead simple.

**Month 6: Results**
10,200 organic visitors/month. 340 signups. 12 paying customers. Not life-changing money but proof that SEO compounds.

**The uncomfortable truth**: Most of my traffic came from 3 pages out of 45. The Pareto principle is brutally real in SEO.`,
    lessons: [
      "Stop guessing what to write — use search data",
      "Programmatic SEO (template pages) is underrated for indie hackers",
      "3 great pages > 45 mediocre ones",
      "SEO takes 3-6 months to show results — most people quit at month 2",
    ],
    adviceIds: ["seo-keyword-research", "seo-programmatic", "seo-patience", "mindset-pareto"],
  },
  {
    id: "mircea-boring-saas",
    personId: "mircea",
    title: "I built a boring SaaS and it changed my life",
    subtitle: "Why I stopped chasing cool ideas and started solving unsexy problems",
    date: "February 2026",
    story: `After 5 years in agencies, I was burnt out. I'd built beautiful apps for clients but had nothing of my own. So I did what every developer does — I started building a todo app with AI.

**The failed cool idea**
3 months and $400 in OpenAI credits later, I had a beautiful AI-powered task manager that nobody wanted. I showed it to 50 people. They said "cool!" and never came back.

**The boring pivot**
My girlfriend is an accountant. She complained daily about manually copying numbers between her clients' invoices and the tax software. I built a simple CSV converter in a weekend.

She loved it. Her colleagues loved it. Their clients loved it.

**What "boring" looks like**
- No AI, no blockchain, no fancy animations
- Reads CSV files, reformats them, exports to the right format
- Charges €19/month per accounting firm
- 210 paying customers after 14 months

**The $4k MRR milestone**
I hit it in month 11. Not through Product Hunt or Twitter threads. Through cold emails to accounting firms and a single Google ad campaign targeting "import invoices to [tax software name]."

The boring stuff is where the money is. Nobody tweets about CSV converters, but accountants will pay for them every single month without complaining.`,
    lessons: [
      "Solve a real pain point you can observe directly",
      "Boring problems = less competition = easier money",
      "Cold email still works if your targeting is specific enough",
      "B2B customers churn less and complain less than B2C",
    ],
    adviceIds: ["product-boring-business", "distribution-cold-email", "business-b2b-pricing", "mindset-boring-wins"],
  },
  {
    id: "raul-twitter-seo",
    personId: "raul",
    title: "From 0 to $2k/mo selling design resources",
    subtitle: "How Twitter + SEO became my entire growth strategy",
    date: "January 2026",
    story: `I'm a designer who got tired of making $0 from my Dribbble shots. I decided to package my design work into templates and sell them.

**The chicken-and-egg problem**
No audience → no sales → no motivation → no product. Classic indie hacker death spiral. I needed to break the loop somewhere.

**Building in public on Twitter**
I started posting my design process daily. Not polished case studies — raw screenshots, messy iterations, honest numbers. "Day 14: made $0 again. Here's what I'm trying next." People resonated with the honesty.

In 3 months, I went from 200 to 2,800 followers. Not massive, but enough to get 40 sales on my first template pack.

**Adding SEO to the mix**
Twitter gives you spikes. SEO gives you a baseline. I started writing blog posts targeting "free [tool name] templates" — Figma templates, Notion templates, etc.

The blog posts brought 3,000 visitors/month. Combined with Twitter spikes during launches, I hit consistent $2k/mo by month 8.

**The distribution stack that worked**
1. Twitter for brand awareness and launch spikes
2. SEO blog posts for steady organic traffic
3. A free Figma resource as lead magnet
4. Email list for launch announcements (800 subscribers)

No paid ads. No Product Hunt. No partnerships. Just consistent content on two channels.`,
    lessons: [
      "Building in public creates trust faster than any marketing",
      "Combine a spike channel (Twitter) with a compounding channel (SEO)",
      "Free resources are the best lead magnets",
      "Consistency beats tactics — show up every day",
    ],
    adviceIds: ["distribution-build-in-public", "distribution-two-channels", "seo-template-pages", "mindset-consistency"],
  },
];

export const advice: Advice[] = [
  // SEO
  {
    id: "seo-keyword-research",
    category: "seo",
    title: "Use search data, not assumptions",
    content: "Stop guessing what to write about. Use Google Search Console (free), Ubersuggest free tier, or even Google's 'People also ask' to find what people actually search for. One hour of keyword research saves you 10 hours of writing content nobody will find.",
    journeyId: "alex-seo-journey",
    personId: "you",
  },
  {
    id: "seo-programmatic",
    category: "seo",
    title: "Try programmatic SEO",
    content: "Create template pages that follow the same structure but target different keywords. Think 'invoice template for [country]' or '[tool] alternative.' It's tedious to set up but scales incredibly well. Alex got most of his 10k visitors from template pages.",
    journeyId: "alex-seo-journey",
    personId: "you",
  },
  {
    id: "seo-patience",
    category: "seo",
    title: "SEO takes 3-6 months — don't quit early",
    content: "Most indie hackers publish 5 posts, see no traffic after 2 weeks, and declare SEO dead. It takes Google 3-6 months to fully index and rank your content. Set a calendar reminder for 90 days and don't check your rankings until then.",
    journeyId: "alex-seo-journey",
    personId: "you",
  },
  {
    id: "seo-template-pages",
    category: "seo",
    title: "Free resource pages rank well",
    content: "Pages offering something free (templates, tools, calculators) tend to rank better because they get more backlinks and longer time-on-page. Raul's free Figma template pages drove the majority of his organic traffic.",
    journeyId: "raul-twitter-seo",
    personId: "raul",
  },
  // Distribution
  {
    id: "distribution-build-in-public",
    category: "distribution",
    title: "Build in public — honesty wins",
    content: "Share your real numbers, real struggles, real screenshots. People are tired of polished success stories. Raul grew from 200 to 2,800 Twitter followers in 3 months just by posting raw, honest updates about his journey.",
    journeyId: "raul-twitter-seo",
    personId: "raul",
  },
  {
    id: "distribution-two-channels",
    category: "distribution",
    title: "Combine a spike channel with a compounding channel",
    content: "Twitter/social media gives you spikes around launches. SEO/content gives you steady baseline traffic. Together they create a growth flywheel. Don't try to be everywhere — master two channels first.",
    journeyId: "raul-twitter-seo",
    personId: "raul",
  },
  {
    id: "distribution-cold-email",
    category: "distribution",
    title: "Cold email works when targeting is specific",
    content: "Generic cold emails get deleted. But if you can say 'I built a tool that imports invoices into [exact software they use]' — that's not spam, that's solving a problem. Mircea got his first 50 customers through targeted cold emails to accounting firms.",
    journeyId: "mircea-boring-saas",
    personId: "mircea",
  },
  // Product
  {
    id: "product-boring-business",
    category: "product",
    title: "Boring problems = less competition",
    content: "Nobody wants to build CSV converters or invoice formatters. That's exactly why you should. Boring B2B tools have less competition, more willingness to pay, and lower churn. Mircea's 'boring' SaaS hit $4k MRR while his AI todo app made $0.",
    journeyId: "mircea-boring-saas",
    personId: "mircea",
  },
  // Business
  {
    id: "business-b2b-pricing",
    category: "business",
    title: "B2B customers pay more and complain less",
    content: "Mircea charges €19/month for a tool that saves accountants 2 hours/week. Nobody blinks at that price. Compare that to trying to charge consumers $5/month for an app — they'll demand a free tier and leave 1-star reviews. B2B is a different game.",
    journeyId: "mircea-boring-saas",
    personId: "mircea",
  },
  // Mindset
  {
    id: "mindset-pareto",
    category: "mindset",
    title: "The Pareto principle is brutally real",
    content: "Alex wrote 45 pages. 3 of them drove 80% of his traffic. Raul posted 90 tweets. 5 of them brought most of his followers. Don't spread yourself thin — find what works and double down ruthlessly.",
    journeyId: "alex-seo-journey",
    personId: "you",
  },
  {
    id: "mindset-boring-wins",
    category: "mindset",
    title: "Stop chasing 'cool' and start chasing 'useful'",
    content: "Your AI-powered everything app won't beat a simple tool that solves a specific pain point. The most successful indie hackers build unsexy products for people who gladly pay to save time. Cool ideas get Twitter likes. Useful products get MRR.",
    journeyId: "mircea-boring-saas",
    personId: "mircea",
  },
  {
    id: "mindset-consistency",
    category: "mindset",
    title: "Consistency beats tactics",
    content: "There's no secret growth hack. Raul posted every day for 3 months. Alex published SEO content for 6 months. Mircea sent cold emails for 4 months. The common thread isn't a tactic — it's showing up consistently when results aren't visible yet.",
    journeyId: "raul-twitter-seo",
    personId: "raul",
  },
];

// Helper functions
export const getPersonById = (id: string) => people.find((p) => p.id === id);
export const getJourneyById = (id: string) => journeys.find((j) => j.id === id);
export const getAdviceById = (id: string) => advice.find((a) => a.id === id);
export const getAdviceByCategory = (category: AdviceCategory) => advice.filter((a) => a.category === category);
export const getAdviceForJourney = (journeyId: string) => advice.filter((a) => a.journeyId === journeyId);
export const getJourneysForPerson = (personId: string) => journeys.filter((j) => j.personId === personId);
