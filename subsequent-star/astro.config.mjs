// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://arpan2006hub.github.io',
  // If using a custom domain from Student Pack, change to:
  // site: 'https://yourdomain.com',
  vite: {
    plugins: [tailwindcss()],
  },
});