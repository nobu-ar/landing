import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "astro-sitemap";


export default defineConfig({
  integrations: [react(), tailwind(), sitemap()]
});