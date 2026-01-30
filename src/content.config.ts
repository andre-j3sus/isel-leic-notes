import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Collection for all markdown notes
const notes = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!node_modules/**', '!dist/**', '!.astro/**', '!src/**'],
    base: './',
  }),
  // Allow any frontmatter structure or none at all
  schema: z.any(),
});

export const collections = { notes };
