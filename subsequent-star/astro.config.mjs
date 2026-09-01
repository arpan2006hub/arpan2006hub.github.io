// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://arpanbarik.tech', // Your Student Pack domain
  vite: {
    plugins: [tailwindcss()],
  },
});