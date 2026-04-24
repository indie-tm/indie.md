---
title: "Indie TM #7: News as a Traffic Locomotive"
subtitle: "What we learned at our seventh meetup at Cowork Timisoara"
date: 2026-04-22
location: "Cowork Timisoara - The Office, Timisoara"
image: "/images/events/indie-tm-7.jpeg"
presenters:
  - raul
  - flavius
  - fineas-silaghi
  - vlad
---

A smaller Wednesday evening than usual, but a denser one. Four presenters: one SEO story with a surprise news-cycle twist, one early-stage AI hiring product looking for its wedge, one security founder pulling the room into a pricing debate, and one small-but-opinionated developer tool that the room quickly started projecting new use cases onto. [Raul](/people/raul) opened with a traffic spike he could not explain at first. [Flavius](/people/flavius) followed with a pitch that turned into a conversation about what "structured" even means in a hiring interview. [Fineas](/people/fineas-silaghi) brought the kind of question that only people shipping to enterprise customers ever get to ask out loud. [Vlad](/people/vlad) closed with a personal side project that doubled as an argument for building your own tools.

![Attendees around the conference table at Cowork Timisoara listening to a presentation during Indie TM #7](/images/events/indie-tm-7-room.jpeg)

## Raul unpacks epolita.ro

![epolita.ro homepage](/screenshots/epolita.png)

[Raul](/people/raul) pulled up [epolita.ro](https://epolita.ro), a Romanian domain in the home insurance space. He bought it, along with a few other `.ro` domains, about four years ago and sat on them. Nothing happened for a long time. Then over the last few months the Domain Rating climbed, organic traffic followed, and he started seeing conversions.

The first thing he did once traffic arrived was internal linking: rewiring related pages so they point at each other with descriptive anchors. That alone moved the needle. But there was something else going on.

### The mystery spike

A recent week had an unusually large bump. [Raul](/people/raul) checked [Datafast](https://datafast.com) to confirm the traffic came from Google, not from a single referrer or a social post. Then [Mile](/people/mile-rosu) chimed in from across the room: a new law was about to take effect requiring some institution to inspect mandatory home insurance policies (PAD). The news had been making the rounds in Romanian outlets that same week.

The pieces fit. [Raul](/people/raul) opened [Google Trends](https://trends.google.com) and confirmed the spike: search volume for the relevant PAD terms had jumped in lockstep with the news cycle. His pages happened to be the ones answering the question the news stories were raising. Free traffic, delivered by the news.

:::advice{slug="news-driven-seo-spikes" category="seo" title="Ride news cycles for organic traffic spikes" person="raul"}
When a news story drives sudden search demand for a topic, pages that genuinely answer the underlying question capture a disproportionate share of the traffic. If you see an unexplained spike in analytics, open Google Trends and look for a matching jump in search volume on related terms, then confirm with recent news. Once you know a news cycle is driving the traffic, publish more supporting content while the cycle is still hot. News stories are locomotives: the trick is having something already on the tracks when one arrives.
:::

### The real SEO metric nobody measures

The conversation turned to rankings. [Raul](/people/raul) was skeptical of the usual SEO dashboards. The metric he actually cares about is simple: does the user click your result and find what they came for, or do they bounce back to Google and click the next one? The second behavior ("pogo-sticking") is, in his read, the strongest negative signal in modern search. The first is what you are actually optimizing for.

:::advice{slug="dont-let-users-return-to-search" category="seo" title="Optimize for users not returning to search" person="raul"}
The most important SEO signal in modern search is whether a user returns to the results page after clicking your link. If they do, Google reads it as "this page did not answer the query" and your ranking erodes. If they do not, it reads as "problem solved" and your ranking compounds. This reframes SEO from "rank for keywords" to "fully resolve the intent behind each query." Audit your top pages: does the reader actually get what they came for above the fold, or do they have to scroll through filler and ads? Fix the ones that force users back to search.
:::

### References and side notes

[Raul](/people/raul) mentioned he increasingly uses [ChatGPT](https://chatgpt.com) and [Perplexity](https://perplexity.ai) as research tools when writing content, both to map out the shape of a query and to find the references he should cite. The room also agreed that for apps, a backlink from a relevant marketplace listing is worth more than most content-based backlink tactics, since it comes from a domain whose whole purpose is to send qualified traffic to tools like yours.

## Flavius pitches Pace

![Pace hiring tool homepage](/screenshots/pace.gif)

[Flavius](/people/flavius) was up next with a background that stitched several disciplines together: computer science and psychology, then neuroscience and organizational behavior, then 5+ years hiring for teams across Europe. The through-line was a steadily growing frustration with how interviews actually get run. Earlier in 2026 he turned it into [Human Nature](https://humannature.earth), a company building ethical AI infrastructure for organizations. Its first product is [Pace](https://hirewithpace.com), an AI-native hiring platform that encodes a specific interviewing framework into the workflow instead of leaving every hiring manager to reinvent it.

His thesis sat on one uncomfortable observation. Structured interviews (same questions, same rubric, same scoring across every candidate) are the single most validated predictor of on-the-job performance in the hiring research literature. Almost nobody actually runs them. Not the agencies, not the startups, not the big tech companies when you scratch the surface. [Flavius](/people/flavius) admitted that even when he knew what a structured interview should look like, he struggled to run one consistently under time pressure.

:::advice{slug="product-build-for-known-gap" category="product" title="Build for a practice everyone agrees is right but nobody does" person="flavius"}
The richest product territory is the gap between "known best practice" and "what people actually do." Structured interviews are universally accepted as the strongest predictor of job performance, and almost nobody runs them. Double-entry bookkeeping, security key logins, automated tests, pre-commit hooks: same pattern. Look for a practice that experts in your industry agree is correct and operators skip because it is inconvenient, then build the tool that makes the right thing the easy thing. The onboarding pitch writes itself.
:::

### The framework Pace encodes

[Flavius](/people/flavius) walked through the framework [Pace](https://hirewithpace.com) is built around. It is a two-part model borrowed from organizational psychology: every hire is scored on interview performance and on job fit, as separate axes. A candidate who aces the technical questions but bombs the fit signal is a different decision from a candidate who does the opposite, and collapsing them into one score is where most hiring processes quietly fail.

Inside each axis, the emphasis is on problem-solving over domain-specific knowledge. [Flavius](/people/flavius) was explicit: a good candidate rarely knows the exact stack on day one, and the candidates who memorize trivia tend to underperform in real work. He also showed the two questions he reaches for every time, which he argues pull more signal per minute than any generic prompt:

- "What does a typical day look like in this role?" (to the hiring manager, before the interview is even scheduled; it forces the role definition to become concrete)
- "What separates a great hire from an average one?" (to the hiring manager; the answer usually rewrites the scorecard)

:::advice{slug="interview-specific-questions" category="mindset" title="Ask specific questions that reveal the real role" person="flavius"}
Generic interview questions ("tell me about yourself," "what are your weaknesses") produce rehearsed answers and almost no signal. Two questions that consistently produce the opposite are "What does a typical day look like in this role?" and "What separates a great hire from an average one?" The first forces the hiring manager to describe the real job instead of the job description. The second forces them to articulate the dimension on which people actually succeed or fail. Use the answers to design the rest of the interview. If a hiring manager cannot answer either clearly, the role is not ready to be filled.
:::

The interview itself runs as a panel with three components: a technical track, a sales or individual contributor track matched to the role family, and a behavioral pass. The scorecard pulls signal from all three and the job-fit layer on top, not from one hero interviewer's gut.

### The AI workflow

The AI-native part is less about a chatbot and more about removing the operational tax on the recruiter. [Pace](https://hirewithpace.com) runs alongside Google Meet via a Chrome extension with picture-in-picture, so the recruiter sees questions and scoring rails without leaving the call. Transcription happens in real time (similar to how [Granola](https://granola.ai) handles meeting notes), so by the end of the interview the scorecard is mostly pre-filled and the recruiter just edits and signs off.

The pitch to buyers is concrete on cost. Traditional recruiting is heavy on manual overhead: scheduling, note-taking, write-ups, scorecard alignment, resume parsing, pipeline updates. [Flavius](/people/flavius) ballparks the savings at 40 minutes per interview once transcription, auto-scorecards, and screening automation are in the loop. The room then helped him reframe the pitch: the right benchmark is not "how much does Pace cost per month" but "how much does one bad hire cost this year." At that comparison, the tool pays for itself the first time it prevents a false positive.

:::advice{slug="benchmark-against-cost-of-mistake" category="business" title="Price against the cost of the mistake, not your competitors" person="flavius"}
For tools that sit on top of high-stakes decisions (hiring, compliance, security, legal), the wrong benchmark is competitor pricing. The right benchmark is the cost of one bad outcome. Pace is built for hiring, where a single bad hire typically costs one to two times the annual salary once you factor in ramp, opportunity cost, severance, and team drag. A tool that prevents one bad hire a year is paying for itself many times over at almost any price. Teach your prospects to do that math in the first five minutes of the demo, and pricing objections mostly go away.
:::

### Where it could go next

Toward the end of the pitch, [Flavius](/people/flavius) sketched an adjacent bet: an automated code assessment layer that sits downstream of the interview. GitHub and repository integration, multi-language support (C++, JavaScript, React, and friends), dependency and vulnerability scanning, and AI-filtered results to cut the usual false positive avalanche from static analysis. In the long version, the same platform can run white-box and black-box assessments for internal security reviews, with an optional bug bounty tie-in. The foundation would be TypeScript, modular enough to self-host for enterprises that cannot let candidate code leave their network.

The room noted this is a second product hiding inside the first, and advised [Flavius](/people/flavius) to not ship it until Pace itself has paying customers. Classic indie trap: the adjacent product always looks more interesting than the one you need to close this quarter.

### Where the room pushed back

The demo had been live on the screen while [Flavius](/people/flavius) walked through the framework, which meant the room had plenty of time to inventory the rough edges.

The first complaint was the interface. Setting up a job description inside [Pace](https://hirewithpace.com) currently takes too many steps. Someone pointed out that the whole flow is exactly the kind of thing an LLM should collapse into a single input: paste the job ad, let the model extract the role, the panel structure, and a first-pass question set, then let the recruiter edit. Every extra click before the interview is a click the recruiter will have to repeat dozens of times.

The second was about focus during the interview itself. A good interviewer is listening closely, reading tone and hesitation, following up where the signal lives. Anything on screen that pulls attention away from the candidate (a busy scorecard, a dense rubric, notification badges, unnecessary buttons) is a direct hit on the quality of the signal. The room pushed [Flavius](/people/flavius) to design the live-call view as a minimum viable cockpit: a question, space for a short note, and as close to nothing else as possible. Everything administrative should happen before or after, never during.

The freestyle vs. structured debate came next and got heated. Some in the room preferred the looseness of a conversational interview, arguing that a rigid script misses the best candidates. [Flavius](/people/flavius) had the research on his side, but the consensus was that the research alone is not a marketing asset. [Pace](https://hirewithpace.com)'s homepage and onboarding need to explain, in plain language, why structured interviews outperform freestyle ones before the product can convincingly sell the how. Most hiring managers have never questioned the default; the product has to do that questioning for them.

Then came the persona question. Who is [Pace](https://hirewithpace.com) actually for? Internal HR managers, agency recruiters, hiring managers doing their own hiring, or the candidate side? Each of those buys differently and pays differently. Someone suggested going narrower still: instead of a generic interview tool, pick tech interviews specifically. A tech-first product would need different features (code tasks, system design prompts, engineering panels) but could be a far better alternative than a horizontal tool trying to serve every kind of role. Being the best product for one vertical beats being an acceptable product for all of them.

Pricing drew its own round of questions. How was the current price chosen? Was it anchored to competitors, to the cost-of-bad-hire benchmark [Flavius](/people/flavius) had argued for earlier, or to gut feel? Per-seat enterprise pricing has a reputation for long closing cycles, and a simpler usage-based model (per interview, per role) was floated as a faster way to land the first paying customers, even if it leaves money on the table at the top end.

The sharpest challenge came at the end, and it was not about the product at all. Someone asked the vertical-AI question: why build a SaaS tool that sells interviewing software to recruiters, instead of building a recruiting company whose whole operation is powered by custom AI tools you own? In the vertical version, [Flavius](/people/flavius) is not competing with Greenhouse; he is competing with recruiting agencies that charge 15 to 25 percent of first-year salary per placement, running circles around them on speed and consistency because his internal stack is purpose-built. The SaaS route monetizes the framework. The vertical route monetizes the outcome, which is where most of the margin lives. The room did not resolve it, but it reframed the decision [Flavius](/people/flavius) is actually making.

## Fineas brings the on-prem pricing question

![AISafe homepage](/screenshots/aisafe.gif)

[Fineas Silaghi](/people/fineas-silaghi), CEO of [AISafe Labs](https://aisafe.io), took the floor briefly with a question more than a pitch: how do you price on-prem deployments? [AISafe](https://aisafe.io) sells into environments where running as a SaaS is not an option. Corporations want the tool inside their own network, their own compliance boundary, their own audit trail. The product works. What the pricing page has not fully answered is what those deployments should cost.

The room converged on two answers.

The first was to price against the existing budget, not against competitors or gut feel. Corporations of a certain size already have a budget line for tools in your category: security, compliance, developer tooling, whatever the shelf is called internally. That budget exists, the procurement team is used to spending it, and your job is less "convince them to pay" and more "discover the number." Someone suggested that on discovery calls, you ask what the team already spends on adjacent tools, or what last year's budget for this category was. The literal price tag matters less than landing inside the familiar range so the buyer does not have to fight finance.

The second was to factor the real cost of on-prem maintenance into the price before naming a number. Unlike SaaS, on-prem means limited access to the deployment: no live logs without a ticket, no hotfixes without the customer's change window, no telemetry unless you negotiated it into the contract. Support engineers will spend materially more time per customer on debugging, upgrades, and escalations than a pure SaaS model would ever model. The people in the room who had shipped enterprise software were blunt about this one: if you price on-prem like SaaS, the first production incident eats the margin on the account.

[Fineas](/people/fineas-silaghi) took both in: the "discover the budget, do not invent it" side, and the "price for the support reality, not the demo" side. The short version for the rest of the room: on-prem pricing is a two-axis problem, and most founders solve only one of the two.

## Vlad shows off zag

![zag composable agent development environment](/screenshots/zag.png)

[Vlad](/people/vlad) wrapped the evening with a short demo of [zag](https://github.com/vtemian/zag), a composable agent development environment written in Zig that he has been building for himself. The framing was deliberately modest: not a startup, not a product, just a personal harness for agentic coding that he uses day to day. Everything above the primitives is a plugin, which means he can swap in new models, terminals, keymaps, and trajectory validators as the ecosystem keeps moving.

The pitch to the room was less about zag specifically and more about the observation behind it. Building a harness for an agentic workflow sounds like a huge project until you actually try it. Once you strip it down to the primitives (a loop, a model call, a tool interface, a trajectory log), the core is a couple of hundred lines. Owning that core gives you leverage everyone else rents from a vendor: you can change the prompt discipline, the validation rules, the editor integration, the telemetry, without waiting for a feature flag.

:::advice{slug="build-your-own-agent-harness" category="mindset" title="Build your own agent harness, even as a side project" person="vlad"}
Most developers assume an agent harness is something you buy or install. In practice, a working harness for your own workflow is a weekend project, not a quarter-long one. The payoff is that every future agentic feature you build sits on primitives you actually control: your own prompt format, your own tool interface, your own logging and trajectory replay. Even if you never ship it as a product, the harness compounds: it is the thing that makes every downstream experiment cheap. And as [Vlad](/people/vlad) put it at the end of his demo, it is genuinely fun to build, which is a signal in itself.
:::

### Where the room pointed it

The most interesting feedback had nothing to do with the code. Several people in the room noted that every visible agent harness today (Claude Code, Codex, Cursor, Aider, zag) is optimized for one workflow: generating, editing, and shipping code. The equivalent tooling for non-code workflows (complex business operations, back-office logic, compliance routines, support pipelines) barely exists. The gap is not the model; it is the harness. Someone building the zag equivalent for operations work, where the "trajectory" is a sequence of forms, approvals, and state changes rather than a diff against a repo, would be sitting on territory nobody else is contesting yet.

[Vlad](/people/vlad) took the note: zag itself will stay a personal coding tool, but the same primitives could anchor a very different product aimed at the non-technical end of the spectrum. The room filed it under "things to watch next."

## The evening wraps up

Four talks, a lot of cross-talk, and a running debate about whether SEO in 2026 is about keywords, intent, or just not annoying the reader. The consensus, for tonight at least, was "all three, and the third matters the most." The bigger thread connecting the evening was a quieter one: every talk, whether it was Raul's traffic spike, Flavius's interview framework, Fineas's on-prem pricing puzzle, or Vlad's agent harness, came back to the same question: what do you own, and what are you renting?
