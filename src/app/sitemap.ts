import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/lib/products";

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
    "/contact",
    "/downloads",
  ];

  const productPages = products.map((p) => `/products/${p.slug}`);

  return [...staticPages, ...productPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));
}
