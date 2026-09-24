import { defineConfig, devices } from '@playwright/test';

// Runs against the production build (`npm run build` first) served by `astro preview`.
// PW_CHROMIUM_PATH lets sandboxes with a preinstalled Chromium skip `playwright install`.
export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	reporter: [['list'], ['./e2e/summary-reporter.ts']],
	use: {
		baseURL: 'http://localhost:4321',
		trace: 'retain-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
			},
		},
	],
	webServer: {
		command: 'npm run preview -- --port 4321',
		url: 'http://localhost:4321',
		// Astro auto-backgrounds `astro preview` when it detects an AI agent (e.g. Claude Code),
		// which makes the command exit immediately; this keeps it in the foreground.
		env: { ASTRO_PREVIEW_BACKGROUND: '1' },
		reuseExistingServer: !process.env.CI,
	},
});
