import { t as Route } from "./blog._slug-vpTNpCw9.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region src/routes/blog.$slug.tsx?tsr-split=component
function BlogPost() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs("article", {
		className: "paper-texture",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "container-wide pt-12 pb-6",
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " All posts"]
				})
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "container-wide max-w-3xl pt-4 pb-10",
				children: [
					/* @__PURE__ */ jsx("time", {
						className: "text-xs uppercase tracking-wider text-accent",
						children: new Date(post.date).toLocaleDateString("en-GB", {
							year: "numeric",
							month: "long",
							day: "numeric"
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 font-serif text-4xl md:text-6xl leading-tight",
						children: post.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-lg text-muted-foreground",
						children: post.excerpt
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "container-wide max-w-4xl",
				children: /* @__PURE__ */ jsx("img", {
					src: post.image,
					alt: post.title,
					className: "w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "container-wide max-w-3xl py-14 prose prose-lg",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-foreground/85 leading-relaxed text-lg",
					children: post.body
				})
			})
		]
	});
}
//#endregion
export { BlogPost as component };
