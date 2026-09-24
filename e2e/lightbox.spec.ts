import { expect, test, type Page } from '@playwright/test';

const visibleImageIndex = (page: Page) =>
	page.locator('.lightbox [data-lightbox-image]:visible').getAttribute('data-index');

test('opens, steps with arrow keys and closes with Escape', async ({ page }) => {
	await page.goto('/projects/mansbo-se/');
	const dialog = page.locator('dialog.lightbox');

	await page.locator('[data-lightbox-trigger]').first().click();
	await expect(dialog).toBeVisible();
	expect(await visibleImageIndex(page)).toBe('0');

	await page.keyboard.press('ArrowRight');
	expect(await visibleImageIndex(page)).toBe('1');
	await page.keyboard.press('ArrowLeft');
	await page.keyboard.press('ArrowLeft');
	expect(await visibleImageIndex(page)).toBe('2');

	await page.keyboard.press('Escape');
	await expect(dialog).toBeHidden();
});

test('arrow buttons and the close button work', async ({ page }) => {
	await page.goto('/projects/mansbo-se/');
	const dialog = page.locator('dialog.lightbox');

	await page.locator('[data-lightbox-trigger]').nth(1).click();
	await page.locator('[data-lightbox-next]').click();
	expect(await visibleImageIndex(page)).toBe('2');
	await page.locator('[data-lightbox-close]').click();
	await expect(dialog).toBeHidden();
});

test('still works after client-side navigation between projects', async ({ page }) => {
	// The gallery script only runs once per session under ClientRouter, so the bug this
	// guards against only shows up on the second gallery page visited without a reload.
	await page.goto('/projects/badvatten/');
	await page.locator('.back').click();
	await expect(page).toHaveURL('/projects/');
	await page.locator('a[href="/projects/mansbo-se/"]').first().click();
	await expect(page).toHaveURL('/projects/mansbo-se/');
	await page.locator('[data-lightbox-trigger]').first().click();
	await expect(page.locator('dialog.lightbox')).toBeVisible();
});
