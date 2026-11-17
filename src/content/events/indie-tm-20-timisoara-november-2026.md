---
title: "Indie TM #20: Five Rules on a Slide, Nine Projects in the Room"
subtitle: "What we learned at our twentieth meetup, where Raul wrote down the community rules and put eBaza inside Claude, ChatGPT, and Grok, and a show and roast ran from AI search and OCR to furniture, real estate, old phones, AR glasses, and wedding trees"
date: 2026-11-13
location: "DevPlant Cowork, Timisoara"
link: "https://luma.com/yh9i7i8h"
image: "/images/events/indie-tm-20.webp"
presenters:
  - raul
  - mircea
  - walter-fettich
  - mihai-balint
  - titus-nicolae
  - petru-popa
  - marc-stancu
  - andrei-statescu
  - bogdan-moldovean
  - leonardo-chisciuc
---

Sixteen days after [the special edition at Haufe Group](/events/one-person-product-team-timisoara-october-2026), we were back under the wooden beams at DevPlant, and back to the regular numbering. This was the twentieth Indie TM. A round number is a good moment to write down how the room works.

So [Raul](/people/raul) opened with two slides before any product: the edition number, and the rules. Then the night ran as a show and roast. Nine projects, a few minutes each, and feedback from everyone else.

## Twenty editions in, five rules

