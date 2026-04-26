import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://claimwatt.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      entryLimit: 5000,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: { defaultStrategy: 'hover' },
  compressHTML: true,
});
