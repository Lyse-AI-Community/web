// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],

  site: 'https://sparkslyse-community.github.io/',

  i18n: {
    defaultLocale: "fr",
    locales: ['fr', "en", 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});