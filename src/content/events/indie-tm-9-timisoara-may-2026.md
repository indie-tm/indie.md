---
title: "Indie TM #9: Six Demos and a BYOK Debate"
subtitle: "What we learned at our ninth meetup at Cowork Timisoara"
date: 2026-05-28
location: "Cowork Timisoara - The Office, Timisoara"
link: "https://luma.com/0u8o9k9b"
presenters:
  - raul
  - mircea
  - doru-bota
  - vali
  - petru-popa
  - ionut
---

A Thursday evening built as a show and roast: six builders, each putting a live product on the screen and asking the room to break it. [Raul](/people/raul) bolted a car-insurance flow onto a domain we already knew. [Mircea](/people/mircea) turned tax anxiety into a landing page and then mined his own Search Console for content. [Doru](/people/doru-bota) brought a dental booking platform and walked into the one constraint that matters when you store medical data. [Valentin](/people/vali) showed a tool that tells you whether your email is reaching the inbox at all. [Petru](/people/petru-popa) had two stories: photorealistic 3D property tours, and a cloud bill he beat into submission. [Ionut](/people/ionut) closed the demos with the most different project of the night, a synth he sells as a one-person studio. Then the room converged on the question every AI builder there had hit: should users bring their own key?

The thread running under all of it was quieter. The products that landed hardest were the ones selling relief from a specific, expensive pain, and almost every roast was a variation on one question: how much friction are you allowed to put between a user and that relief?

## Raul adds an RCA flow to epolita.ro

![epolita.ro homepage](/screenshots/epolita.png)

