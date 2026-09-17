import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cooking.kaisugi.me',
  integrations: [
    preact(),
    tailwind()
  ],
  output: 'static',
  build: {
    assets: '_astro'
  }
});
