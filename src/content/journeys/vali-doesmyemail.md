---
title: "doesmyemail.work: A Free Tool as the Top of the Funnel"
subtitle: "How a thirty-second email diagnosis becomes a lead magnet, and the same move grows a psychology app"
person: "vali"
date: 2026-06-09
lessons:
  - "Translate an invisible technical problem into plain English"
  - "For a free tool, the answer screen is the entire product"
  - "Never make a mobile user switch apps and come back"
  - "Reuse one top-of-funnel playbook across different products"
  - "Share real numbers; honesty earns trust and feedback"
---

[doesmyemail.work](https://doesmyemail.work) answers one plain question: does your email reach the inbox, or the spam folder? You hand it a domain, it scans your SPF, DKIM, DMARC, and MX records, and it tells you in plain English what is broken. No signup. It is free on purpose, because it is not the business. It is the top of the funnel.

![doesmyemail.work homepage](/screenshots/doesmyemail.png)

## Make the invisible problem legible

Email deliverability is an invisible, jargon-heavy problem. Most people have no idea what SPF or DKIM even are, only that something feels off when their emails get no replies. So the tool does not lecture. It translates: SPF becomes "does your domain say yes, I sent this," DKIM becomes "are your emails signed," DMARC becomes "do you have rules for handling fakes." Making the invisible problem legible is most of the value.

:::advice{slug="translate-jargon-into-plain-english" category="product" person="vali" title="Translate an invisible technical problem into plain English"}
doesmyemail.work could have reported "SPF: softfail, DKIM: none" like every other tool and helped no one. Instead it says "does your domain say yes, I sent this." Turning opaque jargon into a sentence a non-expert understands is not decoration, it is the product, because the user's real problem is that they cannot tell what is wrong. When your tool surfaces a technical diagnosis, spend the effort to say it in the user's language. The translation is often worth more than the diagnosis itself.
:::

## The answer screen is everything

A free tool lives or dies on one screen: the one where the user gets their answer. That is the activation moment, and it has to be effortless. The diagnostic part is easy. The active check (actually sending a test email to confirm mail flows end to end) is where it got fragile, especially on mobile, and that is where I learned the next lesson.

:::advice{slug="obsess-over-the-activation-screen" category="product" person="vali" title="For a free tool, the answer screen is the whole product"}
A free, no-signup tool has exactly one moment that matters: the screen where the user gets their result. Everything before it is setup and everything after it is upsell, but that one screen is where the user decides whether the tool was worth their time. For doesmyemail.work, the diagnosis screen is the product. Pour disproportionate care into that single moment (speed, clarity, zero friction) because a lead magnet that fumbles its activation screen never gets to the lead part.
:::

## Never make them switch apps

The active check originally showed a seed address with a "Copy" button and asked the user to switch to their mail app and send a message to it. On a phone, the hand-off from a browser tab to a native mail client is exactly where people lose the thread. The fix was concrete: replace the copy-and-switch dance with a single mailto link that pre-fills the recipient, the subject, and the body, collapsing two taps and a paste into one tap. Any hand-off between apps is a place users fall out.

:::advice{slug="remove-the-app-handoff" category="product" person="vali" title="Never make a mobile user switch apps and come back"}
doesmyemail.work asked mobile users to copy an address, switch to their mail app, paste, and send, and that hand-off is exactly where people abandoned the flow. The fix was a single mailto link that pre-fills everything, turning four steps into one tap. Every time you ask a user to leave your app, do something elsewhere, and return, you are betting they make it back, and on mobile many do not. Collapse cross-app hand-offs into one action wherever you can. The smoothest flow is the one that never leaves the screen.
:::

## The same move, a different product

doesmyemail.work is one application of a single idea: earn attention with something free and useful, then monetize behind it. I run the same playbook on [Dr. Ursula](https://drursula.ro), a React Native psychology and personal-development app I build for the psychotherapist Dr. Ursula Sandner. There the free top-of-funnel is short-form video, which earns real reach and puts the app in front of people who would never search for it, and I bring them back with short written insights delivered as gentle push notifications. Different audience, different product, same shape: free reach first, paid layer second.

:::advice{slug="one-playbook-many-products" category="distribution" person="vali" title="Reuse one top-of-funnel playbook across products"}
Valentin runs the same move twice: a free diagnostic tool fronts a business email product, and free short-form video fronts a consumer psychology app. Both start with something genuinely useful and free that earns attention, then attach the paid layer behind it. A distribution playbook that works is not single-use; once you have one that reliably earns attention, it transfers across very different products. Find your repeatable top-of-funnel motion, then apply it again instead of reinventing distribution for every launch.
:::

## Share the real numbers

Dr. Ursula sits at roughly 50 paying monthly actives on top of about 620 free ones. I share numbers like that openly, and it is not bravado. Honest numbers (including the unflattering ratio) earn more trust and far better feedback than vague claims of traction. People help you when they can see where you actually are.

:::advice{slug="share-the-real-numbers" category="mindset" person="vali" title="Share real numbers; honesty earns trust and feedback"}
Valentin will tell you Dr. Ursula has about 50 paying users on top of roughly 620 free ones, the exact ratio most founders hide. Sharing real numbers, including the ones that are not impressive yet, earns a kind of trust and a quality of feedback that polished vanity metrics never will. People can only help you with the real situation, and an audience that watches you build honestly becomes the audience that roots for you. Round numbers up in your head, not on the slide.
:::
