import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://isel-leic-notes.pages.dev',
  adapter: cloudflare(),
  markdown: {
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
