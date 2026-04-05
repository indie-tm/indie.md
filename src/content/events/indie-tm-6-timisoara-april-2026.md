---
title: "Indie TM #6: From ThemeForest Rejects to 70k/Month"
subtitle: "What we learned at our sixth meetup at Cowork Timisoara"
date: 2026-04-03
location: "Cowork Timisoara - The Office, Timisoara"
link: "https://luma.com/f4sq2y3y?tk=6ThRTK"
presenters:
  - zoltan
  - vlad
  - mile-rosu
---

Ten people, a Friday evening in Timisoara, and a guest who flew in with a story worth hearing. [Zoltan](/people/zoltan) took the big screen for the main slot, walking through how [Bergside](https://bergside.com) went from a rejected ThemeForest template to 70k/month. [Vlad](/people/vlad) and [Mile](/people/mile-rosu) followed with lightning demos, and the room did what it does best: roast everything.

## Zoltan tells the Bergside story

![Bergside homepage](/screenshots/bergside.png)

[Zoltan](/people/zoltan) started from the beginning. He and his co-founder Robert came from outsourcing, building things for other people. They pivoted to templates, submitted their first one to ThemeForest, and got rejected. They kept going. Then came a Black Friday that changed everything: a Tailwind and Figma design system kit sold 3,000 euros in a single night.

That spike proved the market was real. They doubled down on Tailwind components, started building in public, and launched [Flowbite](https://flowbite.com).

![Flowbite homepage](/screenshots/flowbite.png)

[Flowbite](https://flowbite.com) is now an open-source UI component library with over 30 million npm downloads and 9,100+ GitHub stars. The library ships 600+ components, sections, and pages built with Tailwind CSS utility classes and designed in Figma. Two people, bootstrapped, no outside money. The business model: the open-source library is free, but pro components, full website sections, and framework integrations (React, Vue, Svelte) are paid. No subscriptions, just one-time purchases. That model gets them to 70k/month.

### How they decide what to build

The room asked the obvious question: with 600+ components, how do you decide what to build next? [Zoltan](/people/zoltan)'s answer was surprisingly simple. They use [Semrush](https://semrush.com) to check what people are actually searching for. When they saw demand for "avatar tailwind" or "datepicker tailwind," they built those components. Feature decisions driven by search volume, not guesswork.

:::advice{slug="keyword-demand-before-features" category="product" title="Use search demand to decide what features to build" person="zoltan"}
Before building a new feature or component, check what people are actually searching for. Use tools like Semrush to find keywords with real demand. When Flowbite saw search volume for "avatar tailwind" and "datepicker tailwind," they built those components and captured the traffic. Let search data guide your roadmap instead of guessing what users want.
:::

### Influencers over ads

[Zoltan](/people/zoltan) was blunt about paid advertising: skip it. If your product has any traction at all, spend on influencers instead. Put them on the hero section of your site. Pay 1,000 to 2,000 euros per influencer, and prefer American or Australian accents for credibility in the English-speaking developer market. Once one influencer posts about your product, others follow.

:::advice{slug="influencer-over-ads" category="distribution" title="Spend on influencers instead of ads" person="zoltan"}
If your product has any traction, skip paid ads and invest in influencer marketing instead. Pay 1,000 to 2,000 euros per influencer, feature them on your homepage hero section, and prefer American or Australian creators for the English-speaking market. One influencer creates social proof that attracts others. The ROI on a single well-placed creator video outperforms most ad campaigns for developer tools.
:::

### Never discount your prices

This was the most heated topic of the evening. [Zoltan](/people/zoltan) was firm: never compete on price, never offer discounts. Cheap pricing scares away serious clients. If you price like an Indian outsourcing shop, you attract clients who treat you like one. And once you start discounting, people will always wait for the next sale instead of buying now.

The room pushed back. What about Black Friday? [Zoltan](/people/zoltan) acknowledged they experimented with it early on, but the long-term lesson was clear: in the digital products space, maintaining premium pricing builds a better business.

:::advice{slug="never-discount-prices" category="business" title="Never discount your prices" person="zoltan"}
Resist the urge to compete on price or offer discounts. Low prices scare away serious clients who associate cost with quality. Once you start discounting, customers learn to wait for sales instead of buying at full price. In the digital products space, maintaining premium pricing attracts better customers and builds a more sustainable business. Flowbite never discounts, and it has not hurt growth.
:::

### Distribution that actually works

[Zoltan](/people/zoltan) spent the longest on distribution, walking through every channel that has moved the needle for [Flowbite](https://flowbite.com).

Product Hunt worked for initial visibility. Reddit worked, but only with story-driven posts. The key insight: on Reddit, never sell anything. Share the story of building the thing. On X/Twitter, talking about MRR numbers works. On Reddit, it gets you downvoted.

:::advice{slug="story-driven-reddit" category="distribution" title="Post stories on Reddit, not sales pitches" person="zoltan"}
Reddit rewards authenticity and punishes promotion. When Flowbite launched a new datepicker component, they posted the story of building it, not a sales pitch. Share the journey, the technical decisions, the problems you solved. On X/Twitter, sharing MRR numbers gets engagement. On Reddit, the same post gets buried. Each platform has its own language. Learn to speak it.
:::

For SEO content, [Zoltan](/people/zoltan) uses a canonical link strategy: write an article on [Medium](https://medium.com) or [dev.to](https://dev.to), then set the canonical URL pointing back to your own site. You get the platform's audience and distribution while keeping the SEO juice on your domain.

:::advice{slug="canonical-links-medium-devto" category="seo" title="Write on Medium and dev.to with canonical links to your site" person="zoltan"}
Publish articles on Medium and dev.to to reach their built-in audiences, but always set the canonical URL to point back to your own blog. This way you get distribution from the platform while search engines credit your domain as the original source. The content should genuinely help the reader, not be a thinly disguised ad. Spammy content gets flagged on both platforms.
:::

Beyond content, [Zoltan](/people/zoltan) emphasized that people are surprisingly open to partnerships. Reach out to other builders for backlink exchanges, guest articles, and cross-promotion. Discord communities, [src.club](https://src.club), and niche directories are all viable channels. The common thread: every piece of content should answer one question: how does this help the person reading it?

### TypeUI: the new bet

![TypeUI homepage](/screenshots/typeui.png)

Then [Zoltan](/people/zoltan) switched to [TypeUI](https://typeui.sh), the project he is most excited about right now. TypeUI is a CLI coding tool that applies a consistent, beautiful design layer on top of AI-generated code. You run it via npx, it generates components, handles formatting, licensing, and accessibility rules. Think of it as a design system that works natively with AI coding workflows (Cursor, Claude, Copilot) instead of fighting against them.

The product is early, building in public, pre-revenue. Open source under MIT license, with monetization being explored through one-time payments, subscriptions, and sponsorships.

The room discussed the tension between deterministic and AI-generated components. TypeUI is betting that as more code gets generated by AI, the need for a consistent design layer on top becomes critical. The question is whether developers will pay for that layer or expect it to be free.

### Analytics before you scale

The conversation shifted to measurement. [Zoltan](/people/zoltan) stressed that you should never scale traffic without analytics in place first. You need to see what users actually do on your site before you pour effort into bringing more of them.

:::advice{slug="analytics-before-scaling" category="product" title="Set up analytics before you start scaling traffic" person="zoltan"}
Do not invest in scaling traffic until you have analytics running. Use Microsoft Clarity (free) or Hotjar for heatmaps, rage click detection, and session replays. Watch your bounce rate and average time on site (one minute is a reasonable benchmark to start). If users leave immediately, more traffic just means more people leaving. Fix the experience first, then scale.
:::

One more thing [Zoltan](/people/zoltan) was clear about: cold outreach does not work. He tried it. The problem is that cold messages need a hook that genuinely helps the recipient, and most people cannot write one. If your outreach does not answer "what is in it for them" in the first sentence, it goes straight to the trash.

## Vlad demos Openable.dev

![Openable.dev homepage](/screenshots/openable.png)

[Vlad](/people/vlad) was up next with a lightning showcase of [Openable.dev](https://openable.dev), an open-source tool for deploying AI-generated apps without hassle. The idea: connect a GitHub repo, and Openable exports it to GitHub Pages or similar hosting. No terminal commands, no server configuration. Built for non-technical users who just need a shareable link to their project.

The demo was live, which meant the rough edges were on full display. The room spotted rendering issues, some bundling problems, and the branding was not finalized. Classic work-in-progress energy.

The feedback was constructive. Someone suggested Cloudflare Tunnel as a distribution channel. Others pushed on the target audience: if it is for non-technical founders, the onboarding needs to be radically simpler. Cursor integration came up as an interesting angle, with auto-commit and auto-push as a potential workflow that would make deployment invisible.

## Mile pitches the church management app

[Mile](/people/mile-rosu) closed the evening with a concept that caught the room off guard: a management app for churches. Congregation management, business operations, the full administrative stack that churches need but rarely have good software for.

The niche is real. Churches are transaction-heavy organizations with schedules, memberships, donations, and communications to manage. But the room immediately zeroed in on the hard part: distribution. Churches do not move fast. Buying cycles are long. Decision-makers are not hanging out on Product Hunt.

The tech stack is Laravel and Alpine.js, and the product is early enough that it is still a concept rather than a launched tool. The group pushed [Mile](/people/mile-rosu) on focus: instead of building a full management suite, find one specific pain point that churches have and solve that first. Billing? Scheduling? Member communication? Pick one and nail it.

The distribution advice was practical: find a friendly church contact and co-design the product with them. Use WhatsApp groups and local community channels for early feedback. Target church IT contacts or volunteers who already handle the tech side. The biggest risk is building something too generic for a niche that needs something very specific.

## The conversation keeps going

The evening ran past the scheduled 8:30 end time. [Zoltan](/people/zoltan)'s story sparked a longer discussion about pricing strategies for digital products, with [Cristian](/people/cristian-antohe) sharing how Cozmoslabs handles annual licensing for WordPress plugins. The contrast was instructive: Flowbite makes 70k/month without recurring revenue, while the WordPress ecosystem lives on yearly renewals. Different markets, different models, both working.

Someone suggested the next meetup should go deeper on pricing. Someone else wanted to talk about building for enterprise versus indie markets. The usual problem: too many good topics, too few Friday evenings.
