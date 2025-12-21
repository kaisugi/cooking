import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaisugi.github.io',
  base: '/cooking',
  integrations: [
    preact(),
    tailwind()
  ],
  output: 'static',
  build: {
    assets: '_astro'
  }
});
