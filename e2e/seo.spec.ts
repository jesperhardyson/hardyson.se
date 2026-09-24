import { expect, test } from '@playwright/test';

test('pages have canonical and hreflang alternates', async ({ page }) => {
	await page.goto('/en/projects/');
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://hardyson.se/en/projects/');
	await expect(page.locator('link[hreflang="sv"]')).toHaveAttribute('href', 'https://hardyson.se/projects/');
	await expect(page.locator('link[hreflang="en"]')).toHaveAttribute('href', 'https://hardyson.se/en/projects/');
	await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute('href', 'https://hardyson.se/projects/');
});

test('project pages use their own Open Graph image', async ({ page, request }) => {
	await page.goto('/projects/badvatten/');
	await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
	const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
	expect(ogImage).toMatch(/^https:\/\/hardyson\.se\/_astro\/.+\.jpg$/);

	const response = await request.get(new URL(ogImage!).pathname);
	expect(response.ok()).toBe(true);
});

test('homepage has Person structured data', async ({ page }) => {
	await page.goto('/');
	const json = await page.locator('script[type="application/ld+json"]').textContent();
	expect(JSON.parse(json!)).toMatchObject({ '@type': 'Person', name: 'Jesper Hardyson' });
});
