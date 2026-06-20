import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-wide py-32 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-serif text-3xl",
		children: "Post not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/blog",
		className: "mt-4 inline-block text-accent",
		children: "← Back to blog"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
