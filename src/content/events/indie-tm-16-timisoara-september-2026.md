---
title: "Indie TM #16: An Army of Bots and a Fax That Must Stay Simple"
subtitle: "What we learned at our sixteenth meetup, where Raul opened eBaza's automations and Mircea walked SingleFax into HIPAA, WhatsApp, and a roast about staying simple"
date: 2026-09-03
location: "DevPlant Cowork, Timisoara"
link: "https://luma.com/hjcqdpof"
image: "/images/events/indie-tm-16.jpg"
presenters:
  - raul
  - mircea
---

Two weeks after [Indie TM #15](/events/indie-tm-15-timisoara-august-2026) where we talked about a compiler of Romanian bureaucracy, we went back to DevPlant. The sixteenth edition was a technical session: two builders, a long table, and a screen that spent the night on automations and a fax. [Raul](/people/raul) brought [eBaza](https://ebaza.ro). [Mircea](/people/mircea) brought [SingleFax](https://singlefax.com). The full first-person stories are in [Raul's eBaza journey](/journeys/raul-ebaza) and [Mircea's SingleFax journey](/journeys/mircea-singlefax). This recap is what the room did.

## Raul runs eBaza with an army of bots

![ebaza.ro homepage](/screenshots/ebaza.png)

[Raul](/people/raul) opened with the product the room already knew, then showed the operator layer around it. He writes code with AI tools and runs Google Ads. He also ran Meta, and that campaign pulled in people over 60 who wanted to finish an RCA renewal on WhatsApp. One of them sent photos of a 1990 driving licence that morning and asked if Raul was a person or a robot. Plate-to-VIN lookups were costing money, so he started asking for the chassis number instead. The grind sits on a set of bots: five outreach emails a day to Romanian firms, PostHog and the logs for bugs, click-through rates, YouTube timestamps.

He still wants to mount a giant binder on a car. The room laughed. The WhatsApp close was the part that stayed.

## Mircea brings the fax back, then the room asks it to stay stupid

![SingleFax homepage](/screenshots/singlefax.png)

[Mircea](/people/mircea) took the other half of the night. [SingleFax](https://singlefax.com) is still the $5 send: upload a file, enter a number, pay, done. Around that action he has added a lifetime number with credits and inactivity rules, a paid HIPAA lane that keeps medical faxes in the account instead of email, email-to-fax and WhatsApp-to-fax, a flow that faxes the IRS for an EIN, and a plan to charge for unlocking a received page. [ChatGPT](https://chatgpt.com) and micropayments on [Stripe](https://stripe.com) came up in the same stretch.

Someone in the room said the quiet part. The product used to be simple. It was getting complicated.

:::advice{slug="do-not-grow-past-the-five-dollar-action" category="product" person="mircea" title="Do not bury the five-dollar action under a suite"}
The room looked at email-to-fax, WhatsApp-to-fax, ChatGPT, HIPAA, an EIN flow, and a pay-to-unlock inbox, and heard a suite growing on top of upload, number, pay, send. Someone said it was getting complicated, that the product used to be simple. HIPAA can be a paid lane. A received page can sit behind a charge. Those are still one job. A pile of pipes is not. If a stranger cannot finish a fax in sixty seconds, you have left the weekend MVP. Keep the $5 action on the first screen. Put the rest behind a door the occasional sender never has to open.
:::

## Notes from the back of the room

The last half-hour was a pile of tools, not another demo. [Telnyx](https://telnyx.com) for bulk email at about 30 cents per thousand. [Typing Mind](https://www.typingmind.com), Tony Dinh's front end, for trying language models without marrying a chat app. Grok Bot, an in-house writer that drafts a daily post across more than one site. None of that needed a new product page. It needed a notebook.

## Sixteen editions in

Edition fifteen asked who pays before another feature. Edition sixteen asked a related question of two products that already work: how much automation you are allowed to pile on before the stranger in the first session gets lost. WhatsApp found Raul a buyer he had not designed for. The fax found new pipes and a roast. Automate the grind. Keep the product simple. See you at the seventeenth.
