// @ts-check
import { defineConfig } from 'astro/config';
import { readingtime } from './src/pages/api/readingtime.js';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [readingtime],
  },
  output: 'static',
  // @ts-ignore
  adapter: vercel(),
  integrations: [svelte()]
});