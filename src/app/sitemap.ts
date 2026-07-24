import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/lib/products";
import { posts } from "@/lib/posts";

const BASE_URL = "https://cobapeatlanka.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
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

  const productPages = products.map((p) => `/products/${p.slug}`);
  const blogPages = posts.map((p) => `/blog/${p.slug}`);

  return [...staticPages, ...productPages, ...blogPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));
}
