---
title: "Selling Security Where SaaS Cannot Follow"
subtitle: "Why AISafe ships into corporate networks and air-gapped deployments, and what that choice does to the company"
person: "fineas-silaghi"
date: 2026-05-02
lessons:
  - "Choose the market where SaaS competitors physically cannot follow you"
  - "A security product built from an attacker's eye knows where defenses break"
  - "The buyer is procurement and compliance, not just the engineer who runs it"
  - "An on-prem support reality reshapes the company, not just the price"
  - "Bring your hardest unanswered question to the room, not a polished pitch"
---

I spent years as a security researcher and CTF player, which is a polite way of saying I spent years diving headfirst into the hardest subjects to find ways to exploit them. These days I run AISafe Labs and ship [AISafe](https://aisafe.io), a security product. The part that shapes everything is where we sell it: not as a SaaS anyone can sign up for, but into corporate networks, regulated industries, and air-gapped deployments, the places where running someone else's cloud service is simply not an option.

![AISafe security product homepage](/screenshots/aisafe.gif)

When I took the floor at Indie TM #7 in Timisoara, I did not bring a pitch. I brought a question: how do you price an on-prem deployment? The product works. What I had not figured out was what it should cost to put it inside a customer's own network, behind their own compliance boundary, with their own audit trail. The room had concrete answers on the pricing math, but the more interesting conversation, for me, was everything around that question: why this market, why this background, and what selling into it does to the company you build.

## The constraint is the moat

Most security tools today run as SaaS, because it is cheaper and faster to build. That model works beautifully right up until your customer is a corporation that wants the tool inside its own four walls: its own network, its own compliance boundary, its own audit trail. For a SaaS competitor, that requirement is a wall they cannot climb without rebuilding their whole company. For us, it is the front door. We sell into the market where running as a SaaS is not an option, and the exact constraint that makes the work harder is the same constraint that keeps the easy competitors out.

:::advice{slug="the-constraint-is-the-moat" category="business" person="fineas-silaghi" title="Choose the market where SaaS competitors cannot follow"}
AISafe sells into corporate networks, regulated industries, and air-gapped deployments, environments where running as a SaaS is simply not an option. Most security competitors are SaaS-only because it is cheaper and faster to build, which means they physically cannot serve a buyer who needs the tool inside their own network and compliance boundary. Fineas treats that requirement not as a limitation to apologize for but as the moat itself: the constraint that makes the product harder to ship is the same constraint that locks the convenient competitors out. When a market punishes the lazy approach everyone else takes, being the one who does the hard version is the whole advantage.
:::

## Building security from an attacker's eye

I did not arrive at security through theory. I arrived through years of breaking things, of diving headfirst into the hardest subjects specifically to find how they could be exploited. That offensive instinct, the CTF habit of asking "where does this fall apart," is not a detour from building a security product, it is the foundation of it. When you have spent your career attacking systems, you know exactly which assumptions a defender quietly makes and which ones an attacker will walk straight through. That background shapes AISafe far more than any feature checklist could, because the product is built by someone who has spent years on the other side of it.

:::advice{slug="build-security-from-an-attackers-eye" category="product" person="fineas-silaghi" title="Build the security product from an attacker's eye"}
Fineas came to AISafe from offensive security: a researcher and CTF player whose habit was to dive into hard systems and find ways to exploit them. Building a security product on top of that background is an advantage, because the person designing it already knows which assumptions break under a real attack and which ones an attacker walks straight through. Founders who only ever read the documentation tend to protect against the threats they can imagine; founders who spent years attacking understand the threats that actually get used. If your edge is knowing how to break something, the strongest product you can build is the one shaped by that exact knowledge.
:::

## You are selling to procurement, not just the engineer

In a SaaS world the buyer and the user are often the same person clicking "start free trial." Selling into corporations is not like that, and the room made it concrete when the pricing conversation turned to budgets. A corporation of a certain size already has a budget line for tools in our category and a procurement team that is used to spending it. The people who decide are not only the engineers who would run AISafe; they are the procurement and compliance functions that care the tool stays inside their own network, respects their compliance boundary, and leaves a clean audit trail. They speak the language of risk, budget, and control rather than features, and learning to sell to them is a completely different skill from impressing the person who will actually use the software.

:::advice{slug="the-buyer-is-procurement-and-compliance" category="distribution" person="fineas-silaghi" title="Sell to procurement and compliance, not just the end user"}
For AISafe, the people who decide are not only the engineers who would run the tool; they are the procurement and compliance functions that sign off on it. The room made the point concrete on pricing: a corporation of a certain size already has a budget line for your category and a procurement team used to spending it, and those gatekeepers care that the software stays inside their network, respects their compliance boundary, and produces a clean audit trail. Fineas treats them as the actual customer, which means the pitch has to satisfy people who never touch the product but control whether it ships. When you sell into the enterprise, design the demo for the user and the paperwork for procurement, because both have to say yes.
:::

## The support reality reshapes the whole company

Here is the part that surprised me most, and the thing that turned a pricing question into a company-design question. Once your software lives inside a customer's network, you lose almost everything you take for granted in SaaS. No live logs without a ticket. No quiet hotfix without their change window. No telemetry at all unless you negotiated it into the contract. That changes far more than a price tag. It changes how you staff support, how you write the software so it can be debugged blind, how you ship updates, and how patient your whole engineering culture has to be. The on-prem support reality is not a line item you bolt on at the end, it is a force that quietly redesigns the company around it.

:::advice{slug="let-on-prem-support-reshape-the-company" category="business" person="fineas-silaghi" title="Let the on-prem support reality reshape the whole company"}
When AISafe runs inside a customer network, Fineas loses live logs, the freedom to hotfix, and any telemetry he did not contractually negotiate. Beyond what that does to the price, it reshapes how the company is built: support has to be staffed for blind debugging, the software has to be written to be diagnosable without a live connection, and the whole engineering culture has to absorb slower, more deliberate releases. Founders selling on-prem should treat the support model as an architectural and organizational decision, not only a pricing input. The way you will have to support the product after the sale should influence how you build the product and the team long before the first contract is signed.
:::

## Bring the question, not the pitch

I want to be honest about how that evening actually went, because it is the real lesson. I did not stand up with a deck and a closing line. I stood up with the one thing I genuinely had not solved: how to price an on-prem deployment when the product already works. Putting that unfinished question in front of a room of people who had shipped to enterprise customers got me two sharp answers that I would have circled for weeks on my own. The instinct to only present what is polished is exactly backwards. The polished parts do not need the room. The unsolved one does.

:::advice{slug="bring-your-hardest-question-to-the-room" category="mindset" person="fineas-silaghi" title="Bring your hardest unanswered question, not a polished pitch"}
At Indie TM #7, Fineas took the floor with a question rather than a pitch: how do you price an on-prem deployment when the product already works? Because he led with the thing he had genuinely not solved, the room full of people who had shipped enterprise software handed him two concrete answers instead of polite applause for a demo. The reflex to present only the finished, impressive parts wastes the room, because the finished parts do not need help. Walk in with the single hardest open question you have, and let the people who have already been where you are going do the part you cannot do alone.
:::

## What the pricing question was really about

I left the meetup with the pricing math I came for, but the bigger takeaway was that none of these threads are separate. Choosing the market where SaaS cannot follow, building from an attacker's background, selling to compliance, and designing the company around blind support are all the same decision seen from different angles. The on-prem price tag I still had to finish working out is just the most visible edge of a company shaped, top to bottom, by selling security exactly where the easy competitors are not allowed to go.
