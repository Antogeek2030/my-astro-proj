// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://breakdownservicesnairobi.co.ke",
  integrations: [mdx(), sitemap(), robotsTxt()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});