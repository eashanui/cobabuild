import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Boxes, FlaskConical, Truck, Sprout } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";
import { PageHero, CTASection } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Coba Peat Lanka | 30+ Years of Coir Exporting" },
      {
        name: "description",
        content:
          "Founded in 1993, Coba Peat Lanka is a BOI-approved Sri Lankan manufacturer of coco peat and coir products with in-house QC, engineering and exporting capabilities.",
      },
      { property: "og:title", content: "About Coba Peat Lanka" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const facilities = [
  {
    icon: Wrench,
    title: "Engineering Department",
    body: "Own engineering team designs, services and continuously improves every production line.",
  },
  {
    icon: Boxes,
    title: "Machinery Parts Store",
    body: "On-site inventory of critical spares means our lines stay running no waiting on imports.",
  },
  {
    icon: FlaskConical,
    title: "QC Laboratory",
    body: "Chartered chemists test EC, pH, moisture and physical properties on every batch.",
  },
  {
    icon: Truck,
    title: "Loading Bay & Fleet",
    body: "Dedicated loading bays and our own fleet ensure containers reach Colombo Port on schedule.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Sri Lankan family-run exporter, three decades strong."
        description="Founded in 1993, Coba Peat Lanka (Pvt) Ltd is one of Sri Lanka's most established BOI-approved direct exporters of coco peat and coir products. We've spent 30+ years refining every step from husk selection to factory loading so our growers can plant with confidence."
      />

      {/* STORY */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={factoryImg}
            alt="Coba Peat Lanka factory"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-2xl shadow-xl"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Built on coconut country, driven by craft.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg">
              <p>
                Coba Peat Lanka began in 1993 in Kurunegala, the heart of Sri Lanka's coconut
                triangle. We started with a single processing line and a simple promise: deliver
                coco peat that growers could actually rely on, shipment after shipment.
              </p>
              <p>
                Today we operate a fully integrated facility at the Dangaspitiya Industrial
                Park with our own engineering, QC lab and loading infrastructure and a
                head office in Colombo serving buyers across Australia, Japan, the UK, the USA
                and France.
              </p>
              <p>
                We are BOI-approved (Board of Investment of Sri Lanka), which means our exports
                meet the country's most rigorous standards for foreign trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Factory &amp; Facilities</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Everything under one roof.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Self-sufficient operations mean fewer delays, tighter QC, and total accountability
              for what leaves our gates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {facilities.map((f) => (
              <div key={f.title} className="flex gap-5 p-6 rounded-2xl bg-background border border-border">
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-y">
        <div className="container-wide max-w-3xl text-center">
          <Sprout className="h-10 w-10 text-accent mx-auto" />
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight">
            Nurturing soil, growing futures.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We make products from what would otherwise be coconut waste turning by-products
            into a renewable growing medium that helps growers around the world produce more
            food with less environmental impact. Sustainability isn't a marketing line for us;
            it's the entire business model.
          </p>
        </div>
      </section>

      <CTASection
        title="Want to learn more about our capacity?"
        description="Our team is happy to share production capacity, references and a full company profile."
        primaryLabel="Contact Sales"
        primaryTo="/contact"
        secondaryLabel="Download Profile"
        secondaryTo="/downloads"
      />
    </>
  );
}
