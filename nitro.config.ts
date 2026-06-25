tsexport default defineNitroConfig({
  preset: "node-server",
  crawlLinks: true,
  routes: ["/sitemap.xml"],
})
