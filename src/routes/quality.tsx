import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Award, ShieldCheck } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/blocks";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Process Coba Peat Lanka" },
      {
        name: "description",
        content:
          "In-house QC laboratory, chartered chemists, no-composting ultra-lightweight production process. BOI-approved Sri Lankan coco peat manufacturer.",
      },
      { property: "og:title", content: "Quality & Process Coba Peat Lanka" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

const steps = [
  { n: "01", title: "Husk Selection", body: "Sourced from Sri Lanka's coconut triangle and graded by hand." },
  { n: "02", title: "Processing", body: "Mechanical de-fibring and sieving produces clean peat and chips." },
  { n: "03", title: "Drying", body: "No-composting, ultra-lightweight drying method uniform moisture, no odour." },
  { n: "04", title: "QC Testing", body: "In-house lab tests EC, pH, moisture and physical properties." },
  { n: "05", title: "Packing", body: "Compressed into blocks, briquettes or bags to client specification." },
  { n: "06", title: "Export", body: "Loaded at our own bay, trucked to Colombo Port, shipped FCL worldwide." },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Process"
        title="A consistent product, by design."
        description="Every block that leaves our factory has been through six controlled stages and tested in our own lab. That's the only way we know how to do this."
      />

      {/* QC LAB */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-3 gap-6">
          {[
            { icon: FlaskConical, title: "In-house QC lab", body: "Chartered chemists run EC, pH, moisture, and density tests on every batch." },
            { icon: Award, title: "Chartered chemists", body: "Our QC team holds professional chartered qualifications not just lab technicians." },
            { icon: ShieldCheck, title: "BOI-approved", body: "Registered with the Board of Investment of Sri Lanka for direct export." },
          ].map((f) => (
            <div key={f.title} className="p-7 rounded-2xl bg-card border border-border">
              <f.icon className="h-9 w-9 text-accent" />
              <h3 className="mt-5 font-serif text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Process</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              From husk to export six stages.
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="relative p-7 rounded-2xl bg-background border border-border">
                <span className="font-serif text-5xl text-accent/30">{s.n}</span>
                <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-y">
        <div className="container-wide text-center">
          <span className="eyebrow">Certifications</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Trusted &amp; certified</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["BOI Sri Lanka", "ISO 9001 (pending)", "Coir Council Member", "EDB Sri Lanka"].map((c) => (
              <div key={c} className="aspect-video grid place-items-center rounded-xl bg-card border border-border p-4 text-sm font-medium text-muted-foreground">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a sample or test report?"
        description="We're happy to send a physical sample and a recent QC report so your agronomy team can verify our specifications first-hand."
        primaryLabel="Request a Sample"
        primaryTo="/contact"
      />
    </>
  );
}
