import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Coba Peat Lanka Blog`,
      images: [post.image.src],
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="paper-texture">
      <div className="container-wide pt-12 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
      </div>
      <header className="container-wide max-w-3xl pt-4 pb-10">
        <time className="text-xs uppercase tracking-wider text-accent">
          {new Date(post.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
      </header>
      <div className="container-wide max-w-4xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>
      <div className="container-wide max-w-3xl py-14 prose prose-lg">
        <p className="text-foreground/85 leading-relaxed text-lg">{post.body}</p>
      </div>
    </article>
  );
}
