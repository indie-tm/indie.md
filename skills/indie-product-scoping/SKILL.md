---
name: indie-product-scoping
description: Use when scoping a new product, choosing what to build next, or cutting v1 scope. Synthesizes nine product lessons from indie founders: build the simplest version first, remove all friction, start with a spreadsheet instead of a SaaS, treat manual curation as a moat, build from real client problems not speculation, check keyword demand before building features, set up analytics before scaling, record videos with your face in the corner, and build for a practice everyone agrees is right but nobody does. Do not use for architecture decisions, tech stack selection, or post-product-market-fit roadmapping.
---

# indie-product-scoping

A v1-scoping playbook for founders who tend to over-build. The goal is to get the smallest honest product in front of a paying user as fast as possible, and to make sure the features you do build are the ones the market has already asked for.

## When to use

- The user is scoping a new product or rewriting an MVP.
- The user is asking "what should I build next?"
- The user is deciding between features and cannot pick.
- The user is about to add a signup flow, billing, or admin UI before anyone has paid.

## When not to use

- Architecture or tech stack decisions. Those are downstream.
- Post-PMF roadmapping at 7+ figures ARR. Different game.
- Bug triage and sprint planning.

## The nine lessons

### Ship less than you think

**Build the simplest version first.** The v1 that gets a first paying user is always smaller than the founder believes. Every feature you ship before charging is a guess you did not need to make.
Source: Mircea, <https://indie.md/advice/product-simplest-version/>

**Remove all friction: no signup, no subscription.** If your product can be useful before a user creates an account, do not require one. Conversion to paid from "already got value" is an order of magnitude higher than from "clicked a signup".
Source: Mircea, <https://indie.md/advice/product-remove-friction/>

**Start with a spreadsheet, not a SaaS.** Most early-stage products can be faked with a Google Sheet, a Zapier, and a manual workflow. Do that for a month before you write code. If it works as a spreadsheet, it will work as software; if it does not work as a spreadsheet, software will not save it.
Source: Raul, <https://indie.md/advice/product-start-simple/>

### Make manual work your moat

**Manual curation is a moat, not a limitation.** Aggregators and marketplaces that curate by hand in their first 12 months ship a product competitors cannot copy because the competitors will not do the work. Automate only after the curation has been validated.
Source: Raul, <https://indie.md/advice/product-manual-curation/>

### Let the market choose the features

**Build from real client problems, not speculation.** The features that ship and the features that ship and make money are different sets. If you are speculating about a user need, stop and find someone who will say "I would pay for this today".
Source: Cristian Antohe, <https://indie.md/advice/build-from-client-problems/>

**Use search demand to decide what features to build.** Before building a feature, check whether anyone is searching for the outcome it produces. No search volume is signal, not noise. If nobody is searching, either the market is not there or you have to make the demand (much harder).
Source: Zoltan, <https://indie.md/advice/keyword-demand-before-features/>

**Build for a practice everyone agrees is right but nobody does.** Category-defining products often target a known best practice that is implemented badly or not at all: structured interviews, test coverage, accessibility, code review. The buyer already believes; they just need a tool that makes doing it realistic.
Source: Flavius D., <https://indie.md/advice/product-build-for-known-gap/>

### Instrument before you scale

**Set up analytics before scaling traffic.** If you drive traffic to a product with no analytics, you have learned nothing. Plausible or Fathom plus Search Console plus one event tracker before any launch. Not after.
Source: Zoltan, <https://indie.md/advice/analytics-before-scaling/>

### Production values that punch above their weight

**Record videos with your face in the corner.** Loom-style face-in-corner videos outperform slick studio production for indie products. Buyers want to see the founder. The ROI on a webcam and decent lighting is absurd.
Source: Raul, <https://indie.md/advice/video-content-face-in-corner/>

## Workflow

1. Restate the product in one sentence. If it takes more than one, the scope is too big.
2. Ask: could a spreadsheet do this for 10 users? If yes, recommend that first.
3. Ask: is there a real person who has said "I would pay for this today"? If not, stop.
4. Strip v1 to the single path that delivers the value. Everything else becomes v2.
5. Before any feature makes v1, confirm either: a real customer asked for it, search demand exists, or it is a known practice people fail to do.
6. Confirm analytics is wired before any launch.
7. Reject signup gates and payment gates that do not need to be there.

## Anti-patterns

- Building admin UIs, password reset flows, or billing before a first paying user.
- Adding features because competitors have them.
- Automating the manual curation step before it has proven the product.
- Launching without analytics.
- Polished marketing videos instead of face-in-corner founder videos.

## Source

Product corpus: <https://indie.md/advice/product/>. Full machine-readable corpus: <https://indie.md/llms.jsonl>.
