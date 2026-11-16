---
title: "The One-Person Product Team: Three Builders, Their Agents, and 75 Minutes of Questions"
subtitle: "A special Indie TM edition with AGENTIC.tm, held as a PROW 2026 side event at Haufe Group: Vlad showed how text became action and why agents need guardrails, Raul let the room vote on his product decisions and introduced his 27 bots, and Mircea ran seven products through one bot team"
date: 2026-10-28
location: "Haufe Group, UBC 0, Timisoara"
image: "/images/events/one-person-product-team/room.webp"
ogImage: "/images/events/one-person-product-team/og.jpg"
presenters:
  - vlad
  - raul
  - mircea
special:
  label: "AGENTIC.tm x Indie TM, a PROW 2026 side event"
  stats:
    - value: "70+"
      label: "people in the room"
    - value: "16 min"
      label: "from one message to a full funnel report"
    - value: "27"
      label: "bots on one person's team"
    - value: "323"
      label: "deploys of one product in eight weeks"
  program:
    - time: "6:45 pm"
      title: "Vlad: text became action"
      detail: "Two communities, tools in a loop, and the guardrails agents need"
      link: "https://blog.vtemian.com/talk/the-one-person-product-team/"
    - time: "7:00 pm"
      title: "Raul: the room as his product team"
      detail: "Twenty minutes of decisions the room voted on, ten minutes on the bots behind them"
      link: "https://raulp.co/talks/one-person-product-team/#0"
    - time: "7:30 pm"
      title: "Break"
      detail: "Beer and questions"
    - time: "7:45 pm"
      title: "Mircea: seven products, one bot team"
      detail: "Connections, routines, and a launch that started as a voice chat"
      link: "https://zerotofail.com/talks/one-person-product-team/#/1/1"
    - time: "After"
      title: "Open Q&A with all three"
      detail: "The plan said drinks. The room asked questions for 1h 15m, until it had to be handed back"
  programImage:
    src: "/images/events/one-person-product-team/sign.webp"
    alt: "A flipchart with The One-Person Product Team written in marker and an arrow pointing to the Haufe Group office"
---

