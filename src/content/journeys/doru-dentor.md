---
title: "Building Dentor in the Most Regulated Data Class There Is"
subtitle: "How a dental booking platform turned a GDPR constraint into a moat, and learned to sell in person"
person: "doru-bota"
date: 2026-06-08
lessons:
  - "In a regulated vertical, the data class is the real product spec"
  - "Sell the operational relief, not the feature list"
  - "Match the channel to the buyer, even when it does not scale"
  - "Turn compliance from a burden into a selling point"
  - "A hard-to-serve, regulated niche is a moat"
---

[Dentor](https://dentor.ro) looks, on the surface, like a simple product: a 24/7 online booking link for a dental clinic, automated SMS and email reminders, centralized patient records, and an auto-generated website. The clinic runs on software instead of a receptionist's notebook, for 245 lei a month. Underneath that simplicity is the hardest constraint I have ever built around.

![dentor.ro homepage](/screenshots/dentor.png)

## The data class is the product spec

The moment Dentor stores a diagnosis, a treatment, or a dental image, it is processing special-category health data under Article 9 of the GDPR. That is prohibited by default and allowed only on a specific lawful basis, with a higher bar than ordinary personal data: a data protection impact assessment, encryption and pseudonymization, access restricted to staff bound by confidentiality, and a signed data-processing agreement that makes me the processor to each clinic's controller. When I first presented Dentor, the room walked me straight into this, and they were right. The binding constraint on a product like this is not the feature set, it is the data class.

:::advice{slug="design-for-the-data-class-from-day-one" category="product" person="doru-bota" title="In a regulated vertical, the data class is the product spec"}
When Dentor stores diagnoses and dental images, it is handling special-category health data under Article 9 of the GDPR, which is prohibited by default and allowed only under strict conditions. For a vertical SaaS in a regulated space, that data class dictates the architecture before a single feature does: encryption, pseudonymization, access control, a DPIA, and a processor agreement are not add-ons, they are the schema. Find out which regulated data class you are touching before you design the first table, and let it shape the product from day one. Retrofitting compliance onto a finished app is far more expensive than building for it from the start.
:::

## Sell the relief, not the features

A dental clinic does not want "centralized patient records." It wants fewer phone calls interrupting treatments, fewer no-shows eating the schedule, and a website it never had to commission. Every time I led with features, eyes glazed over. When I led with the relief (the receptionist stops fielding booking calls, the no-show rate drops because the system reminds patients automatically) the owner leaned in.

:::advice{slug="sell-the-relief-not-the-feature-list" category="product" person="doru-bota" title="Sell the operational relief, not the feature list"}
Dentor's feature list (booking link, reminders, patient records, auto-generated site) means nothing to a dentist until it is translated into relief: fewer interrupting phone calls and fewer empty chairs from no-shows. Buyers do not purchase capabilities, they purchase the removal of a daily pain. Lead with the specific operational misery your product ends, in the buyer's own words, and keep the feature list for the spec page. The clinic owner does not care how it works; they care that Monday stops being chaos.
:::

## Cold email died, in-person sold

The expensive lesson came on the sales side. I polished the brand, tightened the copy, and ran the obvious first move: a cold email campaign. It produced nothing. What worked was the least scalable thing imaginable: walking into small and individual dental clinics and pitching the owner face to face. A dentist does not live in their inbox and will not trust a stranger's link, but they will trust a person standing in their waiting room who clearly understands their day.

:::advice{slug="match-the-channel-to-the-buyer" category="distribution" person="doru-bota" title="Match the channel to the buyer, even when it does not scale"}
Doru's cold email campaign for Dentor produced nothing; walking into clinics and pitching owners in person produced customers. Cold email is the default because it scales from a laptop, but it assumes a buyer who reads cold email and trusts links from strangers. A local, high-trust, offline buyer like a dentist is the opposite of that. The channel has to match where the buyer's trust actually lives, not your preference for staying behind a screen. Early on, the unscalable channel is often the only one that converts, so do it until you have proof and a reference list.
:::

## Compliance is a reason to buy

The interesting inversion is that the same GDPR burden that makes Dentor hard to build is something clinics are afraid of themselves. A clinic owner knows, vaguely, that mishandling patient data is dangerous, and most have no idea whether their current spreadsheet-and-WhatsApp setup is exposing them. A product that has visibly done the compliance work is not just safer, it is more attractive. The constraint became part of the pitch.

:::advice{slug="turn-compliance-into-a-selling-point" category="business" person="doru-bota" title="Turn compliance from a burden into a selling point"}
The Article 9 requirements that make Dentor expensive to build are the same requirements clinics are quietly anxious about for their own data handling. Done properly and shown honestly (not a "GDPR Compliant" badge, but a real, explained posture on consent and data protection), compliance becomes a reason to choose you over the informal setup a clinic uses today. In a regulated market, the burden everyone else avoids is the differentiator. Do the hard work, then let prospects see that you did it, because their fear of getting it wrong is part of why they will pay you.
:::

## The hard niche is the moat

The in-person grind is slow, but everything that makes Dentor hard (health-data compliance, slow offline buyers, an unscalable sales motion) is also what keeps casual competitors out. A market that punishes shortcuts and rewards patience is a market where a committed builder can win and then defend the position. The difficulty is not a reason to avoid the niche, it is the reason the niche is worth owning.

:::advice{slug="a-regulated-niche-is-a-moat" category="mindset" person="doru-bota" title="A hard-to-serve, regulated niche is a moat"}
Everything that makes Dentor hard (health-data compliance, slow offline buyers, in-person selling) is also what keeps casual competitors out. A market that punishes shortcuts and rewards patience is one where a committed builder can win and then defend the position. The difficulty is not a reason to avoid the niche, it is the reason the niche is worth owning. When you find a vertical where the barriers are real (regulation, trust, an unglamorous sales motion), the same walls that slow you down will keep the next person out once you are inside.
:::
