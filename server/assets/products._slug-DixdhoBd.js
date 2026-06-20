import { n as products } from "./products-vQN18fm1.js";
import { t as Route } from "./products._slug-U2xYueoR.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
//#region src/routes/products.$slug.tsx?tsr-split=component
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "paper-texture border-b border-border",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "container-wide py-10 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/products",
						className: "hover:text-primary",
						children: "Products"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: product.name
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-wide pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 items-start",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-square rounded-2xl overflow-hidden bg-card border border-border",
					children: /* @__PURE__ */ jsx("img", {
						src: product.image,
						alt: product.name,
						width: 1024,
						height: 1024,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: product.category
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 font-serif text-4xl md:text-5xl leading-tight",
						children: product.name
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: product.tagline
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-foreground/80 leading-relaxed",
						children: product.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition shadow-sm",
							children: ["Request a Quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/94112698867",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition",
							children: [/* @__PURE__ */ jsx(MessageSquare, { className: "mr-2 h-4 w-4" }), " WhatsApp"]
						})]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 grid sm:grid-cols-2 gap-3 text-sm",
						children: [
							"BOI-approved exporter",
							"In-house QC lab",
							"Custom packaging",
							"FCL 20'/40' shipments"
						].map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-accent" }),
								" ",
								f
							]
						}, f))
					})
				] })]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide max-w-4xl",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Specifications"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-4xl",
						children: "Technical specifications"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 rounded-2xl border border-border overflow-hidden bg-card",
						children: /* @__PURE__ */ jsx("table", {
							className: "w-full text-sm",
							children: /* @__PURE__ */ jsx("tbody", { children: product.specs.map((s, i) => /* @__PURE__ */ jsxs("tr", {
								className: i % 2 === 0 ? "bg-card" : "bg-background",
								children: [/* @__PURE__ */ jsx("th", {
									className: "text-left px-6 py-4 font-medium text-muted-foreground w-1/3",
									children: s.label
								}), /* @__PURE__ */ jsx("td", {
									className: "px-6 py-4 text-foreground",
									children: s.value
								})]
							}, s.label)) })
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-card border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-serif text-3xl mb-8",
					children: "Related products"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: related.map((p) => /* @__PURE__ */ jsxs(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								className: "h-full w-full object-cover group-hover:scale-105 transition"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-5",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-xl",
								children: p.name
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground line-clamp-2",
								children: p.tagline
							})]
						})]
					}, p.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProductDetail as component };
