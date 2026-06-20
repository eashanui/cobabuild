import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Quote } from "lucide-react";
//#region src/components/site/blocks.tsx
function StatBlock({ icon: Icon, value, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start gap-4 p-5 rounded-xl bg-card border border-border",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-serif text-2xl text-foreground leading-none",
				children: value
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: label
			})]
		})]
	});
}
function ProductCard({ title, description, image, slug }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/products/$slug",
		params: { slug },
		className: "group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
		children: [/* @__PURE__ */ jsx("div", {
			className: "aspect-[4/3] overflow-hidden bg-muted",
			children: /* @__PURE__ */ jsx("img", {
				src: image,
				alt: title,
				loading: "lazy",
				className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-serif text-xl",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground line-clamp-2",
					children: description
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all",
					children: ["Explore ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
function TestimonialCard({ quote, name, role }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: "h-full p-7 rounded-2xl bg-card border border-border flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 text-accent/70" }),
			/* @__PURE__ */ jsxs("blockquote", {
				className: "mt-4 text-foreground/85 leading-relaxed font-serif text-lg flex-1",
				children: [
					"“",
					quote,
					"”"
				]
			}),
			/* @__PURE__ */ jsxs("figcaption", {
				className: "mt-6 pt-5 border-t border-border",
				children: [/* @__PURE__ */ jsx("div", {
					className: "font-semibold text-sm",
					children: name
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: role
				})]
			})
		]
	});
}
function CTASection({ eyebrow, title, description, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
	return /* @__PURE__ */ jsx("section", {
		className: "section-y",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" }), /* @__PURE__ */ jsxs("div", {
					className: "relative max-w-2xl",
					children: [
						eyebrow && /* @__PURE__ */ jsx("span", {
							className: "eyebrow text-gold",
							children: eyebrow
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-serif text-3xl md:text-5xl leading-tight text-primary-foreground",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-primary-foreground/80 text-lg max-w-xl",
							children: description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: primaryTo,
								className: "inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition",
								children: primaryLabel
							}), secondaryLabel && secondaryTo && /* @__PURE__ */ jsx(Link, {
								to: secondaryTo,
								className: "inline-flex items-center justify-center rounded-md border border-primary-foreground/30 text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition",
								children: secondaryLabel
							})]
						})
					]
				})]
			})
		})
	});
}
function PageHero({ eyebrow, title, description }) {
	return /* @__PURE__ */ jsx("section", {
		className: "paper-texture border-b border-border",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide pt-20 pb-14 md:pt-28 md:pb-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-serif text-4xl md:text-6xl leading-[1.05]",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg text-muted-foreground max-w-2xl",
						children: description
					})
				]
			})
		})
	});
}
//#endregion
export { TestimonialCard as a, StatBlock as i, PageHero as n, ProductCard as r, CTASection as t };
