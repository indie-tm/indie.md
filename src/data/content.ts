import { TopicCardProps } from "@/components/TopicCard";
import { ArticlePreviewProps } from "@/components/ArticlePreview";

export const topics: TopicCardProps[] = [
  {
    title: "SEO Fundamentals",
    description: "Learn how search engines work, keyword research, on-page optimization, and how to get your first organic visitors.",
    icon: "🔍",
    articleCount: 4,
    slug: "seo",
    color: "primary",
  },
  {
    title: "Getting Started",
    description: "From idea to launch. Validate your concept, build an MVP, and ship your first product as a solo founder.",
    icon: "🚀",
    articleCount: 3,
    slug: "getting-started",
    color: "accent",
  },
  {
    title: "Business & Legal",
    description: "Invoicing, Merchant of Record, taxes, company formation — the boring stuff that keeps you out of trouble.",
    icon: "📋",
    articleCount: 3,
    slug: "business",
    color: "warm",
  },
  {
    title: "Product-Market Fit",
    description: "How to know when you've found it, measuring PMF signals, and pivoting when you haven't.",
    icon: "🎯",
    articleCount: 2,
    slug: "pmf",
    color: "primary",
  },
  {
    title: "Distribution Channels",
    description: "Where to find your first 100 users. Social media, communities, Product Hunt, partnerships, and more.",
    icon: "📡",
    articleCount: 3,
    slug: "distribution",
    color: "accent",
  },
  {
    title: "Indie Stories",
    description: "Real stories from indie hackers — failures, wins, pivots, and the messy middle that nobody talks about.",
    icon: "📖",
    articleCount: 2,
    slug: "stories",
    color: "warm",
  },
];

export const articles: ArticlePreviewProps[] = [
  {
    title: "SEO for Indie Hackers: The No-BS Guide",
    excerpt: "You don't need a 200-page SEO course. Here's what actually moves the needle when you're starting from zero.",
    readTime: "8 min",
    topic: "SEO",
    slug: "seo-no-bs-guide",
  },
  {
    title: "Why You Should Use a Merchant of Record",
    excerpt: "Handling sales tax, VAT, and international payments is a nightmare. Here's why MoR services like Lemon Squeezy or Paddle exist.",
    readTime: "5 min",
    topic: "Business",
    slug: "merchant-of-record",
  },
  {
    title: "I Spent 6 Months Building the Wrong Thing",
    excerpt: "A brutally honest post-mortem on building features nobody asked for and how I course-corrected.",
    readTime: "6 min",
    topic: "Stories",
    slug: "wrong-thing-postmortem",
  },
  {
    title: "Finding Product-Market Fit as a Solo Founder",
    excerpt: "The signals I look for, the questions I ask users, and the framework that finally worked for me.",
    readTime: "7 min",
    topic: "PMF",
    slug: "solo-founder-pmf",
  },
  {
    title: "Your First 100 Users: A Distribution Playbook",
    excerpt: "Forget viral loops. Here are 10 scrappy, repeatable tactics that actually work for early-stage indie products.",
    readTime: "10 min",
    topic: "Growth",
    slug: "first-100-users",
  },
];
