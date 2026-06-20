import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} Coba Peat Lanka` },
      {
        name: "description",
        content: loaderData?.product.description?.slice(0, 155) ?? "",
      },
      {
        property: "og:title",
        content: `${loaderData?.product.name ?? "Product"} Coba Peat Lanka`,
      },
      { property: "og:image", content: loaderData?.product.image },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-serif text-4xl">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block text-accent">
        ← Back to products
      </Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="paper-texture border-b border-border">
        <div className="container-wide py-10 text-sm text-muted-foreground">
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        <div className="container-wide pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition shadow-sm"
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/94112698867"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition"
              >
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {["BOI-approved exporter", "In-house QC lab", "Custom packaging", "FCL 20'/40' shipments"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="section-y">
        <div className="container-wide max-w-4xl">
          <span className="eyebrow">Specifications</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Technical specifications</h2>
          <div className="mt-8 rounded-2xl border border-border overflow-hidden bg-card">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((s: { label: string; value: string }, i: number) => (
                  <tr
                    key={s.label}
                    className={i % 2 === 0 ? "bg-card" : "bg-background"}
                  >
                    <th className="text-left px-6 py-4 font-medium text-muted-foreground w-1/3">
                      {s.label}
                    </th>
                    <td className="px-6 py-4 text-foreground">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <h2 className="font-serif text-3xl mb-8">Related products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
