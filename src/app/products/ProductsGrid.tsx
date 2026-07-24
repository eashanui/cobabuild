"use client";

import { useState } from "react";
import { ProductCard } from "@/components/site/blocks";
import { products } from "@/lib/products";

const categories = [
  "All",
  "Coco Peat",
  "Growing Solutions",
  "Mulch & Substrate",
  "Coir Crafts",
  "Erosion Control",
  "Industrial",
];

export function ProductsGrid() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard
              key={p.slug}
              title={p.name}
              description={p.tagline}
              image={p.image}
              slug={p.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
