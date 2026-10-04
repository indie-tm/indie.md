---
title: "The $5 Fax: How a Weekend Project Became a Micro-SaaS"
subtitle: "Why I built the simplest possible fax service, and what happened when the channels arrived"
person: "mircea"
date: 2026-02-15
lessons:
  - "Build the simplest version that solves the problem, then stop"
  - "Remove every ounce of friction between the user and the purchase"
  - "Target 'how to' search queries where the reader is ready to buy"
  - "Let customers tell you what to build next"
  - "Twenty years of agency work is the best product bootcamp you'll ever get"
  - "Sell HIPAA as a paid lane, not a badge"
  - "Charge to unlock a received fax"
  - "Count AI referrals as their own channel"
  - "A plain post is what an AI answer cites"
---

After 20+ years of running Monocube, my dev agency, I thought I'd seen every client request imaginable. Then I noticed a pattern: half our clients needed to fax documents. IRS forms, legal filings, signed contracts. They all complained about the same thing. Every fax service wanted them to create an account, pick a monthly plan, and commit to a subscription they'd use twice a year.

## The problem nobody wanted to solve

Faxing is not exciting. Nobody is building a fax startup to pitch at YC Demo Day. But millions of people still need to fax the IRS, send signed documents to their lawyers, or file paperwork with government agencies that refuse to join the 21st century.

The existing solutions all assumed you were a power user: sign up, pick a plan, enter your credit card for a recurring subscription. For someone who needs to send one fax to the IRS, that's absurd.

## The weekend MVP

I already had our agency's SaaS template (Nuxt 4, TypeScript, PostgreSQL, Stripe) ready to go. On a Friday evening, I stripped it down to the absolute minimum: upload a file, enter a fax number, pay $5, send. No signup. No account creation. No subscription.

