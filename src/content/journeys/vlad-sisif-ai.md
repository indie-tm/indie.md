---
title: "Building sisif.ai: an AI Video API"
subtitle: "How I went from 0 customers to growing MRR by abandoning traditional marketing"
person: "vlad"
date: 2026-01-22
lessons:
  - "Distribution beats product: find where your users already hang out"
  - "Platform-led growth lets you ride existing waves instead of creating your own"
  - "Tiered pricing unlocks revenue you're leaving on the table"
  - "Traditional indie marketing (Twitter, ProductHunt) is painfully slow for unknown founders"
  - "Stop polishing code, start finding customers"
  - "A wrapper on someone else's model loses the month that model gets cheap"
  - "A one-dollar paywall can turn free model traffic into daily sales"
  - "The buyer of a children's clip is the parent"
---

I spent 15 years as a backend and DevOps engineer, building production infrastructure and writing code I was proud of. I knew how to architect systems and ship reliable software. None of that prepared me for finding my first paying customer.

## Starting from scratch

![sisif.ai homepage](/screenshots/sisif-ai.png)

In December 2024, I started building [sisif.ai](https://sisif.ai): an AI video generation API that turns a text prompt into a video in 2-5 minutes. The tech was solid. I used SaaS Pegasus (a Django boilerplate) to move fast on the product side and focused my energy on the AI pipeline.

By early 2025, I had a working product. Time to get customers, right?

:::advice{slug="mindset-stop-polishing" category="mindset" title="Stop polishing code, start finding customers" person="vlad"}
As an engineer, your instinct is to keep improving the product. Resist it. A mediocre product with great distribution will outperform a great product with no distribution every single time. Vlad spent months polishing sisif.ai before realizing that nobody knew it existed. The hardest shift for technical founders is accepting that code quality doesn't drive revenue.
:::

## The zero-customer desert

I did everything the indie hacker playbook says. I posted on Twitter/X. I launched on ProductHunt. I wrote threads about building in public. I invested time in SEO.

The result? Zero paying customers. Eight Twitter followers. A perfectly functional product that nobody was using.

This wasn't a product problem. It was a distribution problem. And it forced me to confront something uncomfortable: all the marketing channels that work for founders with existing audiences are nearly useless when you're starting from zero.

:::advice{slug="mindset-traditional-marketing-slow" category="mindset" title="Twitter and ProductHunt are slow for unknown founders" person="vlad"}
Building in public, Twitter threads, and ProductHunt launches all share the same assumption: someone is already listening. If you have 12 followers, tweeting into the void won't generate customers. Vlad tried the standard playbook for months and got nothing. These channels compound over time, but if you need traction now, you need to go where attention already exists.
:::

## The n8n breakthrough

The turning point came when I stopped trying to build my own audience and started borrowing someone else's. I discovered [n8n](https://n8n.io), the workflow automation platform, and realized its community was full of people who needed exactly what sisif.ai offered: a simple API to generate videos programmatically.

I built workflow templates. A TikTok automation workflow. An Instagram Reels generator.

![n8n TikTok workflow template](/screenshots/n8n-tiktok-workflow.png) Each template showed how sisif.ai plugged into a workflow people already wanted to build.

![n8n creator profile with 14,860 views](/screenshots/n8n-creator-profile.png)

The templates got thousands of views. Signups started flowing in. Not because I'd cracked some marketing code, but because I'd put my product where people were already looking for solutions.

:::advice{slug="distribution-platform-led-growth" category="distribution" title="Ride existing waves with platform-led growth" person="vlad"}
Instead of building your own audience from scratch, find platforms where your target users already gather. Vlad built n8n workflow templates (TikTok automation, Instagram Reels) that showcased sisif.ai's API. The templates got thousands of views and drove real signups. The key is contributing genuine value to the platform's ecosystem, not just dropping links.
:::

## Pricing: the 4x MRR lesson

My first pricing was simple: $9/month, one plan. It felt "fair." It was also leaving money on the table.

![Sisif.ai MRR growth after pricing change](/screenshots/sisif-revenue.png)

When I switched to tiered pricing ($10/$50/$200), MRR jumped 4x. Some users needed the basic tier. Others were running production workflows and happily paid $200/month for higher limits. A single price point forces everyone into the same box, and most of them don't fit.

:::advice{slug="business-tiered-pricing" category="business" title="Tiered pricing unlocks hidden revenue" person="vlad"}
Vlad's single $9/month plan seemed simple and fair. Switching to three tiers ($10/$50/$200) increased his MRR by 4x. The lesson: different users get different amounts of value from your product. A hobbyist and a business running production workflows should not pay the same price. Start with tiers early. You can always simplify later, but you can't recover the revenue you've been leaving on the table.
:::

## What I know now

The engineer in me wanted to build the best AI video pipeline. The indie hacker I'm becoming knows that distribution is the whole game. A product that reaches the right people will always beat a product that's technically superior but invisible.

:::advice{slug="distribution-beats-product" category="distribution" title="Distribution beats product, every time" person="vlad"}
Vlad had a working AI video API and zero customers. The product didn't change when he started getting signups. The distribution did. If you're a technical founder, this is the hardest pill to swallow: the market doesn't reward the best product. It rewards the product that shows up where buyers are looking. Spend at least half your time on distribution, especially in the early days.
:::

The playbook that worked: stop shouting into the void. Find a platform where your users already live. Build something valuable for that community. Let the platform's existing traffic do the heavy lifting. Then price your product to capture the value you're actually delivering.

## Then a cheaper model arrived

That playbook got me to revenue. It did not keep the revenue once the model under [sisif.ai](https://sisif.ai) stopped being special.

I had wrapped a Chinese video model. Monthly revenue reached about $400. Stronger and cheaper models showed up. At [Indie TM #18](/events/indie-tm-18-timisoara-october-2026) the room used Sora as the example. Revenue fell to $80-90.

I moved the work to SEO, public templates, automations, and the API. ChatGPT started sending spikes. The queries that paid were narrow. "How to make AI videos for kids" was one of them.

A clip costs me about $0.10. I sell it for about $1. If I run the model myself, the margin sits near 70%. I put a paywall at $1 to $3. The free visits became 2 or 3 sales a day.

:::advice{slug="one-dollar-paywall-on-one-off-buyers" category="business" person="vlad" title="A one-dollar paywall fits a buyer who comes once"}
After cheaper video models cut sisif.ai from about $400 a month to $80-90, Vlad stopped giving the render away. A paywall of $1 to $3 produced 2 or 3 sales a day. The clip costs him about $0.10, so the dollar still leaves room, and self-hosting puts the margin near 70%. His buyers rarely come back and rarely write. Price the single job. Keep the subscription for the person who is actually running a workflow every week.
:::

Most of those buyers come once. They do not tell me who they are. The prompts they paste are the brief: a timeline, scenes, and actions, often drafted by ChatGPT. The clip does not follow that script yet.

The room pushed the children's story. A parent is the buyer. Bedtime is a real moment. A picture book can survive a rough line that a brand film cannot. I still have to learn that parent, and I still have to make the pipeline obey the timeline.

:::advice{slug="templates-a-model-can-cite" category="distribution" person="vlad" title="Public templates a model can cite beat another launch post"}
Vlad's earlier social posts did not find the buyers. Public templates and SEO pages did, once ChatGPT started citing them. The paying queries were specific, including how to make an AI video for a child. Put a finished example where a model can quote it, in the words the buyer already used. That citation is a channel you can count, the same way you count search.
:::
