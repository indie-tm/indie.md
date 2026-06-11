---
title: "Building Church Software Before I Wrote a Line of Code"
subtitle: "Why I picked a slow, offline, unglamorous niche, and why distribution is the part I am solving first"
person: "mile-rosu"
date: 2026-04-18
lessons:
  - "Pick the hard, offline, unglamorous niche on purpose"
  - "When the buyer is slow and offline, solve distribution before you write code"
  - "Nail one specific pain before you build the full suite"
  - "Recruit a friendly customer as a design partner and co-build"
  - "Sell into slow buyers on their timeline, not yours"
---

I am a software engineer who turned into a sales and marketing generalist, dad of one and co-founder of three, and I have sailed through the Java, WordPress, and Kubernetes seas. The thing I am building now is the least glamorous idea I have ever been excited about: a management app for churches. Congregation management, business operations, the whole administrative stack (schedules, memberships, donations, communications) that churches need and rarely have good software for. I brought it to Indie TM #6 as a concept, not a launched product, and the room did exactly what I hoped it would do. It found the real problem fast, and the real problem is not the code.

## Why a church management app, of all things

Churches are transaction-heavy organizations. They run schedules, track memberships, collect donations, and send communications, week after week, and most of them do it without software built for the job. The niche is real, the demand is steady, and almost nobody is building software specifically for it. That combination is exactly what attracts me. The stack I started with is Laravel and Alpine.js, deliberately boring and productive, because the interesting risk here was never going to be technical.

I want to be honest about the stage: this is a concept in progress. There is no public URL, no launched tool, no customers, no revenue yet. I am writing this from the starting line, not the finish, and that is the whole point of telling the story now.

:::advice{slug="choose-the-unglamorous-offline-niche" category="mindset" person="mile-rosu" title="Choose a hard, offline, unglamorous niche on purpose"}
Mile deliberately picked church management software, an offline, slow-moving, decidedly unglamorous niche, because that is precisely what keeps casual competitors away. Nobody is racing to pitch a church admin tool at a demo day, which leaves the field open to whoever is patient enough to learn the domain. A transaction-heavy organization with no software built for it is a genuine opportunity hiding behind a boring label. The unglamorous niche is not the consolation prize, it is the one a committed builder can own while everyone else chases something shinier.
:::

## The hard part is distribution, and I am solving it first

The moment I finished pitching, the room zeroed in on the thing I already suspected: distribution. Churches do not move fast. Buying cycles are long. Decision-makers are not hanging out on Product Hunt, and they are not going to discover my tool from a launch tweet. If I build the whole product first and then go looking for buyers, I will have spent months on something I cannot easily put in front of the people who would pay for it.

So I am inverting the usual order. Instead of writing the software and then worrying about how to sell it, I am working out the distribution path while the product is still mostly a concept. Who actually decides, how long the decision takes, which channel a church will trust, and what the first reference customer looks like. When the buyer is this slow and this offline, that sequencing is not premature, it is survival.

:::advice{slug="distribution-before-code-for-slow-buyers" category="distribution" person="mile-rosu" title="When the buyer is slow and offline, solve distribution before you write code"}
For Mile's church software, the hard problem is not building it, it is reaching buyers who move slowly, decide over long cycles, and are nowhere near Product Hunt. When the buyer is that offline, distribution cannot be an afterthought you bolt on at launch, because there is no quick launch channel waiting for you. Map the path to the buyer (who decides, how long it takes, which channel they trust) while the product is still a concept, and let that path shape what you build. Writing all the code first and discovering you cannot reach anyone is the most expensive order to do it in.
:::

## One pain point, not the whole suite

My instinct, like every engineer's, was to imagine the full management suite: scheduling, memberships, donations, communications, all of it, beautifully integrated. The room pushed hard against that. Instead of building the entire stack, find one specific pain a church actually feels and solve that first. Billing? Scheduling? Member communication? Pick one and nail it before you so much as sketch the rest.

The risk they kept naming was the one I most needed to hear: building something too generic for a niche that needs something very specific. A church does not want a vague all-in-one platform. It wants the one annoying thing fixed. I genuinely believe in finding one pain point before building the full suite, and saying it is easy. Resisting the suite when you can already picture it is the hard discipline.

