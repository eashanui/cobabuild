import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & News Coba Peat Lanka" },
      { name: "description", content: "Insights, market updates and growing tips from a 30-year coco peat exporter." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog & News"
        title="Field notes from the coir trade."
        description="Market updates, agronomy tips and the occasional story from the factory floor."
      />
      <section className="section-y">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <time className="text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h2 className="mt-2 font-serif text-xl leading-snug group-hover:text-primary transition">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
