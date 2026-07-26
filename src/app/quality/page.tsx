import type { Metadata } from "next";
import {
  FlaskConical,
  Award,
  ShieldCheck,
  BadgeDollarSign,
  PackageCheck,
  Handshake,
  Leaf,
  Cpu,
  Sparkles,
} from "lucide-react";
import { PageHero, CTASection } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Quality & Process",
  description:
    "In-house QC laboratory, chartered chemists, no-composting ultra-lightweight production process. BOI-approved Sri Lankan coco peat manufacturer.",
  openGraph: { title: "Quality & Process | Coba Peat Lanka", url: "/quality" },
  alternates: { canonical: "/quality" },
};

const steps = [
  { n: "01", title: "Husk Selection", body: "Sourced from Sri Lanka's coconut triangle and graded by hand." },
  { n: "02", title: "Processing", body: "Mechanical de-fibring and sieving produces clean peat and chips." },
  { n: "03", title: "Drying", body: "No-composting, ultra-lightweight drying method uniform moisture, no odour." },
  { n: "04", title: "QC Testing", body: "In-house lab tests EC, pH, moisture and physical properties." },
  { n: "05", title: "Packing", body: "Compressed into blocks, briquettes or bags to client specification." },
  { n: "06", title: "Export", body: "Loaded at our own bay, trucked to Colombo Port, shipped FCL worldwide." },
];

export default function QualityPage() {
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
            {
              icon: FlaskConical,
              title: "In-house QC lab",
              body: "Chartered chemists run EC, pH, moisture, and density tests on every batch.",
            },
            {
              icon: Award,
              title: "Chartered chemists",
              body: "Our QC team holds professional chartered qualifications not just lab technicians.",
            },
            {
              icon: ShieldCheck,
              title: "BOI-approved",
              body: "Registered with the Board of Investment of Sri Lanka for direct export.",
            },
          ].map((f) => (
            <div key={f.title} className="p-7 rounded-2xl bg-card border border-border">
              <f.icon className="h-9 w-9 text-accent" />
              <h3 className="mt-5 font-serif text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS TO SELECT */}
      <section className="section-y bg-muted/30 border-y border-border">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Reasons to select as supplier</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Reasons to Select Coba Peat Lanka as your “Full Partner” Supplier.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-8">
              We believe that our supply is your company&apos;s lifeline for sustainability and continued growth. To evaluate our performance as a supplier, below criteria will give you an accurate snapshot of our efficiency as a supplier for your business.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Fair Pricing Structure",
                text: "Balanced value with transparent pricing for long-term partnerships.",
                icon: BadgeDollarSign,
              },
              {
                title: "Assurance of Supply",
                text: "Reliable availability and consistent delivery planning for your operations.",
                icon: PackageCheck,
              },
              {
                title: "Responsiveness",
                text: "Fast communication and dependable support from enquiry to shipment.",
                icon: Handshake,
              },
              {
                title: "Ethically Made Products",
                text: "Responsibly sourced materials and a business approach built on integrity.",
                icon: Leaf,
              },
              {
                title: "Environment and Safety",
                text: "Processes designed to reduce impact while protecting people and product quality.",
                icon: ShieldCheck,
              },
              {
                title: "Technology",
                text: "Modern production and logistics capabilities supporting efficient execution.",
                icon: Cpu,
              },
              {
                title: "Quality",
                text: "Rigorous testing and superior standards built into every shipment.",
                icon: Sparkles,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-background p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
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
              <li
                key={s.n}
                className="relative p-7 rounded-2xl bg-background border border-border"
              >
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
            {["BOI Sri Lanka", "ISO 9001 (pending)", "Coir Council Member", "EDB Sri Lanka"].map(
              (c) => (
                <div
                  key={c}
                  className="aspect-video grid place-items-center rounded-xl bg-card border border-border p-4 text-sm font-medium text-muted-foreground"
                >
                  {c}
                </div>
              ),
            )}
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
