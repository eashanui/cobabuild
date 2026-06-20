import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { products } from "@/lib/products";
import { posts } from "@/lib/posts";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/products",
          "/quality",
          "/why-coco-peat",
          "/export",
          "/gallery",
          "/blog",
          "/contact",
          "/downloads",
        ];
        const productPaths = products.map((p) => `/products/${p.slug}`);
        const postPaths = posts.map((p) => `/blog/${p.slug}`);
        const all = [...staticPaths, ...productPaths, ...postPaths];

        const urls = all
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
