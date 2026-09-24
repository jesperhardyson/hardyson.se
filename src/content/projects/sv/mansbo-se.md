---
title: "mansbo.se"
description: "Webbplatsen för Månsbo, en ort vid Dalälven i Avesta kommun."
date: 2026-09-03
tags: ["Next.js", "Sanity", "Vercel"]
url: "https://www.mansbo.se"
repoUrl: "https://github.com/jesperhardyson/mansbo.se"
thumbnail: "../../../assets/projects/mansbo-screenshot.png"
gallery:
  - "../../../assets/projects/mansbo-screenshot.png"
  - "../../../assets/projects/mansbo-bilder.png"
  - "../../../assets/projects/mansbo-om.png"
order: 2
draft: false
---

Webbplatsen för Månsbo, en ort vid Dalälven i Avesta kommun. Samlar
artiklar och historia om orten, ett bildgalleri, en karta och de senaste
inläggen från byns Facebook-sida.

**Funktioner**

- Artiklar och sidor om Månsbos historia, med utvalda artiklar på startsidan
- Bildgalleri med lightbox och fotografkrediteringar
- Interaktiv karta som visar var Månsbo ligger
- De senaste inläggen från byns Facebook-sida direkt på startsidan
- Mörkt och ljust tema, tillgänglig mobilmeny och egen 404-sida

**Teknik**

Byggd med Next.js (App Router) och Sanity som CMS, driftsatt på Vercel.
Allt innehåll redigeras i ett inbyggt Sanity Studio. Sidorna byggs
statiskt men uppdateras direkt när något publiceras, via en webhook som
revaliderar rätt sidor. Kartan använder Leaflet, och SEO sköts med
sitemap, delningsbilder per sida och strukturerad data för artiklar.