![The Community rules slide from Indie TM #20, with five numbered rules on a yellow background](/images/events/indie-tm-20-rules.webp)

They fit on one slide:

1. The first rule of Indie TM is you talk about what you're building. No project yet? You have 30 days.
2. The second rule of Indie TM is building is easy, selling is hard. Talk sales, marketing and distribution.
3. Show your workflow, not just your product.
4. Listen more than you talk. Leave the ego at the door.
5. Don't be a jerk here or to other local communities.

The first two do most of the work. Indie TM is a room for people who are building something, so a newcomer without a project is welcome, with a deadline. And since building got cheap, a demo of what you built is no longer the interesting part. How you sell it is.

The third rule follows from the last few editions, where the setups drew more questions than the products: the bots, the pipelines, the review steps. A product shows what you made. A workflow shows what someone else can copy on Monday.

:::advice{slug="give-newcomers-thirty-days-to-bring-a-project" category="mindset" person="raul" title="Give newcomers thirty days to bring a project"}
The first rule of Indie TM, written down at the twentieth edition: you talk about what you're building, and if you have no project yet, you have 30 days. A community of builders slowly fills with spectators if watching is free forever. A deadline is kinder than a closed door. It tells a newcomer exactly what is expected and gives them a reason to ship something small. If you run a group, decide what a member has to bring, say it on a slide, and give people a date.
:::

:::advice{slug="talk-about-selling-when-building-got-easy" category="distribution" person="raul" title="Talk about selling, because building got easy"}
The second rule of Indie TM is that building is easy and selling is hard, so the room talks sales, marketing, and distribution. Twenty editions of demos made the pattern plain: almost everyone can ship a product now, and almost nobody arrives with a channel that works. Feedback on a feature is pleasant and rarely changes revenue. When you present your product, spend one minute on what it does and the rest on how a stranger finds it, what they pay, and where they drop off.
:::

## eBaza moves into the chat

![The Asistentul eBaza page: ask about your cars in Claude, ChatGPT or Grok, with the connection address and a provider picker](/screenshots/ebaza-asistent-ai.webp)

Raul went first, following his own third rule. The new piece of [eBaza](https://ebaza.ro) is an [MCP](https://modelcontextprotocol.io/) server. [Asistentul eBaza](https://ebaza.ro/asistent-ai/) connects an eBaza account to Claude, ChatGPT, or Grok. You paste one address into the app's connector settings, log in to eBaza, and allow access.

After that, the questions go in the chat you already have open. When does the RCA expire on this plate? How much did I spend on cars this year? Who has access to this one? Set a service reminder for March 1.

Behind those sit four tools. One looks up a car by its plate and returns the RCA, ITP, and rovinietă dates, the garage, the reminders, and who has access. One returns costs by month and year. One adds a car, only after you confirm, and only for the owner of the account. One creates a reminder.

Two choices are worth copying. The assistant is part of Plus, the paid plan for firms, so the paying customers get the feature that feels new. And the page says what leaves eBaza: only the data needed for each answer, with contact details masked and the full chassis number never sent.

:::advice{slug="put-your-product-inside-the-chat-app" category="distribution" person="raul" title="Put your product inside the chat app"}
eBaza now has an MCP server, so a user can ask Claude, ChatGPT, or Grok when an insurance expires or what the cars cost this year, and the answer comes from their eBaza account. Nobody opens a car paperwork app for fun. They open a chat app every day. A connector puts your data one question away, in a place the user already is, and it costs far less than building your own chat interface. Start with a few read tools and one or two safe writes, and write a setup page for each chat app.
:::

:::advice{slug="send-the-model-only-what-the-answer-needs" category="product" person="raul" title="Send the model only what the answer needs"}
The Asistentul eBaza page states what is shared with the AI provider: only the data needed for each answer, with contact details masked and the full chassis number left out. Adding a car through the chat happens only after the user confirms. When your product talks to a model, the easy path is to pass the whole record. Decide field by field instead, mask what identifies a person, keep writes behind a confirmation, and publish the list. Users connect an assistant faster when they can read what it will see.
:::

## Answer in the first 200 words

The recorder started here, with a question from Raul: how do you get recommended by an AI assistant, and does it pay?

[Mircea](/people/mircea) had numbers. Traffic that arrives from ChatGPT converts for him at up to 39%. His recipe has three parts. Answer the question directly in the first 200 words of the page. Add structured data, so a machine can read what the page is about. And when you compare yourself with competitors, keep the comparison even-handed. He also uses ChatGPT's option to claim your business.

:::advice{slug="answer-in-the-first-200-words" category="seo" person="mircea" title="Answer in the first 200 words"}
Mircea sees traffic from ChatGPT convert at up to 39%, and he gets recommended by writing pages a model can lift an answer from. The direct answer sits in the first 200 words. The page carries structured data. Comparisons with competitors are even-handed instead of one-sided. An assistant quotes the page that answers the question fastest and looks fair doing it, and the visitor who arrives that way has already been told you are the answer. Rewrite your top pages so the first screen could be read aloud as a reply.
:::

The second question was about his servers. He runs on dedicated machines in the United States and at [Hetzner](https://www.hetzner.com/) in Germany, not on a cloud platform, because the bill is the same every month. The room added the other side: without the redundancy of a big provider, one failure can take the whole service down.

:::advice{slug="rent-the-server-with-the-fixed-bill" category="business" person="mircea" title="Rent the server with the fixed bill"}
Mircea runs his products on dedicated servers in the United States and Germany because the monthly cost is predictable. A cloud bill moves with traffic, and a small product can have a good month that eats its own margin. A fixed price lets you set your own prices with confidence. The trade is redundancy, which the room pointed out: one machine failing can mean the whole service is down. Take the fixed bill, then spend part of the saving on a second box and a tested restore.
:::

## Old phones as private cameras

[Walter](/people/walter-fettich) showed an app that turns an old smartphone into a security camera. One phone is the recorder. Another is the viewer. The footage stays private, with no outside cloud, and the app detects motion. Walter sees room in markets like Romania and Poland, away from a head-to-head fight with the global leaders.

Pricing was open. One option was a single payment of about $10. Another was a micro-subscription for short periods, around $1 for three days while you travel. Someone suggested selling dedicated cloud storage as the paid part.

:::advice{slug="start-in-the-markets-the-leaders-skip" category="distribution" person="walter-fettich" title="Start in the markets the leaders skip"}
Walter's app turns an old phone into a private security camera, a category with large global players. The first markets are Romania and Poland, where those players do little and a local product can grow without a head-to-head fight. A small market is easier to rank in, cheaper to advertise in, and quicker to learn from, and the product you sharpen there travels later. Before you measure yourself against the category leader, check where the leader is not paying attention, and launch there first.
:::

Raul asked why the download sat behind a survey. The answer was honest: to learn the use cases, and to avoid early bad reviews. Mircea and others pushed the other way. Put it on the official stores, free, and skip the part where a tester has to install a beta profile by hand.

:::advice{slug="ship-to-the-store-and-skip-the-beta-profile" category="distribution" person="mircea" title="Ship to the store and skip the beta profile"}
At Indie TM #20, Walter kept a camera app behind a survey and a manual beta install, to study use cases and avoid early bad reviews. Mircea's advice was to publish it free on the official stores. Every extra step before the first use loses most of the people who were curious, and a beta profile is a large step. The reviews you fear are also the feedback you need, and a store listing starts collecting search traffic from the first day. Launch free, read what people write, and add the price once you know what they use it for.
:::

## OCRskill gives the key first and asks for the email later

[Mihai](/people/mihai-balint) showed [OCRskill](https://ocrskill.com), his OCR service built for AI agents. An agent can get an API key in seconds, with no email signup. In the demo, a complex PDF used more than 8,000 tokens, where a simple image takes about 100. It all runs on his own redundant micro data center near Timișoara, which is why his cost per page is far below sending the same document to a large model. Raul put a number on the comparison: about $0.32 for a document through Claude's API.

Then the roast. A key without an email means Mihai cannot follow up with anyone. He only has a hash of the IP address. He agreed, and said the next step is to ask for an email in exchange for extra credits.

He also described where the engine could go. Notaries are out, because their systems are regulated centrally. Town halls are in: their decisions sit in scanned files nobody can search, and OCR plus a language model can extract and index them. The same pairing can file documents into archiving software by date, type, and client. For SEO content he connects a model to [DataForSEO](https://dataforseo.com) through MCP. The reasons he built his own engine are in [his OCRskill journey](/journeys/mihai-ocrskill).

:::advice{slug="trade-extra-credits-for-an-email" category="distribution" person="mihai-balint" title="Trade extra credits for an email"}
OCRskill hands an AI agent an API key instantly, with no email signup, which is the right first step for a tool agents call. The cost showed up in the roast: with only an IP hash, Mihai cannot write to a single user. His fix is to keep the instant key and offer extra credits for an email address. Zero friction gets you usage. It does not get you a list. Put the ask at the moment the user wants more, when an address is a fair price, and you keep the fast start and gain a way to follow up.
:::

:::advice{slug="index-the-scans-nobody-can-search" category="product" person="mihai-balint" title="Index the scans nobody can search"}
Mihai looked at where an OCR engine is needed locally. Notary systems are centrally regulated and closed. Town hall decisions are public, scanned, and impossible to search, so extracting and indexing them with OCR and a language model is a product someone can use tomorrow. When you own a capability, look for the pile of documents that already exists and that nobody can query. The buyer does not need to be convinced the problem is real. They have been opening those files one at a time for years.
:::

## HausJam and the doorway

[Titus](/people/titus-nicolae) showed [HausJam](https://hausjam.com): you photograph your room, then place 3D furniture in it, calibrated to the real size. The room first saw the prototype at [Indie TM #14](/events/indie-tm-14-timisoara-august-2026).

The feedback was practical. Resizing matters, and in a kitchen the fit has to be right to the millimetre. Then someone asked the question every furniture buyer learns once: will it go through the door? Doors, hallways, and stairs decide a delivery as much as the room does.

The harder problem is commercial. The big retailers have said no so far, even to free access. The room's suggestions were smaller doors to knock on: partnerships with showrooms, and an interactive screen on the shop floor. Mircea turned the idea around. Collect the rooms that users create, and offer them to retailers as inspiration and as market data. The story of how HausJam started is in [Titus's journey](/journeys/titus-hausjam).

:::advice{slug="sell-retailers-the-rooms-your-users-made" category="business" person="mircea" title="Sell retailers the rooms your users made"}
HausJam asked the big furniture retailers for a partnership and heard no, even at a price of zero. Mircea's suggestion was to stop asking for their catalog and bring them something they lack: the rooms users furnish in the app, gathered as inspiration and as data on what people try to fit where. A retailer ignores a tool that needs their help. They pay attention to demand they cannot see anywhere else. If a partner will not open the door, look at what your users create that the partner would want to read.
:::

## A real estate CRM that met the agencies late

![Oria CRM homepage: the real estate CRM that turns an open house into a live auction](/screenshots/oria-crm.webp)

[Petru](/people/petru-popa) and [Marc](/people/marc-stancu) showed [Oria CRM](https://realoria.com/crm), a CRM for Romanian real estate agencies. It has a built-in assistant called Kiko that acts only with the agent's approval, publishes listings to imobiliare.ro and Storia, and sits next to the 3D tours from [Petru's Oria journey](/journeys/petru-oria). The product grew out of daily work inside an agency.

They said the hard part themselves. Distribution to agencies started late, and the demand should have been tested before the features were built. Traditional agents resist new tools. And the market's own numbers are hard to trust, because undeclared cash in some transactions distorts any price statistics you try to build.

:::advice{slug="test-the-buyer-before-the-feature-list" category="business" person="petru-popa" title="Test the buyer before the feature list"}
At Indie TM #20, Petru and Marc showed Oria CRM with an assistant, portal integrations, and 3D tours, and said themselves that selling to agencies had started too late. Agents were slower to change than expected. This is the second rule of the room in one example: the building was the easy part. Before the third feature, put the first one in front of a handful of buyers and ask for money or a pilot. If they hesitate, you have learned it for the price of a week and not a year.
:::

## Naramine turns game nights into clips

[Andrei](/people/andrei-statescu) brought the D&D side of [Naramine](https://naramine.app). It started as live, interactive story sessions. It is becoming a media channel that mostly runs itself: he uses Claude to cut the sessions into segments and produce short clips.

The clips are the funnel. A role-playing community is hard to convert, he said, and short video is the channel that brings people to the paid things: game sessions you pay to join, and print-and-play packs. He and the room also talked through one promotion idea: a parody of a familiar format, in the style of an investor pitch show, with his original characters as the contestants. His earlier Naramine story is in [his journey](/journeys/andrei-naramine).

:::advice{slug="cut-the-long-session-into-short-clips" category="distribution" person="andrei-statescu" title="Cut the long session into short clips"}
Andrei runs long D&D story sessions for Naramine and found that the community around them rarely pays on its own. His channel is short video: Claude segments each session and helps produce clips, and the clips lead to paid game sessions and print-and-play packs. Long-form work is expensive to make and slow to spread. If you already produce hours of it, the cheapest marketing you have is inside the recording. Automate the cutting, post the best minute, and point it at the one thing people can buy.
:::

## A music app for glasses almost nobody owns yet

![FretCue homepage: guitar chords and scales, right in your field of view](/screenshots/fretcue.webp)

[Bogdan](/people/bogdan-moldovean) showed [FretCue](https://fretcue.com), a guitar practice app for [Even Realities](https://www.evenrealities.com) smart glasses. It shows scales and chords in your field of view while you play, without getting in the way. It was built entirely on the emulator, and it is listed on Even Hub, the glasses' own app store.

The reasoning was about distribution, not hardware. The glasses cost about 700 euros and the ecosystem is small. A small store means little competition, so a new app gets seen without a marketing budget. Raul's suggestion was to write to the company and ask for test devices.

:::advice{slug="launch-where-the-store-is-still-empty" category="distribution" person="bogdan-moldovean" title="Launch where the store is still empty"}
Bogdan built FretCue for Even Realities smart glasses, hardware that costs about 700 euros and has a small app store. It was written entirely on the emulator. The point is the store: in a young ecosystem with few apps, a new one is visible on the first day, with no marketing budget. On the big stores you are entry one million. On a new platform you can be one of the first in your category, and the platform itself has a reason to show you off. Pick the store by how crowded it is, not by how many devices exist.
:::

## A fingerprint tree for weddings, made digital

[Leonardocezarÿ Chișciuc](/people/leonardo-chisciuc), Leo for short, closed the night with a project that starts from a wedding tradition: the poster of a tree where each guest leaves a fingerprint as a leaf. The digital version lets every fingerprint carry a message, a photo, a voice note, or a video. It is aimed at weddings and anniversaries, and the organizer ends up with an ordered archive of the day.

On pricing, Leo wants a single payment per event, handled automatically, with no invoices written by hand. The room debated Standard against Premium and talked through a three-tier price list. Other ideas: show the tree on a screen at the entrance of the venue, and offer more than one tree design. Raul and Mircea closed with the first rule. Ship it within 30 days, and let the app stores handle the payment.

:::advice{slug="charge-once-per-event" category="business" person="leonardo-chisciuc" title="Charge once per event"}
Leo's digital fingerprint tree is used for one wedding or one anniversary, so the price is a single payment per event, collected automatically, in two or three tiers. A subscription makes no sense for something a customer needs for a weekend. A one-time price matches how the buyer already budgets for the day, next to the photographer and the band. If your product serves an occasion and not a habit, sell the occasion, let the store take the payment, and put the difference between tiers in what the guests can leave behind.
:::

## Twenty editions in

The special edition asked what one person can run with agents. Edition twenty asked what the room should expect from each other, and wrote the answer on a slide. Then nine projects got the same treatment, whether they had customers or only an emulator: a few minutes to show, and a question about who pays.

The first nineteen editions ran on habit. The twentieth has rules, and the first one comes with a deadline. If you came to watch, you have thirty days.
