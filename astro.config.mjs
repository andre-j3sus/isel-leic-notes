import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { remarkFixRelativePaths } from './scripts/remark-fix-relative-paths.mjs';

export default defineConfig({
  site: 'https://isel-leic-notes.andrejesus.com',
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkFixRelativePaths],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
});
