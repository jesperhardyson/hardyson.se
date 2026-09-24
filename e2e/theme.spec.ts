import { expect, test } from '@playwright/test';

test('defaults to the dark theme', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('toggle switches theme and persists across reloads', async ({ page }) => {
	await page.goto('/');
	await page.locator('[data-theme-toggle]').click();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('theme survives client-side navigation and the toggle still works after it', async ({ page }) => {
	await page.goto('/');
	await page.locator('[data-theme-toggle]').click();
	await page.locator('.nav').getByRole('link', { name: 'Projekt' }).click();
	await expect(page).toHaveURL('/projects/');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
	await page.locator('[data-theme-toggle]').click();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
