import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";


const homenav = [
  { label: "Home", to: "/" },
];

const productCategories = [
  { name: "Coco Peat Blocks", slug: "coco-peat-blocks" },
  { name: "Coco Peat Briquettes", slug: "coco-peat-briquettes" },
  { name: "Grow Bags", slug: "grow-bags" },
  { name: "Husk Chips & Mulch", slug: "husk-chips" },
  { name: "PNG Mix Blocks", slug: "png-mix-blocks" },
  { name: "Coir Pots & Hanging Baskets", slug: "coir-pots" },
  { name: "Coir Discs", slug: "coir-discs" },
  { name: "Geotextiles & Geo Logs", slug: "geotextiles" },
  { name: "Coba Living Dolls", slug: "living-dolls" },
  { name: "Activated Carbon & Charcoal", slug: "activated-carbon" },
];

const nav = [
  { label: "About", to: "/about" },
  { label: "Quality", to: "/quality" },
  { label: "Why Coco Peat", to: "/why-coco-peat" },
  { label: "Export", to: "/export" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight">Coba Peat Lanka</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Est. 1993
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          <div>
            {homenav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/85 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 text-foreground/85 hover:text-primary transition-colors py-2"
            >
              Products <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {productsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[28rem]">
                <div className="bg-card border border-border rounded-xl shadow-xl p-3 grid grid-cols-2 gap-1">
                  {productCategories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/products/$slug"
                      params={{ slug: c.slug }}
                      className="px-3 py-2 rounded-md text-sm text-foreground/85 hover:bg-muted hover:text-primary transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/85 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground hover:brightness-105 px-4 py-2.5 text-sm font-semibold shadow-sm transition"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-md hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 flex flex-col gap-1">
            {homenav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2.5 rounded-md hover:bg-muted"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
            <Link to="/products" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-muted font-medium">
              All Products
            </Link>
            <div className="pl-4 mb-2 grid grid-cols-1 gap-0.5">
              {productCategories.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-muted"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-4 py-3 text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
