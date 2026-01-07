import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight'; // 1. Import the integration

export default defineConfig({
  site: 'https://maverickspectacle.github.io', 
  base: '/promethean-dissident',           
  integrations: [
    starlight({                      // 2. Add it to integrations
      title: 'My Documentation Site',
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Guide', link: '/guides/example/' },
      ],
    }),
  ],
});
