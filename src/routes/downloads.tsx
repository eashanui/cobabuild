import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { PageHero } from "@/components/site/blocks";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads Company Profile & Product Catalogue | Coba Peat Lanka" },
      { name: "description", content: "Download our company profile PDF and full product catalogue." },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const docs = [
  { title: "Company Profile", desc: "Our story, certifications, facilities, references and contact details.", size: "4.2 MB", file: "#" },
  { title: "Product Catalogue 2026", desc: "Full product range with technical specs, packaging and shipping options.", size: "8.7 MB", file: "#" },
  { title: "QC Report Sample", desc: "Example batch QC report for our 5kg High EC coco peat block.", size: "0.6 MB", file: "#" },
  { title: "Australia Buyer's Guide", desc: "AQIS compliance, sailing schedules and Incoterms reference for Australian buyers.", size: "1.8 MB", file: "#" },
];

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Everything procurement needs, in one place."
        description="Company profile, product catalogue, sample QC reports and market-specific buying guides."
      />
      <section className="section-y">
        <div className="container-wide grid sm:grid-cols-2 gap-6">
          {docs.map((d) => (
            <a
              key={d.title}
              href={d.file}
              className="group flex gap-5 p-7 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-accent transition"
            >
              <span className="grid place-items-center h-14 w-14 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <FileText className="h-6 w-6" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">PDF · {d.size}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Download <Download className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
