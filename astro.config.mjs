// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Restoration Medical — parent practice site.
// Medical Aesthetics and Infusion Therapy live within this site as
// subdirectory route trees (/medical-aesthetics, /infusion-therapy) so all
// SEO authority consolidates onto a single domain.
export default defineConfig({
  site: 'https://restorationmedical.ca',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
