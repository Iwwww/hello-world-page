import { defineConfig } from "vite";
import viteCompressionPlugin from "vite-plugin-compression";
import sitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    viteCompressionPlugin({ algorithm: "brotliCompress", threshold: 1024 }),
    sitemapPlugin({
      hostname: "https://hello-world-page-test.vercel.app",
      generateRobotsTxt: true,
      robots: [{ userAgent: "*", allow: "/" }],
    }),
  ],
});
