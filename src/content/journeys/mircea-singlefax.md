---
title: "The $5 Fax: How a Weekend Project Became a Micro-SaaS"
subtitle: "Why I built the simplest possible fax service and let SEO do the selling"
person: "mircea"
date: 2026-02-15
lessons:
  - "Build the simplest version that solves the problem, then stop"
  - "Remove every ounce of friction between the user and the purchase"
  - "Target 'how to' search queries where the reader is ready to buy"
  - "Let customers tell you what to build next"
  - "Twenty years of agency work is the best product bootcamp you'll ever get"
---

After 20 years of running Monocube, our dev agency, I thought I'd seen every client request imaginable. Then I noticed a pattern: half our clients needed to fax documents. IRS forms, legal filings, signed contracts. They all complained about the same thing. Every fax service wanted them to create an account, pick a monthly plan, and commit to a subscription they'd use twice a year.

## The problem nobody wanted to solve

Faxing is not exciting. Nobody is building a fax startup to pitch at YC Demo Day. But millions of people still need to fax the IRS, send signed documents to their lawyers, or file paperwork with government agencies that refuse to join the 21st century.

The existing solutions all assumed you were a power user: sign up, pick a plan, enter your credit card for a recurring subscription. For someone who needs to send one fax to the IRS, that's absurd.

## The weekend MVP

I already had our agency's SaaS template (Nuxt 3, TypeScript, PostgreSQL, Stripe) ready to go. On a Friday evening, I stripped it down to the absolute minimum: upload a file, enter a fax number, pay $5, send. No signup. No account creation. No subscription.

By Sunday night, it worked. [singlefax.com](https://singlefax.com) was live.

:::advice{slug="product-simplest-version" category="product" person="mircea" title="Build the simplest version first"}
Mircea built SingleFax in a weekend by refusing to add anything beyond the core action: upload, enter a number, pay, send. No user accounts, no dashboards, no analytics. If your v1 takes longer than a week, you're building too much. Strip it down until a complete stranger can use it in under 60 seconds.
:::

## No signup, no subscription, no friction

This was the key decision that made everything else work. I'd watched agency clients abandon fax services at the signup wall. They didn't want another account, another password, another monthly charge showing up on their credit card statement.

SingleFax asks for nothing except a file and a fax number. You pay $5, the fax goes out. Want to receive faxes? Same deal: $5 per received fax, or grab a lifetime fax number for $99 (one-time, no recurring).

:::advice{slug="product-remove-friction" category="product" person="mircea" title="Remove all friction: no signup, no subscription"}
Every form field you add, every account creation step, every subscription commitment is a point where customers leave. Mircea removed all of them. No signup, no login, no monthly plan. Just pay and use. For occasional-use products, this is the difference between making money and making nothing.
:::

## Letting SEO do the selling

I had zero marketing budget and zero audience. But I knew something useful: people don't search for "online fax service." They search for "how to fax documents to the IRS" and "send fax online without subscription." These are purchase-intent queries. The person searching already has a document in hand and a deadline.

I wrote 9 blog posts targeting exactly these searches. How to fax IRS Form 2848. How to send a fax without a fax machine. Small business fax solutions. Each post ended with a simple call to action: send your fax now for $5.

The posts took a few months to rank, but when they did, the traffic was incredibly high-quality. These weren't tire-kickers. They were people holding a document, looking for the fastest way to fax it.

:::advice{slug="seo-how-to-queries" category="seo" person="mircea" title="SEO for 'how to' queries drives purchase-intent traffic"}
Most indie hackers target broad keywords like "best fax service." Instead, target the specific "how to" queries your customers actually search for. "How to fax documents to the IRS" attracts someone who needs to fax right now, not someone comparison-shopping. Mircea's 9 blog posts drive nearly all of SingleFax's organic traffic, and these visitors convert at a much higher rate than any other channel.
:::

## The $99 tier that customers asked for

I didn't plan the lifetime fax number. Customers emailed asking for it. Small businesses and solo practitioners who received faxes regularly didn't want to pay $5 per incoming fax, but they also didn't want a subscription. "Can I just buy a number and keep it forever?"

So I added it: $99, one-time payment, your fax number for life. It took an afternoon to implement. Now it accounts for a meaningful chunk of revenue, and those customers require essentially zero support.

:::advice{slug="business-premium-tier" category="business" person="mircea" title="Add a premium tier based on what customers ask for"}
Don't guess what people will pay for. Wait for them to tell you. Mircea never planned SingleFax's $99 lifetime tier. Customers asked for it by email, he built it in an afternoon, and it became a significant revenue stream. The best product roadmap is your inbox.
:::

## Agency experience is the real unfair advantage

I see indie hackers spend months learning to deploy, struggling with Stripe integration, figuring out database schemas. After 20 years at the agency, all of that is muscle memory for me. I had a SaaS template, a deployment pipeline, and a Stripe integration I'd built dozens of times.

The weekend MVP wasn't a heroic coding sprint. It was just applying skills I'd been honing for two decades on someone else's dime. Every agency project, every client deadline, every production outage at 2 AM: it all compounds into the ability to ship fast and ship reliably.

:::advice{slug="mindset-agency-superpower" category="mindset" person="mircea" title="Agency experience is a superpower for shipping fast"}
If you've spent years building software for clients, you already have the hardest skill in indie hacking: the ability to ship. You know how to scope, build, deploy, and handle payments. Stop thinking of agency experience as a disadvantage. Mircea built SingleFax in a weekend because he'd already solved every technical problem it required, just for other people's businesses.
:::

## The boring micro-SaaS that runs itself

SingleFax is not going to be a unicorn. It will never be on the front page of Hacker News. It solves one problem (sending and receiving faxes) for people who need it occasionally, and it charges a fair price with zero friction.

It runs itself. There's no customer success team, no onboarding flow, no feature roadmap meetings. Just a simple service that works, a handful of SEO posts that bring in steady traffic, and a payment system that deposits money into my account.

After 20 years of building complex systems for clients, the simplest product I've ever made is the one that actually works for me.
