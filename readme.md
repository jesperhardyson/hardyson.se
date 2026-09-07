# hardyson.se

## Struktur

```text
/
├── src/
│   ├── content/
│   │   └── projects/        # ett projekt per .md-fil
│   ├── content.config.ts    # schema för content collections
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       ├── index.astro
│       └── projects/[id].astro
└── public/
```

Nytt projekt läggs till genom att skapa en ny `.md`-fil i `src/content/projects/`
med frontmatter enligt schemat i `src/content.config.ts` (title, description,
date, tags, url, draft).

## Kommandon

| Kommando          | Gör                                          |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installerar beroenden                         |
| `npm run dev`        | Startar dev-server på `localhost:4321`        |
| `npm run build`      | Bygger produktionssidan till `./dist/`        |
| `npm run preview`    | Förhandsgranskar den byggda sidan lokalt      |
