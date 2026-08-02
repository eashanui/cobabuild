import { ProductCard } from "@/components/site/blocks";
import { products } from "@/lib/products";

export function ProductsGrid() {
  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
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