:::advice{slug="narrow-to-one-pain-before-the-suite" category="product" person="mile-rosu" title="Nail one specific pain before you build the full suite"}
Mile's instinct was the full church management suite (scheduling, memberships, donations, communications) and the room talked him down to one pain point first: billing, or scheduling, or member communication, solved completely. The biggest risk in a specific niche is building something too generic to be worth switching to, a vague all-in-one that fixes nobody's actual Monday. A narrow tool that ends one real misery gives a buyer a concrete reason to say yes, and a wedge you can expand from later. Decide which single pain you will own, finish that, and earn the right to the suite instead of assuming it.
:::

## Co-design with a friendly church

The most practical advice was about how to get the product right at all. Find a friendly church, one contact who is willing to work with you, and co-design the product with them as a design partner. Do not build in a vacuum and hope you guessed the workflow correctly. Build alongside someone who lives the problem, who can tell you that the donation flow you imagined does not match how their treasurer actually works, or that the schedule they care about is the one I would never have thought to model.

For early feedback, the channels are humble and offline, matching the buyer. WhatsApp groups and local community channels, not a polished beta program. And the people to target are the ones who already handle the tech: the church IT contact, or the volunteer who quietly keeps the website and the spreadsheets running. They are the bridge into an organization that would otherwise be very hard for a stranger to enter.

:::advice{slug="recruit-a-design-partner-to-co-build" category="product" person="mile-rosu" title="Recruit a friendly customer as a design partner and co-build"}
Rather than guess at church workflows from the outside, Mile's plan is to recruit one friendly church as a design partner and build the product alongside them. A design partner who lives the problem corrects your wrong assumptions before they become wrong code: the donation flow that does not match how the treasurer works, the schedule you never thought to model. For early feedback, meet the buyer where they already are, in WhatsApp groups and local community channels, and target the people who handle the tech, the church IT contact or the volunteer keeping the spreadsheets alive. Co-building with one real customer beats a polished product designed for an imaginary one.
:::

## Selling on their clock

There is a deeper thing about this market that I keep circling back to. Trust in a church does not run on my timeline. I can want a fast sale, but the church is going to decide when the church decides, after the people involved have talked it over, vetted me, and felt comfortable. Pushing against that rhythm only signals that I do not understand the buyer. The right move is to sell on their clock, show up patiently, and let the slow buying cycle be a feature of the relationship rather than a frustration.

This is where being a generalist helps more than I expected. I am an engineer who can also sell, which in a market this slow is a genuine edge. I can sit with a church contact and talk about their real administrative pain in their language, then go build the fix myself without a handoff, then come back and adjust it after they have used it. The engineer who only codes needs someone else to find and hold the customer. The salesperson who cannot build needs an engineer to make anything real. Being both, in a niche that rewards patience and a personal relationship, is the unfair advantage I am betting on.

:::advice{slug="sell-on-the-buyers-timeline-not-yours" category="distribution" person="mile-rosu" title="Sell into slow buyers on their timeline, not yours"}
Churches buy slowly, so Mile's sale runs on the church's clock, not his own preference for a fast close. In a slow-moving, relationship-driven market, pushing for speed reads as not understanding the buyer, while patient, in-person presence reads as someone worth working with. The long buying cycle is not a bug to fight, it is the texture of the relationship, and accepting it is part of the qualification. Show up, build the relationship the organization needs, and let the deal close when the buyer is ready instead of when your roadmap wants it to.
:::

## The generalist bet

I do not have a launch to report, a metric to brag about, or a URL to send you to. What I have is a concept I believe in, a clear-eyed read on why it is hard, and a plan that puts the hardest problem (reaching a slow, offline buyer) before the easy one (writing Laravel). At Indie TM #7 I chimed in on a completely unrelated SEO talk to point out a new Romanian law about inspecting mandatory home insurance policies, the kind of slow, rule-bound detail most people tune out. It is the same instinct that drew me to churches: the unglamorous, rule-bound, slow corners of the world are where a patient generalist who can both build and sell can quietly make something nobody else wanted to bother with.
