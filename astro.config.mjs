import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://maverickspectacle.github.io',
  base: '/promethean-dissident',
  integrations: [
    starlight({
      title: 'My Docs',
    }),
  ],
});
