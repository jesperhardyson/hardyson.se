import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		url: z.string().url().optional(),
		order: z.number().default(99),
		draft: z.boolean().default(false),
	}),
});

const articles = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		readingMinutes: z.number(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, articles };
