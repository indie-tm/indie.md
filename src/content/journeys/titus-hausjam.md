---
title: "HausJam: Start From the Room You Already Have"
subtitle: "How an applied scientist and a serial starter set out to build a planner that begins with a photograph, keeps a manual fallback next to every model, and may ship first as a cleaner that runs on your laptop"
person: "titus-nicolae"
date: 2026-08-18
lessons:
  - "Reopen the problem when the first assumption dies"
  - "Ship a manual fallback next to every model"
  - "Make the picture true before you make the picture fast"
  - "If the photo is the product, run the model on the laptop"
  - "Bill the person who gets the furnished room"
  - "Consumers furnish in projects, so price the project"
  - "A blank room is a bounce: ship a preset"
---

I have spent most of my working life reconstructing something the camera only partly saw. Competitive programming on [InfoArena](https://www.infoarena.ro) taught me to treat a problem as a set of constraints, not a vibe. [3Pillar](https://www.3pillarglobal.com) was Python and Django, a CMS, the ordinary web. [Intel](https://www.intel.com) was the opposite: getting neural networks to actually run, including the Movidius line of work. [Ring](https://ring.com) was LiDAR localization. [Smilecloud](https://smilecloud.com) was teeth, distances, segmentation, in-painting, the geometry of a smile from a single photo. [HausJam](https://hausjam.com), which I am building with [Andrei Statescu](/people/andrei-statescu), is what happens when that habit points at a living room instead of a jaw.

The product is easy to say and hard to finish. You take one photograph of a room. We try to recover enough of the 3D world that you can clean the clutter, drop in furniture, hang a poster, and believe the light. The public page still says we are opening soon. The prototype already does the embarrassing middle of that sentence.

![HausJam waitlist page](/screenshots/hausjam.png)

## The planner should start from your apartment

Most people already have a room. They have a photo of it on their phone. They want to know whether a sofa fits the wall they already own. That is the job I care about: a photograph that becomes a place you can furnish, not a blank box you invent and then fill.

So the first job is not a catalog. It is a photograph that becomes a place. From one image we estimate depth and field of view, guess object sizes (a door as a prior around 1.80 meters), segment the floor so we can talk about area, and run a lighting pass so a new chair does not look taped on. Cleaning the clutter takes about twenty seconds. Estimating light takes about twenty more. The model is large, eight or nine gigabytes, and a cold start is in that same twenty-second neighborhood.

What users respond to is not the list. They respond to putting an object into a picture of their own place. That is the product. The rest is the cost of not lying.

## Models lie. The UI has to admit it.

I keep having to reopen the problem I thought I had already framed. The floor estimate is off, so the sofa floats. The camera never saw the chair legs, so the 3D mesh is a blob. One photo is not a survey. Two or three help a floor plan, and we are still exploring that. Generation from images is good enough to visualize and not yet good enough to trust as millimeters.

The only honest architecture I know for that gap is a fallback next to every automatic step. Rotate the piece yourself. Push the furniture to the wall when the floor is wrong. Finish the hidden geometry by hand. We validate models before they touch a customer, because a pretty failure in a living-room screenshot is worse than a slow spinner. And I will keep saying this until it is boring: a good prompt still clears more issues than a fine-tune rushed into production.

:::advice{slug="reopen-the-problem-when-the-assumption-dies" category="mindset" person="titus-nicolae" title="Reopen the problem when the first assumption dies"}
Titus's working habit, carried from Intel, Ring, and Smilecloud into HausJam, is to treat a broken output as evidence that the problem was mis-stated, not as a request for a prettier model. If the floor is wrong, the task is no longer "place the sofa," it is "why did we believe this plane was the floor?" That sounds philosophical and is in fact operational: it stops a team from spending a month fine-tuning their way around a bad prior. The general rule for anyone shipping vision or geometry is to keep the original problem statement on a short leash. When the demo lies, rewrite the job, add the measurement you skipped, or change the input, two photos instead of one, before you buy another training run. Stubbornness belongs to the user outcome, not to last week's framing.
:::

:::advice{slug="validate-before-the-pretty-demo" category="product" person="titus-nicolae" title="Validate the model before you let it pose for the screenshot"}
HausJam can produce a room that looks finished and is still dimensionally untrustworthy, which is the most dangerous kind of demo. Titus's rule is to validate before production, before the screenshot, before the moment a founder falls in love with a render. Prompting, used carefully, still fixes more than a hurried fine-tune, and a human fallback is part of validation, not an admission of defeat. The lesson is wider than furniture: generative features fail by being persuasive. Build a check that can say no, a measurement, a held-out set, a person with a slider, and run it while you still have the nerve to throw the pretty output away.
:::

## Quality, then the compile pass

There is a speed story, and it is not the first story. Trends are real: pretrained world models, FP16 and BF16 and FP8, Torch.compile into something you can actually ship. Beginners can start on Supabase and Vercel; that is fine. None of it changes the order. We want a result you would show a partner. Then we make it fast enough for an old MacBook Pro with integrated graphics. Compatibility is a feature. A twenty-second wait is a feature you can improve. A wrong wall is not.

:::advice{slug="truth-before-torch-compile" category="product" person="titus-nicolae" title="Compile after the picture is true"}
The HausJam speed toolkit is the current fashion, quantization, Torch.compile, a model small enough to live in 4 to 8 GB, and Titus still refuses to lead with it. Twenty seconds to clean a room is annoying. A fast room that sells the wrong sofa is a refund and a screenshot on someone else's Slack. The same ordering applies to any generative consumer tool: pick the quality bar that makes the output a decision, then spend the engineering on latency. Hardware targets, including unfashionable integrated GPUs, belong in that second pass, not as an excuse to ship a blurry world. Users will wait a few seconds for a room they trust. They will not wait at all for a room they have already learned to doubt.
:::

## V0.5 is a cleaner that stays on the machine

The first shippable slice in my head is smaller than the planner. A room cleaner. On-device. No cloud invoice that grows with every photo. If we can run that on a wide range of laptops, including machines nobody would call a workstation, we have a product that can exist before the lighting model, before the catalog, before the photoreal final frame we have not built.

Steam is the distribution fantasy that is not entirely a fantasy: a worldwide B2C store that already knows how to charge consumers for software that is not a game. Mobile, at least for viewing, is on the list. Creative modes, furnished presets, style packs, layout variants, are how you stop the first session from being a blank box and a search bar.

The catalog question is the one that can kill us in a lawyer's office. Auto-filling a room from someone else's SKUs is not a growth hack until it is a license. We will not scrape our way into a furniture company. Assisted placement, an LLM that emits dimensions and objects as JSON, embeddings for style search, collision and spacing rules, those are the productive versions of "the software helps you furnish." Copying a catalog is not.

:::advice{slug="on-device-cleaner-before-the-cloud-planner" category="business" person="titus-nicolae" title="Ship the on-device slice before the cloud starts billing you"}
HausJam's expensive seconds are image passes, and image passes billed in the cloud will eat a consumer product the first week it works. Titus's V0.5 is deliberately smaller: a room cleaner that runs on the user's machine, inside a 4 to 8 GB memory budget if they can hold it, so the first useful magic has a marginal cost near zero. Steam then becomes a storefront for a tool, not a server bill in disguise. The pattern is the same one indie founders keep relearning with local models: put the wedge on hardware the user already owns, and let the cloud be an upgrade for the people who need the heavy lighting pass. If your v1 requires a GPU invoice on every photo, you do not have a consumer business yet. You have a demo with a fuse.
:::

## Who pays, and how often they furnish

Andrei and I would rather charge the person moving the furniture than the shop selling it. If the retailer pays, our cost lands in the price of the sofa and we become a marketing line they cut. A free try of about five pieces is enough to feel the trick. A ten-euro month with a room cap is the wrong shape: people furnish in bursts, a move, a child, a renovation, not on a calendar. Credits, a time-box on a room, a pack for an apartment, a five-room house in the 500 to 1,000 euro range with several layouts and product suggestions, a small lifetime offer for the first users, those match the job. Designers and agents can have a professional subscription. They are a different ICP, and possibly the one that actually pays. We will start in Romania, in cities like Timisoara and Cluj, because the math of ads versus willingness to pay looks less insane here than on a worldwide blank page.

A kitchen you can stand in still wins the last meter. AR and VR are good at a feeling. People still go and look at the real thing. White-label configurators for manufacturers only work if the 3D models are true. We do not have photoreal finals yet. Importing models is still partly handmade. I would rather say that in a room of founders than pretend the render is a measurement.

:::advice{slug="do-not-hide-in-the-retailers-invoice" category="business" person="titus-nicolae" title="Do not hide your price inside the retailer's invoice"}
Charging furniture sellers, or folding HausJam into the price of a sofa, looks like distribution and behaves like a tax the shop will resent. Titus and Andrei want the end user to pay, because that is who received a furnished room and who can understand a credit pack or an apartment project. Seller-pays also poisons the catalog: every SKU becomes an ad, and the planner stops being a tool. Keep the invoice on the side that gets the outcome. Retailers can still partner; they should not be the meter.
:::

## What I want the first stranger to feel

I want a person to open a photo of their own apartment, clean the junk off the floor, drop in a sofa, and not feel stupid. Presets so they do not start from zero. A fallback so they can shove the sofa to the wall when we get the floor wrong. A price that looks like a project, not like software they will forget to cancel. If the first version is only the cleaner, and it runs on their laptop, that is still a product. The planner can grow from a room that is already honest.