[Raul](/people/raul) opened by going back to [epolita.ro](https://epolita.ro), the Romanian insurance domain he walked the room through last time. The story then was traffic. This time it was a product: he had built a full RCA quote flow into the site. RCA (Raspundere Civila Auto) is Romania's mandatory car-liability insurance, a renew-on-a-schedule purchase every driver in the country has to make, which makes it a steady, high-intent search market sitting right next to his existing pages.

The clever part was the onboarding. Instead of asking a driver to transcribe a dozen fields from their car registration and current policy, [Raul](/people/raul) lets them upload a photo. OCR reads the document and pre-fills the form. He had also leaned on [TypeUI](https://typeui.sh), the design-skill CLI [Zoltan](/people/zoltan) demoed back at the sixth meetup, to make the flow look finished, and he mentioned updating one of his AI skills to stop adding emojis to generated copy, because the stray emoji is the fastest tell that a page was written by a machine.

:::advice{slug="ocr-upload-cuts-onboarding-friction" category="product" title="Let users upload a photo instead of filling a form" person="raul"}
When your onboarding asks for data the user is already holding on a card or a document, do not make them transcribe it. Let them photograph it and run OCR to pre-fill the fields. Raul's RCA flow replaces a dozen manual inputs with a single photo of the car registration and the current policy, and every field removed before the user sees value is a measurable lift in completion. The pattern generalizes to anything printed: an invoice, an ID, a label, a receipt. The cost of an OCR pass is now low enough that asking the user to type what a camera could read is a friction you are choosing to keep.
:::

The sharpest roast was about the call to action. The button promised to "see the price," but clicking it did not show a price; it pushed the user one step deeper into the funnel. A CTA that says "see the price" and then does not show a price is a small dishonesty, and small dishonesties teach users not to trust the next button. The room's note was blunt: either show the price there, or label the button for what it actually does.

## Mircea turns ANAF anxiety into a product

![renzi.ro homepage](/screenshots/renzi.png)

[Mircea](/people/mircea) showed [renzi.ro](https://renzi.ro), a property-management SaaS for Romanian landlords. It centralizes the unglamorous parts of renting out apartments: rent and payment tracking, utility invoices, contracts, document storage. The feature that actually sells it is the tax one: Renzi pre-fills the Declaratia Unica, the unified annual tax declaration (Form 212), ready to submit in ANAF's online SPV portal.

The positioning is the lesson, and it is the opposite of a feature list. The homepage leads with a number: one ANAF fine costs as much as two years of Renzi. That framing does a lot of work, and it is worth being precise about why, because the literal statutory fine for an unregistered rental contract is small (50 to 500 lei). The real exposure is everything behind it: retroactive back-tax at the 10 percent flat rate on the rent you failed to declare (levied on 80 percent of gross, after the 20 percent standard deduction that replaced the old 40 percent one in 2023), plus daily interest and late penalties, plus ANAF's own and usually higher estimate of what you owe, plus the account garnishment that can follow. For 2026, ANAF has more visibility than ever, pulling signals from banks and from platforms like Airbnb and Revolut. Renzi sells relief from that whole stack of consequences and prices itself at a rounding error next to it, roughly 22 to 89 lei a month. [Mircea](/people/mircea) also credited an AI copywriting workflow for the site's copy, which is how a one-person marketing budget produces a page that reads like it had a copywriter.

:::advice{slug="anchor-price-on-the-pain" category="business" title="Anchor your price against the cost of the problem" person="mircea"}
When your product removes a specific, expensive risk, price it against that risk, not against competitors or hours saved. Renzi's homepage leads with "one ANAF fine costs as much as two years of the app." The honest version of that math is not the modest statutory fine but the full exposure it stands in for: retroactive tax on undeclared rent, daily interest and penalties, and the tax authority's own estimate of what you owe. Against a number that large, a subscription of a few tens of lei a month is a rounding error, and the pricing objection mostly disappears. Find the worst outcome your product prevents, do that math out loud on your landing page, and let it dwarf your price.
:::

Then the SEO half. [Mircea](/people/mircea) walked through a script he wrote against the Google Search Console API: pull every query and the page it landed on, dump it to CSV, and group the rows by their shared parent term to expose keyword gaps. The room recognized the move. The API returns far more than the dashboard does (up to 25,000 rows a call against the UI's thousand or so), which is what makes the gap analysis possible. He had also been chasing a high bounce rate and had started addressing it, which is the right reflex: there is no point pouring traffic into a page people leave immediately.

:::advice{slug="mine-search-console-for-content-gaps" category="seo" title="Mine your own Search Console data for content gaps" person="mircea"}
Your Google Search Console data already tells you what Google thinks you rank for, in your users' real words, for free. Pull the full query-and-page table from the Search Console API (it returns up to 25,000 rows per call against the dashboard's thousand or so), then look for two signals. First, striking-distance keywords: queries where you sit in positions four to twenty with plenty of impressions but a weak click-through rate. Google already considers you relevant, and nudging one of those pages from position twelve to position six can multiply its traffic. Second, content gaps: cluster the queries under their shared parent term, and any cluster with real impressions but no dedicated page is a pre-validated brief for an article you have not written yet. It is the cheapest, highest-signal SEO loop there is, and it needs no paid keyword tool.
:::

## Doru shows Dentor, and the room finds the real constraint

![dentor.ro homepage](/screenshots/dentor.png)

[Doru](/people/doru-bota) presented [Dentor](https://dentor.ro), an appointment-scheduling and practice-management platform for dental clinics. Patients book 24/7 through a personalized link, the system sends automated SMS and email reminders, and the practice gets centralized patient records and an auto-generated website. The pitch is operational: fewer phone calls, fewer no-shows, priced at 245 lei a month. He also mentioned a WordPress plugin as part of how clinics would adopt it.

The roast came in three layers, from cosmetic to existential.

The first was diacritics, an old Romanian-web argument. The practical answer the room landed on: keep diacritics in the content a human reads (body copy, headings, titles), because Google treats "programari" and "programări" as equivalent so there is no ranking penalty, and correct Romanian reads as more credible. Strip them from the things a machine parses: URL slugs, file names, image alt text, where encoding quietly breaks links and tooling. This is the dominant practitioner recommendation rather than settled science (you can find Romanian SEOs who argue the other way), but the split between reader-facing content and machine-facing identifiers is the safe default.

:::advice{slug="diacritics-in-content-not-urls" category="seo" title="Keep diacritics in your content, strip them from your URLs" person="doru-bota"}
On a Romanian site, the diacritics question has a practical answer. Google treats "programari" and "programări" as equivalent, so writing correct Romanian with diacritics in your body copy, headings, and titles carries no ranking penalty and reads as more credible to a human. Where diacritics genuinely cause trouble is in URL slugs, file names, and image alt text, where encoding breaks links and tooling. So the rule most Romanian practitioners settle on: diacritics in the content the reader sees, none in the identifiers the machine parses. The same logic applies to any language with accented characters.
:::

The second was the demo video. Dentor already has a roughly two-minute "see how it works" video; the note was about placement. Put the video above the fold next to the headline and the booking CTA, run it as click-to-play with a strong poster frame rather than sound-on autoplay (which browsers block and mute anyway, especially on mobile), keep it short, and never let the video push the primary CTA below the fold. The video supports the booking button; it should never displace it.

The third was the existential one. The moment Dentor stores diagnoses, treatments, and dental imaging, it is processing special-category health data under Article 9 of the GDPR. That is prohibited by default and permitted only on a specific lawful basis, typically the provision of health care or the patient's explicit consent, and it carries a higher bar of safeguards than ordinary personal data. Someone in the room pointed at [universulfiscal.ro](https://universulfiscal.ro) as a local example of surfacing explicit processing consent at the point of data entry, the kind of pattern a health-data product needs front and center rather than buried in a policy page.

:::advice{slug="health-data-compliance-is-engineering" category="product" title="For health data, compliance is an engineering posture, not a badge" person="doru-bota"}
The moment your product stores diagnoses, treatments, or medical images, you are processing special-category health data under Article 9 of the GDPR, which is prohibited by default and allowed only on a specific lawful basis such as the provision of health care or explicit consent. That triggers a higher bar than ordinary personal data: a data protection impact assessment, encryption and pseudonymization, access limited to staff bound by confidentiality, and a signed data-processing agreement that makes you the processor to each clinic's controller. A "GDPR Compliant" badge on the landing page is marketing; for health data it has to be a documented engineering and legal reality. When you build a vertical SaaS that touches a regulated data class, the binding constraint is not your feature set, it is the data class, and you should design for it from the first table you create.
:::

## Valentin checks whether your email actually lands

![doesmyemail.work homepage](/screenshots/doesmyemail.png)

[Valentin](/people/vali) showed [doesmyemail.work](https://doesmyemail.work), a free, no-signup tool that answers a plain question: does my email reach the inbox or the spam folder? You hand it a domain and it scans your SPF, DKIM, DMARC, and MX records, then explains in plain English what is broken (SPF as "does your domain say yes, I sent this," DKIM as "are your emails signed," DMARC as "do you have rules for handling fakes"). It then offers a second, active check: send a real test email to a seed address to confirm mail actually flows end to end.

He was candid that the tool is the top of a funnel, not the business. The plan is lead generation, a WordPress plugin, and a first launch post on LinkedIn. That sequence is well worn for a reason: the whole email-deliverability category gives away the check because running it is itself an admission of a problem the same vendor sells the cure for.

:::advice{slug="free-tool-as-top-of-funnel" category="distribution" title="Ship a free tool as the top of your funnel" person="vali"}
A narrow, free, no-signup tool that solves one frequently-Googled problem is not charity, it is a lead magnet. The whole email-deliverability category (mail-tester, GlockApps, Warmy) gives away the check because running it is itself an admission of a problem the same vendor sells the fix for: it self-qualifies warm prospects and ranks for high-intent queries like "does my email go to spam." The indie sequence is to ship the magnet first, let it accumulate search traffic and word of mouth, and only then bolt on the paid layer (monitoring, a plugin, a done-for-you fix). The catch the room raised: a magnet only works if activation is effortless, so the single most important screen is the one where the user gets their answer.
:::

That last point became the roast. The active-check step is where the tool gets brittle on a phone: it shows a seed address with a "Copy" button and asks you to switch to your mail app and send a message to it, and the hand-off from a browser tab to a native mail client is exactly where mobile users lose the thread. The room's fix was concrete: replace the copy-and-switch dance with a single "send test email" action, a mailto link that pre-fills the recipient and ideally the subject and body, collapsing two taps and a paste into one tap. The activation moment is the one screen you cannot afford to make fiddly.

## Petru shows 3D tours, then a cloud bill he beat into submission

![realoria.com homepage](/screenshots/realoria.png)

[Petru](/people/petru-popa) brought two things. The first was [realoria.com](https://realoria.com), branded Oria: photorealistic 3D property tours that it pitches as Google Street View quality but for interiors, built on Gaussian Splatting, the rendering technique that has been quietly taking over real-estate walkthroughs. The tours run in any browser at over 100 frames per second with no app to install, and turnaround from filming to a delivered tour is 48 to 72 hours. The studio service starts at 350 euros per property, with a self-serve version (film it on your own phone) slated for later in the year.

The second was a war story. [Petru](/people/petru-popa) told the room he had taken one project's infrastructure bill from around 24,000 dollars a month to roughly 600. He did not frame it as a single trick, and that restraint is the lesson. A cut that large is almost never one switch; it is finding the pricing model that punishes your specific workload and escaping it. The usual suspects are all per-unit charges that a fixed-price box gives away for free: per-request serverless invocations (where you also pay for cold starts), per-gigabyte egress (hyperscalers charge nine to fifteen cents a gigabyte while a Hetzner box bundles tens of terabytes and Cloudflare R2 charges nothing to serve), an over-provisioned serverless database, and control-plane or NAT-gateway fees that no savings plan covers. Move the offending line onto a server you rent whole, front it with a CDN, and the bill collapses.

:::advice{slug="escape-per-unit-cloud-pricing" category="business" title="Cut a runaway cloud bill by escaping per-unit pricing" person="petru-popa"}
A dramatic cloud-cost cut is almost never one trick; it is killing the pricing model that punishes your specific workload. Read your bill by line item and find the charge that scales per unit for something a fixed box gives away: per-request serverless invocations (you also pay for cold starts), per-gigabyte egress (hyperscalers charge nine to fifteen cents a gigabyte while a Hetzner box bundles tens of terabytes and Cloudflare R2 charges nothing to serve), an over-provisioned serverless database, or control-plane and NAT-gateway fees that no savings plan covers. Move just that line onto a fixed box you rent whole, front it with a CDN, and the bill collapses. The honest caveat: you trade dollars for operational hours and you lose autoscaling, so the move only pays off when your load is predictable enough that you were buying idle serverless headroom anyway.
:::

## Ionut ships a synth, and a one-person studio around it

![Lost Synapse running its Laura polysynth](/screenshots/lostsynapse.png)

[Ionut](/people/ionut) closed the demos with the most different project of the night: [Laura](https://lostsynapse.store), a software synthesizer he builds in C and C++ on top of [JUCE](https://juce.com) and sells under his one-person studio, Lost Synapse. For anyone outside audio software, JUCE is the de facto standard C++ framework for building audio plugins, the effects and instruments that load inside a digital audio workstation like Ableton Live, Logic Pro, or FL Studio. You write the processing code once and JUCE exports the same codebase to every major plugin format across desktop and mobile, which is precisely the cross-platform, cross-format plumbing that would otherwise eat a solo developer's entire timeline. Laura ships as an AU, VST3, and standalone instrument for macOS and Windows.

The commercial shape is as much the lesson as the DSP. Laura is pitched at sound designers "who'd rather not learn another ecosystem": four oscillator engines under one signal path, a mod matrix, and a button that rolls the dice when inspiration is late. It sells for 69 dollars, one time, with lifetime updates and no telemetry, direct from the site or through Gumroad. That is the whole indie-audio thesis on one product page: a single technical founder, one well-scoped instrument, a perpetual license, and a promise ("one purchase, lifetime updates, every new build free, forever") that a subscription tool structurally cannot make.

:::advice{slug="niche-audio-plugin-as-a-product" category="product" title="A niche audio plugin is a textbook solo product" person="ionut"}
Audio plugins are an underrated indie category. A single technical builder can ship one well-scoped effect or instrument on a standard framework like JUCE, which handles the brutal cross-format, cross-platform plumbing (VST3, AU, AAX across Windows, macOS, and Linux) so you can focus on the sound. The economics fit one person: you sell perpetual licenses for 30 to 100 dollars directly to producers, the distribution channels already exist (KVR Audio, Plugin Boutique, YouTube and producer communities), and a perpetual framework license covers six figures of revenue before it costs you recurring money. The moat is not raw engineering, it is taste and DSP craft: a recognizable sound and a brand producers trust. Small, focused, and durable, which is exactly the kind of product that outlasts trends.
:::

## The night ends on the key question

With the demos done, the conversation converged on a problem several people in the room were living: BYOK, bring your own key. The idea is that instead of holding one central API key and billing users for the model usage, you ask each user to supply their own provider key (OpenAI, Anthropic, OpenRouter), store it, and make calls on their behalf, so they pay the model provider directly. Founders reach for it for one reason: it removes the unbounded inference bill that can bankrupt a thin AI wrapper the moment it scales.

The room's two complaints were the two halves of the BYOK problem. First, people are reluctant to hand over a key at all: pasting a long-lived secret into someone else's app raises the obvious questions of where it goes, whether it can be leaked, and whether someone can run up charges on it. Second, the setup is too heavy. Since OpenAI stopped handing out free credits in mid-2025, telling a new user to "go make an API key" now silently means "go add a credit card," which is a much bigger ask than it sounds and stalls signups before anyone sees value.

The resolution was about sequencing and audience, not a yes or no. Lead with a managed free tier on your own key so a new user reaches the aha moment with zero setup, then introduce BYOK as the upgrade for heavy users once the value, and the real cost, are obvious. If you must ask early, kill both frictions deliberately: replace copy-and-paste with a one-click OAuth flow (OpenRouter's authorization flow hands your app a user-scoped key without the user ever touching a raw secret), and be explicit about where the key lives, because "we never see it, it stays in your browser" is a genuine selling point when it is actually true. And the inversion worth remembering: the same key request that repels a consumer signup is, for an enterprise buyer, a litmus test for being enterprise-ready, because it means data sovereignty and their own negotiated provider pricing. Consumer and enterprise want opposite things from the same screen.

Which looped back to the thread under the whole evening. The products that landed hardest were the ones selling relief from a specific, expensive pain: a tax fine, a spam folder, a missed appointment, a 24,000 dollar bill. And nearly every roast was the same question asked six ways: how much friction are you allowed to put between a user and that relief? The answer, for tonight at least, was always less than you think.
