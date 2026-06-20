import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Post"} Coba Peat Lanka Blog` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title },
      { property: "og:image", content: loaderData?.post.image },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-serif text-3xl">Post not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-accent">← Back to blog</Link>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article className="paper-texture">
      <div className="container-wide pt-12 pb-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
      </div>
      <header className="container-wide max-w-3xl pt-4 pb-10">
        <time className="text-xs uppercase tracking-wider text-accent">
          {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </time>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
      </header>
      <div className="container-wide max-w-4xl">
        <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl" />
      </div>
      <div className="container-wide max-w-3xl py-14 prose prose-lg">
        <p className="text-foreground/85 leading-relaxed text-lg">{post.body}</p>
      </div>
    </article>
  );
}
