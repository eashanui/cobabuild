import { n as products } from "./products-vQN18fm1.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/products.$slug.tsx
var $$splitComponentImporter = () => import("./products._slug-DixdhoBd.js");
var $$splitNotFoundComponentImporter = () => import("./products._slug-BQ3jyJh_.js");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = products.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.product.name ?? "Product"} Coba Peat Lanka` },
		{
			name: "description",
			content: loaderData?.product.description?.slice(0, 155) ?? ""
		},
		{
			property: "og:title",
			content: `${loaderData?.product.name ?? "Product"} Coba Peat Lanka`
		},
		{
			property: "og:image",
			content: loaderData?.product.image
		}
	] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
