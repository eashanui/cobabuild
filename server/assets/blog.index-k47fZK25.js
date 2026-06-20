import { t as posts } from "./posts-CzvWsTdY.js";
import { n as PageHero } from "./blocks-D4ASEEJW.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.index.tsx?tsr-split=component
function BlogIndex() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Blog & News",
		title: "Field notes from the coir trade.",
		description: "Market updates, agronomy tips and the occasional story from the factory floor."
	}), /* @__PURE__ */ jsx("section", {
		className: "section-y",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-7",
			children: posts.map((p) => /* @__PURE__ */ jsxs(Link, {
				to: "/blog/$slug",
				params: { slug: p.slug },
				className: "group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-[16/10] overflow-hidden",
					children: /* @__PURE__ */ jsx("img", {
						src: p.image,
						alt: p.title,
						loading: "lazy",
						className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ jsx("time", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: new Date(p.date).toLocaleDateString("en-GB", {
								year: "numeric",
								month: "long",
								day: "numeric"
							})
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 font-serif text-xl leading-snug group-hover:text-primary transition",
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground line-clamp-3",
							children: p.excerpt
						})
					]
				})]
			}, p.slug))
		})
	})] });
}
//#endregion
export { BlogIndex as component };
