// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  site: 'https://store.reksaperson.my.id',
  integrations: [sitemap()],
});