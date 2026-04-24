---
name: indie-pricing
description: Use before setting a price, writing a pricing page, choosing tiers, or answering "how much should I charge?" Synthesizes seven pricing lessons from indie founders: discover the enterprise budget, price on-prem for support reality, benchmark against cost of mistake, never discount, add premium tiers based on real asks, unlock hidden revenue with tiered pricing, and when to price for zero friction. Do not use for paid-acquisition bidding or unit-economics modeling.
---

# indie-pricing

A pricing decision aid distilled from founders who have actually shipped paid products. The point is not to give you a number, it is to make sure you have considered the three or four questions that will determine whether the number you pick is below, inside, or above the budget the buyer was ready to spend.

## When to use

- The user is writing copy for a pricing page.
- The user is choosing price points for a new plan or tier.
- The user is responding to a sales conversation and needs to quote.
- The user asks "how much should I charge", "what should my pricing be", or any variant.
- The user is about to default to cost-plus or competitor-matching.

## When not to use

- Paid-acquisition bidding, CPC, or ad-auction strategy.
- Unit-economics modeling where the number is already constrained by CAC and margin.
- Consumer in-app purchase psychology.

## Before you price: three questions

Ask the user these in order. Do not price until you have answers.

1. **Who is the buyer and where does their budget sit?**
   - Consumer out of pocket -> anchor on subscription psychology.
   - SMB operator -> anchor on the tool they are replacing.
   - Enterprise with procurement -> do not invent a number. See step 2.
2. **Is this SaaS or on-prem?** If on-prem, the support model determines the floor, not the demo.
3. **What is the cost of the buyer getting this decision wrong without your product?** Not "what does a competitor charge" -- what does a mis-hire, a missed news cycle, a botched migration cost them?

## The seven lessons

Apply these in priority order for the buyer you identified.

### For enterprise buyers

**Discover the budget, do not invent a price.** Large companies already run a budget line for your category. The money exists. Procurement is used to spending it. Your job is discovery, not persuasion. Ask what the team spends on adjacent tools or what last year's category budget was, and land inside the familiar range. The absolute number matters less than being inside a bucket finance does not have to fight for. Founders who invent a price almost always land below the budget the buyer was ready to spend.
Source: Fineas Silaghi, <https://indie.md/advice/discover-the-enterprise-budget/>

**On-prem is not SaaS with a different installer.** Once the software lives inside a customer network you lose live logs, hotfix freedom, and telemetry unless you explicitly negotiated for them. Support engineers spend materially more time per customer on debugging, upgrades, and escalations than any SaaS cost model captures. If on-prem is priced like SaaS, the first production incident eats the margin. The safe heuristic: model a realistic support load per customer per year, multiply by a loaded engineering rate, treat that number as the floor.
Source: Fineas Silaghi, <https://indie.md/advice/price-on-prem-for-support-cost/>

### For any buyer making a high-stakes decision

**Benchmark against the cost of the mistake, not your competitors.** If your product prevents a bad hire, a bad migration, or a compliance breach, price against what that failure costs. Competitor pricing tells you what the market tolerates; cost-of-mistake tells you what the buyer would pay to not be wrong.
Source: Flavius D., <https://indie.md/advice/benchmark-against-cost-of-mistake/>

### For SMB and consumer markets

**Tiered pricing unlocks hidden revenue.** Most founders leave money on the table by shipping one plan. Even two tiers (basic and pro) reveal that ~20% of users are happy to pay 2-3x for a feature cluster you were already building. Ship the cheapest tier that works so price-sensitive users can enter, and make the premium tier obvious.
Source: Vlad, <https://indie.md/advice/business-tiered-pricing/>

**Never discount your prices.** Discounts train buyers to wait. They damage positioning for the next customer who pays full. If you must move on price, adjust the tier, the term, or the scope instead, never the list price.
Source: Zoltan, <https://indie.md/advice/never-discount-prices/>

**Add a premium tier based on what customers ask for, not what you want to sell.** The premium tier that works is the one where existing users have already told you "I wish it did X." Build X. Price it 2-3x the base tier.
Source: Mircea, <https://indie.md/advice/business-premium-tier/>

### When the market does not exist yet

**Price so low it removes all friction.** Useful when you are building category awareness or fighting for first 100 users. A $19/year or $5/month price signals "try this without thinking" and lets you learn what people will actually use before you charge real money. Do not start here if you can credibly land inside an existing enterprise budget (step above).
Source: Raul, <https://indie.md/advice/business-ultra-low-price/>

## Workflow

1. Restate the buyer and the budget question in one sentence.
2. Pick the two or three lessons above that apply. Ignore the rest.
3. Produce a specific recommended number and a range around it.
4. Cite at least two founders by name when you present the recommendation, linking to the advice URL.
5. If the user objects on vibes ("that feels too high"), challenge with the discovery question: "what do they already pay for the adjacent thing?"

## Anti-patterns

- Cost-plus pricing without checking buyer budget.
- Matching the cheapest competitor.
- Treating on-prem like SaaS.
- Adding a discount coupon to "close faster." Close by adjusting scope or term instead.

## Source

All advice is extracted from real indie hacker meetups and journeys published at <https://indie.md/advice/business/>. The full corpus is available at <https://indie.md/llms-full.txt>.
