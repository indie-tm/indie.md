---
title: "Indie TM #18: A Dollar Clip, and the Parent Who Buys It"
subtitle: "What we learned at our eighteenth meetup, where Vlad opened sisif.ai after cheaper models cut the revenue, and the room told him to charge a dollar and sell the story to a parent"
date: 2026-10-01
location: "DevPlant Cowork, Timisoara"
link: "https://luma.com/ho1f3s5l"
presenters:
  - vlad
  - mircea
---

Two weeks after [Indie TM #17](/events/indie-tm-17-timisoara-september-2026), where cheap code had already cut a component library, we met at DevPlant. [Vlad](/people/vlad) brought [sisif.ai](https://sisif.ai). The climb from zero customers to n8n templates and tiered plans is in [his journey](/journeys/vlad-sisif-ai). This recap is the chapter after a better video model got cheap.

## Four hundred dollars, then ninety

![sisif.ai homepage](/screenshots/sisif-ai.png)

[Vlad](/people/vlad) started sisif.ai as a wrapper over a Chinese video model. Monthly revenue reached about $400. Then stronger and cheaper models arrived. The room used Sora as the example. Revenue fell to $80-90.

The page was still there. The model under the page was no longer scarce.

:::advice{slug="a-wrapper-dies-when-the-model-gets-cheap" category="mindset" person="vlad" title="A wrapper dies when a better model ships"}
sisif.ai reached about $400 a month on someone else's video model, then fell to $80-90 when stronger and cheaper models shipped. Sora was the name the room used. The page did not get worse. The model under the page became a commodity. If your product is a thin layer on one provider, write down what your price does the month a lab ships a better one. Own a job the next model does not do by default, or own the machine that runs it.
:::

## He put a dollar in front of the free clip

A clip costs him about $0.10 to render. He sells it for about $1. If he runs the model on his own machines, he puts the margin near 70%.

The visits had been free. He added a paywall of $1 to $3. Those visits turned into 2 or 3 sales a day.

A clip takes minutes. The person is still on the page. That wait is the moment for the next offer.

:::advice{slug="charge-a-dollar-while-the-clip-renders" category="business" person="vlad" title="Charge a dollar while the clip renders"}
Vlad's clip costs about $0.10 and sells for about $1. A paywall of $1 to $3 turned unpaid traffic into 2 or 3 sales a day. Generation is slow enough that the wait can hold a second offer. Price the single clip when the buyer comes once. A subscription is a poor fit for a person who needed one video tonight.
:::

## Pages a model can quote

The social posts had already failed him once. This time he put the work into SEO, public templates, automations, and the API. ChatGPT sent spikes. The visits that paid were specific. "How to make AI videos for kids" was one of them.

:::advice{slug="publish-the-page-a-model-can-quote" category="seo" person="vlad" title="Publish the page a model can quote"}
The spike came from public templates and pages ChatGPT could cite, including queries about AI video for children. Write the page that answers the job in the words the person already typed into the model. A template the model can point at is distribution. Keep the page factual and narrow enough to lift.
:::

## The room named the parent

Most buyers come once. They rarely write. Vlad could not yet say who they are, or what they do with the file.

The prompts are the clue. People paste a timeline, a list of scenes, and actions. ChatGPT often drafts that script. The clip does not follow it yet.

The room narrowed the job to children's stories. A parent will accept a rough drawing that a brand film would reject. Bedtime and mealtime are the moments. The product has to feel like a story. The person to interview is the parent, with a short form and a reason to answer. A public gallery can hold the clips. If a story spreads, a paid sequel is the offer. YouTube and TikTok can carry that without Vlad in every frame. The limit is the frame itself: a model will refuse some prompts, and a children's product cannot ship a bad one.

:::advice{slug="sell-the-childrens-clip-to-the-parent" category="product" person="vlad" title="Sell the children's clip to the parent"}
The room treated the children's clip as a product with a buyer, a moment, and a rule. The buyer is the parent. The moment is bedtime or mealtime. The rule is what the model may draw. Vlad's buyers are one-off and quiet, so a form with a reason to answer is how he learns why they came. A picture book can survive a rough line. A frame that is wrong for a child has to be blocked before it renders. Pick those three, then teach the pipeline to follow a timeline.
:::

## Another clip, and a fax that already had the rates

Someone else in the room runs a different video product. Characters stay consistent because each scene gets a reference image. One minute of video takes about 30 minutes to generate. He has about 6,000 accounts and could not say how many are active. He turned ads off. Traffic from AI converts better than his SEO. Retelling a story is in the product. Sound is still an experiment.

[Mircea](/people/mircea) had the cleanest channel math in the room, from [SingleFax](https://singlefax.com). A visit from an AI answer converted at 36.3%. Organic search converted at 20.8%. Direct converted at 11.2%.

He reads share of voice in Bing Webmaster Tools: which pages the answers cite. Plain posts get cited. Those pages already explain one job and sell the fax. After the first payment, email offers a permanent number.

:::advice{slug="read-ai-share-of-voice-in-bing" category="distribution" person="mircea" title="Read your AI share of voice in Bing"}
SingleFax converted 36.3% of AI referrals, 20.8% of organic search, and 11.2% of direct visits. Mircea checks Bing Webmaster Tools for the pages an answer cites. Short factual posts earn those citations. The upsell, a permanent fax number, goes out by email after the person has paid for one send. Count AI referrals as their own channel. On this product they buy more often than organic search, and more often than a direct visit.
:::

## Notes from the back of the room

MCP can help a model buy a physical thing, a product in a shop or a hotel room. It does not yet sell a digital file. A generate or share button inside ChatGPT needs a developer account. Copilot can send visits that never show up in analytics.

The longer aside was about models you would have to train. A multimodal tutor wants low latency, and a voice, a text, and a drawing that stay in sync. An HTML translation wants the tags pulled out, the words translated, and the tags put back with an alignment matrix. Both need GPUs, clean data, and a lab's judgment. The practical path in the room was a harness over a model that already exists. Gemma and Groq came up as ways to make data. Models also change under you. Claude gets verbose, then a lab trims it. A short prompt and a concise setting keep a demo stable. A clear demo, with a number on it, is also what the room would take to a funder.

## Eighteen editions in

Edition seventeen asked what you sell when the code is free. Edition eighteen asked what you sell when the model under your wrapper is cheap. A dollar on the clip. A parent for the story. A page the model will quote. See you at the nineteenth.