By Sunday night, it worked. [singlefax.com](https://singlefax.com) was live.

:::advice{slug="product-simplest-version" category="product" person="mircea" title="Build the simplest version first"}
Mircea built SingleFax in a weekend by refusing to add anything beyond the core action: upload, enter a number, pay, send. No user accounts, no dashboards, no analytics. If your v1 takes longer than a week, you're building too much. Strip it down until a complete stranger can use it in under 60 seconds.
:::

## No signup, no subscription, no friction

This was the key decision that made everything else work. I'd watched agency clients abandon fax services at the signup wall. They didn't want another account, another password, another monthly charge showing up on their credit card statement.

Guest send still asks for almost nothing: an email for the receipt, a file, and a fax number. No account. The price dropped from that first $5 to $0.99 for up to 10 billable pages (about +$0.08 after that, cap 50). Want to receive faxes? $4.99 for a 30-day number (first inbound included, extras $4.99), or a lifetime number at $97 Basic / $147 Pro. Incoming faxes after starter credit are $4.99 each. If the wallet is empty, the fax is held until you top up.

:::advice{slug="product-remove-friction" category="product" person="mircea" title="Remove all friction: no signup, no subscription"}
Every form field you add, every account creation step, every subscription commitment is a point where customers leave. I removed all of them. No signup, no login, no monthly plan. Just pay and use. For occasional-use products, this is the difference between making money and making nothing.
:::

## Letting SEO do the selling

I had zero marketing budget and zero audience. But I knew something useful: people don't search for "online fax service." They search for "how to fax documents to the IRS" and "send fax online without subscription." These are purchase-intent queries. The person searching already has a document in hand and a deadline.

I wrote 9 blog posts targeting exactly these searches. How to fax IRS Form 2848. How to send a fax without a fax machine. Small business fax solutions. Each post ended with a simple call to action: send your fax now.

The posts took a few months to rank, but when they did, the traffic was incredibly high-quality. These weren't tire-kickers. They were people holding a document, looking for the fastest way to fax it.

:::advice{slug="seo-how-to-queries" category="seo" person="mircea" title="SEO for 'how to' queries drives purchase-intent traffic"}
Most indie hackers target broad keywords like "best fax service." Instead, target the specific "how to" queries your customers actually search for. "How to fax documents to the IRS" attracts someone who needs to fax right now, not someone comparison-shopping. Mircea's 9 blog posts drive nearly all of SingleFax's organic traffic, and these visitors convert at a much higher rate than any other channel.
:::

## The lifetime number that customers asked for

I didn't plan the lifetime fax number. Customers emailed asking for it. Small businesses and solo practitioners who received faxes regularly didn't want to pay per incoming fax, but they also didn't want a subscription. "Can I just buy a number and keep it forever?"

So I added it. It started at $99. It is $97 Basic or $147 Pro now: one-time payment, starter inbound credit, no yearly keep-alive. Incoming faxes after credit are still $4.99. It took an afternoon to implement. Now it accounts for a meaningful chunk of revenue, and those customers require essentially zero support.

:::advice{slug="business-premium-tier" category="business" person="mircea" title="Add a premium tier based on what customers ask for"}
Don't guess what people will pay for. Wait for them to tell you. Mircea never planned SingleFax's lifetime number. Customers asked for it by email, he built it in an afternoon (first at $99, now $97 Basic / $147 Pro), and it became a significant revenue stream. The best product roadmap is your inbox.
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

## Then the channels arrived

That was true in February. By [Indie TM #16](/events/indie-tm-16-timisoara-september-2026) the guest send was still the product (now $0.99, not $5), and the rest of the surface had grown.

[HIPAA Secure](https://singlefax.com/hipaa-fax) is a paid extra on the website, with an electronic BAA. Pay-as-you-go is $6.50 for 1 to 10 pages or $10 for 11 to 50. Clinics that want a dedicated number add it to a subscription for +$20/mo. Medical faxes cannot ride in email, and they cannot go through MCP, WhatsApp, or email-to-fax. The customer opens them in the account. That is the point of the fee: the procedure, not a badge on the homepage.

People also wanted to send a fax from the tools they already live in. [Email-to-fax](https://singlefax.com/email-to-fax) (PDF to send@fax.delivery, number in the subject) and [WhatsApp-to-fax](https://singlefax.com/whatsapp-to-fax) are those pipes. [EIN by fax](https://singlefax.com/get-ein) is $9.99, the same idea pointed at Form SS-4. [ChatGPT](https://chatgpt.com), Cursor, and Claude talk to [SingleFax MCP](https://singlefax.com/agents). Autonomous agents can pay through [Stripe](https://stripe.com)'s Machine Payments Protocol. Credits sit next to the [lifetime number](https://singlefax.com/lifetime-fax-number): you keep the number, and an inbound fax stays locked until you top up. There is no inactivity fee. You do not lose the number if you go dark.

Companies can buy a monthly number if they want a page pool: $9.99 Standard or $29.99 Business. The stranger who needs one IRS form never has to open that door.

The inbound hold is live. Send is $0.99. A received fax with no credit sits locked until the owner pays $4.99 (or spends credit) to open it.

:::advice{slug="sell-hipaa-as-a-lane" category="product" person="mircea" title="Sell HIPAA as a paid lane, not a badge"}
Mircea does not print HIPAA on the SingleFax homepage and hope it covers every fax. He sells HIPAA Secure as an extra lane on the website, with an electronic BAA and a real procedure: the fax is read in the account, not forwarded to email, and never sent through MCP, WhatsApp, or email-to-fax. Health data that lands in an inbox is a compliance story you cannot walk back. A badge is marketing. A paid lane is a door, an access rule, and a reason to charge. If your product touches a regulated class of document, split that traffic from the $0.99 casual send. The occasional IRS form and the clinic fax are not the same customer, and they should not share a delivery path.
:::

:::advice{slug="charge-to-unlock-the-inbound-fax" category="business" person="mircea" title="Charge to unlock a received fax"}
SingleFax charges $0.99 to send. On the receive side, a lifetime or 30-day number is not a free mailbox. If the wallet cannot cover $4.99, the inbound fax is stored as held: the owner gets an envelope email with no PDF, and the dashboard locks the file until they top up or pay the $4.99 release. That keeps the no-subscription promise and still monetizes receive. Occasional-use products die when receive is either free forever or hidden behind a monthly plan. A one-time unlock is the same shape as the original send: a document, a deadline, a card. Price the page that holds the file, not a seat that lasts all year.
:::

The room had a view on all of this. [The #16 recap](/events/indie-tm-16-timisoara-september-2026) is what they said when the simple product started looking like a suite.

## The visits that already chose the fax

By [Indie TM #18](/events/indie-tm-18-timisoara-october-2026) I could split the channels.

A visit from an AI answer converted at 36.3%. Organic search converted at 20.8%. Direct converted at 11.2%. The person who arrives from an answer often already has the document and the deadline. The page only has to take the $0.99.

I read share of voice in Bing Webmaster Tools. It shows which of my pages those answers cite. Short, plain posts get cited. The posts that work are the ones that explain one job, such as faxing a form, and then offer the send.

After that first payment, email offers a permanent number. The person has already shown they will pay. The number is the second sale.

:::advice{slug="count-ai-referrals-as-their-own-channel" category="distribution" person="mircea" title="Count AI referrals as their own channel"}
On SingleFax, AI referrals converted at 36.3%, organic search at 20.8%, and direct visits at 11.2%. Mircea treats that AI line as its own channel and checks Bing Webmaster Tools for the pages the answers cite. Plain posts about one job earn the citation. The permanent number is an email after the first $0.99, when the person has already paid. If a model is sending you buyers, give that source a column. A blended "organic" number will hide the channel that converts best.
:::
