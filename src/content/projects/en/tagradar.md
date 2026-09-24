---
title: "Tågradar"
description: "An iOS and iPadOS app that shows every train in Sweden live on a map, built on Trafikverket's open data."
date: 2026-09-02
tags: ["Swift", "SwiftUI", "MapKit"]
repoUrl: "https://github.com/sebdanielsson/tagradar"
appStoreUrl: "https://apps.apple.com/se/app/t%C3%A5gradar/id6811171385?l=en-GB"
thumbnail: "../../../assets/projects/tagradar-icon.jpg"
gallery:
  - "../../../assets/projects/tagradar-map.jpg"
  - "../../../assets/projects/tagradar-train.jpg"
  - "../../../assets/projects/tagradar-route.jpg"
  - "../../../assets/projects/tagradar-ipad.jpg"
order: 3
draft: false
---

A native iOS and iPadOS app that shows every train in Sweden live on a map,
lets you look up any train by number or station, and keeps track of your
upcoming trips – with notifications, Live Activities and widgets. Built with
SwiftUI and MapKit entirely on Trafikverket's open data, with no third-party
dependencies, analytics or tracking.

The app is built by [Sebastian Danielsson](https://github.com/sebdanielsson),
and I've been involved as a contributor. My contributions include:

- Real track geometry on the map instead of straight lines between stations
- Stations on the map, train markers pointing in the direction of travel, and
  cancelled legs drawn in red
- A "Near you" section with the next departures from nearby stations, and
  recently viewed trains alongside the saved ones
- Automated TestFlight deploys and more reliable code signing in CI
