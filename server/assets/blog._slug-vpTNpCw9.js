import { t as posts } from "./posts-CzvWsTdY.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/blog.$slug.tsx
var $$splitComponentImporter = () => import("./blog._slug-Cawy8sVa.js");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-D3qT9D-A.js");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.post.title ?? "Post"} Coba Peat Lanka Blog` },
		{
			name: "description",
			content: loaderData?.post.excerpt ?? ""
		},
		{
			property: "og:title",
			content: loaderData?.post.title
		},
		{
			property: "og:image",
			content: loaderData?.post.image
		},
		{
			property: "og:type",
			content: "article"
		}
	] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
