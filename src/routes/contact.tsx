import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/site/blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Get a Quote Coba Peat Lanka" },
      {
        name: "description",
        content:
          "Request a quote for coco peat blocks, grow bags or coir products. Sri Lanka head office: 410/99 Bullers Road, Colombo 07. Phone: +94-11-2698867.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote, or just say hello."
        description="Tell us a little about what you need product, volume, destination and our team will respond within one business day."
      />

      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <div className="lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border">
            {sent ? (
              <div className="text-center py-16">
                <div className="grid place-items-center h-16 w-16 mx-auto rounded-full bg-accent/15 text-accent">
                  <Send className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-serif text-2xl">Thanks we'll be in touch</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your inquiry has been received. Our sales team typically responds within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <h2 className="font-serif text-2xl">Quote Request</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Company" name="company" />
                  <Field label="Country" name="country" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Product Interest" name="product" placeholder="e.g. 5kg blocks" />
                  <Field label="Quantity / FCL" name="quantity" placeholder="e.g. 1x40' HC" />
                </div>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Anything else we should know specs, destination port, timeline…"
                  />
                </label>
                <button
                  type="submit"
                  className="justify-self-start inline-flex items-center gap-2 rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition shadow-sm"
                >
                  Send Inquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <aside className="lg:col-span-2 space-y-5">
            <InfoCard icon={MapPin} title="Head Office (Colombo)" body={<>410/99, Bullers Road,<br />Colombo 07, Sri Lanka</>} />
            <InfoCard icon={MapPin} title="Factory (Kurunegala)" body={<>Dangaspitiya Industrial Park,<br />Kohilagedara, Kurunegala</>} />
            <InfoCard icon={Phone} title="Phone" body={<>+94-11-2698867<br />+94-11-2685135</>} />
            <InfoCard icon={Mail} title="Email" body="info@cobapeatlanka.com" />
            <a
              href="https://wa.me/94112698867"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white hover:brightness-110 transition"
            >
              <MessageCircle className="h-6 w-6" />
              <div>
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-xs opacity-90">Typical reply within minutes</div>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
            <iframe
              title="Coba Peat Lanka Colombo office"
              src="https://www.google.com/maps?q=Bullers+Road+Colombo+07&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
      <span className="grid place-items-center h-11 w-11 shrink-0 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="font-semibold text-sm">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
