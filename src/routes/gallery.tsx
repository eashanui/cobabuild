import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import hero from "@/assets/hero-cocopeat.jpg";
import factory from "@/assets/factory.jpg";
import grow from "@/assets/grow-bags.jpg";
import blocks from "@/assets/product-blocks.jpg";
import husk from "@/assets/product-husk.jpg";
import fibre from "@/assets/product-fibre.jpg";
import growbag from "@/assets/product-growbag.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery Factory, Products & Shipments | Coba Peat Lanka" },
      { name: "description", content: "Visual tour of our factory, drying yard, QC lab, products and shipments." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, caption: "Raw coco peat & fibre", h: "tall" },
  { src: factory, caption: "Block storage at our Kurunegala factory" },
  { src: grow, caption: "Greenhouse trials in our grow bags", h: "tall" },
  { src: blocks, caption: "5kg compressed block" },
  { src: husk, caption: "Husk chips ready for baling" },
  { src: fibre, caption: "Coir craft and fibre products", h: "tall" },
  { src: growbag, caption: "Tomato production in Nature Grow Bags" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside our facility."
        description="A glimpse into our factory, drying yards, QC lab, products and shipments around the world."
      />
      <section className="section-y">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {items.map((it, i) => (
              <figure
                key={i}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-card border border-border group"
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className={`w-full object-cover ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} group-hover:scale-105 transition duration-500`}
                />
                <figcaption className="p-4 text-sm text-muted-foreground">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
