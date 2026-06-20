import { t as grow_bags_default } from "./grow-bags-BnZNmkSb.js";
import { n as PageHero, t as CTASection } from "./blocks-D4ASEEJW.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Droplets, Leaf, Recycle, Wind } from "lucide-react";
//#region src/routes/why-coco-peat.tsx?tsr-split=component
var benefits = [
	{
		icon: Droplets,
		title: "Holds 8–10x its weight in water",
		body: "Dramatically reduces irrigation frequency compared to traditional soil."
	},
	{
		icon: Wind,
		title: "Excellent aeration",
		body: "Fibrous structure delivers oxygen to roots, accelerating plant growth."
	},
	{
		icon: Leaf,
		title: "Stable, near-neutral pH",
		body: "Naturally falls in the 5.5–6.5 range, ideal for most crops."
	},
	{
		icon: Recycle,
		title: "100% renewable",
		body: "A by-product of coconut processing no peat bogs harmed."
	}
];
function WhyPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Why Coco Peat",
			title: "The growing medium that grows on you.",
			description: "A renewable, sustainable replacement for peat moss with better water retention, aeration and root health than most traditional substrates."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ jsx("img", {
					src: grow_bags_default,
					alt: "Seedlings in coco peat grow bags",
					loading: "lazy",
					width: 1280,
					height: 896,
					className: "rounded-2xl shadow-xl"
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "What is it?"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "From coconut by-product to premium substrate."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-muted-foreground text-lg",
						children: "Coco peat (also called coir pith) is the fine, spongy material extracted from the husk between the outer shell and the coconut fibre. Once dried, washed and compressed, it becomes one of the most versatile growing media on the market."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground text-lg",
						children: "Unlike peat moss which is harvested from ancient peat bogs and cannot be replenished within human timescales coco peat is a fully renewable resource produced every year from the global coconut harvest."
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
					children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Benefits"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Why growers switch."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: benefits.map((b) => /* @__PURE__ */ jsxs("div", {
						className: "p-6 rounded-2xl bg-background border border-border",
						children: [
							/* @__PURE__ */ jsx(b.icon, { className: "h-8 w-8 text-accent" }),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-serif text-lg",
								children: b.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: b.body
							})
						]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mb-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Applications"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Where it's used."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							t: "Horticulture",
							b: "Container growing for ornamentals, vegetables and herbs."
						},
						{
							t: "Greenhouse Production",
							b: "Tomatoes, cucumbers, strawberries and soft fruit on grow bags."
						},
						{
							t: "Erosion Control",
							b: "Geotextiles and biologs for slopes, shorelines and restoration."
						},
						{
							t: "Hydroponics",
							b: "Excellent water-holding substrate for drip-fed systems."
						},
						{
							t: "Nursery Propagation",
							b: "Coir discs and plugs for seed starting and cuttings."
						},
						{
							t: "Landscaping & Mulch",
							b: "Decorative chips and mulch for water-wise gardens."
						}
					].map((a) => /* @__PURE__ */ jsxs("div", {
						className: "p-6 rounded-2xl border border-border bg-card",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-xl",
							children: a.t
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: a.b
						})]
					}, a.t))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Ready to spec coco peat into your operation?",
			description: "Tell us your crop, scale and target EC/pH we'll match you to the right product and grade.",
			primaryLabel: "Speak with our team",
			primaryTo: "/contact"
		})
	] });
}
//#endregion
export { WhyPage as component };
