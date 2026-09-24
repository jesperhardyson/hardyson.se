import { writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

// Writes src/data/e2e-summary.json, which the terminal panel on the homepage renders.
// Only runs when E2E_SUMMARY=1 (set by `npm run test:e2e`) so a filtered local run
// doesn't overwrite it. Deliberately has no durations, so CI can verify the committed
// file is up to date with a plain `git diff`.
export default class SummaryReporter implements Reporter {
	private results = new Map<string, { file: string; status: TestResult['status'] }>();

	onTestEnd(test: TestCase, result: TestResult) {
		this.results.set(test.id, { file: basename(test.location.file), status: result.status });
	}

	onEnd(result: FullResult) {
		if (process.env.E2E_SUMMARY !== '1' || result.status !== 'passed') return;

		const counts = new Map<string, number>();
		for (const { file, status } of this.results.values()) {
			if (status === 'passed') counts.set(file, (counts.get(file) ?? 0) + 1);
		}
		const files = [...counts.entries()]
			.map(([file, tests]) => ({ file, tests }))
			.sort((a, b) => a.file.localeCompare(b.file));
		const total = files.reduce((sum, f) => sum + f.tests, 0);

		writeFileSync('src/data/e2e-summary.json', `${JSON.stringify({ total, files }, null, '\t')}\n`);
	}
}
