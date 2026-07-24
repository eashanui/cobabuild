import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/logo_transparant.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/85 mt-20">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10  bg-white rounded-t-2xl text-accent-foreground">
               <img
            src={logoAsset}
            alt="Coba Peat Lanka logo"
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
          />
            </span>
            <div className="leading-tight">
              <div className="font-serif text-lg text-background">Coba Peat Lanka</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">
                (Pvt) Ltd · Since 1993
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-background/70 max-w-xs">
            Nurturing Soil, Growing Futures. BOI-approved direct exporter of premium coco peat
            and coir products from Sri Lanka.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid place-items-center h-9 w-9 rounded-full bg-background/10 hover:bg-accent transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-background font-serif text-base mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/quality", label: "Quality & Process" },
              { to: "/why-coco-peat", label: "Why Coco Peat" },
              { to: "/export", label: "Export Markets" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog & News" },
              { to: "/downloads", label: "Downloads" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-background font-serif text-base mb-4">Head Office</h4>
          <address className="not-italic text-sm space-y-3 text-background/75">
            <p className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              410/99, Bullers Road,
              <br />
              Colombo 07, Sri Lanka
            </p>
            <p className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              +94-11-2698867 / +94-11-2685135
            </p>
            <p className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              info@cobapeatlanka.com
            </p>
          </address>
        </div>

        <div>
          <h4 className="text-background font-serif text-base mb-4">Factory</h4>
          <address className="not-italic text-sm space-y-3 text-background/75">
            <p className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              Dangaspitiya Industrial Park,
              <br />
              Kohilagedara, Kurunegala
            </p>
          </address>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-4 py-2.5 text-sm font-semibold hover:brightness-105 transition"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Coba Peat Lanka (Pvt) Ltd. All rights reserved.</p>
          <p>BOI-approved · Exporting worldwide since 1993</p>
        </div>
      </div>
    </footer>
  );
}
