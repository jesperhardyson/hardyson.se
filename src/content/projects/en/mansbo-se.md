---
title: "mansbo.se"
description: "The website for Månsbo, a village by the Dalälven river in Avesta municipality, Sweden."
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

The website for Månsbo, a village on the Dalälven river in Avesta
Municipality. It brings together articles and local history, a photo
gallery, a map, and the latest posts from the village's Facebook page.

**Features**

- Articles and pages about Månsbo's history, with featured articles on
  the homepage
- Photo gallery with a lightbox and photographer credits
- Interactive map showing where Månsbo is
- The latest posts from the village's Facebook page, right on the homepage
- Dark and light themes, an accessible mobile menu, and a custom 404 page

**Tech**

Built with Next.js (App Router) and Sanity as the CMS, deployed on Vercel.
All content is edited in an embedded Sanity Studio. Pages are built
statically but update instantly when something is published, through a
webhook that revalidates the affected pages. The map uses Leaflet, and SEO
is handled with a sitemap, per-page share images, and structured data for
articles.
