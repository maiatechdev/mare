# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and JS of our own, with no heavy frameworks. Google Fonts allowed. Site lives in `mare-landing/` (index.html + assets/).

## Users

Main reader: anyone evaluating M.A.R.É as a startup (investors, accelerator and program judges, partners). This is the startup's own website, not a page for a single program, so it never names a specific call or program in its copy. The page must also appeal to companies with environmental conditions to meet (the paying customers) and to government and fishing colonies (prefeituras, SEMA-BA, Colônia Z-34). Mostly opened on a phone, from a shared link.

## Product Purpose

M.A.R.É (Monitoramento de Alertas e Registros de Erosões) turns what fishers and shellfish gatherers see along the coast into reliable, geo-referenced data on coastal erosion. An AI agent on WhatsApp receives audio, photo and location. It transcribes, confirms what it understood, cross-checks with the tide (Navy tide table), waves (Copernicus Marine) and other reports, gives a confidence score, puts the point on the map without exposing who reported it, and sends an alert back to the fisher.

## Positioning

The people who see the sea advance first (artisanal fishing communities) become the monitoring network, through a channel they already use (WhatsApp), validated against public technical data, with something useful sent back to whoever reports. Fixed-station tools (CoastSnap) do not hear the community; complaint channels do not validate or build a time series.

## Operating Context

- Pilot: Ilhéus, north zone (São Miguel and São Domingos), with Colônia de Pescadores Z-34 (more than 6,000 members).
- Business: companies subscribe per monitored territory (stretch of about 5 km) and receive a continuous, auditable indicator for licensing and ESG. Part of the value goes back to the colonies as Rede Segura (support when the sea takes a fishing shed, ramp or beach stall). Government and the State use the dashboard to decide where not to build and where to contain erosion first.

## Capabilities and Constraints

- The agent is NOT in production. The WhatsApp conversation on the site is a simulation and must be labelled as one.
- Do not claim the community has already been consulted.
- All content in Portuguese (pt-BR), with no em dashes in the text.
- Market (TAM, SAM, SOM) comes before the competition section.
- Fields still open: contact e-mail, and the role of each team member (except the leader).
- Team photos: one file per person in `assets/equipe/` (gabriel.jpg, clara.jpg, stephanie.jpg, adailton.jpg, ana-bia.jpg, arthur.jpg, matheus.jpg, vivianne.jpg); the card shows initials until the photo exists.
- Copy may be rewritten for clarity, but facts, numbers, sources and the "estimate"/"simulation" warnings stay.

## Brand Commitments

- Name: M.A.R.É. Team: L'acqua by LAMIT (Liga Acadêmica de Maratonas, Inovação e Tecnologia da UCSAL, Salvador).
- The identity should grow out of the project's world (tide, coast, artisanal fishing, Bahia). No AI-template look, no purple gradient, no everything-centred layout, no emoji as icons.

## Evidence on Hand

- 2nd place at Ocean Hackathon® Salvador 2026, Challenge 6 "Olhos da Maré", with SEMA-BA as partner.
- Data (source: CNM): 1.9 million Brazilians affected and R$ 1.6 bi in losses from erosion, including coastal, 2013 to 2024. More than 4 km of coast eroding in Ilhéus (municipal decrees). 1/5 of the Bahia coast showing signs of erosion (SEMA-BA).
- Business estimates (always flagged as estimates): ticket of R$ 7,500 per territory per month; break-even with 5 territories by the end of 2028; TAM R$ 81 mi/year, SAM R$ 3.3 mi/year, SOM R$ 2.7 mi/year.
- Photo: `mare-landing/assets/equipe/equipe-ocean-hackathon.jpg` (team at the hackathon).
- None exist yet: testimonials, customers, partners beyond those named, results in production. Do not make them up.

## Product Principles

1. Listen to whoever lives on the coast first: community knowledge is the raw material.
2. Prove with data: every report is cross-checked and scored; every number shows its source.
3. Give something back to whoever reports: an alert and Rede Segura, never extraction.
4. Honesty about the stage: simulation is labelled as simulation, estimates as estimates.

## Accessibility & Inclusion

Light theme only (no dark mode, no theme toggle), WCAG AA contrast, visible focus, alt text on images, respect for prefers-reduced-motion. Mobile first. Light loading.
