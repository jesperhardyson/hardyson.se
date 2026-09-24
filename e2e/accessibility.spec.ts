import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/projects/', '/projects/badvatten/', '/projects/tagradar/', '/contact/', '/en/', '/en/projects/', '/en/contact/'];

for (const path of pages) {
	test(`no axe violations on ${path}`, async ({ page }) => {
		await page.goto(path);
		const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
		expect(results.violations).toEqual([]);
	});
}
