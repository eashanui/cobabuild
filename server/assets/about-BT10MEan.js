import { t as factory_default } from "./factory-D79cOz93.js";
import { n as PageHero, t as CTASection } from "./blocks-D4ASEEJW.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Boxes, FlaskConical, Sprout, Truck, Wrench } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var facilities = [
	{
		icon: Wrench,
		title: "Engineering Department",
		body: "Own engineering team designs, services and continuously improves every production line."
	},
	{
		icon: Boxes,
		title: "Machinery Parts Store",
		body: "On-site inventory of critical spares means our lines stay running no waiting on imports."
	},
	{
		icon: FlaskConical,
		title: "QC Laboratory",
		body: "Chartered chemists test EC, pH, moisture and physical properties on every batch."
	},
	{
		icon: Truck,
		title: "Loading Bay & Fleet",
		body: "Dedicated loading bays and our own fleet ensure containers reach Colombo Port on schedule."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "About Us",
			title: "A Sri Lankan family-run exporter, three decades strong.",
			description: "Founded in 1993, Coba Peat Lanka (Pvt) Ltd is one of Sri Lanka's most established BOI-approved direct exporters of coco peat and coir products. We've spent 30+ years refining every step from husk selection to factory loading so our growers can plant with confidence."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ jsx("img", {
					src: factory_default,
					alt: "Coba Peat Lanka factory",
					loading: "lazy",
					width: 1280,
					height: 896,
					className: "rounded-2xl shadow-xl"
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Our Story"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Built on coconut country, driven by craft."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 space-y-5 text-muted-foreground text-lg",
						children: [
							/* @__PURE__ */ jsx("p", { children: "Coba Peat Lanka began in 1993 in Kurunegala, the heart of Sri Lanka's coconut triangle. We started with a single processing line and a simple promise: deliver coco peat that growers could actually rely on, shipment after shipment." }),
							/* @__PURE__ */ jsx("p", { children: "Today we operate a fully integrated facility at the Dangaspitiya Industrial Park with our own engineering, QC lab and loading infrastructure and a head office in Colombo serving buyers across Australia, Japan, the UK, the USA and France." }),
							/* @__PURE__ */ jsx("p", { children: "We are BOI-approved (Board of Investment of Sri Lanka), which means our exports meet the country's most rigorous standards for foreign trade." })
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-card border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mb-12",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Factory & Facilities"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
							children: "Everything under one roof."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground text-lg",
							children: "Self-sufficient operations mean fewer delays, tighter QC, and total accountability for what leaves our gates."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 gap-5",
					children: facilities.map((f) => /* @__PURE__ */ jsxs("div", {
						className: "flex gap-5 p-6 rounded-2xl bg-background border border-border",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-xl",
							children: f.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.body
						})] })]
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsx(Sprout, { className: "h-10 w-10 text-accent mx-auto" }),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-5 font-serif text-3xl md:text-5xl leading-tight",
						children: "Nurturing soil, growing futures."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: "We make products from what would otherwise be coconut waste turning by-products into a renewable growing medium that helps growers around the world produce more food with less environmental impact. Sustainability isn't a marketing line for us; it's the entire business model."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Want to learn more about our capacity?",
			description: "Our team is happy to share production capacity, references and a full company profile.",
			primaryLabel: "Contact Sales",
			primaryTo: "/contact",
			secondaryLabel: "Download Profile",
			secondaryTo: "/downloads"
		})
	] });
}
//#endregion
export { AboutPage as component };
