---
title: "Badvatten"
description: "Nordisk app för att hitta badplatser i Sverige, Norge, Finland och Danmark, med realtidsdata om vattenkvalitet och vattentemperatur."
date: 2026-05-17
tags: ["React Native", "Expo", "Supabase"]
appStoreUrl: "https://apps.apple.com/se/app/badvatten-mina-badplatser/id6770287621"
playStoreUrl: "https://play.google.com/store/apps/details?id=se.badvatten.app"
webUrl: "https://badvatten.app"
thumbnail: "../../../assets/projects/badvatten-icon.jpg"
gallery:
  - "../../../assets/projects/badvatten-web.png"
  - "../../../assets/projects/badvatten-ios.jpg"
order: 1
draft: false
---

Nordisk app för att hitta badplatser i Sverige, Norge, Finland och
Danmark, med realtidsdata om vattenkvalitet och vattentemperatur. Finns
som iOS-app, Android-app och webbapp – så att du snabbt kan se om det går
att bada där du är i dag.

**Funktioner**

- Karta och lista över badplatser med vattenkvalitet, vatten- och
  lufttemperatur, väderprognos och faciliteter som toalett och parkering
- Favoriter med notiser när temperaturen eller vattenkvaliteten ändras,
  och ett personligt veckobrev med läget på dina badplatser
- Närmaste kollektivtrafikhållplatser och nästa avgångar, i alla fyra länder
- Användarbidrag: temperaturrapporter, foton, kommentarer och förslag på
  nya badplatser – med moderering innan de publiceras
- Badguiden med artiklar och topplistor, och ett socialt flöde där du
  kan hitta och följa andra badare

**Data och teknik**

Vattenkvaliteten kommer från Havs- och vattenmyndigheten för Sverige och
från EU:s badvattendata (EEA) för övriga länder, temperaturer från bland
annat SMHI och finska FMI, och faciliteter från OpenStreetMap. Schemalagda
Supabase Edge Functions hämtar och berikar datan och skickar notiser.

Mobilappen är byggd med React Native och Expo, webben med React och Vite,
och backend är Supabase (Postgres med PostGIS och row level security).
Byggen och releaser till App Store och Google Play går via EAS Build och
GitHub Actions.
