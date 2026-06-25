import { defineNitroConfig } from "nitropack/config";
export default defineNitroConfig({
  preset: "node-server",
  crawlLinks: true,
  routes: ["/sitemap.xml"],
})
