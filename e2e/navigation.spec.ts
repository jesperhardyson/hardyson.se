import { expect, test } from '@playwright/test';

test('homepage loads in Swedish by default', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('lang', 'sv');
	await expect(page.locator('h1')).toBeVisible();
});

test('main navigation reaches projects and contact', async ({ page }) => {
	await page.goto('/');
	await page.locator('.nav').getByRole('link', { name: 'Projekt' }).click();
	await expect(page).toHaveURL('/projects/');
	await page.locator('.nav').getByRole('link', { name: 'Kontakt' }).click();
	await expect(page).toHaveURL('/contact/');
});

test('language switch keeps the current page', async ({ page }) => {
	await page.goto('/projects/badvatten/');
	await page.locator('details.lang summary').click();
	await page.locator('.lang-menu').getByRole('link', { name: 'EN' }).click();
	await expect(page).toHaveURL('/en/projects/badvatten/');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('articles are hidden from the navigation while none are published', async ({ page }) => {
	for (const path of ['/', '/en/']) {
		await page.goto(path);
		await expect(page.locator('.nav a[href*="/articles/"]')).toHaveCount(0);
	}
});

test('unknown routes get the 404 page', async ({ page }) => {
	const response = await page.goto('/finns-inte/');
	expect(response?.status()).toBe(404);
	await expect(page.locator('h1')).toHaveText('Sidan hittades inte');
});
