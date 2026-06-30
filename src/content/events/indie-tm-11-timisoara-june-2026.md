---
title: "Indie TM #11: An Intent Graph and the Hunt for Users"
subtitle: "What we learned at our eleventh meetup, back at DevPlant in Timisoara"
date: 2026-06-25
location: "DevPlant, Timisoara"
link: "https://luma.com/asjlh407"
image: "/images/events/indie-tm-11.jpeg"
presenters:
  - octavian-chis
  - raul
  - vali
---

The eleventh edition, back at DevPlant, ran lean: three builders, and a night that kept circling the same unglamorous problem. [Octavian](/people/octavian-chis) opened with Intersect, a tool that turns the question every meetup half-answers, who here is working on what, and who needs what, into a graph you can actually query. [Raul](/people/raul) soft-launched [ePolița](https://epolita.ro), now reshaped from an insurance funnel into a renewal-reminder app, and handed the room thirty users and a request to break it. [Valentin](/people/vali) closed by showing the head-to-toe redesign of [doesmyemail.work](https://doesmyemail.work), which had grown a personality since we last saw it.

If the tenth meetup was about reach, the eleventh was about the audience itself. Octavian's product is infrastructure for the scene to find each other, and both Raul and Valentin spent their slots on the same gap between a product that works and the people who are supposed to use it. The honest constraint kept surfacing in different costumes: a matching engine with too few people in it, a free beta with thirty users, a utility that had to make itself memorable to get noticed at all.

## Octavian maps the scene with Intersect

[Octavian](/people/octavian-chis) is one of Romania's original indie hackers, with more than two hundred projects behind him from years before the term meant anything locally, and Intersect is the kind of thing you build when you have spent that long watching builders talk past each other. The premise is a small protocol he calls an intent graph. Each person keeps a handful of cards across six types, what they are working on, what they need, what they can offer, what they are questioning, what they are thinking about, and what they have discovered, and an AI agent reads those cards to generate that person's profile so nobody has to write a bio.

From there the system does the introductions a room never gets around to making. It clusters the "working on" cards into projects and shows who gathers under each, with the shared topics as tags. It rolls every card up by topic and flags the ones where two or more people overlap. And the part that earns the name, it computes the intersections between people and ranks them by a semantic match score: a project that lines up with someone else's stated interest, two cards that share a tag, and the most valuable kind, a need on one side met squarely by an offer on the other. What is usually lost the moment a meetup ends becomes a queryable map.

:::advice{slug="model-intent-as-matchable-cards" category="product" title="Turn fuzzy intent into structured cards a machine can match" person="octavian-chis"}
A conversation about what everyone is building evaporates the moment the room empties out. Intersect keeps it by asking each person to file their intent as typed cards: what they are working on, what they need, what they can offer, what they are questioning, what they are thinking about, and what they have discovered. Once intent has a fixed shape instead of being buried in chat, software can do the introductions a busy human never gets to: cluster the projects, find the topics two people share, and pair a need on one side with an offer on the other. The general lesson is that matching people is only hard while the inputs are unstructured prose, so give the same information a small, fixed schema and the overlaps compute themselves. The next time you reach for a feed, ask instead what the handful of card types are, because typed intent is the thing a machine can actually act on.
:::

He was clear-eyed about what Intersect still needs, and none of it was a clever feature. He wants better semantic matching and a graph view to make the connections visual, but the real ask to the room was blunter: more users. An intent graph only produces a useful intersection once enough people have filled it, which is the catch underneath the whole idea.

:::advice{slug="matching-networks-are-dead-until-dense" category="business" title="A needs-and-offers network is worthless until it is dense" person="octavian-chis"}
Octavian named Intersect's real constraint without flinching: it is not a missing feature, it is a missing crowd. An intent graph only surfaces a useful intersection when enough people have added enough cards, so with a handful of users the cleverest matching engine finds almost nothing. This is the cold-start tax every marketplace and matching product pays, invisible in a seeded demo and brutal in the wild. The takeaway for anyone building two-sided or network-effect software is that the first job is density, not polish: seed the graph yourself, recruit the first cohort by hand, and only judge the product once it is full enough to fire. Until it is dense, the thing you are testing is not your algorithm, it is your ability to fill it.
:::

:::advice{slug="be-prolific-the-body-of-work-compounds" category="mindset" title="Be prolific, because a large body of small tools compounds" person="octavian-chis"}
Octavian has shipped more than two hundred projects, most of them small tools, since before anyone in Romania called this indie hacking. That volume is not noise, it is the strategy. Every finished tool sharpens your taste, widens the surface area where luck can land, and leaves behind an audience and a reputation that a single big bet never accumulates. Indie hackers tend to over-invest in one idea and agonize over whether it is the one, while the prolific builder simply ships the next thing and lets the portfolio do the arguing. You cannot predict which small tool finds its people, so the rational move is to keep the cadence high and let quantity manufacture both the quality and the lucky breaks. Longevity in this game looks less like one masterpiece and more like a long, unbroken streak of finished things.
:::

## Raul soft-launches ePolița

![ePolița homepage](/screenshots/epolita.png)

[Raul](/people/raul) brought [ePolița](https://epolita.ro) back, but the product had changed shape since the room last saw it. The earlier version was an RCA quote flow bolted onto an aging insurance domain; this one is a renewal reminder. A Romanian driver carries three recurring obligations that all sting if you forget them, the RCA mandatory liability insurance, the ITP roadworthiness inspection, and the Rovinieta road-use vignette, and ePolița tracks all three per vehicle, checks them against official sources, and nudges you by email and phone before each one lapses. It is sitting at about thirty users and free while it is in beta. Raul has kept it a deliberate soft launch, with no public announcement on social yet, and is letting it grow through the SEO channel while he gathers feedback and his first real cohort of users.

:::advice{slug="bundle-the-deadlines-people-dread" category="product" title="Productize the recurring deadlines people already dread" person="raul"}
ePolița's new shape is almost embarrassingly simple: a Romanian driver has three recurring obligations that all bite if you forget them, the RCA insurance, the ITP inspection, and the Rovinieta road tax, so ePolița tracks all three per vehicle and reminds you before each one expires. The product is not insurance, it is relief from forgetting, and the value is the avoided fine and the avoided last-minute scramble. There is a whole category hiding in the obligations people carry in their heads and resent: renewals, inspections, filings, subscriptions, anything with an expiry date and a penalty attached. Pull a set of those into one place, remind people reliably before the deadline, and you are selling peace of mind, which is one of the easiest things to charge for once the habit forms. Find the deadlines your users dread and miss, then become the thing that remembers for them.
:::

Because a soft launch is exactly when you want this caught, Raul asked for the roast, and the room obliged on polish rather than substance. Two notes landed. Kill the emojis scattered through the interface, the same tell Raul has been hunting out of his AI-generated copy for a couple of meetups now. And drop the colored left border on the cards, which reads as a default framework accent nobody chose rather than a deliberate design decision. Neither breaks anything, which is exactly why they matter before he opens the doors wider.

:::advice{slug="strip-the-tells-that-look-unfinished" category="product" title="Strip the small visual tells that make a product look unfinished" person="raul"}
The room's roast of ePolița was not about features, it was about two small tells: emojis sprinkled through the interface and a colored left border on the cards that read as a default framework accent rather than a deliberate choice. Neither breaks anything, and that is precisely why they are dangerous. They are the quiet signals that whisper "template" or "AI draft" to a user who cannot articulate why a page feels unfinished. Polish at this stage is mostly subtraction, removing the stock flourishes that come free with the tools you built on, because a stray emoji and an unconsidered accent border are the fastest way to look like everyone else's first draft. Walk your own interface hunting for the things you did not decide on purpose, and delete them. The credibility you need in a payment or trust flow is built out of exactly these small, unglamorous removals.
:::

## Valentin redesigns doesmyemail.work

![doesmyemail.work homepage](/screenshots/doesmyemail.png)

[Valentin](/people/vali) closed by showing what [doesmyemail.work](https://doesmyemail.work) had become. The function is the same one the room saw before, a free, no-signup check of whether your email is configured to reach the inbox or the spam folder, but the presentation had grown a whole personality. The new site is dressed head to toe as a postal inspection: you file an "inspection request" on Form DMEW-1, address an envelope with your domain, and the service opens and inspects it from the other end, with the count of firms it has already studied sitting under the field as proof.

:::advice{slug="wrap-a-dull-utility-in-a-familiar-metaphor" category="product" title="Wrap a dull utility in a metaphor people already understand" person="vali"}
Valentin's redesign of doesmyemail.work takes a dry technical chore, checking whether your mail authentication is set up so messages actually land, and dresses it as a postal inspection: you fill in an inspection request on Form DMEW-1, address an envelope, and the service opens and inspects it from the other end. The metaphor does real work beyond looking charming. It hands a non-technical user an instant mental model of an otherwise invisible process, and it turns a forgettable utility into something memorable and shareable. When your product does something abstract or intimidating, borrowing the language and imagery of a familiar real-world ritual can carry more of the explanation than any paragraph of copy. The craft is to choose a metaphor that genuinely maps to what happens, then commit to it everywhere, because a consistent little world is what turns a tool into a brand people remember.
:::

:::advice{slug="turn-your-data-into-credibility" category="distribution" title="Turn the data your tool collects into visible credibility" person="vali"}
The new doesmyemail.work leads with a number, thousands of firms studied, and frames part of the site as field research drawn from what the tool has measured across every domain it has checked. That is the quiet, compounding advantage of running a free utility: each check feeds an aggregate dataset nobody else has, and surfacing it turns your own usage into proof, content, and a reason to trust the verdict. A first-time visitor deciding whether to believe a deliverability score is reassured by "we have looked at thousands of these," and the same research doubles as link-worthy material that ranks. If your product generates data as a byproduct, do not let it sit in a table. Aggregate it, publish it, and let it work as both marketing and a moat. The tool earns the data, and the data earns the next user.
:::

## Eleven editions in, the cold-start problem

The thread under the night was the least glamorous one in the whole indie playbook: it is not enough to build the thing, you have to fill it. Octavian said it most directly, because Intersect cannot prove its worth until the room is in it, but Raul's thirty-user beta and Valentin's redesign are the same story told two other ways. One is recruiting the first cohort by hand, one is earning trust before a public launch by removing the tells that make a soft launch look unfinished and letting search bring the users in, and one is making a utility memorable enough that a stranger bothers to try it. The building keeps getting easier. The part where you go and get the users is still the work.
