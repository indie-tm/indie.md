---
title: "Indie TM #10: Four Builds and the Reach Problem"
subtitle: "What we learned at our tenth meetup, this time at DevPlant in Timisoara"
date: 2026-06-10
location: "DevPlant, Timisoara"
link: "https://luma.com/12lw4hvj"
image: "/images/events/indie-tm-10.jpeg"
ogImage: "/images/events/indie-tm-10-og.png"
presenters:
  - mihai-balint
  - doru-bota
  - camil
  - vali
---

The tenth edition, and we leaned into the number: we held it on the tenth of the month, in a room we had not used before. We moved out of our usual home at Cowork and into DevPlant, another Timisoara coworking space, on a properly hot summer day that made the air conditioning the most appreciated feature in the building. Four builders presented. [Mihai](/people/mihai-balint) opened with the case for why a purpose-built OCR engine still beats a general AI model at reading documents. [Doru](/people/doru-bota) came back with [Dentor](https://dentor.ro) and a blunt update on what is actually selling it. [Camil](/people/camil) showed a desktop app that lifts any sound you can describe out of a video. [Valentin](/people/vali) closed with a psychology app and the growth loop he is using to turn free listeners into paying ones.

If the ninth meetup was about friction, the tenth was about reach. The technology in the room was solid across the board: the builds worked, the demos held up. The question that kept surfacing was the one that comes after the code runs, who has this problem and how do you get in front of them. Doru had the bluntest answer, learned the expensive way, and it set the tone for the night: the cold email went nowhere, walking into the clinic did.

## Mihai argues for OCR over a general LLM

![ocrskill.com homepage](/screenshots/ocrskill.png)

[Mihai](/people/mihai-balint) opened with [OCRskill](https://ocrskill.com) and the question everyone now asks about any document task: why build OCR at all when you could just hand the image to ChatGPT? His answer was specific and measured. For turning documents into structured data, a purpose-built OCR pipeline is both cheaper to run and, in his own testing, more accurate than any general model, including the Anthropic ones. OCRskill takes an image to clean markdown and pulls structured records out of sources like SEAP, Romania's public procurement portal (Sistemul Electronic de Achizitii Publice). The whole thing runs on bare metal in an air-conditioned room rather than on rented per-call GPUs, which is how the unit economics survive at volume.

The API design was the part the engineers in the room leaned toward. You do not write a prompt; you describe the fields you want, first name, last name, whatever the schema calls for, and the service returns structured output that matches it. Under the hood, PydanticAI drives an agent loop: it knows from the schema how to keep talking to the model until the result validates, so the caller gets a typed object instead of a paragraph it has to parse and pray over.

:::advice{slug="specialized-model-beats-general-llm" category="product" title="Reach for a purpose-built model before a general LLM" person="mihai-balint"}
The reflex in 2026 is to throw every task at the biggest available model, but for a narrow, repetitive job a specialized model often wins on both cost and accuracy. OCRskill turns documents into structured data more cheaply and, in head-to-head testing, more accurately than a frontier LLM, because reading a scanned form is exactly the bounded problem a dedicated OCR pipeline was built for. Before you assume the largest model is the answer, benchmark a purpose-built tool on your actual inputs: the general model is paying, on every call, for capabilities your task never uses. The lesson generalizes well beyond OCR. When the job is narrow and high-volume, the specialist usually beats the generalist on the only two numbers that matter, price per call and error rate.
:::

:::advice{slug="schema-driven-extraction-loop" category="product" title="Let the schema drive extraction, not the prompt" person="mihai-balint"}
When you extract structured data with a model, do not prompt-and-pray and then parse the prose. Define the output schema first and let a framework like PydanticAI run the model in a loop, feeding validation errors back in until the result conforms. OCRskill's API takes the fields you ask for and returns a typed object that already matches your schema, so the caller never writes brittle string parsing. The pattern turns an unreliable text generator into a dependable function: the schema is the contract, the loop is the enforcement, and the caller gets data instead of a paragraph. Any time you are tempted to regex an LLM's answer, reach for structured output with a validation loop instead.
:::

## Doru reports back on Dentor

![dentor.ro homepage](/screenshots/dentor.png)

[Doru](/people/doru-bota) brought [Dentor](https://dentor.ro) back to the room, one meetup after it first showed up at the ninth. Last time the conversation was about the health-data constraint that shapes the whole product. This time it was about sales, and the update was refreshingly free of spin. He had polished the brand, tightened the colors and the marketing copy, and then gone looking for customers. The cold email campaign, the obvious first move, produced nothing. What is working is the least scalable thing on the list: showing up in person at small and individual dental clinics and pitching the owner face to face.

:::advice{slug="go-in-person-when-cold-email-dies" category="distribution" title="When cold email dies, sell in person" person="doru-bota"}
Cold email is the default first channel because it scales from a laptop, but it assumes your buyer lives in their inbox and trusts a stranger's link. For a local, high-trust, offline buyer like a dentist, that assumption is wrong, and Doru found it out the direct way: the cold campaign produced nothing, walking into small clinics and pitching the owner produced customers. The uncomfortable truth for builders is that the channel has to match the buyer, not your preference for staying behind a screen. Early on, the least scalable channel is often the only one that converts, because in-person presence carries the trust a cold email cannot manufacture. Do the unscalable thing until you have proof and a reference list, then worry about scaling it.
:::

## Camil pulls any sound out of a video

![soundscrub.video homepage](/screenshots/soundscrub.png)

[Camil](/people/camil) demoed [SoundScrub](https://soundscrub.video), a desktop app with an unusually clean premise: describe a sound in plain words and it will remove that sound from your video, keep only that sound, or just turn it down. It is built on an open-source audio model (Meta's SAM Audio), wrapped in an Electron app with a Python backend that runs the model on RunPod GPUs. A nice privacy property falls out of the architecture: the video never leaves your machine, only the extracted audio is uploaded for processing, and it is deleted right after.

The origin story was the most relatable part. Camil had gone on holiday, filmed a lot of footage to show his parents, and come back with clips ruined by background noise. The fix started as a script he ran from the terminal, and the real question he brought to the room was the one every tinkerer eventually hits: this solves my problem, but is it a product? He decided it was, and built the desktop app for the much larger group of people who would never open a terminal.

He was honest about the edges. The prompt does a lot of work, and it has a hard limit: you can describe what the sound is (a dog barking, people speaking) but not where it sits in the frame. The longest clip he had run through it was about twenty minutes. And the comparison that made the room sit up was with DaVinci Resolve, the editor most of them use: its built-in tools do not isolate a specific sound anywhere near this cleanly.

:::advice{slug="single-purpose-tool-beats-suite-feature" category="product" title="A focused tool can beat a feature buried in a giant suite" person="camil"}
Every video editor already owns a do-everything suite, so the instinct is that a single-purpose tool has no room to exist. SoundScrub is the counterexample: it isolates and removes any sound you can name, and it does that one job noticeably better than the audio isolation built into DaVinci Resolve. Editors will keep their main editor and still pay for a focused tool when it does a specific painful task markedly better than the all-in-one does. The play is not to compete with the suite on breadth, it is to find the one operation the big tool does badly and own it completely. Depth on a single job beats breadth across many when the job hurts enough.
:::

:::advice{slug="sell-where-people-describe-the-problem" category="distribution" title="Sell where people already describe the problem" person="camil"}
You do not have to create demand for SoundScrub; people generate it daily in their own words. Travel vloggers get demonetized over background music, videographers fight wind and crowd noise, and they post the exact symptom on Reddit and YouTube: how do I remove this sound from my clip. The distribution move is to show up in those threads with a genuinely useful answer and a tasteful mention of the tool, because the audience that is already typing the problem is pre-qualified in a way no cold ad audience ever is. Search for the complaint, not the keyword: every post that describes your problem out loud is a warm lead and a free piece of validation. Be helpful first and the plug forgives itself.
:::

## Valentin grows Dr. Ursula

![Dr. Ursula on the App Store](/screenshots/drursula.png)

[Valentin](/people/vali) closed with [Dr. Ursula](https://drursula.ro), a psychology and personal-development app he builds in React Native for the psychotherapist Dr. Ursula Sandner. It packages her work, articles, audio, ebooks, and an AI chat assistant, into a mobile app with a free tier and paid tiers handled through RevenueCat. The numbers he shared were honest and instructive for anyone running a content app: roughly 50 paying monthly actives sitting on top of about 620 free ones.

The growth loop was the interesting half. Short-form video is doing the awareness work: the shorts get real reach and introduce the app to people who would never search for it. Then, to bring those people back without nagging them, he turns short written insights, pulled from the same social content, into push notifications, a sentence or two that lands on the lock screen quietly, there to be read whenever the user is ready rather than demanding attention in the moment.

:::advice{slug="short-form-video-for-awareness" category="distribution" title="Use short-form video for awareness, not conversion" person="vali"}
Short-form video is the cheapest reach available right now, but it is a top-of-funnel instrument, not a checkout. Valentin's shorts for Dr. Ursula earn real awareness, putting the app in front of people who would never type its name into a search box, and that is exactly the job to ask of them. The mistake is expecting a fifteen-second clip to close a sale; its purpose is to make a stranger aware the thing exists, then hand them to a funnel that does the converting. Measure shorts on reach and new awareness, not on direct installs, and build the step that turns that awareness into a user separately. Match the metric to the stage and the channel stops looking like it is underperforming.
:::

:::advice{slug="content-as-gentle-push-notifications" category="product" title="Repackage your content as push notifications that respect attention" person="vali"}
A push notification is usually an interruption, which is why people mute them; Valentin inverts that. He takes short written insights drawn from the app's own social content and sends them as notifications that sit quietly on the lock screen, a sentence or two to be read whenever the user is ready, not a demand for attention right now. That reframes the notification from a nag into a small gift, and it doubles as a retention loop that pulls people back into a content app without burning the goodwill that aggressive notifications destroy. The principle: the value has to be in the notification itself, not in the tap it is trying to extract. If the user would be glad to have read it even without opening the app, you have a retention channel; if not, you have an unsubscribe waiting to happen.
:::

## Ten editions in, the same question

Ten editions is enough to see the patterns repeat, and the tenth was a clean illustration of one: the building is rarely the bottleneck. Mihai's extraction pipeline, Camil's audio model, Valentin's app, all of it worked. What separated the night's stories was reach, the unglamorous and often unscalable work of getting in front of the exact people who feel the problem. Doru said it most plainly by accident, the cold email that went nowhere and the in-person pitch that landed, and the rest of the room was solving versions of the same puzzle: Camil in the Reddit threads, Valentin in the short-form feed, Mihai with a product so much cheaper than the alternative that the price itself does part of the selling. Strong tech is table stakes now. Distribution is the edition we keep coming back to.
