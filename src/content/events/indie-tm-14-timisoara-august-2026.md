---
title: "Indie TM #14: One Photograph, Then the Furniture Moves"
subtitle: "What we learned at our fourteenth meetup, where Titus Nicolae and Andrei Statescu opened HausJam and the room argued about who should pay"
date: 2026-08-06
location: "Cowork Timisoara - The Office, Timisoara"
link: "https://luma.com/mpcce9wi"
image: "/images/events/indie-tm-14.jpg"
presenters:
  - titus-nicolae
  - andrei-statescu
---

Two weeks after [Andrei Statescu](/people/andrei-statescu) let the room redesign [Naramine](https://naramine.app) on the spot, he walked back into Cowork with a cofounder and a different product. [Titus Nicolae](/people/titus-nicolae) is the applied scientist; Andrei is the starter we already knew. Together they are building [HausJam](https://hausjam.com), a room planner that wants the seriousness of a professional IKEA-style layout tool and the ease of dropping furniture into a photograph of the apartment you already have. The public site still says opening soon. The evening did not: we watched a room get cleaned, a sofa get pushed, a wall take a poster, and a lighting model try to make the result look like it belonged there. The full first-person story is in [Titus's journey](/journeys/titus-hausjam); this recap is what the room did to the plan.

![HausJam waitlist page, still opening soon](/screenshots/hausjam.png)

## An applied scientist shows his homework

Titus introduced himself the way a research resume actually reads, as a stack of geometries. Competitive programming on [InfoArena](https://www.infoarena.ro). Python and Django at [3Pillar Global](https://www.3pillarglobal.com). Research at [Intel](https://www.intel.com) on getting neural networks to run, including the Movidius line of work. LiDAR localization at [Ring](https://ring.com). Then dental AI at [Smilecloud](https://smilecloud.com), distances between teeth, segmentation, in-painting, the unglamorous math of a face. HausJam is what you build when that career finally points at a living room: take one 2D photo, recover enough of the 3D world to move furniture inside it, and do it with enough realism that a renter can decide before they buy.

The product metaphor the room reached for, and that Titus did not dodge, was the IKEA room planner, the one that already taught a generation to drag a kitchen around a grid. HausJam's bet is that the grid should start from the room you have, not from a blank rectangle you measure with a tape.

## Clean the room, then put the sofa back

The demo was a sequence of jobs that sound like one feature and are not. From a photograph you can remove the clutter, a twenty-second "clean the room" pass. You can place furniture and nudge it. The model estimates depth, field of view, and object sizes, a door as a prior around 1.80 meters, and it tries to segment the floor so you get an area, not just a pretty overlay. You can hang a poster on a wall. A second pass, another twenty seconds, estimates the lighting so the new objects do not look pasted on. The model behind it is large, eight or nine gigabytes, and a cold start is about twenty seconds.

What the room liked immediately was the interaction, not the pipeline: you put an object into a photo of a real place. That is the sentence a landing page can steal. Everything else is the cost of making that sentence honest.

The honesty has limits, and Titus named them. Generating 3D from photographs is promising for visualization and still weak for millimeters. Objects with messy geometry, or with legs the camera never saw, need a human to finish. A floor plan gets better with two or three photos, and that path is still being explored. Dimensional truth and a convincing picture are different products wearing the same screenshot.

## When the floor is wrong, push the sofa to the wall

The technical moral of the night was not a model name. It was a workflow. First assumptions about the problem keep dying, so you reopen the problem instead of decorating the failure. Every automatic step needs a manual fallback: rotate the piece yourself, shove the furniture to the wall when the floor estimate is off. Validate a model before you let it touch a customer. Prompting, used well, still solves more than a fine-tune often will. Quality comes first; speed is a later pass, Torch.compile and the usual quantization alphabet, FP16, BF16, FP8, once the output is something you would show a stranger.

:::advice{slug="ship-a-manual-fallback-beside-the-model" category="product" person="titus-nicolae" title="Every automatic step needs a manual shove"}
HausJam estimates a floor, then places furniture on it, and the estimate is sometimes wrong enough that a sofa floats or sits in the aisle. The product's answer is not a better apology, it is a fallback: rotate the piece by hand, push it to the wall, finish the hidden chair legs the camera never saw. Titus treated that pair, model plus shove, as the design, not as a temporary shame until the model is perfect. Vision products fail in public, in the screenshot the user was about to send to a partner, and a slider that corrects the lie is the difference between a demo and a tool. If your pipeline infers the world from a photo, budget the correction UI in the same sprint as the inference. Users forgive an estimate they can fix. They do not forgive a beautiful room they cannot trust.
:::

:::advice{slug="quality-first-then-make-it-fast" category="product" person="titus-nicolae" title="Make the picture true before you make the picture fast"}
The HausJam stack has a speed roadmap, quantization, Torch.compile, a model that should eventually run on integrated graphics, including an old MacBook Pro, but Titus ordered the work the opposite of the usual launch panic: get the output good enough to decide a sofa, then spend the compile pass. A twenty-second clean and a twenty-second lighting estimate are painful, and still less damaging than a fast room that sells the wrong dimensions. The beginner-friendly web stack came up too, Supabase and Vercel as a default, and it did not change the order. Latency is a product problem you can profile. A wrong world is a product problem you cannot refund with a spinner. Ship the quality bar that makes the screenshot honest, then attack the seconds.
:::

## Run it on the laptop if you can

Cloud cost sat under every feature. Cleaning a room and estimating light are the expensive seconds. Memory budgets of four to eight gigabytes came up as a constraint, not a flex. The near-term wedge they kept returning to is a small V0.5, an on-device room cleaner, no recurring GPU bill, wide hardware compatibility, even the unfashionable integrated GPU. On-device is not a privacy slogan here. It is how a consumer tool avoids dying of inference invoices.

:::advice{slug="run-the-room-model-on-device" category="business" person="titus-nicolae" title="If the photo is the product, run the model where the photo already lives"}
HausJam's two heavy passes, about twenty seconds to clean a room and twenty to estimate light, are the line items that would destroy a consumer margin the moment traffic arrives. Titus's preferred answer is to run the first useful slice on the user's own machine, an eight or nine gigabyte model that cold-starts in about twenty seconds and, if they can pull it off, still works on integrated graphics. That is the same economic move Naramine made with in-browser Kokoro, applied to furniture: the free or early tier brings its own compute, and the cloud becomes an upgrade rather than the default. When your unit of value is an image the user already has, ask whether that image ever needs to leave the laptop. Recurring GPU rent is a tax on success. Hardware the user already paid for is not.
:::

Presets showed up as the UX twin of that discipline. A blank room is a tax on taste. Give people a furnished starting point, a modernist pack, a layout variant, something that is not an empty grid, or the first session dies in the catalog search. Subscription tiers, when they exist, have to be obviously different, not the same product with a padlock.

:::advice{slug="never-start-them-in-an-empty-room" category="product" person="andrei-statescu" title="A blank canvas is a bounce. Ship a furnished preset."}
The IKEA planner and The Sims both understood a thing HausJam cannot ignore: people freeze in an empty box. The room's product note was to meet the user inside a preset, a styled room, a starter layout, a handful of pieces already placed, so the first action is a nudge rather than a search through a catalog they do not yet trust. That is also how you show the paid tier without a feature matrix, because a free preset that looks finished and a paid pack with more rooms or more styles is a difference you can see. Generative tools keep making the same onboarding error, they hand over the engine and call it empowerment. Empowerment is a furnished example and a control you can drag. The empty grid is where taste goes to die.
:::

## Charge the person who moves the sofa

Then the night became a pricing workshop, which is what happens when the demo works. The first proposed ICP was the end user with no designer budget, the person arranging an apartment on evenings and weekends. The room pushed back, politely and hard: designers and real-estate agents might be the ones who can actually pay. Geography was more agreed. Start in Romania, in cities that already buy this kind of tool, Timisoara and Cluj, with local ads and local offers, because acquisition cost versus willingness to pay looks sane here before it looks sane on a worldwide landing page.

Distribution ideas piled up faster than validation. [Steam](https://store.steampowered.com) as a worldwide B2C store for a tool that is not a game. Flyers with a QR code in furniture shops. SEO through product lists, if the lawyers allow it. Romanian influencers and a few high-end brands. Local manufacturers, Cluj, Iasi, Bucharest, with an approval rate around thirty percent in early outreach, and the unsolved problem of nationwide delivery. Mobile was a maybe, at least for viewing.

The legal note under the catalog talk was the one that should have been louder: IKEA's catalog is not a free training set, scraping is not a growth channel, and "we will auto-furnish from their SKUs" is a sentence you run past counsel before you run it past a landing page.

Monetization, as they sketched it, charges the person using the tool, not the furniture seller. Putting HausJam's cost into the price of a sofa is how you become a line item a retailer resents. A free tier that lets you test about five pieces. A ten-euro monthly cap with a room limit got voted down as the wrong shape for a consumer who furnishes in bursts. Better shapes: credits you top up, a time-box per room or per project, a pack for an apartment, a five-room house package in the 500 to 1,000 euro range with several layout variants and product suggestions, a limited lifetime deal for the first users. Professionals would get a separate, more expensive subscription because their volume is a different business. Photoreal final frames and clean model imports still mean manual work. None of that is shipped.

:::advice{slug="charge-the-person-who-moves-the-sofa" category="business" person="andrei-statescu" title="Bill the person who gets the furnished room, not the shop that sold the sofa"}
One tempting HausJam model is to charge furniture sellers for placement in the catalog, or to fold the tool into the retailer's price so the consumer never sees a bill. The room, and the founders, preferred the opposite: the person arranging the apartment pays, because that is who receives the value and who will feel a credit pack as fair. Seller-pays sounds like distribution and behaves like a tax on the catalog. It also trains the retailer to treat your software as a marketing cost they will cut the first slow month. Consumer-pays keeps the incentive clean, five free pieces to try the magic, then credits or a project pack when the room is real. If you are building a tool that sits between a shop and a household, pick the side that cannot confuse your invoice with a listing fee.
:::

:::advice{slug="price-the-apartment-not-the-month" category="business" person="titus-nicolae" title="Consumers furnish in projects. Price the project."}
A ten-euro subscription with a handful of rooms was on the table and did not survive contact with the room. People do not rearrange an apartment every month; they do it in bursts, a move, a renovation, a new child, and a calendar tax on the quiet months is the same mistake Naramine refused for web-novel binges. What survived were project-shaped offers: credits you top up, a time-box on a room, a pack for one apartment, a five-room house in the 500 to 1,000 euro range with several layouts, maybe a lifetime deal for early users with a room cap. Professionals can still have a seat price, because their week is volume. Consumers need a price that matches a job they will finish. Before you copy a SaaS page, ask how often the job happens. If the answer is "twice a decade," you are not selling a seat.
:::

## Also in the room

HausJam took most of the evening. Two other builders still got a slice, and both landed on the same unfashionable constraint: the buyer wants control more than they want your modern default.

One is a booking tool for barbershops, aimed at shops that do not want [Fresha](https://www.fresha.com). Three roles, administrator, owner, barber, and a calendar that refuses overlaps. The shops asked for a one-time price, on the order of 1,000 lei, not another subscription, and for a tiny site with prices on the first screen. Online self-booking is deliberately unbuilt, because the barbers want to accept or refuse a slot. White-label packages are possible. Google Business registration is the unglamorous boss fight.

The other is a warm-lead searcher: import LinkedIn contacts (manual export, because scraping is expensive and brittle) and Gmail (the API is open, the certifications are not), then draw the graph and enrich education and work. Tested ICPs included coaches, recruiters, and founders. Some prospects arrive with 40,000 or 50,000 contacts. Enrichment around 100 dollars. Personalized outreach with a model. A "find a warm intro path" feature still to come. The blockers were the usual ones, data access, compliance, a segment sharp enough to price.

Embedded and automotive came up at the end, microcontrollers, real-time constraints, safety standards, and a curiosity about using today's models to generate firmware and to prototype IoT and smart-home boards. It was a reminder that this room is not only SaaS.

## Fourteen editions in

Edition thirteen was a pre-mortem on a browser extension two weeks from strangers. Edition fourteen was the same format pointed at a darker problem: a model that has to reconstruct a room well enough that someone spends money on a sofa. Andrei was not supposed to be the encore so soon, and it worked, because he did not bring the same company. He brought a cofounder, a photograph, and a list of prices the room was happy to tear up.

What the room gave them was a filter. Fallbacks before fidelity. On-device before a cloud invoice. A furnished preset before a catalog. A bill for the person who moves the furniture, shaped like a project, not like a seat. What they gave the room was a catalog of applied-science habits worth stealing: reopen the problem when the first assumption dies, validate before the demo, and treat a twenty-second wait as cheaper than a wrong dimension. The site still says opening soon. The prototype is already arguing with a table of founders. See you at the fifteenth.
