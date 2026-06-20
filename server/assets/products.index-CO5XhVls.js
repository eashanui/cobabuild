import { n as products } from "./products-vQN18fm1.js";
import { n as PageHero, r as ProductCard, t as CTASection } from "./blocks-D4ASEEJW.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/products.index.tsx?tsr-split=component
var categories = [
	"All",
	"Coco Peat",
	"Growing Solutions",
	"Mulch & Substrate",
	"Coir Crafts",
	"Erosion Control",
	"Industrial"
];
function ProductsPage() {
	const [active, setActive] = useState("All");
	const filtered = active === "All" ? products : products.filter((p) => p.category === active);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Our Products",
			title: "A complete coir catalogue, ready to ship.",
			description: "From compressed blocks for commercial greenhouses to artisan coir crafts for retail we manufacture, test and pack to your specification."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2 mb-10",
					children: categories.map((c) => /* @__PURE__ */ jsx("button", {
						onClick: () => setActive(c),
						className: `px-4 py-2 rounded-full text-sm font-medium border transition-all ${active === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"}`,
						children: c
					}, c))
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filtered.map((p) => /* @__PURE__ */ jsx(ProductCard, {
						title: p.name,
						description: p.tagline,
						image: p.image,
						slug: p.slug
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Need a custom blend or packaging?",
			description: "We regularly run custom EC, pH, mix ratios and private-label packaging for buyers across multiple markets. Tell us what you need.",
			primaryLabel: "Request a Quote",
			primaryTo: "/contact",
			secondaryLabel: "Download Catalogue",
			secondaryTo: "/downloads"
		})
	] });
}
//#endregion
export { ProductsPage as component };
