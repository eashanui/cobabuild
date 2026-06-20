import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, ProductCard, CTASection } from "@/components/site/blocks";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products Coco Peat, Grow Bags & Coir | Coba Peat Lanka" },
      {
        name: "description",
        content:
          "Browse our full range of coco peat blocks, briquettes, grow bags, husk chips, coir pots, geotextiles and more all manufactured in Sri Lanka and exported worldwide.",
      },
      { property: "og:title", content: "Products Coba Peat Lanka" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const categories = ["All", "Coco Peat", "Growing Solutions", "Mulch & Substrate", "Coir Crafts", "Erosion Control", "Industrial"];

function ProductsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="A complete coir catalogue, ready to ship."
        description="From compressed blocks for commercial greenhouses to artisan coir crafts for retail we manufacture, test and pack to your specification."
      />

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

      <CTASection
        title="Need a custom blend or packaging?"
        description="We regularly run custom EC, pH, mix ratios and private-label packaging for buyers across multiple markets. Tell us what you need."
        primaryLabel="Request a Quote"
        primaryTo="/contact"
        secondaryLabel="Download Catalogue"
        secondaryTo="/downloads"
      />
    </>
  );
}
