---
title: "Tågradar"
description: "iOS- och iPadOS-app som visar alla tåg i Sverige live på en karta, byggd på Trafikverkets öppna data."
date: 2026-09-02
tags: ["Swift", "SwiftUI", "MapKit"]
repoUrl: "https://github.com/sebdanielsson/tagradar"
appStoreUrl: "https://apps.apple.com/se/app/t%C3%A5gradar/id6811171385"
thumbnail: "../../../assets/projects/tagradar-icon.jpg"
gallery:
  - "../../../assets/projects/tagradar-map.jpg"
  - "../../../assets/projects/tagradar-train.jpg"
  - "../../../assets/projects/tagradar-route.jpg"
  - "../../../assets/projects/tagradar-ipad.jpg"
order: 3
draft: false
---

Native iOS- och iPadOS-app som visar alla tåg i Sverige live på en karta,
låter dig slå upp tåg på nummer eller station och håller koll på dina
kommande resor – med notiser, Live Activities och widgets. Byggd med
SwiftUI och MapKit helt på Trafikverkets öppna data, utan tredjeparts­beroenden,
analys eller spårning.

Appen är byggd av [Sebastian Danielsson](https://github.com/sebdanielsson),
och jag har varit med och bidragit. Mina bidrag är bland annat:

- Riktig spårgeometri på kartan i stället för raka linjer mellan stationer
- Stationer på kartan, tågmarkörer som pekar i färdriktningen och inställda
  delsträckor i rött
- "Nära dig" med nästa avgångar från stationer i närheten, och senast visade
  tåg bredvid de sparade
- Automatiska TestFlight-leveranser och stabilare signering i CI
