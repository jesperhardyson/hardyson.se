import { getCollection } from 'astro:content';
import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export async function getProjectsForLang(lang: Lang) {
	const entries = await getCollection(
		'projects',
		({ id, data }) => id.startsWith(`${lang}/`) && !data.draft
	);
	return entries
		.map((entry) => ({ entry, slug: entry.id.slice(lang.length + 1) }))
		.sort((a, b) => a.entry.data.order - b.entry.data.order);
}

export async function getArticlesForLang(lang: Lang) {
	const entries = await getCollection(
		'articles',
		({ id, data }) => id.startsWith(`${lang}/`) && !data.draft
	);
	return entries
		.map((entry) => ({ entry, slug: entry.id.slice(lang.length + 1) }))
		.sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

const monthFormatter = {
	sv: new Intl.DateTimeFormat('sv-SE', { month: 'short', year: 'numeric' }),
	en: new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }),
} as const;

export function formatArticleDate(date: Date, lang: Lang) {
	const formatted = monthFormatter[lang].format(date);
	return formatted.replace('.', '').replace(/^(\p{L})/u, (c) => c.toUpperCase());
}
