import { t as productCategoryGrid } from "./products-vQN18fm1.js";
import { t as factory_default } from "./factory-D79cOz93.js";
import { a as TestimonialCard, i as StatBlock, r as ProductCard, t as CTASection } from "./blocks-D4ASEEJW.js";
import { t as hero_cocopeat_default } from "./hero-cocopeat-d5up0MWt.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CalendarCheck, Download, Factory, FlaskConical, Globe2, Leaf, Recycle, ShieldCheck, Sprout } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var markets = [
	{
		code: "AU",
		name: "Australia",
		primary: true
	},
	{
		code: "JP",
		name: "Japan"
	},
	{
		code: "GB",
		name: "United Kingdom"
	},
	{
		code: "US",
		name: "United States"
	},
	{
		code: "FR",
		name: "France"
	}
];
var testimonials = [
	{
		quote: "Coba Peat's consistency across shipments is what keeps us coming back. The EC and pH are exactly what we specify, every single container.",
		name: "Greenhouse Procurement Lead",
		role: "Horticulture Group, Australia"
	},
	{
		quote: "Their no-composting process delivers ultra-light blocks that expand uniformly. It's saved us hours of substrate prep each week.",
		name: "Nursery Operations Manager",
		role: "Tokyo, Japan"
	},
	{
		quote: "Reliable lead times, transparent QC reports, and a team that picks up the phone. A true B2B partner, not just a supplier.",
		name: "Imports Director",
		role: "Garden Supply Co., UK"
	}
];
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: hero_cocopeat_default,
					alt: "Coconut coir fibre and coco peat substrate",
					width: 1920,
					height: 1080,
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative container-wide pt-28 pb-24 md:pt-40 md:pb-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl text-background",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur border border-background/20 text-xs uppercase tracking-[0.2em] text-background/90",
							children: [/* @__PURE__ */ jsx(Leaf, { className: "h-3.5 w-3.5 text-gold" }), " Sri Lanka · Since 1993"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-background",
							children: [
								"Nurturing Soil,",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Growing Futures."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg md:text-xl text-background/85 max-w-xl",
							children: "Premium coco peat, grow bags and coir products manufactured at our BOI-approved facility and shipped directly to growers across five continents."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								className: "inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3.5 text-sm font-semibold hover:brightness-105 transition shadow-lg",
								children: ["Get a Quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/downloads",
								className: "inline-flex items-center justify-center rounded-md bg-background/10 backdrop-blur border border-background/30 text-background px-6 py-3.5 text-sm font-semibold hover:bg-background/20 transition",
								children: [/* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }), " Download Company Profile"]
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ jsx(StatBlock, {
						icon: CalendarCheck,
						value: "30+ years",
						label: "Established 1993"
					}),
					/* @__PURE__ */ jsx(StatBlock, {
						icon: ShieldCheck,
						value: "BOI-approved",
						label: "Direct Sri Lankan exporter"
					}),
					/* @__PURE__ */ jsx(StatBlock, {
						icon: Globe2,
						value: "5+ countries",
						label: "Australia, Japan, UK, USA, France"
					}),
					/* @__PURE__ */ jsx(StatBlock, {
						icon: FlaskConical,
						value: "In-house QC",
						label: "Chartered chemists & lab"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Our Range"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
							children: [
								"Coco peat & coir products,",
								/* @__PURE__ */ jsx("br", {}),
								"engineered for serious growers."
							]
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/products",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all",
						children: ["See all products ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: productCategoryGrid.map((p) => /* @__PURE__ */ jsx(ProductCard, { ...p }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-card border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("img", {
						src: factory_default,
						alt: "Coco peat factory floor",
						loading: "lazy",
						width: 1280,
						height: 896,
						className: "rounded-2xl shadow-xl"
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden md:block absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl max-w-[16rem]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-serif text-4xl text-gold",
							children: "100%"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 text-sm text-primary-foreground/80",
							children: "Self-sufficient factory with in-house engineering"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Why Coba Peat"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Three decades of doing it right."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-muted-foreground text-lg",
						children: "Every batch passes through our own facilities from harvest to QC to the loading bay. No outsourcing, no surprises."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 space-y-5",
						children: [
							{
								icon: Factory,
								title: "Self-sufficient factory",
								body: "Own engineering department and machinery parts store keep production running without third-party delays."
							},
							{
								icon: FlaskConical,
								title: "Chartered chemists & QC lab",
								body: "In-house testing for EC, pH, moisture and physical properties before every shipment leaves the yard."
							},
							{
								icon: Sprout,
								title: "No-composting, ultra-lightweight",
								body: "Our patented drying process produces uniformly light blocks that expand cleanly with no off-odours."
							},
							{
								icon: Recycle,
								title: "Eco-friendly & biodegradable",
								body: "100% renewable coconut by-products, packaged with biodegradable materials wherever possible."
							}
						].map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid place-items-center h-11 w-11 shrink-0 rounded-lg bg-accent/15 text-accent",
								children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-lg",
								children: f.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: f.body
							})] })]
						}, f.title))
					})
				] })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Export Markets"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Trusted on five continents."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
						children: "Australia is our largest and longest-running market but our containers arrive every week in nurseries, greenhouses and distribution hubs around the world."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto",
						children: markets.map((m) => /* @__PURE__ */ jsxs("div", {
							className: `relative p-6 rounded-2xl border transition ${m.primary ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105" : "bg-card border-border"}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `font-serif text-3xl ${m.primary ? "text-gold" : "text-primary"}`,
									children: m.code
								}),
								/* @__PURE__ */ jsx("div", {
									className: `mt-2 text-sm ${m.primary ? "text-primary-foreground/85" : "text-muted-foreground"}`,
									children: m.name
								}),
								m.primary && /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gold text-gold-foreground text-[10px] font-bold uppercase tracking-wider",
									children: "Primary"
								})
							]
						}, m.code))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/export",
						className: "mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all",
						children: ["Explore export logistics ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				]
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
						children: "In their words"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "What growers say about us."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: testimonials.map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, { ...t }, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			eyebrow: "Get the full picture",
			title: "Download our company profile.",
			description: "Detailed product specifications, certifications, capacity figures and shipping references everything your procurement team needs in one PDF.",
			primaryLabel: "Download PDF",
			primaryTo: "/downloads",
			secondaryLabel: "Talk to our team",
			secondaryTo: "/contact"
		})
	] });
}
//#endregion
export { HomePage as component };
