// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// The articles section is hidden (no nav link, no homepage section) until an
// article is published in that language — keep its listing page out of the
// sitemap too until then.
/** @param {string} lang */
function hasPublishedArticles(lang) {
	const dir = `./src/content/articles/${lang}`;
	return readdirSync(dir)
		.filter((file) => file.endsWith('.md'))
		.some((file) => !/^draft:\s*true\s*$/m.test(readFileSync(`${dir}/${file}`, 'utf8')));
}
const hiddenArticlePaths = ['sv', 'en']
	.filter((lang) => !hasPublishedArticles(lang))
	.map((lang) => (lang === 'sv' ? '/articles/' : '/en/articles/'));

// https://astro.build/config
export default defineConfig({
	site: 'https://hardyson.se',
	integrations: [
		sitemap({
			filter: (page) => !hiddenArticlePaths.some((path) => new URL(page).pathname.startsWith(path)),
			i18n: {
				defaultLocale: 'sv',
				locales: { sv: 'sv-SE', en: 'en-US' },
			},
		}),
	],
	i18n: {
		locales: ['sv', 'en'],
		defaultLocale: 'sv',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