Twelve days after [Indie TM #19](/events/indie-tm-19-timisoara-october-2026), we did not go back to Cowork. We went to the [Haufe Group](https://www.haufegroup.com) office in UBC 0, for a joint night with [AGENTIC.tm](https://agentic.tm), listed as a side event of [PROW 2026](https://prow.ro). A hand-lettered flipchart pointed the way. More than 70 people showed up.

Three builders had the screen: [Vlad](/people/vlad), [Raul](/people/raul), and [Mircea](/people/mircea). They shared one question. What can one person build, ship, and run when agents do the rest?

The plan ended with drinks. The room had other ideas. It asked questions for an hour and fifteen minutes, and it stopped only because the room had to be handed back.

All three talks are online, and this recap follows them in the order of the night: [Vlad's write-up](https://blog.vtemian.com/talk/the-one-person-product-team/), [Raul's deck](https://raulp.co/talks/one-person-product-team/#0), and [Mircea's deck](https://zerotofail.com/talks/one-person-product-team/#/1/1). Our recorder caught only the second half, so the Q&A at the end is the part you will not find anywhere else.

## Vlad puts two communities in one room

![Vlad presenting the agenda slide, How the evening goes, to a full room at Haufe Group](/images/events/one-person-product-team/agenda.webp)

[Vlad](/people/vlad) builds [sisif.ai](https://sisif.ai) and organizes AGENTIC.tm. He opened by explaining why the night was a joint one.

AGENTIC.tm is the shop floor: how code gets made with AI. Indie TM is the shop window: people who build products, sell them, and tell you the real numbers. "For a long time these were two different conversations," he said. "In the last year, they turned into the same one."

Then the plan and the house rules. Fifteen minutes from him. Raul at seven. A short break. Mircea at a quarter to eight. No pitching, real numbers, and questions at any time.

## Text became action

His own example was the embarrassing one. In 2024 he used AI for emails and LinkedIn posts that opened with "I'm humbled to announce." In 2026 the same family of models logs in to a website, finds his invoices, downloads them, and emails them to his accountant.

![Vlad's slide Text became action: a robot at a conveyor belt that runs a tool, reads the result, and decides again, next to a chatbot answer about why signups dropped](/images/events/one-person-product-team/vlad-text-became-action.webp)

What changed is on this slide. Ask a chatbot why signups dropped and you get an essay about seasonality. "Correct, and useless," because nothing in it touched your data. Give the same model a terminal and the question becomes a chain of commands. It queries [PostHog](https://posthog.com) and sees signups down on mobile. It reads the logs and finds the errors. It finds the line in the code. It deploys a fix. Each step depends on what the last one found.

The toolbox grew year by year. Files in 2023. A shell in 2024. A browser, the whole computer, and [MCP](https://modelcontextprotocol.io/) in 2025. Other agents in 2026. The part people miss, he said, is that the models are now trained on exactly these loops, which is why they keep getting better at them.

The demo was a chore. His accountant asks for the [RunPod](https://www.runpod.io/) invoices every month, and every month he forgets. So a bot does it. It gets its own cloud machine, opens a browser, logs in, downloads the invoices, writes the email, and sends it.

:::advice{slug="give-the-agent-the-monthly-chore-first" category="mindset" person="vlad" title="Give the agent the monthly chore first"}
Vlad's first demo of agent work was not a feature. It was the monthly email from his accountant asking for the RunPod invoices, the one he always forgot. A bot now opens a browser, logs in, downloads the invoices, and sends them. A chore like that is the right first job for an agent: it repeats every month, it has a clear finish line, and a mistake is easy to spot and cheap to fix. Start with the task you already resent. You learn how far to trust the agent before it touches anything a customer can see.
:::

## A junior with admin rights

That was the fun part. Then the scary part: "Tool use without verification is a junior with admin rights. Fast, confident, and sometimes very wrong."

His answer came from a talk by Lauren Tan, who shipped 2,000 pull requests to production in a month. It works because of the environment around the agent, not because the agent is careful. The agent checks its own work. Separate verifiers sign off the merge. And every mistake that happens twice becomes a rule in the environment, not a note in a prompt.

![Vlad's Guardrails slide: small units, put together, verified by rules, with five gates on a conveyor belt labelled lint, static analysis, import rules, tests, and verifier on PR](/images/events/one-person-product-team/vlad-guardrails.webp)

In practice that is five gates, in order: lint, static analysis, import rules about who is allowed to talk to whom, tests, and a verifier on the pull request. A human would quit in a week coding like this. "The environment isn't built for us. It's built for the agent."

:::advice{slug="make-agent-code-pass-rules-not-your-mood" category="product" person="vlad" title="Make agent code pass rules, not your mood"}
Vlad's guardrails slide put five gates between an agent and the main branch: lint, static analysis, import rules, tests, and a verifier on the pull request. He called them rules that do not have opinions. Reviewing agent output by reading it and deciding how you feel does not scale past a few changes a day. Deterministic checks do. Write down what a good change must satisfy, make the machine check it, keep the verifier out of the agent's reach, and spend your own attention on the changes that fail.
:::

:::advice{slug="turn-the-repeated-instruction-into-a-rule" category="mindset" person="vlad" title="Turn the repeated instruction into a rule"}
Vlad's line from the stage: if you keep writing the same instruction to the agent, the instruction is the symptom. The fix lives in the environment. A mistake that happens once is a mistake. When it happens twice, it becomes a lint rule, a test, or a change to the code that makes it impossible. A note in a prompt can be skipped and nothing fails. A rule that breaks the build cannot be skipped. Keep a list of the corrections you repeat, and each time one shows up again, move it out of the prompt and into something that fails loudly.
:::

## One message, sixteen minutes

The second demo was from that same morning. sisif.ai was losing customers and Vlad did not know why. He sent one message, typos included, to the [Grok Bot](https://x.ai/bot) agent he calls boss: "boss, we need something! … we're loosing customers. check in posthog and stripe."

Sixteen minutes later he had a report built from PostHog, [Stripe](https://stripe.com), and the production logs. Checkout was broken on Android. A model provider account had run dry, so one kind of order had dropped to zero. The report also said what was not the problem, which he liked most.

His agents have job titles. Boss coordinates and talks to him. Kitchen writes and ships code. QA clicks through production like a user would. Boss sent five pull requests to kitchen, caught two that missed the deploy, and QA checked every fix on phone and desktop. Each pull request went through the gates from the previous slide.

![Vlad's closing slide: context plus tools plus verification equals a role, with four production lines for code, data, support, and content](/images/events/one-person-product-team/vlad-one-role-one-line.webp)

His bridge to the rest of the night: a role is three things. Context is what it needs to know. Tools are what it can touch. Verification is how you know it did the job right. Repeat that loop and you have a production line: one for code, one for data, one for support, one for content. The human builds the environment and runs several factories in parallel. The full argument, with sources, is in [his write-up of the talk](https://blog.vtemian.com/talk/the-one-person-product-team/), and his own agent harness is in [his sisif.ai journey](/journeys/vlad-sisif-ai).

:::advice{slug="define-a-role-as-context-tools-and-verification" category="product" person="vlad" title="Define a role as context, tools, and verification"}
Vlad defines an agent's role with three things: the context it needs to know, the tools it can touch, and the verification that proves it did the job right. His own team works this way. One agent coordinates, one writes and ships code, one clicks through production like a user. Most people set up the first two and skip the third, which is how an agent ends up confidently wrong. Before you add a bot, write one line for each of the three. If you cannot say how you would check its work, it is not a role yet.
:::

Then he handed over: "And now, someone who actually lives this. Not my slides, the real thing."

## Raul makes the room his product team

![Raul on stage in front of his Indie TM slide: product stories, with real numbers, 19 meetups and counting](/images/events/one-person-product-team/raul-on-stage.webp)

[Raul](/people/raul) hosts Indie TM, and this time he was also on the agenda. [His deck](https://raulp.co/talks/one-person-product-team/#0) is online. His opening line set the rules: "I run my apps alone. Tonight, you're my product team."

So the room voted. He put four decisions from his own path on the wall, one at a time. Hands went up first. The reveal came after.

Before the decisions, one photo. His Halloween costume this year is his own product: an [eBaza](https://ebaza.ro) ring binder. The post went out on LinkedIn and X.

![Raul in a magenta eBaza ring binder costume, shown from the front, side, and back](/images/events/one-person-product-team/ebaza-halloween-costume.webp)

### Decision one: push for a calmer culture, or keep your head down?

The company he worked at in 2020. He pushed. He got fired.

His private list of calm employers became [Calm Companies](https://calmcompanies.club): $19 a year, 58 active subscribers. Today one of his bots owns that product. The long version is in [his Calm Companies journey](/journeys/raul-calm-companies).

### Decision two: stay on sabbatical, or cold-email the founder?

[Gumroad](https://gumroad.com) was not hiring. He had already failed their coding challenge. He emailed Sahil, the founder, anyway, with ten things he had found about Gumroad. That got him hired.

:::advice{slug="send-ten-fixes-not-a-cv" category="mindset" person="raul" title="Send ten fixes, not a CV"}
Gumroad was not hiring, and Raul had already failed their coding challenge. He cold-emailed the founder a list of ten things he had found about the product. That got him the job. A CV asks a company to imagine what you might do. A list of ten concrete findings is the work itself, delivered before anyone asked. If you want to work with a product team, act like the product person first: use the thing, write down what is broken, and send it to the one who can fix it.
:::

### Decision three: stay in New York, or go home and go all in?

The visa was approved. New York was hiring. But a month of rent plus daycare there cost about what a year of rent costs at home. He went home.

The goal was apps that cover his costs within a year. His own answer from the stage: "No, I did not. About $1k. But I learned a lot."

![Raul's money arc slide: 6 dollars, then 14 dollars, then about 1k, with the quote that he felt like a real founder at 14 dollars, on vacation](/images/events/one-person-product-team/slide-money-arc.webp)

The money arc is three numbers. $6 from a first sale in 2021. $14 from the first stranger, in 2026. About $1k over a year. Then the line of the talk: "I used to think I'd feel like a real founder at some ARR number. I felt it at $14, on vacation."

### The binder bet

The loud bet was offline. A giant ring binder, an idea that came from [Grok Bot](https://x.ai/bot) and took Raul 11 hours and 40 minutes to build by hand. And eBaza on CityMedia LED screens.

He bet on press. He was wrong. Almost nobody scanned the QR codes. His summary: "The screens bought awareness. The post bought the signups."

:::advice{slug="decide-how-you-will-measure-a-bet-before-you-launch-it" category="distribution" person="raul" title="Decide how you will measure a bet before you launch it"}
Raul put eBaza on CityMedia LED screens and built a giant ring binder, betting the stunt would earn press. Almost nobody scanned the QR codes. The signups came from the post about it, not from the screens. He could only say that afterwards, and only roughly, because the measure was picked after the launch. Before you spend on a loud bet, write down the one number that would make it a win and how you will count it. If you cannot count it, call it brand spend and budget it that way.
:::

### Decision four: families, or small firms?

This one is still open. eBaza is free for three cars, and the homepage says it is not fleet software. At the same time, his outreach bot emails firms.

![Raul's slide titled The answer: 300+ signups, about 95% families, 1,000+ cold emails to firms, 449 lei for 10 cars](/images/events/one-person-product-team/slide-the-answer.webp)

More than 300 signups, about 95% of them families. More than 1,000 cold emails to firms. A firm plan at 449 lei for 10 cars. The users are families. The only money so far came from a firm.

He asked the room what they would do, and why. Then he closed the first part with the reason he is in this market at all:

> I left New York to bet on insurance, of all things. AI gives an edge to anyone entering a market right now, most of all a regulated one like insurance, where the incumbents still move slowly. I can move fast, improve the product and the benefits every week, and run it as a one-person product team.

:::advice{slug="count-who-pays-apart-from-who-signs-up" category="business" person="raul" title="Count who pays apart from who signs up"}
eBaza has more than 300 signups and about 95% are families. The only revenue so far came from a firm, and the offer for firms is 449 lei for 10 cars. One list says build for families. The other says build for firms. If Raul looked only at signups, the answer would seem obvious, and it would point away from the money. Keep two columns from the first day: who uses the product, and who pays for it. When they disagree, you have found the real decision, and you can put it in front of people instead of guessing.
:::

## I decide, the bots execute

The last ten minutes were the team behind those decisions. It started with a callback: "You told me families or firms. My bot had already built both pages."

[![Raul's setup sheet: 27 bots, one person, grouped into coordination, engineering, product owners, growth, quality, and meta](/images/events/one-person-product-team/bots-27.webp)](/images/events/one-person-product-team/bots-27.webp)

Twenty-seven bots. Three coordinate: Grok Bot routes every task to the right bot, Jeeves is chief of staff, Rooster writes the digests. Two are engineers. Ten are product owners, one per app, each responsible end to end for code, analytics, funnels, SEO, and content. Five do growth. Three do quality: Proof reviews code, Sentinel watches security, Sursa fact-checks insurance content. Four look after Raul himself, including one that coaches his talks and one that designs new bots.

They plug into 25 services. The servers sit on one private network. Shipping goes the same way every time: his message, the bot's change, a review from Proof, green CI, automatic deploy.

[![Raul's routines sheet, What runs without me: a weekday morning timeline from the 8 am security watch to the 9 am pull request reviews](/images/events/one-person-product-team/bots-routines.webp)](/images/events/one-person-product-team/bots-routines.webp)

A weekday starts without him. A security watch at 8 in the morning. A digest fifteen minutes later. An indexing sweep after that. Pull request reviews around 9. Content drafts arrive as pull requests on Tuesdays and Thursdays.

![Raul's My product team slide: nine robot heads under his name, with a vote to promote Stamp for more outbound or Crawly for SEO first](/images/events/one-person-product-team/slide-product-team.webp)

Then one more vote. Which bot gets more hours next month: Stamp, for more outbound, or Crawly, for SEO first?

Two things he said about the limits. If he started eBaza from zero, he would put a waitlist on the domain much sooner. And some jobs he keeps for himself. The first-person version of the eBaza story is in [his eBaza journey](/journeys/raul-ebaza).

:::advice{slug="keep-the-credibility-jobs-for-a-person" category="mindset" person="raul" title="Keep the credibility jobs for a person"}
Raul runs 27 bots, and two jobs still stay with him: podcast interviews, and the call to his first B2B lead. His reason is that credibility lives with a person. A bot can write the outreach email and book the slot. The moment a buyer decides whether to trust a new company, they want to hear from whoever is accountable for it. When you split work between yourself and agents, sort it by trust, not by effort. Hand over the heavy work. Keep the moments where someone is deciding if you are real.
:::

:::advice{slug="put-the-waitlist-up-before-the-product" category="distribution" person="raul" title="Put the waitlist up before the product"}
Raul said that if he started eBaza from zero, he would put a waitlist on ebaza.ro much sooner. The domain already had traffic while the product was being built, and none of those visitors could leave a way to be reached. A waitlist costs an afternoon. It turns months of anonymous visits into a list you can launch to, and the size of that list tells you how much to build. If your domain is live and the product is not, the form is the product for now.
:::

## Mircea runs seven products in parallel

![Mircea's opening slide: Grok Bot in the middle, connected to seven products: Take 10 Media, SingleFax, Blahphone, Renzi, microsaas.directory, Camtell, and ScreenScheduler](/images/events/one-person-product-team/mircea-seven-products.webp)

After the break, [Mircea](/people/mircea) took the screen. He is CTO at Take 10 Media and the founder of [SingleFax](https://singlefax.com). His first slide put Grok Bot in the middle and seven products around it: Take 10 Media, SingleFax, [Blahphone](https://blahphone.com), [Renzi](https://renzi.ro), [MicroSaaS Directory](https://microsaas.directory), Camtell, and ScreenScheduler. The last two are not out yet. [His deck](https://zerotofail.com/talks/one-person-product-team/#/1/1) is online.

He has more than 25 years in software and has worked as an architect and technical lead. He said AI changed what motivates him. It moved him from writing code to building complete products. Code is just how they get done.

His proof was a digital advertising platform, built in two weeks for an event in Las Vegas. Android firmware for the screens. A CMS. An ad server. DSP and SSP integrations. Support tickets. It serves more than 1,000 screens at about 500 requests a second, on a server that costs about $180.

The other products came from needs he ran into himself. MicroSaaS Directory grows organically by 30 to 40 signups a day. The stories behind two more are in [his SingleFax journey](/journeys/mircea-singlefax) and [his Renzi journey](/journeys/mircea-renzi).

## From three connections to a bot team

[![Mircea's Connections slide: fourteen connected sources feed Grok Bot, a bot team of nine sits behind it, and the outputs are code fixes, reply drafts, SEO and content, new sites, posts and outreach, and digests](/images/events/one-person-product-team/mircea-connections.webp)](/images/events/one-person-product-team/mircea-connections.webp)

In 2025, with [Cursor](https://cursor.com/), his AI was connected to three things: the code, the database, and Grafana.

Now fourteen sources feed Grok Bot. Mail, calendar, and files. Search Console and Bing Webmaster. Stripe and PostHog. [Cloudflare](https://www.cloudflare.com/) and GitHub. Support chat, Slack, social posting, and the servers themselves.

Behind it sits a bot team of nine. A dispatcher. Five product bots. One each for SEO, support, and the books. What comes out the other side: code fixes, reply drafts, SEO and content, new sites, posts and outreach, and digests.

The dispatcher runs on its own virtual machine. It takes a task, passes it to the right specialist, and runs commands on the servers. His reason was practical. One generic bot fills its context with everything and burns tokens on things that are not its job.

He showed it live. He asked the agent about a traffic spike. It checked Cloudflare and PostHog and came back with the answer: the spike was Google PageSpeed, not a scraper. The transcription tool listed the agent as one of the speakers.

:::advice{slug="put-a-dispatcher-in-front-of-specialist-agents" category="product" person="mircea" title="Put a dispatcher in front of specialist agents"}
Mircea runs a dispatcher bot on its own virtual machine. It receives every task and hands it to a specialist: a bot for a single product, or the one for SEO, support, or the books. A single generic bot has to carry every project and every tool in its context, so it gets slower, more expensive, and less accurate with each thing you add. Specialists keep a small context and a narrow job. When your one assistant starts forgetting instructions, do not write a longer prompt. Split the job and add a router.
:::

## What runs overnight

[![Mircea's Routines slide: 323 SingleFax deploys, 140 merged pull requests, 537 errors closed, 10 security rules, and SEO gains since the SEO bot started](/images/events/one-person-product-team/mircea-routines.webp)](/images/events/one-person-product-team/mircea-routines.webp)

The routines slide had the numbers. From September 1 to October 27, SingleFax alone had 323 deploys. 140 pull requests were merged in two months. 537 errors were closed since September. 10 security rules went into Cloudflare. A broken checkout retry was fixed overnight.

Customer emails follow one path: facts, then a draft, then his approval.

UX fixes run every hour. The bots read PostHog session replays through MCP and find where people get stuck or hit an error. They send the fix to [Codex](https://openai.com/codex/) as a task. Codex writes the code. The bots test it, deploy it, and check in production that the problem is gone.

SEO runs daily. Since the SEO bot started, comparing September with October, SingleFax impressions in Search Console are up 1,257% and queries up 1,267%. Page views are up 134% and blog views 196%.

At the bottom of the slide, one line of rules: drafts first, his yes for money, deletions, and production, and read-only by default.

:::advice{slug="let-an-agent-watch-your-session-replays" category="product" person="mircea" title="Let an agent watch your session replays"}
Mircea gives his agents PostHog session replays through MCP. Every hour they go through real sessions, spot the places where users stall or hit an error, send the fix to Codex, then test, deploy, and verify it in production. Most founders record sessions and never watch them, because it is an hour of video for one insight. An agent does not get bored. If you already pay for session replay, connect it to the thing that writes your code, and start by having it report what it finds before you let it ship the fix.
:::

:::advice{slug="keep-your-yes-for-money-deletions-and-production" category="mindset" person="mircea" title="Keep your yes for money, deletions, and production"}
Mircea's bots are connected to almost everything he runs, and one line on his slide says how: drafts first, his yes for money, deletions, and production, and read-only by default. He got there gradually, from autocomplete to full execution, with each step earned by the one before. The three exceptions are the actions that are hard to undo. A wrong draft costs a minute. A wrong refund, a dropped table, or a bad production change costs a customer. Let the agent prepare everything, and keep the approval on the things you cannot take back.
:::

## A fifteen-minute voice chat, live by lunch

![Mircea's slide Voice chat to Sunday launch: a 15-minute voice chat goes into Grok Bot and comes out as domains bought, sites live, outreach, social posts, and reply drafts](/images/events/one-person-product-team/mircea-voice-chat-launch.webp)

One slide told a single Sunday. A fifteen-minute voice chat with Grok Bot about SingleFax. Out the other side: domains bought, sites live, outreach, social posts, and reply drafts. The timeline under it had four stops: voice, domains, live by lunch, automate.

What he wants to automate next: voice calls, conversion decisions, and SEO decisions. What he keeps for himself: the ideas and the plans. His last slide said it in four words. One person. Many products.

:::advice{slug="talk-the-launch-through-and-let-the-bot-set-it-up" category="distribution" person="mircea" title="Talk the launch through and let the bot set it up"}
Mircea described one Sunday on a slide: a fifteen-minute voice chat with his bot about SingleFax, and by lunch the domains were bought and the sites were live, with outreach, social posts, and reply drafts prepared. The thinking was his. The setup, which usually eats the weekend, was the bot's. If you can explain a launch out loud in fifteen minutes, you have a brief. Say it to an agent that can register a domain and deploy a site, and review what it built instead of building it.
:::

## Seventy-five minutes of questions

Then the room took over. All three took questions, with Vlad moderating.

**What does it cost?** Mircea's bill for AI tools, a Cursor plan among them, is about $200 a month. That runs several products at once.

**Do you really give it SSH?** This is where the three differ most. Mircea's bots can reach the servers, the databases, Stripe, and email, under the rules from his slide. Raul is more conservative. He ships fast with AI too, but his keys for Stripe and [Wise](https://wise.com) are read-only, so no agent can move money by mistake. Vlad put it in the middle: trust in an agent grows step by step, and the steps are as much psychological as technical. Mircea agreed on the path. He started at autocomplete and widened access until he reached full execution.

:::advice{slug="keep-the-payment-keys-read-only" category="business" person="raul" title="Keep the payment keys read-only"}
Raul builds and ships with agents, and still gives them only read-only API keys for Stripe and Wise. An agent can look up a payment, reconcile an invoice, or answer a billing question. It cannot issue a refund, send a transfer, or change a price. Most agent mistakes cost you a rollback. A mistake with money costs you money and a customer's trust, and it may not be reversible. Sort your credentials by what an error would cost, and keep write access away from anything that moves funds.
:::


**One bot or many?** Both Raul and Mircea said many. A bot per task, each with its own memory, wired into the CI pipeline. Raul added [TypeUI](https://typeui.sh), built by [Zoltan](/people/zoltan) from our own community, to keep interfaces consistent when agents write the front end.

**Is it even legal to sell software written by AI?** Raul raised it as a rumour he keeps hearing. Mircea was firm. There is no legal basis that stops you from selling or monetising software built with AI.

**How do you pick what to build?** Painkillers. Mircea builds things that save someone time or money on an urgent problem. He validates with a simple landing page and a Stripe payment link, and he listens most to the people who paid.

:::advice{slug="validate-with-a-landing-page-and-a-payment-link" category="business" person="mircea" title="Validate with a landing page and a payment link"}
Mircea tests an idea with a simple landing page and a Stripe payment link, and he only builds painkillers: products that save time or money on a problem someone has right now. The feedback he trusts comes from people who paid. Compliments and waitlist signups cost nothing to give, so they tell you little. A payment is a decision. If nobody clicks the link, you saved the weeks you would have spent building. If someone does, you have a customer to ask what they expected to get.
:::

**How do you pay the bills until it works?** Neither Mircea nor Raul told anyone to quit their job. Keep a part-time role or freelance work. Run several small projects in parallel. Let the products earn their way to full time.

:::advice{slug="keep-a-second-income-while-the-products-grow" category="business" person="mircea" title="Keep a second income while the products grow"}
Asked how a founder covers daily expenses before the products are profitable, Mircea's answer was to spread the risk: part-time work or freelancing on one side, several small products on the other. He still keeps parallel income while his own portfolio grows. Runway pressure makes you ship the wrong thing and price it out of fear. A smaller, steady income buys you the patience to let SEO and word of mouth do their slow work. Cut the client hours only as the product revenue replaces them.
:::

**Does the domain name matter?** It depends on where your traction comes from. A name does a different job for a product that grows on social media than for one that depends on search and AI assistants.

**What stops someone from copying you?** Nothing, and an NDA will not help. When building is this cheap, hiding the idea protects very little. What a competitor cannot copy quickly is speed of execution, real reviews, and the trust people have in whoever stands behind the product. Raul made the same point about reputation. Vlad closed on it: distribution and reputation are the work that is left.

:::advice{slug="skip-the-nda-and-ship" category="mindset" person="mircea" title="Skip the NDA and ship"}
Mircea's view from the Q&A: when AI cuts the cost and time of building, keeping an idea secret behind an NDA is pointless. Anyone who wants to copy a product can rebuild it in weeks. What they cannot rebuild in weeks is your pace of shipping, a history of genuine reviews, and customers who trust you directly. Talk about the idea in public, put it in front of buyers early, and spend the energy you would have spent on secrecy on being the fastest and most trusted option.
:::

## The room had to be handed back

Regular editions of Indie TM end when the last demo does. This one ended because the building needed its room.

All three talks said that building is cheap now. They differed on what is left for the person: the environment, the decisions, or the ideas. The Q&A found where the line sits in practice, and it runs through access, money, and trust.

Thank you to AGENTIC.tm for the joint night, to Haufe Group for the room, and to PROW for the official photos. The three talks, once more: [Vlad's](https://blog.vtemian.com/talk/the-one-person-product-team/), [Raul's](https://raulp.co/talks/one-person-product-team/#0), and [Mircea's](https://zerotofail.com/talks/one-person-product-team/#/1/1).
