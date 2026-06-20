import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Wind, Leaf, Recycle } from "lucide-react";
import growBagsImg from "@/assets/grow-bags.jpg";
import { PageHero, CTASection } from "@/components/site/blocks";

export const Route = createFileRoute("/why-coco-peat")({
  head: () => ({
    meta: [
      { title: "Why Coco Peat Benefits & Applications | Coba Peat Lanka" },
      {
        name: "description",
        content:
          "Coco peat is a renewable, peat-moss-free growing medium with superior water retention, aeration and pH stability. Learn how horticulture, greenhouse and erosion-control sectors use it.",
      },
      { property: "og:url", content: "/why-coco-peat" },
    ],
    links: [{ rel: "canonical", href: "/why-coco-peat" }],
  }),
  component: WhyPage,
});

const benefits = [
  { icon: Droplets, title: "Holds 8–10x its weight in water", body: "Dramatically reduces irrigation frequency compared to traditional soil." },
  { icon: Wind, title: "Excellent aeration", body: "Fibrous structure delivers oxygen to roots, accelerating plant growth." },
  { icon: Leaf, title: "Stable, near-neutral pH", body: "Naturally falls in the 5.5–6.5 range, ideal for most crops." },
  { icon: Recycle, title: "100% renewable", body: "A by-product of coconut processing no peat bogs harmed." },
];

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Coco Peat"
        title="The growing medium that grows on you."
        description="A renewable, sustainable replacement for peat moss with better water retention, aeration and root health than most traditional substrates."
      />

      {/* INTRO */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <img src={growBagsImg} alt="Seedlings in coco peat grow bags" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-xl" />
          <div>
            <span className="eyebrow">What is it?</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              From coconut by-product to premium substrate.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Coco peat (also called coir pith) is the fine, spongy material extracted from
              the husk between the outer shell and the coconut fibre. Once dried, washed and
              compressed, it becomes one of the most versatile growing media on the market.
            </p>
            <p className="mt-4 text-muted-foreground text-lg">
              Unlike peat moss which is harvested from ancient peat bogs and cannot be
              replenished within human timescales coco peat is a fully renewable resource
              produced every year from the global coconut harvest.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Benefits</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">Why growers switch.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-background border border-border">
                <b.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Applications</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">Where it's used.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Horticulture", b: "Container growing for ornamentals, vegetables and herbs." },
              { t: "Greenhouse Production", b: "Tomatoes, cucumbers, strawberries and soft fruit on grow bags." },
              { t: "Erosion Control", b: "Geotextiles and biologs for slopes, shorelines and restoration." },
              { t: "Hydroponics", b: "Excellent water-holding substrate for drip-fed systems." },
              { t: "Nursery Propagation", b: "Coir discs and plugs for seed starting and cuttings." },
              { t: "Landscaping & Mulch", b: "Decorative chips and mulch for water-wise gardens." },
            ].map((a) => (
              <div key={a.t} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-serif text-xl">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to spec coco peat into your operation?"
        description="Tell us your crop, scale and target EC/pH we'll match you to the right product and grade."
        primaryLabel="Speak with our team"
        primaryTo="/contact"
      />
    </>
  );
}
