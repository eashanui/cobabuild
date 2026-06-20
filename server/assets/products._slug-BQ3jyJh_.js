import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/products.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-wide py-32 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-serif text-4xl",
		children: "Product not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/products",
		className: "mt-6 inline-block text-accent",
		children: "← Back to products"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
