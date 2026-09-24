---
title: "Badvatten"
description: "A Nordic app for finding swimming spots in Sweden, Norway, Finland, and Denmark, with real-time water quality and temperature data."
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

A Nordic app for finding swimming spots in Sweden, Norway, Finland, and
Denmark, with real-time water quality and temperature data. Available as
an iOS app, Android app, and web app – so you can quickly tell whether
it's a good day for a swim where you are.

**Features**

- Map and list of swimming spots with water quality, water and air
  temperature, weather forecast, and facilities like toilets and parking
- Favourites with notifications when temperature or water quality changes,
  plus a personal weekly newsletter on your spots
- Nearest public transport stops and next departures, in all four countries
- User contributions: temperature reports, photos, comments, and
  suggestions for new spots – moderated before they're published
- A swimming guide with articles and top lists, and a social feed where
  you can find and follow other swimmers

**Data and tech**

Water quality comes from the Swedish Agency for Marine and Water Management
for Sweden and from EU bathing water data (EEA) for the other countries,
temperatures from sources including SMHI and the Finnish Meteorological
Institute, and facilities from OpenStreetMap. Scheduled Supabase Edge
Functions fetch and enrich the data and send notifications.

The mobile app is built with React Native and Expo, the web app with React
and Vite, and the backend is Supabase (Postgres with PostGIS and row level
security). Builds and releases to the App Store and Google Play run through
EAS Build and GitHub Actions.
