---
title: "Pace: Building the Tool That Makes the Right Interview the Easy One"
subtitle: "Why structured interviews win in the research and lose in practice, and how Pace closes the gap"
person: "flavius"
date: 2026-04-28
lessons:
  - "Encode the best practice so the correct path is the easy path"
  - "Automate the operational tax, never the human judgment"
  - "Score interview performance and job fit as separate axes"
  - "Finish the first product before chasing the adjacent one"
  - "Be the best tool for one vertical, not an acceptable one for all"
---

I came to hiring sideways: computer science and psychology first, then neuroscience and organizational behavior, then five years actually hiring for teams across Europe. The whole time, one thing nagged at me. We know what a good interview looks like, and almost nobody runs one. [Pace](https://hirewithpace.com), the first product from [Human Nature](https://humannature.earth), is my attempt to fix that.

![Pace hiring tool homepage](/screenshots/pace.gif)

## The gap between known and done

Structured interviews (the same questions, the same rubric, the same scoring across every candidate) are the single most validated predictor of on-the-job performance in the entire hiring research literature. And almost nobody runs them: not the agencies, not the startups, not big tech when you scratch the surface. I could not reliably run one myself under time pressure, even knowing exactly what it should look like. That gap, between the practice everyone agrees is right and the thing people actually do, is the product.

:::advice{slug="make-the-right-thing-the-default" category="product" person="flavius" title="Encode the best practice so the right path is the easy one"}
Everyone agrees structured interviews work, and almost nobody runs them, because doing it right is inconvenient under pressure. Pace closes that gap by building the framework into the workflow, so the structured interview becomes the path of least resistance instead of a discipline you have to summon. The richest product territory is any practice that experts endorse and operators skip because it is annoying: automated tests, double-entry bookkeeping, security keys, structured interviews. Build the tool that makes the correct thing the easy thing, and the onboarding pitch writes itself.
:::

## Automate the tax, not the judgment

The AI part of Pace is not a chatbot that decides who to hire. It runs beside the interviewer (a Chrome extension alongside Google Meet, with picture-in-picture and real-time transcription) so that by the end of the call the scorecard is mostly pre-filled and the recruiter just edits and signs off. I estimate it saves about 40 minutes per interview: scheduling, note-taking, write-ups, scorecard alignment. The human still makes the call. The machine removes the operational tax around it.

:::advice{slug="automate-the-tax-keep-the-judgment" category="product" person="flavius" title="Automate the operational tax, not the human judgment"}
Pace does not decide who gets hired; it removes the 40 minutes of note-taking, write-ups, and scorecard wrangling around each interview so the human can focus on judgment. For tools that sit on high-stakes human decisions, that line matters: automate the busywork that surrounds the decision, and leave the decision to the person. Buyers trust a tool that makes them faster far more than one that tries to replace their judgment, and the busywork is where the real time is lost anyway. Find the operational tax around the decision and kill it, but keep your hands off the decision itself.
:::

## Two axes, not one number

The framework Pace encodes is a two-part model from organizational psychology: every candidate is scored on interview performance and on job fit, as separate axes. A candidate who aces the technical questions but bombs the fit signal is a fundamentally different decision from one who does the opposite, and collapsing them into a single score is where most hiring processes quietly fail. Inside each axis, the emphasis is on problem-solving over memorized domain knowledge, because the people who win on trivia tend to underperform in the actual work.

:::advice{slug="separate-performance-from-fit" category="mindset" person="flavius" title="Score interview performance and job fit as separate axes"}
Pace scores every candidate on two independent axes: how they performed in the interview, and how well they fit the role. A strong performer who is a poor fit and a weak performer who is a great fit are different decisions, and averaging them into one number erases exactly the information you need. Whenever you are evaluating something multi-dimensional (a hire, a feature, a deal), resist the single composite score. Keep the axes separate so you can see the trade-off you are actually making instead of hiding it inside an average.
:::

## The adjacent product is a trap

While I was demoing Pace, I sketched a second idea: an automated code-assessment layer downstream of the interview, with repository integration, vulnerability scanning, AI-filtered results. The room's response was immediate and correct: do not ship it until Pace has paying customers. The adjacent product always looks more interesting than the one you actually need to close this quarter. That is precisely why it is dangerous.

:::advice{slug="finish-product-one-first" category="product" person="flavius" title="Finish the first product before chasing the adjacent one"}
Mid-demo, Flavius floated an exciting second product (automated code assessment) and the room told him to bury it until Pace has paying customers. The adjacent idea always looks more appealing than the one in front of you, because it is unspoiled by the boring work of actually closing customers. That appeal is the trap: every hour on product two is an hour product one does not get, and product one is the one that has to pay the bills. Write the second idea down, then go back to making the first one sell.
:::

## Be the best for one vertical

The sharpest challenge was about focus. Who is Pace for: internal HR, agency recruiters, hiring managers doing their own hiring? The room pushed me to go narrower still: be the best possible tool for technical interviews specifically (code tasks, system-design prompts, engineering panels) rather than an acceptable horizontal tool for every kind of role. Being the best product for one vertical beats being a tolerable product for all of them.

:::advice{slug="win-one-vertical-not-all-roles" category="business" person="flavius" title="Be the best tool for one vertical, not an acceptable one for all"}
Pace could try to serve every kind of hiring, or it could be the unmistakably best tool for technical interviews and own that vertical completely. A horizontal tool that is acceptable everywhere loses to a vertical tool that is excellent in one place, because the buyer in that place feels it was built for them. Narrowing the target sharpens the features, the copy, and the demo all at once. Pick the one vertical where you can be the obvious best choice, win it, and expand from a position of strength rather than spreading thin from the start.
:::
