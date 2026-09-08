export const defaultLang = 'sv';

export const languages = {
	sv: 'Svenska',
	en: 'English',
} as const;

export const ui = {
	sv: {
		'site.description': 'Jesper Hardyson — test automation engineer, testledare och systemutvecklare.',
		'nav.work': 'Projekt',
		'nav.about': 'Om mig',
		'nav.journal': 'Artiklar',
		'nav.contact': 'Kontakt',
		'nav.github': 'GitHub',
		'nav.all': 'Alla',

		'404.title': 'Sidan hittades inte',
		'404.message': 'Sidan du letar efter finns inte, eller så har den flyttats.',
		'404.cta': 'Till startsidan',

		'scrollTop.label': 'Till toppen',

		'hero.role': 'TEST AUTOMATION ENGINEER · TESTLEDARE · SYSTEMUTVECKLARE',
		'hero.h1.a': 'Jag bygger och',
		'hero.h1.accent': 'kvalitetssäkrar',
		'hero.h1.b': 'mjukvara.',
		'hero.sub':
			'Jag arbetar med test och testledning, testautomatisering av både gränssnitt och API, och systemutveckling — och bygger in kvalitet från krav till grön pipeline.',
		'hero.cta.primary': 'Se projekt',
		'hero.panel.file': 'PaymentTests.cs — dotnet test',
		'hero.panel.passed': 'Passed!',
		'hero.panel.tests': '128 tests',
		'hero.panel.total': ', 128 total',
		'hero.panel.duration': 'Duration: ',

		'about.eyebrow': '👋  OM MIG',
		'about.title': 'En testledare med utvecklarhjärta',
		'about.bio1':
			'Jag är Jesper 👋 — test automation engineer, testledare och systemutvecklare. Jag arbetar med test och testledning, testautomatisering av både gränssnitt och API, och systemutveckling.',
		'about.tools': '🛠️  VERKTYG & TEKNIK',

		'projects.eyebrow': '🧪  UTVALDA PROJEKT',
		'projects.title': 'Utvalda projekt',
		'projects.subtitle': 'Projekt jag har jobbat med.',
		'projects.cta': 'Se mer på GitHub',
		'projects.page.eyebrow': '🧪  PROJEKT',
		'projects.page.title': 'Saker jag byggt och testat',
		'projects.page.sub': 'Ett urval av projekt inom testautomatisering, utveckling och CI/CD. Varje projekt länkar till sitt repo på GitHub.',
		'projects.empty': 'Inga projekt att visa än.',

		'articles.eyebrow': '✍️  UTVALDA ARTIKLAR',
		'articles.title': 'Jag skriver om kod och kvalitet',
		'articles.seeAll': 'Se alla artiklar',
		'articles.page.eyebrow': '✍️  ARTIKLAR',
		'articles.page.title': 'Jag skriver om kod och kvalitet',
		'articles.page.sub': 'Tankar om testautomatisering, utveckling och att bygga in kvalitet — i praktiken, från verkliga projekt.',
		'articles.empty': 'Inga artiklar att visa än.',
		'articles.readingSuffix': 'min läsning',

		'contact.eyebrow': '✉️  KONTAKT',
		'contact.title': 'Låt oss prata',
		'contact.sub': 'Har du en roll, ett uppdrag eller bara en fråga? Hör av dig så återkommer jag så snart jag kan.',
		'contact.email': 'E-POST',

		'footer.copy': '© {year} Jesper Hardyson',
	},
	en: {
		'site.description': 'Jesper Hardyson — test automation engineer, test lead, and software developer.',
		'nav.work': 'Work',
		'nav.about': 'About',
		'nav.journal': 'Journal',
		'nav.contact': 'Contact',
		'nav.github': 'GitHub',
		'nav.all': 'All',

		'404.title': 'Page not found',
		'404.message': "The page you're looking for doesn't exist, or it's been moved.",
		'404.cta': 'Back home',

		'scrollTop.label': 'Back to top',

		'hero.role': 'TEST AUTOMATION ENGINEER · TEST LEAD · SOFTWARE DEVELOPER',
		'hero.h1.a': 'I build and',
		'hero.h1.accent': 'quality-assure',
		'hero.h1.b': 'software.',
		'hero.sub':
			"I work with testing and test management, test automation of both UI and API, and software development — building in quality from requirements to green pipeline.",
		'hero.cta.primary': 'See projects',
		'hero.panel.file': 'PaymentTests.cs — dotnet test',
		'hero.panel.passed': 'Passed!',
		'hero.panel.tests': '128 tests',
		'hero.panel.total': ', 128 total',
		'hero.panel.duration': 'Duration: ',

		'about.eyebrow': '👋  ABOUT ME',
		'about.title': 'A test lead with a developer heart',
		'about.bio1':
			"I'm Jesper 👋 — test automation engineer, test lead, and software developer. I work with testing and test management, test automation of both UI and API, and software development.",
		'about.tools': '🛠️  TOOLS & TECH',

		'projects.eyebrow': '🧪  FEATURED PROJECTS',
		'projects.title': 'Featured projects',
		'projects.subtitle': "Projects I've worked on.",
		'projects.cta': 'See more on GitHub',
		'projects.page.eyebrow': '🧪  PROJECTS',
		'projects.page.title': "Things I've built and tested",
		'projects.page.sub': 'A selection of projects in test automation, development, and CI/CD. Every project links to its repo on GitHub.',
		'projects.empty': 'No projects to show yet.',

		'articles.eyebrow': '✍️  FEATURED ARTICLES',
		'articles.title': 'I write about code and quality',
		'articles.seeAll': 'See all articles',
		'articles.page.eyebrow': '✍️  ARTICLES',
		'articles.page.title': 'I write about code and quality',
		'articles.page.sub': 'Thoughts on test automation, development, and building in quality — in practice, from real projects.',
		'articles.empty': 'No articles to show yet.',
		'articles.readingSuffix': 'min read',

		'contact.eyebrow': '✉️  CONTACT',
		'contact.title': "Let's talk",
		'contact.sub': "Have a role, an assignment, or just a question? Reach out and I'll get back to you as soon as I can.",
		'contact.email': 'EMAIL',

		'footer.copy': '© {year} Jesper Hardyson',
	},
} as const;

export const tools = [
	'C#',
	'.NET',
	'TypeScript',
	'Azure DevOps',
	'Selenium',
	'Playwright',
	'REST / API',
	'OpenShift',
	'SQL Server',
	'Git',
];

export const socials = {
	github: 'https://github.com/jesperhardyson',
	linkedin: 'https://linkedin.com/in/jesperhardyson',
	email: 'jesper@hardyson.se',
};
